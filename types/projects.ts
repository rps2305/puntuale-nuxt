export interface Project {
  id: number;
  title: string;
  client: string;
  duration: string;
  description: string;
  tags: ReadonlyArray<string>;
  image: string;
  imageAlt: string;
  stats?: Record<string, string>;
}

export interface ProjectsData {
  title: string;
  description: string;
  tagline: string;
  image: string;
  imageAlt: string;
  cta: {
    primary: {
      label: string;
      href: string;
    };
    secondary: {
      label: string;
      href: string;
    };
  };
  projects: ReadonlyArray<Project>;
}
