"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ButtonLink } from "@/components/site/button-link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function PageHero({ eyebrow, title, copy, image, primaryCta, secondaryCta }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-36 sm:px-6 sm:pt-40 lg:px-8">
      <div className="absolute inset-0 blue-grid opacity-25" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,199,39,0.20),transparent_26%),linear-gradient(135deg,#061a3f_0%,#0A3D91_48%,#061a3f_100%)]" />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.82fr]">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-[#FFC727]">{eyebrow}</p>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-7xl">
            {title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">{copy}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            {primaryCta ? <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink> : null}
            {secondaryCta ? (
              <ButtonLink href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </ButtonLink>
            ) : null}
          </div>
        </motion.div>

        <motion.div
          className="relative min-h-[420px] overflow-hidden rounded-[2.5rem] border border-white/14 shadow-[0_40px_120px_rgba(0,0,0,0.34)]"
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.12 }}
        >
          <Image src={image} alt="" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061a3f] via-[#061a3f]/10 to-transparent" />
          <div className="glass-panel absolute bottom-5 left-5 right-5 rounded-3xl p-5">
            <p className="text-sm font-bold text-[#FFC727]">AjiraLink signal</p>
            <p className="mt-2 text-2xl font-semibold leading-tight text-white">
              Built for trust, access, and career momentum.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
