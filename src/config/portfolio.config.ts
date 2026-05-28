// ============================================================
//  PORTFOLIO CONFIG — Edit everything about the site here
// ============================================================

export const PORTFOLIO_CONFIG = {

  // ── Personal ─────────────────────────────────────────────
  personal: {
    name: 'Baljinder Singh',
    title: 'Senior Software Developer',
    subtitle: 'Frontend Engineer',
    tagline: 'Building scalable, configurable, and high-performance frontend systems.',
    intro:
      'I specialize in React, TypeScript, dynamic UI platforms, workflow engines, and enterprise-grade frontend architecture.',
    about: `I'm a frontend-focused software developer who enjoys building complex, scalable, and user-friendly web applications. My work has involved building core modules for enterprise CRM platforms, including configurable entity systems, drag-and-drop layout builders, JSON-driven workflow engines, reusable component libraries, and frontend performance optimizations.`,
    yearsOfExperience: 4,
    location: 'India',
    availability: 'Open to opportunities',
  },

  // ── Contact ───────────────────────────────────────────────
  contact: {
    email: 'baljinder9219@gmail.com',
    linkedin: 'https://www.linkedin.com/in/baljinder-singh-39a5791b6/',
    github: 'https://github.com/baljinder78',
    resumeUrl: '/Baljinder_Singh.pdf',
  },

  // ── Hero terminal lines ───────────────────────────────────
  terminalLines: [
    { prompt: '$', command: 'whoami', output: 'Baljinder Singh — Senior Frontend Engineer' },
    { prompt: '$', command: 'cat expertise.json', output: '["React", "TypeScript", "Micro-Frontend", "Workflow Engines"]' },
    { prompt: '$', command: 'node --version', output: 'v20.12.0' },
    { prompt: '$', command: 'git log --oneline -1', output: 'a3f2c8d  feat: implement dynamic workflow engine' },
    { prompt: '$', command: 'npm run build', output: '✓ Built in 1.42s — 0 errors, 0 warnings' },
  ],

  // ── Navigation ────────────────────────────────────────────
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'What I Build', href: '#highlights' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],

  // ── Experience ────────────────────────────────────────────
  experience: [
    {
      company: 'Veersa Technologies',
      role: 'Senior Software Developer',
      duration: 'Sep 2023 – Present',
      type: 'Full-time',
      current: true,
      color: 'cyan',
      highlights: [
        'Owned major frontend development for a CRM-based enterprise platform across admin and agent portals.',
        'Built Entity Manager — a core module for creating configurable business entities, fields, relationships, and backend-aligned data structures.',
        'Developed Layout Builder — a drag-and-drop configuration system for building dynamic forms, field placements, related entities, table views, and data presentation rules.',
        'Built Form Renderer and Entity Search flows to render Layout Builder JSON configs into usable forms and searchable entity data views.',
        'Designed the core frontend engine for a JSON-driven Workflow module, supporting dynamic rendering, step propagation, and task-based execution.',
        'Worked on an Nx-based micro-frontend architecture with shared UI, API, and Redux store libraries.',
        'Improved performance using code splitting, lazy loading, React optimization, and service-worker-based API caching.',
        'Reduced repeated API calls from 120 to 55 by caching rarely changing frontend route/API responses.',
        'Mentored interns and junior developers; contributed to architecture and implementation planning.',
      ],
      tags: ['React', 'TypeScript', 'Redux Saga', 'Nx', 'Micro-Frontend', 'Tailwind CSS', 'Kendo React'],
    },
    {
      company: "Byju's Exam Prep",
      role: 'Software Engineer',
      duration: 'Jun 2022 – Aug 2023',
      type: 'Full-time',
      current: false,
      color: 'violet',
      highlights: [
        'Built a React and GraphQL-based PWA for faculty doubt-solving operations.',
        'Developed scholarship creation flows and internal operational tools.',
        'Built reusable frontend features to improve maintainability and developer experience.',
        'Implemented Google Tag Manager and CleverTap tracking for analytics.',
      ],
      tags: ['React', 'GraphQL', 'PWA', 'JavaScript', 'GTM'],
    },
    {
      company: "Byju's Exam Prep",
      role: 'Software Engineer Intern',
      duration: 'Aug 2021 – Jun 2022',
      type: 'Internship',
      current: false,
      color: 'blue',
      highlights: [
        'Worked on batch listing, batch creation, pagination, and API integration.',
        'Built internal release-management flows and contributed to core feature development.',
      ],
      tags: ['React', 'JavaScript', 'REST APIs'],
    },
  ],

  // ── Skills ────────────────────────────────────────────────
  skills: [
    {
      group: 'Frontend Core',
      icon: 'Code2',
      color: 'cyan',
      items: ['React.js', 'TypeScript', 'JavaScript', 'Next.js'],
    },
    {
      group: 'State Management',
      icon: 'GitBranch',
      color: 'violet',
      items: ['Redux', 'Redux Saga', 'Context API', 'Zustand'],
    },
    {
      group: 'UI & Styling',
      icon: 'Palette',
      color: 'blue',
      items: ['Tailwind CSS', 'Kendo React', 'Responsive UI', 'Dynamic Forms'],
    },
    {
      group: 'Architecture',
      icon: 'Layers',
      color: 'emerald',
      items: ['Micro Frontend', 'Nx Monorepo', 'Shared Libraries', 'Modular Frontend Architecture'],
    },
    {
      group: 'Performance',
      icon: 'Zap',
      color: 'yellow',
      items: ['Code Splitting', 'Lazy Loading', 'Service Worker Caching', 'React Optimization'],
    },
    {
      group: 'Tools',
      icon: 'Wrench',
      color: 'rose',
      items: ['Git', 'GitHub', 'Jira', 'Azure DevOps', 'Vite'],
    },
  ],

  // ── Engineering Highlights ────────────────────────────────
  highlights: [
    {
      title: 'Dynamic UI Builders',
      icon: 'LayoutDashboard',
      color: 'cyan',
      description:
        'Drag-and-drop layout builders with JSON-driven configuration, supporting dynamic forms, table views, field relationships, and runtime rendering.',
    },
    {
      title: 'Workflow Engines',
      icon: 'GitMerge',
      color: 'violet',
      description:
        'JSON-driven frontend workflow systems with step propagation, conditional branching, task-based execution, and configurable rendering pipelines.',
    },
    {
      title: 'Micro-Frontend Systems',
      icon: 'Layers',
      color: 'blue',
      description:
        'Nx monorepo architectures with shared UI, API, and Redux libraries — enabling independently deployable, scalable, multi-portal enterprise apps.',
    },
    {
      title: 'Performance-Optimized React',
      icon: 'Zap',
      color: 'emerald',
      description:
        'Code splitting, lazy loading, service worker caching, memoization, and API response caching — reducing load time and redundant API calls by 54%.',
    },
  ],

  // ── Projects ──────────────────────────────────────────────
  projects: [
    {
      name: 'Queueless',
      tagline: 'Smarter queue management, shorter wait times.',
      description:
        'Queueless is a queue-management focused application designed to reduce waiting time and improve service flow. It helps users or businesses manage queues more efficiently through a clean, user-friendly interface.',
      problem:
        'Long physical queues cause frustration, inefficiency, and lost time for both customers and service providers.',
      solution:
        'A digital queue management system that allows real-time tracking, position notifications, and efficient service flow control.',
      techStack: ['React.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'REST API'],
      features: [
        'Real-time queue position tracking',
        'Service provider dashboard with queue controls',
        'User notifications and estimated wait times',
        'Clean, mobile-first interface',
      ],
      github: 'https://github.com/baljinder78',
      demo: '#',
      status: 'Personal Project',
      color: 'cyan',
    },
  ],

  // ── Stats ─────────────────────────────────────────────────
  stats: [
    { label: 'Years Experience', value: '3+' },
    { label: 'Performance Optimized', value: '54%' },
    { label: 'Enterprise Modules Built', value: '10+' },
    { label: 'Frontend Systems', value: '5+' },
  ],
} as const;

export type PortfolioConfig = typeof PORTFOLIO_CONFIG;
