export interface Language {
  readonly name: string;
  readonly iconURL: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${string}/${string}-original.svg`;
  readonly usageContext: string;
}

export const LANGUAGES: readonly Language[] = [
  {
    name: "Python",
    iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    usageContext: "Basic Scripting, Advent of Code, and Socket Programming",
  },
  {
    name: "Jupyter",
    iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg",
    usageContext: "Data Analysis",
  },
  {
    name: "TypeScript (JavaScript)",
    iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    usageContext: "CRUD Apps, CLI Games, and Libraries",
  },
  {
    name: "React",
    iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    usageContext: "SPA",
  },
  {
    name: "Java",
    iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    usageContext: "CRUD and Desktop Apps, and Socket Programming",
  },
  {
    name: "MongoDB",
    iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    usageContext: "NoSQL DBMS",
  },
  {
    name: "MySQL",
    iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    usageContext: "SQL DBMS",
  },
];
