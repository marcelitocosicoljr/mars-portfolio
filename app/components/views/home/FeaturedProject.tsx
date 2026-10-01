"use client";
import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { ArrowUpRight, Maximize2 } from "lucide-react";

export interface FeaturedItem {
  title: string;
  category: string;
  tagline: string;
  description: string;
  highlights: string[];
  tasks: string[];
  shots: { src: string; url: string }[];
  links: { label: string; href: string }[];
}

interface Props {
  project: FeaturedItem;
  index: number;
  onOpen: (shot: number) => void;
}

// Case-study style card: browser-framed screenshot gallery + project story.
const FeaturedProject = ({ project, index, onOpen }: Props) => {
  const [active, setActive] = useState(0);
  const flip = index % 2 === 1;
  const shot = project.shots[active];

  return (
    <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
      {/* Gallery */}
      <div data-aos={flip ? "fade-left" : "fade-right"} className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
        <div className="group overflow-hidden rounded-2xl border border-mist-300 bg-white shadow-lift transition duration-500 hover:-translate-y-1">
          {/* Browser chrome */}
          <div className="flex items-center gap-3 border-b border-mist-200 bg-mist-100 px-4 py-2.5">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
            </div>
            <div className="flex min-w-0 flex-1 items-center gap-1.5 rounded-md bg-white px-3 py-1 text-[11px] text-slate">
              <Icon icon="ph:lock-simple-bold" className="h-3 w-3 flex-shrink-0 text-emerald-600" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={shot.url}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="truncate"
                >
                  {shot.url}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onOpen(active)}
            aria-label={`View ${project.title} screenshots`}
            className="relative block aspect-[1.85/1] w-full cursor-zoom-in overflow-hidden bg-mist-100"
          >
            <AnimatePresence initial={false}>
              <motion.div
                key={shot.src}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="absolute inset-0"
              >
                <Image
                  src={shot.src}
                  alt={`${project.title} screenshot ${active + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-top"
                  priority={index === 0 && active === 0}
                />
              </motion.div>
            </AnimatePresence>
            <span className="absolute inset-0 flex items-center justify-center bg-navy-900/0 transition-colors duration-300 group-hover:bg-navy-900/40">
              <span className="flex translate-y-3 items-center gap-2 rounded-full bg-white px-4 py-2 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-navy-800 opacity-0 shadow-lift transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <Maximize2 className="h-3.5 w-3.5" /> View {project.shots.length} screenshots
              </span>
            </span>
          </button>
        </div>

        {/* Thumbnails */}
        {project.shots.length > 1 && (
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {project.shots.map((s, i) => (
              <button
                key={s.src}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                aria-label={`Show screenshot ${i + 1}`}
                className={`relative aspect-[1.85/1] w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition sm:w-24 ${
                  active === i ? "border-navy-800 shadow-navy" : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={s.src} alt="" fill sizes="96px" className="object-cover object-top" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Story */}
      <div data-aos={flip ? "fade-right" : "fade-left"} className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
        <div className="flex items-center gap-3">
          <span className="font-display text-5xl font-black leading-none text-mist-200">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="rounded-full bg-navy-800 px-3 py-1 font-display text-[10px] font-bold uppercase tracking-[0.16em] text-white">
            {project.category}
          </span>
        </div>
        <h3 className="mt-4 font-display text-2xl font-extrabold leading-tight text-navy-800 sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-1.5 font-display text-[14px] font-semibold text-navy-500">{project.tagline}</p>
        <p className="mt-4 text-[14.5px] leading-7 text-slate">{project.description}</p>

        <ul className="mt-5 space-y-2.5">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-[13.5px] leading-6 text-ink">
              <Icon icon="ph:check-circle-fill" className="mt-0.5 h-[18px] w-[18px] flex-shrink-0 text-navy-700" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tasks.map((t) => (
            <span key={t} className="rounded-md border border-mist-300 bg-mist-50 px-2.5 py-1 text-[11.5px] font-semibold text-navy-700">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          {project.links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${i === 0 ? "btn-navy" : "btn-ghost"} group !px-5 !py-2.5`}
            >
              {l.label}
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;
