// Content for the Experience page. Replace the placeholders as details come in.

export interface Role {
  title: string;
  company: string;
  location?: string;
  type?: 'Capstone' | 'Internship' | 'Part time' | 'Casual' | 'Freelance' | 'Volunteer' | 'Full time';
  start: string; // e.g. "Mar 2024"
  end: string; // e.g. "Present"
  bullets: string[];
  tags: string[];
  project?: string; // slug from src/data/projects.ts, shows a "View project" link
}

export interface SmallItem {
  title: string;
  org: string;
  period?: string;
}

// Path to the CV in /public, e.g. "/cv/gayath-cv.pdf". Leave empty to hide the download.
export const CV_PATH = '';

// Main roles, newest first
export const ROLES: Role[] = [
  {
    title: 'Project Manager',
    company: 'IBM',
    type: 'Capstone',
    start: 'Sep 2026',
    end: 'Dec 2026',
    bullets: [
      'Led a team of five building an AI powered, 2D RPG style consulting simulation game that trains junior and graduate consultants.',
      'Owned all communication with the IBM client and every project management duty for the team.',
      'Contributed as a developer alongside managing the project.',
      'Set up the separate demo repository, the Firebase project and the Vercel deployment for the showcase.',
      'Led the team through an industry showcase event organised with IBM, RMIT, Telstra, NBN and the Grand Prix.',
    ],
    tags: ['Project management', 'Client communication', 'AI', 'Firebase', 'Vercel'],
    project: 'ibm-consulting-game',
  },
  {
    title: 'Role title',
    company: 'Company name',
    location: 'Melbourne',
    type: 'Part time',
    start: 'Month 20XX',
    end: 'Month 20XX',
    bullets: ['Details coming soon.'],
    tags: [],
  },
];

// Non tech roles, one line each
export const OTHER_ROLES: SmallItem[] = [];

// Hackathons, clubs, mentoring, volunteering
export const COMMUNITY: SmallItem[] = [];
