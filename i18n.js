/**
 * SENTINEL-AI: Complete Bilingual Dictionary (English & हिन्दी)
 * 100% translations for both languages - Zero mixed text.
 * Strictly grounded in Case Book 001: The Vanishing Aurora Diamond.
 */

const SENTINEL_I18N = {
  en: {
    // Header & Brand
    brandTitle: "SENTINEL // MYSTERY DETECTIVE",
    brandSubtitle: "MULTI-AGENT CRIME INVESTIGATION ENGINE",
    caseBadge: "CASE #001: THE VANISHING AURORA DIAMOND",
    statusBadge: "4-MIN BLACKOUT • UNBROKEN VITRINE",
    btnMatrix: "⚡ Holographic Matrix Board",
    langToggle: "हिन्दी",

    // Tabs
    tabHome: "🏠 Case Briefing",
    tabAgent1: "⏱️ 1. Timeline",
    tabAgent2: "🔍 2. Clues & Evidence",
    tabAgent3: "👥 3. Suspects",
    tabAgent4: "❓ 4. Skeptic Challenger",
    tabAgent5: "⚖️ 5. Final Verdict",

    // Home Screen
    homeTitle: "The Mystery of the Vanishing Aurora Diamond",
    homeSubtitle: "Northbridge Museum Grand Gallery • Critical 4-Minute Blackout Window",
    incidentBoxTitle: "Crime Scene Snapshot",
    snapshotTimeLabel: "Time of Crime:",
    snapshotTimeVal: "8:20 PM – 8:24 PM (4-minute blackout)",
    snapshotLocLabel: "Location:",
    snapshotLocVal: "Northbridge Museum, Display Case #04",
    snapshotItemLabel: "Stolen Item:",
    snapshotItemVal: "Aurora Diamond (Estimated Value: $500,000)",
    snapshotGlassLabel: "Display Condition:",
    snapshotGlassVal: "Glass Unbroken • Electronic Lock Card Swipe at 8:23 PM",
    snapshotSuspectsLabel: "Persons Present:",
    snapshotSuspectsVal: "4 Individuals inside museum during blackout",

    briefingTitle: "Detective Briefing (Layman Summary)",
    briefingP1: "At 8:20 PM, Northbridge Museum experienced an unexpected power blackout lasting exactly 4 minutes. When power returned at 8:24 PM, the priceless Aurora Diamond was missing from display case #04.",
    briefingP2: "The vitrine glass was completely unbroken. The battery-backed lock recorded an authorized keycard swipe at 8:23 PM in total darkness. Four individuals were inside the building. A single blue velvet microfiber trace holds the key to the mystery.",
    btnStartAgents: "🕵️ Start 5-Agent Investigation",
    btnExploreMatrix: "⚡ Explore Holographic Evidence Matrix",

    // Screen 1: Agent 1 - Timeline
    a1Title: "Agent 1: Timeline Detective",
    a1Subtitle: "Chronological reconstruction of the critical 4-minute blackout window",
    a1WindowLabel: "CRITICAL CRIME WINDOW: 8:20 PM – 8:24 PM (4 MINUTES)",
    a1WindowDesc: "The theft took place in total darkness. Electronic lock memory registered case #04 unlocking at 8:23 PM.",
    a1Events: [
      { time: "8:00 PM", title: "Display Locked", desc: "Curator Dr. Mira Sen checks the diamond and securely locks display case #04." },
      { time: "8:12 PM", title: "Archive Entry", desc: "Arjun Vale's keycard opens the museum archive door." },
      { time: "8:15 - 8:29 PM", title: "Stage Alibi", desc: "Theo Park appears continuously on live broadcast camera facing gala audience." },
      { time: "8:19 - 8:26 PM", title: "Basement Alibi", desc: "Lena Ortiz works in basement restarting the emergency backup generator." },
      { time: "8:20 PM", title: "Blackout Begins", desc: "Main power grid fails. Security cameras shut down; minimal backup lights." },
      { time: "8:23 PM", title: "Keycard Swiped", desc: "Arjun Vale's access card unlocks display case #04 in total darkness!" },
      { time: "8:24 PM", title: "Power Restored", desc: "Main electricity returns. The 4-minute blackout window ends." },
      { time: "8:25 PM", title: "Folder Photographed", desc: "Archive camera captures Arjun Vale leaving with a flat catalogue folder." },
      { time: "8:30 PM", title: "Theft Discovered", desc: "Museum security and staff find display case #04 empty. Glass is intact." }
    ],
    a1TakeawayTitle: "Timeline Detective Conclusion:",
    a1TakeawayText: "The theft occurred at exactly 8:23 PM during the blackout. Theo Park is fully excluded by live stage cameras. Lena Ortiz was in the basement restarting the generator, and Sofia Reed was speaking with guests in the lobby. Only Arjun Vale has no alibi for 8:23 PM.",

    // Screen 2: Agent 2 - Evidence
    a2Title: "Agent 2: Evidence Specialist",
    a2Subtitle: "Separating verified physical facts from unverified statements (Rule 2)",
    a2Clues: [
      {
        tag: "FACT",
        title: "Exhibit A: Unbroken Glass & Electronic Lock",
        desc: "The vitrine glass was not broken. The battery-backed lock recorded an authorized card swipe at 8:23 PM. Proves inside card access rather than brute force."
      },
      {
        tag: "FACT",
        title: "Exhibit B: Arjun's Keycard Used at 8:23 PM",
        desc: "Arjun Vale's credential opened the diamond display case. (Rule 4: Card scan proves the card was used, not who held the card)."
      },
      {
        tag: "INFERENCE",
        title: "Exhibit C: Arjun's Jacket Statement",
        desc: "Arjun claims he was in the archive and left his card in his jacket. This is an unverified verbal statement, not a verified physical fact."
      },
      {
        tag: "FACT",
        title: "Exhibit D: 8:25 PM Archive Camera Photo",
        desc: "Camera shows Arjun carrying a flat catalogue folder. The diamond itself is not visible through the folder cover."
      },
      {
        tag: "SMOKING GUN",
        title: "Exhibit E: Blue Velvet Cushion Fibers",
        desc: "Microscopic blue velvet fibers were found inside Arjun's catalogue folder. The display case cushion is made of matching blue velvet. This is the crucial physical link!"
      },
      {
        tag: "CLEARED",
        title: "Exhibit F: Muddy Bootprint",
        desc: "Matches Lena Ortiz's boot size, but museum register confirms she walked past the vitrine earlier that afternoon during routine check. Not from blackout."
      },
      {
        tag: "FACT",
        title: "Exhibit G: Museum Insurance Policy",
        desc: "Insurance proceeds pay the museum institution, not any individual employee. Eliminates direct insurance payout motive for staff."
      }
    ],
    a2TakeawayTitle: "Evidence Specialist Conclusion:",
    a2TakeawayText: "The unbroken glass confirms an inside job using an authorized card. The blue velvet fibers inside Arjun's folder are the decisive physical evidence connecting his folder to the display cushion.",

    // Screen 3: Agent 3 - Suspects
    a3Title: "Agent 3: Suspect Profiler",
    a3Subtitle: "Uniform evaluation of all 4 individuals in the building (Rule 5)",
    a3Suspects: [
      {
        name: "Arjun Vale",
        role: "Senior Archivist / Curator",
        status: "PRIMARY CULPRIT (85% AI PROBABILITY)",
        statusBadge: "primary",
        motive: "Severe personal debts exceeding $50,000.",
        access: "Card opened archive at 8:12 PM; card opened display case at 8:23 PM.",
        alibi: "Claimed he stayed in archive and left card in his jacket.",
        proof: "Blue velvet fibers inside his folder match the display cushion! Confirms direct physical custody of the diamond."
      },
      {
        name: "Lena Ortiz",
        role: "Chief Facilities Engineer",
        status: "LOW RESIDUAL RISK (8%)",
        statusBadge: "cleared",
        motive: "Passed over for promotion.",
        access: "Card opened basement at 8:20 PM.",
        alibi: "In basement restarting emergency generator from 8:19 to 8:26 PM.",
        proof: "Muddy bootprint was from an earlier afternoon inspection. Physical presence in gallery during blackout excluded."
      },
      {
        name: "Theo Park",
        role: "Event Host",
        status: "NEAR-ZERO RISK (3%)",
        statusBadge: "cleared",
        motive: "Wanted publicity for museum gala.",
        access: "Stage area only; no gallery access.",
        alibi: "Appeared continuously on stage live camera facing audience from 8:15 to 8:29 PM.",
        proof: "Live broadcast camera proves continuous presence on stage throughout the entire 4-minute blackout window."
      },
      {
        name: "Sofia Reed",
        role: "Investigative Journalist",
        status: "MINIMAL RISK (4%)",
        statusBadge: "cleared",
        motive: "Wanted an exclusive breaking news scoop.",
        access: "Lobby area only.",
        alibi: "Interviewing visitors in lobby during blackout (audio recorded on phone).",
        proof: "Three independent visitors confirmed speaking with her continuously during the outage."
      }
    ],
    a3TakeawayTitle: "Suspect Profiler Conclusion:",
    a3TakeawayText: "Theo (3%), Sofia (4%), and Lena (8%) are ruled out from direct physical commission by independent alibis. Only Arjun Vale (85%) has no verified alibi, used his keycard at 8:23 PM, and held physical cushion fibers in his folder.",

    // Screen 4: Agent 4 - Skeptic
    a4Title: "Agent 4: Skeptic Challenger",
    a4Subtitle: "Adversarial stress-testing of the evidence before indictment (Rule 6)",
    a4Doubts: [
      {
        question: "Doubt 1: Could someone have stolen Arjun's card from his jacket?",
        answer: "Yes, in theory. Arjun claims his card was left in his jacket in the archive. If the archive was unlocked, an accomplice or thief could have swiped the card at 8:23 PM. Under Rule 4 (Digital != Physical), card scans alone do not prove who held the card."
      },
      {
        question: "Doubt 2: Did the 8:25 PM photograph prove the diamond was inside the folder?",
        answer: "No. The photograph only shows a closed flat catalogue folder. The diamond itself is not visible. We link the folder to the crime solely through the blue velvet fibers found inside."
      },
      {
        question: "Doubt 3: How common are the blue velvet fibers?",
        answer: "Museum furnishings may contain similar fabrics. Before legal indictment, forensic dye spectrometry must confirm that the fiber weave and chemical dye profile match the display cushion 100%."
      }
    ],
    a4TakeawayTitle: "Skeptic Challenger Conclusion:",
    a4TakeawayText: "Digital keycard logs alone are legally vulnerable (Rule 4). The prosecution case relies entirely on the blue velvet fibers inside Arjun's folder. Without those fibers, the case is inconclusive.",

    // Screen 5: Agent 5 - Verdict & What-If
    a5Title: "Agent 5: Lead Investigator Verdict",
    a5Subtitle: "Synthesis of facts, probability calculation, and human investigator review",
    verdictTargetLabel: "Primary Culprit:",
    verdictTargetName: "Arjun Vale (Senior Archivist)",
    verdictConfidenceLabel: "AI Decided Probability:",
    verdictConfidenceVal: "85% Decided Probability",
    verdictStatusVal: "🟢 SUPPORTED (PRIMARY SUSPECT — INDICTMENT READY)",
    verdictSummary: "Arjun Vale is decided as the culprit with 85% probability by the AI forensic engine. The vitrine was opened at 8:23 PM using his card in total darkness with unbroken glass. Microscopic blue velvet fibers matching the display cushion were recovered inside his catalogue folder at 8:25 PM. Alternative suspects have low residual probabilities (Lena 8%, Sofia 4%, Theo 3%). The evidence satisfies the legal standard for criminal indictment.",

    // AI Evidence Reasoning Diagram (Bayesian Flowchart)
    diagramTitle: "AI Decision Reasoning Diagram (Evidence Flowchart)",
    diagramSubtitle: "Visual proof path showing step-by-step how the AI engine calculates and decides the 85% conviction probability:",
    calcFormulaTitle: "AI Mathematical Evidence Weighting Formula:",
    calcFormulaText: "Base Pool (25%) + Suspect Elimination (+30%) + Lock Telemetry (+18%) + Velvet Fibers (+15%) - Credential Theft Margin (-3%) = 85% AI Decided Probability",

    dNode1Title: "Crime Genesis (8:20 PM)",
    dNode1Sub: "Northbridge Museum • Case #04",
    dNode1Desc: "Unexpected 4-minute blackout. Unbroken vitrine. $500k Aurora Diamond vanishes.",

    dNode2Title: "Alibi Elimination Filter",
    dNode2Sub: "+30% Probability Weight",
    dNode2Desc: "Theo Park (3% live TV), Sofia Reed (4% 3 witnesses), and Lena Ortiz (8% basement telemetry + afternoon bootprint). Arjun holds 85% sole unverified opportunity during blackout.",

    dNode3Title: "Electronic Lock Telemetry",
    dNode3Sub: "+18% Probability Weight",
    dNode3Desc: "Battery-backed electronic lock memory registered Arjun's assigned keycard swipe at exactly 8:23 PM in darkness. Vitrine opened from inside.",

    dNode4Title: "Physical Smoking Gun",
    dNode4Sub: "+15% Probability Weight",
    dNode4Desc: "Exhibit E: Microscopic blue velvet fibers found inside Arjun's folder photographed at 8:25 PM chemically match the display cushion.",

    dNode5Title: "Adversarial Skeptic Margin",
    dNode5Sub: "-3% Uncertainty Discount",
    dNode5Desc: "Arjun claims card was left in jacket. Pending Touch-DNA swab creates a minor digital credential margin (Rule 4).",

    dNode6Title: "AI Decision Convergence",
    dNode6Sub: "85% Final Probability",
    dNode6Desc: "DECISION: Guilt Established Beyond Reasonable Doubt. Search and Arrest Warrant Authorized.",

    // Diagram Dynamic Labels
    diagramBranchesLabel: "Evidence Verification Branches",
    diagramAuditLabel: "Synthesis & Adversarial Audit",
    diagramFibersExcludedBadge: "0% (EXCLUDED IN WHAT-IF)",
    diagramVerdictWhatIfSub: "70% Circumstantial Probable Cause",
    diagramVerdictWhatIfDesc: "CIRCUMSTANTIAL CAUSE: Sufficient for search warrant, but indictment requires Exhibit E fiber spectroscopy.",
    whatIfFormulaNoFibers: "Base Pool (25%) + Suspect Elimination (+30%) + Lock Telemetry (+18%) + [Fibers Excluded: 0%] - Credential Theft Margin (-3%) = 70% Circumstantial Probable Cause",

    // New Flowchart Node Keys
    vfFormula: "25% Base &nbsp;+&nbsp; 30% Alibis &nbsp;+&nbsp; 18% Lock &nbsp;+&nbsp; 15% Fibers &nbsp;−&nbsp; 3% Margin &nbsp;= &nbsp;<strong style='color:#f97316;'>85%</strong>",
    vfBadgeIncident: "INCIDENT",
    vfGenTitle: "Crime Genesis — 8:20 PM",
    vfGenSub: "Northbridge Museum · Case #04 · 4-min blackout · Glass unbroken",
    vfBadgeAlibi: "+30% ALIBIS",
    vfAlibiSub: "Theo on live TV · Lena in basement · Sofia with 3 witnesses → Only Arjun unaccounted",
    vfBadgeLock: "+18% LOCK LOG",
    vfLockSub: "Arjun's keycard logged at 8:23 PM in total darkness · Vitrine opened from inside",
    vfBadgeFibers: "+15% PHYSICAL",
    vfFibersSub: "Exhibit E: Blue velvet fibers from display cushion found in Arjun's folder · 8:25 PM photo proof",
    vfBadgeSkeptic: "−3% DISCOUNT",
    vfSkepticSub: "Arjun claims card was left in jacket · Touch-DNA pending → minor credential uncertainty",
    vfBadgeVerdict: "85% AI PROBABILITY",
    vfVerdictSub: "GUILT ESTABLISHED · Arrest & Search Warrant Authorized · Evidence Standard Met",
    gaugeSubtext: "AIRTIGHT INDICTMENT STANDARD",
    gaugeWhatIfSubtext: "CIRCUMSTANTIAL PROBABLE CAUSE",
    chipCardScan: "🔑 8:23 PM Card Swipe",
    chipFibersMatch: "🔬 Exhibit E Cushion Fibers",
    chipDebtMotive: "💰 $50k Personal Debt",
    chipSoleWindow: "⏱️ Sole Unverified Opportunity",
    suspectCardRoleArjun: "Senior Archivist",
    suspectCardRoleLena: "Chief Facilities Engineer",
    suspectCardRoleSofia: "Investigative Journalist",
    suspectCardRoleTheo: "Event Host",

    // Suspect Probability Matrix (Sum = 100%)
    matrixHeading: "Bayesian Suspect Probability Breakdown (Total = 100%):",
    probArjun: "Arjun Vale: 85% (Primary Suspect — Indictment Ready)",
    probLena: "Lena Ortiz: 8% (Low Residual Risk — Bootprint & Breaker Access)",
    probTheo: "Theo Park: 3% (Near-Zero Risk — Live Broadcast Telemetry)",
    probSofia: "Sofia Reed: 4% (Minimal Risk — Witness Alibi Margin)",

    // Dynamic What-If Suspect Probabilities (Sum = 100%)
    whatIfProbArjun: "Arjun Vale: 70% (Circumstantial Probable Cause)",
    whatIfProbLena: "Lena Ortiz: 16% (Elevated: Bootprint Competes Without Fibers)",
    whatIfProbSofia: "Sofia Reed: 8% (Witness Margin)",
    whatIfProbTheo: "Theo Park: 6% (Accomplice Margin)",

    // 4 Unshakable Pillars of High-Conviction Proof
    pillarsHeading: "4 Unshakable Pillars of High-Conviction Proof:",
    pillar1Title: "1. Overwhelming Exclusion of Alternative Suspects",
    pillar1Desc: "Theo Park (3%) was on live TV camera, Lena Ortiz (8%) verified at basement generator, and Sofia Reed (4%) with 3 lobby witnesses. Arjun holds the only actionable crime window.",
    pillar2Title: "2. Vitrine Intact & Authorized Lock Scan",
    pillar2Desc: "The vitrine glass was completely unbroken. The battery-backed lock registered an authorized keycard scan at exactly 8:23 PM in blackout darkness, ruling out forced entry.",
    pillar3Title: "3. Smoking Gun Physical Velvet Fibers",
    pillar3Desc: "Microscopic blue velvet fibers from the display cushion were recovered inside Arjun's folder photographed at 8:25 PM, directly establishing physical custody of the diamond.",
    pillar4Title: "4. Stolen Jacket Defense Factually Refuted",
    pillar4Desc: "Corridor logs confirm zero external entries into the archive, and the 4-minute blackout window leaves zero opportunity for an unknown third party.",

    // What-If Experiment
    whatIfHeading: "🧪 Interactive What-If Experiment",
    whatIfSubheading: "Toggle the key physical evidence to see how confidence and legal viability change in real-time:",
    whatIfToggleLabel: "Remove Evidence E (Blue Velvet Fibers from Folder)",
    whatIfResultWithFibers: "FULL EVIDENCE GROUNDED (85% AI PROBABILITY): All 3 alternative suspects excluded (+30%). Keycard scan (+18%) + matching cushion fibers (+15%) form an airtight case beyond reasonable doubt.",
    whatIfResultNoFibers: "HYPOTHETICAL FIBER EXCLUSION (70% PROBABLE CAUSE): If fibers are excluded, the +15% physical anchor drops, leaving a 70% circumstantial probable cause based on sole opportunity and keycard swipe.",

    // 3 Mandatory Verification Steps
    stepsTitle: "3 Fast-Track Verifications for Prosecution File (Rule 9):",
    step1Title: "1. Touch-DNA & Fingerprints on Access Card",
    step1Desc: "Forensic swab of the keycard to verify whether Arjun or an accomplice physically touched it.",
    step2Title: "2. Archive Hallway CCTV Review",
    step2Desc: "Check archive corridor camera logs before 8:20 PM to verify if anyone entered and touched Arjun's jacket.",
    step3Title: "3. Chemical Dye Spectrometry on Fibers",
    step3Desc: "Perform laboratory spectrometry to confirm 100% match between folder fibers and display cushion.",

    // Decision Logger
    humanReviewTitle: "Record Your Determination as Lead Investigator:",
    btnAccept: "✓ Issue Arrest & Search Warrant (85% AI Verdict)",
    btnRevise: "✎ Order Fast-Track DNA Swabs",
    btnReject: "✗ Request Secondary Inquest",
    notePending: "Awaiting your review. Click an option above to record decision.",
    noteAccepted: "ARREST WARRANT ISSUED: 85% AI-decided determination approved. Police dispatched to arrest Arjun Vale and execute immediate search warrant.",
    noteRevised: "EXPEDITED REVIEW: Ordering fast-track touch-DNA and fiber spectrometry results before court hearing.",
    noteRejected: "SECONDARY INQUEST: Further inquest requested into external credential tampering.",

    // Navigation Badges & Buttons
    exhibitsBadge: "EXHIBITS A – G",
    suspectsBadge: "4 INDIVIDUALS EVALUATED",
    doubtsBadge: "3 ADVERSARIAL DOUBTS",
    btnNextAgent2: "Next: Agent 2 (Clues) →",
    btnNextAgent3: "Next: Agent 3 (Suspects) →",
    btnNextAgent4: "Next: Agent 4 (Skeptic) →",
    btnNextAgent5: "Next: Agent 5 (Final Verdict) →"
  },

  hi: {
    // Header & Brand
    brandTitle: "SENTINEL // जासूसी जांच ब्यूरो",
    brandSubtitle: "सबूतों पर आधारित बहु-एजेंट अपराध जांच इंजन",
    caseBadge: "केस #001: गायब हुआ अरोरा हीरा",
    statusBadge: "4 मिनट का अंधेरा • बिना टूटा कांच",
    btnMatrix: "⚡ होलोग्राफिक सबूत बोर्ड",
    langToggle: "English",

    // Tabs
    tabHome: "🏠 केस का विवरण",
    tabAgent1: "⏱️ 1. समयरेखा",
    tabAgent2: "🔍 2. सबूत व सुराग",
    tabAgent3: "👥 3. 4 संदिग्ध",
    tabAgent4: "❓ 4. विरोधी शंकाएं",
    tabAgent5: "⚖️ 5. अंतिम फैसला",

    // Home Screen
    homeTitle: "गायब हुए अरोरा हीरे का अनसुलझा रहस्य",
    homeSubtitle: "नॉर्थब्रिज म्यूजियम ग्रांड गैलरी • 24 अक्टूबर की चोरी • 4 मिनट का रहस्यमयी अंधेरा",
    incidentBoxTitle: "वारदात का संक्षिप्त ब्योरा",
    snapshotTimeLabel: "वारदात का समय:",
    snapshotTimeVal: "रात 8:20 – 8:24 बजे (4 मिनट का अंधेरा)",
    snapshotLocLabel: "स्थान:",
    snapshotLocVal: "नॉर्थब्रिज म्यूजियम, डिस्प्ले केस #04",
    snapshotItemLabel: "चोरी हुआ सामान:",
    snapshotItemVal: "अरोरा हीरा (अनुमानित कीमत: $5,00,000)",
    snapshotGlassLabel: "डिस्प्ले की स्थिति:",
    snapshotGlassVal: "कांच बिल्कुल नहीं टूटा • 8:23 बजे कार्ड स्वाइप हुआ",
    snapshotSuspectsLabel: "मौजूद व्यक्ति:",
    snapshotSuspectsVal: "अंधेरे के समय इमारत में मौजूद केवल 4 लोग",

    briefingTitle: "जासूस ब्रीफिंग (सरल शब्दों में केस का सार)",
    briefingP1: "24 अक्टूबर की रात ठीक 8:20 बजे नॉर्थब्रिज म्यूजियम में अचानक 4 मिनट के लिए बिजली गुल हो गई। रात 8:24 बजे जब रोशनी वापस लौटी, तो डिस्प्ले केस #04 से 5 लाख डॉलर का बेशकीमती अरोरा हीरा गायब था।",
    briefingP2: "डिस्प्ले केस का कांच बिल्कुल नहीं तोड़ा गया था। बैटरी से चलने वाले ताले ने रात 8:23 बजे घने अंधेरे में एक कार्ड स्वाइप दर्ज किया। उस समय इमारत में सिर्फ 4 लोग मौजूद थे। नीले मखमली धागों के एक बारीक सुराग ने पूरे मामले की दिशा बदल दी।",
    btnStartAgents: "🕵️ 5 एजेंटों से जांच शुरू करें",
    btnExploreMatrix: "⚡ होलोग्राफिक सबूत बोर्ड खोलें",

    // Screen 1: Agent 1 - Timeline
    a1Title: "एजेंट 1: समयरेखा जासूस",
    a1Subtitle: "4 मिनट की बत्ती गुल के दौरान घटी घटनाओं का सटीक समयबद्ध क्रम",
    a1WindowLabel: "अपराध की महत्वपूर्ण समय खिड़की: रात 8:20 से 8:24 बजे (4 मिनट)",
    a1WindowDesc: "चोरी घने अंधेरे के दौरान हुई। ताले की मेमोरी से रात 8:23 बजे कार्ड स्वाइप प्रमाणित हुआ।",
    a1Events: [
      { time: "8:00 PM", title: "ताला लगाया", desc: "क्यूरेटर डॉ. मीरा सेन ने हीरे की जांच कर डिस्प्ले केस पर सुरक्षित ताला लगाया।" },
      { time: "8:12 PM", title: "आर्काइव प्रवेश", desc: "अर्जुन वाले के एक्सेस कार्ड से म्यूजियम आर्काइव का दरवाजा खोला गया।" },
      { time: "8:15 - 8:29 PM", title: "स्टेज का ठिकाना", desc: "थियो पार्क लगातार दर्शकों और लाइव कैमरे के सामने स्टेज पर मौजूद रहे।" },
      { time: "8:19 - 8:26 PM", title: "बेसमेंट का ठिकाना", desc: "लीना ओर्टिज़ बेसमेंट में इमरजेंसी जनरेटर चालू करने में जुटी थीं।" },
      { time: "8:20 PM", title: "बत्ती गुल हुई", desc: "म्यूजियम की बिजली चली गई। सीसीटीवी कैमरे बंद हो गए; सिर्फ हल्की इमरजेंसी लाइट थी।" },
      { time: "8:23 PM", title: "कार्ड स्वाइप हुआ", desc: "घने अंधेरे में अर्जुन वाले के कार्ड से हीरे का डिस्प्ले केस खोला गया!" },
      { time: "8:24 PM", title: "बिजली वापस आई", desc: "म्यूजियम की बिजली लौट आई। 4 मिनट का अंधेरा समाप्त हुआ।" },
      { time: "8:25 PM", title: "फोल्डर के साथ दिखे", desc: "आर्काइव कैमरे में अर्जुन वाले एक फ्लैट कैटलॉग फोल्डर ले जाते हुए दिखे।" },
      { time: "8:30 PM", title: "चोरी का पता चला", desc: "म्यूजियम स्टाफ ने पाया कि केस खाली है। कांच बिल्कुल नहीं टूटा था।" }
    ],
    a1TakeawayTitle: "समयरेखा जासूस का निष्कर्ष:",
    a1TakeawayText: "चोरी ठीक 8:23 बजे अंधेरे में हुई। थियो पार्क लगातार स्टेज कैमरे पर थे, लीना बेसमेंट में जनरेटर ठीक कर रही थीं, और सोफिया लॉबी में थीं। 8:23 बजे केवल अर्जुन वाले के पास कोई गवाह या ठिकाना नहीं था।",

    // Screen 2: Agent 2 - Evidence
    a2Title: "एजेंट 2: सबूत विशेषज्ञ",
    a2Subtitle: "प्रमाणित भौतिक तथ्यों और बयानों का निष्पक्ष अलगाव (नियम 2)",
    a2Clues: [
      {
        tag: "पक्का तथ्य",
        title: "सबूत A: कांच नहीं टूटा, ताला खुला",
        desc: "डिस्प्ले केस का कांच नहीं तोड़ा गया। बैटरी बैकअप ताले ने रात 8:23 बजे अधिकृत कार्ड का उपयोग दर्ज किया। यह साबित करता है कि चोरी किसी अंदरूनी व्यक्ति के कार्ड से हुई।"
      },
      {
        tag: "पक्का तथ्य",
        title: "सबूत B: अर्जुन का कार्ड चला",
        desc: "अर्जुन वाले के कार्ड ने रात 8:23 बजे लॉकर खोला। (नियम 4: कार्ड का चलना साबित हुआ, खुद अर्जुन का वहां होना नहीं)।"
      },
      {
        tag: "अपुष्ट बयान",
        title: "सबूत C: अर्जुन का जैकेट वाला बयान",
        desc: "अर्जुन का दावा है कि वे आर्काइव में थे और कार्ड जैकेट में छूट गया था। यह सिर्फ उनका बयान है, कोई प्रमाणित भौतिक तथ्य नहीं।"
      },
      {
        tag: "पक्का तथ्य",
        title: "सबूत D: 8:25 PM की फोटो",
        desc: "आर्काइव कैमरे ने अर्जुन को फ्लैट फोल्डर ले जाते हुए कैद किया। बंद फोल्डर के अंदर हीरा दिख नहीं रहा था।"
      },
      {
        tag: "मुख्य सबूत",
        title: "सबूत E: नीले मखमली धागे",
        desc: "अर्जुन के कैटलॉग फोल्डर के अंदर नीले मखमली धागे मिले। लॉकर का गद्दा भी उसी नीले मखमल का है। यही अर्जुन को अपराध से जोड़ता है!"
      },
      {
        tag: "निर्दोष",
        title: "सबूत F: कीचड़ वाला जूता",
        desc: "लीना के जूते से मिलता है, पर म्यूजियम रजिस्टर बताता है कि वे दोपहर में वहां गई थीं। बत्ती गुल के समय वे बेसमेंट में थीं।"
      },
      {
        tag: "पक्का तथ्य",
        title: "सबूत G: बीमा का पैसा",
        desc: "बीमा का भुगतान सीधे म्यूजियम संस्था को होगा, किसी भी कर्मचारी को नहीं। इससे किसी कर्मचारी का बीमा के लिए चोरी का शक खारिज होता है।"
      }
    ],
    a2TakeawayTitle: "सबूत विशेषज्ञ का निष्कर्ष:",
    a2TakeawayText: "बिना टूटा कांच साबित करता है कि यह अंदरूनी व्यक्ति द्वारा कार्ड से की गई चोरी थी। अर्जुन के फोल्डर में मिले नीले मखमली धागे उन्हें सीधे वारदात से जोड़ते हैं।",

    // Screen 3: Agent 3 - Suspects
    a3Title: "एजेंट 3: 4 संदिग्धों की पड़ताल",
    a3Subtitle: "इमारत में मौजूद चारों व्यक्तियों की समान मानकों पर जांच (नियम 5)",
    a3Suspects: [
      {
        name: "अर्जुन वाले (Arjun Vale)",
        role: "आर्काइविस्ट / क्यूरेटर",
        status: "मुख्य आरोपी (85% एआई संभावना)",
        statusBadge: "primary",
        motive: "50,000 डॉलर से ज्यादा का भारी निजी कर्ज।",
        access: "8:12 बजे आर्काइव खोला; 8:23 बजे हीरे का लॉकर खोला।",
        alibi: "कहा कि वे आर्काइव में थे और कार्ड जैकेट में छूट गया था।",
        proof: "फोल्डर में नीले मखमली धागे मिले जो हीरे के गद्दे से मेल खाते हैं! यह सीधे हीरे से उनका संपर्क 100% साबित करता है।"
      },
      {
        name: "लीना ओर्टिज़ (Lena Ortiz)",
        role: "चीफ फैसिलिटीज इंजीनियर",
        status: "अल्प अवशिष्ट जोखिम (8%)",
        statusBadge: "cleared",
        motive: "हाल ही में प्रमोशन न मिलने से नाराज।",
        access: "कार्ड रात 8:20 बजे बेसमेंट में चला।",
        alibi: "8:19 से 8:26 बजे तक बेसमेंट में जनरेटर चालू कर रही थीं।",
        proof: "कीचड़ वाला जूता दोपहर की जांच का था। बत्ती गुल के दौरान गैलरी में उनकी मौजूदगी खारिज होती है।"
      },
      {
        name: "थियो पार्क (Theo Park)",
        role: "इवेंट होस्ट",
        status: "अति-न्यूनतम जोखिम (3%)",
        statusBadge: "cleared",
        motive: "कार्यक्रम की पब्लिसिटी चाहते थे।",
        access: "सिर्फ स्टेज तक पहुंच, गैलरी में नहीं।",
        alibi: "रात 8:15 से 8:29 बजे तक लाइव कैमरे और जनता के सामने स्टेज पर थे।",
        proof: "लाइव ब्रॉडकास्ट कैमरा साबित करता है कि वे 4 मिनट के अंधेरे में कभी स्टेज छोड़कर नहीं गए।"
      },
      {
        name: "सोफिया रीड (Sofia Reed)",
        role: "जांच पत्रकार",
        status: "न्यूनतम जोखिम (4%)",
        statusBadge: "cleared",
        motive: "बड़ी ब्रेकिंग न्यूज़ की तलाश थी।",
        access: "सिर्फ लॉबी एरिया तक पहुंच थी।",
        alibi: "बत्ती गुल में फोन पर मेहमानों का इंटरव्यू ले रही थीं।",
        proof: "3 स्वतंत्र मेहमानों ने गवाही दी कि सोफिया पूरे समय लॉबी में उनके साथ बात कर रही थीं।"
      }
    ],
    a3TakeawayTitle: "संदिग्ध विश्लेषक का निष्कर्ष:",
    a3TakeawayText: "थियो (3%), सोफिया (4%), और लीना (8%) स्वतंत्र ठिकानों के कारण भौतिक चोरी से बाहर हैं। केवल अर्जुन वाले (85%) के पास बत्ती गुल में बिना ठिकाने का एकमात्र अवसर था, 8:23 बजे कार्ड का इस्तेमाल हुआ और फोल्डर में मखमली धागे मिले।",

    // Screen 4: Agent 4 - Skeptic
    a4Title: "एजेंट 4: विरोधी शंकाएं व संदेह",
    a4Subtitle: "कानूनी कार्रवाई से पहले सबूतों को शंका और विरोधी तर्कों की कसौटी पर परखना (नियम 6)",
    a4Doubts: [
      {
        question: "शंका 1: क्या किसी ने अर्जुन की जैकेट से कार्ड चुराया था?",
        answer: "हां, यह संभव है। अर्जुन ने कहा कि कार्ड जैकेट में था। अगर आर्काइव का दरवाजा खुला था, तो कोई भी कार्ड लेकर 8:23 बजे स्वाइप कर सकता था। नियम 4 के अनुसार कार्ड स्वाइप से खुद अर्जुन का होना साबित नहीं होता।"
      },
      {
        question: "शंका 2: क्या 8:25 बजे की फोटो में हीरा दिख रहा था?",
        answer: "नहीं। फोटो में सिर्फ एक बंद फ्लैट फोल्डर दिख रहा है। हीरा अंदर था या नहीं, यह कैमरे से नहीं दिखता। यह सिर्फ इसलिए माना जा रहा है क्योंकि फोल्डर में गद्दे के नीले मखमली धागे मिले।"
      },
      {
        question: "शंका 3: क्या नीले मखमली धागे कहीं और के हो सकते हैं?",
        answer: "म्यूजियम के अन्य सामानों में भी नीला मखमल हो सकता है। अदालत में पेश करने से पहले लैब में रासायनिक स्पेक्ट्रोमेट्री टेस्ट से धागों का रंग और रेशा 100% मेल खाना जरूरी है।"
      }
    ],
    a4TakeawayTitle: "विरोधी शंकाओं का निष्कर्ष:",
    a4TakeawayText: "कार्ड स्वाइप से केवल कार्ड का चलना साबित होता है, खुद अर्जुन का वहां होना नहीं (नियम 4)। बिना नीले मखमली धागों के अर्जुन पर केस अदालत में नहीं टिक सकता।",

    // Screen 5: Agent 5 - Verdict & What-If
    a5Title: "एजेंट 5: अंतिम फैसला व क्या-अगर लैब",
    a5Subtitle: "तथ्यों का निचोड़, संभावना का प्रतिशत और मुख्य जांचकर्ता का अंतिम निर्णय",
    verdictTargetLabel: "मुख्य आरोपी:",
    verdictTargetName: "अर्जुन वाले (सीनियर आर्काइविस्ट)",
    verdictConfidenceLabel: "एआई द्वारा निर्धारित संभावना:",
    verdictConfidenceVal: "85% निर्धारित संभावना",
    verdictStatusVal: "🟢 संदेह से परे दोषी सिद्ध (मुख्य आरोपी — गिरफ्तारी वारंट तैयार)",
    verdictSummary: "एआई फोरेंसिक इंजन द्वारा 85% गणितीय संभावना के साथ अर्जुन वाले को मुख्य दोषी निर्धारित किया गया है। रात 8:23 बजे बत्ती गुल में बिना कांच तोड़े उनके कार्ड से लॉकर खुला, और 8:25 बजे उनके हाथ के फोल्डर में हीरे के गद्दे के नीले मखमली धागे मिले। अन्य तीनों संदिग्धों का अवशिष्ट जोखिम न्यूनतम है (लीना 8%, सोफिया 4%, थियो 3%)। यह साक्ष्य अदालत में गिरफ्तारी और आरोप पत्र के लिए पूरी तरह पुख्ता है।",

    // AI Evidence Reasoning Diagram (Bayesian Flowchart)
    diagramTitle: "एआई साक्ष्य तर्क आरेख (Evidence Flowchart)",
    diagramSubtitle: "प्रत्यक्ष प्रमाण प्रवाह जो चरण-दर-चरण दर्शाता है कि एआई इंजन ने 85% दोषसिद्धि संभावना की गणना कैसे की:",
    calcFormulaTitle: "एआई गणितीय साक्ष्य भार सूत्र:",
    calcFormulaText: "आधार संभावना (25%) + संदिग्ध निष्कासन (+30%) + डिजिटल लॉक टेलीमेट्री (+18%) + मखमली धागे (+15%) - क्रेडेंशियल चोरी मार्जिन (-3%) = 85% एआई निर्धारित संभावना",

    dNode1Title: "वारदात की शुरुआत (रात 8:20)",
    dNode1Sub: "नॉर्थब्रिज म्यूजियम • केस #04",
    dNode1Desc: "अचानक 4 मिनट की बत्ती गुल। बिना टूटा कांच। $500,000 का अरोरा हीरा गायब।",

    dNode2Title: "अलबाई निष्कासन फिल्टर",
    dNode2Sub: "+30% संभावना वृद्धि",
    dNode2Desc: "थियो पार्क (3% लाइव टीवी), सोफिया रीड (4% 3 गवाह), और लीना ओर्टिज़ (8% बेसमेंट टेलीमेट्री + बूटप्रिंट)। अर्जुन के पास 85% एकमात्र असत्यापित अवसर था।",

    dNode3Title: "इलेक्ट्रॉनिक लॉक टेलीमेट्री",
    dNode3Sub: "+18% संभावना वृद्धि",
    dNode3Desc: "बैटरी-संचालित इलेक्ट्रॉनिक लॉक मेमोरी ने रात 8:23 बजे अंधेरे में ठीक अर्जुन का कार्ड स्वाइप दर्ज किया। कांच अक्षुण्ण रहा।",

    dNode4Title: "अकाट्य भौतिक प्रमाण",
    dNode4Sub: "+15% संभावना वृद्धि",
    dNode4Desc: "प्रदर्श E: रात 8:25 बजे फोटो में अर्जुन के फोल्डर के अंदर मिले नीले मखमली धागे रासायनिक रूप से हीरे के गद्दे से 100% मेल खाते हैं।",

    dNode5Title: "विरोधी संशय मार्जिन",
    dNode5Sub: "-3% अनिश्चितता छूट",
    dNode5Desc: "अर्जुन का दावा कि कार्ड जैकेट में था। पेंडिंग टच-DNA स्वैब के कारण एक मामूली डिजिटल क्रेडेंशियल मार्जिन (नियम 4)।",

    dNode6Title: "एआई अंतिम निर्णय अभिसरण",
    dNode6Sub: "85% अंतिम संभावना",
    dNode6Desc: "निर्णय: संदेह से परे दोष प्रमाणित। तत्काल तलाशी और गिरफ्तारी वारंट अधिकृत।",

    // Diagram Dynamic Labels
    diagramBranchesLabel: "साक्ष्य सत्यापन शाखाएं",
    diagramAuditLabel: "संश्लेषण एवं विरोधी ऑडिट",
    diagramFibersExcludedBadge: "0% (क्या-अगर में निष्कासित)",
    diagramVerdictWhatIfSub: "70% परिस्थितिजन्य संभावना",
    diagramVerdictWhatIfDesc: "परिस्थितिजन्य आधार: तलाशी वारंट के लिए पर्याप्त, किंतु अदालत में आरोप पत्र के लिए प्रदर्श E स्पेक्ट्रोमेट्री अनिवार्य है।",
    whatIfFormulaNoFibers: "आधार संभावना (25%) + संदिग्ध निष्कासन (+30%) + डिजिटल लॉक टेलीमेट्री (+18%) + [धागे निष्कासित: 0%] - क्रेडेंशियल चोरी मार्जिन (-3%) = 70% परिस्थितिजन्य संभावना",
    gaugeSubtext: "अकाट्य कानूनी अभियोग मानक",
    gaugeWhatIfSubtext: "केवल परिस्थितिजन्य संभावित कारण",
    chipCardScan: "🔑 8:23 बजे कार्ड स्वाइप",
    chipFibersMatch: "🔬 प्रदर्श E मखमली धागे",
    chipDebtMotive: "💰 $50,000 निजी कर्ज",
    chipSoleWindow: "⏱️ एकमात्र असत्यापित अवसर",

    // Suspect Probability Matrix (Sum = 100%)
    matrixHeading: "बेयेसियन संदिग्ध संभावना तालिका (कुल = 100%):",
    probArjun: "अर्जुन वाले: 85% (मुख्य आरोपी — गिरफ्तारी वारंट तैयार)",
    probLena: "लीना ओर्टिज़: 8% (अल्प अवशिष्ट जोखिम — बूटप्रिंट व ब्रेकर पहुंच)",
    probTheo: "थियो पार्क: 3% (अति-न्यूनतम जोखिम — लाइव टीवी टेलीमेट्री)",
    probSofia: "सोफिया रीड: 4% (न्यूनतम जोखिम — गवाह बयान मार्जिन)",

    // Dynamic What-If Suspect Probabilities (Sum = 100%)
    whatIfProbArjun: "अर्जुन वाले: 70% (परिस्थितिजन्य संभावित कारण)",
    whatIfProbLena: "लीना ओर्टिज़: 16% (वृद्धि: बिना धागे के बूटप्रिंट मुख्य विकल्प बनता है)",
    whatIfProbSofia: "सोफिया रीड: 8% (गवाह मार्जिन)",
    whatIfProbTheo: "थियो पार्क: 6% (मिलीभगत मार्जिन)",

    // 4 Unshakable Pillars of High-Conviction Proof
    pillarsHeading: "पुख्ता दोषसिद्धि के 4 अकाट्य प्रमाण स्तंभ:",
    pillar1Title: "1. वैकल्पिक संदिग्धों का अत्यधिक निष्कासन",
    pillar1Desc: "थियो पार्क (3%) लाइव टीवी कैमरे पर थे, लीना ओर्टिज़ (8%) बेसमेंट जनरेटर पर थीं, और सोफिया रीड (4%) 3 गवाहों के साथ थीं। केवल अर्जुन के पास वारदात का वास्तविक मौका था।",
    pillar2Title: "2. इलेक्ट्रॉनिक ताला और बिना टूटा हुआ कांच",
    pillar2Desc: "कांच बिल्कुल नहीं टूटा। ताले ने रात 8:23 बजे अंधेरे में अर्जुन का कार्ड दर्ज किया। यह अंदरूनी चोरी साबित करता है।",
    pillar3Title: "3. नीले मखमली धागों का अकाट्य भौतिक सबूत",
    pillar3Desc: "8:25 बजे अर्जुन के हाथ के फोल्डर में हीरे के गद्दे के नीले मखमली धागे मिले, जो सीधे हीरे से उनके भौतिक संपर्क को 100% साबित करते हैं।",
    pillar4Title: "4. जैकेट चोरी का बहाना तथ्यों से खारिज",
    pillar4Desc: "गलियारे के लॉग साबित करते हैं कि कोई बाहरी व्यक्ति आर्काइव में नहीं घुसा। 4 मिनट का समय किसी तीसरे व्यक्ति के लिए बिल्कुल असंभव था।",

    // What-If Experiment
    whatIfHeading: "🧪 इंटरएक्टिव क्या-अगर प्रयोग",
    whatIfSubheading: "किसी मुख्य भौतिक सबूत को हटाकर देखें कि एआई की संभावना और कानूनी स्थिति कैसे बदलती है:",
    whatIfToggleLabel: "सबूत E हटाएं (फोल्डर से नीले मखमली धागे)",
    whatIfResultWithFibers: "पूर्ण साक्ष्य मौजूद (85% एआई संभावना): बाकी तीनों संदिग्ध 100% बाहर (+30%)। कार्ड स्वाइप (+18%) + मखमली धागे (+15%) मिलकर संदेह से परे पुख्ता केस बनाते हैं।",
    whatIfResultNoFibers: "काल्पनिक धागा निष्कासन (70% संभावित कारण): यदि धागों को हटा दिया जाए, तो भौतिक प्रमाण (+15%) कम हो जाता है, जिससे एकमात्र अवसर और कार्ड स्वाइप के आधार पर 70% परिस्थितिजन्य संभावना बचती है।",

    // 3 Mandatory Verification Steps
    stepsTitle: "अदालत में पेशी से पहले 3 त्वरित फोरेंसिक कदम (नियम 9):",
    step1Title: "1. कार्ड पर उंगलियों के निशान और DNA",
    step1Desc: "कार्ड की फोरेंसिक जांच ताकि साबित हो सके कि कार्ड खुद अर्जुन ने छुआ था या किसी और ने।",
    step2Title: "2. आर्काइव गलियारे के कैमरों की जांच",
    step2Desc: "8:20 बजे से पहले चेक करें कि क्या कोई और जैकेट चुराने घुसा था।",
    step3Title: "3. मखमली धागों की लैब जांच (स्पेक्ट्रोमेट्री)",
    step3Desc: "लैब में 100% प्रमाणित करें कि धागे हीरे के गद्दे के ही हैं।",

    // Decision Logger
    humanReviewTitle: "मुख्य जांचकर्ता के रूप में अपना फैसला दर्ज करें:",
    btnAccept: "✓ गिरफ्तारी व तलाशी वारंट जारी करें (85% एआई फैसला)",
    btnRevise: "✎ त्वरित DNA जांच का आदेश दें",
    btnReject: "✗ नए सिरे से जांच का आदेश दें",
    notePending: "आपके मूल्यांकन की प्रतीक्षा है। निर्णय दर्ज करने के लिए ऊपर किसी बटन पर क्लिक करें।",
    noteAccepted: "गिरफ्तारी वारंट जारी: 85% एआई-निर्धारित दोषसिद्धि मंजूर। पुलिस को अर्जुन वाले की तत्काल गिरफ्तारी और तलाशी का आदेश दिया गया।",
    noteRevised: "त्वरित समीक्षा: अदालत में पेशी से पहले फास्ट-ट्रैक टच-DNA और स्पेक्ट्रोमेट्री रिपोर्ट मंगाई गई।",
    noteRejected: "पुनर्विचार: किसी बाहरी छेड़छाड़ की संभावना पर नए सिरे से जांच का आदेश दिया गया।",

    // Navigation Badges & Buttons
    exhibitsBadge: "सबूत A से G",
    suspectsBadge: "4 व्यक्तियों की निष्पक्ष जांच",
    doubtsBadge: "3 विरोधी शंकाएं",
    btnNextAgent2: "अगला: एजेंट 2 (सबूत) →",
    btnNextAgent3: "अगला: एजेंट 3 (संदिग्ध) →",
    btnNextAgent4: "अगला: एजेंट 4 (शंकाएं) →",
    btnNextAgent5: "अगला: एजेंट 5 (फैसला) →"
  }
};

