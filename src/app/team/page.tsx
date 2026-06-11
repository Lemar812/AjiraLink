import Image from "next/image";
import { BadgeCheck, Code2, Crown, Globe2, Mail, Megaphone, Phone, UsersRound } from "lucide-react";
import { ButtonLink } from "@/components/site/button-link";
import { createPageMetadata } from "@/components/site/marketing-page";
import { SiteShell } from "@/components/site/site-shell";
import { systemRoutes } from "@/data/landing";
import type { AriaAttributes, ComponentType } from "react";

const pageCopy =
  "AjiraLink is led by a passionate team committed to transforming youth employment access through technology, partnerships, career development, and opportunity creation.";

export const metadata = createPageMetadata("Team", pageCopy);

const teamCtaThemeStyles = `
  html[data-theme="light"] .team-final-cta-title,
  html[data-theme="dark"] .team-final-cta-title {
    color: #ffffff !important;
  }

  html[data-theme="light"] .team-final-cta-copy,
  html[data-theme="dark"] .team-final-cta-copy {
    color: rgb(226 232 240 / 86%) !important;
  }

  html[data-theme="light"] .team-card-name {
    color: #0f172a !important;
  }

  html[data-theme="light"] .team-card-role {
    color: #334155 !important;
  }

  html[data-theme="dark"] .team-card-name {
    color: #ffffff !important;
  }

  html[data-theme="dark"] .team-card-role {
    color: rgb(226 232 240 / 78%) !important;
  }

  html[data-theme="light"] .team-overlay-panel,
  html[data-theme="dark"] .team-overlay-panel {
    background-color: rgb(15 23 42 / 75%) !important;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: inherit;
  }

  html[data-theme="light"] .team-overlay-name,
  html[data-theme="dark"] .team-overlay-name {
    color: #ffffff !important;
  }

  html[data-theme="light"] .team-overlay-role,
  html[data-theme="dark"] .team-overlay-role {
    color: #FFC727 !important;
  }

  html[data-theme="light"] .team-overlay-summary,
  html[data-theme="dark"] .team-overlay-summary {
    color: #e2e8f0 !important;
  }

  html[data-theme="light"] .team-contact-link,
  html[data-theme="dark"] .team-contact-link {
    border-color: rgb(255 255 255 / 18%) !important;
    background-color: rgb(255 255 255 / 10%) !important;
    color: #ffffff !important;
  }

  html[data-theme="light"] .team-contact-link:hover,
  html[data-theme="dark"] .team-contact-link:hover {
    border-color: rgb(255 199 39 / 70%) !important;
    background-color: #FFC727 !important;
    color: #0A3D91 !important;
  }
`;

type BrandIconProps = {
  size?: number;
  "aria-hidden"?: AriaAttributes["aria-hidden"];
};

type ContactIcon = ComponentType<BrandIconProps>;

function LinkedInIcon({ size = 18, ...props }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
      <path d="M2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon({ size = 18, ...props }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.3.5S18.2.1 15 1.8a13.4 13.4 0 0 0-7 0C4.8.1 3.7.5 3.7.5A5 5 0 0 0 3.6 4a5.4 5.4 0 0 0-1.4 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4" />
      <path d="M8 19c-3 .9-3-1.5-4-2" />
    </svg>
  );
}

