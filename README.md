# Spectrix AI ✨

![PWA](https://img.shields.io/badge/PWA-Installable-5A0FC8?logo=pwa\&logoColor=white)
![Offline Ready](https://img.shields.io/badge/Offline-Ready-10B981)
![Vanilla JS](https://img.shields.io/badge/Stack-Vanilla%20JS-F7DF1E?logo=javascript\&logoColor=111)
![Math](https://img.shields.io/badge/Math-KaTeX%20%2B%20MathJax-2563EB)

**Spectrix AI** is a fast, clean, and powerful AI chat application designed for **homework, learning, and general productivity**.
It supports **real-time streaming responses, voice interaction, math rendering, and PWA installation**, making it feel like a real desktop/mobile app.

Short version: **it cooks. 🔥**

---

# Why Spectrix Slaps 🚀

Spectrix is designed to feel **fast, modern, and smooth**, not like a slow academic tool.

Key features:

* ⚡ **Real-time streaming responses** – messages appear instantly instead of waiting
* 🎤 **Voice input** + 🔊 **Text-to-speech output** for hands-free interaction
* 🧠 **Math-friendly chat** with KaTeX + MathJax rendering
* 🎨 `/img` and 🎬 `/vid` commands for media generation
* ✏️ **Retry + Edit system** that avoids duplicate or broken messages
* 📦 **Progressive Web App (PWA)** – install Spectrix like a native app
* 📡 **Offline-ready shell** with smart caching

Basically: **AI chat that feels fast and modern instead of clunky.**

---

# Screenshots 📸

![Spectrix Main UI](screenshots/spectrix-main.png)

![Spectrix Math Chat](screenshots/spectrix-math.png)

---

# Quick Start (No Drama) ⚡

Run a local server in the project root:

```bash
npx serve .
```

or

```bash
python -m http.server 5500
```

or use **VS Code Live Server**.

Then open:

```
http://127.0.0.1:5500
```

Boom. Spectrix is live. 🔥

---

# Commands 🧠

Spectrix supports simple command-style prompts:

`/img your prompt`
→ generate an image

`/vid your prompt`
→ generate a video

These commands trigger the media generation pipeline.

---

# Tech Stack 💻

Spectrix intentionally uses **minimal dependencies** to stay lightweight.

Core technologies:

* **Vanilla HTML, CSS, JavaScript**
* **IndexedDB** for persistent chat and media storage
* **Web Speech API** for voice input and TTS output
* **Service Worker + Web Manifest** for PWA support
* **Highlight.js** for syntax highlighting
* **Markdown rendering pipeline**
* **KaTeX + MathJax** for advanced math display

Result: **fast load times and zero heavy frameworks.**

---

# Project Structure 📂

```
/
├── index.html
├── sw.js
├── site.webmanifest
├── robots.txt
└── README.md
```

Minimal structure → easier to maintain and deploy.

---

# PWA Features 📱

Spectrix runs like a **real installable app**.

Capabilities include:

* Installable standalone experience
* Offline-ready application shell
* Navigation preload for faster page loads
* Runtime caching strategies
* Manifest shortcuts
* Share-target support
* Automatic service worker update handling

Once installed, Spectrix behaves almost like a **native app**.

---

# Browser Support 🌐

Best experience:

* Chrome
* Microsoft Edge
* Chromium-based browsers
* Android browsers with PWA support

Notes:

* Voice input usually requires **HTTPS or localhost**
* iOS Safari has **limited PWA and voice support**

---

# Deployment 🚀

Spectrix works on **any static hosting platform**.

Examples:

* GitHub Pages
* Netlify
* Vercel (static mode)
* Cloudflare Pages

Make sure these files are in the root:

```
index.html
sw.js
site.webmanifest
```

Also include the icons referenced in the manifest.

---

# Author 👨‍💻

**Muhammad Taezeem Tariq Matta**

Student developer, builder, and experimenter in AI tools.

Built with **caffeine, chaos, and clean UI energy. ⚡🔥**
