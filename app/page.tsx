"use client";
import TopBar from "./components/layouts/TopBar";
import Footer from "./components/layouts/Footer";
import Masthead from "./components/views/home/Masthead";
import Marquee from "./components/views/home/Marquee";
import About from "./components/views/home/About";
import Features from "./components/views/home/Features";
import Experience from "./components/views/home/Experience";
import Skills from "./components/views/home/Skills";
import Projects from "./components/views/home/Projects";
import Contact from "./components/views/home/Contact";
import BackToTop from "./components/uis/BackToTop";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-clip bg-white">
      <TopBar />
      <Masthead />
      <Marquee />
      <About />
      <Features />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
