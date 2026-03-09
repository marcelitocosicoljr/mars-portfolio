"use client";
import React from "react";
import { Icon } from "@iconify/react";

const Footer = ({
  home,
  works,
  contact,
  scrollToComponent = () => {},
}: any) => {
  return (
    <footer className="bg-[#0B0D10] border-t border-white/5">
      {/* Main footer */}
      <div data-aos="fade-up" className="max-w-7xl mx-auto px-6 xl:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand col */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-0.5">
            <span className="text-theme-orange text-[22px] font-black tracking-tight">
              MARS
            </span>
            <span className="text-white text-[22px] font-black tracking-tight">
              DEV
            </span>
          </div>
          <p className="text-white/45 text-[13px] leading-6 max-w-xs">
            Senior Software Engineer specializing in full-stack web development,
            ETL data pipelines, and high-performance React/Next.js applications.
          </p>
          <div className="flex items-center gap-3 mt-2">
            <a
              href="https://www.facebook.com/mcosicoljr"
              target="_blank"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-theme-orange hover:border-theme-orange/40 transition"
            >
              <Icon icon="fa-brands:facebook" width={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/marcelito-cosicol-19288b22b/"
              target="_blank"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-theme-orange hover:border-theme-orange/40 transition"
            >
              <Icon icon="la:linkedin" width={18} />
            </a>
            <a
              href="mailto:mcosicoljr@gmail.com"
              aria-label="Email"
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-theme-orange hover:border-theme-orange/40 transition"
            >
              <Icon icon="ic:outline-email" width={16} />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <p className="text-[11px] uppercase tracking-widest text-white/30 mb-5">
            Quick Links
          </p>
          <ul className="flex flex-col gap-3">
            {[
              { label: "Home", ref: home, tab: 1 },
              { label: "Portfolio", ref: works, tab: 3 },
              { label: "Contact", ref: contact, tab: 4 },
            ].map(({ label, ref }) => (
              <li key={label}>
                <button
                  onClick={() => scrollToComponent(ref)}
                  className="text-white/55 hover:text-theme-orange transition text-[14px] font-medium uppercase tracking-wider"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <p className="text-[11px] uppercase tracking-widest text-white/30 mb-5">
            Contact
          </p>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="tel:+639397509659"
                className="text-white/55 hover:text-theme-orange transition text-[14px]"
              >
                (+63) 939 750 9659
              </a>
            </li>
            <li>
              <a
                href="mailto:mcosicoljr@gmail.com"
                className="text-white/55 hover:text-theme-orange transition text-[14px]"
              >
                mcosicoljr@gmail.com
              </a>
            </li>
            <li>
              <span className="text-white/35 text-[14px]">
                Puerto Princesa, Palawan, PH
              </span>
            </li>
            <li className="mt-2">
              <a
                href="/assets/files/Marcelito Cosicol Software Engineer CV.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-theme-orange/40 px-5 py-2 text-[12px] font-bold uppercase tracking-widest text-theme-orange transition hover:bg-theme-orange hover:text-white"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-5 px-6 xl:px-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/25 text-[12px]">
            © {new Date().getFullYear()} Marcelito Cosicol Jr. All rights
            reserved.
          </p>
          <p className="text-white/20 text-[12px]">
            Built with Next.js · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
