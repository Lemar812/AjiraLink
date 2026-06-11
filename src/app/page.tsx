"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { BadgeCheck, ChevronDown, ChevronRight, Handshake, Search, Sparkles, Users } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { AnimatedCounter } from "@/components/site/animated-counter";
import { ButtonLink } from "@/components/site/button-link";
import { FeatureCard, TestimonialCard } from "@/components/site/cards";
import { SiteShell } from "@/components/site/site-shell";
import { SectionTitle } from "@/components/ui/section-title";
import { useTheme } from "@/components/site/theme-provider";
import {
  challengePoints,
  features,
  heroStats,
  images,
  solutionPoints,
  systemCards,
  systemRoutes,
  testimonials,
} from "@/data/landing";
import { cn } from "@/lib/utils";

const challengeItems = [
  {
    title: "Verified early-career opportunities are hard to find",
    copy: challengePoints[0],
  },
  {
    title: "Information is scattered across informal channels",
    copy: challengePoints[1],
  },
  {
    title: "Employers and institutions need a trusted youth channel",
    copy: challengePoints[2],
  },
  {
    title: "Access should not depend on personal networks",
    copy: challengePoints[3],
  },
] as const;

const solutionItems = [
  {
    title: "One trusted digital bridge",
    copy: solutionPoints[0],
  },
  {
    title: "A complete youth opportunity pathway",
    copy: solutionPoints[1],
  },
  {
    title: "Better reach for employers and partners",
    copy: solutionPoints[2],
  },
  {
    title: "Clear marketing layer, working platform inside",
    copy: solutionPoints[3],
  },
] as const;

const statIcons = [Users, Search, Handshake, Sparkles] as const;

