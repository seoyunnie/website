import { Button, Card, Image, Text, Title } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";

import styles from "./project-card.module.css";
import type { Project } from "../-data/projects.ts";

export interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card shadow="sm" withBorder padding="lg">
      <Card.Section>
        <Image className={styles.projectImage} src={project.image} alt="Website Image" />
      </Card.Section>

      <Title className={styles.projectName} order={3}>
        {project.name}
      </Title>
      <Text className={styles.projectDescription}>{project.description}</Text>

      <Button
        className={styles.link}
        justify="space-between"
        leftSection={<span />}
        rightSection={<IconExternalLink />}
        fullWidth
        component="a"
        href={project.repositoryURL}
        target="_blank"
        rel="noreferrer"
      >
        GitHub Repository
      </Button>
    </Card>
  );
}
