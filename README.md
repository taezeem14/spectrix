<div align="center">

<img src="https://readme-typing-svg.herokuapp.com?font=Space+Grotesk&weight=800&size=28&duration=2000&pause=600&color=7C3AED&center=true&vCenter=true&width=700&lines=⚡+Spectrix+AI;Not+Just+Another+AI+Wrapper.;Built+for+Speed.+Built+for+Control.;Fast.+Smart.+Offline-Ready.+🔥;Now+With+Persistent+AI+Memory.+🧠" />

<br/>

[![PWA](https://img.shields.io/badge/PWA-Installable-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)](https://spectrix.netlify.app)
[![Offline](https://img.shields.io/badge/Offline-Ready-10B981?style=for-the-badge&logo=googlechrome&logoColor=white)](https://spectrix.netlify.app)
[![Deploy](https://img.shields.io/badge/Deployed-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://spectrix.netlify.app)
[![Framework](https://img.shields.io/badge/Framework-None%20%28Pure%20JS%29-F59E0B?style=for-the-badge&logo=javascript&logoColor=white)](https://spectrix.netlify.app)
[![Math](https://img.shields.io/badge/Math-KaTeX%20%2B%20MathJax-2563EB?style=for-the-badge&logo=latex&logoColor=white)](https://spectrix.netlify.app)
[![Backend](https://img.shields.io/badge/Backend-Cloudflare%20Workers-F6821F?style=for-the-badge&logo=cloudflare&logoColor=white)](https://spectrix.netlify.app)
[![Models](https://img.shields.io/badge/Models-OpenRouter%20Multi--Model-7C3AED?style=for-the-badge&logo=openai&logoColor=white)](https://spectrix.netlify.app)
[![Storage](https://img.shields.io/badge/Storage-IndexedDB-0EA5E9?style=for-the-badge&logo=databricks&logoColor=white)](https://spectrix.netlify.app)
[![Memory](https://img.shields.io/badge/AI%20Memory-Persistent-7C3AED?style=for-the-badge&logo=brain&logoColor=white)](https://spectrix.netlify.app)

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

> ⚡ No login needed. Just open and go.

---

## 🔥 What is Spectrix AI?

**Spectrix AI** is a high-performance, PWA AI chatbot engineered for real-world student and developer workflows.

Built from scratch — **zero frameworks, zero bloat** — it combines:
- 🧠 Multi-model AI routing via OpenRouter
- ⚡ Edge-speed backend on Cloudflare Workers
- 🧮 Full LaTeX math rendering (KaTeX + MathJax)
- 📡 Offline-first architecture with IndexedDB persistence
- 🎤 Voice I/O with Web Speech API
- 🧠 **Persistent AI Memory** — remembers you across conversations

> **Short version:** *it cooks. consistently. 🔥*

---

## 📊 By The Numbers

| Stat | Value |
|------|-------|
| 🗓️ Build Duration | 3 months |
| 🔁 Commits | 467+ |
| 🚀 Deployments | 228+ |
| 📦 Framework | None (Vanilla JS) |
| ⚙️ Backend | Cloudflare Workers |

> Iteration cycle: `build → test → deploy → refine → repeat`

---

## ⚡ Core Features

### 🤖 AI Engine
- **Real-time streaming** responses — no waiting for full output
- **Multi-model routing** via OpenRouter
- **Smart API key rotation** — maximizes uptime & rate limit handling
- **Web search mode** — powered by Firecrawl via OpenRouter

### 🧠 AI Memory (NEW)
- **Persistent memory** across conversations — the AI remembers you
- **Auto-extraction** — learns your name, preferences, interests, goals automatically
- **Manual memory** — add facts yourself via the 🧠 memory panel
- **Memory categories** — personal, preference, technical, interest, context
- **Full control** — view, delete individual memories, or clear all
- **Toggle on/off** — enable or disable auto-learning anytime
- **IndexedDB-powered** — zero server dependency, fully local & private

### 🎤 Voice & Interaction
- **Voice input** (Web Speech API)
- **Text-to-Speech** output
- **Retry + Edit system** for messages

### 🧮 Math & Code
- **KaTeX + MathJax** dual-engine math rendering
- **Syntax highlighting** via Highlight.js
- **Markdown** full support

### 📱 App Experience
- **Installable PWA** — works like a native app
- **Offline-ready** — service worker caching
- **Persistent chat history** — IndexedDB storage
- **/img & /vid commands** — media generation

---

## 🧠 AI Memory — How It Works

```
User sends message
    │
    ├── AI responds normally
    │
    └── Background: Memory Extraction
          │
          ├── Analyzes conversation for user facts
          ├── Deduplicates against existing memories
          ├── Categorizes (personal/preference/technical/etc.)
          └── Saves to IndexedDB → 'memories' store
                │
                └── Next conversation
                      │
                      └── Memories injected into system prompt
                            → AI uses context naturally
```

> 🔒 All memories stored **locally in your browser**. Nothing leaves your device. Period.

---

## 🧠 AI Models

| Mode | Model | Best For |
|------|-------|----------|
| ⚡ Quick | `stepfun/step-3.5-flash:free` | Everyday use, fast replies |
| 🧠 Reasoning | `nvidia/nemotron-3-super-120b-a12b:free` | Complex problems, deep reasoning |

> 💾 Preference saved to `localStorage → Spectrix_text_model`

---

## 🏗️ Architecture

```
User Browser
    │
    ├── PWA (HTML/CSS/JS)
    │     ├── IndexedDB  →  Chat persistence
    │     ├── IndexedDB  →  AI Memory (persistent user context)
    │     ├── Service Worker  →  Offline support
    │     ├── Web Speech API  →  Voice I/O
    │     └── KaTeX + MathJax  →  Math rendering
    │
    └── Cloudflare Workers (Edge Backend)
          ├── API key rotation
          ├── Request proxying
          └── OpenRouter  →  Multi-model AI routing
                              ├── step-3.5-flash (Quick)
                              └── nemotron-120b (Reasoning)
```

---

## 🚀 Quick Start

```bash
# Option 1 — npx serve
npx serve .

# Option 2 — Python
python -m http.server 5500
```

Then open:
```
http://127.0.0.1:5500
```

> No build step. No npm install. No config. Just run. ⚡

---

## 💻 Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | HTML, CSS, Vanilla JavaScript |
| Storage | IndexedDB (chats + AI memory) |
| PWA | Service Workers |
| Voice | Web Speech API |
| Math | KaTeX + MathJax |
| Markdown | Marked.js + Highlight.js |
| Backend | Cloudflare Workers |
| AI Routing | OpenRouter |
| Web Search | Firecrawl |

---

## 🎯 Use Cases

- 📚 **Students** — solve problems, get explanations, render math cleanly
- 💻 **Developers** — debug code, generate snippets, ask technical questions
- 🧠 **Researchers** — web search + reasoning mode for deep dives
- ⚡ **Everyone** — fast, reliable AI that actually *remembers* you

---

## 📸 Screenshots

| Interface | Math Rendering |
|-----------|---------------|
| ![Main UI](screenshots/spectrix-main.png) | ![Math](screenshots/spectrix-math.png) |
| *⚡ Real-time streaming* | *🧮 KaTeX + MathJax in action* |

---

## 💡 How It Was Built

Spectrix follows an **AI-assisted engineering** workflow:

```
Idea  →  AI generates core logic
      →  Manually refined & debugged
      →  Performance + UX optimized
      →  Deployed & iterated
```

> **AI is the tool — not the decision-maker.**
> Every architectural choice, every design decision, every fix — made by a human. 🧠

---

## 👨‍💻 Author

**Muhammad Taezeem Tariq Matta**
> Built with AI. Refined with intent. Shipped with 🔥

---

## ⭐ Support

If Spectrix helped you — drop a ⭐ on the repo. It means a lot. 🙏

> *Not just another AI wrapper. A system built for speed, control, memory, and real-world use.* ⚡
