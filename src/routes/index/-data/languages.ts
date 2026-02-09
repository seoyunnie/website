export interface Language {
  readonly name: string;
  readonly iconURL: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${string}/${string}-original.svg`;
  readonly usage: string;
}

export const LANGUAGES: readonly Language[] = [
  {
    name: "Python",
    iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    usage: "CLI Tools and Advent of Code",
  },
  {
    name: "Jupyter",
    iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg",
    usage: "Data Analysis",
  },
  {
    name: "JavaScript",
    iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    usage: "CLI Tools and Libraries",
  },
  {
    name: "TypeScript",
    iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    usage: "Discord Bot, CLI Tools, and Libraries",
  },
  {
    name: "React",
    iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    usage: "Frontend, Static Websites",
  },
  {
    name: "Java",
    iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    usage: "Backend, Socket Programming, and Desktop Applications",
  },
  {
    name: "MySQL",
    iconURL: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    usage: "Backend Database",
  },
];
