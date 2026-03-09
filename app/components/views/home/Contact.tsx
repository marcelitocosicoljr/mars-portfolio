"use client";
import React from "react";
import { Icon } from "@iconify/react";

const contactItems = [
  {
    icon: "tdesign:call",
    label: "Call Me",
    value: "(+63) 939 750 9659",
    href: "tel:+639397509659",
    desc: "Available Mon–Fri, 9AM–6PM PHT",
  },
  {
    icon: "ic:outline-email",
    label: "Email",
    value: "mcosicoljr@gmail.com",
    href: "mailto:mcosicoljr@gmail.com",
    desc: "I respond within 24 hours",
  },
  {
    icon: "fa-brands:facebook",
    label: "Facebook",
    value: "facebook.com/mcosicoljr",
    href: "https://www.facebook.com/mcosicoljr",
    desc: "Send me a message anytime",
  },
  {
    icon: "la:linkedin",
    label: "LinkedIn",
    value: "Marcelito Cosicol",
    href: "https://www.linkedin.com/in/marcelito-cosicol-19288b22b/",
    desc: "Let's connect professionally",
  },
];

const Contact = () => {
  return (
    <section className="bg-[#0B0D10] pb-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {contactItems.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group rounded-2xl border border-white/8 bg-[#1A1D26] p-7 flex flex-col gap-4 transition-all duration-300 hover:border-theme-orange/40 hover:shadow-[0_8px_40px_rgba(252,110,10,0.12)] hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-theme-orange/10 border border-theme-orange/20 flex items-center justify-center transition group-hover:bg-theme-orange/20">
                <Icon icon={item.icon} className="text-theme-orange w-6 h-6" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-widest text-white/35 mb-0.5">
                  {item.label}
                </p>
                <p className="text-white font-bold text-[15px] leading-snug">
                  {item.value}
                </p>
                <p className="text-white/40 text-[12px] mt-1">{item.desc}</p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA band */}
        <div
          data-aos="zoom-in-up"
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-theme-orange to-[#FF884D] p-10 md:p-14 text-center shadow-[0_20px_60px_rgba(252,110,10,0.3)]"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <p className="text-[11px] uppercase tracking-widest text-white/70 mb-3">
            Ready to build something great?
          </p>
          <h3 className="text-3xl sm:text-4xl font-black text-white mb-5">
            LET&apos;S WORK TOGETHER
          </h3>
          <p className="text-white/80 max-w-xl mx-auto text-[15px] leading-relaxed mb-8">
            I&apos;m open to full-time roles, contract projects, and freelance
            engagements. Let&apos;s discuss how I can add value to your team.
          </p>
          <a
            href="mailto:mcosicoljr@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-[#0B0D10] text-white font-bold uppercase tracking-widest text-[13px] px-8 py-4 transition hover:scale-[1.03] hover:shadow-lg"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
