export const siteConfig = {
  name: "Liu, Guankai (Garrison)", [cite: 2]
  title: "Computer Science Student & Software Engineer", [cite: 3]
  description: "Portfolio website of Garrison Liu",
  accentColor: "#1d4ed8",
  social: {
    email: "garrison.liu@outlook.com", [cite: 2]
    linkedin: "https://linkedin.com/in/garrisonliu", [cite: 2]
    github: "https://github.com/InsideEmpire", [cite: 2]
  },
  aboutMe:
    "I am a Computer Science student at Brigham Young University-Idaho with a passion for software development and systems engineering. [cite: 1, 3] I have experience in software testing at Philips and developing vehicle control systems. [cite: 5, 6, 12, 16] I am also an active open-source contributor, focusing on documentation and data management improvements. [cite: 40]",
  skills: ["Python", "Java", "C/C++", "Swift", "Assembly", "MySQL", "SQL Server", ".Net"], [cite: 39]
  projects: [
    {
      name: "SolarTint", [cite: 19]
      description:
        "A SwiftUI-based macOS app that dynamically adjusts screen color temperature based on real-time solar elevation using CoreLocation and custom algorithms.", [cite: 19, 21, 22]
      link: "https://github.com/InsideEmpire/SolarTint", [cite: 20]
      skills: ["Swift", "SwiftUI"], [cite: 19]
    },
    {
      name: "DigitClassifier", [cite: 24]
      description:
        "Implemented an Artificial Neural Network in RISC-V assembly to classify handwritten digits. Optimized matrix computations and developed ReLU activation and Argmax functions.", [cite: 24, 25, 29, 30]
      link: "https://github.com/InsideEmpire/DigitClassifier-RISC-V", [cite: 27]
      skills: ["Assembly (RISC-V)", "Python"], [cite: 24]
    },
    {
      name: "BearMaps", [cite: 31]
      description:
        "A Java-based map application providing rastering, A* pathfinding, and navigation. Features a custom double-hash table database and a local server for API requests.", [cite: 31, 32, 34, 35, 36, 37]
      link: "https://github.com/InsideEmpire/BearMap", [cite: 32]
      skills: ["Java"], [cite: 31]
    },
  ],
  experience: [
    {
      company: "Philips", [cite: 5]
      title: "Software Test Engineer (Internship)", [cite: 6]
      dateRange: "Feb 2025 - Aug 2025", [cite: 9]
      bullets: [
        "Tested and validated core functions of the EarlyVue VS30 vital signs monitor and Philips Device Management Dashboard.", [cite: 10]
        "Validated vital sign accuracy, remote diagnostics, and software update systems.", [cite: 10]
        "Collaborated with cross-functional teams to reproduce defects and propose usability improvements.", [cite: 11]
      ],
    },
    {
      company: "Formula Hybrid Electric Society", [cite: 12]
      title: "Software Team Member", [cite: 12]
      dateRange: "Sep 2025 - Present", [cite: 15]
      bullets: [
        "Developed software for vehicle pedal systems, converting potentiometer analog signals into digital values.", [cite: 16]
        "Tested, calibrated, and debugged signal processing logic for vehicle control.", [cite: 17]
        "Integrated pedal input with other vehicle subsystems through team collaboration.", [cite: 17]
      ],
    },
  ],
  education: [
    {
      school: "Brigham Young University-Idaho", [cite: 3]
      degree: "Bachelor of Science in Computer Science", [cite: 3, 8]
      dateRange: "2025 - Present", [cite: 15]
      achievements: [
        "Major in Computer Science", [cite: 3]
        "Freshman status", [cite: 8]
      ],
    },
  ],
};
