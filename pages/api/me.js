// create object with user data

const user = {
  info: {
    name: "Serkan Nemli",
    email: "contact@serkannemli.com",
    website: "https://serkannemli.com",
    github: "https://github.com/srknml",
    linkedin: "https://www.linkedin.com/in/serkan-nemli-b9a0001b6/",
    location: "Istanbul, Turkey",
    resume:
      "https://docs.google.com/document/d/e/2PACX-1vTcTgw8hrDRzvzu_E8qisaA9tea33B6104PnywlrK1SG9tjx1-g8Pwc5yePtsd56BErV8-svFIegFWm/pub",
  },
  skills: {
    general: ["git", "Github", "VSCode", "intelliJ", "Terminal", "Jira"],
    languages: ["Java", "JavaScript"],
    frontend: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Nextjs",
      "Framer-motion",
      "Material-ui",
      "Tailwindcss",
    ],
    devops: ["Jenkins", "AWS"],
    testing: [
      "Selenium",
      "Maven",
      "JUnit",
      "TestNG",
      "HamCrest",
      "RestAssured",
      "Postman",
      "Cypress",
      "Cucumber",
    ],
    databases: ["MySQL", "PostgreSQL", "Firebase"],
    misc: ["Agile", "Scrum", "Jira", "Trello", "Confluence", "Figma"],
  },

  currentJob: {
    company: "Kraft Heinz Company",
    position: "Data Analyst",
    location: "Istanbul, Turkey",
    experince: "2 year",
    website: "https://www.kraftheinzcompany.com/",
  },
  pastJobs: [
    {
      company: "Frachtbox",
      position: "Key Account Executive",
      location: "Istanbul, Turkey",
      experince: "5 month",
      website: "https://www.frachtbox.com/",
    },
  ],
};

export default function handler(req, res) {
  res.status(200).json({ message: "Working on it!" });
}
