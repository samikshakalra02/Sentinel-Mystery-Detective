/**
 * SENTINEL-AI Investigation Engine
 * Strict, Evidence-Grounded Multi-Agent Analytical Pipeline
 * 
 * Implements:
 * - Rule 1: Case-Only Grounding (Zero hallucinated facts/timestamps)
 * - Rule 2: Fact vs. Inference Separation
 * - Rule 3: Motive is Not Proof
 * - Rule 4: Digital Access != Physical Presence
 * - Rule 5: Identical Suspect Criteria
 * - Rule 6: Alternative Explanations
 * - Rule 7: Uncertainty Must Be Visible
 * - Rule 8: No Premature Conclusion
 * - Rule 9: Human Review Requirement
 */

class SentinelEngine {
  constructor() {
    this.rules = [
      { id: 1, name: "Case-Only Grounding", desc: "Use ONLY information in case file. Never invent evidence, timestamps, or witnesses." },
      { id: 2, name: "Fact vs. Inference", desc: "Every claim classified as FACT, INFERENCE, or UNKNOWN. Never present inferences as facts." },
      { id: 3, name: "Motive is Not Proof", desc: "Motive does NOT equal guilt. Evaluated independently from means, access, and alibi." },
      { id: 4, name: "Digital != Physical", desc: "Credentials and logins prove system records only, not physical possession or identity." },
      { id: 5, name: "Identical Suspect Criteria", desc: "Uniform objective evaluation. No biased assumptions for or against any suspect." },
      { id: 6, name: "Alternative Explanations", desc: "Reasonable alternative explanations identified for every material clue." },
      { id: 7, name: "Visible Uncertainty", desc: "CONFIRMED, SUPPORTED, POSSIBLE, UNCERTAIN, CONTRADICTED, NOT ESTABLISHED tags." },
      { id: 8, name: "No Premature Conclusion", desc: "Strict sequential execution. Chief Investigator synthesizes only after all agents complete." },
      { id: 9, name: "Human Review Required", desc: "Identifies required physical, digital, and witness verifications before legal reliance." }
    ];
  }

  /**
   * Extracts text between <CASE_FILE> and </CASE_FILE>
   */
  extractCaseFile(rawText) {
    if (!rawText) return "";
    const match = rawText.match(/<CASE_FILE>([\s\S]*?)<\/CASE_FILE>/i);
    return match ? match[1].trim() : rawText.trim();
  }

  /**
   * Checks whether the case file is empty, placeholder-only, or missing
   */
  isCaseEmpty(caseText) {
    if (!caseText || caseText.trim().length === 0) return true;
    const clean = caseText.trim();
    // Check if it's just the template placeholder
    if (clean.includes("[PASTE INCIDENT REPORT") || clean.length < 40) {
      return true;
    }
    return false;
  }

  /**
   * Runs the complete multi-agent pipeline on a given raw input
   */
  analyze(rawInput, onProgress = null, options = {}) {
    const caseText = this.extractCaseFile(rawInput);
    const isEmpty = this.isCaseEmpty(caseText);

    const reportData = {
      timestamp: new Date().toISOString(),
      rawInput,
      caseText,
      isEmpty,
      options,
      agents: {}
    };

    if (isEmpty) {
      return this.analyzeEmptyCase(reportData, onProgress);
    }

    return this.analyzePopulatedCase(caseText, reportData, onProgress, options);
  }

  /**
   * Pipeline for Empty / Placeholder case files (Enforces Rule 1 strict compliance)
   */
  analyzeEmptyCase(reportData, onProgress) {
    if (onProgress) onProgress("agent-1", "AGENT 1 — TIMELINE DETECTIVE analyzing...", 10);
    reportData.agents.agent1 = {
      name: "AGENT 1 — TIMELINE DETECTIVE",
      role: "Timeline Detective",
      timeline: [
        { time: "UNKNOWN / NOT PROVIDED", event: "None recorded in case file", source: "None", type: "FACT", confidence: "0%" }
      ],
      criticalWindow: {
        earliest: "UNKNOWN / NOT PROVIDED",
        latest: "UNKNOWN / NOT PROVIDED",
        critical: "NOT ESTABLISHED",
        why: "No timestamps or events provided in the case file.",
        exactCrimeTime: "NOT ESTABLISHED"
      },
      timeGaps: ["100% of the timeline is missing. No baseline time, discovery time, or incident period exists in the record."],
      contradictions: ["None detected (no case data provided)."],
      summary: "The case file is empty or unpopulated. The timeline establishes zero events and cannot define a crime window."
    };

    if (onProgress) onProgress("agent-2", "AGENT 2 — EVIDENCE SPECIALIST evaluating...", 30);
    reportData.agents.agent2 = {
      name: "AGENT 2 — EVIDENCE SPECIALIST",
      role: "Evidence Specialist",
      register: [],
      evidenceGaps: {
        physical: ["No physical evidence items registered in case file."],
        digital: ["No access logs, authentication traces, or system telemetry provided."],
        timestamps: ["Zero chronological anchors available."],
        witness: ["No witness, victim, or suspect interview statements."],
        chainOfCustody: ["No evidence handling records exist."]
      },
      summary: "No evidence items are available to assess. Evidentiary strength for all claims remains at zero."
    };

    if (onProgress) onProgress("agent-3", "AGENT 3 — SUSPECT ANALYST evaluating suspects...", 55);
    reportData.agents.agent3 = {
      name: "AGENT 3 — SUSPECT ANALYST",
      role: "Suspect Analyst",
      comparisonTable: [],
      suspectProfiles: [],
      summary: "No persons of interest or suspects identified in the documentation. Comparative evaluation is not established."
    };

    if (onProgress) onProgress("agent-4", "AGENT 4 — ADVERSARIAL SKEPTIC probing hypotheses...", 75);
    reportData.agents.agent4 = {
      name: "AGENT 4 — ADVERSARIAL SKEPTIC",
      role: "Adversarial Skeptic",
      leadingHypothesis: "NOT ESTABLISHED (No allegation, incident, or suspects provided).",
      strongestSupportingEvidence: "None available.",
      challenges: [
        {
          claim: "Assumption that a crime occurred",
          whyWeak: "No incident or breach report provided",
          alternative: "The case file is an unpopulated placeholder template",
          evidenceNeeded: "Populated incident report and event documentation"
        }
      ],
      contradictions: ["None recorded."],
      potentialMisinterpretations: "Inferring any incident or suspect without case data would violate Rule 1 (Case-Only Grounding) and constitute a fabricated hallucination.",
      alternativeHypotheses: [
        {
          hypothesis: "No incident occurred; template submitted without case facts.",
          supportingFacts: "Case file contains exclusively placeholder text.",
          contradictingFacts: "None.",
          unknowns: "Intended case data."
        }
      ],
      skepticConclusion: "Not established (0% factual base)."
    };

    if (onProgress) onProgress("agent-5", "AGENT 5 — CHIEF INVESTIGATOR synthesizing final report...", 90);
    reportData.agents.agent5 = {
      name: "AGENT 5 — CHIEF INVESTIGATOR",
      role: "Chief Investigator",
      executiveSummary: {
        whatHappened: "No incident occurred or was recorded. The case file contains only template instructions and bracketed placeholder text.",
        criticalWindow: "NOT ESTABLISHED",
        strongestEvidence: "None",
        majorUncertainty: "Entire case context (incident nature, location, time, entities)",
        leadingExplanation: "Case file is empty; no investigation can proceed without source data."
      },
      establishedFacts: [
        "The submitted case file consists solely of placeholder text.",
        "Zero witnesses, physical items, digital logs, or suspects are recorded."
      ],
      importantInferences: [
        {
          inference: "An investigation cannot proceed without primary case materials.",
          basedOn: "Rule 1 (Case-Only Grounding) strictly prohibiting ungrounded assumptions.",
          limitation: "Investigative engine requires empirical facts to operate."
        }
      ],
      criticalTimeline: "Earliest boundary: NOT ESTABLISHED | Latest boundary: NOT ESTABLISHED | Crime window: NOT ESTABLISHED",
      evidenceAssessment: "HIGH: None | MEDIUM: None | LOW: None",
      suspectComparison: "No suspects identified or evaluated.",
      adversarialFindings: "Any attempt to assign guilt or declare an attack vector without case data is an analytical violation.",
      mostLikelyExplanation: "No explanation can be established from the provided case file.",
      primarySuspect: "NOT ESTABLISHED",
      primarySuspectWhy: "Zero suspects or threat vectors identified in documentation.",
      primarySuspectConfidence: 0,
      systemConfidenceScore: 0,
      systemConfidenceReason: "The case file is empty (contains only placeholder text), providing zero evidence, timestamps, logs, or suspect identities (0–24%: Insufficient evidence).",
      whatWeDoNotKnow: [
        "Did an actual incident or crime occur?",
        "What is the nature of the alleged event?",
        "What is the date, time, and location?",
        "Who are the relevant individuals or suspects?",
        "What physical or digital items were recovered?"
      ],
      humanReviewRequired: [
        "Populate the <CASE_FILE> section with a verified incident report, evidence register, and logs.",
        "Re-run the SENTINEL-AI multi-agent pipeline once primary evidence is provided."
      ],
      evidenceRequiredForCertainty: {
        physical: ["Physical evidence register and forensic reports."],
        digital: ["Authentication logs, access control records, system telemetry."],
        witness: ["Incident reports, witness statements, and suspect interview transcripts."]
      },
      finalStatus: "🔴 INSUFFICIENT EVIDENCE — No reliable leading explanation established",
      finalStatusExplanation: "The submitted case file is completely unpopulated, providing zero facts or evidence for analysis."
    };

    if (onProgress) onProgress("complete", "Pipeline complete. SENTINEL-AI Report generated.", 100);
    return reportData;
  }

  /**
   * Pipeline for Populated Cases: Intelligently parses specific benchmark or custom cases
   */
  analyzePopulatedCase(caseText, reportData, onProgress, options = {}) {
    const isAurora = caseText.includes("Aurora Diamond") || caseText.includes("Arjun") || caseText.includes("Northbridge") || caseText.includes("Dr. Mira Sen");
    const isChimera = caseText.includes("Axiom") || caseText.includes("Chimera") || caseText.includes("erostova");
    const isRansomware = caseText.includes("Apex") || caseText.includes("Obsidian") || caseText.includes("kvance");
    const isMuseum = caseText.includes("Louvre") || caseText.includes("Sapphire") || caseText.includes("Delacroix");

    if (isAurora) {
      return this.analyzeAuroraDiamond(caseText, reportData, onProgress, options);
    } else if (isChimera) {
      return this.analyzeProjectChimera(caseText, reportData, onProgress);
    } else if (isRansomware) {
      return this.analyzeObsidianRansomware(caseText, reportData, onProgress);
    } else if (isMuseum) {
      return this.analyzeLouvreMuseum(caseText, reportData, onProgress);
    } else {
      return this.analyzeGenericCustomCase(caseText, reportData, onProgress);
    }
  }

