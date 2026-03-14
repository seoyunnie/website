import { Image, Text, Timeline } from "@mantine/core";

import { SCHOOLS } from "#/data/education.ts";

import styles from "./education-timeline.module.css";

export function EducationTimeline() {
  return (
    <Timeline
      active={SCHOOLS.reduce((a, s) => (s.isOngoing ? a : a + 1), -1)}
      bulletSize={60}
      lineWidth={5}
      radius="md"
      reverseActive
    >
      {SCHOOLS.map((school) => (
        <Timeline.Item
          bullet={
            <Image alt={`${school.acronym} Seal`} className={styles.seal} loading="lazy" src={school.sealImage} />
          }
          key={school.acronym}
          lineVariant={school.isOngoing ? "dashed" : "solid"}
          title={school.officialName}
        >
          {school.programName !== undefined && <Text size="sm">{school.programName}</Text>}
          <Text className={styles.educationLevels} size="sm">
            {school.educationLevels}
          </Text>
          <Text className={styles.attendancePeriod} size="xs">
            {school.attendancePeriod}
          </Text>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}
