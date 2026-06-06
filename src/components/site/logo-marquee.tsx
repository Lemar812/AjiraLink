"use client";

import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const partnerLogos = [
  "Changemakers Football Club.jpeg",
  "Changemakers Foundation.jpeg",
  "Changemakers Sports Academy.jpeg",
  "Grin Makers Solution.jpeg",
  "Majestic Host Africa.png",
  "Peach Ground Hub.jpeg",
  "Tanzania Smile Safaris.jpeg",
  "Tanzania Smile Student Adventures.jpeg",
  "Toto Cup.jpeg",
  "TourMe.jpeg",
  "TunuPay.jpeg",
  "UpNext.Africa.jpeg",
  "Youth Media.jpeg",
];

const duplicatedLogos = [...partnerLogos, ...partnerLogos];

const marqueeThemeStyles = `
  html[data-theme="dark"] .logo-marquee-fade-left {
    background: linear-gradient(to right, rgb(6 26 58), rgb(6 26 58 / 80%), rgb(6 26 58 / 0%)) !important;
  }

  html[data-theme="dark"] .logo-marquee-fade-right {
    background: linear-gradient(to left, rgb(6 26 58), rgb(6 26 58 / 80%), rgb(6 26 58 / 0%)) !important;
  }
`;

export function LogoMarquee() {
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimationControls();

  useEffect(() => {
    if (isPaused) {
      controls.stop();
      return;
    }

    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 35,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls, isPaused]);

  return (
    <div
      className="relative w-full overflow-hidden py-2"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <style>{marqueeThemeStyles}</style>
      <div className="logo-marquee-fade-left pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-white via-white/80 to-transparent sm:w-14" />
      <div className="logo-marquee-fade-right pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-white via-white/80 to-transparent sm:w-14" />
      <motion.div className="flex w-max items-center gap-4 md:gap-5 lg:gap-6" animate={controls}>
        {duplicatedLogos.map((logo, index) => (
          <motion.div
            key={`${logo}-${index}`}
            className="flex h-24 w-44 shrink-0 items-center justify-center rounded-2xl border border-slate-200/50 bg-white/90 px-4 shadow-sm transition-all duration-300 hover:bg-white md:h-28 md:w-52 lg:h-32 lg:w-56"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
          >
            <Image
              src={`/images/Ajiralink Patners Logos/${logo}`}
              alt={logo.replace(/\.(jpeg|jpg|png)$/i, "")}
              width={224}
              height={112}
              className="h-16 w-auto max-w-full object-contain opacity-95 transition-all duration-300 hover:opacity-100 md:h-20 lg:h-24"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
