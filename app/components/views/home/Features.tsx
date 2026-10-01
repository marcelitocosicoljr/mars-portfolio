"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Heading from "../../uis/titles/Heading";

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

const Features = () => {
  return (
    <section id="services" className="relative overflow-hidden bg-mist-100 py-24">
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-60" />
      <div className="container-x relative">
        <Heading icon="ph:briefcase-bold" eyebrow="What I Do" title="Services & Expertise" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((f, i) => (
            <div
              key={f.title}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group relative isolate overflow-hidden rounded-3xl border border-mist-200 bg-white p-7 shadow-card transition duration-500 hover:-translate-y-2 hover:shadow-lift"
            >
              {/* Navy fill that rises on hover */}
              <span className="absolute inset-0 -z-10 translate-y-full bg-gradient-to-br from-navy-700 to-navy-950 transition-transform duration-500 ease-out group-hover:translate-y-0" />
              <span className="absolute right-5 top-4 font-display text-5xl font-black text-mist-100 transition-colors duration-500 group-hover:text-white/10">
                0{i + 1}
              </span>
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-navy-800 text-white shadow-navy transition duration-500 group-hover:rotate-[10deg] group-hover:scale-110 group-hover:bg-white group-hover:text-navy-800">
                <Icon icon={f.icon} className="h-7 w-7" />
              </div>
              <h3 className="font-display text-[17px] font-bold leading-snug text-navy-800 transition-colors duration-500 group-hover:text-white">
                {f.title}
              </h3>
              <p className="mt-3 text-[13.5px] leading-6 text-slate transition-colors duration-500 group-hover:text-white/75">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
