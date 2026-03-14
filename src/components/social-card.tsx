import { UnstyledButton } from "@mantine/core";

import type { SocialLink } from "#/data/contacts.ts";

import { IconCard } from "./icon-card.tsx";

import styles from "./social-card.module.css";

export interface SocialCardProps {
  socialLink: SocialLink;
}

export function SocialCard({ socialLink }: Readonly<SocialCardProps>) {
  return (
    <UnstyledButton
      className={styles.root}
      component="a"
      href={socialLink.profileURL}
      rel="noopener noreferrer"
      target="_blank"
    >
      <IconCard
        iconWrapperSize={50}
        label={socialLink.platformName}
        renderIcon={(s) => <socialLink.iconComponent size={s} />}
        sublabel={socialLink.username}
      />
    </UnstyledButton>
  );
}
