<div align="center">

# 🕵️ SENTINEL — Multi-Agent Forensic Investigation Engine

**Five specialist AI agents. One evidence board. Zero backend. A verdict only a human is allowed to sign off on.**

[![Live Demo](https://img.shields.io/badge/LIVE_DEMO-Open_Case_%23001-38F1E8?style=for-the-badge)](https://sentinel-mystery-detective-production.up.railway.app/)
[![Evidence Matrix](https://img.shields.io/badge/EVIDENCE_MATRIX-Holographic_Board-C9A227?style=for-the-badge)](https://sentinel-mystery-detective-production.up.railway.app/matrix.html)
![Stack](https://img.shields.io/badge/stack-HTML%20%C2%B7%20CSS%20%C2%B7%20Vanilla%20JS-1B2A4A?style=flat-square)
![Backend](https://img.shields.io/badge/backend-none%20required-2E5339?style=flat-square)
![Languages](https://img.shields.io/badge/i18n-English%20%2F%20हिन्दी-A6402F?style=flat-square)

</div>

---

## 🔎 What is Sentinel?

Most "AI detective" projects are one chatbot pretending to be five different experts. **Sentinel isn't.**

Sentinel is a fully client-side forensic reasoning engine that walks a real case — ***The Vanishing Aurora Diamond*** — through **five distinct investigative agents**, each with a narrow job, a rulebook it can't break, and a visible trail of *why* it concluded what it concluded. The case ends in a probability-weighted verdict… which a **human investigator** then has to Accept, Revise, or Reject. The AI never gets the final word.

No API keys. No server. No signup. Open the link, and the whole investigation runs in your browser.

> 🎯 **Try it live:** [sentinel-mystery-detective-production.up.railway.app](https://sentinel-mystery-detective-production.up.railway.app/)
> ⚡ **Explore the Evidence Matrix:** [/matrix.html](https://sentinel-mystery-detective-production.up.railway.app/matrix.html)

---

## 🧠 The Five-Agent Pipeline

Each agent only sees its job and the case file — no shortcuts, no jumping to the verdict early.

| # | Agent | Job | Governing Rule |
|---|-------|-----|-----------------|
| 01 | 🕰️ **Timeline Detective** | Reconstructs the exact 4-minute blackout window, minute by minute | Chronology before conclusions |
| 02 | 🔬 **Evidence Specialist** | Separates *verified physical fact* from *unverified statement* | **Rule 2** — facts before inference |
| 03 | 👥 **Suspect Profiler** | Evaluates all 4 individuals against the *same* criteria — no favorites | **Rule 5** — uniform evaluation |
| 04 | ❓ **Skeptic Challenger** | Actively attacks the emerging theory and hunts for reasonable doubt | **Rule 6** — adversarial stress-test before indictment |
| 05 | ⚖️ **Lead Investigator** | Synthesizes everything into a weighted probability verdict | **Rule 9** — mandatory pre-indictment verification |

The result isn't "the AI thinks it's Arjun." It's a fully-traced chain: *timeline → evidence → suspects → challenge → verdict*, with every step inspectable before you trust the next one.

---

## ⚡ Signature Features

### 🧮 Transparent Probability Engine
The final verdict isn't a black-box confidence score — it's a visible, additive breakdown:

```
25% Base Rate  +  30% Alibi Elimination  +  18% Lock Telemetry  +  15% Physical Fibers  −  3% Adversarial Discount
──────────────────────────────────────────────────────────────────────────────────────────────────────────────
                                        =  85% Verdict Confidence
```

Rendered live as an **AI Decision Reasoning Flowchart**, so anyone — juror, teacher, or curious kid — can see exactly which clue moved the needle and by how much.

### 🧪 Interactive "What-If" Simulator
Toggle a single piece of evidence off (try removing **Exhibit E — the blue velvet fibers**) and watch the confidence score and legal viability recompute in real time. It's the fastest way to *feel* why one clue can carry an entire case.

### 🌐 Holographic Evidence Matrix Board
A drag-and-inspect crime board (`matrix.html`) where every exhibit is a clickable, movable node — key proof, timeline events, and cleared alibis are color-coded, with a **timeline scrubber** across the full 8:00 PM – 8:30 PM window and forensic close-ups on demand.

### ⚖️ Human-in-the-Loop Verdict
The investigation never auto-closes itself. The final screen hands control to the human reviewer:

- ✅ **Accept AI Verdict**
- ✎ **Revise / Hold**
- ✗ **Reject AI Verdict**

This is the whole point of the project: agentic AI can build a very strong case — it should never be the one allowed to close it.

### 🌐 Fully Bilingual (English ⇄ हिन्दी)
Every dossier, agent report, and verdict is available in Hindi with a single toggle (`i18n.js`) — built for classrooms and juries far beyond an English-only demo.

### 🪶 Zero Backend, Zero Cost, Zero Latency
No LLM API calls, no server, no database, no signup. `index.html`, `matrix.html`, and a handful of vanilla JS modules — deployable on literally any static host, readable by literally any judge in under 3 seconds.

---

## 🏗️ Under the Hood

```
Sentinel-Mystery-Detective/
├── index.html      # Case dossier · 5-agent investigation flow · verdict screen
├── matrix.html      # Holographic evidence matrix board
├── engine.js        # Rule-governed reasoning engine (the 5 agents + probability model)
├── cases.js         # Case #001 data — suspects, evidence, timeline, rulebook
├── i18n.js          # English / Hindi translation layer
├── app.js           # UI orchestration, navigation, interactivity, what-if simulator
└── styles.css        # HUD / forensic-console visual system
```

**Stack:** Plain HTML5, CSS3, and vanilla JavaScript — deliberately no framework, no build step, no dependencies. Deployed on [Railway](https://railway.app/).

**Why vanilla JS, on purpose:** a rule-governed, deterministic reasoning engine is transparent and auditable *by design* — every agent's conclusion can be traced back to an explicit rule in `cases.js` / `engine.js`, not to an opaque model call. That's a feature, not a limitation: no hallucination risk, no API cost, works offline once loaded, and every verdict is 100% reproducible.

---

## 🚀 Run It Locally

```bash
git clone https://github.com/samikshakalra02/Sentinel-Mystery-Detective.git
cd Sentinel-Mystery-Detective

# any static server works — pick one:
npx serve .
# or
python3 -m http.server 8080
```

Then open `http://localhost:8080` and start the investigation.

---

## 🏆 Why This Should Win

| What most hackathon entries show | What Sentinel actually ships |
|---|---|
| A single chatbot roleplaying "5 experts" in one prompt | Five genuinely separated reasoning stages with distinct rules |
| A confidence number with no explanation | A transparent, additive, inspectable probability breakdown |
| "Trust the AI" | A mandatory human Accept / Revise / Reject checkpoint |
| English-only demo | Full English ⇄ Hindi bilingual experience |
| Needs an API key to even open | Opens instantly, on any device, for free, forever |
| A static verdict | A live evidence board you can drag, click, and stress-test |

Sentinel doesn't ask a jury to imagine what agentic AI investigation *could* look like — it hands them a working one, in their browser, in under three seconds.

---

## 🔮 Roadmap

- [ ] **Case #002+** — expand the rulebook engine to new mysteries (fraud, cybersecurity incident response, supply-chain breach)
- [ ] **Case Creator Studio** — let anyone author a new case against the same evidence-integrity rules
- [ ] **Classroom mode** — facilitator pacing, printable dossiers, group voting on the final verdict
- [ ] **Optional LLM-narrated dialogue layer** on top of the deterministic rule engine, for richer agent "voices" without losing auditability
- [ ] **More languages** beyond English and Hindi

---

## 🤝 Contributing

Found a clue we missed, a rule that should be stricter, or a UI glitch in the matrix board? PRs and issues are welcome — see `cases.js` for how a case is structured and `engine.js` for how the rules are enforced.

## 📄 License

Add your preferred license here (MIT recommended for hackathon submissions).

## 👩‍💻 Author

Built by [**@samikshakalra02**](https://github.com/samikshakalra02).

---

<div align="center">

**[🕵️ Open Case #001 →](https://sentinel-mystery-detective-production.up.railway.app/)**   |   **[⚡ Explore the Evidence Matrix →](https://sentinel-mystery-detective-production.up.railway.app/matrix.html)**

*Evidence grounded. Zero hallucination. The human always signs the warrant.*

</div>
