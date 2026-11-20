// Longer write ups shown in the project pop-up, keyed by project slug.
// Plain wording, only what is actually built.

export interface DetailSection {
  title: string;
  points: string[];
}

export interface ProjectDetails {
  overview: string[]; // one or two short paragraphs
  sections: DetailSection[];
  stack: string[];
  learned?: string;
  note?: string; // status or context worth stating plainly
}

export const PROJECT_DETAILS: Record<string, ProjectDetails> = {
  'ibm-consulting-game': {
    overview: [
      'Consultancy 101 is an AI powered consulting simulation built as a 2D RPG style game. It is designed to help junior and graduate consultants build their skills.',
      'It was my RMIT capstone project, built for IBM as the industry client.',
    ],
    sections: [
      {
        title: 'My role',
        points: [
          'Project manager for a team of five',
          'Owned all communication with the IBM client and every project management duty',
          'Contributed as a developer alongside managing the project',
          'Set up the separate demo repository, the Firebase project and the Vercel deployment for the showcase',
          'Led the team through an industry showcase event organised with IBM, RMIT, Microsoft, Amazon, Telstra, NBN and the Grand Prix',
        ],
      },
    ],
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Phaser',
      'Firebase Authentication',
      'Firestore',
      'Groq (LLM)',
      'Vercel',
      'pnpm',
      'Vitest',
      'GitHub Actions',
    ],
  },

  parsify: {
    overview: [
      'Most extraction tools are built for one document type. In Parsify the schema is just data. A user uploads a document, picks or creates a schema, and gets exactly those fields back as structured JSON.',
      'The same engine works for an invoice today and a medical referral tomorrow with no code changes. I built it end to end, from the database through to cloud deployment.',
    ],
    sections: [
      {
        title: 'How it works',
        points: [
          'The backend fetches the uploaded file from S3 and builds a precise prompt from the chosen schema',
          'Claude extracts the requested fields and the result is validated',
          'Each result gets a confidence score based on how many fields were found, then is stored in PostgreSQL',
        ],
      },
      {
        title: 'Highlights',
        points: [
          'JWT authentication with bcrypt hashing and per user data isolation',
          'Private S3 storage with presigned URLs plus file type and size checks',
          'Prompts that enforce JSON only output, ISO 8601 dates and numeric amounts',
          'A service layer that lets the LLM provider change without touching the API routes',
          'Frontend migrated from JavaScript to TypeScript with types that mirror the backend',
          'Multi stage Docker build served through Nginx in production',
          '25 backend tests and frontend tests running on every push with GitHub Actions',
        ],
      },
    ],
    stack: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'React Query', 'Python', 'FastAPI', 'SQLAlchemy', 'Alembic', 'Pydantic', 'PostgreSQL', 'Claude API', 'Docker', 'AWS EC2', 'S3', 'RDS', 'Nginx', 'pytest', 'Vitest', 'GitHub Actions'],
    note: 'The live app is offline to save hosting costs. The code is on GitHub.',
  },

  forge: {
    overview: [
      'Running an open model keeps data private and costs predictable, but a raw model server has none of what a real API provides. Forge is that missing layer.',
      'It puts a self hosted Llama model behind an OpenAI compatible API, with keys, rate limits, safety checks and usage tracking for each client. It is aimed at settings where prompts cannot leave the network.',
    ],
    sections: [
      {
        title: 'How a request flows',
        points: [
          'Authentication with API keys that are hashed with SHA256 and never stored raw',
          'Rate limiting with a per client token bucket in Redis, run as an atomic Lua script',
          'Prompt risk detection that blocks high risk requests before they cost any compute',
          'Inference through Ollama running Llama 3.2, switchable to vLLM with one setting',
          'Usage metering that records every request with tokens, latency and status',
        ],
      },
      {
        title: 'Highlights',
        points: [
          'Atomic rate limiting that avoids the race condition in a simple counter approach',
          'Found and fixed a connection pool problem under a 25 request load test',
          'Risk detection described honestly as policy enforcement rather than a guarantee',
          'Alembic migrations and a test suite covering auth, proxying, risk detection and metering',
        ],
      },
      {
        title: 'Known limits and roadmap',
        points: [
          'Ollama runs CPU only inside Docker on Apple Silicon, so local responses are slow',
          'Risk detection is rule based rather than a trained classifier',
          'Next: streaming, Prometheus and Grafana, an admin dashboard and a GPU backed vLLM deployment',
        ],
      },
    ],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'Redis', 'Lua', 'Ollama', 'Docker', 'pytest', 'GitHub Actions'],
  },

  'smart-inventory': {
    overview: [
      'A full stack warehouse platform for hospitality suppliers. It tracks stock across crockery, cups and equipment, manages inbound deliveries and predicts when products will run out so staff can reorder in time.',
    ],
    sections: [
      {
        title: 'What it does',
        points: [
          'Inventory management with a full stock movement history and reorder alerts',
          'Delivery tracking with a set status flow, where marking a delivery as delivered updates stock',
          'Demand forecasting with XGBoost that predicts the stockout date and a reorder quantity',
          'Anomaly detection with Isolation Forest to flag unusual stock movements',
          'An analytics dashboard for stock, deliveries and 30 day trends',
          'Role based access for admins, warehouse staff and drivers',
        ],
      },
      {
        title: 'Engineering highlights',
        points: [
          'Layered FastAPI backend on PostgreSQL with Alembic migrations',
          'Forecasts cached in Redis and heavy ML work handled by Celery workers',
          '60 automated tests running on every push with GitHub Actions',
          'Docker Compose locally plus Kubernetes manifests tested on minikube',
        ],
      },
    ],
    stack: ['FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Redis', 'Celery', 'XGBoost', 'scikit-learn', 'React', 'TypeScript', 'Vite', 'TailwindCSS', 'Docker', 'Kubernetes', 'GitHub Actions', 'pytest'],
  },

  loanflow: {
    overview: [
      'LoanFlow models how a bank handles loan applications, from submission through to officer review. I built it to learn the Java enterprise stack used by large Australian banks and insurers, with a real workflow engine rather than hand written workflow logic.',
    ],
    sections: [
      {
        title: 'What it does',
        points: [
          'Applicants register, log in and submit loan applications through a REST API',
          'Each submission is saved to PostgreSQL and starts a live Camunda process',
          'Stateless JWT authentication with BCrypt password hashing',
          'Three roles enforced at each endpoint: applicant, loan officer and admin',
          'Database schema managed with Flyway alongside Camunda’s own tables',
        ],
      },
      {
        title: 'Key decisions',
        points: [
          'Camunda chosen because it is the workflow engine commonly used for this in industry',
          'Flyway from the first commit so the schema is versioned in git',
          'Clear layers for controllers, services, repositories and DTOs',
        ],
      },
    ],
    stack: ['Java 17', 'Spring Boot 3', 'Spring Security', 'Spring Data JPA', 'Camunda BPM 7', 'PostgreSQL', 'Flyway', 'Maven', 'Docker Compose'],
    learned:
      'Debugging real integration problems, including a Postgres port conflict, Camunda history cleanup and getting Flyway to work with a database Camunda had already set up.',
    note: 'In progress. Next up: officer review endpoints, Kafka notifications, integration tests with Testcontainers and CI.',
  },

  'clickstream-pipeline': {
    overview: [
      'An event driven data pipeline. A Python simulator publishes realistic web traffic to Kafka, three independent consumers turn it into raw logs, live session state and 60 second metrics, and a dashboard shows the results live.',
      'It is the streaming counterpart to my batch Retail Analytics Pipeline.',
    ],
    sections: [
      {
        title: 'Highlights',
        points: [
          'Events partitioned by session so each session stays in order',
          'At least once delivery with safe writes, so replays after a crash do not double count',
          'Separate consumer groups that scale and restart independently',
          'Simple Python windowing for 60 second metrics',
          'Kafka in KRaft mode with no Zookeeper',
          'A WebSocket for live metrics and plain REST for the sessions table',
        ],
      },
    ],
    stack: ['Apache Kafka', 'Python', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'FastAPI', 'React', 'TypeScript', 'TailwindCSS', 'Vite', 'Docker Compose'],
    learned:
      'Topics, partitions, consumer groups and offsets in practice, windowed aggregation and keeping consumers correct across crashes and restarts.',
  },

  'ml-pipeline': {
    overview: [
      'A machine learning pipeline that takes YouTube video data and predicts the average number of views a video gets per day.',
    ],
    sections: [
      {
        title: 'How it works',
        points: [
          'Loads video data from a database',
          'Cleans the data and converts video length into minutes',
          'Works out views per day and engagement metrics',
          'Log transforms the target so very popular videos do not skew the model',
          'Trains and compares three models and saves the best one',
        ],
      },
      {
        title: 'Features',
        points: ['Video length', 'Days since upload', 'Number of likes', 'Comment ratio'],
      },
      {
        title: 'Models',
        points: [
          'Linear Regression, Random Forest and Gradient Boosting',
          'Compared using MAE, RMSE and R²',
          'Gradient Boosting is saved as the final model',
        ],
      },
    ],
    stack: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'Matplotlib', 'joblib'],
  },

  'team69-cloud-computing': {
    overview: [
      'A music subscription web app built on AWS as a university group project. Users register, log in, search a song catalogue and subscribe to or unsubscribe from songs.',
      'Most of the work went into running the same Java backend three different ways to compare AWS compute options.',
    ],
    sections: [
      {
        title: 'Three ways to run it',
        points: [
          'EC2: a plain Java HTTP server',
          'ECS: the same server packaged in a Docker container',
          'Lambda: a serverless version with a router and one handler per action, behind API Gateway',
        ],
      },
      {
        title: 'How it works',
        points: [
          'Frontend in plain HTML, CSS and JavaScript with login, register and main pages',
          'Songs and users stored in DynamoDB, with indexes on the music table for search',
          'Artist images stored in S3',
          'Setup tools that create the tables and buckets, load the song data and upload the images',
        ],
      },
    ],
    stack: ['Java', 'AWS Lambda', 'API Gateway', 'DynamoDB', 'S3', 'ECS', 'EC2', 'Docker', 'HTML', 'CSS', 'JavaScript'],
  },

  'retail-analytics-pipeline': {
    overview: [
      'A simulated online store keeps its data in three systems that do not talk to each other: a live database, a legacy system that exports daily CSV files and a shipping partner API. This pipeline joins them automatically so simple business questions get answered.',
    ],
    sections: [
      {
        title: 'How it works',
        points: [
          'Extract and load: data from all three sources lands untouched in a separate warehouse',
          'Transform: dbt cleans the data and builds a star schema with dimension and fact tables',
          'Test: 43 dbt tests check uniqueness, nulls and relationships',
          'Orchestrate: an Airflow job runs every step daily with retries',
          'Serve: a FastAPI service powers a React dashboard of revenue, products and regions',
        ],
      },
      {
        title: 'Challenges',
        points: [
          'Airflow and dbt dependency clashes, solved by running dbt in its own environment',
          'Container networking, solved with configurable hosts instead of localhost',
          'Library versions without Python 3.13 support, diagnosed and updated',
        ],
      },
    ],
    stack: ['PostgreSQL', 'dbt', 'Apache Airflow', 'Python', 'FastAPI', 'SQLAlchemy', 'Faker', 'React', 'TypeScript', 'Vite', 'TailwindCSS', 'Recharts', 'Docker Compose'],
    note: 'All data is synthetic and the business is simulated.',
  },

  kanbango: {
    overview: [
      'A backend for managing projects and tasks, built to practise production patterns in Go rather than simple CRUD. The data model covers project roles, task dependencies and an audit log of every change.',
    ],
    sections: [
      {
        title: 'Design decisions',
        points: [
          'SQL written by hand and compiled into typed Go code with sqlc',
          'Versioned schema migrations with golang migrate',
          'UUID keys and time zone aware timestamps throughout',
          'Deliberate delete rules so history survives when users or tasks are removed',
          'A version column on tasks for safe concurrent edits',
        ],
      },
    ],
    stack: ['Go', 'Gin', 'PostgreSQL 16', 'pgx', 'sqlc', 'golang migrate', 'Docker Compose'],
    note: 'In progress. The schema, migrations and data layer are complete. Next up: authentication, task endpoints, dependency cycle checks and CI.',
  },
};
