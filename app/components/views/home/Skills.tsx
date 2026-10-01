"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import Heading from "../../uis/titles/Heading";

const stackGroups = [
  {
    label: "Frontend",
    icon: "ph:monitor-bold",
    blurb: "Fast, accessible, pixel-perfect interfaces.",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript", "React Native", "Tailwind CSS", "MUI", "Redux / Zustand", "HTML5 / CSS3", "Framer Motion"],
  },
  {
    label: "Backend",
    icon: "ph:terminal-window-bold",
    blurb: "Clean, secure, well-documented APIs.",
    items: [".NET / C#", "ASP.NET Web API", "Node.js / Express", "PHP / Laravel", "WordPress", "REST APIs", "GraphQL", "WebSockets"],
  },
  {
    label: "Database",
    icon: "ph:database-bold",
    blurb: "Schemas designed for scale and speed.",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Prisma ORM", "Redis", "Firebase"],
  },
  {
    label: "ETL / Data",
    icon: "ph:flow-arrow-bold",
    blurb: "Reliable pipelines that move data 10× faster.",
    items: ["Apache NiFi", "Python", "ETL Pipelines", "Data Integration", "Data Migration", "Reporting / BI"],
  },
  {
    label: "UI / UX",
    icon: "ph:paint-brush-broad-bold",
    blurb: "User-centred design from wireframe to prototype.",
    items: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    label: "Tools & Ops",
    icon: "ph:wrench-bold",
    blurb: "Shipping and collaborating like a senior team member.",
    items: ["Git / GitHub", "Docker", "Vercel / Netlify", "Linux / Shell", "Agile / Scrum", "Jira"],
  },
];

const countries = [
  { flag: "🇵🇭", name: "Philippines", short: "PH" },
  { flag: "🇬🇧", name: "United Kingdom", short: "UK" },
  { flag: "🇺🇸", name: "United States", short: "USA" },
  { flag: "🇨🇦", name: "Canada", short: "Canada" },
  { flag: "🇦🇺", name: "Australia", short: "Australia" },
];

const Skills = () => {
  const [active, setActive] = useState(0);
  const group = stackGroups[active];

  return (
    <section id="skills" className="bg-white py-24">
      <div className="container-x">
        <Heading icon="ph:lightbulb-filament-bold" eyebrow="Tech Stack" title="Skills & Technologies" />

        <div data-aos="fade-up" className="grid gap-6 lg:grid-cols-[300px_1fr]">
          {/* Category tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0" role="tablist">
            {stackGroups.map((g, i) => (
              <button
                key={g.label}
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className={`relative flex flex-shrink-0 items-center gap-3 rounded-2xl px-5 py-4 text-left transition-colors ${
                  active === i ? "text-white" : "text-navy-800 hover:bg-mist-100"
                }`}
              >
                {active === i && (
                  <motion.span
                    layoutId="skill-tab"
                    className="absolute inset-0 rounded-2xl bg-navy-800 shadow-navy"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <Icon icon={g.icon} className="relative h-5 w-5" />
                <span className="relative font-display text-[13px] font-bold uppercase tracking-[0.14em]">{g.label}</span>
                <span className={`relative ml-auto hidden text-[11px] font-semibold lg:inline ${active === i ? "text-white/60" : "text-slate-light"}`}>
                  {g.items.length}
                </span>
              </button>
            ))}
          </div>

          {/* Active group */}
          <div className="relative min-h-[300px] overflow-hidden rounded-3xl border border-mist-200 bg-mist-50 p-7 sm:p-10">
            <Icon icon={group.icon} className="pointer-events-none absolute -bottom-8 -right-8 h-48 w-48 text-mist-200" />
            <AnimatePresence mode="wait">
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="relative"
              >
                <p className="eyebrow">{group.label}</p>
                <h3 className="mt-2 font-display text-2xl font-extrabold text-navy-800 sm:text-3xl">{group.blurb}</h3>
                <div className="mt-8 flex flex-wrap gap-3">
                  {group.items.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.04 }}
                      whileHover={{ y: -4 }}
                      className="cursor-default rounded-full border border-mist-300 bg-white px-5 py-2.5 text-[13.5px] font-semibold text-navy-800 shadow-card transition-colors hover:border-navy-800 hover:bg-navy-800 hover:text-white"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Global reach */}
        <div
          data-aos="zoom-in-up"
          className="relative mt-16 flex flex-col items-center gap-8 overflow-hidden rounded-3xl bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 px-8 py-10 text-white shadow-lift md:flex-row md:px-12"
        >
          <div className="bg-grid-light pointer-events-none absolute inset-0" />
          <div className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-white text-navy-800">
            <Icon icon="ph:globe-hemisphere-west-bold" className="h-8 w-8" />
          </div>
          <div className="relative flex-1 text-center md:text-left">
            <p className="eyebrow !text-white/60">Global Reach</p>
            <h3 className="mt-2 font-display text-xl font-extrabold uppercase tracking-tight sm:text-2xl">
              Worked with local &amp; international clients
            </h3>
            <p className="mt-2 max-w-xl text-[14px] leading-6 text-white/65">
              Delivered projects for clients across multiple countries — from local Philippine startups to companies in
              the UK, US, Canada, and Australia.
            </p>
          </div>
          <div className="relative flex flex-wrap justify-center gap-3">
            {countries.map((c) => (
              <div
                key={c.name}
                title={c.name}
                className="flex w-[74px] flex-col items-center gap-1.5 rounded-2xl border border-white/10 bg-white/5 py-3 transition duration-300 hover:-translate-y-1.5 hover:bg-white/15"
              >
                <span className="text-3xl leading-none">{c.flag}</span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-white/60">{c.short}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
