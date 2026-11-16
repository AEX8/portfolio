// Projects shown on the Projects page, in display order.
// Keep summaries short and plain: what it is and what it does.

export interface Project {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  github?: string; // repo link
  live?: string; // live demo link
  image?: string; // thumbnail path in /public, e.g. /projects/parsify.webp
  // Logos sit inside the frame on a matching colour; full artwork fills it
  imageFit?: 'cover' | 'contain';
  imageBg?: 'white' | 'slate' | 'black';
  // Optional override for the card's thumbnail shade (otherwise it alternates by position)
  shade?: 'left' | 'corner' | 'right' | 'bottom' | 'edges' | 'none';
  status?: 'In progress';
}

const TBC = 'Description coming soon.';
const GH = 'https://github.com/AEX8';

export const PROJECTS: Project[] = [
  {
    slug: 'ibm-consulting-game',
    title: 'IBM AI Consulting Game',
    summary:
      'An AI powered 2D RPG style simulation game that trains junior and graduate consultants. Capstone project with IBM.',
    tags: ['AI', 'Firebase', 'Vercel'],
    github: `${GH}/IBM-AI-powered-consulting-game`,
    live: 'https://ibm-ai-powered-consulting-game-fron.vercel.app/',
    image: '/projects/ibm-consulting-game.webp',
    imageFit: 'cover',
    shade: 'edges',
  },
  {
    slug: 'parsify',
    title: 'Parsify',
    summary:
      'Upload any document, choose the fields you need and get clean JSON back. Claude handles the extraction. Full stack app deployed on AWS.',
    tags: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Claude API', 'AWS'],
    github: `${GH}/parsify`,
    image: '/projects/parsify.webp',
    imageFit: 'contain',
    imageBg: 'slate',
  },
  {
    slug: 'forge',
    title: 'Forge',
    summary:
      'A self hosted LLM gateway with an OpenAI compatible API. Adds API keys, rate limiting, prompt risk checks and usage tracking to a private Llama model.',
    tags: ['Python', 'FastAPI', 'Redis', 'PostgreSQL', 'Ollama', 'Docker'],
    github: `${GH}/forge`,
    image: '/projects/forge.webp',
    imageFit: 'cover',
  },
  {
    slug: 'smart-inventory',
    title: 'Smart Inventory',
    summary:
      'A warehouse platform for hospitality suppliers. Tracks stock and deliveries and uses machine learning to predict when products will run out.',
    tags: ['FastAPI', 'React', 'XGBoost', 'Redis', 'Celery', 'Kubernetes'],
    github: `${GH}/smart-inventory`,
    image: '/projects/smart-inventory.webp',
    imageFit: 'contain',
    imageBg: 'white',
  },
  {
    slug: 'loanflow',
    title: 'LoanFlow',
    summary:
      'A loan application backend modelled on Australian banking systems. Camunda runs the approval workflow with role based access for each user type.',
    tags: ['Java', 'Spring Boot', 'Camunda', 'PostgreSQL', 'Flyway'],
    image: '/projects/loanflow.webp',
    imageFit: 'cover',
    status: 'In progress',
  },
  {
    slug: 'clickstream-pipeline',
    title: 'Clickstream Pipeline',
    summary: 'A real time data pipeline that turns simulated web traffic into live metrics on a dashboard.',
    tags: ['Kafka', 'Python', 'PostgreSQL', 'FastAPI', 'React'],
    github: `${GH}/clickstream-pipeline`,
    image: '/projects/clickstream-pipeline.webp',
    imageFit: 'contain',
    imageBg: 'black',
  },
  {
    slug: 'retail-analytics-pipeline',
    title: 'Retail Analytics Pipeline',
    summary:
      'A batch data pipeline that combines three sources into a tested warehouse, runs daily and powers a dashboard. Built on synthetic data.',
    tags: ['dbt', 'Airflow', 'PostgreSQL', 'FastAPI', 'React'],
    github: `${GH}/retail-analytics-pipeline`,
    image: '/projects/retail-analytics-pipeline.webp',
    imageFit: 'cover',
  },
  { slug: 'ml-pipeline', title: 'ML Pipeline', summary: TBC, tags: [] },
  {
    slug: 'team9-garage-boilerplate',
    title: 'Garage Boilerplate',
    summary: TBC,
    tags: [],
    github: `${GH}/team9-garage-boilerplate`,
  },
  {
    slug: 'team69-cloud-computing',
    title: 'Cloud Computing',
    summary: TBC,
    tags: [],
    github: `${GH}/Team69-cloud-computing`,
  },
  {
    slug: 'kanbango',
    title: 'Kanbango',
    summary:
      'A project and task management API in Go with a schema built for task dependencies, audit history and safe concurrent edits.',
    tags: ['Go', 'Gin', 'PostgreSQL', 'sqlc', 'Docker'],
    github: `${GH}/kanbango`,
    status: 'In progress',
  },
];