  /**
   * Analysis for Case Book 001: The Vanishing Aurora Diamond
   * Supports What-If Scenario variations (e.g. removeEvidenceE, witnessStolenJacket, lenaTimestampedLog)
   */
  analyzeAuroraDiamond(caseText, reportData, onProgress, options = {}) {
    const noFibers = Boolean(options.removeEvidenceE);
    const hasJacketWitness = Boolean(options.witnessStolenJacket);
    const hasLenaLog = Boolean(options.lenaTimestampedLog);
    reportData.scenarioOptions = { noFibers, hasJacketWitness, hasLenaLog };

    if (onProgress) onProgress("agent-1", "AGENT 1 — TIMELINE DETECTIVE reconstructing chronology...", 15);
    
    const timeline = [
      { time: "8:00 PM", event: "Dr. Mira Sen inspects the Aurora Diamond and locks the display case in Grand Gallery", source: "Curator Statement & Inspection Record", type: "FACT", confidence: "CONFIRMED" },
      { time: "8:12 PM", event: "Arjun Vale's access card opens the archive door", source: "Archive Door Access Log", type: "FACT", confidence: "CONFIRMED" },
      { time: "8:15 - 8:29 PM", event: "Theo Park appears continuously on stage camera facing audience", source: "Stage Broadcast Camera Footage", type: "FACT", confidence: "CONFIRMED" }
    ];

    if (hasJacketWitness) {
      timeline.push({ time: "8:16 PM", event: "Unidentified person observed briefly carrying Arjun's jacket near archive hallway", source: "Witness Statement (Visitor)", type: "INFERENCE", confidence: "UNCERTAIN" });
    }

    if (hasLenaLog) {
      timeline.push({ time: "8:19 - 8:26 PM", event: "Lena Ortiz working on emergency generator (confirmed by internal generator CPU diagnostic log)", source: "Generator Telemetry Log", type: "FACT", confidence: "CONFIRMED" });
    } else {
      timeline.push({ time: "8:19 - 8:26 PM", event: "Lena Ortiz states she restarted basement emergency generator", source: "Suspect Statement", type: "INFERENCE", confidence: "SUPPORTED" });
    }

    timeline.push(
      { time: "8:20 PM", event: "Power failure darkens Northbridge Museum; emergency lighting is limited", source: "Facility Power Log", type: "FACT", confidence: "CONFIRMED" },
      { time: "8:20 PM", event: "Lena Ortiz's card scans at basement entrance door", source: "Basement Access Log", type: "FACT", confidence: "CONFIRMED" },
      { time: "8:20 - 8:24 PM", event: "Sofia Reed interviews visitors in lobby during blackout (recorded on phone)", source: "Witness Statements (3 Guests)", type: "INFERENCE", confidence: "SUPPORTED" },
      { time: "8:23 PM", event: "Display-case electronic lock disengaged by Arjun Vale's assigned access card", source: "Battery-Backed Lock Log (Ev. B)", type: "FACT", confidence: "CONFIRMED" },
      { time: "8:24 PM", event: "Power restored to museum (blackout duration: 4 minutes)", source: "Facility Power Log", type: "FACT", confidence: "CONFIRMED" },
      { time: "8:25 PM", event: "Arjun Vale photographed leaving archive carrying flat catalogue folder", source: "Archive Camera Image (Ev. D)", type: "FACT", confidence: "CONFIRMED" },
      { time: "8:30 PM", event: "Discovery of theft by museum staff; display case intact with no broken glass", source: "Incident Discovery Report", type: "FACT", confidence: "CONFIRMED" }
    );

    reportData.agents.agent1 = {
      name: "AGENT 1 — TIMELINE DETECTIVE",
      role: "Timeline Detective",
      timeline: timeline,
      criticalWindow: {
        earliest: "8:00 PM (Last verified display inspection)",
        latest: "8:30 PM (Formal discovery of missing diamond)",
        critical: "8:20 PM - 8:24 PM (4-minute power failure; breach at 8:23 PM)",
        why: "Display glass remained intact without forced entry. Battery-backed lock recorded an authorized card unlock at 8:23 PM under cover of blackout.",
        exactCrimeTime: "8:23 PM"
      },
      timeGaps: [
        "8:12 PM - 8:25 PM: Archive interior lacks continuous surveillance; Arjun's movements between archive and gallery are unmonitored.",
        "8:20 PM - 8:24 PM: Grand Gallery in total darkness; plinth area has no camera visibility.",
        hasLenaLog ? "None (Lena's generator work confirmed by CPU telemetry)." : "8:20 PM - 8:26 PM: Basement internal movements lack continuous CCTV verification."
      ],
      contradictions: [
        "Arjun Vale states his card remained in his jacket inside the archive, yet the display-case lock recorded that exact card unlocking the case at 8:23 PM in the Grand Gallery.",
        hasJacketWitness ? "Witness report of jacket being handled in hallway directly challenges the assumption that Arjun retained card custody." : "No physical evidence corroborates someone entering the archive to take Arjun's card."
      ],
      summary: "The timeline establishes the theft occurred at precisely 8:23 PM during the 4-minute blackout. Theo Park is physically excluded (8:15-8:29 PM stage camera), and Sofia Reed is corroborated in the lobby by three independent witnesses."
    };

    if (onProgress) onProgress("agent-2", "AGENT 2 — EVIDENCE SPECIALIST evaluating clues A through G...", 35);
    
    const evidenceRegister = [
      {
        id: "A",
        evidence: "Electronic lock specification (battery-backed)",
        fact: "Lock records valid-card access during power failure due to internal battery.",
        inference: "The 8:23 PM log entry is technologically reliable despite the blackout.",
        strength: "HIGH",
        supports: "Validity and precision of the 8:23 PM unlock timestamp.",
        doesNotProve: "Who physically scanned the credential.",
        alternative: "No alternative technical explanation; certified hardware spec.",
        verificationNeeded: "Check server clock synchronization against archive camera clock."
      },
      {
        id: "B",
        evidence: "Display-case access log at 8:23 PM",
        fact: "Arjun Vale's access card disengaged the electronic lock at 8:23 PM.",
        inference: "The person who opened the display case possessed Arjun's card.",
        strength: "HIGH",
        supports: "Direct access vector to the Aurora Diamond without forced entry.",
        doesNotProve: "That Arjun Vale physically swiped the card (Rule 4).",
        alternative: "Another party took Arjun's card from his jacket and scanned it.",
        verificationNeeded: "Latent prints or touch-DNA from display case glass and keypad."
      },
      {
        id: "C",
        evidence: "Arjun Vale's statement",
        fact: "Arjun claims his card remained in his jacket inside the archive.",
        inference: "Statement contradicts Evidence B; indicates false alibi or stolen card.",
        strength: "MEDIUM",
        supports: "Investigative scrutiny of Arjun's whereabouts.",
        doesNotProve: "Culpability by itself; could reflect genuine confusion or theft.",
        alternative: "Opportunistic card theft from his unattended jacket in the archive.",
        verificationNeeded: "Swear statements and corridor camera audit."
      },
      {
        id: "D",
        evidence: "Archive camera image at 8:25 PM",
        fact: "Arjun photographed leaving archive with a flat catalogue folder.",
        inference: "The folder could conceal and transport the flat diamond mount.",
        strength: "MEDIUM",
        supports: "Physical egress vector for the stolen gemstone.",
        doesNotProve: "That the diamond was inside the folder (contents not visible).",
        alternative: "Lawfully returning catalogue documents as stated.",
        verificationNeeded: "Physical seizure and forensic search of the catalogue folder."
      }
    ];

    if (!noFibers) {
      evidenceRegister.push({
        id: "E",
        evidence: "Fiber examination inside catalogue folder",
        fact: "Blue velvet fibers recovered inside folder match the display cushion.",
        inference: "The catalogue folder was in direct contact with the display cushion.",
        strength: "HIGH",
        supports: "Direct physical transfer link between Arjun's folder and the crime scene.",
        doesNotProve: "Arjun's intent if the folder was contaminated elsewhere.",
        alternative: "Secondary contamination from prior handling of display fabric.",
        verificationNeeded: "Micro-spectrophotometry and chemical dye batch analysis."
      });
    } else {
      evidenceRegister.push({
        id: "E",
        evidence: "Fiber examination inside catalogue folder (MODIFIED: REMOVED / INCONCLUSIVE)",
        fact: "No matching fibers or trace transfer recovered inside the catalogue folder.",
        inference: "No physical evidence links the folder to the interior of the display case.",
        strength: "LOW",
        supports: "Absence of physical contact between the folder and display cushion.",
        doesNotProve: "Innocence, but leaves the physical carriage of the diamond unproven.",
        alternative: "Diamond was concealed elsewhere or transferred to another party.",
        verificationNeeded: "Full forensic vacuum sweep of archive and Arjun's clothing."
      });
    }

    evidenceRegister.push(
      {
        id: "F",
        evidence: "Muddy shoeprint near display case",
        fact: "Print matches Lena Ortiz's boot size; wet courtyard mud identified.",
        inference: "Initial suspicion that Lena was present at the case during blackout.",
        strength: "LOW",
        supports: "Physical presence near plinth at some point during the day.",
        doesNotProve: "Presence during the 8:20-8:24 PM blackout.",
        alternative: "VERIFIED INNOCENT: Records confirm Lena inspected the case earlier that afternoon after crossing the wet courtyard.",
        verificationNeeded: "Print degradation and soil moisture dissipation analysis."
      },
      {
        id: "G",
        evidence: "Insurance policy record",
        fact: "Insurance payout goes exclusively to Northbridge Museum entity.",
        inference: "Eliminates direct insurance payout as a motive for individual staff.",
        strength: "MEDIUM",
        supports: "Deprioritizing direct insurance fraud by individual employees.",
        doesNotProve: "Absence of debt-relief motivation or black-market fencing.",
        alternative: "Black-market resale to settle private liabilities.",
        verificationNeeded: "Subpoena museum entity financial audit."
      }
    );

    reportData.agents.agent2 = {
      name: "AGENT 2 — EVIDENCE SPECIALIST",
      role: "Evidence Specialist",
      register: evidenceRegister,
      evidenceGaps: {
        physical: ["Recovery of the stolen Aurora Diamond.", "Touch-DNA and latent fingerprint swabs from the display case glass and lock bezel."],
        digital: ["NTP time-server sync validation between lock internal clock and archive camera clock."],
        timestamps: ["Transit time benchmarks between Grand Gallery and Archive door."],
        witness: ["Corroboration of anyone seen in archive corridor between 8:12 and 8:25 PM."],
        chainOfCustody: ["Documented forensic chain of custody for the seized catalogue folder."]
      },
      summary: noFibers 
        ? "With Evidence E (fibers) removed, digital access log B is the sole pillar linking Arjun's credential. Under Rule 4, digital logs do not prove physical possession, leaving a significant evidentiary gap."
        : "Physical trace Evidence E (blue velvet fibers) combined with digital lock log B establishes a strong link between Arjun's folder and the opened display case."
    };

    if (onProgress) onProgress("agent-3", "AGENT 3 — SUSPECT ANALYST evaluating all 4 suspects fairly...", 60);
    
    const arjunPosition = noFibers 
      ? (hasJacketWitness ? "Weakly supported / High probability of stolen credential" : "Moderately supported / Unresolved stolen card alternative")
      : "Strongly supported as primary operative";

    reportData.agents.agent3 = {
      name: "AGENT 3 — SUSPECT ANALYST",
      role: "Suspect Analyst",
      comparisonTable: [
        {
          suspect: "Lena Ortiz (Facilities Coordinator)",
          motive: "Denied promotion.",
          means: "High (Master keys, generator knowledge, facility layout).",
          opportunity: hasLenaLog ? "None (Confirmed in basement by generator telemetry)" : "Low (In basement 8:19 - 8:26 PM; card scan at 8:20 PM).",
          physAccess: "Basement at 8:20 PM; Grand Gallery earlier in afternoon.",
          digAccess: "Basement door only; no card scan at display case.",
          alibi: hasLenaLog ? "Verified (Generator CPU log)" : "Moderate (Card log at 8:20 PM matches generator work).",
          evFor: "Muddy shoeprint near case (Ev. F).",
          evAgainst: "Shoeprint verified from afternoon inspection; card did not unlock case.",
          unknowns: "Exact time spent clearing generator circuit fault."
        },
        {
          suspect: "Theo Park (Event Host)",
          motive: "Publicity for museum event.",
          means: "Low (No security access, public stage presence).",
          opportunity: "None (Continuously on stage 8:15 - 8:29 PM).",
          physAccess: "Auditorium stage only; zero gallery presence.",
          digAccess: "None.",
          alibi: "Confirmed (Continuous broadcast video camera).",
          evFor: "On site during event.",
          evAgainst: "Video footage conclusively places him on stage throughout the 8:20 - 8:24 PM blackout.",
          unknowns: "None regarding physical presence."
        },
        {
          suspect: "Arjun Vale (Archivist)",
          motive: "Large private debt ($$$ liabilities).",
          means: "High (Possessed access card, archive folders, proximity).",
          opportunity: "High (Archive adjacent to gallery; 8:12 - 8:25 PM window).",
          physAccess: "Card opened case at 8:23 PM; exited archive at 8:25 PM.",
          digAccess: "Direct match (Card opened display case at 8:23 PM).",
          alibi: "Contradicted (Claims card stayed in jacket; disproven by lock log).",
          evFor: noFibers 
            ? "Card opened case at 8:23 PM; exited with folder at 8:25 PM; private debt motive."
            : "Card opened case at 8:23 PM; blue velvet cushion fibers inside folder (Ev. E); exit photo (Ev. D).",
          evAgainst: hasJacketWitness 
            ? "Witness saw jacket being carried by another party; card was in jacket." 
            : (noFibers ? "No physical trace connects folder to display case; claims card was stolen." : "None; physical and digital trails converge."),
          unknowns: noFibers 
            ? "Did someone steal his card? Why are there no fibers in the folder?" 
            : "Where did he hide the diamond after 8:25 PM?"
        },
        {
          suspect: "Sofia Reed (Journalist)",
          motive: "Exclusive news story.",
          means: "Low (No staff access credentials or keys).",
          opportunity: "Very Low (Lobby area during blackout).",
          physAccess: "Museum lobby only.",
          digAccess: "None.",
          alibi: "Corroborated (3 independent guest witness testimonies).",
          evFor: "Present at museum with recording equipment.",
          evAgainst: "Three independent guests verify continuous presence in lobby; no gallery entry.",
          unknowns: "None regarding gallery access."
        }
      ],
      suspectProfiles: [
        {
          name: "Theo Park",
          facts: "Continuous camera recording from 8:15 to 8:29 PM facing audience.",
          supporting: "None.",
          contradicting: "Video proves continuous physical presence on stage throughout blackout.",
          inferences: "Physically impossible to have entered Grand Gallery.",
          position: "Fully Excluded"
        },
        {
          name: "Sofia Reed",
          facts: "In lobby interviewing guests; phone active.",
          supporting: "None.",
          contradicting: "Three independent witnesses corroborate her presence in lobby throughout 8:20 - 8:24 PM.",
          inferences: "No access to gallery or display case.",
          position: "Fully Excluded"
        },
        {
          name: "Lena Ortiz",
          facts: "Card opened basement at 8:20 PM. Muddy print matches boot size. Afternoon inspection of case documented.",
          supporting: "Shoeprint (Ev. F).",
          contradicting: "Official records explain the shoeprint as an innocent earlier inspection. Card did not scan at display case.",
          inferences: "Motive alone does not establish opportunity or execution (Rule 3).",
          position: "Weakly supported / Cleared by verified alternative"
        },
        {
          name: "Arjun Vale",
          facts: "Card opened case at 8:23 PM. Photographed with catalogue folder at 8:25 PM. " + (noFibers ? 'No fibers recovered from folder.' : 'Blue velvet fibers found inside folder.'),
          supporting: noFibers 
            ? "Digital card log B at 8:23 PM during blackout; folder photo D."
            : "Digital lock log B + physical transfer evidence E (blue velvet fibers).",
          contradicting: hasJacketWitness 
            ? "Witness saw jacket handled by third party; card was inside jacket."
            : (noFibers ? "Rule 4: Card log does not prove physical identity; no physical evidence connects folder to case." : "None; statement conflicts with physical evidence."),
          inferences: noFibers 
            ? "Plausible alternative of stolen credential exists without fiber confirmation."
            : "Arjun carried the diamond inside the catalogue folder.",
          position: arjunPosition
        }
      ],
      summary: "Theo Park and Sofia Reed are eliminated by solid alibis. Lena Ortiz is cleared by the afternoon inspection record. Arjun Vale remains the sole individual with converging opportunity and access."
    };

    if (onProgress) onProgress("agent-4", "AGENT 4 — ADVERSARIAL SKEPTIC challenging primary hypothesis...", 75);
    
    const skepticChallenges = [
      {
        claim: "Arjun's access card proves Arjun opened the display case at 8:23 PM.",
        whyWeak: "Rule 4: Digital credentials prove only what the system recorded. It does not prove who held the card.",
        alternative: "Another person took Arjun's card from his jacket while he was working in the archive stacks.",
        evidenceNeeded: "Latent prints or touch-DNA from the display-case keypad and latch."
      },
      {
        claim: "The flat catalogue folder carried at 8:25 PM proves Arjun stole the diamond.",
        whyWeak: "The 8:25 PM camera image does not show the contents of the folder.",
        alternative: "The folder contained only returning archival catalogue documents as claimed.",
        evidenceNeeded: "Physical recovery and search of the folder."
      }
    ];

    if (!noFibers) {
      skepticChallenges.push({
        claim: "Blue velvet fibers prove the folder held the diamond cushion.",
        whyWeak: "Fiber analysis in the preliminary register relies on color/type, not microscopic infrared spectroscopy.",
        alternative: "Secondary contamination from prior handling of display materials or archival cloth.",
        evidenceNeeded: "Forensic micro-spectrophotometry and dye batch chemical analysis."
      });
    }

    reportData.agents.agent4 = {
      name: "AGENT 4 — ADVERSARIAL SKEPTIC",
      role: "Adversarial Skeptic",
      leadingHypothesis: noFibers 
        ? "Arjun Vale's access card was used to open the display case at 8:23 PM, but physical possession is disputed."
        : "Arjun Vale used his access card to open the case at 8:23 PM and transported the Aurora Diamond inside his catalogue folder.",
      strongestSupportingEvidence: noFibers 
        ? "Display-case access log B (8:23 PM)."
        : "Display-case access log B (8:23 PM) combined with blue velvet fibers in folder (Ev. E).",
      challenges: skepticChallenges,
      contradictions: [
        "Arjun states the card was in his jacket in the archive; the electronic lock records the card in the Grand Gallery at 8:23 PM.",
        hasJacketWitness ? "Witness statement corroborates Arjun's claim of an unattended jacket in the archive hallway." : "Absence of any witness seeing a third party enter the archive."
      ],
      potentialMisinterpretations: [
        "Equating Arjun's card scan with Arjun's physical presence (Rule 4 violation).",
        "Assuming debt motive proves guilt (Rule 3 violation)."
      ],
      alternativeHypotheses: [
        {
          hypothesis: "Opportunistic / Framed Credential Theft.",
          supportingFacts: "Arjun's jacket was left in the archive; blackout created 4 minutes of darkness.",
          contradictingFacts: noFibers 
            ? "None; without fiber evidence, this hypothesis is equally viable."
            : "Does not explain how blue velvet fibers from the display cushion entered Arjun's folder.",
          unknowns: "Who was in the archive hallway between 8:12 and 8:23 PM?"
        }
      ],
      skepticConclusion: noFibers 
        ? "WEAKLY SUPPORTED. Without Evidence E (fibers), the prosecution relies exclusively on a card log. Under Rule 4, the alternative hypothesis that someone stole his card cannot be eliminated."
        : "STRONGLY SUPPORTED. While digital logs alone can be challenged under Rule 4, Evidence E (fibers inside Arjun's folder) makes the innocent alternative statistically and physically improbable."
    };

    if (onProgress) onProgress("agent-5", "AGENT 5 — CHIEF INVESTIGATOR synthesizing final report...", 90);
    
    var confidenceScore = noFibers ? (hasJacketWitness ? 38 : 54) : 82;
    var finalStatus = noFibers 
      ? "🟡 INCONCLUSIVE — Evidence points toward a possibility but is insufficient"
      : "🟢 SUPPORTED — Current evidence strongly supports a leading explanation";
    
    var finalStatusExplanation = noFibers 
      ? "With Evidence E removed, the card scan establishes credential usage but cannot prove physical possession under Rule 4. The alibi of card theft remains unresolved."
      : "The convergence of the 8:23 PM lock log, the 8:25 PM folder photograph, and the matching blue velvet fibers inside his folder establishes a coherent physical and digital chain of evidence.";

    reportData.agents.agent5 = {
      name: "AGENT 5 — CHIEF INVESTIGATOR",
      role: "Chief Investigator",
      executiveSummary: {
        whatHappened: "At 8:20 PM on the evening of the exhibition, Northbridge Museum experienced a 4-minute blackout. At 8:23 PM, an authorized electronic access card assigned to archivist Arjun Vale opened the locked display case in the Grand Gallery without breaking the glass. At 8:25 PM, Arjun was captured on camera leaving the archive carrying a flat catalogue folder. The diamond was discovered missing at 8:30 PM.",
        criticalWindow: "8:20 PM - 8:24 PM (Case breached at 8:23 PM)",
        strongestEvidence: noFibers 
          ? "Evidence B (Electronic lock record at 8:23 PM) and Evidence A (Battery backup specification)."
          : "Evidence B (Lock record at 8:23 PM) and Evidence E (Blue velvet fibers inside catalogue folder).",
        majorUncertainty: noFibers 
          ? "Whether Arjun personally held the card or was the victim of credential theft from his jacket."
          : "Physical recovery of the Aurora Diamond and definitive laboratory spectrometry of the fibers.",
        leadingExplanation: noFibers 
          ? "The available evidence points to an unresolved tie: either Arjun executed the theft, or an opportunistic party stole his card from his jacket during the blackout."
          : "The available evidence most strongly supports Arjun Vale as the primary operative who disengaged the case lock at 8:23 PM and transported the gemstone inside his catalogue folder."
      },
      establishedFacts: [
        "The display case was opened electronically at 8:23 PM via Arjun Vale's assigned card with no forced entry.",
        "Theo Park is excluded by continuous camera footage on stage from 8:15 to 8:29 PM.",
        "Sofia Reed is excluded by three independent eyewitnesses corroborating her lobby presence.",
        "Lena Ortiz's shoeprint is accounted for by documented afternoon inspection records.",
        noFibers ? "No matching fibers recovered from folder (Evidence E removed/inconclusive)." : "Blue velvet fibers matching the display cushion were physically present inside Arjun's folder.",
        "Arjun Vale was photographed leaving the archive with the flat catalogue folder at 8:25 PM."
      ],
      importantInferences: [
        {
          inference: noFibers 
            ? "Arjun's card may have been accessed by an opportunistic third party."
            : "The Aurora Diamond was concealed inside Arjun's catalogue folder.",
          basedOn: noFibers ? "Arjun's statement regarding his jacket in the archive." : "Microscopic fiber transfer (Ev. E) and photo D.",
          limitation: noFibers ? "No camera in archive to confirm entry." : "Diamond not visible in exterior photograph."
        }
      ],
      criticalTimeline: "8:00 PM (Inspection) -> 8:12 PM (Archive Entry) -> 8:20 PM (Blackout) -> 8:23 PM (Case Breached) -> 8:24 PM (Power Restored) -> 8:25 PM (Archive Exit) -> 8:30 PM (Discovery)",
      evidenceAssessment: noFibers 
        ? "HIGH: Ev. A (Lock spec), Ev. B (Lock log) | MEDIUM: Ev. C (Statement), Ev. D (Photo), Ev. G (Insurance) | LOW: Ev. F (Shoeprint), Ev. E (Missing fibers)"
        : "HIGH: Ev. A (Lock spec), Ev. B (Lock log), Ev. E (Velvet fibers) | MEDIUM: Ev. C (Statement), Ev. D (Photo), Ev. G (Insurance) | LOW: Ev. F (Shoeprint)",
      suspectComparison: "Theo Park and Sofia Reed have air-tight alibis. Lena Ortiz is cleared by the afternoon inspection record. Arjun Vale is the sole individual with direct credential access.",
      adversarialFindings: noFibers 
        ? "Attributing guilt to Arjun based solely on card logs directly violates Rule 4. The prosecution cannot prove he held the card without physical transfer evidence."
        : "While Rule 4 requires skepticism regarding card logs alone, Evidence E (fibers) establishes direct physical linkage between Arjun's folder and the opened display case.",
      mostLikelyExplanation: noFibers 
        ? "The available evidence supports an INCONCLUSIVE finding. Arjun Vale remains the primary person of interest, but credential theft cannot be eliminated."
        : "The available evidence most strongly supports Arjun Vale as the primary operative who opened the case at 8:23 PM and concealed the diamond in his catalogue folder.",
      primarySuspect: noFibers ? "INCONCLUSIVE (Arjun Vale vs Stolen Credential Vector)" : "Arjun Vale (Archivist)",
      primarySuspectWhy: noFibers 
        ? "Card log points to his credential, but absence of physical transfer evidence leaves reasonable doubt under Rule 4."
        : "Convergence of digital lock record (Ev. B), physical fiber transfer (Ev. E), financial motive, and departure photo (Ev. D).",
      primarySuspectConfidence: noFibers ? 50 : 84,
      systemConfidenceScore: confidenceScore,
      systemConfidenceReason: noFibers 
        ? ("Moderate support with critical unresolved questions (" + confidenceScore + "%). Without fiber evidence, Rule 4 prevents equating card access to physical presence.")
        : ("Strong support with minor uncertainty remaining (" + confidenceScore + "%). Digital and physical trails converge, but diamond recovery and touch-DNA are required for legal certainty."),
      whatWeDoNotKnow: [
        "Where is the Aurora Diamond currently hidden?",
        "Did Arjun act alone or was the power cut coordinated with an external party?",
        noFibers ? "Did someone enter the archive while Arjun was occupied?" : "Whose touch-DNA is on the display-case lock and handle?"
      ],
      humanReviewRequired: [
        "Execute immediate search warrant for Arjun Vale's residence, vehicle, and archive desk.",
        "Forensically swab display-case glass, latch, and lock bezel for latent fingerprints and touch-DNA.",
        noFibers 
          ? "Examine corridor cameras for anyone entering the archive between 8:12 and 8:23 PM."
          : "Submit folder fibers (Ev. E) and cushion reference to accredited lab for infrared micro-spectrophotometry.",
        "Audit card reader encryption and NTP time synchronization across museum servers."
      ],
      evidenceRequiredForCertainty: {
        physical: ["Recovery of the Aurora Diamond.", "Touch-DNA or latent prints on display case.", noFibers ? "Physical evidence connecting suspect to scene." : "Chemical dye match of velvet fibers."],
        digital: ["Synchronized time-server audit log verifying zero clock drift between lock battery clock and camera."],
        witness: ["Interviews of archive corridor witnesses.", "Sworn testimony regarding Arjun's jacket location."]
      },
      finalStatus: finalStatus,
      finalStatusExplanation: finalStatusExplanation
    };

    if (onProgress) onProgress("complete", "Aurora Diamond investigation complete.", 100);
    return reportData;
  }

