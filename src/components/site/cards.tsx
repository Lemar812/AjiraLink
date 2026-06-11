"use client";

import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  Camera,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Lightbulb,
  LineChart,
  Mail,
  Megaphone,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export type IconName =
  | "arrow"
  | "badge"
  | "book"
  | "briefcase"
  | "building"
  | "camera"
  | "graduation"
  | "handshake"
  | "heartHandshake"
  | "lightbulb"
  | "lineChart"
  | "mail"
  | "megaphone"
  | "message"
  | "rocket"
  | "shield"
  | "target"
  | "users";

export type IconCardData = {
  title: string;
  copy: string;
  icon?: IconName;
  href?: string;
  image?: string;
};

const icons: Record<IconName, LucideIcon> = {
  arrow: ArrowRight,
  badge: BadgeCheck,
  book: BookOpen,
  briefcase: BriefcaseBusiness,
  building: Building2,
  camera: Camera,
  graduation: GraduationCap,
  handshake: Handshake,
  heartHandshake: HeartHandshake,
  lightbulb: Lightbulb,
  lineChart: LineChart,
  mail: Mail,
  megaphone: Megaphone,
  message: MessageCircle,
  rocket: Rocket,
  shield: ShieldCheck,
  target: Target,
  users: Users,
};

const defaultCardImages: Record<string, string> = {
  Login: "/images/Ajiralink Website Photos/Home Page/Outreach-and-Ecosystem.jpg",
  "Youth Registration": "/images/Ajiralink Website Photos/Home Page/Outreach-and-Ecosystem.jpg",
  "Register as Employer": "/images/Ajiralink Website Photos/Employers Page/Find-Motivated-Candidates.jpg",
  "Browse Opportunities": "/images/Ajiralink Website Photos/Opportunities Page/Jobs.jpg",
  "Verified Opportunities": "/images/Ajiralink Website Photos/Opportunities Page/Jobs.jpg",
  "Career Development": "/images/Ajiralink Website Photos/Career Guidance Page/Grow-Profesionally.JPG",
  "Employer Access": "/images/Ajiralink Website Photos/Employers Page/Find-Motivated-Candidates.jpg",
  "Partnership Engine":
    "/images/Ajiralink Website Photos/For Institutions and Patners Page/Institutional-Patnerships.jpg",
};

type SplitImageCardProps = {
  title: string;
  copy?: string;
  image: string;
  icon: LucideIcon;
  href?: string;
  imageAlt?: string;
  index?: number;
  className?: string;
  titleClassName?: string;
  copyClassName?: string;
  imageClassName?: string;
};

export function SplitImageCard({
  title,
  copy,
  image,
  icon: Icon,
  href,
  imageAlt,
  index = 0,
  className,
  titleClassName = "text-slate-950 dark:text-white",
  copyClassName = "text-slate-700 dark:text-slate-300",
  imageClassName = "object-cover object-top",
}: SplitImageCardProps) {
  const card = (
    <motion.article
      className={`group grid min-h-[22rem] grid-rows-[minmax(0,2fr)_minmax(0,3fr)] overflow-hidden rounded-[1.75rem] border border-slate-200/70 bg-white/90 shadow-[0_24px_70px_rgba(10,61,145,0.12)] backdrop-blur-2xl transition dark:border-white/15 dark:bg-white/10 dark:shadow-[0_24px_80px_rgba(0,0,0,0.22)] ${className ?? ""}`}
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay: index * 0.06, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.012 }}
    >
      <div className="relative min-h-0 overflow-hidden rounded-t-[1.75rem] bg-slate-900/10">
        <Image
          src={image}
          alt={imageAlt ?? ""}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
          className={`${imageClassName} transition duration-700 group-hover:scale-105`}
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/20 via-transparent to-transparent" />
      </div>
      <div className="split-card-body flex min-h-0 flex-col rounded-b-[1.75rem] p-5">
        <div className="mb-4 flex items-start gap-4">
          <motion.span
            className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#FFC727] text-[#0A3D91] shadow-[0_16px_40px_rgba(255,199,39,0.24)]"
            whileHover={{ rotate: -4, scale: 1.06 }}
            transition={{ type: "spring", stiffness: 320, damping: 18 }}
          >
            <Icon size={23} />
          </motion.span>
          <h3 className={`text-xl font-black leading-tight tracking-tight ${titleClassName}`}>{title}</h3>
        </div>
        {copy ? <p className={`text-sm leading-7 ${copyClassName}`}>{copy}</p> : null}
      </div>
    </motion.article>
  );

  return href ? (
    <Link href={href} className="block h-full">
      {card}
    </Link>
  ) : (
    card
  );
}

export function FeatureCard({ card, index }: { card: IconCardData; index: number }) {
  const Icon = icons[card.icon ?? "badge"];
  const image = card.image ?? defaultCardImages[card.title] ?? defaultCardImages["Verified Opportunities"];

  return (
    <SplitImageCard
      title={card.title}
      copy={card.copy}
      image={image}
      imageAlt={`${card.title} at AjiraLink`}
      icon={Icon}
      href={card.href}
      index={index}
      titleClassName="about-card-title"
      copyClassName="about-card-copy"
      className="border-white/15 bg-white/10"
    />
  );
}

export function TestimonialCard({
  name,
  image,
  title,
  message,
  index,
}: {
  name: string;
  image: string;
  title: string;
  message: string;
  index: number;
}) {
  return (
    <motion.article
      className="testimonial-card group flex h-full flex-col overflow-hidden rounded-[1.75rem] border p-5 shadow-[0_24px_70px_rgba(10,61,145,0.12)] backdrop-blur-2xl"
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: index * 0.07, ease: "easeOut" }}
      whileHover={{ y: -8 }}
    >
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-[#FFC727] bg-slate-200 shadow-[0_12px_30px_rgba(10,61,145,0.18)]">
          <Image
            src={image}
            alt={`Portrait of ${name}`}
            fill
            sizes="64px"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="min-w-0">
          <h3 className="testimonial-name text-lg font-black leading-tight">{name}</h3>
          <p className="testimonial-title mt-1 text-sm font-semibold">{title}</p>
        </div>
      </div>
      <div className="mt-6 h-px bg-[#FFC727]/45" />
      <p className="testimonial-message mt-5 flex-1 text-base leading-7">&ldquo;{message}&rdquo;</p>
    </motion.article>
  );
}
