export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  email: string;
  image: string;
  skills: ReadonlyArray<string>;
  yearsExperience: number;
}

export interface TeamData {
  title: string;
  description: string;
  members: ReadonlyArray<TeamMember>;
}
