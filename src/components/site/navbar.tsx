"use client";

import { Menu, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { brand } from "@/constants/brand";
import { navLinks, systemRoutes } from "@/data/landing";
import { ButtonLink } from "@/components/site/button-link";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-[2rem] border px-4 py-3 transition-all duration-300 lg:rounded-full lg:px-5 ${
          scrolled
            ? "border-white/18 bg-[#071f4d]/78 shadow-2xl shadow-black/20 backdrop-blur-2xl"
            : "border-white/10 bg-white/8 backdrop-blur-md"
        }`}
      >
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#FFC727] text-[#0A3D91] shadow-lg shadow-[#ffc727]/20">
            <Sparkles size={18} fill={brand.colors.primaryBlue} />
          </span>
          <span className="text-lg font-black tracking-tight text-white">AjiraLink</span>
        </Link>

        <div className="hidden items-center gap-5 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-semibold text-white/68 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink href={systemRoutes.login} variant="secondary" className="min-h-10 px-4">
            Login
          </ButtonLink>
          <ButtonLink href={systemRoutes.youthRegister} variant="ghost" className="min-h-10 px-4">
            Get Started
          </ButtonLink>
          <ButtonLink href={systemRoutes.postOpportunity} className="min-h-10 px-4">
            Post an Opportunity
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/10 text-white lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open ? (
        <div className="mx-auto mt-3 max-w-7xl rounded-[2rem] border border-white/14 bg-[#061a3f]/92 p-4 shadow-2xl shadow-black/25 backdrop-blur-2xl lg:hidden">
          <div className="grid gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-white/72 hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 grid gap-2">
            <ButtonLink href={systemRoutes.login} variant="secondary">
              Login
            </ButtonLink>
            <ButtonLink href={systemRoutes.youthRegister} variant="ghost">
              Get Started
            </ButtonLink>
            <ButtonLink href={systemRoutes.postOpportunity}>Post an Opportunity</ButtonLink>
          </div>
        </div>
      ) : null}
    </motion.header>
  );
}
