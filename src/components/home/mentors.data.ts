import type { Mentor } from '@/interfaces/mentor'

export const data: Array<Mentor> = [
  {
    id: 1,
    photo: '/images/TestrunzMypage.png',
    name: 'AI-based Experimentation',
    category: 'Unleashing the Power of Product Decisions',
    description:
      'At Twinmo, we have taken the hassle out of the experimentation process. Testrunz offers a seamlessly integrated hardware and software solution, eliminating setup time and enhancing productivity.',
    company: {
      name: 'Grab',
      logo: '/images/companies/grab.png',
    },
  },
  {
    id: 2,
    photo: '/images/Industry.png',
    name: 'Embrace the Future',
    category: 'Product Testing with Twinmo Testrunz',
    description:
      'Our innovative all-in-one solution revolutionizes the way industries approach experimentation and product development. With Testrunz, you can access your test runs from anywhere.',
    company: {
      name: 'Google',
      logo: '/images/companies/google.png',
    },
  },
  {
    id: 3,
    photo: '/images/Report.png',
    name: 'Nguyễn Thuy',
    category: 'Android Development',
    description:
      'With seamless integration test instruments, Testrunz provides real-time data analysis and generates comprehensive reports, enabling you to stay on top of your experiments effortlessly.',
    company: {
      name: 'Airbnb',
      logo: '/images/companies/airbnb.png',
    },
  },
  {
    id: 4,
    photo: '/images/Discover.png',
    name: 'Rizki Known',
    category: 'Fullstack Development',
    description:
      'Twinmo Testrunz brings the power of AI and structured experimentation to product development, transforming the processes of discovery, compliance testing, and manufacturing.',
    company: {
      name: 'Microsoft',
      logo: '/images/companies/microsoft.png',
    },
  },
]
