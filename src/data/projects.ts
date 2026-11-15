// Projects shown on the Projects page, in display order.
// Fill in summary, tags, github and image as they become available.

export interface Project {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  github?: string; // repo link
  live?: string; // live demo link
  image?: string; // thumbnail path in /public, e.g. /projects/parsify.webp
}

const TBC = 'Description coming soon.';

export const PROJECTS: Project[] = [
  {
    slug: 'ibm-consulting-game',
    title: 'IBM AI Consulting Game',
    summary: TBC,
    tags: [],
    live: 'https://ibm-ai-powered-consulting-game-fron.vercel.app/',
  },
  { slug: 'parsify', title: 'Parsify', summary: TBC, tags: [] },
  { slug: 'forge', title: 'Forge', summary: TBC, tags: [] },
  { slug: 'smart-inventory', title: 'Smart Inventory', summary: TBC, tags: [] },
  { slug: 'kanbango', title: 'Kanbango', summary: TBC, tags: [] },
  { slug: 'loanflow', title: 'LoanFlow', summary: TBC, tags: [] },
  { slug: 'clickstream-pipeline', title: 'Clickstream Pipeline', summary: TBC, tags: [] },
  { slug: 'retail-analytics-pipeline', title: 'Retail Analytics Pipeline', summary: TBC, tags: [] },
  { slug: 'ml-pipeline', title: 'ML Pipeline', summary: TBC, tags: [] },
  { slug: 'team9-garage-boilerplate', title: 'Garage Boilerplate', summary: TBC, tags: [] },
  { slug: 'team69-cloud-computing', title: 'Cloud Computing', summary: TBC, tags: [] },
];
