import type { IconCardData } from "@/components/site/cards";

export const ajiraSystemUrl = "https://system.ajiralink.co.tz/";

export const contactDetails = {
  email: "linkajira@gmail.com",
  emailHref: "mailto:linkajira@gmail.com",
  phone: "+255 610 550 408",
  phoneHref: "tel:+255610550408",
  whatsapp: "https://wa.me/255610550408",
  whatsappLabel: "WhatsApp: +255 610 550 408",
  instagram: "https://www.instagram.com/ajiralink_futurelab/",
  facebook: "https://www.facebook.com/ajiralink_futurelab/",
  youtube: "https://www.youtube.com/@AjiraLink",
  socialHandle: "@ajiralink_futurelab",
  youtubeHandle: "@AjiraLink",
  postalAddress: "P.O. Box 1228",
  cityCountry: "Arusha, Tanzania",
  location: "Lusono House, nearby Nairobi Road, Arusha",
} as const;

export const systemRoutes = {
  login: ajiraSystemUrl,
  youthRegister: ajiraSystemUrl,
  employerRegister: ajiraSystemUrl,
  opportunities: ajiraSystemUrl,
  postOpportunity: ajiraSystemUrl,
  careerResources: ajiraSystemUrl,
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Opportunities", href: "/opportunities" },
  { label: "Career Guidance", href: "/career-guidance" },
  { label: "For Employers", href: "/for-employers" },
  { label: "For Institutions & Partners", href: "/institutions-partners" },
  { label: "Impact", href: "/impact" },
  { label: "Support Us", href: "/support-us" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export const images = {
  homeHero: "/images/Ajiralink Website Photos/Hero Pictures/Hero-Picture-1.jpg",
  aboutHero: "/images/Ajiralink Website Photos/Hero Pictures/Hero-Picture-2.jpeg",
  opportunitiesHero: "/images/Ajiralink Website Photos/Hero Pictures/Hero-Picture-3.JPG",
  guidanceHero: "/images/Ajiralink Website Photos/Hero Pictures/Hero-Picture-4.JPG",
  employersHero: "/images/Ajiralink Website Photos/Hero Pictures/Hero-Picture-5.JPG",
  partnersHero: "/images/Ajiralink Website Photos/Hero Pictures/Hero-Picture-6.JPG",
  impactHero: "/images/Ajiralink Website Photos/Hero Pictures/Hero-Picture-7.JPG",
  supportHero: "/images/Ajiralink Website Photos/Hero Pictures/Hero-Picture-8.JPG",
  teamHero: "/images/Ajiralink Website Photos/Hero Pictures/Hero-Picture-9.JPG",
  contactHero: "/images/Ajiralink Website Photos/Hero Pictures/Hero-Picture-10.JPG",
} as const;

export const heroStats = [
  { value: 1500, suffix: "+", label: "users" },
  { value: 5000, suffix: "+", label: "youth reached" },
  { value: 50, suffix: "+", label: "partners" },
  { value: 20, suffix: "%", label: "growth" },
];

export const challengePoints = [
  "Students, graduates, and young professionals often struggle to find verified early-career opportunities.",
  "Many youth miss internships, volunteer placements, field opportunities, and mentorship because information is scattered.",
  "Employers and institutions need trusted ways to reach prepared youth without adding operational complexity.",
  "Career progress should not depend on personal networks, privilege, or who happens to hear about an opportunity first.",
];

export const solutionPoints = [
  "AjiraLink creates one trusted digital bridge between youth talent and verified opportunities.",
  "The platform connects young people to jobs, internships, volunteer placements, field opportunities, mentorship, and career guidance.",
  "Employers can reach motivated early-career talent while institutions and partners can scale employability programs.",
  "AjiraLink keeps the marketing layer clear while redirecting users into the existing platform for profiles, applications, and dashboards.",
];

export const features = [
  {
    title: "Verified Opportunities",
    copy: "Jobs, internships, volunteer placements, and field opportunities surfaced through a trusted youth-first platform.",
    icon: "shield",
    image: "/images/Ajiralink Website Photos/Opportunities Page/Jobs.jpg",
  },
  {
    title: "Career Development",
    copy: "Guidance, resources, mentorship, and readiness content that helps youth move from interest to action.",
    icon: "book",
    image: "/images/Ajiralink Website Photos/Career Guidance Page/Grow-Profesionally.JPG",
  },
  {
    title: "Employer Access",
    copy: "A focused channel for employers to reach students, graduates, and young professionals with high intent.",
    icon: "briefcase",
    image: "/images/Ajiralink Website Photos/Employers Page/Find-Motivated-Candidates.jpg",
  },
  {
    title: "Partnership Engine",
    copy: "A scalable marketing and outreach platform for institutions, funders, hubs, and ecosystem partners.",
    icon: "handshake",
    image: "/images/Ajiralink Website Photos/For Institutions and Patners Page/Institutional-Patnerships.jpg",
  },
] satisfies IconCardData[];

export const systemCards = [
  {
    title: "Login",
    copy: "Return to your AjiraLink account and continue where you left off.",
    href: systemRoutes.login,
    icon: "arrow",
    image: "/images/Ajiralink Website Photos/Home Page/Outreach-and-Ecosystem.jpg",
  },
  {
    title: "Youth Registration",
    copy: "Create your profile and start discovering opportunities built for your stage.",
    href: systemRoutes.youthRegister,
    icon: "graduation",
    image: "/images/Ajiralink Website Photos/Career Guidance Page/Build-Your-Profile.JPG",
  },
  {
    title: "Register as Employer",
    copy: "Join as an employer and connect with emerging talent across the ecosystem.",
    href: systemRoutes.employerRegister,
    icon: "building",
    image: "/images/Ajiralink Website Photos/Employers Page/Find-Motivated-Candidates.jpg",
  },
  {
    title: "Browse Opportunities",
    copy: "Explore jobs, internships, volunteer placements, and field opportunities.",
    href: systemRoutes.opportunities,
    icon: "badge",
    image: "/images/Ajiralink Website Photos/Opportunities Page/Volunteer-Opportunities.JPG",
  },
] satisfies IconCardData[];

export const testimonials = [
  {
    name: "Amani Mathew",
    image: "/images/Testimonials Photos/Amani-Mathew.png",
    title: "Student",
    message:
      "AjiraLink completely changed how I approach my career prep. The platform streamlined my search for field placements and gave me access to practical learning opportunities that classroom lectures just couldn't replicate.",
  },
  {
    name: "Emmanuel Simon",
    image: "/images/Testimonials Photos/Emmanuel-Simon.jpeg",
    title: "Student",
    message:
      "Finding credible mentorship and tailored career guidance used to feel impossible. AjiraLink bridged that gap instantly, connecting me directly with pathways designed specifically for youth empowerment and tech skill readiness.",
  },
  {
    name: "Faraja Oletenges",
    image: "/images/Testimonials Photos/Faraja-Oletenges.png",
    title: "Student",
    message:
      "The ecosystem built here is incredibly supportive. Through the platform's resources, I was able to secure hands-on workshop experience that significantly boosted my engineering profile and confidence.",
  },
  {
    name: "Gloria Vincent",
    image: "/images/Testimonials Photos/Gloria-Vincent.png",
    title: "Teacher",
    message:
      "As a teacher, AjiraLink has proven to be an indispensable asset for discovering exceptional, motivated youth talent. Their structured pathways ensure candidates are not just educated, but workplace-ready from day one.",
  },
  {
    name: "Jofrey Eliudi",
    image: "/images/Testimonials Photos/Jofrey-Eliudi.png",
    title: "Student",
    message:
      "What sets AjiraLink apart is trust. Every opportunity listed is verified, and the career development programs are highly relevant to what the local and regional industries are looking for right now.",
  },
] as const;

export const pageCards = {
  about: [
    {
      title: "Youth-first",
      copy: "Every experience starts with the realities of students, graduates, and young professionals.",
    },
    {
      title: "Trust-led",
      copy: "AjiraLink positions verified opportunities, credible guidance, and responsible partnerships at the center.",
    },
    {
      title: "Africa-scale",
      copy: "The brand is built for local relevance and regional ambition across Africa's talent ecosystem.",
    },
  ],
  opportunities: [
    {
      title: "Jobs",
      copy: "Entry-level and early-career roles for youth ready to move into meaningful work.",
      icon: "briefcase",
    },
    {
      title: "Internships",
      copy: "Structured exposure that helps students and graduates build workplace proof.",
      icon: "graduation",
    },
    {
      title: "Volunteer Placements",
      copy: "Mission-aligned placements that create experience, references, and confidence.",
      icon: "users",
    },
    {
      title: "Field Opportunities",
      copy: "Practical roles that connect youth to real communities, projects, and outcomes.",
      icon: "target",
    },
  ],
  guidance: [
    {
      title: "CV and profile readiness",
      copy: "Practical guidance that helps youth communicate skills with confidence.",
      icon: "book",
    },
    {
      title: "Interview preparation",
      copy: "Resources that turn nervous applications into clear, prepared conversations.",
      icon: "message",
    },
    {
      title: "Mentorship pathways",
      copy: "Direction from people who understand careers, hiring, and the African opportunity landscape.",
      icon: "lightbulb",
    },
  ],
  employers: [
    {
      title: "Reach motivated youth",
      copy: "Connect with students, graduates, and young professionals already looking for opportunity.",
      icon: "users",
    },
    {
      title: "Post opportunities",
      copy: "Share jobs, internships, volunteer placements, and field openings through the existing system.",
      icon: "rocket",
    },
    {
      title: "Build talent pipelines",
      copy: "Create long-term visibility with early-career talent and institutions.",
      icon: "lineChart",
    },
  ],
  partners: [
    {
      title: "Institutions",
      copy: "Support student employability and connect graduates to practical opportunities.",
      icon: "graduation",
    },
    {
      title: "Development partners",
      copy: "Scale youth employment outcomes through a modern digital platform.",
      icon: "handshake",
    },
    {
      title: "Innovation hubs",
      copy: "Activate communities, programs, mentorship, and opportunity campaigns.",
      icon: "rocket",
    },
  ],
} satisfies Record<string, IconCardData[]>;

export const teamValues = [
  "Youth dignity before vanity metrics.",
  "Clear opportunity pathways over noisy job-board volume.",
  "Partnerships that translate into measurable access.",
  "Modern African technology with global product standards.",
];

export const particles = [
  [8, 18, 0.8],
  [16, 68, 1.2],
  [28, 32, 0.9],
  [44, 12, 1.4],
  [57, 74, 1],
  [69, 24, 1.1],
  [83, 58, 0.7],
  [92, 36, 1.3],
] as const;
