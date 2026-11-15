// Content for the Education page. Fill in the blanks as details come in.

export interface Milestone {
  title: string;
  org: string;
  period?: string; // e.g. "2022 to 2025"
  details: string[];
  main?: boolean; // the brightest star on the timeline
}

export interface CourseGroup {
  name: string;
  courses: string[];
}

// Timeline, newest or most important first
export const MILESTONES: Milestone[] = [
  {
    title: 'Bachelor of Computer Science',
    org: 'RMIT University',
    period: undefined,
    details: ['Major: Advanced Computer Science'],
    main: true,
  },
  {
    title: 'Certifications',
    org: 'Coming soon',
    details: [],
  },
];

// Key coursework, grouped by skill
export const COURSE_GROUPS: CourseGroup[] = [
  { name: 'Software engineering', courses: [] },
  { name: 'Cloud and DevOps', courses: [] },
  { name: 'Data', courses: [] },
  { name: 'AI and ML', courses: [] },
];

// Slugs from src/data/projects.ts that were uni projects
export const COURSE_PROJECTS: string[] = [];
