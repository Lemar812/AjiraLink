"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  BookOpenCheck,
  BriefcaseBusiness,
  CalendarDays,
  GraduationCap,
  Handshake,
  Megaphone,
  Network,
  PanelsTopLeft,
  School,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/site/button-link";
import { SplitImageCard } from "@/components/site/cards";
import { LogoMarquee } from "@/components/site/logo-marquee";
import { SiteShell } from "@/components/site/site-shell";
import { images } from "@/data/landing";

const sectionSpacing = "scroll-mt-32 px-4 py-12 sm:px-6 lg:px-8 lg:py-16";
const networkSectionSpacing = "scroll-mt-32 px-4 pb-12 pt-8 sm:px-6 lg:px-8 lg:pb-16 lg:pt-10";

const themeSafetyStyles = `
  html[data-theme="dark"] .partners-page .partners-label {
    color: #fbbf24 !important;
  }

  html[data-theme="dark"] .partners-page .partners-heading {
    color: #ffffff !important;
  }

  html[data-theme="dark"] .partners-page .partners-body {
    color: #cbd5e1 !important;
  }

  html[data-theme="dark"] .partners-page .partners-muted {
    color: #94a3b8 !important;
  }

  html[data-theme="dark"] .partners-page .partners-panel {
    border-color: rgb(255 255 255 / 15%) !important;
    background: rgb(15 23 42 / 70%) !important;
  }

  html[data-theme="dark"] .partners-page .partners-hero-panel {
    border-color: rgb(255 255 255 / 15%) !important;
    background: rgb(15 23 42 / 70%) !important;
    box-shadow: 0 24px 80px rgb(0 0 0 / 24%) !important;
  }

  html[data-theme="dark"] .partners-page .partners-card {
    border-color: rgb(255 255 255 / 15%) !important;
    background: rgb(255 255 255 / 10%) !important;
  }

  html[data-theme="dark"] .partners-page .partners-hero-card {
    border-color: rgb(255 255 255 / 15%) !important;
    background: rgb(255 255 255 / 10%) !important;
  }

  html[data-theme="dark"] .partners-page .partners-soft-panel {
    border-color: rgb(255 255 255 / 15%) !important;
    background: rgb(255 255 255 / 8%) !important;
  }

  html[data-theme="light"] .partners-page .partners-label {
    color: #d97706 !important;
  }

  html[data-theme="light"] .partners-page .partners-heading {
    color: #020617 !important;
  }

  html[data-theme="light"] .partners-page .partners-body {
    color: #334155 !important;
  }

  html[data-theme="light"] .partners-page .partners-muted {
    color: #475569 !important;
  }

  html[data-theme="light"] .partners-page .partners-panel,
  html[data-theme="light"] .partners-page .partners-card,
  html[data-theme="light"] .partners-page .partners-soft-panel {
    border-color: rgb(226 232 240 / 80%) !important;
  }

  html[data-theme="light"] .partners-page .partners-hero-panel {
    border-color: rgb(226 232 240 / 80%) !important;
    background: rgb(255 255 255 / 90%) !important;
    box-shadow:
      0 20px 25px -5px rgb(15 23 42 / 10%),
      0 8px 10px -6px rgb(15 23 42 / 10%) !important;
  }

  html[data-theme="light"] .partners-page .partners-hero-card {
    border-color: rgb(226 232 240 / 80%) !important;
    background: rgb(255 255 255 / 80%) !important;
  }
`;

const fadeUpContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
} satisfies Variants;

const fadeUpItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: "easeOut" },
  },
} satisfies Variants;

const partnerPanelItems = [
  {
    title: "Schools & Universities",
    copy: "Support learners with career guidance and practical opportunity access.",
    icon: School,
  },
  {
    title: "Employers & NGOs",
    copy: "Create pathways for internships, placements, volunteering, and hiring.",
    icon: Handshake,
  },
  {
    title: "Career Programs",
    copy: "Build workshops, mentorship, CV clinics, and readiness programs.",
    icon: BookOpenCheck,
  },
  {
    title: "Digital Integration",
    copy: "Connect AjiraLink opportunities into youth and learning platforms.",
    icon: PanelsTopLeft,
  },
] as const;

