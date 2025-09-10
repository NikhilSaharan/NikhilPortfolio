import healthmugLogo from './assets/download.jpg';

export const services = [
    {
        title: "Technology Enthusiast",
        icon: 'https://csgeeek.github.io/web.png',
    },
    {
        title: "Software Engineer",
        icon: 'https://csgeeek.github.io/web.png',
    },
    {
        title: "Swimmer",
        icon: 'https://csgeeek.github.io/web.png',
    },
];

export const name = 'Nikhil Kumar';

export const experiences = [
    {
        'company': 'HealthMug Private Limited',
        'role': 'Software Developer',
        'duration': 'Aug 2025 - Present',
        'logo': healthmugLogo, // HealthMug logo
        'logoSrc': 'https://images.app.goo.gl/68wGowkGLWcY5y986',
        'points': [
            ' Developed backend services in ASP.NET Core for the Franchisee Admin module, enabling real-time management of store locations, doctor schedules, and workforce operations.',
            ' Optimized Entity Framework queries and implemented clean architecture to improve API performance and maintainability across franchisee operations.',
            'Ensured secure and scalable delivery using RESTful APIs, automated testing, and CI/CD pipelines for faster,reliable deployments.',
        ],
        'url': 'https://www.healthmug.com',
    },

    {
        'company': 'SoftSynth Software Solutions',
        'role': 'Junior Software Developer',
        'duration': 'Mar 2024 - Aug 2024',
        'logo': 'https://media.licdn.com/dms/image/C560BAQGZ1BmJAedR2A/company-logo_200_200/0/1639371530480?e=2147483647&v=beta&t=4J_qLy7bFdEnP6y3buD2eJgAYb65obLrsnfXozhlFE8',
        'logoSrc': 'https://images.app.goo.gl/68wGowkGLWcY5y986',
        'points': [
            ' Developed a robust E-commerce platform, improving operational efficiency by 35tracking and payment modules built with ASP.NET Core and Entity Framework.',
            '  Developed and maintained scalable web applications using ASP.NET Core (C#) on the backend and React.js on the frontend.',

        ],
        'url': 'https://softsynthsoftware.com/',
    },
    {
        'company': 'Codsoft Pvt. Ltd.',
        'role': 'Frontend Developer Intern',
        'duration': 'Sept 2023 - Oct 2023',
        'logo': 'https://media.licdn.com/dms/image/v2/D560BAQHDmIfYA5sY7w/company-logo_200_200/company-logo_200_200/0/1685777115831?e=2147483647&v=beta&t=BrbAEJ0lciXi69uR0VBVOdOGHno8XzclslDmxrVYaNI',
        'points': [
            ' Developed & maintained web applications using HTML, CSS, and JavaScript. Collaborated with cross-functional teams to gather requirements and implement design changes.',
            'Collaborated with cross-functional teams to optimize requirement gathering methods, leading to a 15% decrease in time spent. ',
            'Technologies Used: HTML, CSS, JavaScript',

        ],
        'url': 'https://www.codsoft.in/',
    },
    {
        'company': 'Infotrixs Pvt. Ltd.',
        'role': 'Frontend Developer Intern',
        'duration': 'Aug 2023 - Sept 2023',
        'logo': 'https://media.licdn.com/dms/image/v2/D4D0BAQEOgqOJ89to1w/company-logo_200_200/company-logo_200_200/0/1687286850731?e=2147483647&v=beta&t=j8yo5B-DkPPN-zmnGEOfVAJMcNo9DqAGQNuNFCtuS-E',
        'points': [
            ' Developed & maintained web applications using HTML, CSS, and JavaScript. Collaborated with cross-functional teams to gather requirements and implement design changes.',
            'Collaborated with cross-functional teams to optimize requirement gathering methods, leading to a 15% decrease in time spent. ',
            'Technologies Used: HTML, CSS, JavaScript',

        ],
        'url': 'https://www.infotrixs.in/',
    },
];



export const EMAIL_JS_SERVICE_ID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
export const EMAIL_JS_TEMPLATE_ID = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
export const EMAIL_JS_PUBLIC_KEY = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;
