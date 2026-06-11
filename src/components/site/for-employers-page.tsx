"use client";

import { motion, useInView, useScroll, useSpring } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  BadgeCheck,
  BookMarked,
  BriefcaseBusiness,
  CheckCircle,
  Clock,
  HandshakeIcon,
  HeartHandshake,
  LogIn,
  Sparkles,
  UserRoundCheck,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ButtonLink } from "@/components/site/button-link";
import { SplitImageCard } from "@/components/site/cards";
import { SiteShell } from "@/components/site/site-shell";
import { images, systemRoutes } from "@/data/landing";

const employerBenefits = [
  {
    title: "Post Opportunities",
    copy: "Share jobs, internships, volunteer roles, and field placements with young people ready to grow.",
    icon: BriefcaseBusiness,
    image: "/images/Ajiralink Website Photos/Employers Page/Find-Motivated-Candidates.jpg",
  },
  {
    title: "Reach Motivated Youth",
    copy: "Connect with students, graduates, and young professionals actively seeking career opportunities.",
    icon: Users,
    image: "/images/Ajiralink Website Photos/Employers Page/Find-Motivated-Candidates.jpg",
  },
  {
    title: "Support Candidate Screening",
    copy: "Use AjiraLink to simplify discovery, shortlisting, and connection with suitable candidates.",
    icon: BadgeCheck,
    image: "/images/Ajiralink Website Photos/Employers Page/Save-Time.jpg",
  },
  {
    title: "Build Internship Pathways",
    copy: "Create internship, field placement, and practical learning routes for young people.",
    icon: BookMarked,
    image: "/images/Ajiralink Website Photos/Employers Page/Support-Youth-Employment.jpg",
  },
  {
    title: "Promote Volunteer Programs",
    copy: "Reach youth interested in service, community engagement, and professional experience.",
    icon: HandshakeIcon,
    image: "/images/Ajiralink Website Photos/Employers Page/Support-Youth-Employment.jpg",
  },
  {
    title: "Strengthen Employer Branding",
    copy: "Position your organization as a supporter of youth employment and career development.",
    icon: Sparkles,
    image: "/images/Ajiralink Website Photos/Employers Page/Strengthen-Your-Brand.jpg",
  },
] as const;

const employerBenefitCards = [
  {
    title: "Save Time",
    copy: "Reach youth directly through a focused opportunity platform.",
    icon: Clock,
    image: "/images/Ajiralink Website Photos/Employers Page/Save-Time.jpg",
  },
  {
    title: "Find Motivated Candidates",
    copy: "Connect with young people who are actively seeking growth.",
    icon: UserRoundCheck,
    image: "/images/Ajiralink Website Photos/Employers Page/Find-Motivated-Candidates.jpg",
  },
  {
    title: "Support Youth Employment",
    copy: "Contribute to career development and practical work experience.",
    icon: HeartHandshake,
    image: "/images/Ajiralink Website Photos/Employers Page/Support-Youth-Employment.jpg",
  },
  {
    title: "Strengthen Your Brand",
    copy: "Position your organization as a youth-friendly employer.",
    icon: Sparkles,
    image: "/images/Ajiralink Website Photos/Employers Page/Strengthen-Your-Brand.jpg",
  },
] as const;

const employerSteps = [
  {
    label: "Step 1",
    title: "Register or Login",
    copy: "Create your employer account or access the AjiraLink system.",
    icon: LogIn,
  },
  {
    label: "Step 2",
    title: "Post an Opportunity",
    copy: "Share details of your job, internship, volunteer role, or field placement.",
    icon: BriefcaseBusiness,
  },
  {
    label: "Step 3",
    title: "Connect With Candidates",
    copy: "Reach motivated youth and review suitable profiles.",
    icon: Users,
  },
  {
    label: "Step 4",
    title: "Grow Your Team",
    copy: "Build a reliable pipeline of young talent for your organization.",
    icon: CheckCircle,
  },
] as const;

const talentPipelineItems = [
  "Post Opportunities",
  "Reach Young Talent",
  "Screen Candidates",
  "Build Partnerships",
];

const safeSectionSpacing = "scroll-mt-32 px-4 pb-10 pt-12 sm:px-6 md:pt-14 lg:px-8 lg:pt-16";

const fadeUpContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
} satisfies Variants;

