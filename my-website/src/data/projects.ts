import bytebite from './bytebite.png';
import thread from './thread.jpg';

export const projects = [
  {
    title: 'Litter-ally Trash',
    category: 'AI / Accessible robotics',
    dates: 'Oct. 2026',
    description: 'An AI-powered trash bin on wheels that makes waste disposal more accessible. Built in 36 hours at Cornell BigRed//Hacks, it won Best Hardware Hack and placed in the top 4 of 58 teams.',
    highlights: [
      'Developed an OpenAI CLIP ViT-L/14 vision system that distinguishes trash from recyclables in a live video feed and automatically opens the corresponding bin lid.',
      'Integrated hand-gesture, voice, and keyboard controls with a Raspberry Pi and Arduino-powered Mecanum drive base for omnidirectional steering from phones and laptops.',
    ],
    technologies: ['Python', 'OpenAI CLIP', 'CUDA', 'Raspberry Pi', 'Arduino'],
    award: 'Best Hardware Hack · Cornell BigRed//Hacks',
    overview: {
      event: 'Cornell BigRed//Hacks 2026',
      tagline: 'Accessible disposal, powered by AI.',
      features: [
        { title: 'Sort waste', detail: 'Live computer vision + automatic bin lids' },
        { title: 'Steer your way', detail: 'Hand gestures, voice, and keyboard controls' },
      ],
    },
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
    dates: 'Jan. 2025 – May 2025',
    description: 'An editorial platform I helped build through the Rensselaer Center for Open Source. Our six-person team developed a place for stories, photos, and campus coverage designed to serve thousands of undergraduates.',
    highlights: [
      'Implemented core React components backed by MongoDB and AWS S3, optimizing dynamic rendering of high-resolution editorial media and articles.',
      'Collaborated with a six-person agile team, using rigorous peer reviews and automated CI/CD pipelines to maintain code quality and uptime.',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'AWS S3', 'Axios', 'Vercel'],
    github: 'https://github.com/thread-rpi',
    demo: 'https://needle-ui.vercel.app/',
    image: thread,
  },
];
