import {
  IconBrandGithubFilled,
  IconBrandInstagramFilled,
  IconBrandTwitterFilled,
  type IconProps,
} from "@tabler/icons-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

export interface Social {
  readonly name: string;
  readonly url: `https://${string}`;
  readonly icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  readonly username: string;
}

export const SOCIALS: readonly Social[] = [
  { name: "GitHub", url: "https://github.com/seoyunnie", icon: IconBrandGithubFilled, username: "seoyunnie" },
  { name: "Twitter", url: "https://x.com/cielsachen", icon: IconBrandTwitterFilled, username: "@cielsachen" },
  {
    name: "Instagram",
    url: "https://www.instagram.com/seoyunni3",
    icon: IconBrandInstagramFilled,
    username: "seoyunni3",
  },
];
