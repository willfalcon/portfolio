// Every word on the page lives here, so copy changes never touch markup.

export const contact = {
  email: 'mailto:willkhawks@gmail.com',
  resume: '/will-hawks-resume.pdf',
  github: 'https://github.com/willfalcon',
  linkedin: 'https://www.linkedin.com/in/will-hawks',
};

export const hero = {
  kicker: 'Open to remote frontend roles',
  title: 'Will Hawks, frontend engineer',
  lead: '9 years building for the web, most recently in React: a futures trading app for Topstep and, before that, Mailchimp’s email editor.',
};

export type Step = { key: string; title: string; body: string; img: string; phone: string; alt: string };

export const mdhs = {
  title: 'Mississippi Department of Human Services',
  lead: 'The state agency’s public site, with about 10 divisions and more than 100,000 visitors a month. I led development and built the theme and block library from scratch, checked against WCAG 2.2 AA.',
  steps: [
    {
      key: 'blocks',
      title: '25+ custom Gutenberg blocks',
      body: 'Editors build pages from blocks that only allow the design system’s options, so new pages stay on brand without a developer.',
      img: '/work/mdhs-blocks.jpg',
      phone: '/work/mdhs-blocks-phone.jpg',
      alt: 'The MDHS contact page: quick help buttons, phone numbers and a list of program accordions',
    },
    {
      key: 'county',
      title: 'County office location search',
      body: 'A Preact block searches MDHS’s Smartsheet data through a WordPress REST endpoint and saves a county’s contacts as a PDF.',
      img: '/work/mdhs-county.jpg',
      phone: '/work/mdhs-county-phone.jpg',
      alt: 'The Find help now panel with Hinds typed into the county search and Hinds offered below it',
    },
    {
      key: 'procurement',
      title: 'Procurement tables from SharePoint',
      body: 'Sortable, exportable tables pulled server-side from the agency’s SharePoint lists.',
      img: '/work/mdhs-procurement.jpg',
      phone: '/work/mdhs-procurement-phone.jpg',
      alt: 'The Open Procurements page with a sortable table of titles, statuses and procurement numbers',
    },
  ] satisfies Step[],
  stack: 'WordPress, PHP, Preact, Sass, WP REST API, Smartsheet and SharePoint APIs',
  live: 'https://www.mdhs.ms.gov/',
};

export const m2l = {
  title: 'Move to Learn TV',
  lead: 'Five-minute movement videos for Mississippi classrooms. I built the whole site, a Next.js frontend over the client’s WordPress video library.',
  points: [
    'Category rows with hover cards that grow in place and stay inside the screen edge.',
    'Debounced search against a custom WordPress endpoint, and favorites for the videos a class repeats.',
    'Every video, tag and curriculum has its own URL, so a teacher can share one link.',
  ],
  stack: 'Next.js, React, styled-components, react-spring, headless WordPress, Sentry',
  live: 'https://www.m2l.tv',
  code: 'https://github.com/cdhq/m2l.tv',
  img: '/work/m2l-home.jpg',
  alt: 'Move to Learn TV: a featured Fitness Break video above a row of top videos on a dark purple page',
};

export const skwahdle = {
  title: 'Skwahdle',
  lead: 'A daily five-letter word game I built for my family. They passed it around until it ran its course; I brought it back online as a work sample.',
  points: [
    { title: 'Daily word from Airtable', body: 'Words are scheduled in a spreadsheet, so a new one needs no deploy.' },
    { title: 'Guesses checked on the server', body: 'A Netlify Function checks each guess against 5,756 words, so the list never reaches the browser.' },
    { title: 'Stats kept through a rewrite', body: 'Moving to Redux Toolkit changed the saved format, so a migration carries old streaks into the new store.' },
  ],
  stack: 'React, Redux Toolkit, styled-components, Netlify Functions, Airtable',
  live: 'https://skwahdle.willhawks.com',
  code: 'https://github.com/willfalcon/skwahdle-cra',
  shots: [
    { img: '/work/skwahdle-board.jpg', alt: 'Skwahdle on a phone after three guesses: crane, pilot and doubt, with A green and L yellow' },
    { img: '/work/skwahdle-invalid.jpg', alt: 'Skwahdle rejecting the guess QZXVJ with the message Are you serious?' },
  ],
};

export type Icon = { src: string; name: string; kind: string; w: number; h: number; ink?: boolean };

const icon = (file: string, name: string, kind: string, w: number, h: number, ink = false): Icon => ({
  src: `/assets/icons/brand/${file}.svg`,
  name,
  kind,
  w,
  h,
  ink,
});

export const icons = {
  react: icon('react', 'React', 'UI library', 40, 36),
  ts: icon('typescript', 'TypeScript', 'Language', 40, 40),
  next: icon('nextjs', 'Next.js', 'Framework', 40, 40),
  vue: icon('vue', 'Vue', 'Framework', 40, 35),
  tailwind: icon('tailwindcss', 'Tailwind', 'Styling', 40, 24),
  sass: icon('sass', 'Sass', 'Styling', 40, 30),
  jest: icon('jest', 'Jest', 'Testing', 36, 40),
  node: icon('nodejs', 'Node.js', 'Runtime', 35, 40),
  graphql: icon('graphql', 'GraphQL', 'API', 36, 40),
  postgres: icon('postgres', 'PostgreSQL', 'Database', 39, 40),
  prisma: icon('prisma', 'Prisma', 'ORM', 33, 40, true),
  wordpress: icon('wordpress', 'WordPress', 'CMS', 40, 40, true),
  expo: icon('expo', 'Expo', 'React Native', 40, 36, true),
  mailchimp: icon('mailchimp', 'Mailchimp', 'Email editor', 38, 40, true),
};

export const clientWork = {
  title: 'Client work at Tensure',
  lead: 'From 2024 to 2026 I worked as a consultant on product teams. The code is private, so here is what I did.',
  more: 'Every role and date since 2016 is on my résumé.',
  rows: [
    {
      name: 'Topstep',
      dates: 'Nov 2025 – Oct 2026',
      body: 'Core engineer on a new React Native and Expo app for futures trading. Set up the routing, built most of the shared component library from the design system, and worked on live price charts.',
      icons: [icons.react, icons.expo, icons.graphql],
    },
    {
      name: 'Todyl',
      dates: 'Jun – Nov 2025',
      body: 'Migrated full features from Vue 2 to Vue 3 and the Composition API.',
      icons: [icons.vue],
    },
    {
      name: 'Mailchimp',
      dates: 'Oct 2024 – Jan 2025',
      body: 'Shipped UX, accessibility and speed fixes in the drag-and-drop email editor.',
      icons: [icons.mailchimp, icons.react],
    },
  ],
};

export const about = {
  title: 'About me',
  body: [
    'I studied journalism, found web work through an SEO job, and spent seven years at Creative Distillery building more than 30 sites for nonprofits, small businesses and state agencies. I can write the PHP and the API, but the interface is the part I want to own.',
    'Away from the screen: woodworking, 3D printing, home automation and a self-hosted home lab.',
  ],
  tools: [
    icons.ts, icons.react, icons.next, icons.vue, icons.tailwind, icons.sass,
    icons.jest, icons.node, icons.graphql, icons.postgres, icons.prisma, icons.wordpress,
  ],
};

export const closing = {
  title: 'Email me about frontend roles',
  line: 'I’m based in Clinton, Mississippi, and looking for a remote frontend role.',
  lede: 'Frontend engineer in Clinton, Mississippi.',
};
