"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  Compass,
  Eye,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Target,
} from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/site/button-link";
import { SplitImageCard } from "@/components/site/cards";
import { SiteShell } from "@/components/site/site-shell";
import { images, systemRoutes } from "@/data/landing";

const aboutParagraphs = [
  "AjiraLink is a social entrepreneurship initiative dedicated to bridging the gap between youth and opportunity providers.",
  "We empower students, graduates, and young professionals by connecting them to meaningful employment, internships, volunteer placements, field opportunities, and career development resources.",
  "AjiraLink was established in response to the growing challenge of youth unemployment, limited access to reliable job information, and the lack of structured career guidance for many young people.",
  "Through digital innovation and strategic partnerships, we are building a trusted ecosystem where talent meets opportunity.",
] as const;

const objectives = [
  "Increase youth access to verified job opportunities",
  "Connect employers with qualified and motivated candidates",
  "Promote internships, field placements, and volunteer programs for skills development",
  "Provide career guidance and professional growth resources",
  "Use technology to simplify recruitment and job searching",
  "Build partnerships that support youth employment and career readiness",
] as const;

const values = [
  {
    title: "Integrity",
    copy: "We believe in transparency, trust, and verified opportunities.",
    icon: ShieldCheck,
    image: "/images/Ajiralink Website Photos/About Page/Our Values/Integrity.jpg",
  },
  {
    title: "Innovation",
    copy: "We use technology to create better employment and career development solutions.",
    icon: Lightbulb,
    image: "/images/Ajiralink Website Photos/About Page/Our Values/Innovation.jpg",
  },
  {
    title: "Inclusivity",
    copy: "We believe every young person deserves access to information, guidance, and opportunities.",
    icon: HeartHandshake,
    image: "/images/Ajiralink Website Photos/About Page/Our Values/Inclusivity.jpg",
  },
  {
    title: "Accountability",
    copy: "We measure our work, improve continuously, and remain committed to impact.",
    icon: BadgeCheck,
    image: "/images/Ajiralink Website Photos/About Page/Our Values/Accountability.jpg",
  },
  {
    title: "Youth Empowerment",
    copy: "We are building a platform that helps youth create sustainable futures.",
    icon: Rocket,
    image: "/images/Ajiralink Website Photos/About Page/Our Values/Youth-Empowerement.jpg",
  },
] as const;

const ecosystemItems = [
  {
    title: "Youth Profile",
    copy: "Skills and readiness.",
    icon: GraduationCap,
  },
  {
    title: "Career Guidance",
    copy: "Direction and preparation.",
    icon: BookOpen,
  },
  {
    title: "Verified Opportunities",
    copy: "Trusted openings.",
    icon: BadgeCheck,
  },
  {
    title: "Employer Connection",
    copy: "Talent meets demand.",
    icon: BriefcaseBusiness,
  },
] as const;

function SectionHeader({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#FFC727]">{eyebrow}</p>
      <h2 className="about-card-title text-balance text-4xl font-black leading-tight tracking-tight sm:text-5xl">
        {title}
      </h2>
      {copy ? <p className="about-card-copy mx-auto mt-4 max-w-2xl text-lg leading-8">{copy}</p> : null}
    </div>
  );
}