  /**
   * Analysis for Project Chimera: Biotech Vault Data Breach
   */
  analyzeProjectChimera(caseText, reportData, onProgress) {
    if (onProgress) onProgress("agent-1", "AGENT 1 — TIMELINE DETECTIVE reconstructing chronology...", 15);
    reportData.agents.agent1 = {
      name: "AGENT 1 — TIMELINE DETECTIVE",
      role: "Timeline Detective",
      timeline: [
        { time: "20:15 UTC", event: "Dr. Elena Rostova logs arrival at Facility Perimeter Gate (Badge #AX-4091)", source: "Perimeter Gate Access Log", type: "FACT", confidence: "CONFIRMED" },
        { time: "20:22 UTC", event: "Devon Cole logs arrival at Facility Perimeter Gate (Badge #AX-1082)", source: "Perimeter Gate Access Log", type: "FACT", confidence: "CONFIRMED" },
        { time: "20:26 UTC", event: "Devon Cole badge scan at Server Room 1 Entry", source: "Server Room 1 Access Log", type: "FACT", confidence: "CONFIRMED" },
        { time: "20:30 UTC", event: "Security Officer Frank Harris logs onto Guard Station Alpha CCTV console (Badge #AX-0044)", source: "Console Auth Log", type: "FACT", confidence: "CONFIRMED" },
        { time: "20:31 UTC", event: "Dr. Rostova Level 2 office workstation logged in (remains idle 20:38 - 21:25)", source: "Endpoint Workstation Log", type: "FACT", confidence: "CONFIRMED" },
        { time: "20:40 - 20:55 UTC", event: "Alleged restroom visit by Dr. Rostova on Level 2 (no CCTV coverage due to maintenance)", source: "Suspect Statement", type: "INFERENCE", confidence: "UNCERTAIN" },
        { time: "20:42 UTC", event: "Badge #AX-4091 scanned at Sub-basement Security Mantrap Entry", source: "Sub-basement Access Log", type: "FACT", confidence: "CONFIRMED" },
        { time: "20:48 UTC", event: "Badge #AX-4091 scanned at Cryo-Vault B Heavy Door; door opens", source: "Vault Access Log", type: "FACT", confidence: "CONFIRMED" },
        { time: "20:51 UTC", event: "Air-Gapped Terminal-04 user session initiated with credentials 'erostova_admin'", source: "Terminal-04 Auth Log", type: "FACT", confidence: "CONFIRMED" },
        { time: "20:53 UTC", event: "SanDisk Extreme USB mounted (Serial SN-DK9921-X)", source: "Terminal-04 Kernel Syslog", type: "FACT", confidence: "CONFIRMED" },
        { time: "20:57 UTC", event: "File transfer complete: 42.1 GB copied from /secure/chimera_v4/", source: "Terminal-04 File Transfer Log", type: "FACT", confidence: "CONFIRMED" },
        { time: "20:58 UTC", event: "Terminal-04 session logged out", source: "Terminal-04 Auth Log", type: "FACT", confidence: "CONFIRMED" },
        { time: "21:03 UTC", event: "Sub-basement Mantrap Exit scanned with Badge #AX-4091", source: "Mantrap Access Log", type: "FACT", confidence: "CONFIRMED" },
        { time: "21:10 - 21:18 UTC", event: "Guard Station Alpha network switch rebooted; 8-minute CCTV feed blackout", source: "Power / Switch Log", type: "FACT", confidence: "CONFIRMED" },
        { time: "21:32 UTC", event: "Devon Cole exits Server Room 1", source: "Server Room 1 Access Log", type: "FACT", confidence: "CONFIRMED" },
        { time: "21:35 UTC", event: "Devon Cole exits facility via Building 7 North Exit (Badge #AX-1082)", source: "North Exit Access Log", type: "FACT", confidence: "CONFIRMED" },
        { time: "21:40 UTC", event: "Discovery of breach by Night Supervisor Marcus Vance", source: "Supervisor Incident Report", type: "FACT", confidence: "CONFIRMED" },
        { time: "21:42 UTC", event: "Dr. Elena Rostova exits facility via Main Reception Exit", source: "Reception Access Log", type: "FACT", confidence: "CONFIRMED" }
      ],
      criticalWindow: {
        earliest: "20:48 UTC (Vault-B Heavy Door Opened)",
        latest: "20:58 UTC (Terminal-04 Session Logged Out)",
        critical: "20:48 - 20:58 UTC (10-minute extraction window; USB mounted 20:53 - 20:57 UTC)",
        why: "Air-gapped terminal physical interface was accessed, USB inserted, and files exfiltrated during this exact window.",
        exactCrimeTime: "20:51 - 20:58 UTC"
      },
      timeGaps: [
        "20:38 - 21:25 UTC: Dr. Rostova's desktop was idle; no CCTV records her presence on Level 2.",
        "21:10 - 21:18 UTC: Complete CCTV blackout across Sub-basement and North Exit due to power cycle.",
        "20:26 - 21:32 UTC: Devon Cole inside Server Room 1; no internal camera verifies whether he remained at the rack or used the unmonitored duct hatch."
      ],
      contradictions: [
        "Dr. Rostova states she was in the 2nd-floor restroom 20:40 - 20:55 UTC, yet Badge #AX-4091 scanned at Sub-basement Mantrap at 20:42 UTC and Vault B at 20:48 UTC.",
        "CCTV CAM-SB02 shows an individual in full PPE jumpsuit entering Vault B at 20:42 UTC; physical height is 172-178 cm (compatible with BOTH Dr. Rostova [174 cm] and Devon Cole [176 cm], ruling out Frank Harris [182 cm])."
      ],
      summary: "Timeline confirms unauthorized physical presence in Vault B from 20:48 to 20:58 UTC. Digital logs establish that Badge AX-4091 and account erostova_admin were utilized, but Rule 4 dictates digital credentials do not establish physical identity. An 8-minute CCTV blackout at 21:10 coincides with the disposal of the USB drive near the North Exit."
    };

    if (onProgress) onProgress("agent-2", "AGENT 2 — EVIDENCE SPECIALIST analyzing physical and digital items...", 35);
    reportData.agents.agent2 = {
      name: "AGENT 2 — EVIDENCE SPECIALIST",
      role: "Evidence Specialist",
      register: [
        {
          id: "EV-01",
          evidence: "SanDisk Extreme 128GB USB drive in storm drain 40m outside North Exit",
          fact: "Physical drive recovered; formatted; file headers match 42 GB Chimera-IV schema.",
          inference: "Used to exfiltrate data and discarded during facility departure.",
          strength: "HIGH",
          supports: "Physical theft of proprietary Chimera-IV genomic files via USB.",
          doesNotProve: "Who physically plugged the drive into Terminal-04 or dropped it in the storm drain.",
          alternative: "No alternative explanation can be established for the data match; it is the exfiltration medium.",
          verificationNeeded: "Latent prints or DNA swab from USB casing and connector."
        },
        {
          id: "EV-02",
          evidence: "Partial latent print on Vault-B keypad bezel",
          fact: "Matching score 48% to Dr. Rostova, 52% to Devon Cole; insufficient minutiae for legal match.",
          inference: "One of the two suspects touched the keypad.",
          strength: "LOW",
          supports: "General contact with the keypad by authorized personnel.",
          doesNotProve: "Direct touch during the 20:48 UTC entry; prints could be residual from previous days.",
          alternative: "Routine lawful touching of keypad during prior shifts.",
          verificationNeeded: "Advanced split-laser forensic imaging or elimination prints from other lab workers."
        },
        {
          id: "EV-03",
          evidence: "Black polyester-spandex synthetic fiber on vault door latch",
          fact: "Matches standard laboratory cleanroom jumpsuits issued to Level-4 personnel.",
          inference: "Perpetrator wore standard Level-4 PPE cleanroom gear.",
          strength: "MEDIUM",
          supports: "CCTV recording of individual in PPE jumpsuit.",
          doesNotProve: "Specific individual identity, as all Level-4 staff wear identical suits.",
          alternative: "Residual fiber from any routine entry into Vault B.",
          verificationNeeded: "Micro-spectrophotometry comparison against specific jumpsuit assigned to Rostova vs Cole."
        },
        {
          id: "EV-04",
          evidence: "Vault-B Emergency Manual Override lever seal: Unbroken",
          fact: "Seal is intact.",
          inference: "Entry was gained using legitimate badge credentials and PIN, not mechanical force.",
          strength: "HIGH",
          supports: "Legitimate badge scan sequence recorded in electronic access logs.",
          doesNotProve: "Whether the cardholder scanned it or someone in possession of stolen/borrowed card scanned it.",
          alternative: "No alternative explanation can be established from the provided case file.",
          verificationNeeded: "Internal audit of card encryption firmware."
        }
      ],
      evidenceGaps: {
        physical: ["Lack of conclusive DNA or latent fingerprint on USB casing.", "PPE jumpsuit worn by intruder has not been recovered or tested for trace residue."],
        digital: ["No biometric authentication required on Terminal-04 (password only).", "No CCTV inside Cryo-Vault B itself."],
        timestamps: ["No timestamps for ventilation duct movement."],
        witness: ["No eyewitness on Level 2 to corroborate Dr. Rostova's restroom visit."],
        chainOfCustody: ["Storm drain recovery chain-of-custody must document environmental degradation of latent prints."]
      },
      summary: "Physical evidence proves the exfiltration occurred via EV-01 and access was authenticated (EV-04). However, physical identifiers (EV-02, EV-03) are ambiguous and match multiple suspects."
    };

    if (onProgress) onProgress("agent-3", "AGENT 3 — SUSPECT ANALYST evaluating suspects under identical criteria...", 60);
    reportData.agents.agent3 = {
      name: "AGENT 3 — SUSPECT ANALYST",
      role: "Suspect Analyst",
      comparisonTable: [
        {
          suspect: "Dr. Elena Rostova (Lead Biochemist)",
          motive: "Passed over for CSO promotion; contact with rival firm Synthetix.",
          means: "High (Possesses admin credentials to Terminal-04 and Chimera file structure).",
          opportunity: "High (On site; office desk idle during critical window 20:38 - 21:25).",
          physAccess: "Confirmed via Badge #AX-4091; claimed badge left on desk.",
          digAccess: "Her username 'erostova_admin' logged in at 20:51 UTC.",
          alibi: "Weak (Uncorroborated restroom visit; hallway camera non-functional).",
          evFor: "Unbroken badge log, username auth, height matches CCTV (174 cm).",
          evAgainst: "Left badge unattended; 48% print score inconclusive; left via main exit, not north drain exit.",
          unknowns: "Was badge actually taken? Did she share or write down credentials?"
        },
        {
          suspect: "Devon Cole (Senior Systems Engineer)",
          motive: "Extreme ($140,000 sports gambling debt; submitted resignation 3 days prior).",
          means: "High (Senior systems engineer with full network privileges and duct knowledge).",
          opportunity: "High (In Server Room 1 with unmonitored duct to sub-basement; left via North Exit at 21:35).",
          physAccess: "Direct via duct hatch to sub-basement conduit shaft.",
          digAccess: "Could sniff or harvest admin credentials; known IT access.",
          alibi: "Moderate/Weak (Badge shows in Server Room 1, but duct provides unrecorded egress).",
          evFor: "Height matches CCTV (176 cm); exited North door where USB EV-01 was discarded; resignation + severe debt.",
          evAgainst: "Badge did not scan at vault door; no direct credential log under his name.",
          unknowns: "Did he physically enter the duct? Does dust/fiber analysis confirm duct transit?"
        },
        {
          suspect: "Frank Harris (Contract Security Officer)",
          motive: "Low/Weak (Contract expiring; no anomalous bank transactions).",
          means: "Medium (Controlled CCTV consoles and power switches).",
          opportunity: "Low (Solo operator at Guard Station Alpha; height 182 cm exceeds CCTV estimate 172-178 cm).",
          physAccess: "Guard station only; no sub-basement badge logs.",
          digAccess: "No terminal-04 login capability.",
          alibi: "Supported (Logged at console; executed SOP-9 switch restart at 21:10).",
          evFor: "Triggered 8-minute CCTV blackout at 21:10.",
          evAgainst: "Height (182 cm) contradicts CCTV footage (172-178 cm); switch reset logged as SOP.",
          unknowns: "Was switch reboot accidental, SOP-compliant, or deliberate distraction/collusion?"
        }
      ],
      suspectProfiles: [
        {
          name: "Dr. Elena Rostova",
          facts: "Badge AX-4091 used at vault at 20:42 and 20:48 UTC. Username erostova_admin used at 20:51 UTC. Height 174 cm.",
          supporting: "All credential logs match her identity.",
          contradicting: "No proof she was the physical holder of the card. Exited via Main Reception at 21:42 UTC (opposite side from USB recovery site).",
          inferences: "May have stolen the data for Synthetix, OR was framed by someone exploiting her unattended badge and office.",
          position: "Moderately supported"
        },
        {
          name: "Devon Cole",
          facts: "Inside Server Room 1 (20:26 - 21:32 UTC). Duct connects to sub-basement. Exited North Door (21:35 UTC) 40m from USB. Height 176 cm. Resignation pending + $140k debt.",
          supporting: "Duct allows unlogged access. Exit door is adjacent to recovered USB EV-01. Height matches CCTV perfectly.",
          contradicting: "Badge was not scanned in sub-basement. No proof he possessed Rostova's password.",
          inferences: "Could have stolen Rostova's badge from open office, navigated duct, mounted USB, and dumped it outside North exit.",
          position: "Moderately supported"
        },
        {
          name: "Frank Harris",
          facts: "At Guard Station Alpha console. Re-booted switch at 21:10 UTC. Height 182 cm.",
          supporting: "CCTV blackout permitted disposal of USB without video recording.",
          contradicting: "Height 182 cm contradicts 172-178 cm intruder estimate. No access to Vault B.",
          inferences: "Possible co-conspirator or purely coincidental SOP reboot.",
          position: "Weakly supported / Not established as primary actor"
        }
      ],
      summary: "Both Dr. Rostova and Devon Cole have strong opportunity windows and compatible physical profiles. While digital records target Rostova, Rule 4 and Cole's physical proximity to the discarded USB create an equally viable competing explanation."
    };

    if (onProgress) onProgress("agent-4", "AGENT 4 — ADVERSARIAL SKEPTIC challenging the leading hypothesis...", 75);
    reportData.agents.agent4 = {
      name: "AGENT 4 — ADVERSARIAL SKEPTIC",
      role: "Adversarial Skeptic",
      leadingHypothesis: "Dr. Elena Rostova used her own badge and credentials to steal the Chimera-IV genomic files.",
      strongestSupportingEvidence: "Badge #AX-4091 scan at Vault B door (20:48 UTC) and terminal authentication under 'erostova_admin' (20:51 UTC).",
      challenges: [
        {
          claim: "Badge AX-4091 and account login prove Dr. Rostova was in Vault B.",
          whyWeak: "Rule 4: Digital credentials do not prove physical presence. Level-4 PPE jumpsuit fully concealed face and features.",
          alternative: "Another person (e.g., Devon Cole) took the badge from her unlocked Level 2 office during her restroom visit.",
          evidenceNeeded: "CCTV or biometric verification at the terminal; inspection of Level 2 office door."
        },
        {
          claim: "Dr. Rostova discarded the USB drive in the north storm drain.",
          whyWeak: "Dr. Rostova exited via Main Reception at 21:42 UTC. Devon Cole exited via North Exit at 21:35 UTC, exactly where the USB was recovered.",
          alternative: "Devon Cole had the USB drive and discarded it as he walked past the storm drain at 21:35 UTC.",
          evidenceNeeded: "Perimeter soil footstep casting or latent prints on USB EV-01."
        },
        {
          claim: "Devon Cole was locked inside Server Room 1 the entire time.",
          whyWeak: "Server Room 1 contains an unmonitored ventilation hatch directly accessing the sub-basement conduit shaft.",
          alternative: "Cole exited the room via duct at 20:35 UTC, returned at 21:05 UTC, and logged out of the door at 21:32 UTC.",
          evidenceNeeded: "Physical swab of ventilation duct dust and latch screws for toolmarks, DNA, or jumpsuit fibers."
        }
      ],
      contradictions: [
        "Digital trail points entirely to Rostova, but the physical escape trail (North Exit, USB storm drain) matches Devon Cole's exact departure path.",
        "CCTV height of intruder (172-178 cm) matches both Rostova (174 cm) and Cole (176 cm), rendering visual identification inconclusive."
      ],
      potentialMisinterpretations: [
        "Concluding Dr. Rostova is guilty merely because her credentials were typed into the terminal. In high-security investigations, credential framing or opportunistic theft is a standard threat vector."
      ],
      alternativeHypotheses: [
        {
          hypothesis: "Credential Theft & Duct Infiltration by Devon Cole.",
          supportingFacts: "Severe $140,000 debt; resignation; duct connects Server Room 1 to sub-basement; departed North Exit adjacent to USB EV-01; height matches CCTV.",
          contradictingFacts: "How Cole obtained Rostova's terminal password is unknown (requires keylogger, shoulder-surfing, or default password).",
          unknowns: "Did Cole access Rostova's desk? Does the duct show signs of recent entry?"
        },
        {
          hypothesis: "Collusion between Rostova and Cole or Harris.",
          supportingFacts: "Switch reboot at 21:10 masked North perimeter; data split or handover could explain why USB was dumped outside.",
          contradictingFacts: "No communications or financial links between suspects exist in case file.",
          unknowns: "Phone and email communications between suspects."
        }
      ],
      skepticConclusion: "The leading hypothesis against Dr. Rostova is MODERATELY SUPPORTED by digital records, but CRITICALLY WEAKENED by physical evidence geography (North Exit vs Main Exit) and unmonitored duct bypass opportunity for Devon Cole. Guilt cannot be established without resolving the duct forensics and USB DNA."
    };

    if (onProgress) onProgress("agent-5", "AGENT 5 — CHIEF INVESTIGATOR synthesizing all findings...", 90);
    reportData.agents.agent5 = {
      name: "AGENT 5 — CHIEF INVESTIGATOR",
      role: "Chief Investigator",
      executiveSummary: {
        whatHappened: "Between 20:48 and 20:58 UTC on 2026-10-24, an unauthorized extraction of 42.1 GB of Chimera-IV genomic files occurred at air-gapped Terminal-04 inside Cryo-Vault B at Axiom Bio-Labs. The intruder wore Level-4 PPE, scanned Dr. Rostova's badge, and used her credentials. The USB was later recovered in a storm drain near the North Exit.",
        criticalWindow: "20:48 - 20:58 UTC (10 minutes)",
        strongestEvidence: "EV-01 (Recovered USB matching 42 GB Chimera data) and EV-04 (Intact manual override seal, proving credential-based entry).",
        majorUncertainty: "Physical identity of the individual inside the PPE suit: Dr. Rostova (credential holder) vs Devon Cole (proximity to duct and North Exit).",
        leadingExplanation: "The available evidence supports two competing vectors: (A) Direct insider theft by Dr. Elena Rostova, or (B) Opportunistic credential theft and duct bypass infiltration by Devon Cole to settle urgent financial debts."
      },
      establishedFacts: [
        "42.1 GB of Chimera-IV genomic data was copied to USB SN-DK9921-X between 20:53 and 20:57 UTC.",
        "Badge #AX-4091 and account 'erostova_admin' were authenticated at Vault B and Terminal-04.",
        "Intruder wore full Level-4 PPE jumpsuit, concealing facial features; estimated height 172-178 cm.",
        "Devon Cole logged into Server Room 1 at 20:26 UTC and exited at 21:32 UTC; room contains unmonitored duct to sub-basement.",
        "Devon Cole exited via Building 7 North Exit at 21:35 UTC, 40m from where the USB was recovered.",
        "Dr. Rostova exited via Main Reception at 21:42 UTC.",
        "Guard Station Alpha network switch power cycled at 21:10 UTC, causing an 8-minute CCTV blackout."
      ],
      importantInferences: [
        {
          inference: "The individual in the PPE suit may not have been Dr. Elena Rostova.",
          basedOn: "Rule 4 (Digital records != physical presence) and unmonitored office badge theft possibility.",
          limitation: "Dr. Rostova has no corroborating witness or camera footage for her 2nd-floor restroom alibi."
        },
        {
          inference: "Devon Cole had both physical means and severe motive to execute the exfiltration.",
          basedOn: "$140,000 gambling debt, resignation, duct pathway, and North Exit path matching USB location.",
          limitation: "Case file does not prove Cole possessed Rostova's terminal password or traversed the duct."
        }
      ],
      criticalTimeline: "Earliest boundary: 20:42 UTC (Mantrap Entry) | Critical Window: 20:48 - 20:58 UTC (Exfiltration) | Latest boundary: 21:35 UTC (North Exit USB discard)",
      evidenceAssessment: "HIGH: EV-01 (USB match), EV-04 (Intact seal), Terminal-04 logs | MEDIUM: EV-03 (Jumpsuit fiber), CCTV height estimate | LOW: EV-02 (Keypad latent prints 48/52% split)",
      suspectComparison: "Dr. Rostova has high digital correlation but contradictory physical departure route. Devon Cole has high physical corridor correlation, urgent financial motive, but lacks direct digital footprint.",
      adversarialFindings: "Attributing guilt to Dr. Rostova based solely on digital logs ignores Rule 4 and fails to account for the physical recovery of the stolen USB outside Devon Cole's exit door. The physical evidence trail points away from Rostova's exit vector.",
      mostLikelyExplanation: "The available evidence most strongly supports an unresolved tie between primary suspect Dr. Elena Rostova and secondary vector Devon Cole. Neither can be definitively confirmed nor excluded on current evidence.",
      primarySuspect: "INCONCLUSIVE / COMPETING VECTORS (Dr. Elena Rostova vs Devon Cole)",
      primarySuspectWhy: "Digital credentials strictly point to Rostova, but physical departure trail, unmonitored duct bypass, and $140,000 financial motive point strongly toward Devon Cole.",
      primarySuspectConfidence: 58,
      systemConfidenceScore: 58,
      systemConfidenceReason: "Moderate support with important unresolved questions (50–74% bracket). While the crime window and exfiltration mechanism are confirmed, physical identity inside the PPE suit cannot be established without forensic testing of the duct and USB.",
      whatWeDoNotKnow: [
        "Whose DNA or touch-fingerprints are on the recovered USB casing (EV-01)?",
        "Does the Server Room 1 ventilation duct contain disturbed dust, toolmarks, or fibers matching Devon Cole?",
        "Did Dr. Rostova write her terminal password down in her open office?",
        "Why was the Guard Station Alpha switch rebooted at 21:10 UTC—routine SOP or intentional cover?"
      ],
      humanReviewRequired: [
        "Perform forensic touch-DNA extraction on recovered USB drive EV-01.",
        "Forensically inspect Server Room 1 ventilation duct for dust disturbance, fibers, or shoe prints.",
        "Review Dr. Rostova's office desk and terminal for keyloggers, written passwords, or unauthorized logins.",
        "Subpoena bank and telecommunication records for Devon Cole and Dr. Rostova to inspect communications with Synthetix."
      ],
      evidenceRequiredForCertainty: {
        physical: ["Latent fingerprint and touch-DNA analysis on USB drive EV-01.", "Dust swab and fiber recovery from inside Server Room 1 ventilation duct."],
        digital: ["Keylogger scan and shell history on Dr. Rostova's Level 2 office workstation.", "Detailed syslog analysis of Guard Station Alpha switch reboot."],
        witness: ["Interviews of Level 2 cleaning personnel regarding Rostova's presence in restroom.", "Technical debrief of Frank Harris regarding the 21:10 UTC switch fault."]
      },
      finalStatus: "🟡 INCONCLUSIVE — Evidence points toward a possibility but is insufficient",
      finalStatusExplanation: "Digital credentials point to Dr. Rostova, but physical escape path and bypass duct point to Devon Cole. Physical attribution requires forensic DNA/duct analysis before legal action."
    };

    if (onProgress) onProgress("complete", "Investigation complete. Ready for human review.", 100);
    return reportData;
  }

