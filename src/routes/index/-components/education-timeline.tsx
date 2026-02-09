import { Image, Text, Timeline } from "@mantine/core";

import styles from "./education-timeline.module.css";
import { SCHOOLS } from "../-data/schools.ts";

export function EducationTimeline() {
  return (
    <Timeline active={3} radius="md" bulletSize={60} lineWidth={5}>
      {SCHOOLS.map((school) => (
        <Timeline.Item
          key={school.acronym}
          title={school.name}
          bullet={<Image className={styles.schoolSeal} src={school.sealImagePath} />}
        >
          {school.program !== undefined && <Text size="sm">{school.program}</Text>}
          <Text className={styles.schoolLevels} size="sm">
            {school.levels}
          </Text>
          <Text className={styles.schoolDuration} size="xs">
            {school.duration}
          </Text>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}
