<div align="center">

# ⚡ Spectrix AI

**fast. smart. offline-ready. hits different.**

[![PWA](https://img.shields.io/badge/PWA-Installable-5A0FC8?logo=pwa&logoColor=white)](https://spectrix.netlify.app)
[![Offline](https://img.shields.io/badge/Offline-Ready-10B981)](https://spectrix.netlify.app)
[![Build](https://img.shields.io/badge/Architecture-AI%20Assisted-7C3AED)](https://spectrix.netlify.app)
[![Math](https://img.shields.io/badge/Math-KaTeX%20%2B%20MathJax-2563EB)](https://spectrix.netlify.app)
[![Deploy](https://img.shields.io/badge/Deployed-Netlify-00C7B7?logo=netlify&logoColor=white)](https://spectrix.netlify.app)

🚀 **[spectrix.netlify.app](https://spectrix.netlify.app)** &nbsp;|&nbsp; 🌍 **[taezeem.is-a.dev/spectrix](https://taezeem.is-a.dev/Spectrix)**

</div>

---

## ok so what even is this

bro it's an AI chat app. but not the mid kind.

Spectrix is built for **students, devs, and people who actually want things to work** — real-time streaming, math rendering, voice I/O, offline PWA, web search. all in vanilla HTML/CSS/JS. no framework. no build step. no cap.

use it for:
- 📚 homework + studying
- 💻 coding + debugging
- 🧮 math-heavy stuff (LaTeX goes hard here)
- ⚡ anything really

> *short version: it cooks. 🔥*

---

## how was it built tho

AI-assisted workflow. real talk:

- core logic → generated with AI
- bugs + UX + direction → handled manually
- vibes → immaculate

> using AI as a tool, not a crutch. big difference.

---

## features (the actual ones that matter)

| feature | what it does |
|---|---|
| ⚡ streaming responses | token-by-token. no staring at a loading spinner |
| 🎤 voice input | just talk to it. Web Speech API |
| 🔊 text-to-speech | it talks back. kinda unhinged actually |
| 🧮 math engine | KaTeX + MathJax. LaTeX renders clean |
| 🌐 web search mode | live search via Firecrawl. optional but bussin |
| 🎨 /img + /vid | generate images + video mid-chat with slash commands |
| ✏️ retry + edit | mess up your prompt? fix it. re-run. no context lost |
| 📦 installable PWA | add to home screen, works offline, feels native |
| 📡 offline arch | Service Workers + IndexedDB. yes it actually works offline |

---

## pick your brain ⚡

switch modes from the header. choose wisely.

### ⚡ quick mode
```
stepfun/step-3.5-flash:free
```
fast. snappy. zero delay. for everyday stuff and quick answers.

### 🧠 reasoning mode
```
nvidia/nemotron-super-120b:free
```
slower. but like. actually thinks. use this for hard code, deep problems, complex math.

> selected model saves automatically → `localStorage: Spectrix_text_model`
> wanna change the default? edit `FIXED_TEXT_MODEL` in `index.html`

---

## under the hood

```
Cloudflare Worker  →  API Key Rotation  →  OpenRouter LLM Routing
                                                  ↓
                                     Firecrawl Web Search (optional)
                                                  ↓
                                      streaming response → you
```

- **Cloudflare Worker** — edge backend. cold starts? never heard of her
- **API Key Rotation** — keys rotate so the thing stays alive
- **OpenRouter** — swap models without touching infra
- **Firecrawl** — web search piped straight into chat context

---

## tech stack (no cap, all vanilla)

```
HTML / CSS / JavaScript   ← no framework. touch grass.
IndexedDB
Service Workers
Web Speech API
Highlight.js
Markdown Pipeline
KaTeX + MathJax
Cloudflare Workers
OpenRouter
```

---

## quick start

```bash
# node
npx serve .

# python
python -m http.server 5500
```

open → `http://127.0.0.1:5500` and you're in

---

## screenshots

| main UI | math mode |
|---|---|
| ![Main](screenshots/spectrix-main.png) | ![Math](screenshots/spectrix-math.png) |
| *streaming live* | *latex going crazy* |

---

## who made this

**Muhammad Taezeem Tariq Matta**

> built with AI, refined with intent ⚡🔥

---

<div align="center">

*the fastest, cleanest AI experience you've ever used.*

⭐ if spectrix hit — drop a star. you know the move.

</div>
