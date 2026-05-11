import type { IconCardData } from "@/components/site/cards";

export const systemRoutes = {
  login: "/login",
  youthRegister: "/register/youth",
  employerRegister: "/register/employer",
  opportunities: "/opportunities",
  postOpportunity: "/employer/post-opportunity",
  careerResources: "/career-resources",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Opportunities", href: "/opportunities" },
  { label: "Career Guidance", href: "/career-guidance" },
  { label: "For Employers", href: "/for-employers" },
  { label: "Institutions & Partners", href: "/institutions-partners" },
  { label: "Impact", href: "/impact" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export const images = {
  hero: "https://images.unsplash.com/photo-1694175271713-a6e2cc378980?auto=format&fit=crop&q=80&w=1400",
  workshop: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1400",
  mentor: "https://images.unsplash.com/photo-1620829813573-7c9e1877706f?auto=format&fit=crop&q=80&w=1200",
  community: "https://images.unsplash.com/photo-1632215861513-130b66fe97f4?auto=format&fit=crop&q=80&w=1200",
  team: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1400",
  employer: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1400",
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
  },
  {
    title: "Career Development",
    copy: "Guidance, resources, mentorship, and readiness content that helps youth move from interest to action.",
    icon: "book",
  },
  {
    title: "Employer Access",
    copy: "A focused channel for employers to reach students, graduates, and young professionals with high intent.",
    icon: "briefcase",
  },
  {
    title: "Partnership Engine",
    copy: "A scalable marketing and outreach platform for institutions, funders, hubs, and ecosystem partners.",
    icon: "handshake",
  },
] satisfies IconCardData[];

export const systemCards = [
  {
    title: "Login",
    copy: "Return to your AjiraLink account and continue where you left off.",
    href: systemRoutes.login,
    icon: "arrow",
  },
  {
    title: "Youth Registration",
    copy: "Create your profile and start discovering opportunities built for your stage.",
    href: systemRoutes.youthRegister,
    icon: "graduation",
  },
  {
    title: "Employer Registration",
    copy: "Join as an employer and connect with emerging talent across the ecosystem.",
    href: systemRoutes.employerRegister,
    icon: "building",
  },
  {
    title: "Browse Opportunities",
    copy: "Explore jobs, internships, volunteer placements, and field opportunities.",
    href: systemRoutes.opportunities,
    icon: "badge",
  },
] satisfies IconCardData[];

export const testimonials = [
  {
    name: "Amina Otieno",
    role: "Graduate trainee, Nairobi",
    quote:
      "AjiraLink made opportunity feel organized. I found internships, career guidance, and mentors without relying on random forwarded links.",
  },
  {
    name: "Brian Mwangi",
    role: "Field coordinator, Nakuru",
    quote:
      "The platform gives youth a cleaner way to discover real placements and understand what employers are looking for.",
  },
  {
    name: "Nadia Ndlovu",
    role: "Talent partner, Johannesburg",
    quote:
      "AjiraLink feels like the right bridge between employers and young people who are prepared, ambitious, and ready to grow.",
  },
];

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