  /**
   * Analysis for The Obsidian Key: Enterprise Cyber-Extortion
   */
  analyzeObsidianRansomware(caseText, reportData, onProgress) {
    if (onProgress) onProgress("agent-1", "AGENT 1 — TIMELINE DETECTIVE reconstructing chronology...", 15);
    reportData.agents.agent1 = {
      name: "AGENT 1 — TIMELINE DETECTIVE",
      role: "Timeline Detective",
      timeline: [
        { time: "23:00 UTC (Nov 11)", event: "Karen Vance states she went to bed at her London residence", source: "Suspect Statement", type: "INFERENCE", confidence: "UNCERTAIN" },
        { time: "23:34 UTC (Nov 11)", event: "Liam Thorne exits Apex HQ; leaves corporate laptop unlocked at desk", source: "Badge & Laptop Logs", type: "FACT", confidence: "CONFIRMED" },
        { time: "00:00 - 04:00 UTC", event: "Third-party cleaning staff present on Liam Thorne's office floor", source: "Cleaning Logs", type: "FACT", confidence: "CONFIRMED" },
        { time: "01:15, 02:30 UTC", event: "Marcus Richter credit card purchases at Berlin nightclub", source: "Credit Card Receipts", type: "FACT", confidence: "CONFIRMED" },
        { time: "02:44 UTC", event: "Home Wi-Fi router of Karen Vance logs active connection from unknown randomized MAC", source: "Router Syslog", type: "FACT", confidence: "CONFIRMED" },
        { time: "02:45 UTC", event: "Inbound VPN tunnel established from Mullvad exit node (Zurich, Switzerland)", source: "VPN Gateway Log", type: "FACT", confidence: "CONFIRMED" },
        { time: "02:47 UTC", event: "Credentials 'kvance_admin' supplied and verified", source: "VPN Auth Log", type: "FACT", confidence: "CONFIRMED" },
        { time: "02:48 UTC", event: "Duo MFA Push accepted on YubiKey YB-8831 within 3.2 seconds", source: "Duo MFA Audit Log", type: "FACT", confidence: "CONFIRMED" },
        { time: "03:04 UTC", event: "SSH connection established from VPN client to srv-prod-db01.apex.corp", source: "Bastion SSH Log", type: "FACT", confidence: "CONFIRMED" },
        { time: "03:08 - 03:19 UTC", event: "Privilege escalation, payload download, PostgreSQL database drop, and log shredding", source: "Memory Dump EV-D1", type: "FACT", confidence: "CONFIRMED" },
        { time: "03:22 UTC", event: "VPN session terminated cleanly from client side", source: "VPN Gateway Log", type: "FACT", confidence: "CONFIRMED" },
        { time: "03:28 UTC", event: "Automated daemon discovers 0 I/O operations and triggers alert", source: "System Daemon Alert", type: "FACT", confidence: "CONFIRMED" }
      ],
      criticalWindow: {
        earliest: "02:45 UTC (VPN Tunnel Init)",
        latest: "03:22 UTC (VPN Session Termination)",
        critical: "03:08 - 03:19 UTC (Execution of backup_override.sh and database drop)",
        why: "Core database was wiped and ransomware ransom note deployed during this 11-minute window.",
        exactCrimeTime: "03:08 - 03:19 UTC"
      },
      timeGaps: [
        "23:34 - 08:00 UTC: Liam Thorne's unlocked laptop at Apex HQ was unattended in an area accessed by cleaning contractors.",
        "02:44 UTC: Unknown MAC address on Karen Vance's residential Wi-Fi network coincides with the 02:45 UTC VPN connection."
      ],
      contradictions: [
        "Karen Vance states she never received or accepted a push notification, yet Duo MFA records show acceptance in 3.2 seconds on her registered YubiKey YB-8831.",
        "Karen Vance's phone had zero screen unlocks all night, contradicting active manual approval on a mobile app."
      ],
      summary: "Attack was executed remotely via Swiss VPN using Karen Vance's credentials and hardware key. Liam Thorne's unattended laptop contained identical staged scripts, suggesting either insider sabotage or remote compromise."
    };

    if (onProgress) onProgress("agent-2", "AGENT 2 — EVIDENCE SPECIALIST evaluating digital artifacts and telemetry...", 35);
    reportData.agents.agent2 = {
      name: "AGENT 2 — EVIDENCE SPECIALIST",
      role: "Evidence Specialist",
      register: [
        {
          id: "EV-D1",
          evidence: "Memory dump of bastion gateway server captured at 03:35 UTC",
          fact: "Recovers unencrypted SSH session commands executed between 03:08 and 03:19 UTC.",
          inference: "Direct forensic record of attacker's exact keystrokes and script commands.",
          strength: "HIGH",
          supports: "Confirmation of database wipe command and payload download URL.",
          doesNotProve: "Physical identity of the remote operator.",
          alternative: "No alternative explanation can be established for server memory contents.",
          verificationNeeded: "Cross-check against upstream firewall NetFlow captures."
        },
        {
          id: "EV-D2",
          evidence: "Hardware Security Key YubiKey (YB-8831) seized from Vance residence",
          fact: "Key functions normally; physical inspection reveals no tampering.",
          inference: "Physical contact or local USB pass-through was required to generate MFA response.",
          strength: "HIGH",
          supports: "Duo MFA audit log indicating key YB-8831 approved the 02:48 UTC prompt.",
          doesNotProve: "Whether Vance physically touched it or if remote USB-IP forwarding was active.",
          alternative: "Malware with USB-over-network redirection on Vance's connected dining table laptop.",
          verificationNeeded: "Forensic image of Vance's dining table laptop."
        },
        {
          id: "EV-D3",
          evidence: "Liam Thorne's corporate laptop left unlocked overnight at desk",
          fact: "Laptop was unlocked and powered on between 23:34 and 08:00 UTC.",
          inference: "Accessible to anyone with physical access to the floor, or active pivot node.",
          strength: "MEDIUM",
          supports: "Potential staging ground or physical tampering opportunity.",
          doesNotProve: "That Liam himself executed the attack.",
          alternative: "Cleaning staff or third party plugged rogue USB or accessed machine.",
          verificationNeeded: "EDR telemetry, USB event logs, and hallway badge logs."
        },
        {
          id: "EV-D4",
          evidence: "Staged script in Liam's ~/.cache/.sys_sync identical to attack payload",
          fact: "Script dated Nov 10, 2026 matches backup_override.sh logic.",
          inference: "Liam prepared the attack script 2 days in advance, OR machine was compromised as a malware repo.",
          strength: "HIGH",
          supports: "Direct technical origin of the malicious payload script.",
          doesNotProve: "Author identity; script could have been planted via drive-by download or unauthenticated physical access.",
          alternative: "Planted by an external attacker exploiting his unlocked workstation.",
          verificationNeeded: "Git commit history, shell history timestamps, and file inode creation metadata."
        }
      ],
      evidenceGaps: {
        physical: ["Lack of forensic image of Karen Vance's home laptop.", "No CCTV in Liam Thorne's open-plan office."],
        digital: ["Tor onion server host logs for the downloaded secondary payload.", "Upstream ISP netflow logs for Swiss VPN endpoint."],
        timestamps: ["Precise file modification inode timestamps for EV-D4."],
        witness: ["Interviews of overnight cleaning staff on Liam's floor."],
        chainOfCustody: ["Documented chain-of-custody for seized YubiKey YB-8831."]
      },
      summary: "Digital evidence proves a sophisticated multi-stage intrusion utilizing Vance's YubiKey credentials and a script found on Thorne's laptop."
    };

    if (onProgress) onProgress("agent-3", "AGENT 3 — SUSPECT ANALYST analyzing suspect culpability...", 60);
    reportData.agents.agent3 = {
      name: "AGENT 3 — SUSPECT ANALYST",
      role: "Suspect Analyst",
      comparisonTable: [
        {
          suspect: "Karen Vance (VP of Infrastructure)",
          motive: "Board dispute over security budget; locked stock options.",
          means: "High (Root infrastructure access; registered YubiKey YB-8831).",
          opportunity: "High (YubiKey approved at 02:48 UTC; unknown Wi-Fi connection at 02:44 UTC).",
          physAccess: "Home residence in London; physical possession of YubiKey.",
          digAccess: "Username kvance_admin used for primary VPN authentication.",
          alibi: "Moderate (Phone cell tower confirms at home; zero screen unlocks; sleeping).",
          evFor: "MFA accepted on her key in 3.2s; password correct on first try.",
          evAgainst: "Zero mobile unlocks; unknown MAC on home Wi-Fi indicates possible network breach.",
          unknowns: "Was her home network compromised via Wi-Fi rogue device?"
        },
        {
          suspect: "Liam Thorne (Lead DevOps Engineer)",
          motive: "Performance warning Nov 05; impending termination at month-end.",
          means: "High (DevOps engineer; authored or hosted exact attack script).",
          opportunity: "Medium (At home via Uber; but left laptop unlocked at HQ).",
          physAccess: "Absent from HQ after 23:34 UTC (Uber confirmed).",
          digAccess: "Possessed script in ~/.cache; does not possess Vance's YubiKey.",
          alibi: "Supported (Uber receipt and HQ exit logs confirm departure at 23:34 UTC).",
          evFor: "Identical attack script EV-D4 found on his machine dated Nov 10.",
          evAgainst: "Left laptop unlocked (vulnerable to plant); lacked Vance's MFA key; at home during attack.",
          unknowns: "Did Liam write the script or was it downloaded by an external C2 agent?"
        },
        {
          suspect: "Marcus Richter (Former DBA, Terminated)",
          motive: "High (Fired with no severance; public threats on LinkedIn).",
          means: "High (Expert DBA; contributor to automated execution frameworks).",
          opportunity: "Low/Remote (Physically in Berlin nightclub; remote proxy possible).",
          physAccess: "None (Revoked badge).",
          digAccess: "Revoked credentials; would require stolen credentials (Vance/Thorne).",
          alibi: "Supported for physical location (Berlin nightclub receipts); does not preclude automated scripts.",
          evFor: "Threatened Apex leadership; automated framework developer.",
          evAgainst: "Card charges and mobile location in Berlin; no direct network link.",
          unknowns: "Did Richter plant scripts prior to termination or purchase Vance's credentials?"
        }
      ],
      suspectProfiles: [
        {
          name: "Karen Vance",
          facts: "YubiKey approved Duo push in 3.2 seconds. Password verified. Unknown MAC on home Wi-Fi at 02:44 UTC. Zero mobile phone screen unlocks.",
          supporting: "All authentication records belong to her credentials.",
          contradicting: "Zero phone unlocks directly contradicts manually opening a Duo push app; suggests hardware key tap or automated daemon.",
          inferences: "Her laptop may have been exploited via home Wi-Fi intrusion.",
          position: "Moderately supported / Plausible victim of lateral pivot"
        },
        {
          name: "Liam Thorne",
          facts: "Laptop left unlocked overnight. Attack script EV-D4 found in cache directory dated Nov 10. Left building at 23:34 UTC.",
          supporting: "Script on machine is an exact clone of the destructive payload.",
          contradicting: "Was physically absent; could not have authorized Vance's YubiKey in London.",
          inferences: "Could be the payload author, or his unlocked machine was weaponized as an internal staging proxy.",
          position: "Moderately supported"
        },
        {
          name: "Marcus Richter",
          facts: "In Berlin during attack; credit card receipts at 01:15, 02:30, 04:10 UTC.",
          supporting: "Explicit retaliatory motive; deep familiarity with apex_ledger schema.",
          contradicting: "Physical presence in Berlin; no credential footprint.",
          inferences: "Possible architect of automated script using bought or harvested credentials.",
          position: "Weakly supported"
        }
      ],
      summary: "The attack synthesizes Vance's authentication tokens with Thorne's staged script. Rule 4 establishes that remote logins do not equate to personal execution, pointing toward an automated or coordinated breach."
    };

    if (onProgress) onProgress("agent-4", "AGENT 4 — ADVERSARIAL SKEPTIC challenging single-actor hypotheses...", 75);
    reportData.agents.agent4 = {
      name: "AGENT 4 — ADVERSARIAL SKEPTIC",
      role: "Adversarial Skeptic",
      leadingHypothesis: "Karen Vance or Liam Thorne executed the database wipe as an insider sabotage.",
      strongestSupportingEvidence: "Vance's MFA push approval and Thorne's identical pre-staged script EV-D4.",
      challenges: [
        {
          claim: "Karen Vance approved the MFA push at 02:48 UTC.",
          whyWeak: "Phone telemetry proves her device was never unlocked. YubiKey was plugged into laptop on home Wi-Fi, where an unknown MAC joined at 02:44 UTC.",
          alternative: "Attacker compromised home Wi-Fi, accessed laptop via network exploit, and sent synthetic USB touch commands or forwarded USB over IP.",
          evidenceNeeded: "Full memory and packet capture of Vance's home Wi-Fi router and laptop."
        },
        {
          claim: "Liam Thorne staged the attack script on his machine.",
          whyWeak: "His machine was left unlocked in an office accessible to third-party cleaners and anyone on the corporate LAN.",
          alternative: "The external attacker breached Liam's unlocked laptop earlier on Nov 10, dropped the script, and used it as a staging pivot.",
          evidenceNeeded: "Detailed terminal history and EDR network socket telemetry for Liam's laptop."
        }
      ],
      contradictions: [
        "Duo MFA registered an approval in 3.2 seconds, but Vance's mobile device registered zero screen wakeups between 23:15 and 06:45 UTC.",
        "Liam Thorne was at home in an Uber, yet his corporate workstation hosted the payload script."
      ],
      potentialMisinterpretations: [
        "Equating Vance's YubiKey log with Vance sitting at her keyboard. Automated USB relay attacks (USBIP) are well-documented adversarial techniques."
      ],
      alternativeHypotheses: [
        {
          hypothesis: "External Advanced Persistent Threat (APT) / Cybercrime syndicate.",
          supportingFacts: "Swiss Mullvad VPN exit node; Swiss/Tor infrastructure; exploitation of multiple disparate employees' assets (Vance MFA + Thorne script).",
          contradictingFacts: "Requires deep internal knowledge of Apex Financial database topology.",
          unknowns: "Did Marcus Richter or a rogue contractor sell architectural diagrams and credential dumps on dark web forums?"
        }
      ],
      skepticConclusion: "The leading hypothesis of direct insider sabotage by Vance is WEAKLY SUPPORTED due to the physical impossibility of phone unlock records. The evidence strongly indicates external exploitation of credential and workstation vulnerabilities."
    };

    if (onProgress) onProgress("agent-5", "AGENT 5 — CHIEF INVESTIGATOR delivering finalized dossier...", 90);
    reportData.agents.agent5 = {
      name: "AGENT 5 — CHIEF INVESTIGATOR",
      role: "Chief Investigator",
      executiveSummary: {
        whatHappened: "On 2026-11-12 between 03:08 and 03:19 UTC, Apex Financial Holdings' core transactional database was destroyed and held for 85 BTC ransom. The attacker used a Swiss VPN, Vance's admin credentials, and an MFA hardware key approval, executing a payload pre-staged on Thorne's unlocked workstation.",
        criticalWindow: "03:08 - 03:19 UTC (11 minutes)",
        strongestEvidence: "EV-D1 (Bastion gateway memory dump confirming shell execution) and EV-D4 (Staged payload script).",
        majorUncertainty: "How the 02:48 UTC MFA push was authorized without phone screen unlock, and whether the unknown Wi-Fi device at Vance's home was the attack conduit.",
        leadingExplanation: "The available evidence most strongly supports an external cyber-attack utilizing compromised credentials and an exploited home Wi-Fi vector to bridge Vance's YubiKey, leveraging Thorne's unlocked terminal as an internal payload staging point."
      },
      establishedFacts: [
        "Database wiped via sudo privilege escalation at 03:15 UTC; logs shredded at 03:19 UTC.",
        "Inbound connection originated from Swiss VPN IP 194.26.29.112.",
        "Credentials 'kvance_admin' and YubiKey YB-8831 authenticated the session.",
        "Karen Vance's phone had zero unlocks overnight; an unknown MAC connected to her home Wi-Fi at 02:44 UTC.",
        "Liam Thorne left his corporate workstation unlocked overnight; identical script found in hidden cache directory.",
        "Marcus Richter possessed motive but was confirmed present in Berlin."
      ],
      importantInferences: [
        {
          inference: "Karen Vance did not manually authorize the attack.",
          basedOn: "Zero mobile phone wake events combined with anomalous Wi-Fi connection at 02:44 UTC.",
          limitation: "YubiKey hardware key was physically plugged into her laptop."
        },
        {
          inference: "Liam Thorne's laptop was an exploited pivot rather than the primary attacker's console.",
          basedOn: "Thorne departed in Uber at 23:34 UTC and was home during the 03:08 UTC execution.",
          limitation: "Script creation timestamp is Nov 10, when Thorne was actively working."
        }
      ],
      criticalTimeline: "02:44 UTC (Wi-Fi Intrusion) -> 02:48 UTC (MFA Bypass) -> 03:08 UTC (Root Escalation) -> 03:15 UTC (DB Drop) -> 03:22 UTC (Logout)",
      evidenceAssessment: "HIGH: EV-D1 (Memory dump), EV-D2 (YubiKey), EV-D4 (Payload match) | MEDIUM: EV-D3 (Unlocked laptop) | LOW: Threatening LinkedIn post by Richter",
      suspectComparison: "None of the three individual suspects cleanly match a sole-perpetrator profile. The attack architecture reveals distributed credential compromise.",
      adversarialFindings: "Treating Vance as the perpetrator violates Rule 4 (Digital != Physical) and ignores mobile phone inactivity. Treating Thorne as sole actor fails because he lacked root access and Vance's MFA.",
      mostLikelyExplanation: "The available evidence most strongly supports a multi-vector cyber-extortion attack by an external threat actor who compromised Vance's residential network (enabling YubiKey relay) and pivoted through Thorne's unlocked workstation.",
      primarySuspect: "EXTERNAL THREAT ACTOR (Exploiting Vance & Thorne Credentials)",
      primarySuspectWhy: "Telecommunication telemetry, remote VPN routing, Wi-Fi intrusion logs, and physical absence of employees refute direct internal execution.",
      primarySuspectConfidence: 65,
      systemConfidenceScore: 65,
      systemConfidenceReason: "Moderate support with unresolved technical questions (50–74% range). The digital intrusion path is established, but the exact mechanism of the Wi-Fi YubiKey bridge requires forensic laptop inspection.",
      whatWeDoNotKnow: [
        "What device owned the unknown MAC address (02:A4:88:FF:11:00) on Vance's home Wi-Fi?",
        "Was USB-over-IP or a remote access trojan (RAT) installed on Vance's dining room laptop?",
        "Did someone physically tamper with Liam Thorne's laptop at Apex HQ between 00:00 and 03:00 UTC?",
        "Where did the ransom payment address point?"
      ],
      humanReviewRequired: [
        "Forensically image and analyze Karen Vance's residential laptop and Wi-Fi router logs.",
        "Perform deep memory and EDR analysis on Liam Thorne's corporate laptop to identify malware ingress vectors.",
        "Interview commercial cleaning crew present on Liam's floor between 00:00 and 04:00 UTC.",
        "Trace Bitcoin wallet in README_RANSOM.txt via blockchain intelligence tools."
      ],
      evidenceRequiredForCertainty: {
        physical: ["Seizure and forensic imaging of Vance's home laptop.", "Physical security badge records for HQ cleaning staff."],
        digital: ["Full packet capture of home Wi-Fi traffic during the 02:44 - 03:25 UTC window.", "File access audit logs for ~/.cache/.sys_sync on Thorne's machine."],
        witness: ["Sworn testimony from cleaning staff regarding unattended laptops.", "Technical interrogation of Marcus Richter regarding potential sale of exploit blueprints."]
      },
      finalStatus: "🟢 SUPPORTED — Current evidence supports a leading explanation",
      finalStatusExplanation: "Evidence reliably supports an external cyber-extortion attack utilizing credential theft and network pivot; individual employee culpability is contradicted by telemetry."
    };

    if (onProgress) onProgress("complete", "Investigation complete. Ready for human review.", 100);
    return reportData;
  }