function EcosystemPanel() {
  return (
    <motion.aside
      className="about-hero-card relative overflow-hidden rounded-[2rem] border p-4 shadow-xl backdrop-blur-2xl sm:p-5 lg:self-center"
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
    >
      <motion.div
        className="about-ecosystem-orb absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl"
        animate={{ x: [0, -18, 0], y: [0, 18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative">
        <p className="about-hero-label mb-2 text-xs font-bold uppercase tracking-[0.22em]">
          AjiraLink Ecosystem
        </p>
        <h2 className="about-hero-title text-2xl font-black leading-tight tracking-tight sm:text-3xl">
          From potential to opportunity
        </h2>
        <p className="about-hero-body mt-2 text-sm leading-5">
          Talent moves faster when guidance, readiness, and opportunity are connected.
        </p>
      </div>

      <div className="relative mt-4 grid gap-2.5 sm:grid-cols-2">
        {ecosystemItems.map(({ title, copy, icon: Icon }, index) => (
          <motion.div
            key={title}
            className="about-hero-card-item group rounded-2xl border p-2.5 transition"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.24 + index * 0.05, ease: "easeOut" }}
            whileHover={{ y: -4, x: 4 }}
          >
            <div className="flex items-start gap-3">
              <motion.span
                className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-[#FFC727] text-[#0A3D91] shadow-[0_10px_24px_rgba(255,199,39,0.28)] transition group-hover:scale-105"
                animate={{
                  y: [0, -2, 0],
                  boxShadow: [
                    "0 10px 24px rgba(255,199,39,0.18)",
                    "0 14px 34px rgba(255,199,39,0.3)",
                    "0 10px 24px rgba(255,199,39,0.18)",
                  ],
                }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Icon size={17} />
              </motion.span>
              <div>
                <h3 className="about-hero-title text-sm font-black">{title}</h3>
                <p className="about-hero-secondary mt-0.5 text-xs leading-5">{copy}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.aside>
  );
}

export function AboutUsPageContent() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden px-4 pb-10 pt-44 sm:px-6 sm:pt-48 lg:px-8">
        <div className="home-hero-media absolute inset-x-0 -top-10 bottom-0">
          <Image
            src={images.aboutHero}
            alt="Young people connecting through AjiraLink opportunities"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[58%_center]"
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
            <p className="about-hero-label mb-5 text-xs font-bold uppercase tracking-[0.26em]">About Us</p>
            <h1 className="about-hero-title max-w-4xl text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              About AjiraLink
            </h1>
            <div className="mt-5 max-w-3xl">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph} className="about-hero-body mb-4 text-base leading-7 last:mb-0 sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={systemRoutes.youthRegister}>Create Your Profile</ButtonLink>
              <ButtonLink href="/contact" variant="secondary" className="home-hero-secondary-cta">
                Partner With Us
              </ButtonLink>
            </div>
          </motion.div>

          <EcosystemPanel />
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          <SplitImageCard
            title="Transform youth livelihoods."
            copy="To become a leading digital employment platform transforming youth livelihoods by increasing access to decent work and professional opportunities across Africa."
            image="/images/Ajiralink Website Photos/About Page/Our-Vision.jpg"
            icon={Eye}
            className="glass-panel"
            titleClassName="about-card-title"
            copyClassName="about-card-copy"
          />
          <SplitImageCard
            title="Connect youth to opportunity."
            copy="To empower youth by providing accessible, reliable, and inclusive digital platforms that connect them to jobs, internships, volunteer opportunities, field placements, and career development resources."
            image="/images/Ajiralink Website Photos/About Page/Our-Mission.jpg"
            icon={Compass}
            className="glass-panel"
            titleClassName="about-card-title"
            copyClassName="about-card-copy"
          />
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Our Objectives"
            title="What AjiraLink exists to do."
            copy="Focused outcomes for youth, employers, partners, and career readiness."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {objectives.map((objective, index) => (
              <motion.div
                key={objective}
                className="glass-panel rounded-[1.5rem] p-5"
                data-gsap-reveal
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.04 }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#FFC727] text-sm font-black text-[#0A3D91]">
                    {index + 1}
                  </span>
                  <Target size={18} className="text-[#FFC727]" />
                  <h3 className="about-card-title text-lg font-black">Objective {index + 1}</h3>
                </div>
                <p className="about-card-copy font-semibold leading-7">{objective}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Our Values"
            title="The principles guiding AjiraLink."
            copy="Practical values that keep the platform trusted, inclusive, and impact-focused."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {values.map(({ title, copy, icon: Icon, image }, index) => (
              <SplitImageCard
                key={title}
                title={title}
                copy={copy}
                image={image}
                icon={Icon}
                index={index}
                className="glass-panel"
                titleClassName="about-card-title"
                copyClassName="about-card-copy"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="about-final-cta mx-auto grid max-w-7xl items-center gap-6 rounded-[2rem] p-6 shadow-[0_30px_90px_rgba(10,61,145,0.24)] lg:grid-cols-[1fr_auto] lg:p-8">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#FFC727]">Move forward</p>
            <h2 className="about-final-title text-3xl font-black tracking-tight sm:text-4xl">
              Join the AjiraLink ecosystem.
            </h2>
            <p className="about-final-copy mt-3 max-w-2xl leading-7">
              Create your profile, explore verified opportunities, or partner with AjiraLink to expand youth
              access.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={systemRoutes.youthRegister}>Create Your Profile</ButtonLink>
            <ButtonLink href="/contact" variant="secondary" className="about-final-secondary">
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
