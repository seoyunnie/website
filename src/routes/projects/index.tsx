import { Container, SimpleGrid } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";

import styles from "./index.module.css";
import { PROJECTS } from "./-data/projects.ts";
import { ProjectCard } from "./-components/project-card.tsx";

function ProjectsPage() {
  return (
    <div className={styles.background}>
      <Container className={styles.projectsContainer} size="xl">
        <SimpleGrid cols={{ base: 1, xs: 2, md: 3 }}>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
}

export const Route = createFileRoute("/projects/")({ component: ProjectsPage });
