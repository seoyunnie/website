import { Container, SimpleGrid } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";
import { clsx } from "clsx/lite";

import { ProjectCard } from "#/components/project-card.tsx";
import { PROJECTS } from "#/data/projects.ts";

import styles from "./projects.module.css";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [{ title: "Projects | Seoyunnie" }] }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className={clsx(styles.page, "background-dot-grid")}>
      <Container className={styles.projectsSection} size="xl">
        <SimpleGrid cols={{ base: 1, xs: 2, md: 3 }}>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
}
