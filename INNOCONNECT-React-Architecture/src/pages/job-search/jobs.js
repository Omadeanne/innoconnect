const jobs = [
  {
    id: 1,
    title: 'Software Developer',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quia.',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    company: 'MTN',
    site: 'Hybrid',
    date: '2022-01-01',
    companyLogo: null, // './assets/mtn.png',
    salary: '10,000 - 20,000',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 2,
    title: 'UI/UX designer',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quia.',
    location: 'Lagos, Nigeria',
    type: 'Part-time',
    site: 'Remote',
    company: 'Airtel',
    date: '2022-01-01',
    companyLogo: null, //'./assets/airtel.png',
    salary: '10,000 - 20,000',
    skills: ['UI/UX', 'Prototyping', 'Wireframing'],
  },
  {
    id: 3,
    title: 'Frontend Developer',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quia.',
    location: 'Lagos, Nigeria',
    type: 'contract',
    site: 'On-site',
    company: 'Fliqpay ',
    date: '2023-11-09',
    companyLogo: null,  // './assets/flutter.jpg'
    salary: '10,000 - 20,000',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 4,
    type: 'contract',
    title: 'Data Scientist',
    companyLogo: null, // './assets/airtel.png',
    company: 'Insights Analytics Ltd.',
    location: 'Seattle, WA',
    salary: '$120,000 - $140,000',
    description:
      'Join our data science team to work on cutting-edge projects using machine learning and data analysis...',
    site: 'On-site',
    skills: ['Python', 'Machine learning', 'Data analysis'],
    requirements: [
      "Master's or PhD in a relevant field",
      'Experience with Python and data science libraries',
      'Strong analytical and problem-solving skills',
    ],
    date: '2023-01-17',
  },
];

export default jobs;
