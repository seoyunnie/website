import websiteCoverImage from "#/assets/backgrounds/hero-image.png";
import tetrisCLICoverImage from "#/assets/projects/tetris-cli.png";

export interface Project {
  readonly coverImage: string;
  readonly title: string;
  readonly description: string;
  readonly repositoryURL: `https://github.com/${string}/${string}`;
}

export const PROJECTS: readonly Project[] = [
  {
    coverImage: websiteCoverImage,
    title: "Website (This)",
    description: "My personal portfolio-ish website, where I also learn and test out new React libraries.",
    repositoryURL: "https://github.com/seoyunnie/website",
  },
  {
    coverImage: tetrisCLICoverImage,
    title: "Tetris CLI",
    description: "A clone of the popular game Tetris, but on the terminal, like the old days.",
    repositoryURL: "https://github.com/seoyunnie/tetris-cli",
  },
];
