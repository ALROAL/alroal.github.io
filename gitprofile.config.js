// gitprofile.config.js

const config = {
  github: {
    username: 'ALROAL', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 20, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'alroal',
    twitter: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    website: '',
    phone: '',
    email: 'alroal98@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1gDX3D1RPa3CK9yMnsnzYFK2AVvrnLWyG/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Pandas',
    'SQL',
    'PyTorch',
    'TensorFlow',
    'Computer Vision',
    'NLP',
    'Git',
    'Docker',
  ],
  experiences: [
    {
      company: 'Unlimiteck Company Builder, S.L.',
      position: 'Data Scientist Intern',
      from: 'January 2021',
      to: 'June 2021',
      companyLink: 'https://unlimiteck.com/en/',
    },
    {
      company: 'Newborn Solutions, S.L',
      position: 'Data Scientist',
      from: 'February 2023',
      companyLink: 'https://newborn.solutions/',
    }
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Denmark Technical University',
      degree: 'MSc Business Analytics',
      from: '2021',
      to: '2023',
    },
    {
      institution: 'Technical University of Munich',
      degree: 'MSc Business Analytics',
      from: 'Oct 2022',
      to: 'Mar 2023',
    },
    {
      institution: 'Technical University of Madrid',
      degree: 'BSc Organizational Engineering',
      from: '2017',
      to: '2021',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'business',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
