import type { ReactNode } from "react";

import { type DefaultMantineColor, Flex, Text, ThemeIcon } from "@mantine/core";

import styles from "./icon-card.module.css";

export interface IconCardProps {
  iconWrapperSize?: number;
  iconWrapperColor?: DefaultMantineColor;

  label: string;
  sublabel: string;

  renderIcon: (size: number) => ReactNode;
}

const ICON_INSET = 10;

export function IconCard({
  iconWrapperColor,
  iconWrapperSize = 60,
  label,
  renderIcon,
  sublabel,
}: Readonly<IconCardProps>) {
  const iconSize = iconWrapperSize - ICON_INSET;

  return (
    <Flex>
      <ThemeIcon className={styles.iconWrapper} color={iconWrapperColor} size={iconWrapperSize}>
        {renderIcon(iconSize)}
      </ThemeIcon>

      <div>
        <Text size="lg">{label}</Text>
        <Text className={styles.sublabel} size="sm">
          {sublabel}
        </Text>
      </div>
    </Flex>
  );
}
