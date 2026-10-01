"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Heading from "../../uis/titles/Heading";
import { contact, education, languages } from "../../../data/profile";

const strengths = [
  {
    icon: "ph:stack-bold",
    title: "True End-to-End Ownership",
    desc: "From Figma prototypes to REST APIs, data pipelines, and Dockerized production deploys — one engineer across the whole stack.",
  },
  {
    icon: "ph:globe-hemisphere-west-bold",
    title: "Proven With Global Clients",
    desc: "Shipped for teams in the Philippines, UK, US, Canada, and Australia, working smoothly across time zones.",
  },
  {
    icon: "ph:lightning-bold",
    title: "Performance-Obsessed",
    desc: "Lean code and optimised data flows — including ETL processes running up to 10× faster.",
  },
  {
    icon: "ph:pen-nib-bold",
    title: "Designer's Eye",
    desc: "3+ years in UI/UX design means interfaces that are intuitive, polished, and built for real users.",
  },
];

const About = () => {
  const facts = [
    { icon: "ph:phone-bold", label: contact.phone, href: contact.phoneHref },
    { icon: "ph:envelope-simple-bold", label: contact.email, href: `mailto:${contact.email}` },
    { icon: "ph:map-pin-bold", label: contact.location },
    { icon: "la:linkedin", label: "linkedin.com/in/marcelito-cosicol", href: contact.linkedin },
  ];

  return (
    <section id="about" className="relative bg-white py-24">
      <div className="container-x">
        <Heading icon="ph:user-bold" eyebrow="About Me" title="Profile" />

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* Profile copy */}
          <div data-aos="fade-right">
            <p className="font-display text-2xl font-bold leading-snug text-navy-800 sm:text-[1.7rem]">
              I build scalable products that blend{" "}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10">technical excellence</span>
                <span className="absolute bottom-1 left-0 -z-0 h-3 w-full bg-mist-200" />
              </span>{" "}
              with exceptional user experiences.
            </p>
            <p className="mt-6 text-[15px] leading-8 text-slate">
              Experienced Software Engineer with <strong className="text-navy-800">5+ years in full-stack development</strong>{" "}
              and <strong className="text-navy-800">3+ years in UI/UX design</strong>, specializing in building scalable
              frontend and backend solutions while crafting intuitive, user-centric interfaces. Proficient in developing
              responsive, high-performance applications, architecting efficient APIs, optimizing ETL processes, and
              managing data-driven workflows. Passionate about delivering end-to-end solutions that drive innovation and
              business growth.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {strengths.map((s, i) => (
                <div
                  key={s.title}
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                  className="group relative overflow-hidden rounded-2xl border border-mist-200 bg-mist-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-navy-800 hover:shadow-lift"
                >
                  <span className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-navy-800 transition duration-500 group-hover:scale-x-100" />
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white text-navy-800 shadow-card transition group-hover:bg-navy-800 group-hover:text-white">
                      <Icon icon={s.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-[15px] font-bold text-navy-800">{s.title}</h3>
                      <p className="mt-1.5 text-[13px] leading-6 text-slate">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* At-a-glance card (styled like the résumé sidebar) */}
          <aside data-aos="fade-left" className="relative overflow-hidden rounded-3xl bg-mist-100 p-7">
            <div className="bg-dots pointer-events-none absolute inset-0 opacity-60" />
            <div className="relative">
              <SideTitle icon="ph:address-book-bold" title="Contact" />
              <ul className="mt-5 space-y-4">
                {facts.map((f) => (
                  <li key={f.label} className="flex items-start gap-3 text-[13.5px] text-ink">
                    <Icon icon={f.icon} className="mt-0.5 h-[18px] w-[18px] flex-shrink-0 text-navy-800" />
                    {f.href ? (
                      <a href={f.href} target="_blank" rel="noopener noreferrer" className="break-all transition hover:text-navy-600 hover:underline">
                        {f.label}
                      </a>
                    ) : (
                      <span>{f.label}</span>
                    )}
                  </li>
                ))}
              </ul>

              <div className="my-6 h-px bg-mist-300" />

              <SideTitle icon="ph:graduation-cap-bold" title="Education" />
              {education.map((e) => (
                <div key={e.qualification} className="mt-4">
                  <p className="font-display text-[14px] font-bold text-navy-800">{e.qualification}</p>
                  <p className="text-[13px] text-slate">{e.institution}</p>
                  <p className="mt-1 inline-block rounded-full bg-navy-800 px-2.5 py-0.5 text-[11px] font-semibold text-white">
                    {e.year}
                  </p>
                </div>
              ))}

              <div className="my-6 h-px bg-mist-300" />

              <SideTitle icon="ph:translate-bold" title="Languages" />
              <div className="mt-4 flex gap-2">
                {languages.map((l) => (
                  <span key={l} className="rounded-full border border-navy-800/20 bg-white px-3.5 py-1 text-[12px] font-semibold text-navy-800">
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

const SideTitle = ({ icon, title }: { icon: string; title: string }) => (
  <div className="flex items-center gap-3">
    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-800 text-white">
      <Icon icon={icon} className="h-[18px] w-[18px]" />
    </span>
    <h3 className="font-display text-[17px] font-extrabold uppercase tracking-wide text-navy-800">{title}</h3>
  </div>
);

export default About;
