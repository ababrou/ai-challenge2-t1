const USERS = [
  {
    full_name: "Alice Martin",
    avatar: "assets/avatar.svg",
    role: "Senior Software Engineer (Engineering)",
    activities: [
      { name: "Advanced React Patterns", category: "Education", date: "2025-01-10", points: 80 },
      { name: "Tech Talk: Microservices", category: "Public Speaking", date: "2025-02-14", points: 70 },
      { name: "Campus Recruitment Drive", category: "University Partnership", date: "2025-03-05", points: 60 },
      { name: "System Design Workshop", category: "Education", date: "2025-04-22", points: 90 },
      { name: "DevOps Conference Talk", category: "Public Speaking", date: "2025-06-11", points: 85 },
      { name: "Internship Mentoring", category: "University Partnership", date: "2025-09-15", points: 75 },
      { name: "Cloud Architecture Course", category: "Education", date: "2025-11-03", points: 95 },
    ]
  },
  {
    full_name: "Ben Kowalski",
    avatar: "assets/userphoto.jpg",
    role: "Product Manager (Product)",
    activities: [
      { name: "Product Strategy Seminar", category: "Education", date: "2025-01-20", points: 55 },
      { name: "Startup Panel Discussion", category: "Public Speaking", date: "2025-03-18", points: 65 },
      { name: "University Hackathon Judge", category: "University Partnership", date: "2025-05-10", points: 70 },
      { name: "Agile Methodology Course", category: "Education", date: "2025-07-25", points: 60 },
      { name: "Industry Keynote", category: "Public Speaking", date: "2025-10-08", points: 88 },
    ]
  },
  {
    full_name: "Clara Osei",
    avatar: "assets/avatar.svg",
    role: "Data Scientist (Analytics)",
    activities: [
      { name: "ML Fundamentals", category: "Education", date: "2025-02-03", points: 72 },
      { name: "AI Ethics Roundtable", category: "Public Speaking", date: "2025-04-15", points: 68 },
      { name: "Data Science Guest Lecture", category: "University Partnership", date: "2025-06-20", points: 80 },
      { name: "Deep Learning Bootcamp", category: "Education", date: "2025-08-11", points: 92 },
      { name: "Research Symposium Talk", category: "Public Speaking", date: "2025-09-29", points: 77 },
      { name: "Thesis Advisory Session", category: "University Partnership", date: "2025-11-14", points: 65 },
      { name: "Statistics Refresher", category: "Education", date: "2025-12-01", points: 58 },
    ]
  },
  {
    full_name: "David Nguyen",
    avatar: "assets/userphoto.jpg",
    role: "DevOps Engineer (Infrastructure)",
    activities: [
      { name: "Kubernetes Deep Dive", category: "Education", date: "2025-01-08", points: 88 },
      { name: "SRE Best Practices Talk", category: "Public Speaking", date: "2025-03-22", points: 74 },
      { name: "Campus Tech Workshop", category: "University Partnership", date: "2025-07-07", points: 55 },
      { name: "CI/CD Pipeline Masterclass", category: "Education", date: "2025-10-19", points: 83 },
    ]
  },
  {
    full_name: "Elena Russo",
    avatar: "assets/avatar.svg",
    role: "UX Designer (Design)",
    activities: [
      { name: "Design Systems Course", category: "Education", date: "2025-02-17", points: 67 },
      { name: "UX Conference Presentation", category: "Public Speaking", date: "2025-05-23", points: 79 },
      { name: "Student Portfolio Review", category: "University Partnership", date: "2025-08-06", points: 62 },
      { name: "Accessibility Workshop", category: "Education", date: "2025-09-11", points: 71 },
      { name: "Design Thinking Webinar", category: "Public Speaking", date: "2025-11-27", points: 84 },
    ]
  },
  {
    full_name: "Frank Adeyemi",
    avatar: "assets/userphoto.jpg",
    role: "Security Engineer (Security)",
    activities: [
      { name: "OWASP Training", category: "Education", date: "2025-01-29", points: 94 },
      { name: "CTF Competition Talk", category: "Public Speaking", date: "2025-04-03", points: 86 },
      { name: "Cybersecurity Guest Lecture", category: "University Partnership", date: "2025-06-17", points: 73 },
      { name: "Penetration Testing Course", category: "Education", date: "2025-08-25", points: 97 },
      { name: "Security Summit Panel", category: "Public Speaking", date: "2025-10-30", points: 89 },
      { name: "Internship Project Review", category: "University Partnership", date: "2025-12-08", points: 68 },
    ]
  },
  {
    full_name: "Grace Kim",
    avatar: "assets/avatar.svg",
    role: "Engineering Manager (Engineering)",
    activities: [
      { name: "Leadership in Tech Course", category: "Education", date: "2025-03-10", points: 76 },
      { name: "Women in Tech Keynote", category: "Public Speaking", date: "2025-05-19", points: 91 },
      { name: "Mentorship Programme", category: "University Partnership", date: "2025-07-14", points: 85 },
      { name: "Team Dynamics Workshop", category: "Education", date: "2025-09-02", points: 69 },
      { name: "Engineering Excellence Talk", category: "Public Speaking", date: "2025-11-18", points: 82 },
    ]
  },
  {
    full_name: "Hassan Al-Farsi",
    avatar: "assets/userphoto.jpg",
    role: "Backend Engineer (Engineering)",
    activities: [
      { name: "Go Language Mastery", category: "Education", date: "2025-01-15", points: 78 },
      { name: "API Design Conference", category: "Public Speaking", date: "2025-04-28", points: 66 },
      { name: "Open Source Contribution Session", category: "University Partnership", date: "2025-08-19", points: 54 },
      { name: "Distributed Systems Course", category: "Education", date: "2025-10-07", points: 87 },
    ]
  },
  {
    full_name: "Ingrid Larsson",
    avatar: "assets/avatar.svg",
    role: "Data Engineer (Analytics)",
    activities: [
      { name: "Spark & Kafka Workshop", category: "Education", date: "2025-02-24", points: 83 },
      { name: "Big Data Summit Talk", category: "Public Speaking", date: "2025-05-06", points: 77 },
      { name: "Data Engineering Lecture", category: "University Partnership", date: "2025-07-21", points: 61 },
      { name: "Streaming Pipelines Course", category: "Education", date: "2025-09-16", points: 90 },
      { name: "DataOps Panel", category: "Public Speaking", date: "2025-12-03", points: 72 },
    ]
  },
  {
    full_name: "James Okafor",
    avatar: "assets/userphoto.jpg",
    role: "Frontend Engineer (Engineering)",
    activities: [
      { name: "TypeScript Advanced Patterns", category: "Education", date: "2025-01-06", points: 75 },
      { name: "Frontend Architecture Talk", category: "Public Speaking", date: "2025-03-30", points: 63 },
      { name: "Web Dev Bootcamp Mentor", category: "University Partnership", date: "2025-06-09", points: 58 },
      { name: "Performance Optimization Course", category: "Education", date: "2025-08-04", points: 86 },
      { name: "JSConf Presentation", category: "Public Speaking", date: "2025-10-22", points: 93 },
    ]
  },
  {
    full_name: "Katerina Bova",
    avatar: "assets/avatar.svg",
    role: "QA Engineer (Quality)",
    activities: [
      { name: "Test Automation Masterclass", category: "Education", date: "2025-02-11", points: 70 },
      { name: "Quality Culture Talk", category: "Public Speaking", date: "2025-05-27", points: 59 },
      { name: "Student QA Workshop", category: "University Partnership", date: "2025-09-08", points: 64 },
      { name: "BDD Practices Course", category: "Education", date: "2025-11-20", points: 78 },
    ]
  },
  {
    full_name: "Liam Chen",
    avatar: "assets/userphoto.jpg",
    role: "Machine Learning Engineer (AI)",
    activities: [
      { name: "Neural Networks Certification", category: "Education", date: "2025-01-23", points: 96 },
      { name: "AI Product Showcase Talk", category: "Public Speaking", date: "2025-04-10", points: 88 },
      { name: "University AI Lab Collaboration", category: "University Partnership", date: "2025-07-03", points: 82 },
      { name: "NLP Specialization", category: "Education", date: "2025-09-24", points: 99 },
      { name: "Machine Learning Summit", category: "Public Speaking", date: "2025-11-05", points: 91 },
      { name: "Research Intern Supervision", category: "University Partnership", date: "2025-12-15", points: 76 },
    ]
  },
  {
    full_name: "Maya Patel",
    avatar: "assets/avatar.svg",
    role: "Cloud Architect (Infrastructure)",
    activities: [
      { name: "AWS Solutions Architect", category: "Education", date: "2025-02-07", points: 93 },
      { name: "Cloud Native Conference", category: "Public Speaking", date: "2025-04-25", points: 87 },
      { name: "Cloud Computing Lecture", category: "University Partnership", date: "2025-06-30", points: 74 },
      { name: "Multi-Cloud Strategy Course", category: "Education", date: "2025-08-18", points: 89 },
      { name: "FinOps Webinar", category: "Public Speaking", date: "2025-10-14", points: 78 },
    ]
  },
  {
    full_name: "Nathan Brooks",
    avatar: "assets/userphoto.jpg",
    role: "Scrum Master (Delivery)",
    activities: [
      { name: "Agile Coaching Certification", category: "Education", date: "2025-01-31", points: 65 },
      { name: "Agile Summit Presentation", category: "Public Speaking", date: "2025-05-14", points: 57 },
      { name: "University Agile Workshop", category: "University Partnership", date: "2025-08-27", points: 50 },
      { name: "SAFe Framework Course", category: "Education", date: "2025-10-01", points: 72 },
    ]
  },
  {
    full_name: "Olivia Thompson",
    avatar: "assets/avatar.svg",
    role: "Site Reliability Engineer (Infrastructure)",
    activities: [
      { name: "Incident Management Course", category: "Education", date: "2025-03-14", points: 81 },
      { name: "SRE Conference Talk", category: "Public Speaking", date: "2025-06-02", points: 76 },
      { name: "Observability Bootcamp", category: "Education", date: "2025-09-19", points: 88 },
      { name: "Campus Infrastructure Talk", category: "University Partnership", date: "2025-11-10", points: 67 },
    ]
  },
  {
    full_name: "Paulo Ferreira",
    avatar: "assets/userphoto.jpg",
    role: "Mobile Engineer (Engineering)",
    activities: [
      { name: "Flutter Advanced Course", category: "Education", date: "2025-01-17", points: 74 },
      { name: "Mobile UX Panel", category: "Public Speaking", date: "2025-03-26", points: 61 },
      { name: "App Dev Student Workshop", category: "University Partnership", date: "2025-07-09", points: 55 },
      { name: "iOS Certification", category: "Education", date: "2025-09-05", points: 82 },
      { name: "Droidcon Talk", category: "Public Speaking", date: "2025-11-22", points: 79 },
    ]
  },
  {
    full_name: "Rachel Wong",
    avatar: "assets/avatar.svg",
    role: "Business Analyst (Strategy)",
    activities: [
      { name: "Business Intelligence Course", category: "Education", date: "2025-02-20", points: 63 },
      { name: "Data-Driven Decision Talk", category: "Public Speaking", date: "2025-05-08", points: 54 },
      { name: "Analytics Guest Lecture", category: "University Partnership", date: "2025-08-01", points: 59 },
      { name: "SQL for Analytics", category: "Education", date: "2025-10-25", points: 68 },
    ]
  },
  {
    full_name: "Samuel Diallo",
    avatar: "assets/userphoto.jpg",
    role: "Staff Engineer (Engineering)",
    activities: [
      { name: "Platform Engineering Course", category: "Education", date: "2025-01-12", points: 91 },
      { name: "Architecture Decision Records Talk", category: "Public Speaking", date: "2025-03-07", points: 84 },
      { name: "Engineering Excellence Lecture", category: "University Partnership", date: "2025-05-29", points: 78 },
      { name: "Developer Experience Workshop", category: "Education", date: "2025-07-16", points: 87 },
      { name: "Tech Strategy Summit", category: "Public Speaking", date: "2025-09-23", points: 95 },
      { name: "Final Year Project Judging", category: "University Partnership", date: "2025-11-30", points: 70 },
    ]
  },
  {
    full_name: "Tanya Ivanova",
    avatar: "assets/avatar.svg",
    role: "Product Designer (Design)",
    activities: [
      { name: "Figma Advanced Workshop", category: "Education", date: "2025-02-28", points: 69 },
      { name: "Product Design Talk", category: "Public Speaking", date: "2025-06-13", points: 73 },
      { name: "Design Thinking Campus Session", category: "University Partnership", date: "2025-09-30", points: 66 },
      { name: "Motion Design Course", category: "Education", date: "2025-12-10", points: 75 },
    ]
  },
  {
    full_name: "Umar Siddiqui",
    avatar: "assets/userphoto.jpg",
    role: "Platform Engineer (Infrastructure)",
    activities: [
      { name: "Internal Developer Platform Course", category: "Education", date: "2025-01-27", points: 85 },
      { name: "Platform Engineering Summit", category: "Public Speaking", date: "2025-04-18", points: 79 },
      { name: "University Cloud Lab", category: "University Partnership", date: "2025-07-28", points: 63 },
      { name: "Backstage.io Workshop", category: "Education", date: "2025-10-06", points: 88 },
      { name: "DevEx Conference Talk", category: "Public Speaking", date: "2025-12-05", points: 81 },
    ]
  },
  {
    full_name: "Vera Johansson",
    avatar: "assets/avatar.svg",
    role: "Technical Writer (Engineering)",
    activities: [
      { name: "Docs-as-Code Workshop", category: "Education", date: "2025-03-03", points: 52 },
      { name: "Write the Docs Talk", category: "Public Speaking", date: "2025-06-24", points: 60 },
      { name: "Technical Writing Seminar", category: "University Partnership", date: "2025-10-13", points: 48 },
    ]
  },
  {
    full_name: "William Nakamura",
    avatar: "assets/userphoto.jpg",
    role: "Principal Engineer (Engineering)",
    activities: [
      { name: "Software Craftsmanship Course", category: "Education", date: "2025-01-04", points: 89 },
      { name: "Principal Engineering Panel", category: "Public Speaking", date: "2025-03-20", points: 94 },
      { name: "Capstone Project Advisor", category: "University Partnership", date: "2025-06-05", points: 81 },
      { name: "Clean Architecture Masterclass", category: "Education", date: "2025-08-14", points: 96 },
      { name: "Engineering Leadership Talk", category: "Public Speaking", date: "2025-10-28", points: 90 },
      { name: "Research Partnership Kick-off", category: "University Partnership", date: "2025-12-17", points: 77 },
    ]
  },
  {
    full_name: "Xena Popescu",
    avatar: "assets/avatar.svg",
    role: "Growth Engineer (Product)",
    activities: [
      { name: "Experimentation Platform Course", category: "Education", date: "2025-02-14", points: 71 },
      { name: "Growth Hacking Talk", category: "Public Speaking", date: "2025-05-31", points: 64 },
      { name: "Startup Campus Visit", category: "University Partnership", date: "2025-08-22", points: 57 },
      { name: "A/B Testing Masterclass", category: "Education", date: "2025-11-06", points: 80 },
    ]
  },
  {
    full_name: "Yusuf Abdi",
    avatar: "assets/userphoto.jpg",
    role: "Solutions Architect (Sales Engineering)",
    activities: [
      { name: "Enterprise Integration Course", category: "Education", date: "2025-01-22", points: 76 },
      { name: "Customer Success Talk", category: "Public Speaking", date: "2025-04-07", points: 68 },
      { name: "Tech Career Day", category: "University Partnership", date: "2025-07-18", points: 60 },
      { name: "API Economy Workshop", category: "Education", date: "2025-09-12", points: 83 },
    ]
  },
  {
    full_name: "Zofia Wiśniewska",
    avatar: "assets/avatar.svg",
    role: "AI Research Engineer (AI)",
    activities: [
      { name: "Transformer Architecture Course", category: "Education", date: "2025-02-05", points: 98 },
      { name: "AI Research Symposium", category: "Public Speaking", date: "2025-05-16", points: 92 },
      { name: "University AI Research Collab", category: "University Partnership", date: "2025-07-31", points: 86 },
      { name: "Reinforcement Learning Workshop", category: "Education", date: "2025-09-27", points: 100 },
      { name: "NeurIPS Satellite Talk", category: "Public Speaking", date: "2025-11-13", points: 95 },
      { name: "PhD Student Mentoring", category: "University Partnership", date: "2025-12-19", points: 79 },
    ]
  },
];