function HeroSignalCard() {
  return (
    <motion.div
      className="home-hero-signal mt-8 max-w-3xl rounded-3xl border p-4 shadow-[0_24px_80px_rgba(0,0,0,0.34)] backdrop-blur-2xl sm:p-5"
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.35, ease: "easeOut" }}
    >
      <div className="mb-4 flex items-center justify-between gap-4">
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#FFC727]">Opportunity feed</span>
        <BadgeCheck size={18} className="text-[#FFC727]" />
      </div>
      <p className="home-hero-strong text-xl font-semibold leading-tight sm:text-2xl">
        Jobs, internships, volunteer placements, field opportunities, mentorship, and career guidance.
      </p>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {[
          ["Verified", "Roles"],
          ["Ready", "Profiles"],
          ["Partner", "Reach"],
        ].map(([top, bottom]) => (
          <div key={top} className="home-hero-signal-chip rounded-2xl border px-3 py-3">
            <p className="home-hero-strong text-sm font-black">{top}</p>
            <p className="home-hero-muted mt-1 text-xs font-semibold uppercase tracking-[0.14em]">{bottom}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function StatsStrip() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section className="relative z-20 scroll-mt-32 px-4 pb-12 pt-16 sm:px-6 md:pb-14 md:pt-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {heroStats.map((stat, index) => {
          const Icon = statIcons[index] ?? Sparkles;

          return (
            <motion.div
              key={stat.label}
              className={cn(
                "grid min-h-28 grid-cols-[auto_1fr] items-center gap-4 rounded-3xl border p-4 shadow-[0_22px_70px_rgba(0,0,0,0.18)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1",
                isLight
                  ? "border-slate-200/70 bg-white/85 shadow-[0_22px_70px_rgba(10,61,145,0.12)]"
                  : "border-white/15 bg-white/10",
              )}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: index * 0.07 }}
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#FFC727] text-[#0A3D91] shadow-[0_14px_40px_rgba(255,199,39,0.2)]">
                <Icon size={20} />
              </span>
              <span className="min-w-0">
                <span
                  className={cn(
                    "block whitespace-nowrap text-4xl font-black tracking-tight sm:text-[2.75rem]",
                    isLight ? "text-slate-950" : "text-white",
                  )}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <span
                  className={cn(
                    "mt-2 block text-sm font-semibold uppercase tracking-[0.16em]",
                    isLight ? "text-slate-700" : "text-slate-300",
                  )}
                >
                  {stat.label}
                </span>
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

type AccordionGroupProps = {
  eyebrow: string;
  title: string;
  copy: string;
  items: readonly { title: string; copy: string }[];
  defaultOpen?: number;
};

function AccordionGroup({ eyebrow, title, copy, items, defaultOpen = 0 }: AccordionGroupProps) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <motion.div
      className={cn(
        "rounded-3xl border p-5 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-2xl sm:p-6",
        isLight
          ? "border-slate-200/70 bg-white/85 shadow-[0_24px_80px_rgba(10,61,145,0.12)]"
          : "border-white/15 bg-white/10",
      )}
      data-gsap-reveal
    >
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#FFC727]">{eyebrow}</p>
      <h2
        className={cn(
          "text-3xl font-semibold tracking-tight sm:text-4xl",
          isLight ? "text-slate-950" : "text-white",
        )}
      >
        {title}
      </h2>
      <p className={cn("mt-3 leading-7", isLight ? "text-slate-700" : "text-slate-300")}>{copy}</p>
      <div className="mt-5 grid gap-2.5">
        {items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={item.title}
              className={cn(
                "overflow-hidden rounded-2xl border transition duration-300",
                isLight ? "border-slate-200/70 bg-white/75" : "border-white/10 bg-white/5",
              )}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className={cn(
                  "flex w-full items-center justify-between gap-4 px-4 py-3 text-left transition",
                  isLight ? "hover:bg-slate-100/80" : "hover:bg-white/6",
                )}
                aria-expanded={isOpen}
              >
                <span
                  className={cn(
                    "text-sm font-black leading-6 sm:text-base",
                    isLight ? "text-slate-950" : "text-white",
                  )}
                >
                  {item.title}
                </span>
                <ChevronDown
                  size={18}
                  className={cn("shrink-0 text-[#FFC727] transition duration-300", isOpen && "rotate-180")}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <p
                      className={cn(
                        "border-t px-4 py-3 leading-7",
                        isLight ? "border-slate-200/70 text-slate-700" : "border-white/10 text-slate-300",
                      )}
                    >
                      {item.copy}
                    </p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

function SystemConnection() {
  return (
    <section className="relative px-4 py-12 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="System connection"
          title="Marketing outside. The existing AjiraLink platform inside."
          copy="This website builds trust, search visibility, and partnerships. Every action routes users into the working AjiraLink system."
        />
        <div className="-mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {systemCards.map((card, index) => (
            <FeatureCard key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalHomeCta() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const overlayColor = isLight ? "bg-[rgba(255,255,255,0.92)]" : "bg-[rgba(6,26,63,0.82)]";
  const gradientLayer = isLight
    ? "bg-[radial-gradient(circle_at_20%_20%,rgba(255,199,39,0.28),transparent_28%),radial-gradient(circle_at_80%_50%,rgba(10,61,145,0.18),transparent_34%)]"
    : "bg-[radial-gradient(circle_at_20%_20%,rgba(255,199,39,0.24),transparent_28%),radial-gradient(circle_at_80%_50%,rgba(10,61,145,0.65),transparent_34%)]";
  const titleColor = isLight ? "text-ajira-night" : "text-[#ffffff]";
  const copyColor = isLight ? "text-[#0A3D91]/82" : "text-[#ffffff]/68";
  const secondaryButtonClass = isLight
    ? "min-w-56 border-[#0A3D91]/22 bg-white/90 text-[#0A3D91] hover:bg-[#0A3D91]/10"
    : "min-w-56 border-white/22 bg-[rgba(255,255,255,0.16)] text-[#ffffff] hover:bg-[rgba(255,255,255,0.24)]";
  const imageFilter = isLight ? "brightness-105 contrast-105 saturate-105" : "";
  const blobA = isLight ? "bg-[#FFC727]/20" : "bg-[#FFC727]/16";
  const blobB = isLight ? "bg-[#0A3D91]/12" : "bg-[#0A3D91]/20";

  return (
    <section className="relative overflow-hidden px-4 py-14 sm:px-6 lg:px-8">
      <Image
        src="/images/Ajiralink Website Photos/Home Page/Outreach-and-Ecosystem.jpg"
        alt="Young professionals collaborating in a workshop"
        fill
        sizes="100vw"
        className={`object-cover ${imageFilter}`}
      />
      <div className={`absolute inset-0 ${overlayColor} transition-colors duration-300`} />
      <div className={`absolute inset-0 ${gradientLayer} opacity-90`} />
      <div
        className={`absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl opacity-80 ${blobA}`}
      />
      <div className={`absolute -right-24 bottom-10 h-72 w-72 rounded-full blur-3xl opacity-70 ${blobB}`} />
      <div className="relative z-10 mx-auto grid max-w-7xl items-end gap-6 lg:grid-cols-[1fr_auto]">
        <div className="max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-[#FFC727]">
            Final Call To Action
          </p>
          <h2 className={`text-4xl font-black tracking-tight sm:text-6xl ${titleColor}`}>
            Your future should not depend on who you know.
          </h2>
          <p className={`mt-4 max-w-2xl text-lg leading-8 ${copyColor}`}>
            Create your profile, explore verified opportunities, or partner with AjiraLink to expand youth
            access across Africa.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col">
          <ButtonLink href={systemRoutes.youthRegister} className="min-w-56">
            Create Your Profile
          </ButtonLink>
          <ButtonLink href={systemRoutes.opportunities} variant="secondary" className={secondaryButtonClass}>
            Explore Opportunities
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, 120]);

  return (
    <SiteShell>
      <section className="relative min-h-screen overflow-hidden pb-16 pt-44 sm:pt-48 lg:pt-52">
        <motion.div style={{ y: heroY }} className="home-hero-media absolute inset-x-0 -top-10 bottom-0">
          <Image
            src={images.homeHero}
            alt="African youth using technology to access career opportunities"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[65%_center]"
          />
        </motion.div>
        <div className="home-hero-tint absolute inset-0" />
        <div className="home-hero-gradient absolute inset-0" />
        <div className="home-hero-glow absolute inset-0" />
        <div className="home-hero-fade absolute inset-x-0 bottom-0 h-52" />

        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl pb-6">
            <motion.div
              className="home-hero-pill mb-7 inline-flex items-center gap-3 rounded-full border px-4 py-2 text-sm font-semibold backdrop-blur-xl"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <span className="h-2 w-2 rounded-full bg-[#FFC727] shadow-[0_0_18px_#FFC727]" />
              Where Talent Meets Opportunities
            </motion.div>
            <motion.h1
              className="home-hero-strong max-w-4xl text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: "easeOut" }}
            >
              AjiraLink: Where Talent Meets Opportunities
            </motion.h1>
            <motion.p
              className="home-hero-copy mt-6 max-w-3xl text-base leading-8 sm:text-lg"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.14, ease: "easeOut" }}
            >
              AjiraLink is a youth-focused digital employment and career development platform connecting
              students, graduates, and young professionals to verified jobs, internships, volunteer
              placements, field opportunities, mentorship, and career guidance.
            </motion.p>
            <motion.p
              className="mt-5 inline-flex items-center gap-2 text-base font-bold text-[#FFC727] sm:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <ChevronRight size={20} /> Your future should not depend on who you know.
            </motion.p>
            <motion.div
              className="mt-8 grid w-full max-w-3xl gap-3 sm:grid-cols-3"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28, ease: "easeOut" }}
            >
              <ButtonLink href={systemRoutes.opportunities} className="w-full px-4">
                Explore Opportunities
              </ButtonLink>
              <ButtonLink
                href={systemRoutes.youthRegister}
                variant="secondary"
                className="home-hero-secondary-cta w-full px-4"
              >
                Create Your Profile
              </ButtonLink>
              <ButtonLink
                href={systemRoutes.postOpportunity}
                variant="ghost"
                className="w-full bg-ajira-white px-4 text-[#0A3D91] hover:bg-[#FFC727]"
              >
                Post an Opportunity
              </ButtonLink>
            </motion.div>
            <HeroSignalCard />
          </div>
        </div>
      </section>

      <StatsStrip />

      <section className="relative scroll-mt-32 px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          <AccordionGroup
            eyebrow="The Challenge"
            title="Opportunity exists, but access is still uneven."
            copy="Young people need visible, credible, and actionable career pathways without relying on scattered information."
            items={challengeItems}
          />
          <AccordionGroup
            eyebrow="Our Solution"
            title="A trusted bridge between youth, employers, and partners."
            copy="AjiraLink keeps public messaging clear while routing account actions into the working platform."
            items={solutionItems}
          />
        </div>
      </section>

      <SystemConnection />

      <section className="relative px-4 py-12 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Why choose AjiraLink"
            title="A premium opportunity layer for Africa's next workforce."
            copy="AjiraLink is not a dashboard and not a generic job board. It is a trust-building platform designed to move youth toward real career action."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} card={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            className="relative min-h-105 overflow-hidden rounded-[2.5rem] border border-white/14"
            data-gsap-reveal
            whileHover={{ scale: 1.01 }}
          >
            <Image
              src="/images/Ajiralink Website Photos/Home Page/Outreach-and-Ecosystem.jpg"
              alt="Youth community building practical career pathways"
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,#061a3f,rgba(6,26,63,0.16),transparent)]" />
          </motion.div>
          <div data-gsap-reveal>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#FFC727]">
              Outreach and ecosystem
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Built for youth, employers, institutions, and partners moving opportunity forward.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/66">
              The website gives AjiraLink a premium public face while keeping operational flows inside the
              existing backend platform.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/institutions-partners">Partner With Us</ButtonLink>
              <ButtonLink href="/for-employers" variant="secondary">
                For Employers
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="relative scroll-mt-28 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Testimonials"
            title="Trusted by youth, employers, and ecosystem builders."
            copy="Real confidence comes from outcomes, community, and the feeling that the future is finally within reach."
          />
          <div className="testimonial-marquee">
            <div className="testimonial-marquee-track">
              {[false, true].map((isDuplicate) => (
                <div
                  key={isDuplicate ? "duplicate" : "primary"}
                  className="testimonial-marquee-group"
                  aria-hidden={isDuplicate || undefined}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={`${isDuplicate ? "duplicate" : "primary"}-${testimonial.name}`} className="testimonial-marquee-item">
                      <TestimonialCard {...testimonial} index={index} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalHomeCta />
    </SiteShell>
  );
}
