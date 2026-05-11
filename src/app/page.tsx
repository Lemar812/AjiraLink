"use client";

import { ArrowRight, BadgeCheck, Mail, MapPin, Sparkles } from "lucide-react";
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { SectionTitle } from "@/components/ui/section-title";
import { brand } from "@/constants/brand";
import {
  communityPillars,
  features,
  images,
  navLinks,
  particles,
  partnershipCards,
  stats,
  testimonials,
} from "@/data/landing";
import { useLenis } from "@/hooks/use-lenis";

function slug(label: string) {
  return label.toLowerCase().replaceAll(" ", "-");
}

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const target = { value: 0 };
    const tween = gsap.to(target, {
      value,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        once: true,
      },
      onUpdate: () => setCount(Math.round(target.value)),
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [value]);

  return (
    <span ref={ref}>
      {Intl.NumberFormat("en").format(count)}
      {suffix}
    </span>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="fixed left-0 right-0 top-4 z-50 px-4 sm:top-6"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 sm:px-5 ${
          scrolled
            ? "border-white/18 bg-[#071f4d]/74 shadow-2xl shadow-black/20 backdrop-blur-2xl"
            : "border-white/10 bg-white/8 backdrop-blur-md"
        }`}
      >
        <a href="#home" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#FFC727] text-[#0A3D91] shadow-lg shadow-[#ffc727]/20">
            <Sparkles size={18} fill={brand.colors.primaryBlue} />
          </span>
          <span className="text-lg font-black tracking-tight text-white">AjiraLink</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${slug(link)}`}
              className="text-sm font-medium text-white/70 transition hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="group inline-flex h-10 items-center gap-2 rounded-full bg-white px-4 text-sm font-bold text-[#0A3D91] shadow-xl shadow-black/10 transition hover:bg-[#FFC727]"
        >
          Get Started
          <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
        </a>
      </nav>
    </motion.header>
  );
}

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
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFC727]">Opportunity</span>
          <BadgeCheck size={18} className="text-[#FFC727]" />
        </div>
        <p className="text-xl font-semibold leading-tight text-white">Frontend Intern</p>
        <p className="mt-2 text-sm text-white/60">Remote first. Mentor matched.</p>
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
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061a3f] via-[#0A3D91]/20 to-transparent" />
          <div className="absolute left-5 right-5 top-5 flex items-center justify-between rounded-full border border-white/15 bg-white/12 px-3 py-2 backdrop-blur-xl">
            <span className="text-xs font-bold text-white">AjiraLink</span>
            <span className="h-2 w-2 rounded-full bg-[#FFC727] shadow-[0_0_20px_#FFC727]" />
          </div>
          <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/15 bg-[#061a3f]/75 p-4 backdrop-blur-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FFC727]">Matched today</p>
            <p className="mt-2 text-2xl font-semibold leading-tight text-white">
              12 new roles near your goals
            </p>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-[#FFC727]"
                initial={{ width: "22%" }}
                animate={{ width: ["22%", "84%", "62%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="glass-panel absolute bottom-16 right-2 z-30 w-72 rounded-3xl p-5 sm:right-8"
        animate={{ y: [0, 16, 0], rotate: [1, -1.5, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/50">Youth signal</p>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {["Skills", "Mentor", "Offer"].map((item, index) => (
            <div key={item} className="rounded-2xl bg-white/10 p-3">
              <div className="mb-5 h-2 rounded-full bg-[#FFC727]" style={{ width: `${60 + index * 14}%` }} />
              <p className="text-xs font-semibold text-white">{item}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  useLenis();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, 180]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-gsap-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 56 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 82%" },
          },
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <main ref={containerRef} className="min-h-screen overflow-hidden bg-[#061a3f] text-white">
      <motion.div
        className="fixed left-0 right-0 top-0 z-[60] h-1 origin-left bg-[#FFC727]"
        style={{ scaleX }}
      />
      <Navbar />

      <section id="home" className="relative min-h-screen overflow-hidden pb-20 pt-32 sm:pt-40">
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
              Built for Africa&apos;s next generation of builders
            </motion.div>

            <motion.h1
              className="text-balance max-w-5xl text-6xl font-black leading-[0.92] tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-[6.8rem]"
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: "easeOut" }}
            >
              Africa&apos;s Future Workforce Starts Here.
            </motion.h1>

            <motion.p
              className="mt-7 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl"
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.16, ease: "easeOut" }}
            >
              Connecting African youth to jobs, mentorship, internships, and career opportunities.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.26, ease: "easeOut" }}
            >
              <a
                href="#contact"
                className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#FFC727] px-7 text-base font-black text-[#0A3D91] shadow-[0_18px_60px_rgba(255,199,39,0.28)] transition hover:-translate-y-1 hover:bg-white"
              >
                Get Started
                <ArrowRight size={19} className="transition group-hover:translate-x-1" />
              </a>
              <a
                href="#why-ajiralink"
                className="inline-flex h-14 items-center justify-center rounded-full border border-white/18 bg-white/10 px-7 text-base font-bold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/16"
              >
                Explore Opportunities
              </a>
            </motion.div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="relative -mt-6 px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
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

      <section id="why-ajiralink" className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-[#0A3D91] opacity-45 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="What AjiraLink does"
            title="One trusted bridge from potential to paid opportunity."
            copy="AjiraLink turns scattered opportunity into a guided, high-signal path for young people, employers, mentors, and ecosystem partners."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.article
                  key={feature.title}
                  className="group glass-panel relative min-h-[280px] overflow-hidden rounded-[2rem] p-7"
                  initial={{ opacity: 0, y: 34 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: index * 0.08 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#FFC727]/24 blur-3xl" />
                  </div>
                  <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-[#FFC727] text-[#0A3D91] shadow-[0_16px_40px_rgba(255,199,39,0.24)]">
                    <Icon size={25} />
                  </div>
                  <h3 className="relative mt-10 text-2xl font-bold text-white">{feature.title}</h3>
                  <p className="relative mt-4 leading-7 text-white/62">{feature.copy}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="mission" className="relative px-4 py-24 sm:px-6 lg:px-8">
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
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061a3f] via-[#061a3f]/16 to-transparent" />
            <div className="glass-panel absolute bottom-6 left-6 right-6 rounded-3xl p-5 sm:right-auto sm:w-80">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFC727]">Live workshop</p>
              <p className="mt-3 text-2xl font-semibold leading-tight text-white">
                Digital skills, interview readiness, and peer networks.
              </p>
            </div>
          </motion.div>

          <div data-gsap-reveal>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#FFC727]">
              Community engine
            </p>
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Built around workshops, mentorship, ambassadors, and youth empowerment.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/66">
              AjiraLink is more than listings. It is a movement of practical learning, trusted introductions,
              local community leadership, and employer access.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {communityPillars.map(([title, copy]) => (
                <div key={title} className="rounded-3xl border border-white/12 bg-white/[0.06] p-5">
                  <p className="text-lg font-bold text-white">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-white/58">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="partnerships" className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#FFC727]/40 to-transparent" />
        <div className="relative mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Partnership ready"
            title="A premium talent pipeline for the organizations shaping Africa's growth."
            copy="Employers, schools, foundations, and innovation hubs can reach young talent with a platform designed for trust, signal, and measurable outcomes."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {partnershipCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="glass-panel rounded-[2rem] p-8"
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                >
                  <Icon className="text-[#FFC727]" size={32} />
                  <h3 className="mt-8 text-2xl font-bold">{item.title}</h3>
                  <p className="mt-4 leading-7 text-white/60">{item.copy}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div
            className="glass-panel relative min-h-[520px] overflow-hidden rounded-[2.5rem] p-8 sm:p-10"
            data-gsap-reveal
          >
            <Image
              src={images.mentor}
              alt="Young African student focused on a laptop"
              fill
              className="object-cover opacity-36"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#061a3f] via-[#0A3D91]/70 to-transparent" />
            <div className="relative max-w-xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#FFC727]">
                Talent story
              </p>
              <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
                From ambition to interviews to income.
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/68">
                Every interaction is designed to help youth feel seen, prepared, and connected to the next
                move.
              </p>
            </div>
          </div>
          <div
            className="relative min-h-[520px] overflow-hidden rounded-[2.5rem] border border-white/14"
            data-gsap-reveal
          >
            <Image
              src={images.community}
              alt="African classroom and community learning environment"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061a3f] via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Testimonials"
            title="Trusted by the youth, mentors, and partners moving opportunity forward."
            copy="Real confidence comes from outcomes, community, and the feeling that the future is finally within reach."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.article
                  key={testimonial.name}
                  className="glass-panel rounded-[2rem] p-7"
                  initial={{ opacity: 0, y: 34 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-full bg-[#FFC727] text-lg font-black text-[#0A3D91]">
                      {testimonial.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-bold text-white">{testimonial.name}</p>
                      <p className="text-sm text-white/50">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="mt-8 text-lg leading-8 text-white/72">&ldquo;{testimonial.quote}&rdquo;</p>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section id="contact" className="relative px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[#0A3D91]" />
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.8rem] border border-white/16 bg-[#061a3f] p-8 shadow-[0_40px_120px_rgba(0,0,0,0.35)] sm:p-12 lg:p-16">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#FFC727]/25 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-[#0A3D91] blur-3xl" />
          <div className="relative grid items-end gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#FFC727]">Final call</p>
              <h2 className="text-balance text-5xl font-black tracking-tight text-white sm:text-7xl">
                Your Future Starts Here.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/66">
                Join the platform connecting Africa&apos;s youth to careers, mentors, internships, and
                opportunity ecosystems.
              </p>
            </div>
            <a
              href="#home"
              className="group inline-flex h-16 items-center justify-center gap-3 rounded-full bg-[#FFC727] px-8 text-base font-black text-[#0A3D91] shadow-[0_18px_60px_rgba(255,199,39,0.30)] transition hover:-translate-y-1 hover:bg-white"
            >
              Join AjiraLink Today
              <ArrowRight size={20} className="transition group-hover:translate-x-1" />
            </a>
          </div>
          <div className="relative mt-12 grid gap-4 border-t border-white/12 pt-8 text-sm text-white/58 sm:grid-cols-3">
            <span className="flex items-center gap-2">
              <Mail size={16} className="text-[#FFC727]" /> hello@ajiralink.africa
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={16} className="text-[#FFC727]" /> Built for African youth
            </span>
            <span className="sm:text-right">© {year} AjiraLink. Opportunity at scale.</span>
          </div>
        </div>
      </section>
    </main>
  );
}
