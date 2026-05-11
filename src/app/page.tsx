"use client";

import { BadgeCheck, ChevronRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { SiteShell } from "@/components/site/site-shell";
import { ButtonLink } from "@/components/site/button-link";
import { AnimatedCounter } from "@/components/site/animated-counter";
import { CtaBand } from "@/components/site/cta-band";
import { FeatureCard, TestimonialCard } from "@/components/site/cards";
import { SectionTitle } from "@/components/ui/section-title";
import {
  challengePoints,
  features,
  heroStats,
  images,
  particles,
  solutionPoints,
  systemCards,
  systemRoutes,
  testimonials,
} from "@/data/landing";

function HeroVisual() {
  return (
    <motion.div
      className="relative mx-auto mt-14 h-[620px] w-full max-w-[620px] lg:mt-0"
      initial={{ opacity: 0, scale: 0.92, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
    >
      <motion.div
        className="absolute inset-x-10 top-4 h-[520px] rounded-[3rem] bg-[#FFC727]/20 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.38, 0.62, 0.38] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="glass-panel absolute left-8 top-24 z-20 hidden w-64 rounded-3xl p-4 sm:block"
        animate={{ y: [0, -18, 0], rotate: [-2, 1.5, -2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="mb-4 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFC727]">Verified role</span>
          <BadgeCheck size={18} className="text-[#FFC727]" />
        </div>
        <p className="text-xl font-semibold leading-tight text-white">Graduate Internship</p>
        <p className="mt-2 text-sm text-white/60">Profile matched. Mentor ready.</p>
      </motion.div>
      <motion.div
        className="absolute left-1/2 top-4 z-10 h-[570px] w-[300px] -translate-x-1/2 rounded-[2.4rem] border border-white/20 bg-[#071f4d] p-3 shadow-[0_40px_100px_rgba(0,0,0,0.45)]"
        whileHover={{ rotateX: 4, rotateY: -8, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 160, damping: 18 }}
      >
        <div className="relative h-full overflow-hidden rounded-[1.9rem] bg-[#061a3f]">
          <Image
            src={images.hero}
            alt="African youth using a laptop"
            fill
            priority
            sizes="300px"
            className="object-cover opacity-82"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061a3f] via-[#0A3D91]/20 to-transparent" />
          <div className="absolute left-5 right-5 top-5 flex items-center justify-between rounded-full border border-white/15 bg-white/12 px-3 py-2 backdrop-blur-xl">
            <span className="text-xs font-bold text-white">AjiraLink</span>
            <span className="h-2 w-2 rounded-full bg-[#FFC727] shadow-[0_0_20px_#FFC727]" />
          </div>
          <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/15 bg-[#061a3f]/75 p-4 backdrop-blur-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FFC727]">Opportunity feed</p>
            <p className="mt-2 text-2xl font-semibold leading-tight text-white">
              Jobs, internships, field placements, mentorship.
            </p>
            <div className="mt-4 grid gap-2">
              {["Profile strength", "Career readiness", "Opportunity match"].map((item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-28 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white/48">
                    {item}
                  </span>
                  <span className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                    <motion.span
                      className="block h-full rounded-full bg-[#FFC727]"
                      initial={{ width: "20%" }}
                      animate={{ width: [`${36 + index * 12}%`, `${78 - index * 6}%`, `${52 + index * 9}%`] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="glass-panel absolute bottom-16 right-2 z-30 w-72 rounded-3xl p-5 sm:right-8"
        animate={{ y: [0, 16, 0], rotate: [1, -1.5, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/50">Trust message</p>
        <p className="mt-3 text-2xl font-semibold leading-tight text-white">
          Your future should not depend on who you know.
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, 180]);

  return (
    <SiteShell>
      <section className="relative min-h-screen overflow-hidden pb-20 pt-32 sm:pt-40">
        <motion.div style={{ y: heroY }} className="absolute inset-0 blue-grid opacity-35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(255,199,39,0.22),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(10,61,145,0.95),transparent_34%),linear-gradient(135deg,#061a3f_0%,#0A3D91_48%,#061a3f_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#061a3f] to-transparent" />

        {particles.map(([left, top, delay]) => (
          <motion.span
            key={`${left}-${top}`}
            className="absolute z-10 h-1.5 w-1.5 rounded-full bg-[#FFC727] shadow-[0_0_22px_#FFC727]"
            style={{ left: `${left}%`, top: `${top}%` }}
            animate={{ opacity: [0.2, 1, 0.2], y: [0, -24, 0] }}
            transition={{ duration: 4 + delay, delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        <div className="relative z-20 mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div className="max-w-4xl">
            <motion.div
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/82 backdrop-blur-xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="h-2 w-2 rounded-full bg-[#FFC727] shadow-[0_0_18px_#FFC727]" />
              Where Talent Meets Opportunities
            </motion.div>
            <motion.h1
              className="text-balance max-w-5xl text-5xl font-black leading-[0.94] tracking-tight text-white sm:text-7xl lg:text-8xl"
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: "easeOut" }}
            >
              AjiraLink: Where Talent Meets Opportunities
            </motion.h1>
            <motion.p
              className="mt-7 max-w-3xl text-lg leading-8 text-white/72 sm:text-xl"
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.16, ease: "easeOut" }}
            >
              AjiraLink is a youth-focused digital employment and career development platform connecting
              students, graduates, and young professionals to verified jobs, internships, volunteer
              placements, field opportunities, mentorship, and career guidance.
            </motion.p>
            <motion.p
              className="mt-6 inline-flex items-center gap-2 text-lg font-bold text-[#FFC727]"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.22, ease: "easeOut" }}
            >
              <ChevronRight size={20} /> Your future should not depend on who you know.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28, ease: "easeOut" }}
            >
              <ButtonLink href={systemRoutes.opportunities}>Explore Opportunities</ButtonLink>
              <ButtonLink href={systemRoutes.youthRegister} variant="secondary">
                Create Your Profile
              </ButtonLink>
              <ButtonLink href={systemRoutes.postOpportunity} variant="ghost">
                Post an Opportunity
              </ButtonLink>
            </motion.div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="relative -mt-6 px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {heroStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-panel rounded-[2rem] p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
            >
              <p className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <div className="glass-panel rounded-[2.5rem] p-8 sm:p-10" data-gsap-reveal>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#FFC727]">The Challenge</p>
            <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Opportunity exists, but access is still uneven.
            </h2>
            <div className="mt-8 grid gap-4">
              {challengePoints.map((point) => (
                <p
                  key={point}
                  className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 leading-7 text-white/68"
                >
                  {point}
                </p>
              ))}
            </div>
          </div>
          <div className="glass-panel rounded-[2.5rem] p-8 sm:p-10" data-gsap-reveal>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#FFC727]">Our Solution</p>
            <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              A trusted bridge between youth, employers, and partners.
            </h2>
            <div className="mt-8 grid gap-4">
              {solutionPoints.map((point) => (
                <p
                  key={point}
                  className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 leading-7 text-white/68"
                >
                  {point}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="System connection"
            title="Marketing outside. The existing AjiraLink platform inside."
            copy="This website builds trust, search visibility, and partnerships. Every action routes users into the working AjiraLink system."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {systemCards.map((card, index) => (
              <FeatureCard key={card.title} card={card} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-[#0A3D91] opacity-45 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Why choose AjiraLink"
            title="A premium opportunity layer for Africa's next workforce."
            copy="AjiraLink is not a dashboard and not a generic job board. It is a trust-building platform designed to move youth toward real career action."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} card={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            className="relative min-h-[560px] overflow-hidden rounded-[2.5rem] border border-white/14"
            data-gsap-reveal
            whileHover={{ scale: 1.01 }}
          >
            <Image
              src={images.workshop}
              alt="African youth in a collaborative technology workshop"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061a3f] via-[#061a3f]/16 to-transparent" />
          </motion.div>
          <div data-gsap-reveal>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#FFC727]">
              Outreach and ecosystem
            </p>
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Built for youth, employers, institutions, and partners moving opportunity forward.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/66">
              The website gives AjiraLink a premium public face while keeping operational flows inside the
              existing backend platform.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={systemRoutes.login}>Partner With Us</ButtonLink>
              <ButtonLink href="/for-employers" variant="secondary">
                For Employers
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Testimonials"
            title="Trusted by youth, employers, and ecosystem builders."
            copy="Real confidence comes from outcomes, community, and the feeling that the future is finally within reach."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} {...testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Final CTA"
        title="Your Future Starts Here."
        copy="Create your profile, explore verified opportunities, or partner with AjiraLink to expand youth access across Africa."
        primary={{ label: "Join AjiraLink Today", href: systemRoutes.youthRegister }}
        secondary={{ label: "Explore Opportunities", href: systemRoutes.opportunities }}
      />
    </SiteShell>
  );
}
