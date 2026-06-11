"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  BookOpenCheck,
  BriefcaseBusiness,
  ClipboardCheck,
  GraduationCap,
  HandHeart,
  MapPinned,
  Route,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/site/button-link";
import { SplitImageCard } from "@/components/site/cards";
import { SiteShell } from "@/components/site/site-shell";
import { images, systemRoutes } from "@/data/landing";

const categories = [
  {
    title: "Jobs",
    copy: "Connect with verified employers seeking talented and motivated candidates.",
    icon: BriefcaseBusiness,
    image: "/images/Ajiralink Website Photos/Opportunities Page/Jobs.jpg",
  },
  {
    title: "Internships",
    copy: "Gain practical workplace experience and develop industry-relevant skills.",
    icon: GraduationCap,
    image: "/images/Ajiralink Website Photos/Opportunities Page/Internships.JPG",
  },
  {
    title: "Volunteer Opportunities",
    copy: "Build experience, expand networks, and contribute to meaningful causes.",
    icon: HandHeart,
    image: "/images/Ajiralink Website Photos/Opportunities Page/Volunteer-Opportunities.JPG",
  },
  {
    title: "Field Placements",
    copy: "Access attachment and field opportunities that support academic and professional growth.",
    icon: MapPinned,
    image: "/images/Ajiralink Website Photos/Opportunities Page/Field-Placements.jpg",
  },
  {
    title: "Scholarships",
    copy: "Discover opportunities that support learning, training, and educational advancement.",
    icon: BookOpenCheck,
    image: "/images/Ajiralink Website Photos/Opportunities Page/Scholarships.JPG",
  },
  {
    title: "Career Development Programs",
    copy: "Access mentorship, workshops, training programs, and professional growth resources.",
    icon: Sparkles,
    image: "/images/Ajiralink Website Photos/Opportunities Page/Career-Development-Programs.jpg",
  },
] as const;

const steps = [
  {
    label: "Step 1",
    title: "Create your profile",
    copy: "Set up a trusted profile that presents your skills, interests, and readiness.",
    icon: UserRoundCheck,
  },
  {
    label: "Step 2",
    title: "Explore verified opportunities",
    copy: "Find jobs, internships, placements, scholarships, and growth programs in one place.",
    icon: BadgeCheck,
  },
  {
    label: "Step 3",
    title: "Apply and connect",
    copy: "Take action on relevant opportunities and connect with employers or program partners.",
    icon: ClipboardCheck,
  },
  {
    label: "Step 4",
    title: "Grow your career",
    copy: "Build experience, strengthen your network, and keep moving toward professional growth.",
    icon: Route,
  },
] as const;

const firstSectionSpacing = "scroll-mt-32 px-4 pb-10 pt-8 sm:px-6 sm:pt-10 lg:px-8 lg:pt-12";
const safeSectionSpacing = "scroll-mt-32 px-4 py-10 sm:px-6 lg:px-8";

function SectionHeader({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#FFC727]">{eyebrow}</p>
      <h2 className="about-card-title text-balance text-4xl font-black leading-tight tracking-tight sm:text-5xl">
        {title}
      </h2>
      <p className="about-card-copy mx-auto mt-4 max-w-2xl text-base leading-7 sm:text-lg">{copy}</p>
    </div>
  );
}

