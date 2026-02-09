import websiteImagePath from "@/assets/backgrounds/hero-image.png";

export interface Project {
  readonly image: string;
  readonly name: string;
  readonly description: string;
  readonly repositoryURL: `https://github.com/${string}/${string}`;
}

export const PROJECTS: readonly Project[] = [
  {
    image: websiteImagePath,
    name: "Website",
    description:
      "My personal website, which is primarily portfolio, but is also where I learn and test out new React libraries on.",
    repositoryURL: "https://github.com/seoyunnie/website",
  },
];
