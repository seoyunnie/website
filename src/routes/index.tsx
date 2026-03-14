import {
  Anchor,
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
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery, useWindowScroll } from "@mantine/hooks";
import { IconBriefcase, IconMail, IconSchool, IconSend } from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";
import { clsx } from "clsx/lite";

import { EducationTimeline } from "#/components/education-timeline.tsx";
import { IconCard } from "#/components/icon-card.tsx";
import { TwoColumnLayout } from "#/components/layout/two-column-layout.tsx";
import { SocialCard } from "#/components/social-card.tsx";
import { ImageIcon } from "#/components/ui/image-icon.tsx";
import { CONTACT_EMAIL, SOCIAL_LINK_ENTRIES } from "#/data/contacts.ts";
import { LANGUAGES } from "#/data/tech-stack.ts";

import styles from "./index.module.css";

export const Route = createFileRoute("/")({ component: HomePage });

const HERO_PARALLAX_FACTOR = 3;

function HomePage() {
  const theme = useMantineTheme();
  const isSmallScreen = useMediaQuery(`(width < ${theme.breakpoints.sm})`);

  const [scrollPos] = useWindowScroll();

  return (
    <>
      <div className={styles.heroSection} style={{ transform: `translateY(${scrollPos.y / HERO_PARALLAX_FACTOR}px)` }}>
        <Container size="lg">
          <Center className={styles.heroWrapper}>
            <div className={styles.heroContent}>
              <Title className={styles.heroTitle}>Web Developer and Minecraft Modder in Training</Title>

              <Text className={styles.heroImageCredits} size="lg">
                Image Credit:{" "}
                <Anchor href="https://www.narume.work/" rel="noopener noreferrer" target="_blank">
                  narume
                </Anchor>
              </Text>
            </div>
          </Center>
        </Container>
      </div>

      <Paper className={styles.sectionsWrapper} radius={0} shadow="md" withBorder>
        <div className={styles.section}>
          <Container size="lg">
            <Stack gap="xl">
              <div>
                <Title>Tech Stack</Title>

                <Text className={styles.sectionDescription} size="lg">
                  A list of the programming languages, libraries, and databases that I&apos;ve used both
                  privately/personally and for school projects.
                </Text>
              </div>

              <SimpleGrid cols={{ base: 1, xs: 2 }}>
                {LANGUAGES.map((lang) => (
                  <IconCard
                    iconWrapperColor="gray"
                    key={lang.name}
                    label={lang.name}
                    renderIcon={(size) => (
                      <ImageIcon alt={`${lang.name} Icon`} loading="lazy" size={size} src={lang.iconURL} />
                    )}
                    sublabel={lang.usageContext}
                  />
                ))}
              </SimpleGrid>
            </Stack>
          </Container>
        </div>

        <Container size="xl">
          <Divider />
        </Container>

        <Container className={styles.section} size="xl">
          <TwoColumnLayout
            gutter="xl"
            leftSection={
              <Image
                alt="St. La Salle Hall"
                className={styles.experienceImage}
                radius="md"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/St._La_Salle_Hall_in_March_2024.jpg/1280px-St._La_Salle_Hall_in_March_2024.jpg"
              />
            }
            rightSection={
              <Tabs defaultValue="education" variant="pills">
                <Tabs.List justify="center">
                  <Tabs.Tab leftSection={<IconSchool />} value="education">
                    <Title order={4}>Education</Title>
                  </Tabs.Tab>
                  <Tabs.Tab disabled leftSection={<IconBriefcase />} value="employment">
                    <Title order={4}>Employment</Title>
                  </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="education">
                  <Center className={styles.experienceTimeline}>
                    <EducationTimeline />
                  </Center>
                </Tabs.Panel>
              </Tabs>
            }
            splitAt="sm"
          />
        </Container>
      </Paper>

      <div className={clsx(styles.section, "background-dot-grid")}>
        <Container size="lg">
          <Card padding="lg" shadow="md" withBorder>
            <Flex direction={{ base: "column", sm: "row" }} gap="xl" justify="space-evenly">
              <Center>
                <div className={styles.contactsHeader}>
                  <Title className={styles.contactsTitle}>Contacts</Title>
                  <Title className={styles.contactsSubtitle} order={3}>
                    Louis Raphael V. Panaligan
                  </Title>
                </div>
              </Center>

              <Divider orientation={isSmallScreen ? "horizontal" : "vertical"} />

              <Stack gap={0} justify="space-between">
                <Center>
                  <Text className={styles.sectionDescription} size="lg">
                    Find me on:
                  </Text>
                </Center>

                <SimpleGrid cols={{ base: 2, xs: 3 }} spacing="md">
                  {SOCIAL_LINK_ENTRIES.map((socialLink) => (
                    <SocialCard key={socialLink.platformName} socialLink={socialLink} />
                  ))}
                </SimpleGrid>

                <Center>
                  <Text className={styles.sectionDescription} size="lg">
                    <IconMail className="inline-icon" /> or mail me at{" "}
                    <Anchor href={`mailto:${CONTACT_EMAIL}`} rel="noopener noreferrer" target="_blank">
                      {CONTACT_EMAIL} <IconSend className="inline-icon" />
                    </Anchor>
                  </Text>
                </Center>
              </Stack>
            </Flex>
          </Card>
        </Container>
      </div>
    </>
  );
}
