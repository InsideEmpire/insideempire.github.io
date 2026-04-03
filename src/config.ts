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
  aboutMe: "I am a Computer Science student at Brigham Young University-Idaho. Currently gaining experience in software testing at Philips and developing vehicle control systems for Formula Hybrid Electric Society. I am also an active open-source contributor to the CS-self-learning project.",
  skills: ["Python", "Java", "C/C++", "Swift", "Assembly", "MySQL", "SQL Server", ".Net"],
  projects: [
    {
      name: "SolarTint",
      description: "A SwiftUI-based macOS app that dynamically adjusts screen color temperature based on real-time solar elevation.",
      link: "https://github.com/InsideEmpire/SolarTint",
      skills: ["Swift", "SwiftUI"],
    },
    {
      name: "readme-LineCounter",
      description: "A tool that automatically fetches GitHub user data via API to count total lines of code and generates dynamic, themeable SVG statistics cards for profile READMEs.",
      link: "https://github.com/InsideEmpire/readme-LineCounter",
      skills: ["Python", "Vercel"],
    },
    {
      name: "DigitClassifier",
      description: "Implemented an Artificial Neural Network in RISC-V assembly to classify handwritten digits from the MNIST dataset.",
      link: "https://github.com/InsideEmpire/DigitClassifier-RISC-V",
      skills: ["Assembly", "Python"],
    },
    {
      name: "BearMaps",
      description: "A Java-based map application that provides map rastering, pathfinding (A* algorithm), and navigation.",
      link: "https://github.com/InsideEmpire/BearMap",
      skills: ["Java"],
    }
  ],
  experience: [
    {
      company: "Philips",
      title: "Software Test Engineer (Internship)",
      dateRange: "Feb 2025 - Aug 2025",
      bullets: [
        "Tested and validated core functions of the EarlyVue VS30 vital signs monitor and Philips Device Management Dashboard.",
        "Collaborated with cross-functional teams to document test results and propose improvements."
      ],
    },
    {
      company: "Formula Hybrid Electric Society",
      title: "Software Team Member",
      dateRange: "Sep 2025 - Now",
      bullets: [
        "Developed software for the vehicle pedal system, converting potentiometer analog signals into digital values.",
        "Tested, calibrated, and debugged signal processing logic for vehicle control."
      ],
    }
  ],
  education: [
    {
      school: "Brigham Young University-Idaho",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2025 - Present",
      achievements: [
        "Focused on software development and system integration."
      ],
    }
  ],
};
