import bytebite from './bytebite.png';
import thread from './thread.jpg';

export const projects = [
  {
    title: 'TrailMate',
    category: 'AI / Campus discovery',
    dates: 'Feb. 2026',
    description: 'Tell TrailMate what you want to do on campus, and it suggests activities and a route. I built it at HenHacks 2026 using Gemini and Snowflake.',
    highlights: [
      'Designed Snowflake SQL aggregations and weighted scoring models to rank activities using real-time user data.',
      'Built a Node.js backend with modular authentication, routing, and data pipelines deployed on DigitalOcean.',
    ],
    technologies: ['HTML/CSS', 'JavaScript', 'Node.js', 'Supabase', 'Snowflake', 'Google Gemini', 'DigitalOcean'],
    demo: 'https://trailmate.tech/',
    award: 'Best use of Snowflake API · HenHacks 2026',
  },
  {
    title: 'ByteBite',
    category: 'AI / Campus dining',
    dates: 'Nov. 2025',
    description: 'A dining app that helps RPI students find meals that fit their dietary needs. I worked on turning messy Sodexo menu data into recommendations using Gemini.',
    highlights: [
      'Engineered a schema-inference parser for 20+ dynamic menu formats, connecting daily inventory to a Gemini recommendation engine.',
      'Recognized by a Google Cloud engineer as a standout project at a hackathon with 400+ participants for scalability and real-world impact.',
    ],
    technologies: ['React', 'JavaScript', 'Node.js', 'Google Gemini', 'GitHub', 'Render'],
    demo: 'https://bytebites.tech',
    github: 'https://github.com/TheByteGuy/bytebite',
    image: bytebite,
    award: 'Best Data Science Hack · HackRPI 2025',
  },
  {
    title: 'The Thread',
    category: 'Open source / Editorial platform',
    dates: 'Jan. 2025 – Present',
    description: 'An online student publication I work on through RCOS. Our six-person team is building a place for stories, photos, and campus coverage for RPI’s 6,000+ undergraduates.',
    highlights: [
      'Implemented core React components backed by MongoDB and AWS S3, optimizing dynamic rendering of high-resolution editorial media and articles.',
      'Collaborate with a six-person agile team, using peer reviews and automated CI/CD pipelines to maintain code quality and 99.9% uptime for 6,000+ users.',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'AWS S3', 'Axios', 'Vercel'],
    github: 'https://github.com/thread-rpi',
    demo: 'https://needle-ui.vercel.app/',
    image: thread,
  },
];
