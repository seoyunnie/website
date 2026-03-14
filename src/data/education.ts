import crmiSeal from "#/assets/schools/crmi-seal.png";
import dlsuSeal from "#/assets/schools/dlsu-seal.svg";
import dlszSeal from "#/assets/schools/dlsz-seal.svg";

export interface School {
  readonly sealImage: string;
  readonly officialName: string;
  readonly acronym: Uppercase<string>;
  readonly educationLevels: string;
  readonly programName?: string;
  readonly attendancePeriod: `${number} - ${number | "Present"}`;
  readonly isOngoing: boolean;
}

export const SCHOOLS: readonly School[] = [
  {
    sealImage: dlsuSeal,
    officialName: "De La Salle University",
    acronym: "DLSU",
    educationLevels: "Undergraduate",
    programName: "B.S. in Computer Science (Network and Information Security)",
    attendancePeriod: "2024 - Present",
    isOngoing: true,
  },
  {
    sealImage: dlszSeal,
    officialName: "De La Salle Santiago Zobel School - Vermosa",
    acronym: "DLSU-V SHS",
    educationLevels: "Senior Highschool (Grade 11 - Grade 12)",
    programName: "Science, Technology, Engineering, and Mathematics",
    attendancePeriod: "2022 - 2024",
    isOngoing: false,
  },
  {
    sealImage: dlszSeal,
    officialName: "De La Salle Santiago Zobel School - Vermosa",
    acronym: "DLSU-V JHS",
    educationLevels: "Junior Highschool (Grade 7 - Grade 10)",
    attendancePeriod: "2018 - 2022",
    isOngoing: false,
  },
  {
    sealImage: crmiSeal,
    officialName: "Casa Real Montessori Inc",
    acronym: "CRMI",
    educationLevels: "Elementary (Grade 1 - Grade 6)",
    attendancePeriod: "2012 - 2018",
    isOngoing: false,
  },
];
