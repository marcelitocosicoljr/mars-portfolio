"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { CV_URL } from "../../data/profile";

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

export const scrollToId = (id: string) =>
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });

const TopBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in the middle of the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    scrollToId(id);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-mist-200 bg-white/85 shadow-[0_8px_30px_-12px_rgba(16,29,90,0.2)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div
        className={`container-x flex items-center justify-between transition-all duration-300 lg:py-3.5 ${
          scrolled ? "py-2" : "py-3.5"
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => go("home")}
          className="group flex items-center gap-2.5"
          aria-label="Back to top"
        >
          <Image
            src="/assets/images/marstech-logo.png"
            alt="Marcelito Tech logo"
            width={804}
            height={603}
            priority
            // Shrinks on mobile once the page scrolls; desktop keeps the full size
            className={`w-auto drop-shadow-[0_4px_10px_rgba(16,29,90,0.3)] transition-all duration-300 group-hover:scale-105 lg:h-14 ${
              scrolled ? "h-10" : "h-14"
            }`}
          />
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => go(id)}
              className={`relative rounded-full px-4 py-2 font-display text-[12px] font-bold uppercase tracking-[0.14em] transition-colors ${
                active === id ? "text-white" : "text-slate hover:text-navy-800"
              }`}
            >
              {active === id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-navy-800"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative">{label}</span>
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={() => go("contact")}
            className="btn-navy !px-5 !py-2.5"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="rounded-full p-2 text-navy-800 transition hover:bg-mist-100 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <Icon icon={menuOpen ? "mdi:close" : "mdi:menu"} width={26} />
        </button>
      </div>

      {/* Scroll progress */}
      <motion.div
        style={{ scaleX: progress }}
        className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-gradient-to-r from-navy-800 via-navy-600 to-navy-400"
      />

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-mist-200 bg-white lg:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-4">
              {navLinks.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => go(id)}
                  className={`rounded-xl px-4 py-3 text-left font-display text-[13px] font-bold uppercase tracking-[0.14em] ${
                    active === id
                      ? "bg-navy-800 text-white"
                      : "text-navy-800 hover:bg-mist-100"
                  }`}
                >
                  {label}
                </button>
              ))}
              <a href={CV_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-3">
                <Icon icon="ph:file-arrow-down-bold" width={16} /> Download CV
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default TopBar;
