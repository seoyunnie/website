import { Button, Card, Image, Stack, Text, Title } from "@mantine/core";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

import type { Project } from "#/data/projects.ts";

import styles from "./project-card.module.css";

export interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: Readonly<ProjectCardProps>) {
  return (
    <Card padding="lg" shadow="md" withBorder>
      <Card.Section>
        <Image alt={`${project.title} Cover`} className={styles.coverImage} loading="lazy" src={project.coverImage} />
      </Card.Section>

      <Stack className={styles.content} justify="space-between">
        <div>
          <Title className={styles.title}>{project.title}</Title>

          <Text className={styles.description}>{project.description}</Text>
        </div>

        <Button
          className={styles.linkButton}
          component="a"
          fullWidth
          href={project.repositoryURL}
          justify="space-between"
          leftSection={<IconBrandGithub />}
          rel="noopener noreferrer"
          rightSection={<IconExternalLink />}
          target="_blank"
        >
          Visit Repository
        </Button>
      </Stack>
    </Card>
  );
}
