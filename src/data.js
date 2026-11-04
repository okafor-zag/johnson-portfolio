// Single source of truth for everything on the site.

export const personal = {
  name: 'Johnson Okafor',
  fullName: 'Johnson Chukwuemeka Okafor',
  roles: 'Product Designer · UI/UX · Frontend Developer',
  location: 'Lagos, Nigeria',
  timezone: 'WAT',
  email: 'johnsonzagazor06@gmail.com',
  phone: '+234 812 245 8421',
  phoneRaw: '+2348122458421',
  cv: '/Johnson-Okafor-CV.pdf',
  links: {
    linkedin: 'https://www.linkedin.com/in/johnson-okafor-9a9b131b2/',
    medium: 'https://medium.com/@johnsonzagazor06',
    youtube: 'https://www.youtube.com/@Afin-Gamer01/featured',
    tiktok: 'https://www.tiktok.com/@afingamer01',
  },
};

export const availability = {
  open: true,
  headline: 'Open to work',
  detail: 'Product design, UI/UX and frontend roles — remote, hybrid or Lagos-based.',
};

export const stats = [
  { n: '5', label: 'Years designing & building' },
  { n: '1,000', em: '+', label: 'Blocks & templates designed' },
  { n: '6h → ', em: '2h', label: 'Template build time cut' },
  { n: '2', label: 'Promotions to department lead' },
];

export const achievements = [
  { big: '6h → ', em: 'under 2h', body: 'Cut full-template production time at SmartbloksAI by designing the control system behind the page builder.' },
  { big: '1,000', em: '+ blocks', body: 'Drop-in page sections — heroes, features, pricing, footers — designed to slot into any template without breaking it.' },
  { big: '100', em: '+ templates', body: 'Shipped across SaaS, retail, hospitality, health, trade and portfolio sectors, all on one component library.' },
  { big: '', em: '+40% sign-ups', body: 'The lift that followed my Vue single-page application rebuild at the HNG Internship.' },
  { big: '', em: '~85% of output', body: "My share of everything Ideastosite published over fifteen months: logos, identity, templates, social." },
  { big: '', em: '2 promotions', body: 'Intern to Lead Designer at TavCorp. Designer to Head of two design functions at SmartbloksAI. Under a year each.' },
  { big: '20', em: '+ live sites', body: 'Including a London WooCommerce store, a shipped commerce dashboard and a national nonprofit platform.' },
  { big: '', em: '6 products', body: 'A page builder, a billing suite, a commerce store, a mobile app, a brand system and a charity platform.' },
];

export const certifications = [
  { title: '1st Place — WriteTech Bootcamp', issuer: 'Zaycodes · Technical writing', gold: true },
  { title: 'Diploma in Frontend Engineering', issuer: 'AltSchool Africa · October 2023' },
  { title: 'Technical Writing Certification', issuer: 'Zaycodes WriteTech Bootcamp' },
  { title: 'Introduction to Figma', issuer: 'Uxcel' },
  { title: 'Everyday UX Flows', issuer: 'Uxcel' },
  { title: 'Responsive Web Design', issuer: 'freeCodeCamp' },
  { title: 'Frontend Development — HTML, CSS, JS', issuer: 'freeCodeCamp' },
  { title: 'Web Development with Node.js', issuer: 'Progate' },
];

export const testimonials = [
  {
    quote: "His professionalism is top notch. And he doesn't wait to be told what needs to be done. He is a leader.",
    name: 'Leon Okpeh',
    role: 'CEO, SmartbloksAI · August 2026',
    initials: 'LO',
  },
];

