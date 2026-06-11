"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

const marqueeThemeStyles = `
  .logo-marquee-track {
    display: flex;
    width: max-content;
    animation: partner-logo-scroll 35s linear infinite;
    will-change: transform;
  }

  .logo-marquee-group {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-right: 1rem;
  }

  @media (min-width: 768px) {
    .logo-marquee-group {
      gap: 1.25rem;
      padding-right: 1.25rem;
    }
  }

  @media (min-width: 1024px) {
    .logo-marquee-group {
      gap: 1.5rem;
      padding-right: 1.5rem;
    }
  }

  @keyframes partner-logo-scroll {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-50%);
    }
  }

  html[data-theme="dark"] .logo-marquee-fade-left {
    background: linear-gradient(to right, rgb(6 26 58), rgb(6 26 58 / 80%), rgb(6 26 58 / 0%)) !important;
  }

  html[data-theme="dark"] .logo-marquee-fade-right {
    background: linear-gradient(to left, rgb(6 26 58), rgb(6 26 58 / 80%), rgb(6 26 58 / 0%)) !important;
  }

  .partner-logo {
    filter:
      contrast(1.08)
      saturate(1.04)
      drop-shadow(0 1px 0 rgb(255 255 255 / 55%))
      drop-shadow(0 10px 18px rgb(6 26 63 / 16%));
  }

  html[data-theme="dark"] .partner-logo {
    filter:
      contrast(1.12)
      saturate(1.08)
      drop-shadow(0 1px 1px rgb(255 255 255 / 70%))
      drop-shadow(0 12px 22px rgb(0 0 0 / 38%));
  }

  html[data-theme="light"] .partner-logo {
    filter:
      contrast(1.08)
      saturate(1.04)
      drop-shadow(0 1px 0 rgb(255 255 255 / 90%))
      drop-shadow(0 10px 18px rgb(10 61 145 / 18%));
  }
`;

export function LogoMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-2">
      <style>{marqueeThemeStyles}</style>
      <div className="logo-marquee-fade-left pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-white via-white/80 to-transparent sm:w-14" />
      <div className="logo-marquee-fade-right pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-white via-white/80 to-transparent sm:w-14" />
      <div className="logo-marquee-track">
        {[false, true].map((isDuplicate) => (
          <div
            key={isDuplicate ? "duplicate" : "primary"}
            className="logo-marquee-group"
            aria-hidden={isDuplicate || undefined}
          >
            {partnerLogos.map((logo) => (
              <motion.div
                key={`${isDuplicate ? "duplicate" : "primary"}-${logo}`}
                className="flex h-24 w-44 shrink-0 items-center justify-center rounded-2xl border border-slate-200/70 bg-white/95 px-4 shadow-sm transition-all duration-300 hover:border-[#FFC727]/55 md:h-28 md:w-52 lg:h-32 lg:w-56"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
              >
                <Image
                  src={`/images/Ajiralink Patners Logos/${logo}`}
                  alt={isDuplicate ? "" : logo.replace(/\.(jpeg|jpg|png)$/i, "")}
                  width={224}
                  height={112}
                  className="partner-logo h-16 w-auto max-w-full object-contain opacity-95 transition-all duration-300 hover:opacity-100 md:h-20 lg:h-24"
                />
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
