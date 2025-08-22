"use client";

import Image from "next/image";
import { Mail, Download, Linkedin, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

/**
 * HR‑focused Masthead/Hero
 * - Dark, high‑contrast layout inspired by the reference
 * - Clear name + title hierarchy
 * - Short, skimmable pitch for recruiters (2–3 lines)
 * - Primary CTA: View CV. Secondary: Email Me
 * - Quick facts chips (Years, Core Skills, Location)
 * - Social icons
 * - Decorative radial/gradients that stay performant
 */
export default function Masthead() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0E0F14] text-white">
      {/* Decorative gradients */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,87,34,0.25),transparent_70%)] blur-2xl" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(77,208,225,0.22),transparent_70%)] blur-2xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 px-6 py-16 md:flex-row md:gap-12 lg:px-12 lg:py-24 xl:py-28">
        {/* Left: Copy */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2"
        >
          <p className="mb-3 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            Open to Full‑time / Contract
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A3E] to-[#FFD08A]">
              Marcelito Cosicol
            </span>
          </h1>

          <p className="mt-3 text-lg font-medium text-white/90 sm:text-xl">
            Software Engineer • UI/UX‑minded Frontend • ETL/Backend
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">
            I design and build reliable, user‑centric web apps end‑to‑end:
            modern React/Next.js frontends, clean APIs, and efficient data
            pipelines. 5+ years shipping features, improving UX, and optimizing
            performance.
          </p>

          {/* Quick chips */}
          <ul className="mt-6 flex flex-wrap gap-3">
            {[
              "5+ yrs experience",
              "Next.js • TypeScript • Tailwind",
              ".NET • Prisma • MySQL • MongoDB",
              "ETL • NiFi • Data Ops",
              "Puerto Princesa, PH",
            ].map((t) => (
              <li
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/75"
              >
                {t}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/assets/files/Marcelito Cosicol Software Engineer CV.pdf"
              className="group inline-flex items-center gap-2 rounded-2xl bg-[#FF7A3E] px-5 py-3 text-sm font-semibold text-[#0E0F14] shadow-[0_8px_30px_rgba(255,122,62,0.35)] transition hover:translate-y-[-1px] hover:shadow-[0_12px_40px_rgba(255,122,62,0.45)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF7A3E] focus:ring-offset-[#0E0F14]"
              aria-label="View my CV PDF"
              target="_blank"
            >
              <Download className="h-4 w-4 transition-transform group-hover:scale-110" />
              View My CV
            </a>

            <a
              href="mailto:mcosicoljr@gmail.com"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              <Mail className="h-4 w-4" /> Email Me
            </a>

            <div className="ml-2 flex items-center gap-3">
              <a
                href="https://www.facebook.com/mcosicoljr"
                target="_blank"
                aria-label="Facebook"
                className="rounded-full border border-white/10 p-2 text-white/70 transition hover:text-white hover:bg-white/5"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/marcelito-cosicol-19288b22b/"
                target="_blank"
                aria-label="LinkedIn"
                className="rounded-full border border-white/10 p-2 text-white/70 transition hover:text-white hover:bg-white/5"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right: Portrait */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative w-full md:w-1/2"
        >
          <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/0 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(255,255,255,0.08),transparent_60%)]" />
            <Image
              src="/assets/images/mars2.png"
              alt="Marcelito Cosicol portrait"
              width={900}
              height={1125}
              priority
              className="h-full w-full scale-[105%] bg-gray-300  object-contain object-bottom  pb-10"
            />
          </div>

          {/* Stats card */}
          <div className="absolute -bottom-6 left-1/2 w-[88%] -translate-x-1/2 rounded-2xl border border-white/10 bg-[#14161D]/80 p-4 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.4)] md:w-[85%]">
            <div className="grid grid-cols-3 divide-x divide-white/10 text-center text-xs text-white/80">
              <div className="px-2">
                <div className="text-2xl font-extrabold text-white">30+</div>
                Projects
              </div>
              <div className="px-2">
                <div className="text-2xl font-extrabold text-white">10x</div>
                Faster ETL Wins
              </div>
              <div className="px-2">
                <div className="text-2xl font-extrabold text-white">100k+</div>
                Users Served
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
