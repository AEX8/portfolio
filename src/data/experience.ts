// Content for the Experience page. Replace the placeholders as details come in.

export interface Role {
  title: string;
  company: string;
  location?: string;
  type?: 'Capstone' | 'Internship' | 'Part time' | 'Casual' | 'Freelance' | 'Volunteer' | 'Full time';
  start: string; // e.g. "Mar 2024"
  end: string; // e.g. "Present"
  bullets: string[];
  logo?: string; // name in /public/logos, e.g. "ibm" uses ibm.webp
  project?: string; // slug from src/data/projects.ts, shows a "View project" link
}

export interface SmallItem {
  title: string;
  org: string;
  period?: string;
  logo?: string;
}

// Path to the CV in /public, e.g. "/cv/gayath-cv.pdf". Leave empty to hide the download.
export const CV_PATH = '/cv/Gayath_Kaluwahewa_CV.pdf';

// Main roles, newest first
export const ROLES: Role[] = [
  {
    title: 'Project Manager',
    company: 'IBM',
    type: 'Capstone',
    start: 'Sep 2026',
    end: 'Dec 2026',
    bullets: [
      'Led a team of five building an AI powered, 2D RPG style consulting simulation game that trains junior and graduate consultants, delivered over three sprints.',
      'Owned all communication with the IBM client and every project management duty for the team.',
      'Contributed as a developer alongside managing the project.',
      'Set up the separate demo repository, the Firebase project and the Vercel deployment for the showcase.',
      'Led the team through an industry showcase event organised with IBM, RMIT, Microsoft, Amazon, Telstra, NBN and the Grand Prix.',
      'Achieved a High Distinction for the capstone, with a final mark of 86.9 out of 100.',
    ],
    logo: 'ibm',
    project: 'ibm-consulting-game',
  },
  {
    title: 'Student Mentor',
    company: 'RMIT University',
    location: 'Melbourne',
    type: 'Volunteer',
    start: 'Jul 2025',
    end: 'Present',
    bullets: ['Teach students and help them work through their course materials.'],
    logo: 'rmit',
  },
];

// Non tech roles, one line each
export const OTHER_ROLES: SmallItem[] = [
  { title: 'Customer Support and Showroom', org: 'Cedar Hospitality', period: 'Part time · Apr 2025 to Present', logo: 'cedar' },
];
