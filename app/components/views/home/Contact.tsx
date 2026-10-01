"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import Heading from "../../uis/titles/Heading";
import { CV_URL, contact } from "../../../data/profile";

const contactItems = [
  {
    icon: "ph:phone-bold",
    label: "Call Me",
    value: contact.phone,
    href: contact.phoneHref,
    desc: "Available Mon–Fri, 9AM–6PM PHT",
  },
  {
    icon: "ph:envelope-simple-bold",
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    desc: "I respond within 24 hours",
    copy: contact.email,
  },
  {
    icon: "la:linkedin",
    label: "LinkedIn",
    value: "Marcelito Cosicol",
    href: contact.linkedin,
    desc: "Let's connect professionally",
  },
  {
    icon: "fa-brands:facebook",
    label: "Facebook",
    value: "facebook.com/mcosicoljr",
    href: contact.facebook,
    desc: "Send me a message anytime",
  },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${text}`;
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-mist-100 py-24">
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-60" />
      <div className="container-x relative">
        <Heading icon="ph:chat-circle-dots-bold" eyebrow="Let's Connect" title="Contact Me" />

        <div className="mb-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactItems.map((item, i) => (
            <div
              key={item.label}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group relative flex flex-col gap-5 rounded-3xl border border-mist-200 bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1.5 hover:border-navy-800 hover:shadow-lift"
            >
              <a href={item.href} target="_blank" rel="noopener noreferrer" className="absolute inset-0 rounded-3xl" aria-label={item.label} />
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-800 text-white shadow-navy transition duration-300 group-hover:scale-110">
                  <Icon icon={item.icon} className="h-6 w-6" />
                </span>
                <Icon
                  icon="ph:arrow-up-right-bold"
                  className="h-5 w-5 text-mist-300 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-navy-800"
                />
              </div>
              <div>
                <p className="eyebrow !tracking-[0.2em] !text-slate-light">{item.label}</p>
                <p className="mt-1.5 break-all font-display text-[15px] font-bold leading-snug text-navy-800">{item.value}</p>
                <p className="mt-1 text-[12.5px] text-slate">{item.desc}</p>
              </div>
              {item.copy && (
                <button
                  onClick={() => copy(item.copy!)}
                  className="relative z-10 inline-flex items-center gap-1.5 self-start rounded-full border border-mist-300 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-navy-800 transition hover:border-navy-800 hover:bg-navy-800 hover:text-white"
                >
                  <Icon icon={copied ? "ph:check-bold" : "ph:copy-bold"} className="h-3.5 w-3.5" />
                  {copied ? "Copied!" : "Copy email"}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* CTA band */}
        <div
          data-aos="zoom-in-up"
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-700 via-navy-800 to-navy-950 px-6 py-14 text-center text-white shadow-lift sm:px-14"
        >
          <div className="bg-grid-light pointer-events-none absolute inset-0" />
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-navy-500/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-navy-400/20 blur-3xl" />
          <div className="relative">
            <p className="eyebrow !text-white/60">Ready to build something great?</p>
            <h3 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-black uppercase leading-tight tracking-tight sm:text-5xl">
              Let&apos;s work together
            </h3>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-white/70">
              I&apos;m open to full-time roles, contract projects, and freelance engagements. Let&apos;s discuss how I can
              add value to your team.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${contact.email}`}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-display text-[12px] font-bold uppercase tracking-[0.18em] text-navy-800 transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(255,255,255,0.25)]"
              >
                Get In Touch
                <Icon icon="ph:paper-plane-tilt-bold" className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-1" />
              </a>
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-8 py-3.5 font-display text-[12px] font-bold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
              >
                <Icon icon="ph:download-simple-bold" className="h-4 w-4" /> Download CV
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-full bg-navy-800 px-5 py-3 text-[13px] font-semibold text-white shadow-navy"
          >
            Email copied to clipboard
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
