<div align="center">

<img src="https://readme-typing-svg.herokuapp.com?font=Orbitron&weight=800&size=28&duration=2000&pause=600&color=02e3d4&center=true&vCenter=true&width=700&lines=⚡+Spectrix+AI;Not+Just+Another+AI+Wrapper.;Built+for+Speed.+Built+for+Control.;Fast.+Smart.+Offline-Ready.+🔥;Persistent+AI+Memory.+Voice+I%2FO.+Math.+🧠" />

<br/>

[![PWA](https://img.shields.io/badge/PWA-Installable-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)](https://spectrix.netlify.app)
[![Offline](https://img.shields.io/badge/Offline-Ready-10B981?style=for-the-badge&logo=googlechrome&logoColor=white)](https://spectrix.netlify.app)
[![Deploy](https://img.shields.io/badge/Deployed-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://spectrix.netlify.app)
[![Framework](https://img.shields.io/badge/Framework-None%20%28Pure%20JS%29-F59E0B?style=for-the-badge&logo=javascript&logoColor=white)](https://spectrix.netlify.app)
[![Math](https://img.shields.io/badge/Math-KaTeX%20%2B%20MathJax-2563EB?style=for-the-badge&logo=latex&logoColor=white)](https://spectrix.netlify.app)
[![Backend](https://img.shields.io/badge/Backend-Cloudflare%20Workers-F6821F?style=for-the-badge&logo=cloudflare&logoColor=white)](https://spectrix.netlify.app)
[![Models](https://img.shields.io/badge/Models-OpenRouter%20Multi--Model-7C3AED?style=for-the-badge&logo=openai&logoColor=white)](https://spectrix.netlify.app)
[![Storage](https://img.shields.io/badge/Storage-IndexedDB%20%2B%20Firebase-0EA5E9?style=for-the-badge&logo=databricks&logoColor=white)](https://spectrix.netlify.app)
[![Memory](https://img.shields.io/badge/AI%20Memory-Persistent-7C3AED?style=for-the-badge&logo=brain&logoColor=white)](https://spectrix.netlify.app)
[![Voice](https://img.shields.io/badge/Voice-I%2FO%20Enabled-10B981?style=for-the-badge&logo=googlepodcasts&logoColor=white)](https://spectrix.netlify.app)

<br/>

![Deploy Status](https://api.netlify.com/api/v1/badges/ffee7a14-ee63-4633-b49f-388084446cdb/deploy-status)
![Commits](https://img.shields.io/github/commit-activity/m/taezeem14/Spectrix?style=flat-square&color=7C3AED)
![Last Commit](https://img.shields.io/github/last-commit/taezeem14/Spectrix?style=flat-square&color=10B981)
![Repo Size](https://img.shields.io/github/repo-size/taezeem14/Spectrix?style=flat-square&color=2563EB)
![Stars](https://img.shields.io/github/stars/taezeem14/Spectrix?style=flat-square&color=FACC15)

</div>

---

## 🌐 Live Demo

| Link | Description |
|------|-------------|
| 🚀 [spectrix.netlify.app](https://spectrix.netlify.app) | Primary deployment |
| 🌍 [taezeem.is-a.dev/spectrix](https://taezeem.is-a.dev/spectrix) | Custom domain mirror |

> ⚡ Local-first by default. Sign in with Google to unlock cloud backup + real-time multi-device sync.

---

## 🔥 What is Spectrix AI?

**Spectrix AI** is a high-performance, PWA-first AI chatbot engineered for students, developers, and power users.

Built from scratch — **zero frameworks, zero bloat** — it combines:
- 🤖 Multi-model AI routing via **OpenRouter** (Stepfun, Qwen, Nemotron, and more)
- ⚡ Edge-speed backend on **Cloudflare Workers** with smart key rotation
- 🧮 **Full LaTeX math rendering** via KaTeX + MathJax with copy-to-clipboard
- 📡 **Offline-first** architecture with IndexedDB local persistence
- 🎤 **Voice I/O** — speak to it, hear it speak back
- 🧠 **Persistent AI Memory** — remembers you automatically, across sessions
- 🌐 **Web search mode** — real-time answers via Firecrawl + OpenRouter
- 🖼️ **Image + Video generation** — `/img` and `/vid` commands
- 🔒 **Incognito mode** — zero trace, zero persistence, zero cloud
- ☁️ **Firebase Auth + Firestore** — Google Sign-In, profile management, cloud chat backup

> **Short version:** *it cooks. consistently. 🔥*

---

## 📊 By The Numbers

| Stat | Value |
|------|-------|
| 🗓️ Build Duration | 3+ months |
| 🔁 Commits | 530+ |
| 🚀 Deployments | 280+ |
| 📦 Framework | None (Vanilla JS) |
| ⚙️ Backend | Cloudflare Workers |
| 📱 Architecture | Single-file PWA (`index.html`) |

> Iteration cycle: `build → test → deploy → refine → repeat`

---

## ⚡ Core Features

### 🤖 AI Engine
- **Real-time simulated streaming** — no waiting for full output
- **Multi-model routing** via OpenRouter — switch models from the header
- **Smart API key rotation** — maximizes uptime and handles rate limits gracefully
- **Rate-limit UX** — friendly in-app message, not a dead crash
- **Web search mode** — powered by Firecrawl via OpenRouter (`Ctrl+Shift+S` to toggle)
- **Auto-titled chats** — AI names your conversations after the first exchange
- **Retry + Edit** — re-run any response or tweak your message mid-conversation

### 🧠 AI Memory
- **Persistent memory** across conversations — the AI knows who you are
- **Auto-extraction** — silently learns your name, preferences, goals, and tech stack
- **Manual memory** — add facts yourself via the 🧠 panel
- **Categorized** — personal, preference, technical, interest, context, general
- **Full control** — view all memories, delete individually, or wipe clean
- **Toggle on/off** — disable auto-learning anytime
- **Cooldown-throttled** — extraction runs max once every 5 minutes, no spam
- **Deduplication** — near-identical facts are never saved twice
- **IndexedDB-powered** — 100% local, private, zero server dependency

### 🎤 Voice & Interaction
- **Voice input** via Web Speech API — tap 🎤, speak, done
- **Text-to-Speech output** — AI responses read aloud via the 🔊 toggle
- **TTS audio unlock** — mobile-compatible auto-unlock on first user interaction
- **Voice confirmation** — audible "Voice enabled" on toggle so you know it works
- **Keyboard shortcuts:**
  - `Ctrl+B` / `Cmd+B` → New chat
  - `Ctrl+F` / `Cmd+F` → Search messages in chat
  - `Ctrl+Shift+S` → Toggle web search
  - `Ctrl+/` → Focus history search

### 🧮 Math & Code
- **KaTeX + MathJax dual-engine** — renders inline `$...$`, display `$$...$$`, and complex environments
- **Auto-rescue** — bare LaTeX commands wrapped in delimiters automatically
- **Copy LaTeX button** — hover any math block to copy the raw TeX
- **Code blocks** — syntax highlighting via Highlight.js, copy button, collapse toggle
- **Markdown** — full support: tables, blockquotes, headings, bold, italic, lists, images

### 🖼️ Media Generation
- `/img <prompt>` — generates images using your selected model:
  - Imagen 4 Ultra / Fast
  - Nano Banana (Gemini Image)
  - FLUX.2 Max
  - GPT Image 1.5
- `/vid <prompt>` — generates short looping videos via ByteDance Seedance
- **Saved locally** — generated media persisted in IndexedDB as Blobs

### 📱 App Experience
- **Installable PWA** — install on mobile or desktop like a native app
- **Offline-ready** — service worker caches the app shell
- **iOS install hint** — smart banner on Safari/iOS guides install
- **Auto-update** — new service worker activates without user action
- **Single-file architecture** — monolithic `index.html`, no build step
- **Dark/light theme** — toggle anytime, persists to `localStorage`
- **Incognito mode** — full blackout: no IndexedDB writes, no cloud sync, no memory, no profile persistence
- **Chat pinning** — pin important conversations to the top
- **Chat search** — fuzzy search across all history titles + message content
- **In-chat message search** — highlight matching messages with `Ctrl+F`
- **Export/Import** — download chats as `.md` or `.json`, re-import anytime
- **No browser popups** — clean custom modals for all alerts, confirms, and prompts
- **Custom select dropdowns** — animated, keyboard-navigable, beautiful

### ☁️ Google Auth + Cloud Sync
- **Google Sign-In** via Firebase Auth (popup with redirect fallback)
- **Real-time Firestore sync** — chats auto-mirror create/update/delete when logged in
- **Fallback timer sync** — polls cloud every 30s if realtime listener is blocked
- **Tombstone system** — deleted chats stay deleted across devices, no resurrection
- **Profile control hub** — backup, edit name/photo, upload device picture, or sign out
- **Profile injected into memory** — name remembered by the AI automatically
- **Ad-blocker resilience** — falls back gracefully when Firestore is blocked by extensions

---

## 🧠 AI Memory — How It Works

```
User sends message
    │
    ├── AI responds normally
    │
    └── Background: Memory Extraction (throttled, async)
          │
          ├── Analyzes conversation for memorable user facts
          ├── Deduplicates against existing memories (80% word-overlap check)
          ├── Categorizes: personal / preference / technical / interest / context
          └── Saves to IndexedDB → 'memories' store
                │
                └── Every future conversation
                      │
                      └── Top 30 memories injected into system prompt
                            → AI uses context naturally, without repeating it back
```

> 🔒 All memories stored **locally in your browser**. Nothing leaves your device unless you're syncing chats — and even then, memories never go to the cloud.

---

## 🧠 AI Models

| Mode | Model | Best For |
|------|-------|----------|
| ⚡ Quick | `stepfun/step-3.5-flash:free` | Everyday use, fast replies |
| 🚀 Smart | `qwen/qwen3.6-plus-preview:free` | Frontend dev, agentic tasks, fast + smart |
| 🧠 Reasoning | `nvidia/nemotron-3-super-120b-a12b:free` | Deep reasoning, hard problems (slower) |

> 💾 Model preference saved to `localStorage → Spectrix_text_model` and persists across sessions.

---

## 🏗️ Architecture

```
User Browser
    │
    ├── PWA (Single HTML file — HTML/CSS/Vanilla JS)
    │     ├── IndexedDB ['chats']    → Chat history (primary source of truth)
    │     ├── IndexedDB ['memories'] → AI Memory (persistent user context)
    │     ├── IndexedDB ['media']    → Generated image/video blobs
    │     ├── Service Worker         → Offline caching + auto-update
    │     ├── Web Speech API         → Voice input + TTS output
    │     ├── KaTeX + MathJax        → Dual-engine math rendering
    │     ├── Firebase Auth          → Google Sign-In
    │     └── Firebase Firestore     → Cloud chat backup + real-time sync
    │
    └── Cloudflare Workers (Edge Backend)
          ├── API key rotation
          ├── Rate limit handling
          ├── Request proxying
          └── OpenRouter  →  Multi-model AI routing
                              ├── Stepfun 3.5 Flash (Quick)
                              ├── Qwen 3.6 Plus (Smart)
                              ├── Nemotron 120B (Reasoning)
                              ├── Firecrawl (Web Search)
                              └── Image/Video model endpoints
```

---

## 🚀 Quick Start

```bash
# Option 1 — npx serve
npx serve .

# Option 2 — Python
python -m http.server 5500

# Option 3 — VS Code Live Server
# Right-click index.html → Open with Live Server
```

Then open:
```
http://127.0.0.1:5500
```

> No build step. No `npm install`. No config files. No `.env`. Just open and run. ⚡

---

## 💻 Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | HTML, CSS, Vanilla JavaScript |
| Local Storage | IndexedDB (chats + memories + media) |
| Cloud Sync | Firebase Firestore |
| Auth | Firebase Auth (Google Sign-In) |
| PWA | Service Workers + Web App Manifest |
| Voice | Web Speech API (STT + TTS) |
| Math | KaTeX + MathJax (dual-engine) |
| Markdown | Marked.js (with custom math extension) |
| Code | Highlight.js |
| Backend | Cloudflare Workers |
| AI Routing | OpenRouter |
| Web Search | Firecrawl (via OpenRouter plugins) |
| Image Gen | Imagen 4, FLUX.2, GPT Image, Gemini Image |
| Video Gen | ByteDance Seedance 1.0 |

---

## 🎯 Use Cases

- 📚 **Students** — math rendering, clean explanations, persistent context across sessions
- 💻 **Developers** — debug code, agentic tasks, syntax-highlighted responses
- 🧠 **Researchers** — web search + reasoning mode for deep-dive topics
- ⚡ **Power Users** — voice I/O, keyboard shortcuts, multi-model switching, full data control

---

## 📸 Screenshots

| Interface | Math Rendering |
|-----------|---------------|
| ![Main UI](screenshots/spectrix-main.png) | ![Math](screenshots/spectrix-math.png) |
| *⚡ Real-time streaming + dark mode* | *🧮 KaTeX + MathJax + copy button* |

---

## 💡 How It Was Built

Spectrix follows an **AI-assisted engineering** workflow:

```
Idea  →  AI generates core logic
      →  Manually refined & debugged
      →  Performance + UX optimized
      →  Edge cases hunted down
      →  Deployed & iterated relentlessly
```

> **AI is the tool — not the decision-maker.**
> Every architectural choice, every design decision, every UX fix — made by a human. 🧠
> 530+ commits. 280+ deployments. Obsessive iteration. That's Spectrix.

---

## 🗺️ Roadmap

- [ ] Folder/tag-based chat organization
- [ ] Cloud memory sync (opt-in)
- [ ] Custom system prompt editor
- [ ] Multi-file upload support
- [ ] Conversation branching

---

## 👨‍💻 Author

**Muhammad Taezeem Tariq Matta**

> Built with AI. Refined with intent. Shipped with 🔥

---

## ⭐ Support

If Spectrix helped you — drop a ⭐ on the repo. It means a lot. 🙏

> *Not just another AI wrapper. A system built for speed, control, memory, and real-world use.* ⚡