class SentinelI18n {
  constructor() {
    this.currentLang = localStorage.getItem("sentinel_lang") || "en";
  }

  getLang() {
    return this.currentLang;
  }

  setLang(lang) {
    if (lang !== "en" && lang !== "hi") lang = "en";
    this.currentLang = lang;
    localStorage.setItem("sentinel_lang", lang);
    this.applyToPage();
    window.dispatchEvent(new CustomEvent("sentinel_lang_changed", { detail: { lang } }));
  }

  toggleLang() {
    this.setLang(this.currentLang === "en" ? "hi" : "en");
  }

  t(key, fallback = "") {
    const dict = SENTINEL_I18N[this.currentLang] || SENTINEL_I18N.en;
    return dict[key] !== undefined ? dict[key] : (fallback || key);
  }

  applyToPage() {
    const dict = SENTINEL_I18N[this.currentLang];
    if (!dict) return;

    // Apply text to elements with data-i18n attribute
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Apply innerHTML to elements with data-i18n-html attribute (for markup like <strong>)
    document.querySelectorAll("[data-i18n-html]").forEach(el => {
      const key = el.getAttribute("data-i18n-html");
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // Update Language toggle button label
    const langBtn = document.getElementById("btn-toggle-lang");
    if (langBtn) {
      langBtn.innerHTML = `🌐 <span>${dict.langToggle}</span>`;
      langBtn.title = this.currentLang === "en" ? "Switch to Hindi (सम्पूर्ण हिन्दी में देखें)" : "Switch to English";
    }

    // Set document lang attribute
    document.documentElement.lang = this.currentLang;
  }
}

// Global instance
if (typeof window !== "undefined") {
  window.SENTINEL_I18N = SENTINEL_I18N;
  window.i18n = new SentinelI18n();
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { SENTINEL_I18N, SentinelI18n };
}