export function OpportunitiesPageContent() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden px-4 pb-8 pt-48 sm:px-6 sm:pt-52 lg:px-8 lg:pt-56">
        <div className="home-hero-media absolute inset-x-0 -top-8 bottom-0">
          <Image
            src={images.opportunitiesHero}
            alt="Young professionals exploring career opportunities"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[62%_center] sm:object-[68%_center] lg:object-center"
          />
        </div>
        <div className="home-hero-tint absolute inset-0" />
        <div className="home-hero-gradient absolute inset-0" />
        <div className="home-hero-glow absolute inset-0" />
        <div className="home-hero-fade absolute inset-x-0 bottom-0 h-48" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-end gap-8 lg:grid-cols-[1fr_0.62fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.26em] text-[#FFC727]">Opportunities</p>
            <h1 className="home-hero-strong max-w-4xl text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              Explore Opportunities That Move Your Career Forward
            </h1>
            <p className="home-hero-copy mt-6 max-w-3xl text-base leading-7 sm:text-lg">
              Discover verified jobs, internships, volunteer placements, field opportunities, scholarships,
              and career-building experiences designed to help youth grow professionally.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={systemRoutes.opportunities}>Browse Opportunities</ButtonLink>
              <ButtonLink
                href={systemRoutes.youthRegister}
                variant="secondary"
                className="home-hero-secondary-cta"
              >
                Create Your Profile
              </ButtonLink>
            </div>
          </motion.div>

          <motion.aside
            className="opportunity-hero-panel relative overflow-hidden rounded-[2rem] border p-4 shadow-[0_28px_90px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:p-5 lg:self-end"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
          >
            <div className="relative">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[#FFC727]">
                Verified ecosystem
              </p>
              <h2 className="about-card-title text-3xl font-black leading-tight tracking-tight">
                One place for practical career access.
              </h2>
              <p className="about-card-copy mt-2 text-sm leading-5">
                AjiraLink brings opportunity discovery, youth profiles, applications, and career growth into a
                trusted pathway.
              </p>
            </div>
            <div className="relative mt-4 grid grid-cols-2 gap-2.5">
              {["Jobs", "Internships", "Volunteer", "Field", "Scholarships", "Growth"].map((item, index) => (
                <motion.div
                  key={item}
                  className="opportunity-hero-chip flex items-center justify-between gap-2 rounded-2xl border px-3 py-2.5"
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.26 + index * 0.05, ease: "easeOut" }}
                  whileHover={{ x: 6 }}
                >
                  <span className="about-card-title text-xs font-black leading-tight sm:text-sm">{item}</span>
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[#FFC727] text-xs font-black text-[#0A3D91]">
                    {index + 1}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.aside>
        </div>
      </section>

      <section className={firstSectionSpacing}>
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Opportunity Categories"
            title="A complete opportunity ecosystem for youth."
            copy="Explore trusted pathways for employment, practical learning, service, study support, and long-term career readiness."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {categories.map(({ title, copy, icon: Icon, image }, index) => (
              <SplitImageCard
                key={title}
                title={title}
                copy={copy}
                image={image}
                icon={Icon}
                index={index}
                className="opportunity-card"
                titleClassName="about-card-title"
                copyClassName="about-card-copy"
                imageClassName="object-cover object-[center_20%]"
              />
            ))}
          </div>
        </div>
      </section>

      <section className={safeSectionSpacing}>
        <div className="opportunity-pathway mx-auto max-w-7xl overflow-hidden rounded-[2rem] border p-6 backdrop-blur-2xl lg:p-8">
          <SectionHeader
            eyebrow="How AjiraLink Works"
            title="From profile to career growth."
            copy="A simple pathway that helps young people move from readiness to verified opportunity and connection."
          />
          <div className="relative grid gap-4 lg:grid-cols-4">
            {steps.map(({ label, title, copy, icon: Icon }, index) => (
              <motion.article
                key={title}
                className="opportunity-step relative rounded-[1.5rem] border border-slate-200/70 bg-white/85 p-5 dark:border-white/15 dark:bg-white/10"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
                whileHover={{ y: -6 }}
              >
                <div className="mb-4 flex items-center gap-4">
                  <motion.div
                    className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#FFC727] text-[#0A3D91] shadow-[0_16px_40px_rgba(255,199,39,0.22)]"
                    whileHover={{ scale: 1.08 }}
                  >
                    <Icon size={24} />
                  </motion.div>
                  <h3 className="about-card-title text-xl font-black leading-tight text-slate-950 dark:text-white">
                    {title}
                  </h3>
                </div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FFC727]">{label}</p>
                <p className="about-card-copy text-sm leading-6 text-slate-700 dark:text-slate-300">{copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className={safeSectionSpacing}>
        <motion.div
          className="opportunity-final-cta mx-auto grid max-w-7xl items-center gap-7 overflow-hidden rounded-[2rem] border p-6 shadow-[0_30px_90px_rgba(10,61,145,0.24)] lg:grid-cols-[1fr_auto] lg:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative z-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#FFC727]">Move forward</p>
            <h2 className="about-final-title text-3xl font-black tracking-tight sm:text-4xl">
              Ready to discover your next opportunity?
            </h2>
            <p className="about-final-copy mt-3 max-w-3xl leading-7">
              Join thousands of young people using AjiraLink to access jobs, internships, volunteer
              opportunities, field placements, and career development resources.
            </p>
          </div>
          <div className="relative z-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={systemRoutes.youthRegister}>Create Your Profile</ButtonLink>
            <ButtonLink
              href={systemRoutes.opportunities}
              variant="secondary"
              className="about-final-secondary"
            >
              Browse Opportunities
            </ButtonLink>
          </div>
        </motion.div>
      </section>
    </SiteShell>
  );
}
