import type { IconProps } from "@tabler/icons-react";

import { type ElementProps, type ImageProps, Image } from "@mantine/core";
import { clsx } from "clsx/lite";

import styles from "./image-icon.module.css";

export interface ImageIconProps
  extends Pick<IconProps, "size">, Omit<ImageProps, "fit" | "h" | "w">, ElementProps<"img", keyof ImageProps> {
  src: string;
}

export function ImageIcon({ alt, className, size, src, ...props }: Readonly<ImageIconProps>) {
  return <Image {...props} alt={alt} className={clsx(styles.root, className)} h={size} src={src} />;
}
