# Spectrix AI ✨

![PWA](https://img.shields.io/badge/PWA-Installable-5A0FC8?logo=pwa\&logoColor=white)
![Offline Ready](https://img.shields.io/badge/Offline-Ready-10B981)
![Architecture](https://img.shields.io/badge/Architecture-AI%20Assisted-7C3AED)
![Math](https://img.shields.io/badge/Math-KaTeX%20%2B%20MathJax-2563EB)

> ⚡ fast. smart. offline. no excuses.
> spectrix ai = chatgpt vibes but built different 💻🔥

---

## 🌐 live demo

🚀 pull up rn:
👉 [https://spectrix.netlify.app](https://spectrix.netlify.app)

🌍 vanity drip:
👉 [https://taezeem.is-a.dev/spectrix](https://taezeem.is-a.dev/spectrix)

---

## 🚀 what even is spectrix?

spectrix ai is that **no-nonsense, high-speed AI app** for:

* 📚 surviving homework
* 💻 coding like a menace
* 🧠 math that actually renders clean
* ⚡ daily productivity grind

👉 short answer: **it cooks. like actually cooks. 🔥**

---

## 💡 how this thing was built

not some random copy-paste project.

* 🤖 AI helped generate core logic
* 🛠️ everything important = manually refined
* 🎯 optimized for speed, UX, and real use (not just flex)

> AI is the tool. brain is still the boss.

---

## ⚡ why spectrix hits DIFFERENT

this ain’t just another “AI wrapper bro trust me” project.

this is:
**fast + clean + actually usable**

### 🧠 core features

* ⚡ real-time streaming replies (no waiting like 💀)
* 🎤 voice input + 🔊 text-to-speech
* 🧮 math engine that doesn’t break (KaTeX + MathJax)
* 🌐 optional web search mode
* 🎨 /img + /vid commands (yeah fr)
* ✏️ retry + edit (fix your prompts, no stress)
* 📦 installable PWA (app vibes, browser brain)
* 📡 offline-ready (internet said bye? still works 😤)

---

## 🧠 under the hood (for the real ones)

* ⚡ cloudflare workers backend
* 🔑 api key rotation (stay alive fr)
* 🌐 firecrawl + openrouter for search
* 🤖 model routing via openrouter

👉 result: **fast, stable, low-latency responses**

---

## 📸 screenshots

![Spectrix Main UI](screenshots/spectrix-main.png)
*⚡ clean streaming UI*

![Spectrix Math Chat](screenshots/spectrix-math.png)
*🧮 math that actually renders (finally)*

---

## ⚡ quick start

```bash
npx serve .
```

or

```bash
python -m http.server 5500
```

open:

```
http://127.0.0.1:5500
```

---

## 💻 tech stack

* raw HTML, CSS, JS (no framework bloat 🚫)
* IndexedDB
* Service Workers
* Web Speech API
* Highlight.js
* Markdown pipeline
* KaTeX + MathJax

---

## 🧾 Model Dropdown

Spectrix includes a model selection dropdown in the header controls which lets you choose the text model used for requests.

pick your fighter:

* ⚡ **Quick** → `stepfun/step-3.5-flash:free` — fast replies, low latency (speed demon)
* 🧠 **Reasoning** → `nvidia/nemotron-3-super-120b-a12b:free` — deeper thinking for complex tasks (big brain mode)

The selected model is saved in your browser `localStorage` under the key `Spectrix_text_model` and loaded into the app as `FIXED_TEXT_MODEL` in `index.html`.

want to change the default? edit `FIXED_TEXT_MODEL` in `index.html` or set `Spectrix_text_model` manually in devtools.

---

## 👨‍💻 author

**Muhammad Taezeem Tariq Matta**

> built with AI. refined with intent. delivered with sauce. ⚡🔥

---

## ⭐ final note

> this might actually be the cleanest AI app you’ll use.

no bloat. no lag. just vibes. 💯
