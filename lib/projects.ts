import data from "@/data/projects.json";

export type Project = {
  title: string;
  year: number;
  summary: string;
  tags?: string[];
  demo?: string;
  repo?: string;
};

export function getProjects(): Project[] {
  return data as Project[];
}