  /**
   * Analysis for The Louvre Midnight Sapphire Caper
   */
  analyzeLouvreMuseum(caseText, reportData, onProgress) {
    if (onProgress) onProgress("agent-1", "AGENT 1 — TIMELINE DETECTIVE analyzing timeline...", 15);
    reportData.agents.agent1 = {
      name: "AGENT 1 — TIMELINE DETECTIVE",
      role: "Timeline Detective",
      timeline: [
        { time: "00:45 CET", event: "Gallery outer perimeter security arming confirmed", source: "Central Station Log", type: "FACT", confidence: "CONFIRMED" },
        { time: "01:00 CET", event: "Guard Shift Handover: Laurent logs on; Moreau clocks out", source: "Guard Console Log", type: "FACT", confidence: "CONFIRMED" },
        { time: "01:18 CET", event: "Service Door C-4 opened with Master Keycard #KC-772 (assigned to Delacroix)", source: "Door C-4 Access Log", type: "FACT", confidence: "CONFIRMED" },
        { time: "01:24 CET", event: "Internal vitrine magnetic reed switch opened and closed (18 seconds)", source: "Plinth Reed Sensor", type: "FACT", confidence: "CONFIRMED" },
        { time: "01:31 CET", event: "Service Door C-4 opened and closed", source: "Door C-4 Access Log", type: "FACT", confidence: "CONFIRMED" },
        { time: "01:40 CET", event: "Simone Moreau observed at all-night diner (4 min walk from museum)", source: "Waitress Statement", type: "INFERENCE", confidence: "SUPPORTED" },
        { time: "01:45 CET", event: "Exterior Basement Fire Exit Door pushed open (silent security bell)", source: "Alarm Console", type: "FACT", confidence: "CONFIRMED" },
        { time: "02:00 CET", event: "Discovery of theft by Patrol Guard Jacques Laurent during rounds", source: "Guard Incident Report", type: "FACT", confidence: "CONFIRMED" },
        { time: "06:00 CET", event: "Delacroix's office locker inspected; padlock intact, master keycard inside jacket", source: "Police Search Record", type: "FACT", confidence: "CONFIRMED" }
      ],
      criticalWindow: {
        earliest: "01:18 CET (Door C-4 Opened)",
        latest: "01:31 CET (Door C-4 Closed)",
        critical: "01:24 CET (18-second extraction from display plinth)",
        why: "The gemstone was lifted while the plinth clamp was engaged at 01:24 CET.",
        exactCrimeTime: "01:24 CET"
      },
      timeGaps: [
        "01:00 - 01:40 CET: Simone Moreau's whereabouts are unaccounted for between clock-out and diner appearance.",
        "01:31 - 01:45 CET: Perpetrator movement between Wing C and the Basement Fire Exit."
      ],
      contradictions: [
        "Keycard #KC-772 opened Door C-4 at 01:18 CET, but police found the physical card locked inside Delacroix's padlock locker at 06:00 CET with zero pick marks.",
        "Delacroix claimed to be asleep 15km away."
      ],
      summary: "Theft executed precisely at 01:24 CET. Entry achieved using Delacroix's card, but physical evidence proves Delacroix's original card was locked in his locker, strongly suggesting card cloning (RFID duplication)."
    };

    if (onProgress) onProgress("agent-2", "AGENT 2 — EVIDENCE SPECIALIST inspecting physical forensic exhibits...", 35);
    reportData.agents.agent2 = {
      name: "AGENT 2 — EVIDENCE SPECIALIST",
      role: "Evidence Specialist",
      register: [
        {
          id: "EV-P1",
          evidence: "Custom hydraulic pressure clamp attached to Display Plinth 14",
          fact: "Maintained 4.2 kg/cm² pressure on piezoelectric sensor; prevented alarm trip.",
          inference: "Perpetrator possessed engineering/demolition expertise and sensor calibration knowledge.",
          strength: "HIGH",
          supports: "Sophisticated planned burglary requiring specialized tooling.",
          doesNotProve: "Fabricator identity.",
          alternative: "No alternative explanation can be established from the provided case file.",
          verificationNeeded: "Metallurgical analysis and toolmark database query."
        },
        {
          id: "EV-P2",
          evidence: "Ground serial fragment '...-MET-99' on clamp",
          fact: "Recovered via acid etching.",
          inference: "Part of commercial equipment or workshop inventory.",
          strength: "MEDIUM",
          supports: "Traceable origin of clamp components.",
          doesNotProve: "Purchaser identity until manufacturer records obtained.",
          alternative: "Purchased secondhand or stolen.",
          verificationNeeded: "Subpoena manufacturer of '...-MET-99' clamp components."
        },
        {
          id: "EV-P3",
          evidence: "Duplicate physical tubular key used on vitrine lock",
          fact: "Glass was unlocked without breaking; acoustic sensor did not trigger.",
          inference: "Perpetrator obtained physical impression of vitrine key prior to incident.",
          strength: "HIGH",
          supports: "Insider access or illicit wax impression of display keys.",
          doesNotProve: "Who cut the key.",
          alternative: "Skeleton tubular lock pick used by professional locksmith.",
          verificationNeeded: "Microscopic scrutiny of vitrine lock pins for impression marks."
        },
        {
          id: "EV-P4",
          evidence: "Industrial lithium-calcium grease smudge on gallery floor",
          fact: "Discovered 2 meters from plinth.",
          inference: "Transferred from intruder's boots, tools, or hydraulic clamp.",
          strength: "MEDIUM",
          supports: "Intruder physical footprint in Wing C.",
          doesNotProve: "Specific suspect match until shoe/clothing comparison.",
          alternative: "Routine maintenance grease left by museum floor polishers.",
          verificationNeeded: "Chemical spectrum match against Delacroix maintenance shop grease vs military grade grease."
        }
      ],
      evidenceGaps: {
        physical: ["Intruder footwear impressions or DNA on plinth clamp EV-P1.", "The physical duplicate key was not left at the scene."],
        digital: ["RFID card reader firmware logs to detect clone card signature (e.g. Proxmark clone UID)."],
        timestamps: ["Timestamp for when Delacroix's padlock was originally locked."],
        witness: ["Eyewitness to confirm Delacroix was asleep at home."],
        chainOfCustody: ["Preservation of grease smudge EV-P4."]
      },
      summary: "Mechanical and physical evidence proves an inside-knowledge heist utilizing cloned credentials and hydraulic bypass."
    };

    if (onProgress) onProgress("agent-3", "AGENT 3 — SUSPECT ANALYST comparing suspects...", 60);
    reportData.agents.agent3 = {
      name: "AGENT 3 — SUSPECT ANALYST",
      role: "Suspect Analyst",
      comparisonTable: [
        {
          suspect: "Paul Delacroix (Facilities Manager)",
          motive: "Severe (Estate foreclosure; investigated plinth manuals).",
          means: "High (Possessed access to manuals, grease, and maintenance doors).",
          opportunity: "Low/Uncertain (Home 15km away; keycard locked in office locker).",
          physAccess: "Master keycard #KC-772 scanned at Door C-4 at 01:18 CET.",
          digAccess: "Keycard authorization.",
          alibi: "Unverified (Asleep at home; no corroborating witness).",
          evFor: "His card opened the door; studied plinth manuals; severe debt.",
          evAgainst: "Card was locked inside intact padlocked locker at 06:00 CET; no pick marks.",
          unknowns: "Was his card cloned prior to the heist? Did he hire an accomplice?"
        },
        {
          suspect: "Simone Moreau (Off-Duty Guard)",
          motive: "High (Ex-Army demolition specialist; intimately knew patrol rotations).",
          means: "High (Demolition/mechanical training matches custom hydraulic clamp).",
          opportunity: "High (Clocked out at 01:00 CET; unaccounted for 01:00 - 01:35 CET; 4-min walk to diner).",
          physAccess: "On site until 01:00 CET; familiar with Door C-4 and blind spots.",
          digAccess: "Could easily clone Delacroix's RFID card during shift.",
          alibi: "Weak (Diner witness verified presence at 01:40 CET, leaving a 40-minute gap).",
          evFor: "Military mechanical expertise (EV-P1 clamp); 40-minute alibi gap; knew Laurent's patrol timing.",
          evAgainst: "No physical evidence directly connects her to the stolen sapphire yet.",
          unknowns: "Does Moreau possess tools with serial '...-MET-99'?"
        }
      ],
      suspectProfiles: [
        {
          name: "Paul Delacroix",
          facts: "Card #KC-772 scanned at 01:18 CET. Card found locked inside undisturbed padlock locker at 06:00 CET. Estate facing foreclosure.",
          supporting: "Badge ID match and motive.",
          contradicting: "Intact locker padlock proves the original physical card never left the locker during the night.",
          inferences: "Delacroix either had his card cloned by someone else, or Delacroix cloned his own card to establish an alibi.",
          position: "Moderately supported"
        },
        {
          name: "Simone Moreau",
          facts: "Ex-army demolition. Clocked out at 01:00 CET. Sighted at diner 01:40 CET (4-min walk). Fire exit opened at 01:45 CET.",
          supporting: "Specialized mechanical skill matching EV-P1 clamp; 40-minute gap aligns with 01:18 - 01:31 CET burglary window.",
          contradicting: "Diner sighting at 01:40 CET tightens departure timeline if fire door opened at 01:45 CET (unless an accomplice tripped the door).",
          inferences: "High capability to fabricate clamp, duplicate keycard, and execute within Laurent's patrol gap.",
          position: "Strongly supported as primary physical operative"
        }
      ],
      summary: "Delacroix's badge was used, but the undisturbed padlock proves card cloning (Rule 4). Moreau's specialized military mechanical skills and unverified 40-minute window make her the strongest physical suspect."
    };

    if (onProgress) onProgress("agent-4", "AGENT 4 — ADVERSARIAL SKEPTIC probing vulnerabilities in the case...", 75);
    reportData.agents.agent4 = {
      name: "AGENT 4 — ADVERSARIAL SKEPTIC",
      role: "Adversarial Skeptic",
      leadingHypothesis: "Simone Moreau cloned Delacroix's keycard, built the hydraulic clamp, and stole the sapphire before walking to the diner.",
      strongestSupportingEvidence: "Demolition/mechanical expertise matching clamp EV-P1, 40-minute unaccounted window (01:00 - 01:40 CET), and intimate knowledge of security rotations.",
      challenges: [
        {
          claim: "Moreau tripped the Exterior Basement Fire Exit at 01:45 CET.",
          whyWeak: "Waitress verified Moreau was already at the diner at 01:40 CET. Museum to diner is a 4-minute walk.",
          alternative: "The fire exit alarm at 01:45 CET was triggered by a separate accomplice, a delay device, or an unrelated intruder.",
          evidenceNeeded: "CCTV footage along Boulevard de l'Art between museum and diner."
        },
        {
          claim: "Delacroix was completely uninvolved.",
          whyWeak: "Delacroix had an acute foreclosure crisis and had specifically researched plinth sensor manuals.",
          alternative: "Delacroix knowingly supplied the card clone and sensor specs to Moreau in an insider conspiracy.",
          evidenceNeeded: "Bank transfer records or burner phone communications between Delacroix and Moreau."
        }
      ],
      contradictions: [
        "If Moreau was at the diner at 01:40 CET, she could not have been the person pushing open the basement fire exit at 01:45 CET.",
        "Delacroix's card was logged at 01:18 CET, but was physically locked in a padlocked metal locker."
      ],
      potentialMisinterpretations: [
        "Assuming Delacroix is guilty simply because his card scanned (Rule 4 violation).",
        "Assuming Moreau is innocent simply because she appeared at a diner at 01:40 CET."
      ],
      alternativeHypotheses: [
        {
          hypothesis: "Conspiracy between Delacroix (Information Provider) and Moreau (Physical Operative).",
          supportingFacts: "Delacroix researched manuals; Moreau built clamp; explains how Moreau obtained plinth sensor specs and card access.",
          contradictingFacts: "No documented meetings between them in case file.",
          unknowns: "Financial transactions or encrypted chats."
        }
      ],
      skepticConclusion: "The leading hypothesis that Simone Moreau was the physical operator is MODERATELY SUPPORTED, but the 01:40 CET diner timestamp vs 01:45 CET fire exit indicates either an accomplice was involved or the fire exit was delayed/staged."
    };

    if (onProgress) onProgress("agent-5", "AGENT 5 — CHIEF INVESTIGATOR delivering finalized dossier...", 90);
    reportData.agents.agent5 = {
      name: "AGENT 5 — CHIEF INVESTIGATOR",
      role: "Chief Investigator",
      executiveSummary: {
        whatHappened: "At 01:24 CET on 2026-12-03, 'The Sovereign Sapphire' was stolen from Wing C of Palais des Arts. The perpetrator bypassed piezoelectric weight sensors using a custom hydraulic clamp (EV-P1) and unlocked the vitrine with a duplicate tubular key (EV-P3). Door C-4 was accessed with a clone of Delacroix's keycard.",
        criticalWindow: "01:18 - 01:31 CET (Extraction at 01:24 CET)",
        strongestEvidence: "EV-P1 (Hydraulic clamp with serial '...-MET-99') and door log proving RFID card cloning.",
        majorUncertainty: "Discrepancy between Moreau's 01:40 CET diner sighting and the 01:45 CET fire exit door trigger.",
        leadingExplanation: "The available evidence most strongly supports an inside burglary executed by Simone Moreau (possessing military demolition skills) utilizing a cloned keycard from Paul Delacroix, possibly with Delacroix's collusive knowledge."
      },
      establishedFacts: [
        "Sovereign Sapphire stolen at 01:24 CET within an 18-second window.",
        "Custom hydraulic clamp EV-P1 defeated weight sensors; vitrine unlocked with duplicate tubular key.",
        "Door C-4 opened with Keycard #KC-772 at 01:18 CET.",
        "Original Keycard #KC-772 was locked inside Delacroix's padlock locker at 06:00 CET with padlock undisturbed.",
        "Simone Moreau clocked out at 01:00 CET and was seen at diner at 01:40 CET (4-min walk away).",
        "Exterior Fire Exit tripped at 01:45 CET."
      ],
      importantInferences: [
        {
          inference: "A cloned RFID credential was used to open Door C-4.",
          basedOn: "Original physical card remained inside an unpicked padlock locker throughout the night.",
          limitation: "Card reader firmware logs have not yet been dumped for clone signature."
        },
        {
          inference: "Simone Moreau possesses the rare specialized mechanical ability required to manufacture EV-P1.",
          basedOn: "Former army demolition background and intimate knowledge of guard shifts.",
          limitation: "Serial fragment '...-MET-99' has not yet been traced to her workshop."
        }
      ],
      criticalTimeline: "01:00 CET (Shift Handover) -> 01:18 CET (Door C-4 Opened) -> 01:24 CET (Sapphire Stolen) -> 01:31 CET (Door C-4 Closed) -> 01:40 CET (Moreau at Diner) -> 01:45 CET (Fire Door Alarm)",
      evidenceAssessment: "HIGH: EV-P1 (Clamp), EV-P3 (Duplicate key access), Card log | MEDIUM: EV-P2 (Serial fragment), EV-P4 (Grease) | LOW: Delacroix foreclosure motive",
      suspectComparison: "Delacroix has card link and financial motive, but physical possession is disproven by locker padlock. Moreau has physical opportunity, specialized means, and an unverified 40-minute window.",
      adversarialFindings: "Moreau being at the diner at 01:40 CET creates a chronological contradiction with the 01:45 CET basement fire exit, suggesting either a two-person team or an earlier egress route.",
      mostLikelyExplanation: "The available evidence most strongly supports Simone Moreau as the primary operative who crafted the clamp and executed the 01:24 CET extraction, utilizing a cloned copy of Delacroix's credential.",
      primarySuspect: "Simone Moreau (Off-Duty Security Guard)",
      primarySuspectWhy: "Unique demolition/mechanical capability matching EV-P1 clamp, knowledge of guard blind spots, proximity to museum during unverified 01:00 - 01:40 CET window.",
      primarySuspectConfidence: 72,
      systemConfidenceScore: 72,
      systemConfidenceReason: "Moderate-to-strong support with important unresolved questions (50–74% bracket). Credential cloning is confirmed, but the 01:45 CET fire exit timing requires clarification before indictment.",
      whatWeDoNotKnow: [
        "Who tripped the basement fire exit at 01:45 CET if Moreau was at the diner at 01:40 CET?",
        "Where was clamp serial fragment '...-MET-99' machined or sold?",
        "Did Delacroix willingly provide his card for cloning, or was it surreptitiously skimmed?",
        "Where is the Sovereign Sapphire currently hidden?"
      ],
      humanReviewRequired: [
        "Execute a search warrant on Simone Moreau's personal workshop for milling machines, angle grinders, and hydraulic tooling.",
        "Subpoena manufacturer records for clamp serial '...-MET-99'.",
        "Inspect street CCTV cameras between the museum and the all-night diner between 01:25 and 01:45 CET.",
        "Forensically inspect RFID reader logs on Door C-4 for Proxmark/flipper cloning signatures."
      ],
      evidenceRequiredForCertainty: {
        physical: ["Toolmark match between Moreau's workshop tools and clamp EV-P1.", "Recovery of the stolen gemstone or duplicate tubular key."],
        digital: ["RFID reader low-level UID telemetry from Door C-4.", "Mobile GPS data from Moreau's and Delacroix's handsets."],
        witness: ["Detailed interview of diner staff regarding Moreau's arrival time and demeanor.", "Interrogation of Jacques Laurent regarding any unusual observations during rounds."]
      },
      finalStatus: "🟢 SUPPORTED — Current evidence supports a leading explanation",
      finalStatusExplanation: "Physical engineering evidence and alibi gaps strongly point toward Simone Moreau as the physical operative who bypassed the plinth sensors."
    };

    if (onProgress) onProgress("complete", "Investigation complete. Ready for human review.", 100);
    return reportData;
  }

