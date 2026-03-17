import { Card, Image, Stack, Title } from "@mantine/core";

import type { GeotaggedPhoto } from "#/data/photography.ts";

import styles from "./photo-card.module.css";

export interface PhotoCardProps {
  photo: GeotaggedPhoto;
}

export function PhotoCard({ photo }: Readonly<PhotoCardProps>) {
  const [englishName, nativeName] = photo.displayName;

  return (
    <Card
      className={styles.root}
      style={{
        background: `linear-gradient(to bottom, rgb(0 0 0 / 50%), rgb(0 0 0 / 0%), rgb(0 0 0 / 25%)), url(${photo.image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Stack align="flex-start" className={styles.content} gap="xl" justify="space-between">
        <div>
          {nativeName !== undefined && <Title className={styles.subtitle}>{nativeName}</Title>}
          <Title>{englishName}</Title>
        </div>

        <Image
          alt={photo.countryFlag.altText}
          className={styles.countryFlag}
          loading="lazy"
          src={photo.countryFlag.imageURL}
        />
      </Stack>
    </Card>
  );
}
