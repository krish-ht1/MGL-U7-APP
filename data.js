// 📁 data.js - Master Central Database
const plantMasterData = {
  // 1. D-Shooting Schedule
  "dShooting": [
    ["MACHINE NAME", "Jun-26", "Jul-26", "Aug-26", "DUE DATE"],
    ["SQF-1", "12-06-2026", "15-07-2026", "18-08-2026", "18-08-2026"],
    ["SQF-2", "10-06-2026", "12-07-2026", "14-08-2026", "14-08-2026"],
    ["SQF-3", "05-06-2026", "08-07-2026", "10-08-2026", "10-08-2026"],
    ["SQF-4", "01-06-2026", "03-07-2026", "06-08-2026", "06-08-2026"]
  ],

  // 2. Calibration Alerts (Due & Overdue)
  "calibration": [
    ["ID", "INSTRUMENT NAME", "LOCATION", "DUE DATE"],
    ["TUS-SQF4", "SQF-4 Thermal Uniformity Survey (TUS)", "SQF-4 Chamber", "2026-08-10"],
    ["FM-SB-02", "Shot Blasting Flow Meter", "Shot Blast Unit", "2026-08-15"],
    ["TC-J-09", "J-Type Control Thermocouple", "SQF-2 Control", "2026-08-20"],
    ["CAL-008", "Carbon Potential Sensor (O2 Probe)", "SQF-2 Control", "2026-08-28"],
    ["CAL-014", "Digital Temperature Pyrometer", "Lab Unit 7", "2026-09-15"],
    ["CAL-022", "Micro Vickers Hardness Tester", "Standards Room", "2026-09-20"],
    ["CAL-035", "Quench Oil Temperature Gauge", "SQF-3 Tank", "2026-11-05"]
  ],

  // 3. Daily Updates
  "updates": [
    "Fully CQI-9 certified heat treatment facility with automated SCADA control.",
    "Target for TPG Certification by the year 2027.",
    "Ensure all SQF-3 batch job cards and lab results are verified daily."
  ],

  // 4. Team Data
  "team": [
    ["EMP ID", "NAME", "DESIGNATION", "DEPARTMENT", "CONTACT"],
    ["7100028", "M Singh", "Plant Head / Manager", "Heat Treatment Unit 7", "+91 9056407407"],
    ["EMP-102", "Quality Incharge", "Quality Lead", "Metallurgy Lab", "+91 98XXXXXXXX"],
    ["EMP-103", "Maintenance Lead", "Shift Engineer", "Maintenance", "+91 97XXXXXXXX"]
  ],

  // 5. Direct Google Drive SIPs Database
  "sips": [
    ["SIP-001", "DRIVEN GEAR 4TH SPEED", "SAME DEUTZ FAHR", "Carburizing & Hardening", "0.8 - 1.2 mm", "58 - 62 HRC", "Rev-01", "https://drive.google.com/file/d/1gI264fE3Jg8uV6f0K2Q1h1n4_9gK5aBc/view"],
    ["SIP-002", "DRIVING GEAR 3RD & 4TH", "SAME DEUTZ FAHR", "Carburizing & Hardening", "1.0 - 1.4 mm", "59 - 63 HRC", "Rev-00", "https://drive.google.com/file/d/1X5u746Eeg7VbU_jG9z81n3qL7gJt2aBc/view"],
    ["SIP-003", "REVERSE IDLER GEAR", "SAME DEUTZ FAHR", "Through Hardening", "Core Tough", "50 - 55 HRC", "Rev-02", "https://drive.google.com/file/d/1aBc746Eeg7VbU_jG9z81n3qL7gJt2aBc/view"],
    ["SIP-004", "OUTPUT SHAFT 4WD", "SAME DEUTZ FAHR", "Carburizing & Hardening", "0.6 - 0.9 mm", "58 - 62 HRC", "Rev-01", "https://drive.google.com/file/d/1dEf746Eeg7VbU_jG9z81n3qL7gJt2aBc/view"],
    ["SIP-005", "DRIVING GEAR 1ST & 2ND", "SAME DEUTZ FAHR", "Case Carburizing", "0.9 - 1.3 mm", "60 - 64 HRC", "Rev-00", "https://drive.google.com/file/d/1eF746Eeg7VbU_jG9z81n3qL7gJt2aBc/view"],
    ["SIP-006", "PINION SHAFT 12T", "CATERPILLAR", "Carbonitriding", "0.4 - 0.7 mm", "58 - 62 HRC", "Rev-03", "https://drive.google.com/file/d/1gH746Eeg7VbU_jG9z81n3qL7gJt2aBc/view"],
    ["SIP-007", "BULL GEAR 44T", "KUBOTA", "Carburizing & Hardening", "0.8 - 1.1 mm", "60 - 63 HRC", "Rev-02", "https://drive.google.com/file/d/1iJ746Eeg7VbU_jG9z81n3qL7gJt2aBc/view"],
    ["SIP-008", "INTERMEDIATE SHAFT", "JOHN DEERE", "Liquid Nitriding", "0.15 - 0.25 mm", "55 - 60 HRC", "Rev-01", "https://drive.google.com/file/d/1kL746Eeg7VbU_jG9z81n3qL7gJt2aBc/view"]
  ]
};