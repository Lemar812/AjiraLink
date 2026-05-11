"use client";

import { motion } from "framer-motion";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  copy: string;
};

export function SectionTitle({ eyebrow, title, copy }: SectionTitleProps) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#FFC727]">{eyebrow}</p>
      <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">{copy}</p>
    </motion.div>
  );
}
