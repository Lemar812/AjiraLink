"use client";
import {
  BadgeCheck,
  BookOpenCheck,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  Handshake,
  HeartHandshake,
  LineChart,
  Mail,
  MapPin,
  Megaphone,
  MessageSquareText,
  MonitorSmartphone,
  Network,
  Phone,
  Rocket,
  Send,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  WandSparkles,
  type LucideIcon,
} from "lucide-react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { ButtonLink } from "@/components/site/button-link";
import { SplitImageCard } from "@/components/site/cards";
import { SiteShell } from "@/components/site/site-shell";
import { contactDetails, images, systemRoutes } from "@/data/landing";

const sectionSpacing = "scroll-mt-32 px-4 py-12 sm:px-6 lg:px-8";

const fadeUpContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
} satisfies Variants;

type IconType = LucideIcon;

type CardItem = {
  title: string;
  copy: string;
  icon: IconType;
  image: string;
};

function SectionHeader({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <div className="mx-auto mb-9 max-w-3xl text-center">
      <p className="next-page-label mb-3 text-xs font-bold uppercase tracking-[0.24em]">{eyebrow}</p>
      <h2 className="next-page-title text-balance text-4xl font-black leading-tight tracking-tight sm:text-5xl">
        {title}
      </h2>
      <p className="next-page-copy mx-auto mt-4 max-w-2xl text-base leading-7 sm:text-lg">{copy}</p>
    </div>
  );
}

function FeatureCard({ item, index, className }: { item: CardItem; index: number; className?: string }) {
  return (
    <SplitImageCard
      title={item.title}
      copy={item.copy}
      image={item.image}
      imageAlt={`${item.title} at AjiraLink`}
      icon={item.icon}
      index={index}
      className={`next-page-card ${className ?? ""}`}
      titleClassName="next-page-title"
      copyClassName="next-page-copy"
    />
  );
}

