"use client";
import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";
import { navLinks, scrollToId } from "./TopBar";
import { CV_URL, contact } from "../../data/profile";

const socials = [
  { href: contact.linkedin, icon: "la:linkedin", label: "LinkedIn" },
  { href: contact.facebook, icon: "fa-brands:facebook", label: "Facebook" },
  { href: `mailto:${contact.email}`, icon: "ic:outline-email", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div className="bg-grid-light pointer-events-none absolute inset-0 opacity-50" />
      <div className="container-x relative grid grid-cols-1 gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          {/* White tile keeps the logo's dark-blue wordmark legible on navy */}
          <div className="self-start rounded-2xl bg-white px-4 py-3 shadow-[0_0_30px_rgba(58,80,184,0.35)]">
            <Image
              src="/assets/images/marstech-logo.png"
              alt="Marcelito Tech logo"
              width={804}
              height={603}
              className="h-20 w-auto"
            />
          </div>
          <p className="max-w-sm text-[13.5px] leading-6 text-white/55">
            Senior Full-Stack Software Engineer specializing in full-stack web
            development, ETL data pipelines, and high-performance React/Next.js
            applications.
          </p>
          <div className="mt-2 flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-navy-800"
              >
                <Icon icon={s.icon} width={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <p className="mb-5 font-display text-[11px] font-bold uppercase tracking-[0.28em] text-white/40">
            Quick Links
          </p>
          <ul className="grid grid-cols-2 gap-3">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => scrollToId(id)}
                  className="group flex items-center gap-2 text-[14px] font-medium text-white/65 transition hover:text-white"
                >
                  <span className="h-px w-3 bg-white/30 transition-all group-hover:w-5 group-hover:bg-white" />
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="mb-5 font-display text-[11px] font-bold uppercase tracking-[0.28em] text-white/40">
            Contact
          </p>
          <ul className="flex flex-col gap-3 text-[14px]">
            <li>
              <a
                href={contact.phoneHref}
                className="flex items-center gap-2.5 text-white/65 transition hover:text-white"
              >
                <Icon icon="ph:phone-bold" /> {contact.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-2.5 text-white/65 transition hover:text-white"
              >
                <Icon icon="ph:envelope-simple-bold" /> {contact.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-white/45">
              <Icon icon="ph:map-pin-bold" /> Puerto Princesa, Palawan, PH
            </li>
            <li className="mt-2">
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-navy-800 transition hover:-translate-y-0.5 hover:bg-mist-200"
              >
                <Icon icon="ph:download-simple-bold" /> Download CV
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-5">
        <div className="container-x flex flex-col items-center justify-between gap-2 sm:flex-row">
          <p className="text-[12px] text-white/40">
            © {new Date().getFullYear()} Marcelito Cosicol Jr. All rights
            reserved.
          </p>
          <p className="text-[12px] text-white/30">
            Built with Next.js · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
