import { Flex, Image, Text, ThemeIcon } from "@mantine/core";

import styles from "./language-icon.module.css";
import type { Language } from "../-data/languages.ts";

export interface LanguageIconProps {
  lang: Language;
}

export function LanguageIcon({ lang }: LanguageIconProps) {
  return (
    <Flex key={lang.name}>
      <ThemeIcon className={styles.icon} size={60} color="gray">
        <Image src={lang.iconURL} alt={lang.name} />
      </ThemeIcon>

      <div>
        <Text size="lg">{lang.name}</Text>
        <Text className={styles.languageUsage}>{lang.usage}</Text>
      </div>
    </Flex>
  );
}
