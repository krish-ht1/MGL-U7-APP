// 📁 data.js - Central Plant Database
const plantMasterData = {
  // 1. D-Shooting Schedule
  "dShooting": [
    ["MACHINE NAME", "Jun-26", "Jul-26", "Aug-26", "DUE DATE"],
    ["SQF-1", "12-06-2026", "15-07-2026", "18-08-2026", "18-08-2026"],
    ["SQF-2", "10-06-2026", "12-07-2026", "14-08-2026", "14-08-2026"],
    ["SQF-3", "05-06-2026", "08-07-2026", "10-08-2026", "10-08-2026"],
    ["SQF-4", "01-06-2026", "03-07-2026", "06-08-2026", "06-08-2026"]
  ],

  // 2. Calibration Alerts (Overdue & 30 Days Due)
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

  // 5. Live Google Drive SIP Database (Part No, Customer, Drawing No, Rev, Direct Drive View Link)
  "sips": [
    ["MGL-001", "PINION GEAR 14T", "CATERPILLAR", "DWG-CAT-104", "Rev-02", "https://drive.google.com/file/d/1W5u746Eeg7VbU_jG9z81n3qL7gJt2aBc/view"],
    ["MGL-002", "BULL GEAR 42T", "KUBOTA", "DWG-KUB-552", "Rev-03", "https://drive.google.com/file/d/1rWWfcpXPSKSUpXToDCvKPPjSPQMPj6CR/view"],
    ["MGL-003", "TRANSMISSION SHAFT", "JOHN DEERE", "DWG-JD-881", "Rev-01", "https://drive.google.com/file/d/1XyZ994Eeg7VbU_jG9z81n3qL7gJt2aBc/view"],
    ["MGL-004", "INTERMEDIATE PINION", "CNH", "DWG-CNH-302", "Rev-04", "https://drive.google.com/file/d/1aBc746Eeg7VbU_jG9z81n3qL7gJt2aBc/view"],
    ["MGL-005", "BEVEL GEAR SET", "MAHINDRA", "DWG-MAH-119", "Rev-02", "https://drive.google.com/file/d/1dEf746Eeg7VbU_jG9z81n3qL7gJt2aBc/view"]
  ]
};