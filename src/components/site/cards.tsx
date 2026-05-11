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

export function FeatureCard({ card, index = 0 }: { card: IconCardData; index?: number }) {
  const Icon = card.icon ? icons[card.icon] : undefined;
  const content = (
    <motion.article
      className="group glass-panel relative min-h-[260px] overflow-hidden rounded-[2rem] p-7"
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      whileHover={{ y: -10 }}
    >
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#FFC727]/24 blur-3xl" />
      </div>
      {Icon ? (
        <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-[#FFC727] text-[#0A3D91] shadow-[0_16px_40px_rgba(255,199,39,0.24)]">
          <Icon size={25} />
        </div>
      ) : null}
      <h3 className="relative mt-8 text-2xl font-bold text-white">{card.title}</h3>
      <p className="relative mt-4 leading-7 text-white/62">{card.copy}</p>
    </motion.article>
  );

  if (!card.href) {
    return content;
  }

  return <Link href={card.href}>{content}</Link>;
}

export function TestimonialCard({
  name,
  role,
  quote,
  index,
}: {
  name: string;
  role: string;
  quote: string;
  index: number;
}) {
  return (
    <motion.article
      className="glass-panel rounded-[2rem] p-7"
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <div className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-[#FFC727] text-lg font-black text-[#0A3D91]">
          {name
            .split(" ")
            .map((part) => part[0])
            .join("")}
        </div>
        <div>
          <p className="font-bold text-white">{name}</p>
          <p className="text-sm text-white/50">{role}</p>
        </div>
      </div>
      <p className="mt-8 text-lg leading-8 text-white/72">&ldquo;{quote}&rdquo;</p>
    </motion.article>
  );
}
