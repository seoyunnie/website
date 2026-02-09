import { Carousel } from "@mantine/carousel";
import { Card, Image, Stack, Text, Title } from "@mantine/core";

import styles from "./photo-carousel.module.css";
import { PHOTOS } from "../-data/photos.ts";

export function PhotoCarousel() {
  return (
    <Carousel classNames={{ indicator: styles.indicator }} slideGap="md" withIndicators maw="100%">
      {PHOTOS.map((photo) => {
        const hasNativeName = typeof photo.name === "string";
        const name = hasNativeName ? photo.name : photo.name[0];

        return (
          <Carousel.Slide key={name}>
            <Card
              className={styles.photoCard}
              bg={`linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.25)), url(${photo.path})`}
              bgp="center"
              bgsz="cover"
            >
              <Stack justify="space-between" gap="xl" h="100%">
                {hasNativeName ? (
                  <Title className={styles.photoName}>{photo.name}</Title>
                ) : (
                  <div>
                    <Text className={styles.photoNativeName}>{photo.name[1]}</Text>
                    <Title className={styles.photoName}>{photo.name[0]}</Title>
                  </div>
                )}

                <div>
                  <Image
                    className={styles.photoCountryFlag}
                    src={photo.countryFlag.url}
                    alt={photo.countryFlag.alt}
                    loading="lazy"
                  />
                </div>
              </Stack>
            </Card>
          </Carousel.Slide>
        );
      })}
    </Carousel>
  );
}