function EmployerTimelineStep({
  step,
  index,
  isActive,
  onActivate,
}: {
  step: (typeof employerSteps)[number];
  index: number;
  isActive: boolean;
  onActivate: (index: number) => void;
}) {
  const stepRef = useRef<HTMLElement>(null);
  const isInView = useInView(stepRef, {
    amount: 0.55,
    margin: "-18% 0px -32% 0px",
  });
  const Icon = step.icon;
  const cardPosition =
    index % 2 === 0 ? "lg:col-start-1 lg:row-start-1 lg:pr-3" : "lg:col-start-3 lg:row-start-1 lg:pl-3";

  useEffect(() => {
    if (isInView) onActivate(index);
  }, [index, isInView, onActivate]);

  return (
    <motion.article
      ref={stepRef}
      className="relative grid grid-cols-[3.5rem_minmax(0,1fr)] items-center gap-4 lg:grid-cols-[minmax(0,1fr)_5rem_minmax(0,1fr)] lg:gap-6"
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: "easeOut" }}
    >
      <motion.div
        className={`employers-step col-start-2 rounded-3xl border p-5 backdrop-blur-xl ${cardPosition} ${
          isActive
            ? "border-[#FFC727]/70 bg-white shadow-[0_24px_70px_rgba(10,61,145,0.2)] dark:bg-slate-900/95"
            : "border-slate-200/70 bg-white/80 shadow-[0_14px_44px_rgba(10,61,145,0.08)] dark:border-white/15 dark:bg-white/10"
        }`}
        animate={{ scale: isActive ? 1.03 : 1, y: isActive ? -3 : 0 }}
        transition={{ type: "spring", stiffness: 240, damping: 22 }}
      >
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">
          {step.label}
        </p>
        <h3 className="text-xl font-black leading-tight text-slate-950 dark:text-white">{step.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">{step.copy}</p>
      </motion.div>

      <motion.div
        className="relative z-10 col-start-1 row-start-1 grid h-14 w-14 place-items-center rounded-2xl bg-[#FFC727] text-[#0A3D91] lg:col-start-2"
        animate={{
          scale: isActive ? 1.1 : 1,
          boxShadow: isActive ? "0 18px 46px rgba(255,199,39,0.42)" : "0 12px 30px rgba(255,199,39,0.22)",
        }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <Icon size={24} />
      </motion.div>
    </motion.article>
  );
}

function EmployerTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 72%", "end 48%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.25,
  });

  return (
    <div ref={timelineRef} className="relative space-y-7 py-2 sm:space-y-9 lg:space-y-10">
      <div className="absolute bottom-7 left-7 top-7 w-1 -translate-x-1/2 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10 lg:left-1/2">
        <motion.div
          className="h-full w-full origin-top rounded-full bg-linear-to-b from-[#FFC727] via-[#F59E0B] to-[#0A3D91]"
          style={{ scaleY: progress }}
        />
      </div>

      {employerSteps.map((step, index) => (
        <EmployerTimelineStep
          key={step.title}
          step={step}
          index={index}
          isActive={activeIndex === index}
          onActivate={setActiveIndex}
        />
      ))}
    </div>
  );
}

function SectionHeader({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-amber-600 dark:text-amber-400">
        {eyebrow}
      </p>
      <h2 className="text-balance text-4xl font-black leading-tight tracking-tight text-slate-950 dark:text-white sm:text-5xl">
        {title}
      </h2>
      {copy ? (
        <p className="employers-section-copy mx-auto mt-4 max-w-2xl text-base font-medium leading-7 text-[#374151] dark:text-slate-300 sm:text-lg">
          {copy}
        </p>
      ) : null}
    </div>
  );
}

