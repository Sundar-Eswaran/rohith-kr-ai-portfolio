export const RESUME_PATH = "/resume/Rohith_K_R_Resume.pdf";
export const RESUME_FILENAME = "Rohith_K_R_Resume.pdf";

export const contact = {
  name: "ROHITH K R",
  github: "https://github.com/RohithKR-02",
  linkedin: "https://www.linkedin.com/in/rohith-kr-282006r",
  email: "rohithkr282006@gmail.com",
  phone: "+91 7904509442",
  phoneHref: "tel:+917904509442",
};

export const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Education", id: "education" },
  { label: "Certifications", id: "certifications" },
  { label: "Contact", id: "contact" },
];

export const stats = [
  { value: "8.1", suffix: " CGPA", label: "Current B.Tech CGPA till 5th semester" },
  { value: "2023", suffix: "–2027", label: "B.Tech AI & Data Science" },
  { value: "2+", suffix: " Projects", label: "Real-world technical projects" },
  { value: "Data Science", suffix: " Intern", label: "Ether InfoTech" },
];

export const focusAreas = [
  "Artificial Intelligence",
  "Data Science",
  "Machine Learning",
  "Computer Vision",
  "Predictive Analytics",
  "AI Automation",
  "Web Development",
];

export const interests = [
  {
    no: "01",
    title: "Artificial Intelligence",
    items: ["Automation", "AI Agents"],
  },
  {
    no: "02",
    title: "Data Science",
    items: ["Statistics", "Data Visualization", "Machine Learning"],
  },
  {
    no: "03",
    title: "Web Development",
    items: ["Frontend", "Backend"],
  },
];

export const skillGroups = [
  { group: "Programming Languages", items: ["Python", "C", "Java"] },
  { group: "Web Technologies", items: ["HTML", "Django"] },
  { group: "Database", items: ["SQL"] },
  { group: "Framework", items: ["TensorFlow"] },
  { group: "Cloud", items: ["Amazon Web Services"] },
];

export const softSkills = [
  { title: "Communication", desc: "Conveying ideas clearly and professionally." },
  {
    title: "Problem Solving",
    desc: "Strong ability to analyze issues and develop practical solutions.",
  },
];

export type Project = {
  no: string;
  title: string;
  subtitle?: string;
  date: string;
  description: string;
  extra?: string;
  tags: string[];
  /** Set a repository URL here when available. */
  githubUrl: string;
  /** Set a live/demo URL here when available. */
  liveUrl: string;
  visual: "neural" | "rails";
};

export const projects: Project[] = [
  {
    no: "01",
    title: "SmarTex",
    subtitle: "Texathon 3.0",
    date: "March 2025",
    description:
      "Built and trained an ML model using Python in Google Colab to analyze machinery data, identify failure patterns, and predict maintenance requirements, improving equipment reliability and reducing downtime.",
    tags: ["Python", "Machine Learning", "Google Colab", "Predictive Analytics"],
    githubUrl: "",
    liveUrl: "",
    visual: "neural",
  },
  {
    no: "02",
    title: "Railway Management System",
    date: "April 2024",
    description:
      "Developed a Railway Management System using PHP integrated with MySQL to manage train details, schedules, passenger records, and ticket bookings with efficient database operations.",
    extra:
      "Designed a responsive front-end using HTML and CSS, enabling user-friendly interfaces for searching trains, viewing schedules, and submitting booking information.",
    tags: ["PHP", "MySQL", "HTML", "CSS", "Database Management"],
    githubUrl: "",
    liveUrl: "",
    visual: "rails",
  },
];

export const experience = [
  {
    role: "Data Science Intern",
    company: "Ether InfoTech — Coimbatore",
    period: "12 June 2025 – 26 June 2025",
    points: [
      "Gained hands-on knowledge of Data Science fundamentals",
      "Data collection",
      "Data cleaning",
      "Exploratory Data Analysis",
      "Basic statistical concepts",
      "Python-based data analysis",
      "Data preprocessing",
      "Data visualization",
      "Introductory machine learning workflows",
    ],
  },
];

export const education = [
  {
    no: "01",
    degree: "Bachelor of Technology — Artificial Intelligence and Data Science",
    school: "Dr. Mahalingam College of Engineering and Technology, Pollachi",
    board: "Affiliated to Anna University",
    period: "2023 – 2027",
    score: "8.1 / 10",
    scoreNote: "CGPA (till 5th semester)",
  },
  {
    no: "02",
    degree: "Higher Secondary Certificate",
    school: "Mother's Matriculation Higher Secondary School, K R Palayam",
    board: "Tamil Nadu State Board",
    period: "2022 – 2023",
    score: "82%",
    scoreNote: "Percentage",
  },
  {
    no: "03",
    degree: "Secondary School Leaving Certificate",
    school: "Mother's Matriculation Higher Secondary School, K R Palayam",
    board: "Tamil Nadu State Board",
    period: "2020 – 2021",
    score: "",
    scoreNote: "",
  },
];

export const certifications = [
  { title: "ML Model Implementation", meta: "" },
  { title: "Data Visualization", meta: "" },
  { title: "Cisco Networking for Data Science Beginner", meta: "" },
  { title: "Data Handling", meta: "" },
  { title: "LinguaSkill English Language Test", meta: "" },
  { title: "CEFR B1 Level — Cambridge Assessment English", meta: "30 May 2024" },
];
