export const siteConfig = {
  name: "Liu, Guankai (Garrison)",
  title: "Computer Science Student & Software Engineer",
  description: "Portfolio website of Garrison Liu",
  accentColor: "#1d4ed8",
  social: {
    email: "garrison.liu@outlook.com",
    linkedin: "https://linkedin.com/in/garrisonliu",
    twitter: "https://x.com/tomato_love_you",
    github: "https://github.com/InsideEmpire",
  },
  aboutMe: "I am a Computer Science student at Brigham Young University-Idaho[cite: 2, 3]. Currently gaining experience in software testing at Philips and developing vehicle control systems for Formula Hybrid Electric Society[cite: 5, 12]. I am also an active open-source contributor to the CS-self-learning project[cite: 40].",
  skills: ["Python", "Java", "C/C++", "Swift", "Assembly", "MySQL", "SQL Server", ".Net"], // [cite: 39]
  projects: [
    {
      name: "SolarTint",
      description: "A SwiftUI-based macOS app that dynamically adjusts screen color temperature based on real-time solar elevation[cite: 19, 21].",
      link: "https://github.com/InsideEmpire/SolarTint",
      skills: ["Swift", "SwiftUI"],
    },
    {
      name: "DigitClassifier",
      description: "Implemented an Artificial Neural Network in RISC-V assembly to classify handwritten digits from the MNIST dataset[cite: 24, 25].",
      link: "https://github.com/InsideEmpire/DigitClassifier-RISC-V",
      skills: ["Assembly", "Python"],
    },
    {
      name: "BearMaps",
      description: "A Java-based map application that provides map rastering, pathfinding (A* algorithm), and navigation[cite: 31, 32, 34].",
      link: "https://github.com/InsideEmpire/BearMap",
      skills: ["Java"],
    }
  ],
  experience: [
    {
      company: "Philips",
      title: "Software Test Engineer (Internship)",
      dateRange: "Feb 2025 - Aug 2025", // [cite: 9]
      bullets: [
        "Tested and validated core functions of the EarlyVue VS30 vital signs monitor and Philips Device Management Dashboard[cite: 10].",
        "Collaborated with cross-functional teams to document test results and propose improvements[cite: 11]."
      ],
    },
    {
      company: "Formula Hybrid Electric Society",
      title: "Software Team Member",
      dateRange: "Sep 2025 - Now", // [cite: 15]
      bullets: [
        "Developed software for the vehicle pedal system, converting potentiometer analog signals into digital values[cite: 16].",
        "Tested, calibrated, and debugged signal processing logic for vehicle control[cite: 17]."
      ],
    }
  ],
  education: [
    {
      school: "Brigham Young University-Idaho", // [cite: 14]
      degree: "Bachelor of Science in Computer Science", // [cite: 8]
      dateRange: "2025 - Present",
      achievements: [
        "Focused on software development and system integration[cite: 3, 17]."
      ],
    }
  ],
};
