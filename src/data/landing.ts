import {
  BriefcaseBusiness,
  GraduationCap,
  Handshake,
  Lightbulb,
  MessageCircle,
  Rocket,
  Users,
} from "lucide-react";

export const navLinks = ["Home", "Why AjiraLink", "Mission", "Partnerships", "Contact"];

export const images = {
  hero: "https://images.unsplash.com/photo-1694175271713-a6e2cc378980?auto=format&fit=crop&q=80&w=1400",
  workshop: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1400",
  mentor: "https://images.unsplash.com/photo-1620829813573-7c9e1877706f?auto=format&fit=crop&q=80&w=1200",
  community: "https://images.unsplash.com/photo-1632215861513-130b66fe97f4?auto=format&fit=crop&q=80&w=1200",
} as const;

export const stats = [
  { value: 25000, suffix: "+", label: "youth reached" },
  { value: 120, suffix: "+", label: "partnerships" },
  { value: 450, suffix: "+", label: "workshops" },
  { value: 8000, suffix: "+", label: "opportunities shared" },
];

export const features = [
  {
    title: "Jobs",
    copy: "Curated entry-level roles, graduate programs, and verified openings built for ambitious young talent.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Internships",
    copy: "Launchpad opportunities that turn skills into workplace experience and credible career momentum.",
    icon: GraduationCap,
  },
  {
    title: "Mentorship",
    copy: "Guidance from founders, operators, recruiters, and professionals who know the path forward.",
    icon: MessageCircle,
  },
  {
    title: "Career Guidance",
    copy: "Practical playbooks for CVs, interviews, digital skills, and confidence in the modern economy.",
    icon: Lightbulb,
  },
];

export const partnershipCards = [
  {
    icon: Handshake,
    title: "Employer access",
    copy: "Share roles and internship pathways with a youth audience ready to act.",
  },
  {
    icon: Users,
    title: "Community reach",
    copy: "Activate workshops, campus programs, and ambassador-led campaigns.",
  },
  {
    icon: Rocket,
    title: "Outcome reporting",
    copy: "Track engagement, participation, and opportunity conversion with clarity.",
  },
];

export const communityPillars = [
  ["Workshops", "Hands-on career readiness sessions across digital and professional skills."],
  ["Mentorship", "Relevant guidance from people who understand the market and the moment."],
  ["Ambassadors", "Youth leaders who bring opportunity closer to campuses and communities."],
  ["Empowerment", "Confidence, proof of skill, and pathways into income."],
] as const;

export const testimonials = [
  {
    name: "Amina Otieno",
    role: "Software intern, Nairobi",
    quote:
      "AjiraLink helped me move from scattered applications to a real internship and mentors who kept me accountable.",
  },
  {
    name: "Kwame Mensah",
    role: "Community ambassador, Accra",
    quote:
      "The platform makes opportunity feel close. Young people see workshops, jobs, and role models in one place.",
  },
  {
    name: "Nadia Ndlovu",
    role: "Hiring partner, Johannesburg",
    quote:
      "We meet prepared, motivated early-career talent through AjiraLink. It feels modern, trusted, and scalable.",
  },
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
