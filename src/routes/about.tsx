import { Carousel } from "@mantine/carousel";
import { Anchor, Button, Center, Container, Image, Text, Title } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

import bioImage from "#/assets/about/isekaijoucho.png";
import { TwoColumnLayout } from "#/components/layout/two-column-layout.tsx";
import { PhotoCard } from "#/components/photo-card.tsx";
import { SOCIAL_LINK_REGISTRY } from "#/data/contacts.ts";
import { PHOTOS } from "#/data/photography.ts";

import styles from "./about.module.css";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About | Seoyunnie" }] }),
  component: AboutPage,
});

function AboutPage() {
  // oxlint-disable-next-line new-cap
  const { current: carouselAutoplay } = useRef(Autoplay({ delay: 5000 }));

  return (
    <>
      <div className={styles.bioSection}>
        <Container className={styles.bioSectionInner} size="xl">
          <TwoColumnLayout
            gutter="xl"
            leftSection={
              <Center className={styles.bioImageWrapper}>
                <div className={styles.bioContent}>
                  <Image alt="isekaijoucho" className={styles.bioImage} loading="lazy" radius="md" src={bioImage} />
                  <Text className={styles.bioImageCaption} size="sm">
                    This is obviously not me, but, anyways... Image Credit:{" "}
                    <Anchor href="https://www.narume.work/" rel="noopener noreferrer" target="_blank">
                      narume
                    </Anchor>
                  </Text>
                </div>
              </Center>
            }
            reverseOnSplit
            rightSection={
              <Center>
                <div className={styles.bioContent}>
                  <Title className={styles.bioTitle}>안녕 세계</Title>

                  <Text className={styles.sectionText} size="lg">
                    I am a{" "}
                    <Anchor href="https://en.wikipedia.org/wiki/Hikikomori" rel="noopener noreferrer" target="_blank">
                      <ruby>
                        hikikomori
                        <rp>(</rp>
                        <rt>引きこもり</rt>
                        <rp>)</rp>
                      </ruby>
                    </Anchor>{" "}
                    (not NEET, I&rsquo;m in university!) who loves to code and play games!
                  </Text>
                  <Text className={styles.sectionText} size="lg">
                    I primarily enjoy playing tower defense games like Bloons TD 6 and the occasional first-person
                    shooter like Rainbow Six Siege. I used to play Counter Strike and Valorant more, but have played
                    less because of university.
                  </Text>
                  <Text className={styles.sectionText} size="lg">
                    I learnt how to program in high school. Our high school had dedicated web development classes for
                    juniors and a Python class for seniors. I took that opportunity to learn more and was eventually
                    caught in the rabbit hole and has not escaped since.
                  </Text>
                </div>
              </Center>
            }
            splitAt="md"
          />
        </Container>
      </div>

      <Container className={styles.travelSection} size="xl">
        <TwoColumnLayout
          gutter="xl"
          leftSection={
            <Center>
              <div>
                <Title>Life Outside the Basement</Title>

                <Text className={styles.sectionText} size="lg">
                  Outside of university, I like to travel and visit different countries. Most countries that I&rsquo;ve
                  been to are in Europe, although I have been exploring Asia more recently. I like to think that
                  I&rsquo;m decent at taking photos, but I probably am not, and I hate taking photos of people
                  especially.
                </Text>
                <Text className={styles.sectionText} size="lg">
                  I also like to visit old towns in European cities. The different architecture styles of the old world
                  intrigue me the most. That&rsquo;s why most of the photos I&rsquo;ve ever taken are of buildings, or
                  simply the urban landscape.
                </Text>

                <Button
                  className={styles.travelInstagramButton}
                  component="a"
                  href={SOCIAL_LINK_REGISTRY.instagram.profileURL}
                  rel="noopener noreferrer"
                  rightSection={<IconExternalLink />}
                  target="_blank"
                >
                  My Instagram Profile
                </Button>
              </div>
            </Center>
          }
          rightSection={
            <Center className={styles.travelCarouselWrapper}>
              <Carousel
                className={styles.travelCarousel}
                emblaOptions={{ loop: true }}
                height="100%"
                onMouseEnter={() => {
                  carouselAutoplay.stop();
                }}
                onMouseLeave={() => {
                  carouselAutoplay.play();
                }}
                plugins={[carouselAutoplay]}
                slideGap="md"
                withIndicators
              >
                {PHOTOS.map((photo) => (
                  <Carousel.Slide key={photo.displayName[0]}>
                    <PhotoCard photo={photo} />
                  </Carousel.Slide>
                ))}
              </Carousel>
            </Center>
          }
          splitAt="sm"
        />
      </Container>
    </>
  );
}
