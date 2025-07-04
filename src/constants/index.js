export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Projects',
        href: '#projects',
    },
    {
        id: 4,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Samuel Joseph, Frontend Engineer',
        position: 'Freelance Collaborator',
        img: 'assets/review.webp',
        review:
            'Working alongside Khathir was both inspiring and productive. He is incredibly resourceful, quick to find solutions. His attention to detail and his ability to keep projects moving forward made him an essential part of the team.',
    },
    {
        id: 2,
        name: 'Engr. AbdulRasheed Babatunde',
        position: 'Managing Director of Rasmore GSL',
        img: 'assets/review.webp',
        review:
            'Khathir brought new life into our operations at Rasmore. He led the transition from paper-based workflows into a full digital systems, including a new website and internal project tools. He was also able to deliver quality works to our software asking clients which made him a vital part of the company.',
    },
    {
        id: 3,
        name: 'AbdulQodir Olamilekan',
        position: 'Repeat CLient - Freelance',
        img: 'assets/review.webp',
        review:
            'I`ve hired Khathir multiple times on Web3 projects, and each time he delivers clean, reliable solutions. He communicates clearly, meets deadlines, and suggest working improvements. ',
    },
    {
        id: 4,
        name: 'Mr Musta`an',
        position: 'Technical Program Supervisor - Omega TI (Training program)',
        img: 'assets/review.webp',
        review:
            'Among all trainees, Khathir demonstrated rare initiative and clarity of thought. His final project exceeded all expectations, showing both strong technical execution and a clear understanding of users needs. He is well-prepared for any real-world tech challenge',
    },
];

export const myProjects = [
   
    {
        title: 'Writhub - Real-Time Google Docs Clone',
        desc: 'Writhub is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It can support millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
        subdesc:
            'With Writhub, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
        href: 'https://writhub.vercel.app/',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/project-logo2.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5.4, 6.5, 0] : isTablet ? [7, 5, 0] : [11.2, 5, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Freelance',
        pos: 'Software Developer & Technical Consultant',
        duration: '2023 - Present',
        title: "Delivered full-stack web solutions for various clients, including websites, admin dashboards, and custom tools using React, Next.js, Node.js, and Firebase. Projects involved API integration, authentication systems, cloud deployment with consulting on tech strategy and architecture.",
        icon: '/assets/review.webp',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Rasmore GSL',
        pos: 'Technical Consultant & Software Developer',
        duration: '2021 - 2023',
        title: "Led the company's digital upgrade by building it's website, creating tailored software tools for client needs, and integrating systems like Google Workspace and WhatsApp Business API to enhance internal workflows, project tracking, and communication",
        icon: '/assets/rasmore.webp',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Omega TI',
        pos: 'Technical Trainee',
        duration: '2020 - 2021',
        title: "Compeleted a project-based technical training program focused on practical software development. Built functional applications from planning to deployment, applying real-world development practices and earning certification upon completion",
        icon: '/assets/omega.webp',
        animation: 'salute',
    },
];