export const emailRegexp = /^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\.\w{2,3})+$/;

export const phoneRegExp =
  /^[+]?[(]?[0-9]{2,4}[)]?[-\s.(]*[0-9]{2,3}[)-\s.]*[0-9]{2,6}?[-\s.]?[0-9]{2,6}[-\s.]?[0-9]{0,6}$/;

export const breakpoints = {
  mob: 375,
  tab: 768,
  desk: 1440,
};

export const sectionLinks = [
  {
    link: '#howItWorks',
    text: 'How does it work?',
  },
  {
    link: '#whyMe',
    text: 'Why me?',
  },
  {
    link: '#whatMyClientsSay',
    text: 'What my clients say',
  },
  {
    link: '#clients',
    text: 'Clients',
  },
  {
    link: '#myService',
    text: 'My service',
  },
  {
    link: '#contact',
    text: 'Contact me',
  },
];

export const howItWorks = [
  {
    number: '01',
    title: 'Evaluation of...',
    perks: [
      'your current level',
      'your strong and weak points in learning',
      'your professional and private needs',
    ],
  },
  {
    number: '02',
    title: 'You get...',
    perks: [
      'personal learning program',
      'achievement of your goals within the deadline',
    ],
  },
  {
    number: '03',
    title: 'Result...',
    perks: [
      'satisfaction of a learning process',
      'achievement of your goals',
      'self-esteem',
      'confidence and language fluency',
    ],
  },
];

const titleAnimation = {
  initial: {
    y: 150,
    opacity: 0.3,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
};

export const titleAnimationConfig = {
  variants: titleAnimation,
  initial: 'initial',
  whileInView: 'animate',
  viewport: { once: true },
};

export const defaultAnimation = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: (idx = 0) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.1 * idx, type: 'spring' },
  }),
};

export const animationSettings = {
  variants: defaultAnimation,
  whileInView: 'animate',
  initial: 'initial',
  viewport: { once: true },
};
