// Latest CV, hosted on Google Drive
export const CV_URL =
  "https://drive.google.com/file/d/1EMFZL6P59zJvrDnC5EyA-h-K_dvJSIdc/view?usp=sharing";

export const contact = {
  phone: "(+63) 939 750 9659",
  phoneHref: "tel:+639397509659",
  email: "mcosicoljr@gmail.com",
  location: "Puerto Princesa City, Palawan, Philippines",
  facebook: "https://www.facebook.com/mcosicoljr",
  linkedin: "https://www.linkedin.com/in/marcelito-cosicol-19288b22b/",
};

export const stats = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 30, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "k+", label: "Users Served" },
  { value: 10, suffix: "x", label: "Faster ETL" },
];

// Typewriter phrases shown under the title in the hero
export const roles = [
  "Building full-stack web apps",
  "React / Next.js specialist",
  "Clean .NET & Node.js APIs",
  "ETL & data pipelines",
  "UI/UX design that converts",
];

export interface Job {
  company: string;
  role: string;
  period: string;
  /** Shows the "Current" badge and pulsing timeline node */
  current?: boolean;
  points: string[];
  tags: string[];
}

// Ordered as in the latest CV (most recent first)
export const experience: Job[] = [
  {
    company: "Freelance",
    role: "Senior Full-Stack Software Engineer — DevOps & UI/UX Designer",
    period: "Feb 2025 — Sep 2026",
    points: [
      "Independently designed, developed, and deployed complete web applications for a US-based company.",
      "Owned timelines, UI/UX, frontend, RESTful APIs, data integration, and end-to-end delivery of scalable, user-focused solutions.",
    ],
    tags: ["Next.js", "REST APIs", "DevOps", "UI/UX", "Data Integration"],
  },
  {
    company: "Palawan Group of Companies",
    role: "Software Engineer — DevOps / Data Engineer",
    period: "Dec 2023 — Nov 2025",
    points: [
      "Full-stack software and data engineer specializing in innovative software solutions and scalable data pipelines.",
      "Developed high-quality, user-centered applications and drove digital transformation through efficient data engineering and analytics.",
    ],
    tags: ["Apache NiFi", "ETL", "DevOps", ".NET", "React"],
  },
  {
    company: "IT-ERA Technology Solutions",
    role: "Senior Software Engineer & UI/UX Designer",
    period: "Apr 2022 — Feb 2025",
    points: [
      "Designed user-friendly web applications, dashboards, and reusable, responsive UI components in React and Next.js.",
      "Refined flows with prototypes, integrated REST APIs, and deployed a Dockerized app to production.",
    ],
    tags: ["React", "Next.js", "Docker", "Figma"],
  },
  {
    company: "Elivate IT Solutions",
    role: "Web Developer",
    period: "Aug 2021 — Mar 2022",
    points: [
      "Built frontend components from client-provided designs for eCommerce platforms, corporate websites, and ticketing systems for UK-based clients.",
    ],
    tags: ["JavaScript", "PHP", "WordPress"],
  },
  {
    company: "Freelance",
    role: "Software Engineer",
    period: "Jun 2020 — Dec 2022",
    points: ["Designed and developed websites and mobile apps using React, Next.js, and React Native."],
    tags: ["React", "React Native", "Next.js"],
  },
];

export const education = [
  {
    qualification: "Bachelor of Science in Computer Science",
    institution: "Palawan State University",
    year: "2019 — 2023",
  },
];

export const certifications = [
  { title: "Impact Hackathon Online 2020 (National Level) — Top 20 Finalist", note: "Aug 2020", highlight: true },
  { title: "Data Management with Apache NiFi" },
  { title: "Python for Data Engineering: Beginner to Advanced", note: "LinkedIn Learning" },
  { title: "Advanced Python: Practical Database Examples", note: "LinkedIn Learning" },
  { title: "AWS Cloud Essentials for Business Leaders" },
  { title: "Certified Entry-Level Python Programmer (PCEP-30-02) Cert Prep" },
  { title: "Software Design: Modeling with UML" },
  { title: "Programming Foundations: Object-Oriented Design" },
  { title: "UX Foundations: Interaction Design", note: "LinkedIn Learning" },
  { title: "Foundations of User Experience Design", note: "LinkedIn Learning" },
  { title: "Principles for UX Design" },
  { title: "Becoming an Agile Coach" },
  { title: "Scrum: The Basics", note: "LinkedIn Learning" },
  { title: "Leadership and Teamwork", note: "LinkedIn Learning" },
  { title: "The Unspoken Rules of High Performers and High Potentials", note: "LinkedIn Learning" },
];

export const languages = ["English", "Filipino"];
