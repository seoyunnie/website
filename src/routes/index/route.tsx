import {
  Anchor,
  Box,
  Card,
  Center,
  Container,
  Divider,
  Flex,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Tabs,
  Text,
  Title,
  type CardProps,
} from "@mantine/core";
import { IconBriefcase, IconSchool } from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";

import styles from "./route.module.css";
import { EducationTimeline } from "./-components/education-timeline.tsx";
import { LanguageIcon } from "./-components/language-icon.tsx";
import { SocialButton } from "./-components/social-button.tsx";
import { LANGUAGES } from "./-data/languages.ts";
import { SOCIALS } from "./-data/socials.ts";

const CARD_PROPS = { shadow: "sm", radius: "md", withBorder: true, padding: "lg" } as const satisfies CardProps;

function HomePage() {
  return (
    <>
      <div className={styles.heroSection}>
        <Container size="lg">
          <Center h="var(--page-content-height)">
            <div>
              <Title className={styles.heroTitle}>Web Developer and Minecraft Modder in Training</Title>
              <Text className={styles.heroImageCredits} size="lg">
                Image Credit:{" "}
                <Anchor href="https://www.narume.work/" target="_blank" rel="noreferrer">
                  narume
                </Anchor>
              </Text>
            </div>
          </Center>
        </Container>
      </div>

      <Divider />

      <Paper className={styles.techStackSection}>
        <Container size="lg">
          <Stack gap="xl">
            <Center>
              <div>
                <Title className={styles.sectionTitle}>Tech Stack</Title>
                <Text className={styles.sectionDescription} size="lg">
                  A list of the programming languages, libraries, and databases that I&apos;ve used!
                </Text>
              </div>
            </Center>

            <SimpleGrid cols={{ base: 1, xs: 2 }} spacing="md">
              {LANGUAGES.map((lang) => (
                <LanguageIcon key={lang.name} lang={lang} />
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Paper>

      <Box pb="xl">
        <Container size="lg">
          <Stack gap="xl">
            <Card {...CARD_PROPS} padding={0}>
              <Flex align="stretch" justify="space-between" direction={{ base: "column", sm: "row" }}>
                <div className="half-container">
                  <Image
                    className={styles.timelinesCardImage}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/St._La_Salle_Hall_in_March_2024.jpg/1280px-St._La_Salle_Hall_in_March_2024.jpg"
                    alt="St. La Salle Hall"
                  />
                </div>

                <Box className={`half-container ${styles.timelinesCardContent}`}>
                  <Tabs variant="pills" defaultValue="education">
                    <Tabs.List justify="center">
                      <Tabs.Tab value="education" leftSection={<IconSchool />}>
                        <Title order={4}>Education</Title>
                      </Tabs.Tab>
                      <Tabs.Tab value="employment" leftSection={<IconBriefcase />} disabled>
                        <Title order={4}>Employment</Title>
                      </Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="education">
                      <Center className={styles.timeline}>
                        <EducationTimeline />
                      </Center>
                    </Tabs.Panel>
                  </Tabs>
                </Box>
              </Flex>
            </Card>

            <Card {...CARD_PROPS}>
              <Stack gap="lg">
                <Center>
                  <div>
                    <Title className={styles.sectionTitle}>Contacts</Title>
                    <Text className={styles.sectionDescription} size="lg">
                      A list of the platforms that you can reach out to me on!
                    </Text>
                  </div>
                </Center>

                <Container>
                  <SimpleGrid cols={{ base: 2, sm: 3 }} spacing="md">
                    {SOCIALS.map((social) => (
                      <SocialButton key={social.name} social={social} />
                    ))}
                  </SimpleGrid>
                </Container>
              </Stack>
            </Card>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export const Route = createFileRoute("/")({ component: HomePage });
