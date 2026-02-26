# Spectrix AI

![PWA](https://img.shields.io/badge/PWA-Installable-5A0FC8?logo=pwa&logoColor=white)
![Offline Ready](https://img.shields.io/badge/Offline-Ready-10B981)
![Vanilla JS](https://img.shields.io/badge/Stack-Vanilla%20JS-F7DF1E?logo=javascript&logoColor=111)
![Math](https://img.shields.io/badge/Math-KaTeX%20%2B%20MathJax-2563EB)

Production-grade, installable AI chat web app with voice input/output, streaming replies, media generation, persistent history, and advanced PWA behavior.

## Screenshots

> Add your screenshots in a `screenshots/` folder at project root.

![Spectrix Main UI](screenshots/spectrix-main.png)
![Spectrix Chat + Math](screenshots/spectrix-math.png)

## Highlights

- Single-page app in vanilla HTML/CSS/JS
- Persistent multi-session chat with IndexedDB
- Voice input + TTS playback toggle
- Streaming Markdown responses with syntax highlighting
- KaTeX + MathJax rendering pipeline for math-heavy responses
- Image (`/img`) and video (`/vid`) generation flows
- Real Retry and Edit behavior (in-thread regeneration without duplicate user bubbles)
- Installable PWA with offline shell, runtime caching, update lifecycle, and shortcuts

## Project Structure

```
/
├── index.html
├── sw.js
├── site.webmanifest
├── robots.txt
└── README.md
```

## Run Locally

Use a local web server, then open the app in Chromium browser:

1. Start server
   - VS Code Live Server
   - `npx serve .`
   - `python -m http.server 5500`
2. Open `http://127.0.0.1:5500`

## Features

### Chat & UX

- Session sidebar (search, pin, rename, delete)
- Export current chat to Markdown
- Import/export full chat backups as JSON
- Keyboard shortcuts and smooth scroll-to-latest UX

### AI & Media

- Text generation via worker API
- `/img ...` for image generation
- `/vid ...` for video generation
- Adaptive streaming renderer for long outputs

### Math Rendering

- KaTeX auto-render + MathJax fallback
- Auto-normalization for inconsistent model math formatting
- Inline-code math promotion for better typesetting

### Voice

- Speech-to-text input
- TTS playback with persisted state
- Safe interruption on new responses

## PWA Stack

- `site.webmanifest` with shortcuts, launch handler, share target
- `sw.js` with:
  - navigation preload
  - network-first pages
  - stale-while-revalidate static assets
  - cache-first images
  - runtime cache trimming
  - update/client messaging events

## Browser Notes

- Best on Chrome/Edge desktop and Android
- Voice recognition typically needs HTTPS or localhost
- iOS Safari has platform-specific voice/install limitations

## Deployment

Works on static hosting (GitHub Pages, Netlify, Vercel static, etc.) as long as root contains:

- `index.html`
- `sw.js`
- `site.webmanifest`
- icon files referenced by the manifest

## Author

Muhammad Taezeem Tariq Matta