const partnershipAreas = [
  {
    title: "Institutional Partnerships",
    copy: "We collaborate with schools, colleges, universities, and training institutions to support students with career guidance and opportunity access.",
    icon: GraduationCap,
    image: "/images/Ajiralink Website Photos/For Institutions and Patners Page/Institutional-Patnerships.jpg",
  },
  {
    title: "Employer Partnerships",
    copy: "We work with companies and organizations to create recruitment pathways, internships, volunteering programs, and field placements.",
    icon: BriefcaseBusiness,
    image: "/images/Ajiralink Website Photos/For Institutions and Patners Page/Employer-Patnerships.jpg",
  },
  {
    title: "Career Development Programs",
    copy: "We co-create workshops, mentorship sessions, CV clinics, interview training, and employability programs.",
    icon: BookOpenCheck,
    image:
      "/images/Ajiralink Website Photos/For Institutions and Patners Page/Career-Development-Programs.JPG",
  },
  {
    title: "Digital Platform Integration",
    copy: "We support partnerships that integrate AjiraLink opportunities into other learning and youth development platforms.",
    icon: PanelsTopLeft,
    image:
      "/images/Ajiralink Website Photos/For Institutions and Patners Page/Digital-Platform-Integration.JPG",
  },
  {
    title: "Youth Outreach and Awareness",
    copy: "We collaborate on campaigns, forums, events, career fairs, and digital engagement programs.",
    icon: Megaphone,
    image:
      "/images/Ajiralink Website Photos/For Institutions and Patners Page/Youth-Outreach-and-Awareness.jpg",
  },
] as const;

const partnershipTargets = [
  { title: "50+", copy: "New Partnerships by 2026", icon: Sparkles },
  { title: "Schools", copy: "Colleges & Universities", icon: School },
  { title: "Employers", copy: "NGOs & Companies", icon: Network },
  { title: "Career Events", copy: "Workshops & Fairs", icon: CalendarDays },
] as const;

function SectionHeader({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="partners-label mb-3 text-xs font-bold uppercase tracking-[0.24em] text-amber-600 dark:text-amber-400">
        {eyebrow}
      </p>
      <h2 className="partners-heading text-balance text-4xl font-black leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl">
        {title}
      </h2>
      <p className="partners-body mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-700 dark:text-slate-300 sm:text-lg">
        {copy}
      </p>
    </div>
  );
}

function IconTile({
  title,
  copy,
  icon: Icon,
  compact = false,
}: {
  title: string;
  copy: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  compact?: boolean;
}) {
  return (
    <div className="relative z-10 flex h-full flex-col">
      <div className="mb-4 flex items-start gap-4">
        <motion.span
          className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#FFC727] text-[#0A3D91] shadow-[0_16px_40px_rgba(255,199,39,0.24)]"
          whileHover={{ rotate: -4, scale: 1.06 }}
          transition={{ type: "spring", stiffness: 320, damping: 18 }}
        >
          <Icon size={compact ? 21 : 24} />
        </motion.span>
        <h3
          className={`partners-heading ${compact ? "text-base" : "text-xl"} font-black leading-tight tracking-tight text-slate-950 dark:text-white`}
        >
          {title}
        </h3>
      </div>
      <p
        className={`partners-body ${compact ? "text-sm leading-6" : "leading-7"} text-slate-700 dark:text-slate-300`}
      >
        {copy}
      </p>
    </div>
  );
}