export const experience = [
  {
    role: 'Lead Designer',
    company: 'TavCorp',
    period: 'Nov 2025 — May 2026',
    promo: 'Joined as intern → promoted to lead',
    bullets: [
      'Designed and shipped the TavCorp store: catalogue, cart, checkout and payment, live in production.',
      'Designed the customer dashboard, sign-in and every page of the company website.',
      'Led the design department — set direction, reviewed work and mentored designers.',
      'Built the Brisk Hauling & Logistics brand identity end to end.',
    ],
  },
  {
    role: 'Head of Product Design & Template UI/UX',
    company: 'SmartbloksAI',
    period: 'Sept 2024 — Jul 2025',
    promo: 'Joined as designer → promoted to head of two functions',
    bullets: [
      'Designed the page-builder product: editor, widget library, live canvas and the settings system behind every widget.',
      'Built the control vocabulary that cut full-template build time from about six hours to under two.',
      'Designed Smartbillr, the company’s AI invoicing product, across six screens.',
      'Designed 1,000+ blocks and 100+ templates across SaaS, e-commerce, health, real estate, hospitality and portfolio sectors.',
    ],
  },
  {
    role: 'Web & UI Designer',
    company: 'Ideastosite (ITS)',
    period: 'Jun 2023 — Sept 2024',
    bullets: [
      "Produced roughly 85% of the studio's published design output — logos, brand identity, templates and social content.",
      'Designed and built client sites in Figma, then WordPress, Elementor and custom code.',
      'Designed and built teckafrica.org — fourteen pages for a children’s tech-education charity.',
      'Delivered benoitlondon.com, cutesaint.com, tiagababy.com and americanelectrical.com.',
    ],
  },
  {
    role: 'Digital Technology Instructor',
    company: 'Abridged Summer School',
    period: 'Aug — Sept 2024',
    bullets: ['Taught HTML, CSS and JavaScript to children over a summer programme, each student shipping their own site.'],
  },
  {
    role: 'Frontend Developer (UI/UX focus)',
    company: 'AltSchool Africa',
    period: 'Apr 2022 — May 2023',
    bullets: [
      'Built and maintained React and Vue interfaces — responsive, accessible and cross-browser.',
      'Worked on performance, bug fixing and integrating frontend components into larger systems.',
    ],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'HNG Internship',
    period: 'Sept 2021 — Mar 2022',
    bullets: [
      'Rebuilt a Vue single-page application; the redesign contributed to a 40% increase in sign-ups.',
      'Documented style guidelines to keep the team’s work consistent.',
    ],
  },
];

export const skills = {
  Design: ['Figma', 'Adobe XD', 'Design systems', 'Wireframing', 'Prototyping', 'Usability testing', 'Brand & logo', 'Illustrator', 'Photoshop', 'InDesign', 'Canva'],
  Build: ['React.js', 'Vue.js', 'JavaScript ES6+', 'HTML5', 'CSS3', 'WordPress', 'Elementor', 'WooCommerce', 'REST APIs', 'Git', 'TypeScript (familiar)'],
  Also: ['Technical writing', 'Developer handoff', 'Mentoring', 'Teaching'],
};

export const posts = [
  { title: 'React Rendering Explained: How React Decides What to Re-render', meta: 'React · Rendering', url: 'https://medium.com/@johnsonzagazor06/react-rendering-explained-how-react-decides-what-to-re-render-4792ad993ffb', series: true },
  { title: 'Optimising React Performance: Practical Techniques for Faster, Smoother Apps', meta: 'React · Performance', url: 'https://medium.com/@johnsonzagazor06/optimising-react-performance-practical-techniques-for-faster-smoother-apps-fd575c782a70', series: true },
  { title: 'Mastering API Integrations in React: A Step-by-Step Tutorial', meta: 'React · APIs', url: 'https://medium.com/@johnsonzagazor06/mastering-api-integrations-in-react-a-step-by-step-tutorial-0f0db72e8ee2', series: true },
  { title: 'Integrating the Context API in React', meta: 'React · State', url: 'https://medium.com/@johnsonzagazor06/integrating-the-context-api-in-react-b880d558712d', series: true },
  { title: 'Understanding the Basics of Map and Arrays in React', meta: 'React · Fundamentals', url: 'https://medium.com/@johnsonzagazor06/understanding-the-basics-of-map-and-arrays-in-react-d380f37764bc', series: true },
  { title: 'How I Designed 100+ Website Templates at SmartbloksAI', meta: 'Design systems', url: 'https://medium.com/@johnsonzagazor06/how-i-designed-100-website-templates-at-smartbloksai-89fb01eef084', series: false },
  { title: 'From Student to Head of Design: My AltSchool Africa Journey', meta: 'Career', url: 'https://medium.com/@johnsonzagazor06/from-student-to-head-of-design-my-altschool-africa-journey-471227ff26a3', series: false },
];

