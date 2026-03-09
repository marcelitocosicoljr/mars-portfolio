"use client";
import TopBar from "./components/layouts/TopBar";
import Masthead from "./components/views/home/Masthead";
import Features from "./components/views/home/Features";
import Heading from "./components/uis/titles/Heading";
import Projects from "./components/views/home/Projects";
import Contact from "./components/views/home/Contact";
import Footer from "./components/layouts/Footer";
import { useRef } from "react";

export default function Home() {
  const home = useRef(null);
  const works = useRef(null);
  const contact = useRef(null);

  const scrollToComponent = (ref: any) => {
    if (ref.current) {
      const scrollPosition =
        ref.current.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#0B0D10]">
      <TopBar
        home={home}
        works={works}
        contact={contact}
        scrollToComponent={scrollToComponent}
      />

      {/* Hero */}
      <div ref={home}>
        <Masthead />
      </div>

      {/* Services & Skills */}
      <Features />

      {/* Portfolio */}
      <section ref={works} className="bg-[#0B0D10] pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-6 xl:px-12">
          <Heading title="My Portfolio" subTitle="Projects Worked On" />
        </div>
        <Projects />
      </section>

      {/* Contact */}
      <section ref={contact} className="bg-[#0B0D10] pt-24">
        <div className="max-w-7xl mx-auto px-6 xl:px-12 mb-12">
          <Heading title="Let's Connect" subTitle="Contact Me" />
        </div>
        <Contact />
      </section>

      <Footer
        home={home}
        works={works}
        contact={contact}
        scrollToComponent={scrollToComponent}
      />
    </main>
  );
}
