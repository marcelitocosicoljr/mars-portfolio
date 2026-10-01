"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { Icon } from "@iconify/react";
import CountUp from "../../uis/CountUp";
import { scrollToId } from "../../layouts/TopBar";
import { CV_URL, contact, roles, stats } from "../../../data/profile";

function useTypewriter(words: string[], typeMs = 65, holdMs = 1800) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && text === word)
      t = setTimeout(() => setDeleting(true), holdMs);
    else if (deleting && text === "") {
      setDeleting(false);
      setI((n) => n + 1);
    } else
      t = setTimeout(
        () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? typeMs / 2 : typeMs,
      );
    return () => clearTimeout(t);
  }, [text, deleting, i, words, typeMs, holdMs]);

  return text;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Masthead() {
  const typed = useTypewriter(roles);

  // Mouse-driven parallax for the portrait
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 18 });
  const sy = useSpring(my, { stiffness: 80, damping: 18 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-8, 8]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [6, -6]);
  const badgeX = useTransform(sx, [-0.5, 0.5], [-14, 14]);
  const badgeY = useTransform(sy, [-0.5, 0.5], [-10, 10]);
  const badgeXInv = useTransform(badgeX, (v) => -v);
  const badgeYInv = useTransform(badgeY, (v) => -v);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section
      id="home"
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="relative overflow-hidden bg-white"
    >
      {/* Mist "sidebar" panel, echoing the résumé layout */}
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[42%] bg-mist-100 lg:block">
        <div className="bg-dots absolute inset-0 opacity-70" />
      </div>
      <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(38,57,154,0.10),transparent_65%)]" />

      <div className="container-x relative grid min-h-screen items-center gap-14 pb-20 pt-28 lg:grid-cols-[42%_58%] lg:gap-0 lg:pb-16 lg:pt-24">
        {/* ── Portrait ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ perspective: 1000 }}
          className="relative mx-auto flex w-full max-w-[420px] justify-center lg:pr-10"
        >
          <motion.div
            style={{ rotateX, rotateY }}
            className="relative aspect-square w-[78%] sm:w-[82%]"
          >
            {/* Rotating orbit */}
            <div className="absolute -inset-5 animate-spin-slow rounded-full border-2 border-dashed border-navy-400/40">
              <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-navy-800 shadow-navy" />
            </div>
            {/* Navy ring + white inner ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-navy-600 via-navy-800 to-navy-950 p-[6px] shadow-lift">
              <div className="h-full w-full rounded-full bg-white p-[8px]">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-gradient-to-b from-mist-100 to-mist-300">
                  <Image
                    src="/assets/images/marsnew.png"
                    alt="Marcelito Cosicol Jr."
                    fill
                    priority
                    sizes="(max-width: 1024px) 320px, 400px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating badges */}
          <motion.div
            style={{ x: badgeX, y: badgeY }}
            className="absolute -right-2 top-6 sm:right-0 lg:right-2"
          >
            <div className="animate-floaty rounded-2xl border border-mist-200 bg-white/95 px-4 py-3 shadow-lift backdrop-blur">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-light">
                Status
              </p>
              <p className="mt-0.5 flex items-center gap-2 font-display text-[13px] font-bold text-navy-800">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                Open to Work
              </p>
            </div>
          </motion.div>
          <motion.div
            style={{ x: badgeXInv, y: badgeYInv }}
            className="absolute -left-2 bottom-4 sm:left-0"
          >
            <div className="animate-floaty rounded-2xl bg-navy-800 px-4 py-3 text-white shadow-navy [animation-delay:1.2s]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                Clients across
              </p>
              <p className="mt-1 text-[15px] leading-none">🇵🇭 🇬🇧 🇺🇸 🇨🇦 🇦🇺</p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Copy ── */}
        <div className="flex flex-col lg:pl-14">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.1}
            className="eyebrow flex items-center gap-3"
          >
            <span className="h-px w-8 bg-navy-600" /> Hello, I&apos;m Mars
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.2}
            className="mt-4 font-display text-[2.6rem] font-black uppercase leading-[0.98] tracking-tight text-navy-800 sm:text-6xl xl:text-7xl"
          >
            Marcelito
            <br />
            Cosicol
          </motion.h1>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.3}
            className="mt-5"
          >
            <p className="font-display text-[12px] font-semibold uppercase tracking-[0.34em] text-ink sm:text-[14px]">
              Senior Full-Stack Software Engineer
            </p>
            <div className="mt-4 h-[2px] w-full max-w-md bg-gradient-to-r from-navy-800 via-navy-500 to-transparent" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.4}
            className="mt-6 flex min-h-[1.75rem] items-center font-display text-lg font-bold text-navy-600 sm:text-xl"
          >
            <span className="mr-2 text-slate-light">&gt;</span>
            {typed}
            <span className="ml-0.5 inline-block h-6 w-[3px] animate-blink bg-navy-600" />
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.5}
            className="mt-5 max-w-xl text-[15px] leading-7 text-slate"
          >
            I design and build reliable, performant web applications — modern
            React/Next.js frontends, clean .NET &amp; Node.js APIs, and
            efficient ETL data pipelines.{" "}
            <strong className="text-navy-800">5+ years</strong> delivering
            features for{" "}
            <strong className="text-navy-800">
              local &amp; international clients
            </strong>{" "}
            across the Philippines, UK, US, and beyond.
          </motion.p>

          {/* Stats */}
          <motion.ul
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.6}
            className="mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <li
                key={s.label}
                className="group rounded-2xl border border-mist-200 bg-white px-4 py-3.5 shadow-card transition duration-300 hover:-translate-y-1 hover:border-navy-800 hover:bg-navy-800"
              >
                <p className="font-display text-2xl font-black leading-none text-navy-800 transition group-hover:text-white">
                  <CountUp to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1.5 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-slate-light transition group-hover:text-white/70">
                  {s.label}
                </p>
              </li>
            ))}
          </motion.ul>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.7}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => scrollToId("contact")}
              className="btn-navy group"
            >
              Let&apos;s Work Together
              <Icon
                icon="ph:arrow-right-bold"
                className="h-4 w-4 transition group-hover:translate-x-1"
              />
            </button>
            <a href={CV_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost group">
              <Icon
                icon="ph:download-simple-bold"
                className="h-4 w-4 transition group-hover:translate-y-0.5"
              />
              Download CV
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.8}
            className="mt-8 flex items-center gap-3"
          >
            {[
              {
                href: contact.linkedin,
                icon: "la:linkedin",
                label: "LinkedIn",
              },
              {
                href: contact.facebook,
                icon: "fa-brands:facebook",
                label: "Facebook",
              },
              {
                href: `mailto:${contact.email}`,
                icon: "ic:outline-email",
                label: "Email",
              },
              {
                href: contact.phoneHref,
                icon: "ph:phone-bold",
                label: "Phone",
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-mist-300 text-navy-800 transition duration-300 hover:-translate-y-1 hover:border-navy-800 hover:bg-navy-800 hover:text-white"
              >
                <Icon icon={s.icon} width={18} />
              </a>
            ))}
            <span className="ml-2 hidden items-center gap-1.5 text-[12px] text-slate-light sm:flex">
              <Icon icon="ph:map-pin-bold" /> Palawan, Philippines
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={() => scrollToId("about")}
        aria-label="Scroll to About"
        className="absolute bottom-6 left-[21%] hidden -translate-x-1/2 flex-col items-center gap-2 text-navy-800/60 transition hover:text-navy-800 lg:flex"
      >
        <span className="flex h-9 w-6 justify-center rounded-full border-2 border-current pt-1.5">
          <motion.span
            animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-current"
          />
        </span>
        <span className="text-[9px] font-bold uppercase tracking-[0.3em]">
          Scroll
        </span>
      </button>
    </section>
  );
}
