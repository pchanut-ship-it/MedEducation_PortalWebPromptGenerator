const generateMasterPrompt = (styleDesc, includeList, avoidList) => {
    let avoidSection = `- กายวิภาคผิด\n- label อ่านยาก\n- ภาพรก\n- ใช้สีมากเกินไป\n- ภาพน่ากลัวหรือเลือดมากเกินจำเป็น\n- ข้อมูลทางการแพทย์ที่ไม่ถูกต้อง`;
    if (avoidList) {
        avoidSection += `\n- ${avoidList}`;
    }

    return `คุณคือผู้เชี่ยวชาญด้าน medical illustration, medical education, instructional design และ visual communication

จงสร้างภาพประกอบการสอนทางการแพทย์เรื่อง:
[หัวข้อ]

กลุ่มเป้าหมาย:
[กลุ่มเป้าหมาย|นักศึกษาแพทย์/แพทย์ประจำบ้าน/ผู้ป่วย/ประชาชนทั่วไป]

วัตถุประสงค์ของภาพ:
[วัตถุประสงค์|อธิบายเพื่อสอนกลไกโรค/สรุปแนวทางรักษา/อธิบายหัตถการ/ใช้ในสไลด์/ใช้เป็น infographic]

เลือก style:
${styleDesc}

ให้ภาพมีลักษณะ:
- ถูกต้องทางการแพทย์
- เข้าใจง่าย
- สะอาด ไม่รก
- เหมาะกับการเรียนการสอน
- มีลำดับความสำคัญของข้อมูลชัดเจน
- ใช้สีอย่างมีความหมาย
- มี label เท่าที่จำเป็น

เนื้อหาที่ต้องมี:
${includeList}

รายละเอียดเพิ่มเติม:
[รายละเอียดเพิ่มเติม]

รูปแบบภาพ:
[รูปแบบภาพ|16:9 slide/A4 poster/square infographic/multi-panel diagram]

ภาษาในภาพ:
[ภาษาในภาพ|ไทย/อังกฤษ/สองภาษา]

ข้อควรหลีกเลี่ยง:
${avoidSection}

ส่งออกเป็น:
 prompt สำหรับสร้างภาพ`;
};

