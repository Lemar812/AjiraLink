import type { MarketingPageConfig } from "@/components/site/marketing-page";
import { images, pageCards, systemRoutes, teamValues } from "@/data/landing";

export const pages = {
  about: {
    eyebrow: "About Us",
    title: "A youth opportunity brand built for trust, dignity, and momentum.",
    description:
      "AjiraLink is a youth-focused digital employment and career development platform connecting students, graduates, and young professionals to opportunity, mentorship, and guidance.",
    image: images.community,
    primaryCta: { label: "Create Your Profile", href: systemRoutes.youthRegister },
    secondaryCta: { label: "Partner With Us", href: "/institutions-partners" },
    sections: [
      {
        eyebrow: "Who we are",
        title: "AjiraLink exists to make opportunity easier to find and easier to trust.",
        copy: "The website serves as the public storytelling layer for a working platform that handles profiles, applications, dashboards, and opportunity workflows.",
        cards: pageCards.about,
      },
      {
        eyebrow: "Operating belief",
        title: "Your future should not depend on who you know.",
        copy: "AjiraLink is designed around the belief that young people deserve visible, credible, and actionable career pathways.",
        points: [
          "We build for students, graduates, and young professionals who need a clearer route into work.",
          "We support employers and partners who want to reach youth through a trusted digital channel.",
          "We keep the marketing website focused on outreach, SEO, trust, and conversion into the existing system.",
          "We present African youth opportunity with the premium standard it deserves.",
        ],
      },
    ],
  },
  opportunities: {
    eyebrow: "Opportunities",
    title: "Verified pathways into jobs, internships, volunteer placements, and field work.",
    description:
      "AjiraLink helps youth discover practical opportunities while redirecting applications and account actions into the existing platform.",
    image: images.hero,
    primaryCta: { label: "Browse Opportunities", href: systemRoutes.opportunities },
    secondaryCta: { label: "Create Your Profile", href: systemRoutes.youthRegister },
    sections: [
      {
        eyebrow: "Opportunity types",
        title: "Built for the first big moves in a young career.",
        copy: "From early-career roles to field placements, AjiraLink presents opportunity in a way that is clear, credible, and action-oriented.",
        cards: pageCards.opportunities,
      },
    ],
  },
  guidance: {
    eyebrow: "Career Guidance",
    title: "Career readiness for young people preparing to be seen, selected, and trusted.",
    description:
      "AjiraLink connects youth to guidance, mentorship, and career resources that help them move from interest to readiness.",
    image: images.mentor,
    primaryCta: { label: "Explore Career Resources", href: systemRoutes.careerResources },
    secondaryCta: { label: "Create Your Profile", href: systemRoutes.youthRegister },
    sections: [
      {
        eyebrow: "Career support",
        title: "Guidance that turns ambition into practical next steps.",
        copy: "The career guidance layer helps young people prepare for the moments that shape employability.",
        cards: pageCards.guidance,
      },
    ],
  },
  employers: {
    eyebrow: "For Employers",
    title: "Reach early-career talent through a trusted youth opportunity platform.",
    description:
      "AjiraLink helps employers present opportunities to students, graduates, and young professionals while routing posting flows into the existing platform.",
    image: images.employer,
    primaryCta: { label: "Post an Opportunity", href: systemRoutes.postOpportunity },
    secondaryCta: { label: "Employer Registration", href: systemRoutes.employerRegister },
    sections: [
      {
        eyebrow: "Employer value",
        title: "Build a reliable pipeline of motivated young talent.",
        copy: "AjiraLink gives employers a premium channel for visibility, trust, and early-career engagement.",
        cards: pageCards.employers,
      },
    ],
  },
  partners: {
    eyebrow: "Institutions & Partners",
    title: "A modern partnership layer for youth employability programs.",
    description:
      "AjiraLink supports institutions, funders, innovation hubs, and ecosystem partners with a trusted digital front door for youth opportunity.",
    image: images.workshop,
    primaryCta: { label: "Contact Partnerships", href: "/contact" },
    secondaryCta: { label: "See Impact", href: "/impact" },
    sections: [
      {
        eyebrow: "Partner ecosystem",
        title: "Designed for organizations that want youth outcomes at scale.",
        copy: "AjiraLink creates a credible public surface for partnerships while preserving operational workflows inside the existing system.",
        cards: pageCards.partners,
      },
    ],
  },
  impact: {
    eyebrow: "Impact",
    title: "Measuring reach, trust, partnerships, and youth opportunity growth.",
    description:
      "AjiraLink tracks public momentum through users, youth reached, partners, and ecosystem growth while focusing on meaningful access.",
    image: images.community,
    primaryCta: { label: "Partner With Us", href: "/institutions-partners" },
    secondaryCta: { label: "Create Your Profile", href: systemRoutes.youthRegister },
    sections: [
      {
        eyebrow: "Current signals",
        title: "AjiraLink is positioned for practical, measurable youth opportunity outcomes.",
        copy: "The platform is built to support growth across users, partnerships, outreach, and opportunity discovery.",
        cards: [
          {
            title: "1,500+ users",
            copy: "A growing early community using AjiraLink as an opportunity gateway.",
            icon: "users",
          },
          {
            title: "5,000+ youth reached",
            copy: "Outreach designed to bring opportunity closer to young people.",
            icon: "megaphone",
          },
          {
            title: "50+ partners",
            copy: "A partnership base across employers, institutions, and ecosystem builders.",
            icon: "handshake",
          },
          {
            title: "15-20% growth",
            copy: "Momentum that shows increasing demand for trusted youth opportunity infrastructure.",
            icon: "lineChart",
          },
        ],
      },
    ],
  },
  team: {
    eyebrow: "Team",
    title: "A focused team building the opportunity layer African youth deserve.",
    description:
      "AjiraLink is shaped by a belief in youth dignity, practical access, technology quality, and partnership-led growth.",
    image: images.team,
    primaryCta: { label: "Support the Mission", href: "/investors-support-us" },
    secondaryCta: { label: "Contact Us", href: "/contact" },
    sections: [
      {
        eyebrow: "How we build",
        title: "The team operates with startup speed and ecosystem responsibility.",
        copy: "AjiraLink combines product thinking, employability insight, partner relationships, and modern web execution.",
        points: teamValues,
      },
    ],
  },
  investors: {
    eyebrow: "Investors / Support Us",
    title: "Support the platform redefining youth opportunity across Africa.",
    description:
      "AjiraLink is building a premium trust layer for youth employment, career development, and partnership-led access.",
    image: images.employer,
    primaryCta: { label: "Contact Us", href: "/contact" },
    secondaryCta: { label: "See Impact", href: "/impact" },
    sections: [
      {
        eyebrow: "Why support AjiraLink",
        title: "Youth employment needs modern infrastructure, trusted brands, and scalable partnerships.",
        copy: "AjiraLink is positioned as a public-facing platform that can attract youth, employers, institutions, and funders into one opportunity ecosystem.",
        cards: [
          {
            title: "High-need market",
            copy: "Young people need credible routes into work, mentorship, and career confidence.",
            icon: "target",
          },
          {
            title: "Trusted platform",
            copy: "A modern brand and product surface designed to build confidence with all stakeholders.",
            icon: "shield",
          },
          {
            title: "Partnership scale",
            copy: "Institutions, employers, and supporters can activate youth opportunity through one clear channel.",
            icon: "rocket",
          },
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Start a conversation with AjiraLink.",
    description:
      "Reach out for partnerships, employer opportunities, institutional collaboration, support, or youth opportunity campaigns.",
    image: images.workshop,
    primaryCta: { label: "Email AjiraLink", href: "mailto:hello@ajiralink.africa" },
    secondaryCta: { label: "Post an Opportunity", href: systemRoutes.postOpportunity },
    sections: [
      {
        eyebrow: "Contact paths",
        title: "The right channel for youth, employers, partners, and supporters.",
        copy: "Use the website for outreach and trust. Use the existing platform for login, registration, opportunity posting, and applications.",
        cards: [
          {
            title: "Youth",
            copy: "Create a profile or explore opportunities through the AjiraLink platform.",
            icon: "graduation",
            href: systemRoutes.youthRegister,
          },
          {
            title: "Employers",
            copy: "Register as an employer or post an opportunity through the existing system.",
            icon: "briefcase",
            href: systemRoutes.postOpportunity,
          },
          {
            title: "Partners",
            copy: "Start a partnership conversation with the AjiraLink team.",
            icon: "heartHandshake",
            href: "mailto:hello@ajiralink.africa",
          },
          {
            title: "General",
            copy: "Contact AjiraLink for support, outreach, and collaboration requests.",
            icon: "mail",
            href: "mailto:hello@ajiralink.africa",
          },
        ],
      },
    ],
  },
} satisfies Record<string, MarketingPageConfig>;
