import { Group, Text, ThemeIcon, UnstyledButton } from "@mantine/core";

import styles from "./social-button.module.css";
import type { Social } from "../-data/socials.ts";

export interface SocialButtonProps {
  social: Social;
}

export function SocialButton({ social }: SocialButtonProps) {
  return (
    <UnstyledButton
      key={social.name}
      className={styles.button}
      component="a"
      href={social.url}
      target="_blank"
      rel="noreferrer"
    >
      <Group gap={0}>
        <ThemeIcon className={styles.icon} size={50}>
          <social.icon size={40} />
        </ThemeIcon>

        <div>
          <Text size="lg">{social.name}</Text>
          <Text className={styles.socialUsername} size="sm">
            {social.username}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  );
}
