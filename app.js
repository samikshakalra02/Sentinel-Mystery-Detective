/**
 * SENTINEL-AI: Gradio Mystery Theme Controller
 * 100% Bilingual (English & हिन्दी) Dynamic Rendering Engine
 * Concise Layman-Friendly Explanations across 5 Specialized Agent Screens + Homepage.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Current active screen ID
  let activeScreen = "screen-home";

  // Elements
  const tabsBar = document.getElementById("gradio-tabs-bar");
  const tabButtons = document.querySelectorAll(".gradio-tab-btn");
  const screens = document.querySelectorAll(".gradio-screen");
  const btnToggleLang = document.getElementById("btn-toggle-lang");
  const btnStartInvestigation = document.getElementById("btn-start-investigation");
  const nextButtons = document.querySelectorAll(".btn-next-agent");

  // What-If & Verdict Elements
  const toggleWhatIfFibers = document.getElementById("toggle-whatif-fibers");
  const whatIfDynamicResult = document.getElementById("whatif-dynamic-result");
  const verdictProbBadge = document.getElementById("verdict-prob-badge");
  const verdictStatusBadge = document.getElementById("verdict-status-badge");
  const btnDecisionAccept = document.getElementById("btn-decision-accept");
  const btnDecisionRevise = document.getElementById("btn-decision-revise");
  const btnDecisionReject = document.getElementById("btn-decision-reject");
  const decisionFeedbackNote = document.getElementById("decision-feedback-note");

  // Conviction Bar & Diagram Elements
  const arjunConvictionFill = document.getElementById("arjun-conviction-fill");
  const arjunConvictionPct = document.getElementById("arjun-conviction-pct");
  const probArjunText = document.getElementById("prob-arjun-text");
  const formulaTextDisplay = document.getElementById("formula-text-display");
  const diagramNodeFibers = document.getElementById("diagram-node-fibers");
  const diagramBadgeFibers = document.getElementById("diagram-badge-fibers");
  const diagramSubFibers = document.getElementById("diagram-sub-fibers");
  const diagramNodeVerdict = document.getElementById("diagram-node-verdict");
  const diagramVerdictBadge = document.getElementById("diagram-verdict-badge");
  const diagramVerdictSub = document.getElementById("diagram-verdict-sub");
  const diagramVerdictDesc = document.getElementById("diagram-verdict-desc");

  // Suspects 2, 3, 4 Conviction Bars & Texts
  const lenaConvictionFill = document.getElementById("lena-conviction-fill");
  const lenaConvictionPct = document.getElementById("lena-conviction-pct");
  const probLenaText = document.getElementById("prob-lena-text");

  const sofiaConvictionFill = document.getElementById("sofia-conviction-fill");
  const sofiaConvictionPct = document.getElementById("sofia-conviction-pct");
  const probSofiaText = document.getElementById("prob-sofia-text");

  const theoConvictionFill = document.getElementById("theo-conviction-fill");
  const theoConvictionPct = document.getElementById("theo-conviction-pct");
  const probTheoText = document.getElementById("prob-theo-text");

  // Helper to get active language
  function getLang() {
    return (window.i18n && window.i18n.getLang()) || "en";
  }

  function getDict() {
    const lang = getLang();
    return (window.SENTINEL_I18N && window.SENTINEL_I18N[lang]) || window.SENTINEL_I18N.en;
  }

  // Switch Active Screen
  function switchScreen(screenId) {
    activeScreen = screenId;

    // Update Tab Buttons
    tabButtons.forEach(btn => {
      if (btn.getAttribute("data-tab") === screenId) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // Update Screens
    screens.forEach(screen => {
      if (screen.id === screenId) {
        screen.classList.add("active");
      } else {
        screen.classList.remove("active");
      }
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Render Dynamic Containers based on Language
  function renderAllDynamicContent() {
    const dict = getDict();
    const isHi = getLang() === "hi";

    // 1. Render Agent 1: Timeline
    const timelineContainer = document.getElementById("agent1-timeline-container");
    if (timelineContainer && dict.a1Events) {
      timelineContainer.innerHTML = "";
      dict.a1Events.forEach(evt => {
        const item = document.createElement("div");
        item.className = "gradio-timeline-item";
        if (evt.time.includes("8:20") || evt.time.includes("8:23")) {
          item.classList.add("crime-event");
        }
        item.innerHTML = `
          <div class="timeline-header-row">
            <span class="timeline-title">${evt.title}</span>
            <span class="timeline-time">${evt.time}</span>
          </div>
          <div class="timeline-desc">${evt.desc}</div>
        `;
        timelineContainer.appendChild(item);
      });
    }

    // 2. Render Agent 2: Clues & Evidence
    const cluesContainer = document.getElementById("agent2-clues-container");
    if (cluesContainer && dict.a2Clues) {
      cluesContainer.innerHTML = "";
      dict.a2Clues.forEach(clue => {
        const card = document.createElement("div");
        card.className = "clue-card";
        
        let badgeClass = "badge-fact";
        if (clue.tag === "INFERENCE" || clue.tag === "अपुष्ट बयान") badgeClass = "badge-inference";
        if (clue.tag === "SMOKING GUN" || clue.tag === "मुख्य सबूत") {
          badgeClass = "badge-smoking";
          card.classList.add("smoking-gun");
        }
        if (clue.tag === "CLEARED" || clue.tag === "निर्दोष") badgeClass = "badge-cleared";

        card.innerHTML = `
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="mystery-badge ${badgeClass}">${clue.tag}</span>
          </div>
          <div class="clue-title">${clue.title}</div>
          <div class="clue-desc">${clue.desc}</div>
        `;
        cluesContainer.appendChild(card);
      });
    }

    // 3. Render Agent 3: Suspects
    const suspectsContainer = document.getElementById("agent3-suspects-container");
    if (suspectsContainer && dict.a3Suspects) {
      suspectsContainer.innerHTML = "";
      dict.a3Suspects.forEach(suspect => {
        const card = document.createElement("div");
        card.className = "suspect-card";
        if (suspect.statusBadge === "primary") card.classList.add("primary");

        const statusBadgeClass = suspect.statusBadge === "primary" ? "badge-smoking" : "badge-cleared";
        const labelMotive = isHi ? "मकसद (Motive)" : "Motive";
        const labelAccess = isHi ? "पहुंच (Access)" : "Access";
        const labelAlibi = isHi ? "ठिकाना (Alibi)" : "Alibi";
        const labelProof = isHi ? "भौतिक साक्ष्य (Physical Proof)" : "Physical Proof";

        card.innerHTML = `
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">
            <div>
              <div class="suspect-name">${suspect.name}</div>
              <div class="suspect-role">${suspect.role}</div>
            </div>
            <span class="mystery-badge ${statusBadgeClass}">${suspect.status}</span>
          </div>
          <div class="suspect-field">
            <strong>${labelMotive}</strong>
            <span>${suspect.motive}</span>
          </div>
          <div class="suspect-field">
            <strong>${labelAccess}</strong>
            <span>${suspect.access}</span>
          </div>
          <div class="suspect-field">
            <strong>${labelAlibi}</strong>
            <span>${suspect.alibi}</span>
          </div>
          <div class="suspect-field" style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 8px;">
            <strong style="color: ${suspect.statusBadge === 'primary' ? '#f87171' : '#34d399'};">${labelProof}</strong>
            <span>${suspect.proof}</span>
          </div>
        `;
        suspectsContainer.appendChild(card);
      });
    }

    // 4. Render Agent 4: Skeptic Doubts
    const skepticContainer = document.getElementById("agent4-skeptic-container");
    if (skepticContainer && dict.a4Doubts) {
      skepticContainer.innerHTML = "";
      dict.a4Doubts.forEach(doubt => {
        const item = document.createElement("div");
        item.className = "skeptic-item";
        item.innerHTML = `
          <div class="skeptic-q">
            <span>❓</span>
            <span>${doubt.question}</span>
          </div>
          <div class="skeptic-a">${doubt.answer}</div>
        `;
        skepticContainer.appendChild(item);
      });
    }

    // 5. Update What-If Scenario State
    updateWhatIfState();

    // 6. Update Decision Logger Text
    updateDecisionNote();
  }

  // Update What-If Reaction (85% Standard vs 70% Without Fibers)
  function updateWhatIfState() {
    const dict = getDict();
    const isHi = getLang() === "hi";
    const fibersRemoved = toggleWhatIfFibers ? toggleWhatIfFibers.checked : false;

    if (fibersRemoved) {
      if (whatIfDynamicResult) {
        whatIfDynamicResult.textContent = dict.whatIfResultNoFibers;
        whatIfDynamicResult.className = "whatif-result-text inconclusive";
      }
      if (verdictProbBadge) {
        verdictProbBadge.textContent = isHi ? "70% संभावित कारण" : "70% Probable Cause";
        verdictProbBadge.style.background = "#f59e0b";
        verdictProbBadge.style.boxShadow = "0 0 14px rgba(245, 158, 11, 0.4)";
      }
      if (verdictStatusBadge) {
        verdictStatusBadge.textContent = isHi ? "🟡 संभावित कारण (स्पेक्ट्रोमेट्री अनिवार्य)" : "🟡 PROBABLE CAUSE (FIBER CONFIRMATION MANDATORY)";
        verdictStatusBadge.className = "mystery-badge badge-inference";
      }

      // Conviction bar drops to 70%
      if (arjunConvictionFill) {
        arjunConvictionFill.style.width = "70%";
        arjunConvictionFill.style.background = "linear-gradient(90deg, #f59e0b, #d97706)";
        arjunConvictionFill.style.boxShadow = "0 0 10px rgba(245, 158, 11, 0.4)";
      }
      if (arjunConvictionPct) {
        arjunConvictionPct.textContent = "70%";
        arjunConvictionPct.style.color = "#f59e0b";
      }
      if (probArjunText) {
        probArjunText.textContent = dict.whatIfProbArjun;
      }

      // Alternative suspects rise when fibers are removed (Lena bootprint becomes major alternative: 16%)
      if (lenaConvictionFill) {
        lenaConvictionFill.style.width = "16%";
        lenaConvictionFill.style.background = "#0284c7";
      }
      if (lenaConvictionPct) {
        lenaConvictionPct.textContent = "16%";
      }
      if (probLenaText) {
        probLenaText.textContent = dict.whatIfProbLena;
      }

      if (sofiaConvictionFill) {
        sofiaConvictionFill.style.width = "8%";
        sofiaConvictionFill.style.background = "#0d9488";
      }
      if (sofiaConvictionPct) {
        sofiaConvictionPct.textContent = "8%";
      }
      if (probSofiaText) {
        probSofiaText.textContent = dict.whatIfProbSofia;
      }

      if (theoConvictionFill) {
        theoConvictionFill.style.width = "6%";
        theoConvictionFill.style.background = "#10b981";
      }
      if (theoConvictionPct) {
        theoConvictionPct.textContent = "6%";
      }
      if (probTheoText) {
        probTheoText.textContent = dict.whatIfProbTheo;
      }

      // Dynamic Formula update
      if (formulaTextDisplay) {
        formulaTextDisplay.textContent = dict.whatIfFormulaNoFibers;
      }

      // Diagram Fibers Node excluded state
      if (diagramNodeFibers) {
        diagramNodeFibers.classList.add("node-excluded");
      }
      if (diagramBadgeFibers) {
        diagramBadgeFibers.textContent = dict.diagramFibersExcludedBadge;
      }
      if (diagramSubFibers) {
        diagramSubFibers.textContent = isHi ? "0% (भौतिक साक्ष्य निष्कासित)" : "0% (Physical Evidence Excluded)";
        diagramSubFibers.style.color = "#ef4444";
      }

      // Diagram Verdict Node updates to 70%
      if (diagramNodeVerdict) {
        diagramNodeVerdict.classList.add("verdict-whatif");
      }
      if (diagramVerdictBadge) {
        diagramVerdictBadge.textContent = isHi ? "70% एआई संभावना" : "70% AI PROBABILITY";
        diagramVerdictBadge.className = "flow-card-badge badge-amber";
      }
      if (diagramVerdictSub) {
        diagramVerdictSub.textContent = dict.diagramVerdictWhatIfSub;
        diagramVerdictSub.style.color = "#f59e0b";
      }
      if (diagramVerdictDesc) {
        diagramVerdictDesc.textContent = dict.diagramVerdictWhatIfDesc;
      }

    } else {
      if (whatIfDynamicResult) {
        whatIfDynamicResult.textContent = dict.whatIfResultWithFibers;
        whatIfDynamicResult.className = "whatif-result-text";
      }
      if (verdictProbBadge) {
        verdictProbBadge.textContent = dict.verdictConfidenceVal;
        verdictProbBadge.style.background = "#ef4444";
        verdictProbBadge.style.boxShadow = "0 0 16px rgba(239, 68, 68, 0.55)";
      }
      if (verdictStatusBadge) {
        verdictStatusBadge.textContent = dict.verdictStatusVal;
        verdictStatusBadge.className = "mystery-badge badge-smoking";
      }

      // Conviction bar restored to 85%
      if (arjunConvictionFill) {
        arjunConvictionFill.style.width = "85%";
        arjunConvictionFill.style.background = "linear-gradient(90deg, #f97316, #ef4444)";
        arjunConvictionFill.style.boxShadow = "0 0 10px rgba(239, 68, 68, 0.5)";
      }
      if (arjunConvictionPct) {
        arjunConvictionPct.textContent = "85%";
        arjunConvictionPct.style.color = "#ef4444";
      }
      if (probArjunText) {
        probArjunText.textContent = dict.probArjun;
      }

      // Alternative suspects restored to standard residual levels (Lena 8%, Sofia 4%, Theo 3%)
      if (lenaConvictionFill) {
        lenaConvictionFill.style.width = "8%";
        lenaConvictionFill.style.background = "#0284c7";
      }
      if (lenaConvictionPct) {
        lenaConvictionPct.textContent = "8%";
      }
      if (probLenaText) {
        probLenaText.textContent = dict.probLena;
      }

      if (sofiaConvictionFill) {
        sofiaConvictionFill.style.width = "4%";
        sofiaConvictionFill.style.background = "#0d9488";
      }
      if (sofiaConvictionPct) {
        sofiaConvictionPct.textContent = "4%";
      }
      if (probSofiaText) {
        probSofiaText.textContent = dict.probSofia;
      }

      if (theoConvictionFill) {
        theoConvictionFill.style.width = "3%";
        theoConvictionFill.style.background = "#10b981";
      }
      if (theoConvictionPct) {
        theoConvictionPct.textContent = "3%";
      }
      if (probTheoText) {
        probTheoText.textContent = dict.probTheo;
      }

      // Dynamic Formula restored
      if (formulaTextDisplay) {
        formulaTextDisplay.textContent = dict.calcFormulaText;
      }

      // Diagram Fibers Node restored state
      if (diagramNodeFibers) {
        diagramNodeFibers.classList.remove("node-excluded");
      }
      if (diagramBadgeFibers) {
        diagramBadgeFibers.textContent = isHi ? "+15% भौतिक प्रमाण" : "+15% PHYSICAL ANCHOR";
      }
      if (diagramSubFibers) {
        diagramSubFibers.textContent = dict.dNode4Sub;
        diagramSubFibers.style.color = "#00f0ff";
      }

      // Diagram Verdict Node restored to 85%
      if (diagramNodeVerdict) {
        diagramNodeVerdict.classList.remove("verdict-whatif");
      }
      if (diagramVerdictBadge) {
        diagramVerdictBadge.textContent = isHi ? "85% एआई संभावना" : "85% AI PROBABILITY";
        diagramVerdictBadge.className = "flow-card-badge badge-verdict";
      }
      if (diagramVerdictSub) {
        diagramVerdictSub.textContent = dict.dNode6Sub;
        diagramVerdictSub.style.color = "#00f0ff";
      }
      if (diagramVerdictDesc) {
        diagramVerdictDesc.textContent = dict.dNode6Desc;
      }
    }
  }

  // Update Decision Note
  function updateDecisionNote() {
    const dict = getDict();
    const decision = localStorage.getItem("sentinel_verdict_decision") || "pending";
    if (!decisionFeedbackNote) return;

    if (decision === "accepted") {
      decisionFeedbackNote.textContent = dict.noteAccepted;
      decisionFeedbackNote.style.color = "#34d399";
    } else if (decision === "revised") {
      decisionFeedbackNote.textContent = dict.noteRevised;
      decisionFeedbackNote.style.color = "#fbbf24";
    } else if (decision === "rejected") {
      decisionFeedbackNote.textContent = dict.noteRejected;
      decisionFeedbackNote.style.color = "#f87171";
    } else {
      decisionFeedbackNote.textContent = dict.notePending;
      decisionFeedbackNote.style.color = "#94a3b8";
    }
  }

  // Wire Tab Buttons
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetScreen = btn.getAttribute("data-tab");
      if (targetScreen) switchScreen(targetScreen);
    });
  });

  // Wire Homepage Start Button
  if (btnStartInvestigation) {
    btnStartInvestigation.addEventListener("click", () => {
      switchScreen("screen-agent1");
    });
  }

  // Wire "Next Agent" Buttons
  nextButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const nextScreen = btn.getAttribute("data-next");
      if (nextScreen) switchScreen(nextScreen);
    });
  });

  // Wire Language Switcher
  if (btnToggleLang) {
    btnToggleLang.addEventListener("click", () => {
      if (window.i18n) {
        window.i18n.toggleLang();
      }
    });
  }

  // Listen for language change events
  window.addEventListener("sentinel_lang_changed", () => {
    renderAllDynamicContent();
  });

  // Wire What-If Fibers Toggle
  if (toggleWhatIfFibers) {
    toggleWhatIfFibers.addEventListener("change", () => {
      updateWhatIfState();
    });
  }

  // Wire Human Review Buttons
  if (btnDecisionAccept) {
    btnDecisionAccept.addEventListener("click", () => {
      localStorage.setItem("sentinel_verdict_decision", "accepted");
      updateDecisionNote();
    });
  }
  if (btnDecisionRevise) {
    btnDecisionRevise.addEventListener("click", () => {
      localStorage.setItem("sentinel_verdict_decision", "revised");
      updateDecisionNote();
    });
  }
  if (btnDecisionReject) {
    btnDecisionReject.addEventListener("click", () => {
      localStorage.setItem("sentinel_verdict_decision", "rejected");
      updateDecisionNote();
    });
  }

  // Hash navigation handler (e.g. from matrix.html or direct links)
  function handleHashNav() {
    const hash = window.location.hash.toLowerCase();
    const hashMap = {
      "#home": "screen-home",
      "#dossier": "screen-home",
      "#timeline": "screen-agent1",
      "#agent1": "screen-agent1",
      "#neural-agents": "screen-agent1",
      "#clues": "screen-agent2",
      "#agent2": "screen-agent2",
      "#suspects": "screen-agent3",
      "#agent3": "screen-agent3",
      "#skeptic": "screen-agent4",
      "#agent4": "screen-agent4",
      "#verdict": "screen-agent5",
      "#agent5": "screen-agent5"
    };
    if (hash && hashMap[hash]) {
      switchScreen(hashMap[hash]);
    }
  }

  window.addEventListener("hashchange", handleHashNav);
  handleHashNav();

  // Initial setup: Apply i18n and render content
  if (window.i18n) {
    window.i18n.applyToPage();
  }
  renderAllDynamicContent();
});
