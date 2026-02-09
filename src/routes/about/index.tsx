import { Anchor, Center, Container, Group, Image, Paper, Text, Title } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";

import bioImage from "@/assets/about/isekaijoucho.png";

import styles from "./index.module.css";
import { PhotoCarousel } from "./-components/photo-carousel.tsx";

function AboutPage() {
  return (
    <>
      <div className={styles.bioSection}>
        <Container size="xl" py="xl">
          <Group className={styles.bioSectionInner} justify="space-evenly" gap="xl">
            <Center className="half-container">
              <div>
                <Image className={styles.bioImage} radius="md" src={bioImage} alt="isekaijoucho" />
                <Text className={styles.bioImageCaption} size="sm">
                  This is obviously not me, but, anyways... Image Credit:{" "}
                  <Anchor href="https://www.narume.work/" target="_blank" rel="noreferrer">
                    narume
                  </Anchor>
                </Text>
              </div>
            </Center>

            <Center className="half-container">
              <div>
                <Title>안녕 세계</Title>

                <Text className="paragraph" size="lg">
                  I am a{" "}
                  <Anchor href="https://en.wikipedia.org/wiki/Hikikomori" target="_blank" rel="noreferrer">
                    hikikomori
                  </Anchor>{" "}
                  (not NEET, I&rsquo;m in university!) who loves to code and play games!
                </Text>

                <Text className="paragraph" size="lg">
                  I primarily enjoy playing tower defense games like Bloons TD 6 and the occasional first-person shooter
                  like Rainbow Six Siege. I used to play Counter Strike and Valorant more, but have played less because
                  of university.
                </Text>

                <Text className="paragraph" size="lg">
                  I learnt how to program in high school. Our high school had dedicated web development classes for
                  juniors and a Python class for seniors. I took that opportunity to learn more and was eventually
                  caught in the rabbit hole and has not escaped since.
                </Text>
              </div>
            </Center>
          </Group>
        </Container>
      </div>

      <Paper>
        <Container size="xl" py="xl">
          <Group justify="space-evenly" gap="xl">
            <Center className="half-container">
              <div>
                <Title>Life Outside the Basement</Title>

                <Text className="paragraph" size="lg">
                  Outside of university, I like to travel and visit different countries. Most countries that I&rsquo;ve
                  been to are in Europe, although I have been exploring Asia more recently. I like to think that
                  I&rsquo;m decent at taking photos, but I probably am not, and I hate taking photos of people
                  especially.
                </Text>

                <Text className="paragraph" size="lg">
                  I also like to visit old towns in European cities. The different architecture styles of the old world
                  intrigue me the most. That&rsquo;s why most of the photos I&rsquo;ve ever taken are of buildings, or
                  simply the urban landscape.
                </Text>
              </div>
            </Center>
            <Center className="half-container">
              <PhotoCarousel />
            </Center>
          </Group>
        </Container>
      </Paper>
    </>
  );
}

export const Route = createFileRoute("/about/")({ component: AboutPage });
