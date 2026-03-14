import type { ComponentType } from "react";

import {
  type IconProps,
  IconBrandGithubFilled,
  IconBrandInstagramFilled,
  IconBrandTwitterFilled,
} from "@tabler/icons-react";

export const CONTACT_EMAIL = "seoyun1062@naver.com";

export interface SocialLink {
  readonly platformName: string;
  readonly profileURL: `https://${string}`;
  readonly iconComponent: ComponentType<IconProps>;
  readonly username: string;
}

export const SOCIAL_LINK_REGISTRY = {
  github: {
    platformName: "GitHub",
    profileURL: "https://github.com/seoyunnie",
    iconComponent: IconBrandGithubFilled,
    username: "seoyunnie",
  },
  twitter: {
    platformName: "Twitter",
    profileURL: "https://x.com/cielsachen",
    iconComponent: IconBrandTwitterFilled,
    username: "@cielsachen",
  },
  instagram: {
    platformName: "Instagram",
    profileURL: "https://www.instagram.com/seoyunni3",
    iconComponent: IconBrandInstagramFilled,
    username: "seoyunni3",
  },
} as const satisfies Record<string, SocialLink>;

export const SOCIAL_LINK_ENTRIES: readonly SocialLink[] = Object.values(SOCIAL_LINK_REGISTRY);