function Hero({
  eyebrow,
  title,
  copy,
  image,
  primary,
  secondary,
  children,
}: {
  eyebrow: string;
  title: string;
  copy: ReactNode;
  image: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  children: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-44 sm:px-6 sm:pt-48 lg:px-8">
      <div className="home-hero-media absolute inset-x-0 -top-10 bottom-0">
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover object-[58%_center]" />
      </div>
      <div className="about-hero-overlay absolute inset-0" />
      <div className="about-hero-gradient absolute inset-0" />
      <div className="home-hero-glow absolute inset-0" />
      <div className="home-hero-fade absolute inset-x-0 bottom-0 h-44" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.04fr_0.96fr] xl:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <p className="about-hero-label mb-5 text-xs font-bold uppercase tracking-[0.26em]">{eyebrow}</p>
          <h1 className="about-hero-title max-w-4xl py-1 text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <div className="about-hero-body mt-5 max-w-3xl text-base leading-7 sm:text-lg">{copy}</div>
          {(primary || secondary) && (
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              {primary ? <ButtonLink href={primary.href}>{primary.label}</ButtonLink> : null}
              {secondary ? (
                <ButtonLink href={secondary.href} variant="secondary" className="home-hero-secondary-cta">
                  {secondary.label}
                </ButtonLink>
              ) : null}
            </div>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}

const careerRoadmap = [
  {
    title: "Career Discovery",
    copy: "Understand your strengths, interests, and possible career paths.",
    icon: Compass,
    image: "/images/Ajiralink Website Photos/Career Guidance Page/Discover-Yourself.JPG",
  },
  {
    title: "CV & Cover Letter Support",
    copy: "Learn how to present your skills, education, and experience professionally.",
    icon: ClipboardCheck,
    image: "/images/Ajiralink Website Photos/Career Guidance Page/Build-Your-Profile.JPG",
  },
  {
    title: "Interview Preparation",
    copy: "Build confidence and prepare for real employer conversations.",
    icon: MessageSquareText,
    image: "/images/Ajiralink Website Photos/Career Guidance Page/Leran-Essential-Skills.JPG",
  },
  {
    title: "Mentorship",
    copy: "Connect with professionals and career guides who can support your growth.",
    icon: HeartHandshake,
    image: "/images/Ajiralink Website Photos/Career Guidance Page/Connect-With-Mentors.JPG",
  },
  {
    title: "Soft Skills Development",
    copy: "Improve communication, teamwork, leadership, problem-solving, and workplace readiness.",
    icon: Users,
    image: "/images/Ajiralink Website Photos/Career Guidance Page/Access-Opportunities.jpg",
  },
  {
    title: "AI-Powered Job Matching",
    copy: "Use digital tools that help connect your profile with suitable opportunities.",
    icon: BrainCircuit,
    image: "/images/Ajiralink Website Photos/Career Guidance Page/Grow-Profesionally.JPG",
  },
] as const;

const careerJourney = [
  {
    title: "Discover Yourself",
    copy: "Identify your strengths, interests, and the career directions that fit you.",
    icon: Compass,
    image: "/images/Ajiralink Website Photos/Career Guidance Page/Discover-Yourself.JPG",
  },
  {
    title: "Build Your Profile",
    copy: "Present your education, skills, and experience with clarity and confidence.",
    icon: ClipboardCheck,
    image: "/images/Ajiralink Website Photos/Career Guidance Page/Build-Your-Profile.JPG",
  },
  {
    title: "Learn Essential Skills",
    copy: "Strengthen the practical and professional skills employers expect.",
    icon: BookOpenCheck,
    image: "/images/Ajiralink Website Photos/Career Guidance Page/Leran-Essential-Skills.JPG",
  },
  {
    title: "Connect With Mentors",
    copy: "Learn from professionals who can guide your decisions and growth.",
    icon: HeartHandshake,
    image: "/images/Ajiralink Website Photos/Career Guidance Page/Connect-With-Mentors.JPG",
  },
  {
    title: "Access Opportunities",
    copy: "Move from preparation into verified jobs, placements, and programs.",
    icon: BriefcaseBusiness,
    image: "/images/Ajiralink Website Photos/Career Guidance Page/Access-Opportunities.jpg",
  },
  {
    title: "Grow Professionally",
    copy: "Build experience, networks, and momentum for long-term progress.",
    icon: TrendingUp,
    image: "/images/Ajiralink Website Photos/Career Guidance Page/Grow-Profesionally.JPG",
  },
] as const;

function CareerRoadmapPanel() {
  return (
    <motion.aside
      className="next-page-panel relative overflow-hidden rounded-4xl border p-5 shadow-xl backdrop-blur-2xl"
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
    >
      <motion.div
        className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#FFC727]/20 blur-3xl"
        animate={{ x: [0, -18, 0], y: [0, 18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative mb-4">
        <p className="next-page-label mb-2 text-xs font-bold uppercase tracking-[0.22em]">Career roadmap</p>
        <h2 className="next-page-title text-2xl font-black leading-tight sm:text-3xl">
          Prepare with a practical growth path
        </h2>
        <p className="next-page-copy mt-2 text-sm leading-5">
          A guided readiness system for skills, confidence, mentorship, and opportunity matching.
        </p>
      </div>
      <div className="relative grid gap-2.5 sm:grid-cols-2">
        {careerRoadmap.map(({ title, copy, icon: Icon }, index) => (
          <motion.div
            key={title}
            className="next-page-mini-card rounded-2xl border p-3"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.22 + index * 0.05, ease: "easeOut" }}
            whileHover={{ y: -4, scale: 1.01 }}
          >
            <div className="mb-2 flex items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#FFC727] text-[#0A3D91]">
                <Icon size={18} />
              </span>
              <h3 className="next-page-title text-sm font-black leading-tight">{title}</h3>
            </div>
            <p className="next-page-copy text-xs leading-5">{copy}</p>
          </motion.div>
        ))}
      </div>
    </motion.aside>
  );
}

export function CareerGuidancePageContent() {
  return (
    <SiteShell>
      <Hero
        eyebrow="Career Guidance"
        title="Build Skills. Discover Your Path. Prepare for the Future of Work."
        image={images.guidanceHero}
        primary={{ label: "Access Career Resources", href: systemRoutes.careerResources }}
        secondary={{ label: "Create Your Profile", href: systemRoutes.youthRegister }}
        copy={
          <>
            <p className="mb-4">Finding an opportunity is only one part of the journey.</p>
            <p>
              AjiraLink also helps young people prepare for success through career guidance, mentorship, and
              professional development support.
            </p>
          </>
        }
      >
        <CareerRoadmapPanel />
      </Hero>

      <section className={sectionSpacing}>
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Career Growth Journey"
            title="A clear path from self-discovery to professional growth."
            copy="AjiraLink supports young people as they move from understanding themselves to building profiles, learning skills, connecting with mentors, and accessing real opportunities."
          />
          <motion.div
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
            variants={fadeUpContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {careerJourney.map((step, index) => (
              <FeatureCard key={step.title} item={step} index={index} />
            ))}
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}

const targetStats = [
  { value: 3000, suffix: "+", label: "Registered Youth Users", icon: Users },
  { value: 500, suffix: "+", label: "Opportunities Posted", icon: BriefcaseBusiness },
  { value: 50, suffix: "+", label: "Institutional & Employer Partnerships", icon: Handshake },
  { value: 1500, suffix: "+", label: "Youth Trained", icon: BookOpenCheck },
  { value: 1, suffix: "", label: "Mobile App Launch", icon: MonitorSmartphone },
  { value: 100000, suffix: "+", label: "People Reached", icon: Megaphone },
] as const;

const strategicStats = [
  {
    title: "50,000 Youth Registered",
    copy: "Youth registered on the platform.",
    icon: Users,
    image: "/images/Ajiralink Website Photos/Impact Page/50,000-Youth-Registered.jpg",
  },
  {
    title: "5,000 Opportunities Shared",
    copy: "Employment opportunities shared.",
    icon: BriefcaseBusiness,
    image: "/images/Ajiralink Website Photos/Impact Page/5,000-Opportunities-Shared.jpg",
  },
  {
    title: "10,000 Youth Trained",
    copy: "Youth trained in career readiness.",
    icon: BookOpenCheck,
    image: "/images/Ajiralink Website Photos/Impact Page/10,000-Youth-Trained.jpg",
  },
  {
    title: "150 Employer Partnerships",
    copy: "Employer partnerships established.",
    icon: Building2,
    image: "/images/Ajiralink Website Photos/Impact Page/150-Employer-Patnerships.jpg",
  },
  {
    title: "National Recognition",
    copy: "AjiraLink recognized as a trusted youth employment platform.",
    icon: BadgeCheck,
    image: "/images/Ajiralink Website Photos/Impact Page/National-Recognition.jpg",
  },
] as const;

const longTermVision = [
  {
    title: "AI-Powered Career Guidance",
    copy: "Personalized direction for youth career decisions.",
    icon: BrainCircuit,
    image: "/images/Ajiralink Website Photos/Impact Page/50,000-Youth-Registered.jpg",
  },
  {
    title: "Digital Learning Tools",
    copy: "Practical resources for employability readiness.",
    icon: MonitorSmartphone,
    image: "/images/Ajiralink Website Photos/Impact Page/10,000-Youth-Trained.jpg",
  },
  {
    title: "Mobile Application Services",
    copy: "Access to AjiraLink from anywhere.",
    icon: Phone,
    image: "/images/Ajiralink Website Photos/Impact Page/5,000-Opportunities-Shared.jpg",
  },
  {
    title: "East African Expansion",
    copy: "Regional pathways for youth opportunity access.",
    icon: Network,
    image: "/images/Ajiralink Website Photos/Impact Page/National-Recognition.jpg",
  },
  {
    title: "Remote Internships",
    copy: "Distributed work experience across organizations.",
    icon: BriefcaseBusiness,
    image: "/images/Ajiralink Website Photos/Impact Page/150-Employer-Patnerships.jpg",
  },
  {
    title: "Skills Learning Marketplace",
    copy: "A discovery layer for practical learning.",
    icon: Sparkles,
    image: "/images/Ajiralink Website Photos/Impact Page/10,000-Youth-Trained.jpg",
  },
  {
    title: "Career Data Analytics",
    copy: "Insights that improve youth employment outcomes.",
    icon: LineChart,
    image: "/images/Ajiralink Website Photos/Impact Page/National-Recognition.jpg",
  },
] as const;

function ImpactDashboard() {
  return (
    <motion.aside
      className="next-page-panel relative overflow-hidden rounded-4xl border p-5 shadow-xl backdrop-blur-2xl"
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
    >
      <motion.div
        className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#FFC727]/20 blur-3xl"
        animate={{ x: [0, -16, 0], y: [0, 18, 0], scale: [1, 1.07, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative mb-4">
        <p className="next-page-label mb-2 text-xs font-bold uppercase tracking-[0.22em]">2026 Targets</p>
        <h2 className="next-page-title text-2xl font-black leading-tight sm:text-3xl">Impact dashboard</h2>
      </div>
      <div className="relative grid gap-2.5 sm:grid-cols-2">
        {targetStats.map(({ value, suffix, label, icon: Icon }, index) => (
          <motion.div
            key={label}
            className="next-page-mini-card rounded-2xl border p-3"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.18 + index * 0.05, ease: "easeOut" }}
            whileHover={{ y: -4, scale: 1.01 }}
          >
            <div className="mb-2 flex items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#FFC727] text-[#0A3D91]">
                <Icon size={18} />
              </span>
              <p className="next-page-title text-xl font-black">
                <CountUp end={value} duration={2.2} separator="," enableScrollSpy scrollSpyOnce />
                {suffix}
              </p>
            </div>
            <p className="next-page-copy text-xs font-semibold uppercase leading-5 tracking-[0.12em]">
              {label}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.aside>
  );
}

export function ImpactPageContent() {
  return (
    <SiteShell>
      <Hero
        eyebrow="Impact"
        title="Building Africa’s Career Opportunity Ecosystem"
        image={images.impactHero}
        primary={{ label: "Partner With Us", href: "/support-us" }}
        secondary={{ label: "Create Your Profile", href: systemRoutes.youthRegister }}
        copy={
          <>
            <p className="mb-4">AjiraLink is not just a platform.</p>
            <p>
              It is a youth empowerment ecosystem designed to help young people access guidance, skills,
              networks, and real opportunities.
            </p>
          </>
        }
      >
        <ImpactDashboard />
      </Hero>

      <section className={sectionSpacing}>
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="2026-2028 Strategic Impact"
            title="A measurable pathway for youth employment infrastructure."
            copy="AjiraLink is building toward practical outcomes across registration, training, opportunity access, employer partnerships, and national visibility."
          />
          <motion.div
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-5"
            variants={fadeUpContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {strategicStats.map((item, index) => (
              <FeatureCard key={item.title} item={item} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className={sectionSpacing}>
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Long-Term Vision"
            title="A future-ready roadmap for youth opportunity access."
            copy="The long-term AjiraLink ecosystem combines AI guidance, learning tools, mobile access, data, and regional expansion."
          />
          <motion.div
            className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-12"
            variants={fadeUpContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {longTermVision.map((item, index) => {
              const cardClass = index < 4 ? "col-span-1 xl:col-span-3" : "col-span-1 xl:col-span-4";
              return <FeatureCard key={item.title} item={item} index={index} className={cardClass} />;
            })}
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}

const contactOptions = [
  { title: "Call Us", copy: contactDetails.phone, icon: Phone, href: contactDetails.phoneHref },
  { title: "Email Us", copy: contactDetails.email, icon: Mail, href: contactDetails.emailHref },
  { title: "Visit Office", copy: contactDetails.location, icon: MapPin, href: "/contact" },
  {
    title: "Social Media",
    copy: contactDetails.socialHandle,
    icon: Megaphone,
    href: contactDetails.instagram,
  },
] as const;

const contactTypes = [
  "Student / Job Seeker",
  "Employer",
  "Institution",
  "NGO",
  "Investor",
  "Partner",
  "Other",
];

function ContactQuickPanel() {
  return (
    <motion.aside
      className="next-page-panel relative overflow-hidden rounded-4xl border p-5 shadow-xl backdrop-blur-2xl"
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
    >
      <div className="mb-4">
        <p className="next-page-label mb-2 text-xs font-bold uppercase tracking-[0.22em]">Quick access</p>
        <h2 className="next-page-title text-2xl font-black leading-tight sm:text-3xl">Contact AjiraLink</h2>
      </div>
      <div className="grid gap-2.5 sm:grid-cols-2">
        {contactOptions.map(({ title, copy, icon: Icon, href }, index) => (
          <motion.a
            key={title}
            href={href}
            className="next-page-mini-card rounded-2xl border p-3"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 + index * 0.05, ease: "easeOut" }}
            whileHover={{ y: -4, scale: 1.01 }}
          >
            <div className="mb-2 flex items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#FFC727] text-[#0A3D91]">
                <Icon size={18} />
              </span>
              <h3 className="next-page-title text-sm font-black">{title}</h3>
            </div>
            <p className="next-page-copy text-xs leading-5">{copy}</p>
          </motion.a>
        ))}
      </div>
      <div className="next-page-mini-card mt-3 rounded-2xl border p-4">
        <p className="next-page-title text-lg font-black">AjiraLink</p>
        <p className="next-page-copy mt-2 text-sm leading-6">
          {contactDetails.postalAddress}
          <br />
          {contactDetails.cityCountry}
          <br />
          Office: {contactDetails.location}
        </p>
      </div>
    </motion.aside>
  );
}

export function ContactPageContent() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const fullName = String(form.get("fullName") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phoneNumber = String(form.get("phone") ?? "").trim();
    const userRole = String(form.get("userType") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const nextErrors: Record<string, string> = {};

    if (!fullName) nextErrors.fullName = "Full name is required.";
    if (!email) {
      nextErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!phoneNumber) nextErrors.phone = "Phone number is required.";
    if (!userRole) nextErrors.userType = "Please select a user type.";
    if (!message) nextErrors.message = "Message is required.";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    const subject = encodeURIComponent(`New AjiraLink Contact Form Submission from ${fullName}`);
    const body = encodeURIComponent(
      `Full Name: ${fullName}\n` +
        `Email Address: ${email}\n` +
        `Phone Number: ${phoneNumber}\n` +
        `I am a: ${userRole}\n\n` +
        `Message:\n${message}`,
    );

    window.location.href = `mailto:linkajira@gmail.com?subject=${subject}&body=${body}`;
  }

  const fieldClass =
    "next-page-input mt-2 min-h-12 w-full rounded-2xl border px-4 text-sm outline-none transition";

  return (
    <SiteShell>
      <Hero
        eyebrow="Contact"
        title="Get in Touch With AjiraLink"
        image={images.contactHero}
        primary={{ label: "Email AjiraLink", href: contactDetails.emailHref }}
        secondary={{ label: "Post an Opportunity", href: systemRoutes.postOpportunity }}
        copy={
          <p>
            Whether you are a student, graduate, employer, institution, NGO, investor, or partner, we would
            love to hear from you.
          </p>
        }
      >
        <ContactQuickPanel />
      </Hero>

      <section className={sectionSpacing}>
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.84fr_1.16fr]">
          <motion.aside
            className="next-page-panel rounded-4xl border p-6 backdrop-blur-2xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="next-page-label mb-3 text-xs font-bold uppercase tracking-[0.24em]">
              Contact details
            </p>
            <h2 className="next-page-title text-3xl font-black">AjiraLink</h2>
            <div className="next-page-copy mt-5 space-y-4 text-sm leading-7">
              <p>
                {contactDetails.postalAddress}
                <br />
                {contactDetails.cityCountry}
              </p>
              <p>
                <strong>Phone:</strong>
                <br />
                <a href={contactDetails.phoneHref}>{contactDetails.phone}</a>
              </p>
              <p>
                <strong>Email:</strong>
                <br />
                <a href={contactDetails.emailHref}>{contactDetails.email}</a>
              </p>
              <p>
                <strong>Facebook & Instagram:</strong>
                <br />
                {contactDetails.socialHandle}
              </p>
              <p>
                <strong>YouTube:</strong>
                <br />
                {contactDetails.youtubeHandle}
              </p>
              <p>
                <strong>Office:</strong>
                <br />
                {contactDetails.location}
              </p>
            </div>
          </motion.aside>

          <motion.form
            onSubmit={handleSubmit}
            className="next-page-panel rounded-4xl border p-6 backdrop-blur-2xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            noValidate
          >
            <p className="next-page-label mb-3 text-xs font-bold uppercase tracking-[0.24em]">Send message</p>
            <div className="grid gap-4 md:grid-cols-2">
              <label className="next-page-title text-sm font-bold">
                Full Name
                <input name="fullName" className={fieldClass} aria-invalid={!!errors.fullName} />
                {errors.fullName ? (
                  <span className="next-page-error mt-1 block text-xs">{errors.fullName}</span>
                ) : null}
              </label>
              <label className="next-page-title text-sm font-bold">
                Email Address
                <input name="email" type="email" className={fieldClass} aria-invalid={!!errors.email} />
                {errors.email ? (
                  <span className="next-page-error mt-1 block text-xs">{errors.email}</span>
                ) : null}
              </label>
              <label className="next-page-title text-sm font-bold">
                Phone Number
                <input name="phone" type="tel" className={fieldClass} aria-invalid={!!errors.phone} />
                {errors.phone ? (
                  <span className="next-page-error mt-1 block text-xs">{errors.phone}</span>
                ) : null}
              </label>
              <label className="next-page-title text-sm font-bold">
                I am a:
                <select
                  name="userType"
                  className={fieldClass}
                  aria-invalid={!!errors.userType}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  {contactTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.userType ? (
                  <span className="next-page-error mt-1 block text-xs">{errors.userType}</span>
                ) : null}
              </label>
              <label className="next-page-title text-sm font-bold md:col-span-2">
                Message
                <textarea
                  name="message"
                  rows={6}
                  className={`${fieldClass} resize-none py-3`}
                  aria-invalid={!!errors.message}
                />
                {errors.message ? (
                  <span className="next-page-error mt-1 block text-xs">{errors.message}</span>
                ) : null}
              </label>
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#FFC727] px-5 text-sm font-black text-[#0A3D91] shadow-[0_18px_60px_rgba(255,199,39,0.26)] transition hover:-translate-y-0.5 hover:bg-white"
            >
              Send Message
              <Send size={16} />
            </button>
          </motion.form>
        </div>
      </section>
    </SiteShell>
  );
}

const supportCards = [
  {
    title: "Improve the AjiraLink Platform",
    copy: "Upgrade reliability, usability, and platform workflows.",
    icon: MonitorSmartphone,
    image: "/images/Ajiralink Website Photos/Home Page/Outreach-and-Ecosystem.jpg",
  },
  {
    title: "Launch and Scale the Mobile Application",
    copy: "Bring AjiraLink services closer to youth on mobile.",
    icon: Rocket,
    image: "/images/Ajiralink Website Photos/Career Guidance Page/Access-Opportunities.jpg",
  },
  {
    title: "Develop AI-Powered Job Matching",
    copy: "Match youth profiles with suitable opportunities.",
    icon: BrainCircuit,
    image: "/images/Ajiralink Website Photos/Career Guidance Page/Grow-Profesionally.JPG",
  },
  {
    title: "Expand to Educational Institutions",
    copy: "Reach students and graduates through institutional partners.",
    icon: Building2,
    image: "/images/Ajiralink Website Photos/For Institutions and Patners Page/Institutional-Patnerships.jpg",
  },
  {
    title: "Grow Employer Partnerships",
    copy: "Build more opportunity pipelines with youth-friendly employers.",
    icon: Handshake,
    image: "/images/Ajiralink Website Photos/Employers Page/Find-Motivated-Candidates.jpg",
  },
  {
    title: "Train More Youth",
    copy: "Scale career readiness, mentorship, and practical skills support.",
    icon: BookOpenCheck,
    image: "/images/Ajiralink Website Photos/Impact Page/10,000-Youth-Trained.jpg",
  },
  {
    title: "Strengthen Marketing and Outreach",
    copy: "Reach more youth, employers, funders, and ecosystem partners.",
    icon: Megaphone,
    image:
      "/images/Ajiralink Website Photos/For Institutions and Patners Page/Youth-Outreach-and-Awareness.jpg",
  },
  {
    title: "Build a Sustainable Youth Employment Ecosystem",
    copy: "Support long-term operations and measurable employment outcomes.",
    icon: ShieldCheck,
    image: "/images/Ajiralink Website Photos/Impact Page/National-Recognition.jpg",
  },
] as const;

const fundingUses = [
  {
    title: "Platform Development",
    copy: "Product improvements and core system quality.",
    icon: MonitorSmartphone,
    image: "/images/Ajiralink Website Photos/Home Page/Outreach-and-Ecosystem.jpg",
  },
  {
    title: "Mobile App Development",
    copy: "Mobile-first access for youth and partners.",
    icon: Phone,
    image: "/images/Ajiralink Website Photos/Career Guidance Page/Access-Opportunities.jpg",
  },
  {
    title: "AI Career Tools",
    copy: "Matching, guidance, and profile intelligence.",
    icon: WandSparkles,
    image: "/images/Ajiralink Website Photos/Career Guidance Page/Grow-Profesionally.JPG",
  },
  {
    title: "Institution Expansion",
    copy: "Campus and training partner activation.",
    icon: Building2,
    image: "/images/Ajiralink Website Photos/For Institutions and Patners Page/Institutional-Patnerships.jpg",
  },
  {
    title: "Marketing",
    copy: "Campaigns, storytelling, and brand reach.",
    icon: Megaphone,
    image:
      "/images/Ajiralink Website Photos/For Institutions and Patners Page/Youth-Outreach-and-Awareness.jpg",
  },
  {
    title: "User Acquisition",
    copy: "Growth programs for young people and employers.",
    icon: TrendingUp,
    image: "/images/Ajiralink Website Photos/Impact Page/50,000-Youth-Registered.jpg",
  },
  {
    title: "Operations",
    copy: "Reliable delivery, support, and coordination.",
    icon: CheckCircle2,
    image: "/images/Ajiralink Website Photos/Employers Page/Save-Time.jpg",
  },
  {
    title: "Team Growth",
    copy: "Talent needed to scale the mission responsibly.",
    icon: Users,
    image: "/images/Ajiralink Website Photos/Employers Page/Support-Youth-Employment.jpg",
  },
] as const;

function SupportPanel() {
  return (
    <motion.aside
      className="next-page-panel relative overflow-hidden rounded-4xl border p-6 shadow-xl backdrop-blur-2xl"
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
    >
      <motion.div
        className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#FFC727]/20 blur-3xl"
        animate={{ x: [0, -16, 0], y: [0, 18, 0], scale: [1, 1.07, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative">
        <p className="next-page-label mb-2 text-xs font-bold uppercase tracking-[0.22em]">Funding goal</p>
        <h2 className="next-page-title py-1 text-4xl font-black leading-tight sm:text-5xl">
          $100,000 - $500,000
        </h2>
        <p className="next-page-copy mt-3 text-sm leading-6">
          Funding supports platform development, mobile services, AI career tools, institutional expansion,
          marketing, operations, and team growth.
        </p>
        <div className="next-page-progress mt-6 h-4 overflow-hidden rounded-full">
          <motion.div
            className="h-full rounded-full bg-[#FFC727]"
            initial={{ width: "18%" }}
            whileInView={{ width: "68%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.aside>
  );
}

export function SupportUsPageContent() {
  const cardItems = useMemo(() => supportCards.map((item) => ({ ...item })), []);
  const fundingItems = useMemo(() => fundingUses.map((item) => ({ ...item })), []);

  return (
    <SiteShell>
      <Hero
        eyebrow="Support Us"
        title="Invest in the Future of African Youth"
        image={images.supportHero}
        primary={{ label: "Partner With Us", href: "/contact" }}
        secondary={{ label: "See Impact", href: "/impact" }}
        copy={
          <>
            <p className="mb-4">
              AjiraLink is building the infrastructure that connects Africa’s youth to the future of work.
            </p>
            <p>
              We are seeking strategic partners, funders, and investors to help scale AjiraLink across
              Tanzania and beyond.
            </p>
          </>
        }
      >
        <SupportPanel />
      </Hero>

      <section className={sectionSpacing}>
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Investment Priorities"
            title="Where strategic support creates leverage."
            copy="AjiraLink support strengthens the product, expands reach, improves matching, and grows a sustainable youth employment ecosystem."
          />
          <motion.div
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
            variants={fadeUpContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {cardItems.map((item, index) => (
              <FeatureCard key={item.title} item={item} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className={sectionSpacing}>
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Funding Supports"
            title="Practical investment areas for scale."
            copy="Funding helps AjiraLink improve the platform, launch mobile services, build AI tools, activate institutions, grow users, and strengthen delivery capacity."
          />
          <motion.div
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
            variants={fadeUpContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {fundingItems.map((item, index) => (
              <FeatureCard key={item.title} item={item} index={index} />
            ))}
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
