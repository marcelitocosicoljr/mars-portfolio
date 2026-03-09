"use client";
import React from "react";
import { Icon } from "@iconify/react";

const services = [
  {
    icon: "ph:code-bold",
    title: "Full-Stack Development",
    desc: "End-to-end web apps — React/Next.js frontends, .NET or Node.js backends, fully integrated and production-ready.",
  },
  {
    icon: "ph:device-mobile-bold",
    title: "Mobile-First & Responsive",
    desc: "Every interface built mobile-first, pixel-perfect across all screen sizes — phones, tablets, and desktops.",
  },
  {
    icon: "ph:database-bold",
    title: "ETL & Data Pipelines",
    desc: "Design and optimise Apache NiFi data flows, SQL/NoSQL schemas, and ETL processes that run 10× faster.",
  },
  {
    icon: "ph:rocket-launch-bold",
    title: "Performance & Speed",
    desc: "Zero bloat, lean code, optimised assets. Apps that load instantly and convert visitors into users.",
  },
];

const stackGroups = [
  {
    label: "Frontend",
    icon: "ph:monitor-bold",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Redux / Zustand",
      "HTML5 / CSS3",
      "Framer Motion",
    ],
  },
  {
    label: "Backend",
    icon: "ph:terminal-window-bold",
    items: [
      ".NET / C#",
      "Node.js / Express",
      "PHP / Laravel",
      "REST APIs",
      "GraphQL",
      "WebSockets",
    ],
  },
  {
    label: "Database",
    icon: "ph:database-bold",
    items: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Prisma ORM",
      "Redis",
      "Firebase",
    ],
  },
  {
    label: "ETL / Data",
    icon: "ph:flow-arrow-bold",
    items: [
      "Apache NiFi",
      "ETL Pipelines",
      "Data Integration",
      "Data Migration",
      "Reporting / BI",
    ],
  },
  {
    label: "UI / UX",
    icon: "ph:paint-brush-broad-bold",
    items: [
      "Figma",
      "Adobe XD",
      "Wireframing",
      "Prototyping",
      "Design Systems",
    ],
  },
  {
    label: "Tools & Ops",
    icon: "ph:wrench-bold",
    items: [
      "Git / GitHub",
      "Docker",
      "Vercel / Netlify",
      "Linux / Shell",
      "Agile / Scrum",
      "Jira",
    ],
  },
];

const countries = [
  { flag: "🇵🇭", name: "Philippines" },
  { flag: "🇬🇧", name: "United Kingdom" },
  { flag: "🇺🇸", name: "United States" },
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇦🇺", name: "Australia" },
];

const Features = () => {
  return (
    <section className="relative bg-[#12151C] border-y border-white/5 py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* ── Services ── */}
        <div className="text-center mb-14">
          <span className="section-label mb-1">What I Do</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-2">
            SERVICES &amp; EXPERTISE
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-theme-orange" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-2xl border border-white/8 bg-[#1A1D26] p-7 transition-all duration-300 hover:border-theme-orange/40 hover:shadow-[0_8px_40px_rgba(252,110,10,0.12)] hover:-translate-y-1"
            >
              <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-theme-orange/10 border border-theme-orange/20 transition group-hover:bg-theme-orange/20">
                <Icon icon={f.icon} className="text-theme-orange w-7 h-7" />
              </div>
              <h3 className="text-white font-bold text-[16px] mb-2 leading-snug">
                {f.title}
              </h3>
              <p className="text-white/50 text-[13px] leading-6">{f.desc}</p>
              <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute top-0 right-0 w-full h-full bg-theme-orange/10 rounded-bl-full" />
              </div>
            </div>
          ))}
        </div>

        {/* ── International Experience Banner ── */}
        <div className="relative overflow-hidden rounded-2xl border border-theme-orange/25 bg-gradient-to-r from-theme-orange/10 via-[#1A1D26] to-theme-orange/5 px-8 py-7 mb-20 flex flex-col sm:flex-row items-center gap-6">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          {/* Icon */}
          <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-theme-orange/15 border border-theme-orange/30 flex items-center justify-center">
            <Icon
              icon="ph:globe-hemisphere-west-bold"
              className="text-theme-orange w-7 h-7"
            />
          </div>
          {/* Text */}
          <div className="flex-1 text-center sm:text-left">
            <p className="section-label mb-1">Global Reach</p>
            <h3 className="text-white font-black text-xl tracking-tight">
              WORKED WITH LOCAL &amp; INTERNATIONAL CLIENTS
            </h3>
            <p className="text-white/50 text-[13px] mt-1 leading-6">
              Delivered projects for clients across multiple countries — from
              local Philippine startups to companies in the UK, US, Canada, and
              Australia.
            </p>
          </div>
          {/* Country flags */}
          <div className="flex flex-wrap justify-center gap-3">
            {countries.map((c) => (
              <div key={c.name} className="flex flex-col items-center gap-1">
                <span className="text-3xl leading-none">{c.flag}</span>
                <span className="text-[10px] uppercase tracking-wider text-white/40">
                  {c.name.split(" ")[0]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Full Tech Stack ── */}
        <div>
          <div className="text-center mb-10">
            <span className="section-label mb-1">Tech Stack</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-2">
              TOOLS &amp; TECHNOLOGIES
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-theme-orange" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {stackGroups.map((group) => (
              <div
                key={group.label}
                className="rounded-2xl border border-white/8 bg-[#1A1D26] p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-theme-orange/10 border border-theme-orange/20 flex items-center justify-center flex-shrink-0">
                    <Icon
                      icon={group.icon}
                      className="text-theme-orange w-5 h-5"
                    />
                  </div>
                  <p className="text-white font-bold text-[14px] uppercase tracking-widest">
                    {group.label}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-[12px] font-medium text-white/65 hover:border-theme-orange/40 hover:text-white/90 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