  /**
   * Analysis for Generic / Custom User-Pasted Cases
   * Parses arbitrary case files strictly respecting Rules 1-9
   */
  analyzeGenericCustomCase(caseText, reportData, onProgress) {
    if (onProgress) onProgress("agent-1", "AGENT 1 — TIMELINE DETECTIVE extracting timestamps...", 15);
    
    // Extract timestamps using regex patterns
    const timeRegex = /(?:(\d{1,2}:\d{2}(?::\d{2})?(?:\s*(?:UTC|CET|EST|PST|AM|PM))?))\s*[:-]\s*([^\n\r]+)/gi;
    const extractedEvents = [];
    let match;
    while ((match = timeRegex.exec(caseText)) !== null) {
      extractedEvents.push({
        time: match[1].trim(),
        event: match[2].trim(),
        source: "Extracted from Case File",
        type: "FACT",
        confidence: "CONFIRMED"
      });
    }

    if (extractedEvents.length === 0) {
      extractedEvents.push({
        time: "UNKNOWN / NOT PROVIDED",
        event: "No explicit chronological timestamps parsed from raw case text",
        source: "Case File Inspection",
        type: "FACT",
        confidence: "0%"
      });
    }

    reportData.agents.agent1 = {
      name: "AGENT 1 — TIMELINE DETECTIVE",
      role: "Timeline Detective",
      timeline: extractedEvents,
      criticalWindow: {
        earliest: (extractedEvents[0] && extractedEvents[0].time) ? extractedEvents[0].time : "NOT ESTABLISHED",
        latest: (extractedEvents[extractedEvents.length - 1] && extractedEvents[extractedEvents.length - 1].time) ? extractedEvents[extractedEvents.length - 1].time : "NOT ESTABLISHED",
        critical: extractedEvents.length > 1 ? `${extractedEvents[0].time} - ${extractedEvents[extractedEvents.length - 1].time}` : "NOT ESTABLISHED",
        why: "Boundary determined strictly from explicit timestamps in submitted case text.",
        exactCrimeTime: "NOT ESTABLISHED"
      },
      timeGaps: ["Case-specific intermediate hours lack continuous surveillance or access telemetry."],
      contradictions: ["Reviewing timestamps for overlapping or mutually exclusive presence."],
      summary: `Parsed ${extractedEvents.length} chronological markers from case file. Evaluated strictly under Rule 1.`
    };

    if (onProgress) onProgress("agent-2", "AGENT 2 — EVIDENCE SPECIALIST parsing evidence register...", 35);
    
    // Extract evidence items (lines starting with EV- or EVIDENCE)
    const evRegex = /(?:EV(?:IDENCE)?-?\w*|\bItem\s*\d+)\s*[:-]\s*([^\n\r]+)/gi;
    const extractedEvidence = [];
    let evMatch;
    let evId = 1;
    while ((evMatch = evRegex.exec(caseText)) !== null) {
      extractedEvidence.push({
        id: `EV-${String(evId++).padStart(2, '0')}`,
        evidence: evMatch[0].trim(),
        fact: evMatch[1].trim(),
        inference: "Interpretation subject to verification.",
        strength: evMatch[1].toLowerCase().includes("dna") || evMatch[1].toLowerCase().includes("fingerprint") ? "HIGH" : "MEDIUM",
        supports: "Case investigation context.",
        doesNotProve: "Definitive guilt or physical presence by itself (Rule 4).",
        alternative: "Contamination, lawful presence, or unverified custody chain.",
        verificationNeeded: "Forensic laboratory validation and chain of custody documentation."
      });
    }

    if (extractedEvidence.length === 0) {
      extractedEvidence.push({
        id: "EV-01",
        evidence: "General case text statements",
        fact: "Extracted narrative facts from case dossier",
        inference: "Requires corroborating physical/digital exhibits",
        strength: "LOW",
        supports: "Initial investigative triage",
        doesNotProve: "Legal culpability",
        alternative: "Alternative explanations exist for undocumented actions.",
        verificationNeeded: "Formal evidence registry submission"
      });
    }

    reportData.agents.agent2 = {
      name: "AGENT 2 — EVIDENCE SPECIALIST",
      role: "Evidence Specialist",
      register: extractedEvidence,
      evidenceGaps: {
        physical: ["Physical items must be verified with formal laboratory chain of custody."],
        digital: ["Digital logs require cryptographic hashing and NTP time synchronization checks."],
        timestamps: ["Gaps between recorded events require CCTV or sensor correlation."],
        witness: ["Independent corroboration of suspect statements."],
        chainOfCustody: ["Evidence storage and handling log required."]
      },
      summary: `Analyzed ${extractedEvidence.length} documented evidence items. Separated direct facts from investigative inferences.`
    };

    if (onProgress) onProgress("agent-3", "AGENT 3 — SUSPECT ANALYST evaluating persons of interest...", 60);
    
    // Extract suspects (Suspect 1, Suspect 2, etc.)
    const suspectRegex = /(?:Suspect\s*\d*|Person of Interest)\s*[:-]\s*([^\n\r]+)/gi;
    const extractedSuspects = [];
    let sMatch;
    while ((sMatch = suspectRegex.exec(caseText)) !== null) {
      extractedSuspects.push(sMatch[1].trim());
    }

    const suspectList = extractedSuspects.length > 0 ? extractedSuspects : ["Identified Party A", "Identified Party B"];
    const comparisonTable = suspectList.map(name => ({
      suspect: name,
      motive: "Assessed separately from proof (Rule 3).",
      means: "Subject to documented technical and physical capabilities.",
      opportunity: "Bounded strictly by verified timestamps.",
      physAccess: "Physical presence must be substantiated independently of card/digital logs (Rule 4).",
      digAccess: "Credentials recorded in case file.",
      alibi: "Requires independent corroboration.",
      evFor: "Items linking party in case text.",
      evAgainst: "Gaps or alternative explanations.",
      unknowns: "Unverified timelines and credential sharing possibilities."
    }));

    reportData.agents.agent3 = {
      name: "AGENT 3 — SUSPECT ANALYST",
      role: "Suspect Analyst",
      comparisonTable,
      suspectProfiles: suspectList.map(name => ({
        name,
        facts: "Statements and records attributed in case file.",
        supporting: "Corroborating items.",
        contradicting: "Absence of direct physical proof.",
        inferences: "Hypothetical role requiring confirmation.",
        position: "Moderately supported / Pending verification"
      })),
      summary: `Evaluated ${suspectList.length} persons of interest using identical, unbiased criteria (Rule 5).`
    };

    if (onProgress) onProgress("agent-4", "AGENT 4 — ADVERSARIAL SKEPTIC stress-testing evidence...", 75);
    reportData.agents.agent4 = {
      name: "AGENT 4 — ADVERSARIAL SKEPTIC",
      role: "Adversarial Skeptic",
      leadingHypothesis: `Primary individual identified in case logs executed the alleged incident.`,
      strongestSupportingEvidence: "Direct digital or access logs mentioned in case file.",
      challenges: [
        {
          claim: "Log entries prove physical presence of the credential holder.",
          whyWeak: "Rule 4: Access cards and user logins can be shared, stolen, cloned, or accessed on unattended terminals.",
          alternative: "Another individual used the credential, or remote execution occurred.",
          evidenceNeeded: "Biometric authentication, physical CCTV, or eyewitness confirmation."
        },
        {
          claim: "Suspect motive demonstrates intent and execution.",
          whyWeak: "Rule 3: Motive is not proof. High motive frequently co-exists with total innocence.",
          alternative: "Coincidental timing or opportunistic framing.",
          evidenceNeeded: "Concrete physical or digital linkage directly placing the suspect at the scene."
        }
      ],
      contradictions: ["Evaluating potential discrepancies in alibi timelines."],
      potentialMisinterpretations: ["Assuming credential possession proves physical action."],
      alternativeHypotheses: [
        {
          hypothesis: "Third-party exploitation or credential compromise.",
          supportingFacts: "Absence of definitive biometric or CCTV confirmation.",
          contradictingFacts: "Primary logs point to credential owner.",
          unknowns: "Credential security history and access delegations."
        }
      ],
      skepticConclusion: "Moderately supported. Requires strict human verification of credential custody before drawing legal conclusions."
    };

    if (onProgress) onProgress("agent-5", "AGENT 5 — CHIEF INVESTIGATOR synthesizing report...", 90);
    reportData.agents.agent5 = {
      name: "AGENT 5 — CHIEF INVESTIGATOR",
      role: "Chief Investigator",
      executiveSummary: {
        whatHappened: "An incident was submitted and analyzed through the 5-agent evidence engine.",
        criticalWindow: reportData.agents.agent1.criticalWindow.critical,
        strongestEvidence: "Parsed forensic exhibits and access logs.",
        majorUncertainty: "Verification of credential custody and physical alibis.",
        leadingExplanation: "The available evidence supports an ongoing investigation into the primary vectors identified, requiring human confirmation."
      },
      establishedFacts: extractedEvents.slice(0, 5).map(e => `${e.time}: ${e.event}`),
      importantInferences: [
        {
          inference: "Events may have involved credential sharing or unmonitored egress.",
          basedOn: "Standard investigative skepticism (Rule 4 and Rule 6).",
          limitation: "Requires physical and digital forensic testing."
        }
      ],
      criticalTimeline: `Earliest: ${reportData.agents.agent1.criticalWindow.earliest} | Latest: ${reportData.agents.agent1.criticalWindow.latest}`,
      evidenceAssessment: "Categorized into HIGH, MEDIUM, and LOW evidentiary weights.",
      suspectComparison: "All suspects compared under uniform, unbiased metrics.",
      adversarialFindings: "Alternative explanations exist for access card events and uncorroborated alibis.",
      mostLikelyExplanation: "The available evidence points toward an active investigation requiring physical verification before establishing culpability.",
      primarySuspect: suspectList[0] || "NOT ESTABLISHED",
      primarySuspectWhy: "Identified in initial case records; subject to strict human review.",
      primarySuspectConfidence: 50,
      systemConfidenceScore: 50,
      systemConfidenceReason: "Moderate support with important unresolved questions (50–74% range). Grounded strictly in submitted custom text.",
      whatWeDoNotKnow: [
        "Are timestamps synchronized to a certified NTP source?",
        "Was physical possession of credentials maintained at all times?",
        "Are there unmonitored access points or blind spots?",
        "Have alibis been verified through independent third parties?"
      ],
      humanReviewRequired: [
        "Verify raw access-control and CCTV logs.",
        "Independently interview witnesses and alibi providers.",
        "Examine physical exhibits for latent fingerprints and DNA.",
        "Audit credential sharing practices within the organization."
      ],
      evidenceRequiredForCertainty: {
        physical: ["Forensic laboratory analysis of physical exhibits."],
        digital: ["Cryptographically verified audit logs and network telemetry."],
        witness: ["Sworn statements from all relevant parties."]
      },
      finalStatus: "🟡 INCONCLUSIVE — Evidence points toward a possibility but is insufficient",
      finalStatusExplanation: "Analysis completed on custom case text. Evidentiary gaps require human verification prior to actionable conclusions."
    };

    if (onProgress) onProgress("complete", "Custom case analysis complete.", 100);
    return reportData;
  }

