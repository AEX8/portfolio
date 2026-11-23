// Content for the Education page. Fill in the blanks as details come in.

export interface Milestone {
  title: string;
  org: string;
  period?: string; // e.g. "2022 to 2025"
  details: string[];
  main?: boolean; // the brightest star on the timeline
  logo?: string; // name in /public/logos
}

export interface CourseGroup {
  name: string;
  courses: string[]; // the first few show straight away, the rest behind "Show all"
}

// How many courses per group show before "Show all"
export const COURSES_SHOWN = 3;

// Timeline, newest or most important first
export const MILESTONES: Milestone[] = [
  {
    title: 'Bachelor of Computer Science',
    org: 'RMIT University',
    period: '2024 to 2026',
    details: ['Major: Advanced Computer Science'],
    main: true,
    logo: 'rmit',
  },
  {
    title: 'Member',
    org: 'RMIT CSIT Society',
    details: [],
    logo: 'csit',
  },
];

// Coursework, grouped by skill
export const COURSE_GROUPS: CourseGroup[] = [
  {
    name: 'Software engineering',
    courses: [
      'Software Engineering Fundamentals',
      'Programming Project 1',
      'Algorithms and Analysis',
      'Java Programming Studio',
      'C++ Programming Studio',
      'Java Programming Bootcamp',
      'C++ Programming Bootcamp',
    ],
  },
  {
    name: 'AI and ML',
    courses: [
      'Machine Learning',
      'Deep Learning',
      'Artificial Intelligence',
      'Foundations of Artificial Intelligence',
    ],
  },
  {
    name: 'Cloud and systems',
    courses: ['Cloud Computing', 'Operating Systems Principles', 'Introduction to Cyber Security', 'Essentials of Computing'],
  },
  {
    name: 'Data',
    courses: ['Managing Semi-structured and Unstructured Data', 'Social Media and Networks Analytics'],
  },
  {
    name: 'Theory and maths',
    courses: ['Computing Theory', 'Mathematics for Computing 1', 'Introduction to Mathematics for Computing'],
  },
  {
    name: 'Industry and innovation',
    courses: ['Innovation Ecosystem and the Future of Work'],
  },
];

// Slugs from src/data/projects.ts that were uni projects
export const COURSE_PROJECTS: string[] = ['team9-garage-boilerplate', 'team69-cloud-computing'];