export const sites = [
  { name: 'Benoit London', kind: 'E-commerce · Fashion', url: 'https://benoitlondon.com/', desc: 'A WooCommerce store for a London luxury handbag label. Product catalogue, cart, wishlist, customer accounts, plus separate routes for the affiliate programme and wholesale partners.' },
  { name: 'TavCorp', kind: 'Agency · Commerce', url: 'https://www.wearetavcorp.com/', desc: 'Company site and store designed end to end — every page, plus catalogue, cart, checkout, payment and the customer dashboard behind it.' },
  { name: 'TECK Africa', kind: 'Nonprofit · WordPress', url: 'https://teckafrica.org/', desc: "Fourteen pages for a children's tech-education charity — four programme pages, three routes to get involved, events, blog and the donation flow." },
  { name: 'American Electrical', kind: 'Business · WordPress', url: 'https://www.americanelectrical.com/', desc: 'Corporate site for an electrical supplier — structured service pages, content-heavy and responsive throughout.' },
  { name: 'Tiaga Baby', kind: 'E-commerce · Babywear', url: 'https://tiagababy.com/', desc: 'Bamboo babywear store with a USD/XOF currency switch, soft illustrated identity and WhatsApp as the contact channel.' },
  { name: 'Cutesaint', kind: 'Business · WordPress', url: 'https://cutesaint.com/', desc: 'Clean, responsive business site with custom design and performance optimisation.' },
  { name: 'Eazy King Booking', kind: 'Web app · React', url: 'https://eazy-king-project.vercel.app/', desc: 'React ticket-booking application — component architecture, form state and a booking flow that stays short.' },
];