function TalentPipelinePanel() {
  return (
    <motion.aside
      className="employers-hero-card relative overflow-hidden rounded-4xl border border-slate-200/80 bg-white/90 p-4 shadow-xl backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/70 sm:p-5 lg:self-center"
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
    >
      <motion.div
        className="employers-orb absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#FFC727]/20 blur-3xl"
        animate={{ x: [0, -18, 0], y: [0, 18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-amber-600 dark:text-amber-400">
          Employer toolkit
        </p>
        <h2 className="text-2xl font-black leading-tight tracking-tight text-slate-950 dark:text-white sm:text-3xl">
          Build your youth talent pipeline
        </h2>
        <p className="mt-2 text-sm leading-5 text-slate-700 dark:text-slate-300">
          A complete system for recruiting, screening, and developing motivated young talent.
        </p>
      </div>

      <div className="relative mt-4 grid gap-2.5 sm:grid-cols-2">
        {talentPipelineItems.map((item, index) => (
          <motion.div
            key={item}
            className="employers-hero-card-item group rounded-2xl border border-slate-200/70 bg-white/85 p-2.5 transition dark:border-white/15 dark:bg-white/10"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.24 + index * 0.05, ease: "easeOut" }}
            whileHover={{ y: -4, x: 4 }}
          >
            <div className="flex items-start gap-3">
              <motion.span
                className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-[#FFC727] text-[#0A3D91] shadow-[0_10px_24px_rgba(255,199,39,0.28)] transition group-hover:scale-105 font-bold text-xs"
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
                {index + 1}
              </motion.span>
              <div>
                <h3 className="text-sm font-black text-slate-950 dark:text-white">{item}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.aside>
  );
}

export function ForEmployersPageContent() {
  return (
    <SiteShell>
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 pb-10 pt-44 sm:px-6 sm:pt-48 lg:px-8">
        <div className="home-hero-media absolute inset-x-0 -top-10 bottom-0">
          <Image
            src={images.employersHero}
            alt="Employers connecting with young talent"
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
            <p className="about-hero-label mb-5 text-xs font-bold uppercase tracking-[0.26em] text-[#FFC727]">
              For Employers
            </p>
            <h1 className="about-hero-title max-w-4xl text-5xl font-black leading-[0.98] tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
              Find Young Talent Ready to Learn, Work, and Grow
            </h1>
            <p className="about-hero-body mt-5 max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-300 sm:text-lg">
              AjiraLink helps companies, NGOs, institutions, and organizations connect with motivated young
              people seeking employment, internships, field placements, and volunteer opportunities.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={systemRoutes.postOpportunity}>Post an Opportunity</ButtonLink>
              <ButtonLink
                href={systemRoutes.employerRegister}
                variant="secondary"
                className="home-hero-secondary-cta"
              >
                Register as an Employer
              </ButtonLink>
            </div>
          </motion.div>

          <TalentPipelinePanel />
        </div>
      </section>

      {/* Employer Benefits */}
      <section className={safeSectionSpacing}>
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="EMPLOYER BENEFITS"
            title="Why employers choose AjiraLink"
            copy="AjiraLink helps employers, NGOs, institutions, and organizations reach motivated young people, simplify opportunity sharing, and build stronger pathways for youth employment and practical experience."
          />
          <motion.div
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
            variants={fadeUpContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {employerBenefitCards.map(({ title, copy, icon: Icon, image }, index) => (
              <SplitImageCard
                key={title}
                title={title}
                copy={copy}
                image={image}
                icon={Icon}
                index={index}
                className="employers-card"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* What Employers Can Do */}
      <section className={safeSectionSpacing}>
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Employer Value"
            title="What Employers Can Do"
            copy="Build your talent pipeline and support young people in meaningful career development."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {employerBenefits.map(({ title, copy, icon: Icon, image }, index) => (
              <SplitImageCard
                key={title}
                title={title}
                copy={copy}
                image={image}
                icon={Icon}
                index={index}
                className="employers-card"
              />
            ))}
          </div>
        </div>
      </section>

      {/* How Employers Use AjiraLink - Process Section */}
      <section className={safeSectionSpacing}>
        <div className="employers-pathway mx-auto max-w-7xl overflow-hidden rounded-4xl border border-slate-200/70 bg-white/40 dark:border-white/15 dark:bg-white/5 p-6 backdrop-blur-2xl lg:p-8">
          <SectionHeader
            eyebrow="How It Works"
            title="How Employers Use AjiraLink"
            copy="A straightforward pathway to connect with motivated young talent and build sustainable recruitment pipelines."
          />
          <EmployerTimeline />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={safeSectionSpacing}>
        <motion.div
          className="employers-final-cta mx-auto grid max-w-7xl items-center gap-7 overflow-hidden rounded-4xl border border-slate-200/70 bg-white/40 dark:border-white/15 dark:bg-white/5 p-6 shadow-[0_30px_90px_rgba(10,61,145,0.24)] backdrop-blur-2xl lg:grid-cols-[1fr_auto] lg:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative z-10">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-amber-600 dark:text-amber-400">
              Take action
            </p>
            <h2 className="about-final-title text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl">
              Ready to connect with young talent?
            </h2>
            <p className="about-final-copy mt-3 max-w-3xl leading-7 text-slate-700 dark:text-slate-300">
              Post opportunities, discover motivated candidates, and help young people gain meaningful work
              experience through AjiraLink.
            </p>
          </div>
          <div className="relative z-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={systemRoutes.postOpportunity}>Post an Opportunity</ButtonLink>
            <ButtonLink
              href={systemRoutes.employerRegister}
              variant="secondary"
              className="about-final-secondary"
            >
              Register as an Employer
            </ButtonLink>
          </div>
        </motion.div>
      </section>
    </SiteShell>
  );
}
