# Spectrix AI ✨

![PWA](https://img.shields.io/badge/PWA-Installable-5A0FC8?logo=pwa\&logoColor=white)
![Offline Ready](https://img.shields.io/badge/Offline-Ready-10B981)
![Architecture](https://img.shields.io/badge/Architecture-AI%20Assisted-7C3AED)
![Math](https://img.shields.io/badge/Math-KaTeX%20%2B%20MathJax-2563EB)

> ⚡ **Fast. Smart. Offline-ready.**
> Spectrix AI is a next-gen AI chat app built for **students, developers, and productivity nerds** — combining **AI-assisted engineering** with human design and direction.

---

## 🌐 Live Demo

🚀 **Try it now:**
👉 https://spectrix.netlify.app

🌍 **Custom Domain (Vanity URL):**
👉 https://taezeem.is-a.dev/spectrix

---

## 🚀 What is Spectrix?

**Spectrix AI** is a **high-performance AI-driven chatbot application** designed for:

* 📚 Homework & learning
* 💻 Coding & problem solving
* 🧠 Math-heavy workflows
* ⚡ Everyday productivity

It delivers a **real-time, app-like experience** with streaming responses, voice interaction, and advanced math rendering — all inside a lightweight PWA.

👉 **Short version:** *it cooks. 🔥*

---

## 💡 How It Was Built

Spectrix was developed using an **AI-assisted workflow**:

* 🧠 Core logic and systems were generated using AI
* 🛠️ Refined, edited, and debugged manually
* 🎯 Directed with a strong focus on performance, UX, and real-world usability

> This project reflects a modern development approach:
> **leveraging AI as a tool, not a replacement for thinking.**

---

## ⚡ Why Spectrix Hits Different

Spectrix isn’t just another AI wrapper.
It’s engineered for **speed, control, and real-world usability**.

### 🧠 Core Features

* ⚡ **Real-time streaming responses**
* 🎤 **Voice input + 🔊 Text-to-Speech**
* 🧮 **Advanced Math Engine (KaTeX + MathJax)**
* 🌐 **Optional Web Search Mode**
* 🎨 **/img and /vid generation commands**
* ✏️ **Retry + Edit System**
* 📦 **Installable PWA**
* 📡 **Offline-ready architecture**

---

## 🧠 Under the Hood

* ⚡ Cloudflare Worker backend
* 🔑 API key rotation system
* 🌐 Web search (Firecrawl via OpenRouter)
* 🤖 LLM routing via OpenRouter

👉 Result: **fast, stable, real-time AI responses**

---

## 📸 Screenshots

![Spectrix Main UI](screenshots/spectrix-main.png)
*⚡ Real-time streaming interface*

![Spectrix Math Chat](screenshots/spectrix-math.png)
*🧮 Math rendering in action*

---

## ⚡ Quick Start

```bash
npx serve .
```

or

```bash
python -m http.server 5500
```

Open:

```
http://127.0.0.1:5500
```

---

## 💻 Tech Stack

* Framework-free HTML, CSS, JavaScript
* IndexedDB
* Service Workers
* Web Speech API
* Highlight.js
* Markdown pipeline
* KaTeX + MathJax

---

## 🧾 Model Dropdown

Spectrix includes a model selection dropdown in the header controls which lets you choose the text model used for requests. The two built-in options are:

- **Quick**: `stepfun/step-3.5-flash:free` — optimized for low latency and fast replies.
- **Reasoning**: `nvidia/nemotron-3-super-120b-a12b:free` — optimized for deeper reasoning and complex tasks.

The selected model is persisted in the browser `localStorage` under the key `Spectrix_text_model` and is read into the app as the `FIXED_TEXT_MODEL` variable in `index.html`. You can change the default by editing `FIXED_TEXT_MODEL` in `index.html` or by setting the `Spectrix_text_model` value in your browser devtools.

---

## 👨‍💻 Author

**Muhammad Taezeem Tariq Matta**

> Built with AI, refined with intent ⚡🔥

---

## ⭐ Final Note

> **the fastest, cleanest AI experience you’ve ever used.**