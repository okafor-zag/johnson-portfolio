export const personal = {
  name: "Johnson Okafor",
  fullName: "Okafor Johnson Chukwuemeka",
  title: "Frontend | Website Developer & UI/UX Designer",
  tagline: "I build websites, design experiences, and tell stories through code.",
  bio: "I'm a Lagos-based frontend | website developer, UI/UX designer, graphics designer, and technical writer with 4+ years of hands-on experience. I turn complex ideas into clean, fast, beautiful digital products — from pixel-perfect Figma prototypes to fully functional WordPress and React websites. When I'm not at the screen designing or coding, I'm gaming and building my streaming presence.",
  location: "Lagos, Nigeria",
  email: "johnsonzagazor06@gmail.com",
  phone: "+2348122458421",
  links: {
    github: "https://github.com/okafor-zag",
    linkedin: "https://www.linkedin.com/in/johnson-okafor-9a9b131b2/",
    medium: "https://medium.com/@johnsonzagazor06",
    tiktok: "https://www.tiktok.com/@afingamer01",
    youtube: "https://www.youtube.com/@Afin-Gamer01/featured",
    portfolio: "https://updated-portfolio-eea71.web.app/#/",
  },
};

export const skills = {
  design: ["Figma", "Adobe XD", "Canva", "Photoshop", "Adobe Illustrator", "InDesign", "Wireframing", "Prototyping", "Design Systems", "Usability Testing"],
  development: ["React.js", "Vue.js", "HTML5", "CSS3", "JavaScript ES6+", "WordPress", "Elementor", "jQuery", "RESTful APIs", "Git/GitHub"],
  other: ["Technical Writing", "UI/UX Design", "Responsive Design", "Mobile-First", "Agile Workflows", "Mentorship & Teaching"],
};

