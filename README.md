# Spectrix AI ✨

![PWA](https://img.shields.io/badge/PWA-Installable-5A0FC8?logo=pwa\&logoColor=white)
![Offline Ready](https://img.shields.io/badge/Offline-Ready-10B981)
![Vanilla JS](https://img.shields.io/badge/Stack-Vanilla%20JS-F7DF1E?logo=javascript\&logoColor=111)
![Math](https://img.shields.io/badge/Math-KaTeX%20%2B%20MathJax-2563EB)

> ⚡ **Fast. Smart. Offline-ready.**
> Spectrix AI is a next-gen AI chat app built for **students, developers, and productivity nerds**.

---

## 🚀 What is Spectrix?

**Spectrix AI** is a **high-performance AI chat application** designed for:

* 📚 Homework & learning
* 💻 Coding & problem solving
* 🧠 Math-heavy workflows
* ⚡ Everyday productivity

It delivers a **real-time, app-like experience** with streaming responses, voice interaction, and advanced math rendering — all inside a lightweight PWA.

👉 **Short version:** *it cooks. 🔥*

---

## ⚡ Why Spectrix Hits Different

Spectrix isn’t just another AI wrapper.
It’s engineered for **speed, control, and real-world usability**.

### 🧠 Core Features

* ⚡ **Real-time streaming responses**
  Messages render instantly — no waiting, no blocking.

* 🎤 **Voice input + 🔊 Text-to-Speech**
  Fully hands-free interaction.

* 🧮 **Advanced Math Engine**
  Powered by **KaTeX + MathJax** with:

  * smooth 60 FPS rendering
  * floating **Copy LaTeX** UI

* 🌐 **Optional Web Search Mode** :
  Toggle live search when you need **fresh, real-time data**.

* 🎨 **Media Generation Commands**

  * `/img` → generate images
  * `/vid` → generate videos

* ✏️ **Retry + Edit System**
  Fix prompts without breaking chat flow.

* 📦 **Installable PWA**
  Works like a real app on desktop & mobile.

* 📡 **Offline-ready architecture**
  Core UI loads even without internet.

---

## 🧠 Under the Hood (What Makes It Powerful)

Spectrix is not just UI — it’s a **full AI system**:

* ⚡ **Cloudflare Worker backend**
* 🔑 **API key rotation system** (better reliability under limits)
* 🌐 **Web search integration** (Firecrawl via OpenRouter)
* 🤖 **High-performance LLM routing (OpenRouter)**

👉 Result: **fast, stable, real-time AI responses**

---

## 📸 Screenshots

![Spectrix Main UI](screenshots/spectrix-main.png)
![Spectrix Math Chat](screenshots/spectrix-math.png)

---

## ⚡ Quick Start

Run locally:

```bash
npx serve .
```

or

```bash
python -m http.server 5500
```

Then open:

```
http://127.0.0.1:5500
```

🔥 Done. Spectrix is live.

---

## 🧠 Commands

Simple command system:

```bash
/img your prompt
```

→ generate an image

```bash
/vid your prompt
```

→ generate a video

---

## 💻 Tech Stack

Built for **performance + simplicity**:

* Vanilla **HTML, CSS, JavaScript**
* **IndexedDB** (persistent storage)
* **Service Workers** (offline + caching)
* **Web Speech API** (voice + TTS)
* **Highlight.js** (code rendering)
* **Markdown pipeline**
* **KaTeX + MathJax** (math rendering)

👉 **No heavy frameworks. No bloat. Just speed.**

---

## 📂 Project Structure

```
/
├── index.html
├── sw.js
├── worker.js
├── site.webmanifest
├── robots.txt
└── README.md
```

Minimal = maintainable.

---

## 📱 PWA Capabilities

* Installable standalone app
* Offline-first UI shell
* Smart caching strategies
* Navigation preload
* Manifest shortcuts
* Share-target support

👉 Feels like a native app.

---

## 🌐 Browser Support

**Best:**

* Chrome
* Edge
* Chromium-based browsers

**Notes:**

* Voice requires HTTPS or localhost
* iOS Safari = limited PWA support

---

## 🚀 Deployment

Works on any static host:

* GitHub Pages
* Netlify
* Vercel (static)
* Cloudflare Pages

Required files:

```
index.html
sw.js
site.webmanifest
```

---

## 👨‍💻 Author

**Muhammad Taezeem Tariq Matta**

Student developer building fast, modern AI tools.

> Built with caffeine, chaos, and clean UI energy ⚡🔥

---

## ⭐ Final Note

Spectrix isn’t trying to be another chatbot.

It’s trying to be:

> **the fastest, cleanest AI experience you’ve ever used.**