function InstagramIcon({ size = 18, ...props }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

const teamMembers = [
  {
    name: "Baltazary Anithet Twati",
    role: "Founder, Managing Director, Partnerships and Business Development Officer",
    tag: "LEADERSHIP",
    summary:
      "Tanzanian social entrepreneur and computer engineer dedicated to bridging the gap between education and employment. As Founder of AjiraLink, he leverages technology and strategic partnerships to build Africa’s leading youth opportunity ecosystem.",
  },
  {
    name: "Irene Macmillan Arbogast",
    role: "Executive Director, Operations, Administrative and Finance Manager",
    tag: "STRATEGY",
    summary:
      "Passionate youth advocate managing operations, administration, and finances at AjiraLink. She focuses on cultivating lasting partnerships with schools, employers, and development organizations to empower talent.",
  },
  {
    name: "Anwari Iddi Mntangi",
    role: "System Developer, Technical and IT Manager",
    tag: "PRODUCT",
    summary:
      "Specialist in web application development, software engineering, and UI/UX design. He builds reliable, innovative digital workforce solutions to expand AjiraLink’s platform capabilities across Tanzania.",
  },
  {
    name: "Elisha Steven Lema",
    role: "Marketing, Communication and Customer Support Manager",
    tag: "STORYTELLING",
    summary:
      "Creative strategist leading brand messaging, multi-channel marketing campaigns, and customer care frameworks. He is focused on amplifying AjiraLink's digital presence and creating impactful user connections across the platform.",
  },
] as const;

const teamMedia = [
  {
    image: "/images/Team Members/Baltazary Twati.jpeg",
    alt: "Portrait of Baltazary Anithet Twati",
    objectPosition: "50% 38%",
  },
  {
    image: "/images/Team Members/Irene Mulan.jpeg",
    alt: "Portrait of Irene Macmillan Arbogast",
    objectPosition: "50% 44%",
  },
  {
    image: "/images/Team Members/Anwari Iddi.jpeg",
    alt: "Portrait of Anwari Iddi Mntangi",
    objectPosition: "50% 45%",
  },
  {
    image: "/images/Team Members/Elisha Lema.jpeg",
    alt: "Portrait of Elisha Steven Lema",
    objectPosition: "30% center",
  },
] as const;

type TeamContactDetails = {
  email: string;
  phone: string;
  linkedin?: string;
  github?: string;
  website?: string;
  instagram?: string;
};

const teamContacts: readonly {
  name: string;
  contacts: TeamContactDetails;
}[] = [
  {
    name: "Baltazary Anithet Twati",
    contacts: {
      email: "baltazarytwati@gmail.com",
      phone: "+255 763 439 461",
      linkedin: "https://www.linkedin.com/in/baltazary-twati-277a55228/",
      instagram: "https://www.instagram.com/baltazary_anithet_twati/",
    },
  },
  {
    name: "Irene Macmillan Arbogast",
    contacts: {
      email: "irennemacmillan@gmail.com",
      phone: "+255 610 550 408",
      linkedin: "https://www.linkedin.com/in/irene-macmillan-7b1379272",
      instagram: "https://www.instagram.com/ms.arbogast",
    },
  },
  {
    name: "Elisha Steven Lema",
    contacts: {
      email: "elishalema12@gmail.com",
      phone: "+255 674 175 613",
      linkedin: "https://www.linkedin.com/in/elisha-lema-46424a223",
      github: "https://github.com/Lemar812",
      website: "https://elishalema.netlify.app",
      instagram: "https://www.instagram.com/elisha.steven.lema/",
    },
  },
  {
    name: "Anwari Iddi Mntangi",
    contacts: {
      email: "anuary292@gmail.com",
      phone: "+255 757 686 074",
      github: "https://github.com/Anuar22",
      website: "https://anuar.com",
    },
  },
];

const badgeIcons = [Crown, UsersRound, Code2, Megaphone] as const;

const imageSizes = "(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw";

function TeamContactLinks({ name, compact = false }: { name: string; compact?: boolean }) {
  const contacts = teamContacts.find((member) => member.name === name)?.contacts;

  if (!contacts) return null;

  const links: { label: string; href: string; icon: ContactIcon }[] = [
    {
      label: `Email ${name}`,
      href: `mailto:${contacts.email}`,
      icon: Mail,
    },
    {
      label: `Call ${name}`,
      href: `tel:${contacts.phone.replace(/\s/g, "")}`,
      icon: Phone,
    },
  ];

  if (contacts.linkedin) {
    links.push({ label: `${name} on LinkedIn`, href: contacts.linkedin, icon: LinkedInIcon });
  }
  if (contacts.github) {
    links.push({ label: `${name} on GitHub`, href: contacts.github, icon: GitHubIcon });
  }
  if (contacts.instagram) {
    links.push({ label: `${name} on Instagram`, href: contacts.instagram, icon: InstagramIcon });
  }
  if (contacts.website) {
    links.push({ label: `${name}'s website`, href: contacts.website, icon: Globe2 });
  }

  return (
    <div className="flex flex-wrap items-center gap-3" aria-label={`${name} contact links`}>
      {links.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className={`team-contact-link grid shrink-0 place-items-center rounded-full border backdrop-blur-md transition duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ajira-yellow ${
            compact ? "h-9 w-9" : "h-10 w-10"
          }`}
        >
          <Icon size={compact ? 16 : 18} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

export default function TeamPage() {
  return (
    <SiteShell>
      <style>{teamCtaThemeStyles}</style>
      <section className="relative overflow-hidden px-4 pb-20 pt-36 sm:px-6 sm:pt-40 lg:px-8">
        <Image
          src="/images/Ajiralink Website Photos/Hero Pictures/Hero-Picture-9.JPG"
          alt="The AjiraLink team building youth opportunity pathways"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="about-hero-overlay absolute inset-0" />
        <div className="about-hero-gradient absolute inset-0" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-ajira-yellow">
              AjiraLink Team
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-7xl">
              Meet the Team Behind AjiraLink
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">{pageCopy}</p>
            <ButtonLink
              href={systemRoutes.youthRegister}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#FFC727] px-5 py-2 text-sm font-black text-[#0A3D91] shadow-[0_18px_60px_rgba(255,199,39,0.26)] hover:bg-white"
            >
              Join AjiraLink
            </ButtonLink>

            <div className="mt-10 grid max-w-xl gap-3 sm:grid-cols-2">
              {[
                ["4", "core team members"],
                ["1", "shared mission"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-[1.6rem] border border-white/14 bg-white/10 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl"
                >
                  <p className="text-4xl font-black tracking-tight text-white">{value}</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-white/55">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {teamMembers.map((member, index) => {
              const media = teamMedia[index];

              return (
                <div
                  key={member.name}
                  tabIndex={0}
                  className="group relative aspect-4/5 overflow-hidden rounded-4xl border border-white/14 bg-white/10 p-2 shadow-[0_28px_90px_rgba(0,0,0,0.26)] backdrop-blur-xl transition duration-500 hover:border-ajira-yellow/45 hover:shadow-[0_34px_110px_rgba(255,199,39,0.18)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ajira-yellow"
                >
                  <div className="relative h-full overflow-hidden rounded-[1.55rem] bg-ajira-night/58">
                    <Image
                      src={media.image}
                      alt={media.alt}
                      fill
                      priority
                      sizes="(min-width: 1024px) 24vw, (min-width: 640px) 44vw, 92vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                      style={{ objectPosition: media.objectPosition }}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-ajira-night/75 via-transparent to-transparent opacity-74" />
                    <div className="team-overlay-panel absolute inset-0 z-10 flex translate-y-3 flex-col justify-end p-5 opacity-0 backdrop-blur-sm transition duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      <h2 className="team-overlay-name text-lg font-black leading-tight">{member.name}</h2>
                      <div className="mt-4">
                        <TeamContactLinks name={member.name} compact />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-6xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-ajira-yellow">
              The builders
            </p>
            <h2 className="text-4xl font-black leading-tight tracking-tight text-white lg:text-5xl">
              <span className="block lg:whitespace-nowrap">A compact team with product focus,</span>
              <span className="block lg:whitespace-nowrap">ecosystem trust, and youth-first execution.</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/66">
              Each member brings a clear responsibility to the work of helping young people discover, prepare
              for, and access credible opportunities.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => {
              const Icon = badgeIcons[index];
              const media = teamMedia[index];

              return (
                <article
                  key={member.name}
                  tabIndex={0}
                  className="group glass-panel relative h-[38rem] overflow-hidden rounded-[2.2rem] p-3 transition duration-500 hover:border-ajira-yellow/45 hover:shadow-[0_34px_110px_rgba(255,199,39,0.16)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ajira-yellow"
                >
                  <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-ajira-yellow/70 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="relative h-full overflow-hidden rounded-[1.8rem] border border-white/12 bg-ajira-night/58">
                    <Image
                      src={media.image}
                      alt={media.alt}
                      fill
                      loading="eager"
                      sizes={imageSizes}
                      className="object-cover transition duration-700 group-hover:scale-105"
                      style={{ objectPosition: media.objectPosition }}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-ajira-night/95 via-ajira-night/15 to-transparent" />
                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/14 bg-ajira-night/75 px-3 py-2 text-[0.68rem] font-black uppercase tracking-[0.16em] text-ajira-yellow backdrop-blur-xl">
                      <Icon size={14} aria-hidden="true" />
                      {member.tag}
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <div className="mb-5 flex items-center gap-2 text-ajira-yellow">
                        <BadgeCheck size={18} aria-hidden="true" />
                        <span className="h-px flex-1 bg-ajira-yellow/35" />
                      </div>
                      <h3 className="team-overlay-name text-2xl font-black leading-tight tracking-tight">
                        {member.name}
                      </h3>
                      <p className="team-overlay-summary mt-3 text-sm font-bold leading-6">{member.role}</p>
                    </div>
                  </div>

                  <div className="team-overlay-panel absolute inset-3 z-20 flex translate-y-4 flex-col justify-end p-6 opacity-0 transition duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <div className="mb-auto inline-flex w-fit items-center gap-2 rounded-full border border-ajira-yellow/35 bg-ajira-yellow/10 px-3 py-2 text-[0.68rem] font-black tracking-[0.16em] text-ajira-yellow">
                      <Icon size={14} aria-hidden="true" />
                      {member.tag}
                    </div>
                    <h3 className="team-overlay-name text-2xl font-black leading-tight">{member.name}</h3>
                    <p className="team-overlay-role mt-3 text-sm font-bold leading-6">{member.role}</p>
                    <p className="team-overlay-summary mt-4 text-sm leading-6">{member.summary}</p>
                    <div className="mt-5">
                      <TeamContactLinks name={member.name} />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative px-4 pb-24 pt-10 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.8rem] border border-white/16 bg-ajira-night p-8 shadow-[0_40px_120px_rgba(0,0,0,0.35)] sm:p-12 lg:p-16">
          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-ajira-yellow">
                Youth opportunity
              </p>
              <h2 className="team-final-cta-title text-4xl font-black tracking-tight text-white sm:text-6xl">
                Built by a team committed to youth opportunity
              </h2>
              <p className="team-final-cta-copy mt-6 max-w-2xl text-lg leading-8 text-slate-200/85">
                Join AjiraLink and connect with a platform designed to make jobs, internships, mentorship, and
                career pathways easier to find and easier to trust.
              </p>
            </div>

            <ButtonLink href={systemRoutes.youthRegister} className="w-full sm:w-auto">
              Join AjiraLink Today
            </ButtonLink>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