export const experience = [
  {
    role: "Lead UI/UX & Graphics Designer",
    company: "TavCorp",
    period: "December 2025 – Present",
    current: true,
    bullets: [
      "Designed and structured modern, user-focused web interfaces while mentoring junior designers and developers on design principles and development workflows.",
      "Developed reusable components and scalable templates, implementing best practices in frontend architecture and responsive design.",
      "Led usability testing initiatives and iterative enhancements, strengthening human-computer interaction and overall user experience.",
      "Contributed to internal documentation and design systems to promote knowledge sharing, consistency, and technical clarity across teams.",
    ],
  },
  {
    role: "UI/UX Designer & Web Designer",
    company: "SmartbloksAI",
    period: "June 2023 – Present",
    current: true,
    bullets: [
      "Designed over 100 website templates and blocks compatible with modern design systems, responsive across all devices.",
      "Led the design process from user flows to wireframes, UI mockups, and design systems for website templates and dashboards.",
      "Conducted usability testing and iterated on feedback to improve user flows, interactions, and overall user satisfaction.",
      "Collaborated closely with frontend and backend developers to ensure accurate implementation and design fidelity across products.",
    ],
  },
  {
    role: "Web Developer / Graphics & UI Designer",
    company: "Ideastosite (ITS)",
    period: "September 2023 – Present",
    current: false,
    bullets: [
      "Developed and maintained responsive WordPress websites using Elementor and custom HTML, CSS and JavaScript for tailored client needs.",
      "Built interactive UI components and translated complex design concepts into pixel-perfect, cross-browser-compatible web interfaces.",
      "Partnered with backend developers to ensure cohesive design and technical implementation with strong emphasis on usability and accessibility.",
      "Conducted usability testing and feedback analysis, ensuring user-friendly experiences and streamlined editor workflows.",
    ],
  },
  {
    role: "Computer & Digital Technology Instructor",
    company: "Abridged Summer School Digital Training Camp",
    period: "August 2020 – September 2024",
    current: false,
    bullets: [
      "Delivered structured training in web development and digital skills covering HTML, CSS, JavaScript, UI/UX principles, and practical computer usage.",
      "Designed and facilitated hands-on, project-based learning sessions, guiding students to build real websites and digital projects.",
      "Mentored students on the effective use of code editors, browsers, design tools (Figma, Canva), and productivity applications.",
      "Assessed student progress through practical exercises, mini-projects, and continuous feedback, improving technical accuracy and creativity.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "AltSchool Africa",
    period: "April 2022 – May 2023",
    current: false,
    bullets: [
      "Built and maintained websites using React.js, Vue.js, HTML, CSS and JavaScript, ensuring responsive, accessible, cross-browser-compatible results.",
      "Assisted in performance optimisation and bug fixing, contributing to smooth integration of frontend components into larger systems.",
      "Collaborated with design and development teams to maintain design consistency and improve usability across projects.",
      "Focused on enhancing user experience through feedback-driven design updates and cross-browser compatibility improvements.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "HNG Internship",
    period: "September 2021 – March 2022",
    current: false,
    bullets: [
      "Developed a responsive Vue.js single-page application that contributed to a 40% increase in user sign-ups.",
      "Enhanced JavaScript and CSS functionality to improve usability, frontend performance, and overall user experience.",
      "Documented coding standards and style guidelines to keep the design consistent and scalable across the team.",
      "Assisted team members and managers with tasks to maintain productivity and meet project milestones.",
    ],
  },
];

export const figmaProjects = [
  { id: 1, title: "Smartbloks SaaS Platform", category: "SaaS · UI/UX Design", description: "Full settings and function UI for the Smartbloks SaaS platform — dashboards, user flows, component libraries and interactive states.", tags: ["Figma", "SaaS", "Dashboard", "Design System"], link: "https://www.figma.com/design/QSPa6BolAZtnTjPY4fEWxA/smartbloks?node-id=1-4917&t=okGdYknj5CFtCQXF-1", color: "#1a2040", accent: "#6c63ff", images: [require('../assets/designs/smartblok1.png'), require('../assets/designs/smartblok2.png'), require('../assets/designs/smartblok3.png'), require('../assets/designs/smartblok4.png')]},

  { id: 2, title: "Smartbillr — AI Invoice Generator", category: "SaaS · Product Design", description: "End-to-end design for an AI-powered billing SaaS — receipt generation flows, invoice templates, client dashboards, and payment UX.", tags: ["Figma", "AI Product", "FinTech", "SaaS"], link: "https://www.figma.com/design/iMpl8x50ptBoyw4EOlBFlc/Smartbillr?node-id=45-3&t=vtWMjHZHbD4strdr-1", color: "#0d2137", accent: "#00c9a7", images: [require('../assets/designs/smartblok5.png'), require('../assets/designs/smartblok6.png'), require('../assets/designs/smartblok7.png'), require('../assets/designs/smartblok8.png'), require('../assets/designs/smartblok9.png')] },

  { id: 3, title: "Tatoo Artiste — Website Template", category: "Template Design", description: "A clean, modern website template designed for Smartbloks — responsive, multi-section, built with a structured design system.", tags: ["Figma", "Template", "Smartbloks"], link: "https://www.figma.com/design/mcbYOP5cTkWKFkUjP4cahD/Web-temp-Design-2-?node-id=54-925&t=r0NTEWmzy52gMNs7-1", color: "#1a2e1a", accent: "#4caf50", images: [require('../assets/designs/smartblok10.jpg'), require('../assets/designs/smartblok11.png'), require('../assets/designs/smartblok12.png'), require('../assets/designs/smartblok13.png')]},

  { id: 4, title: "Web Template Series — Travel Agency", category: "Template Design", description: "Homepage layout from the 100+ screen Smartbloks web template series — bold hero, structured sections, mobile-first.", tags: ["Figma", "Template", "Smartbloks"], link: "https://www.figma.com/design/mcbYOP5cTkWKFkUjP4cahD/Web-temp-Design-2-?node-id=54-1402&t=3Hxobhp7XtXIoY6L-1", color: "#2a1a30", accent: "#e040fb", images: [require('../assets/designs/smartblok14.jpg'), require('../assets/designs/smartblok15.png'), require('../assets/designs/smartblok16.png'), require('../assets/designs/smartblok17.png')]},

  { id: 5, title: "Web Template Series — Footwear Store", category: "Template Design", description: "Features section layout with pricing and testimonials from the Smartbloks multi-industry template library.", tags: ["Figma", "Template", "Smartbloks"], link: "https://www.figma.com/design/mcbYOP5cTkWKFkUjP4cahD/Web-temp-Design-2-?node-id=57-3677&t=3Hxobhp7XtXIoY6L-1", color: "#1a1a2e", accent: "#3d9be9", images: [require('../assets/designs/smartblok18.jpg'), require('../assets/designs/smartblok19.png'), require('../assets/designs/smartblok20.png'), require('../assets/designs/smartblok21.png')]},

  { id: 6, title: "Web Template Series — Barbers Shop", category: "Template Design", description: "Services and portfolio section layout — clean grid, strong typography, conversion-focused design.", tags: ["Figma", "Template", "Smartbloks"], link: "https://www.figma.com/design/mcbYOP5cTkWKFkUjP4cahD/Web-temp-Design-2-?node-id=55-60&t=9xi51Xx2MYE66pqM-1", color: "#2a1010", accent: "#ff5722", images: [require('../assets/designs/smartblok22.jpg'), require('../assets/designs/smartblok23.png'), require('../assets/designs/smartblok24.png'), require('../assets/designs/smartblok25.png')]},

  { id: 7, title: "Web Template Series — Costruction", category: "Template Design", description: "Contact and footer section with newsletter signup, social links and brand-consistent styling.", tags: ["Figma", "Template", "Smartbloks"], link: "https://www.figma.com/design/mcbYOP5cTkWKFkUjP4cahD/Web-temp-Design-2-?node-id=60-9027&t=9xi51Xx2MYE66pqM-1", color: "#0d1a2e", accent: "#00bcd4", images: [require('../assets/designs/smartblok26.jpg'), require('../assets/designs/smartblok27.png'), require('../assets/designs/smartblok28.png'), require('../assets/designs/smartblok29.png')]},

  { id: 8, title: "Web Template Series — Barbers Shop", category: "Template Design", description: "Full-page e-commerce-style layout with product grid, filters, and checkout flow from the Smartbloks template library.", tags: ["Figma", "Template", "E-Commerce"], link: "https://www.figma.com/design/mcbYOP5cTkWKFkUjP4cahD/Web-temp-Design-2-?node-id=57-5873&t=gP5CTgLfx0TCWvZA-1", color: "#1a0d00", accent: "#ff9800", images: [require('../assets/designs/smartblok30.jpg'), require('../assets/designs/smartblok31.png'), require('../assets/designs/smartblok32.png'), require('../assets/designs/smartblok33.jpg')]},

  { id: 9, title: "Website Category 3 — Retirement Home", category: "Template Design", description: "A versatile Smartbloks template — clean layout, bold typography, fully responsive across all screen sizes.", tags: ["Figma", "Template", "Smartbloks"], link: "https://www.figma.com/design/mcbYOP5cTkWKFkUjP4cahD/Web-temp-Design-2-?node-id=694-427&t=gP5CTgLfx0TCWvZA-1", color: "#0d1a0d", accent: "#8bc34a", images: [require('../assets/designs/smartblok34.jpg'), require('../assets/designs/smartblok35.png'), require('../assets/designs/smartblok36.png'), require('../assets/designs/smartblok37.png')]},

  { id: 10, title: "Web Template Series — Vetinary Clinic", category: "Template Design", description: "Blog and content-first layout from the Smartbloks series — editorial grid, article cards, category filters.", tags: ["Figma", "Template", "Blog"], link: "https://www.figma.com/design/t91QurgQ5rSmBhgoKjzzJi/Website-Category-3?node-id=111-302&t=QVN5nO1wX5d6RlCz-1", color: "#1a1a00", accent: "#ffc107", images: [require('../assets/designs/smartblok38.jpg'), require('../assets/designs/smartblok39.png'), require('../assets/designs/smartblok40.png'), require('../assets/designs/smartblok41.png')]},

  { id: 11, title: "Web Template Series — Restaurant", category: "Template Design", description: "Blog and content-first layout from the Smartbloks series — editorial grid, article cards, category filters.", tags: ["Figma", "Template", "Blog"], link: "https://www.figma.com/design/t91QurgQ5rSmBhgoKjzzJi/Website-Category-3?node-id=23-277&t=FdXKuMpDgIGa7ob4-1", color: "#1a1a00", accent: "#ffc107", images: [require('../assets/designs/smartblok42.jpg'), require('../assets/designs/smartblok43.png'), require('../assets/designs/smartblok44.png'), require('../assets/designs/smartblok45.png')]},

  { id: 12, title: "Web Template Series — Photography", category: "Template Design", description: "Blog and content-first layout from the Smartbloks series — editorial grid, article cards, category filters.", tags: ["Figma", "Template", "Blog"], link: "https://www.figma.com/design/LT7ImzVmEvztXxKDFAOLzN/Web-Template-project?node-id=498-17426&t=fVZNiDSvYRmFwxch-1", color: "#1a1a00", accent: "#ffc107", images: [require('../assets/designs/smartblok46.jpg'), require('../assets/designs/smartblok47.png'), require('../assets/designs/smartblok48.png'), require('../assets/designs/smartblok49.png')]},

  { id: 13, title: "Web Template Series — Beauty Salon", category: "Template Design", description: "Blog and content-first layout from the Smartbloks series — editorial grid, article cards, category filters.", tags: ["Figma", "Template", "Blog"], link: "https://www.figma.com/design/mcbYOP5cTkWKFkUjP4cahD/Web-temp-Design-2-?node-id=595-730&t=UX85vsXlzdS9LE6N-1", color: "#1a1a00", accent: "#ffc107", images: [require('../assets/designs/smartblok50.jpg'), require('../assets/designs/smartblok51.jpg'), require('../assets/designs/smartblok52.png'), require('../assets/designs/smartblok53.png')]},

  { id: 14, title: "Web Template Series — Car Dealership", category: "Template Design", description: "Blog and content-first layout from the Smartbloks series — editorial grid, article cards, category filters.", tags: ["Figma", "Template", "Blog"], link: "https://www.figma.com/design/t91QurgQ5rSmBhgoKjzzJi/Website-Category-3?node-id=111-302&t=QVN5nO1wX5d6RlCz-1", color: "#1a1a00", accent: "#ffc107", images: [require('../assets/designs/smartblok54.png'), require('../assets/designs/smartblok55.png'), require('../assets/designs/smartblok56.png'), require('../assets/designs/smartblok57.png')]},
];

export const websites = [
  { id: 1, title: "Benoit London", category: "E-Commerce · Fashion", description: "Full e-commerce store for a London-based luxury handbag brand. Product catalogue, shopping cart, affiliate programme and wholesale portal.", url: "https://benoitlondon.com/", stack: ["WordPress", "Elementor", "WooCommerce", "Custom CSS"], featured: true },
  { id: 2, title: "Cutesaint", category: "Business · WordPress", description: "Clean, responsive WordPress business website built for a client with custom design and performance optimisation.", url: "https://cutesaint.com/", stack: ["WordPress", "Elementor", "CSS"], featured: false },
  { id: 3, title: "Tiaga Baby", category: "Business · WordPress", description: "Client WordPress site with custom design, mobile-first layout and intuitive navigation built with Elementor.", url: "https://tiagababy.com/", stack: ["WordPress", "Elementor", "CSS"], featured: true },
  { id: 4, title: "Eazy King Booking", category: "Web App · React", description: "A React-based ticket booking web application with clean UI and smooth booking flow.", url: "https://eazy-king-project.vercel.app/", stack: ["React.js", "JavaScript", "CSS"], featured: true },
  { id: 5, title: "AltSchool Exam Project", category: "Frontend · React", description: "A React frontend project demonstrating component architecture, state management and responsive design.", url: "https://altschool-exam-3.netlify.app/", stack: ["React.js", "CSS"], featured: false },
  { id: 6, title: "Portfolio Demo (WordPress)", category: "Portfolio · WordPress", description: "A WordPress portfolio demo showcasing design and development capabilities with custom theming.", url: "https://portfolio-demo-wordpress.netlify.app/", stack: ["WordPress", "Custom Theme", "CSS"], featured: false },
  { id: 7, title: "Functional Login System", category: "Frontend · Auth UI", description: "A complete, functional login and authentication UI with validation built from scratch.", url: "https://complete-functional-login-page.netlify.app/", stack: ["HTML", "CSS", "JavaScript"], featured: false },
  { id: 8, title: "First Login Page", category: "Frontend · HTML/CSS", description: "An early login page project demonstrating clean HTML/CSS layout and form handling.", url: "https://okafor-zag.github.io/my.first.login/", stack: ["HTML", "CSS", "JavaScript"], featured: false },
  { id: 9, title: "AltSchool Africa Assignment", category: "Frontend · Learning", description: "GitHub Pages project from AltSchool Africa coursework — semantic HTML and clean CSS.", url: "https://okafor-zag.github.io/AltschoolAfricaassignment/", stack: ["HTML", "CSS", "JavaScript"], featured: false },
  { id: 10, title: "AltSchool Project", category: "Frontend · Learning", description: "A multi-page frontend project built during AltSchool Africa studies, demonstrating layout and styling skills.", url: "https://okafor-zag.github.io/Altschoolproject.io/index.html/index.html#", stack: ["HTML", "CSS", "JavaScript"], featured: false },
];

export const education = [
  { degree: "Diploma — Frontend Development", institution: "AltSchool Africa", year: "2023" },
  { degree: "Secondary School Certificate", institution: "Divinity Comprehensive College", year: "2017" },
];

export const certifications = [
  { title: "1st Place — WriteTech Bootcamp", issuer: "Zaycodes", highlight: true },
  { title: "Technical Writing Certification", issuer: "Zaycodes WriteTech Bootcamp", highlight: false },
  { title: "Frontend Development (HTML, CSS, JS)", issuer: "FreeCodeCamp", highlight: false },
  { title: "CSS & JavaScript Certification", issuer: "FreeCodeCamp", highlight: false },
  { title: "Web Development (Node.js)", issuer: "Progate", highlight: false },
  { title: "Graduated Frontend Developer", issuer: "AltSchool Africa", highlight: true },
];

// ── GAMING VIDEOS ──────────────────────────────────────────────
// Replace these YouTube video IDs with your real ones.
// To get a video ID: go to your YouTube video, copy the part after ?v=
// e.g. youtube.com/watch?v=ABC123 → ID is ABC123

  export const youtubeVideos = [
    { id: "1IULl3hR0yM", title: "Aiming skill", game: "Battkefield 2" },
    { id: "pILIC4h5Tec", title: "Play objectives, remember that", game: "Add game name here" },
    { id: "iPJvnnjnkag", title: "Skill issue", game: "Add game name here" },
    { id: "ds00-y_ryco", title: "bots", game: "Add game name here" },
    { id: "PEGezuhFJK0", title: "Gaming Clip 5", game: "Add game name here" },
    { id: "OLQwB84pi50", title: "RPG", game: "Add game name here" },
    { id: "iUwOgdZDpzQ", title: "Verdansk", game: "Add game name here" },
    { id: "f_HNUNvaG1A", title: "Battlefield guntlet", game: "Add game name here" },
    { id: "d4Rua2k2K0A", title: "Aiming skill", game: "Add game name here" },
    { id: "rGL0X92yRDA", title: "Fu clip", game: "Add game name here" },
  ];