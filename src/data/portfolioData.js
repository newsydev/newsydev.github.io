export const PORTFOLIO_DATA = {
  operator: {
    name: "Suryansh Gupta",
    role: "Full-stack developer",
    tagline: "Smart India Hackathon 2024 Winner",
    location: "Kanpur, IN [26.4499° N, 80.3319° E]",
    status: "ONLINE",
    bio: "I engineer high-integrity digital ground infrastructure people actually use — departmental reporting systems, real-time logistics portals, and automated telemetry monitors built for operational scale.",
    education: {
      degree: "B.Tech Computer Science & Engineering",
      institution: "Chhatrapati Shahu Ji Maharaj University (CSJMU), Kanpur",
      cpi: "8.81",
      period: "2023 – Present",
      focus: "Distributed systems, database internals, and systems architecture."
    },
    metrics: {
      projectsShipped: "12+",
      hackathons: "5",
      hackathonSubtitle: "[1x NATIONAL CHAMP]",
      cpi: "8.81",
      cpiSubtitle: "[ACADEMIC INDEX]",
      uptime: "99.98%",
      packetLoss: "0.00%",
    },
    comms: {
      email: "suryansh.kanpur@proton.me",
      github: "https://github.com/suryansh-g",
      githubUser: "github.com/suryansh-g",
      linkedin: "https://linkedin.com/in/suryansh-gupta",
      linkedinUser: "in/suryansh-gupta",
      resumeFileName: "Resume.pdf [128 KB]",
      frequency: "1420.405 MHz // ENCRYPTED DUPLEX",
      latency: "< 24 HOURS",
      callsign: "KANPUR GS-01",
      buildVersion: "4.18.2",
      stationSpec: "ORBITAL WORKSTATION SPEC 10.4"
    }
  },

  missions: [
    {
      id: "MSN-01",
      sector: "INSTITUTIONAL",
      status: "PRODUCTION",
      statusType: "secondary",
      title: "Daily Report — CSJMU Institutional Reporting System",
      description: "Manual paper-based reporting across 45 academic departments caused 3-week delays and zero submission audit trails. Designed a unified workflow system establishing end-to-end accountability.",
      telemetry: [
        { label: "DEPARTMENTS", value: "45" },
        { label: "WORKFLOW", value: "5 STAGES" },
        { label: "USERS", value: "850+" }
      ],
      techStack: ["React", "Vite", "Node.js", "PostgreSQL", "Docker"],
      liveUrl: "https://csjmu.ac.in",
      sourceUrl: "https://github.com/suryansh-g/csjmu-daily-report",
      highlights: [
        "Eliminated paper lag from 21 days to sub-second digital synchronization",
        "Role-based access control with tamper-evident audit logging for deans and HODs",
        "Automated weekly aggregation engine delivering institutional summaries directly to Vice Chancellor office"
      ]
    },
    {
      id: "MSN-02",
      sector: "EXAMINATION",
      status: "DEPLOYED",
      statusType: "secondary",
      title: "Copy-Tracking Dashboard — Examination System",
      description: "Real-time answer-script chain of custody and discrepancy detection across regional evaluation hubs. Automated variance tracking for thousands of physical exam packets.",
      telemetry: [
        { label: "RECORDS", value: "10K+" },
        { label: "ALERT RULE", value: "+1 DAY" },
        { label: "CENTRES", value: "18 HUBS" }
      ],
      techStack: ["React", "Node.js", "SQL", "Tailwind CSS"],
      liveUrl: "https://exam-tracker.csjmu.ac.in",
      sourceUrl: "https://github.com/suryansh-g/exam-copy-tracker",
      highlights: [
        "Live QR-code scan verification for packet dispatch and receipt across 18 regional evaluation centres",
        "Automatic discrepancy warning if transit latency exceeds +24 hours threshold",
        "Decreased lost booklet queries by 94% in first evaluation cycle"
      ]
    },
    {
      id: "MSN-03",
      sector: "MINISTRY OF EARTH SCIENCES",
      status: "NATIONAL WINNER (SIH '24)",
      statusType: "tertiary",
      title: "DDAS — Data Duplicate Detection System",
      description: "Engineered for the Ministry of Earth Sciences. High-throughput cryptographic and semantic deduplication engine handling multi-gigabyte bathymetric telemetry ingestion pipelines.",
      telemetry: [
        { label: "ROLE", value: "LEAD ARCH" },
        { label: "TEAM", value: "6 ENGRS" },
        { label: "SAVED", value: "38.4%" }
      ],
      techStack: ["React", "Python", "Node.js", "PostgreSQL", "Hashing Pipelines"],
      liveUrl: "https://sih.gov.in",
      sourceUrl: "https://github.com/suryansh-g/ddas-dedup-engine",
      highlights: [
        "Awarded 1st place across India under the Ministry of Earth Sciences problem statement",
        "Dual-phase deduplication: SHA-256 rolling block hashing followed by spatial-temporal fuzzy clustering",
        "Reduced redundant archive storage overhead by 38.4% without loss of fidelity in bathymetric contours"
      ]
    },
    {
      id: "MSN-04",
      sector: "AEROSPACE TELEMETRY",
      status: "SIMULATION",
      statusType: "primary",
      title: "OrbitGuard — Satellite Collision Monitoring",
      description: "Real-time orbital dynamics telemetry and conjunction assessment using automated SGP4 TLE propagations to predict orbital cross-path risks.",
      telemetry: [
        { label: "SATELLITES", value: "14 ACTIVE" },
        { label: "THRESHOLD", value: "10 KM" },
        { label: "DATA FEED", value: "CELESTRAK" }
      ],
      techStack: ["React", "Leaflet", "SGP4 Orbitals", "Node.js"],
      liveUrl: "https://orbitguard-telemetry.vercel.app",
      sourceUrl: "https://github.com/suryansh-g/orbit-guard",
      isInteractiveRadar: true,
      highlights: [
        "Integrated CelesTrak two-line element (TLE) automated daily ephemeris fetching",
        "Vectorized Euclidean distance calculation identifying closest approach points within 72-hour window",
        "Real-time visual trajectory canvas plotting low-Earth and geostationary orbital intersections"
      ]
    }
  ],

  ancillaryMissions: [
    {
      code: "MSN-05 // INSTITUTIONAL",
      status: "STABLE",
      statusColor: "text-secondary",
      title: "Vinayak Inter College Portal",
      description: "High-reliability grade distribution ledger & student demographic tracker.",
      metrics: "UPTIME: 99.9%",
      tech: "REACT / NODE",
      link: "https://github.com/suryansh-g"
    },
    {
      code: "MSN-06 // CRYPTOGRAPHY",
      status: "VERIFIED",
      statusColor: "text-primary",
      title: "SecureDrop Air-Gapped Exchange",
      description: "Cryptographic key exchange and batch validation for offline nodes.",
      metrics: "AES-GCM-256",
      tech: "GO / SQLITE",
      link: "https://github.com/suryansh-g"
    },
    {
      code: "MSN-07 // GIS MONITOR",
      status: "SIMHASTHA '25",
      statusColor: "text-tertiary",
      title: "Crowd & Logistics Telemetry Hub",
      description: "Real-time bottleneck telemetry & emergency asset dispatch dashboard.",
      metrics: "POLL: 5s",
      tech: "LEAFLET / FASTAPI",
      link: "https://github.com/suryansh-g"
    }
  ],

  timeline: [
    {
      date: "DEC 2024 · NATIONAL HONOUR",
      badge: "SIH-2024-WINNER",
      badgeType: "tertiary",
      title: "Winner — Smart India Hackathon 2024",
      description: "Awarded 1st place nationwide for Ministry of Earth Sciences Problem Statement. Conceived, designed, and deployed the DDAS telemetry deduplication engine during an intensive 36-hour sprint."
    },
    {
      date: "2025 · SHORTLIST",
      badge: "STAGE // PRE-SELECT",
      badgeType: "outline",
      title: "Selected for Smart India Hackathon 2025",
      description: "Selected as institutional delegation representative for advanced systems development track."
    },
    {
      date: "2025 · BHOPAL HACKATHON",
      badge: "FINALIST",
      badgeType: "secondary",
      title: "Finalist — Simhastha Hackathon, Bhopal",
      description: "Architected a fault-tolerant geospatial routing and real-time crowd safety telemetry station for mass gatherings."
    },
    {
      date: "2025 · INVITATIONAL",
      badge: "DTU // BIHAR",
      badgeType: "outline",
      title: "ASTRA (DTU Delhi) & Cyber Hackathon (Bihar)",
      description: "Engineered high-throughput microservices under extreme latency restrictions in 24-hour competitive environments."
    },
    {
      date: "2024 · INFRASTRUCTURE",
      badge: "ICPC REGIONALS",
      badgeType: "outline",
      title: "Technical Volunteer — ICPC Kanpur Regional Contest",
      description: "Supported deployment of isolated network segments, local judging servers, and automated terminal scoring systems."
    },
    {
      date: "2023 · INDUCTION",
      badge: "CPI: 8.81",
      badgeType: "secondary",
      title: "Inducted: B.Tech Computer Science & Engineering",
      description: "Chhatrapati Shahu Ji Maharaj University (CSJMU), Kanpur. Focus: Distributed systems, database internals, and systems architecture."
    }
  ],

  systems: [
    {
      sector: "01 // LANGUAGES",
      icon: "terminal",
      status: "COMPILE STATUS: NOMINAL",
      skills: ["C", "C++", "Python", "JavaScript (ES6+)", "SQL", "Go"]
    },
    {
      sector: "02 // FRONTEND",
      icon: "dashboard",
      status: "RENDER RATE: 60 FPS",
      skills: ["React", "Vite", "Tailwind CSS", "HTML5 / Web APIs", "Leaflet.js", "Canvas API"]
    },
    {
      sector: "03 // BACKEND & DATA",
      icon: "database",
      status: "I/O CHANNELS: BUFFERED",
      skills: ["Node.js", "Express", "PostgreSQL", "RESTful APIs", "Docker", "Redis", "SQLite"]
    },
    {
      sector: "04 // TOOLS & INFRA",
      icon: "tune",
      status: "PIPELINES: VERIFIED",
      skills: ["Git", "GitHub Actions", "Vercel", "Linux / Bash", "Postman", "SGP4 / Skyfield"]
    }
  ]
};
