const CACHE_VERSION = 'v6';
const CACHE_PREFIX = 'spectrix';
const SHELL_CACHE = `${CACHE_PREFIX}-shell-${CACHE_VERSION}`;
const PAGE_CACHE = `${CACHE_PREFIX}-pages-${CACHE_VERSION}`;
const ASSET_CACHE = `${CACHE_PREFIX}-assets-${CACHE_VERSION}`;
const IMAGE_CACHE = `${CACHE_PREFIX}-images-${CACHE_VERSION}`;

const APP_SHELL = [
  '/',
  '/index.html',
  '/site.webmanifest',
  '/favicon.ico',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/favicon-48x48.png',
  '/apple-touch-icon.png',
  '/apple-touch-icon-180x180.png',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png'
];

const WORKER_HOST = ['hac', 'koai-worker.tariqmtaezeem.workers.dev'].join('');
const BYPASS_HOSTS = [WORKER_HOST, 'puter.com', 'firestore.googleapis.com', 'www.googleapis.com'];
const MAX_ASSET_ITEMS = 180;
const MAX_IMAGE_ITEMS = 100;

const OFFLINE_HTML = `
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Spectrix Offline</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; background:#020617; color:#e5e7eb; display:flex; align-items:center; justify-content:center; min-height:100vh; margin:0; }
    .card { width:min(92vw, 460px); background:#0f172a; border:1px solid #1f2937; border-radius:16px; padding:20px; box-shadow:0 20px 44px rgba(0,0,0,.4); }
    h1 { margin:0 0 10px; font-size:20px; }
    p { margin:0; color:#94a3b8; line-height:1.5; }
  </style>
</head>
<body>
  <div class="card">
    <h1>🔌 You are offline</h1>
    <p>Spectrix can still load your locally saved chat history. AI generation needs internet and resumes automatically when back online.</p>
  </div>
</body>
</html>
`;

function shouldBypass(url) {
  return BYPASS_HOSTS.some((host) => url.hostname.includes(host));
}

async function trimCache(cacheName, maxItems) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  if (keys.length <= maxItems) return;
  const overflow = keys.length - maxItems;
  await Promise.all(keys.slice(0, overflow).map((request) => cache.delete(request)));
}

async function notifyClients(message) {
  const clients = await self.clients.matchAll({ includeUncontrolled: true, type: 'window' });
  clients.forEach((client) => client.postMessage(message));
}

async function putInCache(cacheName, request, response) {
  if (!response || (!response.ok && response.type !== 'opaque')) return;
  const cache = await caches.open(cacheName);
  await cache.put(request, response.clone());
}

async function staleWhileRevalidate(event, cacheName, maxItems) {
  const { request } = event;
  const cached = await caches.match(request);
  const networkPromise = fetch(request)
    .then(async (response) => {
      await putInCache(cacheName, request, response);
      if (maxItems) {
        await trimCache(cacheName, maxItems);
      }
      return response;
    })
    .catch(() => cached || Response.error());

  if (cached) {
    event.waitUntil(networkPromise);
  }
  return cached || networkPromise;
}

async function cacheFirst(request, cacheName, maxItems) {
  const cached = await caches.match(request);
  if (cached) return cached;

  const response = await fetch(request);
  await putInCache(cacheName, request, response);
  if (maxItems) {
    await trimCache(cacheName, maxItems);
  }
  return response;
}

async function networkFirstNavigation(event) {
  const { request } = event;

  try {
    const preload = await event.preloadResponse;
    if (preload) {
      await putInCache(PAGE_CACHE, request, preload);
      return preload;
    }

    const network = await fetch(request);
    await putInCache(PAGE_CACHE, request, network);
    return network;
  } catch {
    const cachedPage = await caches.match(request);
    if (cachedPage) return cachedPage;

    const cachedShell = await caches.match('/index.html');
    if (cachedShell) return cachedShell;

    return new Response(OFFLINE_HTML, {
      headers: { 'Content-Type': 'text/html; charset=UTF-8' }
    });
  }
}

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(SHELL_CACHE);
    await Promise.allSettled(APP_SHELL.map((asset) => cache.add(asset)));
  })());
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keep = new Set([SHELL_CACHE, PAGE_CACHE, ASSET_CACHE, IMAGE_CACHE]);
    const keys = await caches.keys();
    await Promise.all(keys
      .filter((key) => key.startsWith(`${CACHE_PREFIX}-`) && !keep.has(key))
      .map((key) => caches.delete(key))
    );

    if ('navigationPreload' in self.registration) {
      await self.registration.navigationPreload.enable();
    }

    await self.clients.claim();
    await notifyClients({ type: 'SW_ACTIVE', version: CACHE_VERSION });
  })());
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (!['http:', 'https:'].includes(url.protocol)) return;
  if (shouldBypass(url)) return;

  if (request.mode === 'navigate') {
    event.respondWith(networkFirstNavigation(event));
    return;
  }

  if (request.destination === 'image') {
  // Use staleWhileRevalidate for favicons so they always update
  const isFavicon = url.pathname.includes('favicon') || url.pathname.includes('apple-touch-icon') || url.pathname.includes('android-chrome');
  if (isFavicon) {
    event.respondWith(staleWhileRevalidate(event, SHELL_CACHE, null));
    return;
  }
  event.respondWith(cacheFirst(request, IMAGE_CACHE, MAX_IMAGE_ITEMS));
  return;
}

  const isStaticAsset = ['style', 'script', 'font', 'manifest'].includes(request.destination);
  if (isStaticAsset || url.origin === self.location.origin) {
    event.respondWith(staleWhileRevalidate(event, ASSET_CACHE, MAX_ASSET_ITEMS));
  }
});

self.addEventListener('message', (event) => {
  if (!event.data || typeof event.data.type !== 'string') return;

  if (event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }

  if (event.data.type === 'CLEAR_RUNTIME_CACHE') {
    event.waitUntil((async () => {
      await caches.delete(ASSET_CACHE);
      await caches.delete(IMAGE_CACHE);
      await notifyClients({ type: 'SW_CACHE_CLEARED' });
    })());
  }
});
