import crmiSealImagePath from "@/assets/schools/crmi-seal.png";
import dlsuSealImagePath from "@/assets/schools/dlsu-seal.svg";
import dlszSealImagePath from "@/assets/schools/dlsz-seal.svg";

export interface School {
  readonly sealImagePath: string;
  readonly name: string;
  readonly acronym: Uppercase<string>;
  readonly levels: string;
  readonly program?: string;
  readonly duration: string;
}

export const SCHOOLS: readonly School[] = [
  {
    sealImagePath: dlsuSealImagePath,
    name: "De La Salle University",
    acronym: "DLSU",
    levels: "Undergraduate",
    program: "B.S. in Computer Science (Network and Information Security)",
    duration: "2024 - Present",
  },
  {
    sealImagePath: dlszSealImagePath,
    name: "De La Salle Santiago Zobel School - Vermosa",
    acronym: "DLSU-V SHS",
    levels: "Senior Highschool (Grade 11 - Grade 12)",
    program: "Science, Technology, Engineering, and Mathematics",
    duration: "2022 - 2024",
  },
  {
    sealImagePath: dlszSealImagePath,
    name: "De La Salle Santiago Zobel School - Vermosa",
    acronym: "DLSU-V JHS",
    levels: "Junior Highschool (Grade 7 - Grade 10)",
    duration: "2018 - 2022",
  },
  {
    sealImagePath: crmiSealImagePath,
    name: "Casa Real Montessori Inc",
    acronym: "CRMI",
    levels: "Elementary (Grade 1 - Grade 6)",
    duration: "2012 - 2018",
  },
];
