"use client";

import Image from "next/image";
import { Mail, Download, Linkedin, Facebook, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

export default function Masthead() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#0B0D10] text-white flex items-center">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute -left-32 top-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(252,110,10,0.18),transparent_65%)]" />
        <div className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(77,208,225,0.1),transparent_65%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl flex flex-col-reverse md:flex-row items-center gap-12 px-6 pt-28 pb-20 lg:px-12 xl:pt-36 xl:pb-28">
        {/* ── Left copy ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="w-full md:w-1/2 flex flex-col"
        >
          <span className="section-label mb-4">Senior Software Engineer</span>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
            Hi, I&apos;m{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#FC6E0A] to-[#FFD08A]">
                Mars
              </span>
              <span className="absolute bottom-1 left-0 w-full h-[6px] rounded bg-[#FC6E0A]/20 -z-0" />
            </span>
          </h1>

          <p className="mt-4 text-lg font-semibold text-white/75 tracking-wide">
            Full‑Stack Engineer &nbsp;&middot;&nbsp; Frontend Specialist
            &nbsp;&middot;&nbsp; ETL / Data Ops
          </p>

          <p className="mt-5 text-[15px] leading-7 text-white/55 max-w-[520px]">
            I design and build reliable, performant web applications — modern
            React/Next.js frontends, clean .NET &amp; Node.js APIs, and
            efficient ETL data pipelines.{" "}
            <strong className="text-white/70">5+ years</strong> delivering
            features for{" "}
            <strong className="text-theme-orange">
              local &amp; international clients
            </strong>{" "}
            across
            the&nbsp;🇵🇭&nbsp;Philippines,&nbsp;🇬🇧&nbsp;UK,&nbsp;🇺🇸&nbsp;US, and
            beyond.
          </p>

          {/* Stat chips */}
          <ul className="mt-7 flex flex-wrap gap-3">
            {[
              { val: "5+", label: "Years Exp." },
              { val: "30+", label: "Projects" },
              { val: "100k+", label: "Users" },
              { val: "10x", label: "ETL Wins" },
            ].map(({ val, label }) => (
              <li
                key={val}
                className="flex flex-col items-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur"
              >
                <span className="text-[22px] font-extrabold text-theme-orange leading-none">
                  {val}
                </span>
                <span className="text-[11px] text-white/50 tracking-wide uppercase mt-0.5">
                  {label}
                </span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="/assets/files/Marcelito Cosicol Software Engineer CV.pdf"
              target="_blank"
              className="group inline-flex items-center gap-2 rounded-full bg-theme-orange px-7 py-3.5 text-[13px] font-bold uppercase tracking-widest text-white shadow-[0_8px_30px_rgba(252,110,10,0.4)] transition hover:scale-[1.03] hover:shadow-[0_12px_40px_rgba(252,110,10,0.55)]"
            >
              <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              Download CV
            </a>
            <a
              href="mailto:mcosicoljr@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-[13px] font-bold uppercase tracking-widest text-white/80 backdrop-blur transition hover:bg-white/10 hover:text-white hover:border-white/30"
            >
              <Mail className="h-4 w-4" />
              Email Me
            </a>
          </div>

          {/* Social row */}
          <div className="mt-7 flex items-center gap-4">
            <span className="text-[11px] uppercase tracking-widest text-white/30">
              Follow
            </span>
            <div className="h-px w-8 bg-white/15" />
            <a
              href="https://www.facebook.com/mcosicoljr"
              target="_blank"
              aria-label="Facebook"
              className="rounded-full border border-white/10 p-2.5 text-white/50 transition hover:text-theme-orange hover:border-theme-orange/40"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/marcelito-cosicol-19288b22b/"
              target="_blank"
              aria-label="LinkedIn"
              className="rounded-full border border-white/10 p-2.5 text-white/50 transition hover:text-theme-orange hover:border-theme-orange/40"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        {/* ── Right portrait ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative w-full md:w-1/2 flex justify-center"
        >
          <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(ellipse_at_center,rgba(252,110,10,0.18),transparent_70%)] blur-2xl" />

          <div className="relative w-full max-w-sm md:max-w-md">
            <div className="absolute -top-3 -left-3 w-16 h-16 rounded-2xl border-2 border-theme-orange/40" />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-2xl border-2 border-theme-orange/20" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
              <Image
                src="/assets/images/mars2.png"
                alt="Marcelito Cosicol"
                width={900}
                height={1125}
                priority
                className="h-full w-full object-contain object-bottom scale-[103%] bg-[#14161D]"
              />
              <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-[#0B0D10] to-transparent" />
            </div>

            {/* Floating status badge */}
            <div className="absolute -right-4 top-8 rounded-2xl border border-white/10 bg-[#12151C]/90 backdrop-blur px-4 py-3 shadow-xl">
              <p className="text-[10px] uppercase tracking-widest text-white/40">
                Status
              </p>
              <p className="text-[13px] font-bold text-white flex items-center gap-1.5 mt-0.5">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Open to Work
              </p>
            </div>

            {/* Floating tech badge */}
            <div className="absolute -left-4 bottom-12 rounded-2xl border border-white/10 bg-[#12151C]/90 backdrop-blur px-4 py-3 shadow-xl">
              <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1.5">
                Experience
              </p>
              <div className="flex flex-col gap-1">
                <p className="text-[11px] font-semibold text-white/70">
                  🌍 Local &amp; International
                </p>
                <p className="text-[11px] text-white/40">🇵🇭 🇬🇧 🇺🇸 🇨🇦 🇦🇺</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
        <ArrowRight className="h-4 w-4 rotate-90" />
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
      </div>
    </section>
  );
}