const templatesData = [
    {
        id: "1",
        title: "1. Medical Illustration Style",
        suitableFor: "Anatomy, Pathophysiology, Procedure",
        image: "1. Medical Illustration Style.png",
        prompt: generateMasterPrompt(
            "Medical Illustration Style (high-quality medical textbook illustration, accurate anatomy, clean labels, realistic but educational, neutral background, clear organ structures, precise proportions)",
            "- [structure 1]\n- [structure 2]\n- [pathological change]",
            "cartoon style, exaggerated colors, unrealistic anatomy, decorative background"
        )
    },
    {
        id: "2",
        title: "2. Anatomical Cross-Section Style",
        suitableFor: "CT/MRI correlation, anatomy, tumor staging",
        image: "2. Anatomical Cross-Section Style.png",
        prompt: generateMasterPrompt(
            "Anatomical Cross-Section (clean anatomical cross-section, educational medical diagram, accurate tissue layers, clear spatial relationships, simplified but anatomically correct, soft medical colors, white background)",
            "- normal anatomy\n- lesion/pathology\n- important neighboring structures",
            ""
        )
    },
    {
        id: "3",
        title: "3. Pathophysiology Flow Diagram",
        suitableFor: "shock, sepsis, heart failure, DKA",
        image: "3. Pathophysiology Flow Diagram.png",
        prompt: generateMasterPrompt(
            "Pathophysiology Flow Diagram (modern medical infographic, clean flowchart, logical arrows, color-coded mechanisms, easy to understand)",
            "1. trigger/cause\n2. molecular or cellular mechanism\n3. organ-level effect\n4. clinical manifestations\n5. complications\n6. treatment targets",
            ""
        )
    },
    {
        id: "4",
        title: "4. Clinical Algorithm Style",
        suitableFor: "diagnostic approach, management guideline",
        image: "4. Clinical Algorithm Style.png",
        prompt: generateMasterPrompt(
            "Clinical Algorithm (evidence-based medical flowchart, clear decision nodes, yes/no branches, professional hospital guideline style, minimal, high readability)",
            "- initial assessment\n- red flags\n- investigations\n- risk stratification\n- first-line management\n- referral criteria",
            ""
        )
    },
    {
        id: "5",
        title: "5. Patient Education Infographic",
        suitableFor: "แผ่นพับผู้ป่วย, OPD, discharge advice",
        image: "5. Patient Education Infographic.png",
        prompt: generateMasterPrompt(
            "Patient Education Infographic (friendly healthcare infographic, simple icons, warm colors, minimal medical jargon, clear step-by-step layout, reassuring tone)",
            "- what the disease is\n- warning signs\n- what patients should do\n- lifestyle advice\n- when to seek urgent care",
            ""
        )
    },
    {
        id: "6",
        title: "6. Minimalist Medical Icon Style",
        suitableFor: "สไลด์, infographic, website, poster",
        image: "6. Minimalist Medical Icon Style.png",
        prompt: generateMasterPrompt(
            "Minimalist Medical Icon (flat vector icon, simple line art, consistent stroke width, clean medical design, white background, simple shapes, no text)",
            "- [icon 1]\n- [icon 2]\n- [icon 3]\n- [icon 4]",
            ""
        )
    },
    {
        id: "7",
        title: "7. 3D Medical Render Style",
        suitableFor: "anatomy, device, surgical anatomy",
        image: "7. 3D Medical Render Style.png",
        prompt: generateMasterPrompt(
            "3D Medical Render (high-quality 3D medical visualization, realistic lighting, clean background, anatomically accurate, professional medical visualization style)",
            "- [main structure]\n- [pathology/device/procedure]\n- transparent surrounding tissue if useful",
            "overly dramatic lighting"
        )
    },
    {
        id: "8",
        title: "8. Surgical Procedure Step-by-Step",
        suitableFor: "surgery teaching, procedural skill",
        image: "8. Surgical Procedure Step-by-Step.png",
        prompt: generateMasterPrompt(
            "Surgical Procedure Step-by-Step (professional surgical atlas illustration, clean operative field, anatomically accurate, sequential panels)",
            "Panel 1: patient position and landmarks\nPanel 2: incision or access\nPanel 3: key anatomical exposure\nPanel 4: critical step\nPanel 5: closure or final result",
            "excessive blood, gore, unrealistic instruments"
        )
    },
    {
        id: "9",
        title: "9. Emergency Medicine Visual Guide",
        suitableFor: "ACLS, trauma, stroke, sepsis",
        image: "9. Emergency Medicine Visual Guide.png",
        prompt: generateMasterPrompt(
            "Emergency Medicine Visual Guide (urgent but professional medical infographic, clear hierarchy, bold headings, rapid decision-making layout)",
            "- initial ABCDE assessment\n- critical red flags\n- immediate actions\n- essential investigations\n- time-sensitive treatment\n- disposition",
            ""
        )
    },
    {
        id: "10",
        title: "10. Diagnostic Reasoning Map",
        suitableFor: "clinical reasoning, differential diagnosis",
        image: "10. Diagnostic Reasoning Map.png",
        prompt: generateMasterPrompt(
            "Diagnostic Reasoning Map (clinical reasoning mind map, structured differential diagnosis, organized by system, probability, and danger, clean academic medical style)",
            "- common diagnoses\n- life-threatening diagnoses\n- key history questions\n- physical examination clues\n- investigations\n- decision points",
            ""
        )
    },
    {
        id: "11",
        title: "11. Mechanism of Action Diagram",
        suitableFor: "pharmacology",
        image: "11. Mechanism of Action Diagram.png",
        prompt: generateMasterPrompt(
            "Mechanism of Action Diagram (medical pharmacology illustration, receptor-level or pathway-level diagram, clean labels, educational)",
            "- drug target\n- normal pathway\n- drug effect\n- clinical outcome\n- major adverse effects",
            ""
        )
    },
    {
        id: "12",
        title: "12. Microbiology Concept Art",
        suitableFor: "bacteria, virus, immune response",
        image: "12. Microbiology Concept Art.png",
        prompt: generateMasterPrompt(
            "Microbiology Concept Art (scientific medical illustration, semi-realistic pathogen morphology, clear immune interaction, clean background)",
            "- pathogen structure\n- host cell interaction\n- immune response\n- clinical disease connection",
            ""
        )
    },
    {
        id: "13",
        title: "13. Radiology Annotation Style",
        suitableFor: "X-ray, CT, MRI teaching",
        image: "13. Radiology Annotation Style.png",
        prompt: generateMasterPrompt(
            "Radiology Annotation (radiology annotation layout, grayscale imaging background style, colored arrows and labels, teaching callouts)",
            "- key abnormal findings\n- normal comparison if possible\n- anatomical landmarks\n- diagnostic clues",
            ""
        )
    },
    {
        id: "14",
        title: "14. Histology / Pathology Slide Style",
        suitableFor: "pathology teaching",
        image: "14. Histology Pathology Slide Style.png",
        prompt: generateMasterPrompt(
            "Histology / Pathology Slide (microscopic pathology slide style, H&E staining appearance, labeled cellular features, educational annotation, clean callout boxes)",
            "- normal tissue comparison\n- pathological changes\n- key diagnostic features\n- magnification label",
            ""
        )
    },
    {
        id: "15",
        title: "15. Timeline Clinical Course Style",
        suitableFor: "disease progression, hospital course",
        image: "15. Timeline Clinical Course Style.png",
        prompt: generateMasterPrompt(
            "Timeline Clinical Course (horizontal medical timeline, clean academic design, clear milestones)",
            "- symptom onset\n- presentation\n- investigations\n- diagnosis\n- treatment\n- response\n- complications/follow-up",
            ""
        )
    },
    {
        id: "16",
        title: "16. Before–After Medical Comparison",
        suitableFor: "treatment effect, disease progression",
        image: "16. Before–After Medical Comparison.png",
        prompt: generateMasterPrompt(
            "Before-After Medical Comparison (split-screen medical illustration, left side before treatment, right side after treatment, clear visual contrast)",
            "- pathological state\n- treatment/intervention\n- improved anatomical or physiological state",
            ""
        )
    },
    {
        id: "17",
        title: "17. Risk Factor Infographic",
        suitableFor: "public health, prevention",
        image: "17. Risk Factor Infographic.png",
        prompt: generateMasterPrompt(
            "Risk Factor Infographic (public health medical infographic, simple icons, organized categories)",
            "- non-modifiable risk factors\n- modifiable risk factors\n- protective factors\n- prevention strategies",
            ""
        )
    },
    {
        id: "18",
        title: "18. Clinical Case Visual Summary",
        suitableFor: "case discussion, grand round",
        image: "18. Clinical Case Visual Summary.png",
        prompt: generateMasterPrompt(
            "Clinical Case Visual Summary (medical case conference infographic, structured layout)",
            "- patient profile\n- chief complaint\n- key history\n- physical findings\n- investigations\n- diagnosis\n- management\n- learning points",
            ""
        )
    },
    {
        id: "19",
        title: "19. Comic / Storyboard Medical Style",
        suitableFor: "patient communication, professionalism, ethics",
        image: "19. Comic Storyboard Medical Style.png",
        prompt: generateMasterPrompt(
            "Comic / Storyboard Medical Style (clean educational comic, realistic healthcare setting, respectful tone, diverse characters, simple expressions)",
            "1. clinical situation\n2. communication challenge\n3. physician response\n4. patient reaction\n5. teaching point",
            "humor that trivializes illness"
        )
    },
    {
        id: "20",
        title: "20. Whiteboard Teaching Style",
        suitableFor: "lecture, flipped classroom",
        image: "20. Whiteboard Teaching Style.png",
        prompt: generateMasterPrompt(
            "Whiteboard Teaching Style (hand-drawn whiteboard illustration, clean marker lines, simple arrows, readable labels, educational)",
            "- core concept\n- key mechanisms\n- clinical implication\n- summary box",
            ""
        )
    }
];

const negativePromptText = "Avoid inaccurate anatomy, distorted organs, unrealistic pathology, excessive blood, gore, horror style, decorative clutter, unreadable text, tiny labels, wrong laterality, misleading medical symbols, cartoonish exaggeration, low-resolution, watermark, stock photo look, overdramatic lighting.";
