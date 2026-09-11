/**
 * SENTINEL-AI Case File Library
 * Case Book 001: The Vanishing Aurora Diamond
 * Clear, concise, and strictly grounded in the official case briefing.
 */

const BENCHMARK_CASES = [
  {
    id: "case-aurora",
    title: "Case Book 001: The Vanishing Aurora Diamond",
    titleHi: "केस बुक 001: गायब हुआ अरोरा हीरा",
    subtitle: "Northbridge Museum Blackout Heist",
    subtitleHi: "नॉर्थब्रिज म्यूजियम बत्ती गुल चोरी",
    category: "Museum Heist",
    categoryHi: "हीरा चोरी केस",
    summary: "At 8:20 PM, Northbridge Museum lost power for 4 minutes. The priceless Aurora Diamond disappeared from an unbroken locked case. Four suspects were in the building. One keycard record and velvet fibers cracked the mystery.",
    summaryHi: "रात 8:20 बजे नॉर्थब्रिज म्यूजियम में 4 मिनट के लिए बत्ती गुल हो गई। बिना कांच तोड़े ताले में बंद अरोरा हीरा गायब हो गया। म्यूजियम में 4 लोग मौजूद थे। एक कार्ड स्वाइप और नीले मखमली धागों ने इस रहस्य की गुत्थी सुलझा दी।",
    rawCaseFile: `<CASE_FILE>
CASE BOOK 001: The Vanishing Aurora Diamond
Incident: Theft of The Aurora Diamond from Locked Display Case
Location: Grand Gallery, Northbridge Museum
Time Window: 8:20 PM to 8:24 PM (4-Minute Power Failure)
Last Confirmed Inspection: 8:00 PM by Curator Dr. Mira Sen (Case locked, glass intact)
Discovery: 8:30 PM by museum staff (Glass unbroken, diamond missing)
Entry Method: Electronic battery-backed lock opened with an authorized keycard at 8:23 PM

KNOWN FACTS & TIMELINE:
- 8:00 PM: Curator Dr. Mira Sen locks display case.
- 8:12 PM: Arjun Vale's card opens the archive door.
- 8:15 - 8:29 PM: Theo Park continuously on stage facing live audience and camera.
- 8:19 - 8:26 PM: Lena Ortiz works in basement restarting emergency generator.
- 8:20 PM: Museum power failure begins (blackout lasts 4 minutes).
- 8:20 PM: Lena Ortiz's card opens basement door.
- 8:23 PM: Arjun Vale's card opens the diamond display case.
- 8:24 PM: Power restored to museum.
- 8:25 PM: Archive camera photographs Arjun Vale carrying a flat catalogue folder.
- 8:30 PM: Diamond reported missing. No glass was broken.

THE 4 SUSPECTS:
1. Arjun Vale (Archivist / Curator)
   - Motive: In heavy personal debt ($50,000+).
   - Access: Card opened archive at 8:12 PM; card opened display case at 8:23 PM.
   - Statement: "I was in the archive. My card was left in my jacket. I carried a folder because I was returning documents."
   - Physical Clue: Blue velvet fibers found inside his folder match the display cushion!

2. Lena Ortiz (Chief Facilities Engineer)
   - Motive: Recently denied a promotion.
   - Access: Card opened basement at 8:20 PM.
   - Statement: "I was in basement restarting the generator from 8:19 to 8:26 PM."
   - Physical Clue: Muddy bootprint matches her boots, but she inspected the case earlier that afternoon.

3. Theo Park (Event Host)
   - Motive: Wanted publicity for museum.
   - Access: Stage only, no gallery access.
   - Statement: "I was on stage during the entire show." (Camera footage confirms 8:15 - 8:29 PM continuously).

4. Sofia Reed (Journalist)
   - Motive: Wanted an exclusive news story.
   - Access: Lobby only.
   - Statement: "I was interviewing visitors in lobby." (3 visitors confirm speaking with her).

EVIDENCE REGISTER:
- Evidence A: Electronic lock records valid-card access during blackout via internal battery.
- Evidence B: Arjun Vale's card opened the case at 8:23 PM.
- Evidence C: Arjun claims his card remained in his jacket inside archive.
- Evidence D: Camera at 8:25 PM captures Arjun leaving archive with flat catalogue folder.
- Evidence E: Blue velvet fibers found inside Arjun's folder match the display cushion!
- Evidence F: Muddy bootprint near case matches Lena, but records show she walked there in afternoon.
- Evidence G: Insurance pays the museum, not any individual suspect.
</CASE_FILE>`,
    rawCaseFileHi: `<CASE_FILE>
केस बुक 001: गायब हुआ अरोरा हीरा
घटना: नॉर्थब्रिज म्यूजियम के लॉकर से अरोरा हीरे की चोरी
स्थान: ग्रांड गैलरी, नॉर्थब्रिज म्यूजियम
घटना का समय: रात 8:20 से 8:24 बजे (4 मिनट की बत्ती गुल)
अंतिम जांच: रात 8:00 बजे डॉ. मीरा सेन द्वारा (ताला लगा हुआ, कांच सही सलामत)
पता चला: रात 8:30 बजे म्यूजियम स्टाफ द्वारा (कांच नहीं टूटा, हीरा गायब)
खोलने का तरीका: बैटरी बैकअप वाले इलेक्ट्रॉनिक लॉक को अधिकृत कार्ड से रात 8:23 बजे खोला गया

पक्के तथ्य और समयरेखा (TIMELINE):
- 8:00 PM: डॉ. मीरा सेन ने हीरे की जांच कर डिस्प्ले केस पर ताला लगाया।
- 8:12 PM: अर्जुन वाले के कार्ड से आर्काइव का दरवाजा खुला।
- 8:15 - 8:29 PM: थियो पार्क लगातार दर्शकों और लाइव कैमरे के सामने स्टेज पर मौजूद रहे।
- 8:19 - 8:26 PM: लीना ओर्टिज़ बेसमेंट में इमरजेंसी जनरेटर ठीक कर रही थीं।
- 8:20 PM: म्यूजियम में अचानक बत्ती गुल हो गई (4 मिनट का अंधेरा)।
- 8:20 PM: लीना ओर्टिज़ के कार्ड से बेसमेंट का दरवाजा खुला।
- 8:23 PM: अर्जुन वाले के कार्ड से हीरे का लॉकर खोला गया।
- 8:24 PM: म्यूजियम की बिजली वापस आ गई।
- 8:25 PM: कैमरे में अर्जुन वाले आर्काइव से एक फ्लैट कैटलॉग फोल्डर ले जाते दिखे।
- 8:30 PM: हीरा गायब होने की सूचना मिली। कोई कांच नहीं टूटा था।

4 संदिग्ध (SUSPECTS):
1. अर्जुन वाले (आर्काइविस्ट / क्यूरेटर)
   - मकसद: 50,000 डॉलर से ज्यादा का भारी निजी कर्ज।
   - कार्ड स्वाइप: 8:12 बजे आर्काइव खोला; 8:23 बजे हीरे का लॉकर खोला।
   - बयान: "मैं आर्काइव में था। मेरा कार्ड मेरी जैकेट में रह गया था। मैं सिर्फ दस्तावेज लौटाने फोल्डर ले गया था।"
   - पक्का सबूत: उनके फोल्डर में नीले मखमली धागे मिले जो हीरे के गद्दे से मेल खाते हैं!

2. लीना ओर्टिज़ (चीफ इंजीनियर)
   - मकसद: प्रमोशन न मिलने से नाराज।
   - कार्ड स्वाइप: 8:20 बजे बेसमेंट खोला।
   - बयान: "मैं 8:19 से 8:26 बजे तक बेसमेंट में जनरेटर चालू कर रही थी।"
   - सबूत: कीचड़ वाले जूते का निशान दोपहर के दौरे का था।

3. थियो पार्क (इवेंट होस्ट)
   - मकसद: कार्यक्रम की पब्लिसिटी।
   - पहुंच: केवल स्टेज तक।
   - बयान: "मैं पूरे समय स्टेज पर था।" (कैमरा फुटेज 8:15 से 8:29 बजे तक पुष्टि करता है)।

4. सोफिया रीड (पत्रकार)
   - मकसद: एक्सक्लूसिव ब्रेकिंग न्यूज।
   - पहुंच: केवल लॉबी एरिया।
   - बयान: "मैं बत्ती गुल में लॉबी में मेहमानों से बात कर रही थी।" (3 गवाहों ने पुष्टि की)।

सबूतों की सूची (EVIDENCE REGISTER):
- सबूत A: बैटरी बैकअप के कारण ताला बत्ती गुल में भी कार्ड स्वाइप रिकॉर्ड करता है।
- सबूत B: अर्जुन वाले के कार्ड ने रात 8:23 बजे ताला खोला।
- सबूत C: अर्जुन का दावा है कि कार्ड आर्काइव में जैकेट में ही था।
- सबूत D: रात 8:25 बजे कैमरे में अर्जुन फ्लैट फोल्डर लेकर निकलते दिखे।
- सबूत E: अर्जुन के फोल्डर में नीले मखमली धागे मिले जो लॉकर के गद्दे से मेल खाते हैं!
- सबूत F: कीचड़ वाला बूटप्रिंट लीना के जूते से मिलता है, पर वे दोपहर में वहां गई थीं।
- सबूत G: बीमा कंपनी का पैसा म्यूजियम को मिलेगा, किसी संदिग्ध को नहीं।
</CASE_FILE>`,
    facilitatorSolution: {
      mostLikelySuspect: "Arjun Vale",
      mostLikelySuspectHi: "अर्जुन वाले",
      summary: "Arjun Vale is definitively established as the culprit with 85% AI-decided probability (Beyond Reasonable Doubt). His access card opened the display case at 8:23 PM during the blackout. Two minutes later, a camera photographed him carrying a flat folder, and blue velvet fibers from the display cushion were found inside that folder. All other suspects are physically excluded.",
      summaryHi: "अर्जुन वाले 85% एआई-निर्धारित संभावना के साथ मुख्य अपराधी हैं (संदेह से परे साबित)। रात 8:23 बजे बत्ती गुल के दौरान उनके कार्ड से लॉकर खुला। दो मिनट बाद वे फोल्डर लिए दिखे, और उस फोल्डर में लॉकर के गद्दे के नीले मखमली धागे मिले। बाकी तीनों संदिग्ध पूरी तरह निर्दोष हैं।",
      uncertainties: "Under Rule 4, credential usage requires physical evidence linkage. Recovering matching blue velvet microfibers inside Arjun's folder conclusively establishes direct physical custody of the diamond, elevating conviction to an authoritative 85% probability.",
      uncertaintiesHi: "नियम 4 के तहत कार्ड के साथ भौतिक साक्ष्य होना जरूरी है। अर्जुन के फोल्डर में मिले नीले मखमली धागे सीधे हीरे से उनके भौतिक संपर्क को प्रमाणित करते हैं, जिससे यह फैसला 85% प्रामाणिक संभावना में बदल जाता है।"
    }
  },
  {
    id: "case-empty",
    title: "Empty / Test File (Rule 1 Strictness Test)",
    titleHi: "खाली केस फाइल (नियम 1 टेस्ट)",
    subtitle: "Anti-Hallucination Verification",
    subtitleHi: "बिना सबूत कोई फैसला नहीं",
    category: "Integrity Test",
    categoryHi: "परीक्षण केस",
    summary: "An empty template file. Used to prove that SENTINEL-AI refuses to hallucinate facts and assigns 0% confidence when no case file is provided.",
    summaryHi: "एक खाली केस फाइल। यह साबित करने के लिए कि बिना सबूत के सेंटिनल-AI कोई मनगढ़ंत कहानी नहीं बनाता और 0% भरोसा दिखाता है।",
    rawCaseFile: `<CASE_FILE>
[PASTE INCIDENT REPORT, SUSPECT STATEMENTS, EVIDENCE REGISTER, ACCESS LOGS, DIGITAL LOGS, CCTV INFORMATION, TIMESTAMPS, ALIBIS, ETC.]
</CASE_FILE>`,
    rawCaseFileHi: `<CASE_FILE>
[कृपया केस रिपोर्ट, संदिग्धों के बयान और सबूत यहां पेस्ट करें]
</CASE_FILE>`,
    facilitatorSolution: {
      mostLikelySuspect: "None",
      mostLikelySuspectHi: "कोई नहीं",
      summary: "Case file is empty. Rule 1 strictly prohibits guessing.",
      summaryHi: "केस फाइल खाली है। नियम 1 के तहत बिना सबूत कोई अनुमान नहीं लगाया जा सकता।"
    }
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { BENCHMARK_CASES };
}
