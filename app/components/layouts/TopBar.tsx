"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const TopBar = ({
  home,
  works,
  contact,
  scrollToComponent = () => {},
}: any) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [tab, setTab] = useState(1);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = (t: number) =>
    `text-[13px] font-semibold tracking-widest uppercase transition-colors duration-200 ${
      tab === t ? "text-theme-orange" : "text-white/80 hover:text-theme-orange"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-[#0B0D10] backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.6)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 xl:px-12">
        {/* Logo */}
        <button
          onClick={() => {
            scrollToComponent(home);
            setTab(1);
          }}
          className="flex items-center gap-0.5 focus:outline-none"
        >
          <span className="text-theme-orange text-[20px] font-black tracking-tight leading-none">
            MARS
          </span>
          <span className="text-white text-[20px] font-black tracking-tight leading-none">
            DEV
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <button
            onClick={() => {
              scrollToComponent(home);
              setTab(1);
            }}
            className={navLinkClass(1)}
          >
            Home
          </button>
          <button
            onClick={() => {
              scrollToComponent(works);
              setTab(3);
            }}
            className={navLinkClass(3)}
          >
            Portfolio
          </button>
          <button
            onClick={() => {
              scrollToComponent(contact);
              setTab(4);
            }}
            className={navLinkClass(4)}
          >
            Contact
          </button>
        </nav>

        {/* CTA + Socials */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="https://www.facebook.com/mcosicoljr"
            target="_blank"
            aria-label="Facebook"
          >
            <span className="text-white/60 hover:text-theme-orange transition-colors duration-200">
              <Icon icon="fa-brands:facebook" width={18} />
            </span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/marcelito-cosicol-19288b22b/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <span className="text-white/60 hover:text-theme-orange transition-colors duration-200">
              <Icon icon="la:linkedin" width={20} />
            </span>
          </Link>
          <Link href="mailto:mcosicoljr@gmail.com" aria-label="Email">
            <span className="text-white/60 hover:text-theme-orange transition-colors duration-200">
              <Icon icon="ic:outline-email" width={20} />
            </span>
          </Link>
          <button
            onClick={() => {
              scrollToComponent(contact);
              setTab(4);
            }}
            className="ml-2 px-5 py-2 bg-theme-orange text-white text-[12px] font-bold uppercase tracking-widest rounded-full transition hover:bg-theme-orangeLight hover:scale-[1.03] shadow-[0_4px_20px_rgba(252,110,10,0.35)]"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white/80 hover:text-theme-orange transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <Icon icon={menuOpen ? "mdi:close" : "mdi:menu"} width={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0B0D10] border-t border-white/10 px-6 py-7 flex flex-col gap-6 shadow-[0_20px_40px_rgba(0,0,0,0.7)]">
          <button
            onClick={() => {
              scrollToComponent(home);
              setTab(1);
              setMenuOpen(false);
            }}
            className={navLinkClass(1)}
          >
            Home
          </button>
          <button
            onClick={() => {
              scrollToComponent(works);
              setTab(3);
              setMenuOpen(false);
            }}
            className={navLinkClass(3)}
          >
            Portfolio
          </button>
          <button
            onClick={() => {
              scrollToComponent(contact);
              setTab(4);
              setMenuOpen(false);
            }}
            className={navLinkClass(4)}
          >
            Contact
          </button>
          <button
            onClick={() => {
              scrollToComponent(contact);
              setTab(4);
              setMenuOpen(false);
            }}
            className="self-center px-6 py-2 bg-theme-orange text-white text-[12px] font-bold uppercase tracking-widest rounded-full transition hover:bg-theme-orangeLight"
          >
            Hire Me
          </button>
        </div>
      )}
    </header>
  );
};

export default TopBar;