function PartnershipEcosystemPanel() {
  return (
    <motion.aside
      className="partners-panel partners-hero-panel relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/90 p-4 shadow-xl backdrop-blur-xl dark:border-white/15 dark:bg-slate-900/70 sm:p-5 lg:self-center"
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
    >
      <motion.div
        className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#FFC727]/20 blur-3xl"
        animate={{ x: [0, -18, 0], y: [0, 18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative">
        <p className="partners-label mb-2 text-xs font-bold uppercase tracking-[0.22em] text-amber-600 dark:text-amber-400">
          Partnership ecosystem
        </p>
        <h2 className="partners-heading text-2xl font-black leading-tight tracking-tight text-slate-950 dark:text-white sm:text-3xl">
          Partnerships that move youth forward
        </h2>
      </div>

      <div className="relative mt-5 grid gap-3 sm:grid-cols-2">
        {partnerPanelItems.map(({ title, copy, icon: Icon }, index) => (
          <motion.div
            key={title}
            className="partners-card partners-hero-card group rounded-2xl border border-slate-200/70 bg-white/80 p-3 transition dark:border-white/15 dark:bg-white/10"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.24 + index * 0.05, ease: "easeOut" }}
            whileHover={{ y: -4, x: 4 }}
          >
            <IconTile title={title} copy={copy} icon={Icon} compact />
          </motion.div>
        ))}
      </div>
    </motion.aside>
  );
}

export function ForInstitutionsPartnersPageContent() {
  return (
    <SiteShell>
      <style>{themeSafetyStyles}</style>
      <main className="partners-page">
        <section className="relative overflow-hidden px-4 pb-12 pt-44 sm:px-6 sm:pt-48 lg:px-8">
          <div className="home-hero-media absolute inset-x-0 -top-10 bottom-0">
            <Image
              src={images.partnersHero}
              alt="Institutions and partners collaborating on youth career readiness"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[54%_center]"
            />
          </div>
          <div className="about-hero-overlay absolute inset-0" />
          <div className="about-hero-gradient absolute inset-0" />
          <div className="home-hero-glow absolute inset-0" />
          <div className="home-hero-fade absolute inset-x-0 bottom-0 h-44" />

          <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] xl:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              <p className="about-hero-label mb-5 text-xs font-bold uppercase tracking-[0.26em] text-[#FFC727]">
                PARTNERS
              </p>
              <h1 className="about-hero-title max-w-4xl text-5xl font-black leading-[0.98] tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
                Partner With AjiraLink to Prepare Youth for the Future of Work
              </h1>
              <p className="about-hero-body mt-5 max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-300 sm:text-lg">
                AjiraLink works with schools, universities, training institutions, NGOs, companies, and
                youth-focused organizations to strengthen the bridge between education, career readiness, and
                employment.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact">Become a Partner</ButtonLink>
                <ButtonLink href="/contact" variant="secondary" className="home-hero-secondary-cta">
                  Contact Us
                </ButtonLink>
              </div>
            </motion.div>

            <PartnershipEcosystemPanel />
          </div>
        </section>

        <section className={sectionSpacing}>
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="PARTNERSHIP AREAS"
              title="How we collaborate with institutions and partners"
              copy="AjiraLink builds partnerships that connect youth to career guidance, practical experience, mentorship, opportunities, and long-term employability support."
            />
            <motion.div
              className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
              variants={fadeUpContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {partnershipAreas.map(({ title, copy, icon: Icon, image }, index) => (
                <SplitImageCard
                  key={title}
                  title={title}
                  copy={copy}
                  image={image}
                  icon={Icon}
                  index={index}
                  className="partners-card"
                  titleClassName="partners-heading"
                  copyClassName="partners-body"
                />
              ))}
            </motion.div>
          </div>
        </section>

        <section className={sectionSpacing}>
          <div className="mx-auto max-w-7xl">
            <div className="partners-soft-panel overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/80 p-6 shadow-[0_28px_90px_rgba(10,61,145,0.14)] backdrop-blur-2xl dark:border-white/15 dark:bg-white/10 lg:p-8">
              <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                <div>
                  <p className="partners-label mb-3 text-xs font-bold uppercase tracking-[0.24em] text-amber-600 dark:text-amber-400">
                    Partnership targets
                  </p>
                  <h2 className="partners-heading text-4xl font-black leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl">
                    Building a stronger opportunity network
                  </h2>
                  <p className="partners-body mt-4 text-base leading-7 text-slate-700 dark:text-slate-300 sm:text-lg">
                    AjiraLink&apos;s strategic plan targets partnerships with institutions and employers,
                    including companies, NGOs, and universities, while the working plan targets 50 new
                    partnerships by the end of 2026.
                  </p>
                </div>
                <motion.div
                  className="grid gap-4 sm:grid-cols-2"
                  variants={fadeUpContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                >
                  {partnershipTargets.map(({ title, copy, icon: Icon }) => (
                    <motion.article
                      key={`${title}-${copy}`}
                      className="partners-card rounded-3xl border border-slate-200/70 bg-white/85 p-5 dark:border-white/15 dark:bg-white/10"
                      variants={fadeUpItem}
                      whileHover={{ y: -6 }}
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#FFC727] text-[#0A3D91]">
                          <Icon size={22} />
                        </span>
                        <h3 className="partners-heading text-2xl font-black text-slate-950 dark:text-white">
                          {title}
                        </h3>
                      </div>
                      <p className="partners-body text-sm font-semibold leading-6 text-slate-700 dark:text-slate-300">
                        {copy}
                      </p>
                    </motion.article>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className={networkSectionSpacing}>
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="OUR PARTNER NETWORK"
              title="Organizations connected to the AjiraLink ecosystem"
              copy="AjiraLink grows through collaboration with institutions, organizations, companies, and youth-focused partners working to expand access to opportunity."
            />
            <LogoMarquee />
          </div>
        </section>

        <section className={sectionSpacing}>
          <motion.div
            className="partners-soft-panel mx-auto grid max-w-7xl items-center gap-7 overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/80 p-6 shadow-[0_30px_90px_rgba(10,61,145,0.18)] backdrop-blur-2xl dark:border-white/15 dark:bg-white/10 lg:grid-cols-[1fr_auto] lg:p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative z-10">
              <p className="partners-label mb-3 text-xs font-bold uppercase tracking-[0.24em] text-amber-600 dark:text-amber-400">
                Take action
              </p>
              <h2 className="partners-heading text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                Ready to build youth opportunity pathways with AjiraLink?
              </h2>
              <p className="partners-body mt-3 max-w-3xl leading-7 text-slate-700 dark:text-slate-300">
                Partner with AjiraLink to support career guidance, practical experience, institutional
                collaboration, and youth employment access across Tanzania and beyond.
              </p>
            </div>
            <div className="relative z-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Become a Partner</ButtonLink>
              <ButtonLink href="/contact" variant="secondary" className="about-final-secondary">
                Contact Us
              </ButtonLink>
            </div>
          </motion.div>
        </section>
      </main>
    </SiteShell>
  );
}