export const templates = [
  ['car-1.jpg', 'Academy', 'Education'], ['car-2.jpg', 'Auto Dealer', 'Automotive'],
  ['car-3.jpg', 'Beauty Salon', 'Treatments'], ['car-4.jpg', 'Blogger', 'Editorial'],
  ['car-5.jpg', 'Botany', 'Plants & garden'], ['car-6.jpg', 'Cafe', 'Hospitality'],
  ['car-7.jpg', 'Charity', 'Nonprofit'], ['car-8.jpg', 'Church', 'Community'],
  ['car-9.jpg', 'Crypto Trading', 'FinTech'], ['car-10.jpg', 'Digital Agency', 'Agency'],
  ['car-11.jpg', 'E-commerce', 'Retail'], ['car-12.jpg', 'E-learning', 'Education'],
  ['car-13.jpg', 'FitFlex', 'Fitness'], ['car-14.jpg', 'Fitness', 'Gym & training'],
  ['car-15.jpg', 'Gaming', 'Entertainment'], ['car-16.jpg', 'Health', 'Clinical'],
  ['car-17.jpg', 'Law Firm', 'Professional services'], ['car-18.jpg', 'Modeling Portfolio', 'Portfolio'],
  ['car-19.jpg', 'Muay Thai Gym', 'Sport'], ['car-20.jpg', 'Music & Festivals', 'Events'],
  ['car-21.jpg', 'News Website', 'Publishing'], ['car-22.jpg', 'Online Resume', 'Personal'],
  ['car-23.jpg', 'Online Courses', 'Education'], ['car-24.jpg', 'Online Store', 'Retail'],
  ['car-25.jpg', 'Organic Foods', 'Food & produce'], ['car-26.jpg', 'Painting Services', 'Trade'],
  ['car-27.jpg', 'Pharmacy', 'Health'], ['car-28.jpg', 'Real Estate', 'Property'],
  ['car-29.jpg', 'Restaurant', 'Hospitality'], ['car-30.jpg', 'Travel Agency', 'Travel'],
  ['car-31.jpg', 'Web Designer', 'Portfolio'], ['car-32.jpg', 'Personal', 'Portfolio'],
  ['car-33.jpg', 'Accounting Firm', 'Professional services'], ['car-34.jpg', 'Agriculture', 'AgTech'],
  ['car-35.jpg', 'Aircraft Services', 'Aviation'], ['car-36.jpg', 'Animal Hospital', 'Veterinary'],
  ['car-37.jpg', 'Artist', 'Portfolio'], ['car-38.jpg', 'Arts & Crafts', 'Makers'],
  ['car-39.jpg', 'Banking', 'Finance'], ['car-40.jpg', 'Barber Shop', 'Grooming'],
  ['car-41.jpg', 'Education', 'Schools'], ['car-42.jpg', 'Fashion Designer', 'Fashion'],
  ['car-43.jpg', 'Massage & Spa', 'Wellness'], ['car-44.jpg', 'Printing & Repairs', 'Local services'],
  ['car-45.jpg', 'Rental Property', 'Property'], ['car-46.jpg', 'Retirement Homes', 'Care sector'],
  ['car-47.jpg', 'SME Website', 'Small business'], ['car-48.jpg', 'Sales', 'B2B'],
  ['car-49.jpg', 'Social Marketing', 'Marketing'], ['car-50.jpg', 'Spa', 'Wellness'],
  ['car-51.jpg', 'Sport', 'Athletics'], ['car-52.jpg', 'Tax Attorney', 'Legal'],
  ['car-53.jpg', 'Therapy Practice', 'Clinical'], ['car-54.jpg', 'Vegan Cafe', 'Hospitality'],
  ['car-55.jpg', 'Vehicle Rental', 'Transport'], ['car-56.jpg', 'Veterinary', 'Animal care'],
  ['car-57.jpg', 'Wedding Events', 'Events'],
].map(([img, name, kind]) => ({ img, name, kind }));

export const skillMarquee = [
  'Product Design', 'UI/UX', 'Design Systems', 'Figma', 'React.js', 'Vue.js', 'WordPress',
  'Elementor', 'WooCommerce', 'Brand Identity', 'Logo Design', 'Prototyping', 'Usability Testing',
  'JavaScript', 'Responsive Design', 'Technical Writing',
];

export const featured = [
  { img: 'tav-dashboard.jpg', kind: 'Product · Commerce · Shipped', title: 'TavCorp', body: 'Store, customer dashboard, sign-in and the full company site. Catalogue through to checkout, live in production.' },
  { img: 'builder-canvas.jpg', kind: 'Product design · Design system', title: 'Smartbloks Builder', body: 'A no-code page builder designed end to end. The control system behind it cut template build time from six hours to under two.' },
  { img: 'billr-invoice.jpg', kind: 'Product design · FinTech', title: 'Smartbillr', body: 'Invoicing, quotations, expenses and reporting for small businesses — six connected screens around one live preview.' },
  { img: 'brisk-logo.jpg', kind: 'Brand identity', title: 'Brisk Hauling', body: 'A logistics brand built from nothing — mark, lockups, palette, voice and a written brand guide.' },
  { img: 'teck-whatwedo.jpg', kind: 'Nonprofit · Designed & built · Live', title: 'TECK Africa', body: "A fourteen-page platform for a children's tech-education charity — designed in full, then built in WordPress." },
  { img: 'benoit-screens.jpg', kind: 'E-commerce · Two brands · Live', title: 'Benoit London & Tiaga Baby', body: 'A London luxury handbag store and a bamboo babywear brand. Same stack, opposite personalities.' },
  { img: 'mf-onboard.jpg', kind: 'Mobile product · Brand · Concept', title: 'MeetFarm', body: 'A farming community app — brand mark, onboarding and the full account flow, designed for a first-time audience.' },
];