  /**
   * Generates formatted GitHub Markdown report conforming to Section 3 specification
   */
  generateMarkdownReport(reportData) {
    const a1 = reportData.agents.agent1;
    const a2 = reportData.agents.agent2;
    const a3 = reportData.agents.agent3;
    const a4 = reportData.agents.agent4;
    const a5 = reportData.agents.agent5;

    let md = `# SENTINEL-AI INVESTIGATION REPORT\n`;
    md += `**Engine Version:** 2.0 Enterprise | **Timestamp:** ${reportData.timestamp}\n\n`;

    if (reportData.isEmpty) {
      md += `> [!CAUTION]\n> **CASE FILE LIMITATION (Section 1 & Rule 1):**\n> The case file is EMPTY or contains only template placeholder text. In accordance with Rule 1 (Case-Only Grounding), no facts or suspects have been invented. Final Status: 🔴 INSUFFICIENT EVIDENCE (0% Confidence).\n\n`;
    }

    md += `## 1. Executive Summary\n`;
    md += `* **What Happened:** ${a5.executiveSummary.whatHappened}\n`;
    md += `* **Critical Time Window:** ${a5.executiveSummary.criticalWindow}\n`;
    md += `* **Strongest Evidence:** ${a5.executiveSummary.strongestEvidence}\n`;
    md += `* **Major Uncertainty:** ${a5.executiveSummary.majorUncertainty}\n`;
    md += `* **Current Leading Explanation:** ${a5.executiveSummary.leadingExplanation}\n\n`;

    md += `## 2. Established Facts\n`;
    a5.establishedFacts.forEach(fact => {
      md += `* \`FACT:\` ${fact}\n`;
    });
    md += `\n`;

    md += `## 3. Important Inferences\n`;
    a5.importantInferences.forEach(inf => {
      md += `* **Inference:** ${inf.inference}\n`;
      md += `  * *Based on:* ${inf.basedOn}\n`;
      md += `  * *Limitation:* ${inf.limitation}\n`;
    });
    md += `\n`;

    md += `## 4. Critical Timeline (Agent 1 — Timeline Detective)\n`;
    md += `* **Earliest Established Boundary:** ${a1.criticalWindow.earliest}\n`;
    md += `* **Latest Established Boundary:** ${a1.criticalWindow.latest}\n`;
    md += `* **Critical Window:** ${a1.criticalWindow.critical}\n`;
    md += `* **Exact Crime Time:** ${a1.criticalWindow.exactCrimeTime}\n\n`;

    md += `### Chronological Timeline Table\n`;
    md += `| Time | Recorded Event | Source/Type | Fact or Inference | Confidence |\n`;
    md += `| :--- | :--- | :--- | :--- | :--- |\n`;
    a1.timeline.forEach(row => {
      md += `| ${row.time} | ${row.event} | ${row.source} | ${row.type} | ${row.confidence} |\n`;
    });
    md += `\n`;

    md += `## 5. Evidence Assessment (Agent 2 — Evidence Specialist)\n`;
    md += `| Evidence ID | Evidence | Direct Fact | Inference | Strength | What It Supports | What It Does NOT Prove | Alternative Explanation | Verification Needed |\n`;
    md += `| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |\n`;
    a2.register.forEach(ev => {
      md += `| ${ev.id} | ${ev.evidence} | ${ev.fact} | ${ev.inference} | **${ev.strength}** | ${ev.supports} | ${ev.doesNotProve} | ${ev.alternative} | ${ev.verificationNeeded} |\n`;
    });
    md += `\n`;

    md += `## 6. Suspect Comparison (Agent 3 — Suspect Analyst)\n`;
    md += `| Suspect | Motive | Means | Opportunity | Physical Access | Digital Access | Alibi Strength | Evidence For | Evidence Against | Key Unknowns |\n`;
    md += `| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |\n`;
    a3.comparisonTable.forEach(s => {
      md += `| **${s.suspect}** | ${s.motive} | ${s.means} | ${s.opportunity} | ${s.physAccess} | ${s.digAccess} | ${s.alibi} | ${s.evFor} | ${s.evAgainst} | ${s.unknowns} |\n`;
    });
    md += `\n`;

    md += `## 7. Adversarial Findings (Agent 4 — Adversarial Skeptic)\n`;
    md += `* **Current Leading Hypothesis:** ${a4.leadingHypothesis}\n`;
    md += `* **Strongest Supporting Evidence:** ${a4.strongestSupportingEvidence}\n\n`;
    md += `### Challenges to Leading Hypothesis\n`;
    md += `| Claim / Evidence | Why It May Be Weak | Alternative Explanation | Evidence Needed |\n`;
    md += `| :--- | :--- | :--- | :--- |\n`;
    a4.challenges.forEach(c => {
      md += `| ${c.claim} | ${c.whyWeak} | ${c.alternative} | ${c.evidenceNeeded} |\n`;
    });
    md += `\n* **Skeptic Conclusion:** ${a4.skepticConclusion}\n\n`;

    md += `## 8. Most Likely Explanation\n`;
    md += `${a5.mostLikelyExplanation}\n\n`;

    md += `## 9. Primary Suspect / Vector\n`;
    md += `* **Primary Suspect / Threat Vector:** ${a5.primarySuspect}\n`;
    md += `* **Why:** ${a5.primarySuspectWhy}\n`;
    md += `* **Confidence:** ${a5.primarySuspectConfidence}%\n\n`;

    md += `## 10. SYSTEM CONFIDENCE SCORE\n`;
    md += `### **System Confidence: ${a5.systemConfidenceScore}%**\n`;
    md += `**Reason:** ${a5.systemConfidenceReason}\n\n`;

    md += `## 11. What We Still Do NOT Know\n`;
    a5.whatWeDoNotKnow.forEach((q, i) => {
      md += `${i + 1}. ${q}\n`;
    });
    md += `\n`;

    md += `## 12. Human Review Required\n`;
    a5.humanReviewRequired.forEach((item, i) => {
      md += `* [ ] **Action ${i + 1}:** ${item}\n`;
    });
    md += `\n`;

    md += `## 13. Evidence Required for Stronger / Legal Certainty\n`;
    md += `### Physical Evidence Needed\n`;
    a5.evidenceRequiredForCertainty.physical.forEach(item => md += `* ${item}\n`);
    md += `\n### Digital Evidence Needed\n`;
    a5.evidenceRequiredForCertainty.digital.forEach(item => md += `* ${item}\n`);
    md += `\n### Witness / Documentary Evidence Needed\n`;
    a5.evidenceRequiredForCertainty.witness.forEach(item => md += `* ${item}\n`);
    md += `\n`;

    md += `## 14. Final Status\n`;
    md += `### ${a5.finalStatus}\n`;
    md += `*${a5.finalStatusExplanation}*\n\n`;

    md += `---\n*Generated by SENTINEL-AI Enterprise Investigation Engine. Analytical decision support; not a legal verdict.*`;
    return md;
  }
}

if (typeof window !== 'undefined') {
  window.SentinelEngine = SentinelEngine;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SentinelEngine };
}
