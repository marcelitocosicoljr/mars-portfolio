"use client";
import Image from "next/image";
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
  const about = useRef(null);
  const works = useRef(null);
  const contact = useRef(null);

  const scrollToComponent = (ref: any) => {
    if (ref.current) {
      const scrollPosition =
        ref.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
  };

  return (
    <main className="flex min-h-screen flex-col  ">
      <TopBar
        home={home}
        about={about}
        works={works}
        contact={contact}
        scrollToComponent={scrollToComponent}
      />

      <div id="comp1" ref={home}>
        <Masthead />
      </div>
      <Features />

      <div id="comp2" ref={about}>
        <Heading title="Get to know" subTitle="About Me" />
      </div>

      <p className="text-theme-gray text-[16px] w-full px-4 lg:px-0 lg:w-[60%] mx-auto  mb-24">
        I began my journey into the world of programming during my senior year
        of high school at AMA Computer Learning Centre in Puerto Princesa,
        Palawan. It was there that my passion for this field took root and
        continued to flourish.{" "}
        <strong>
          Upon entering college, I decided to pursue my interest in programming
          and enrolled in the Computer Science program at Palawan State
          University
        </strong>{" "}
        This academic choice allowed me to take my skills to the next level and
        deepen my knowledge in the field.
        <br />
        <br />
        During my second year in college, I, along with my friends,{" "}
        <strong>
          {" "}
          enthusiastically participated in both local and national hackathons.{" "}
        </strong>{" "}
        It was an exhilarating time, as we consistently achieved top rankings.
        In national hackathons with hundreds of participants, we managed to
        secure a place in the top 20. It was during these experiences that we
        became increasingly interested in developing websites and mobile
        applications, particularly for small startups and prototypes.
        <br />
        <br />
        In my third year of college, our classes moved online,
        <strong>
          {" "}
          and I took the opportunity to apply for a position at an IT Solution
          Company, where I gained invaluable experience during my eight-month
          tenure.{" "}
        </strong>{" "}
        While working there, I honed my skills in frontend development by
        creating websites, with many of our projects coming from clients in the
        United Kingdom.
        <br />
        <br />
        However, as my college classes shifted back to a mix of online and
        face-to-face, I decided to explore new opportunities.{" "}
        <strong>
          {" "}
          I joined another IT company where I faced a diverse range of
          challenging tasks. These experiences greatly expanded my skill set.{" "}
        </strong>{" "}
        I delved into backend development, crafting web APIs that were crucial
        for cross-platform applications. I also further developed my abilities
        in creating prototypes, transforming systematic flowcharts into
        user-friendly UI/UX designs, and subsequently translating them into
        functional websites. Additionally, I had the chance to present our
        developed projects to the business team and clients. I even had the
        privilege of leading our frontend team in the company for new projects.
        <br />
        <br />
        Through these experiences, I have come to believe that I can continually
        grow and learn.{" "}
        <strong>
          {" "}
          My ultimate goal is to perform my job exceptionally well, contributing
          to the company{"'"}s growth and being a positive influence on my
          colleagues.{" "}
        </strong>{" "}
        I aim to make my company proud, all in the name of excellence and with
        gratitude for the blessings of God.
      </p>

      <div id="comp3" ref={works}>
        <Heading title="My Portfolio" subTitle="Projects Worked On" />
      </div>

      <Projects />

      <div id="comp4" ref={contact} className="w-full py-6 mt-12">
        <Heading title="Let's Connect " subTitle="Contact Me" />
      </div>

      <Contact />

      <Footer
        home={home}
        about={about}
        works={works}
        contact={contact}
        scrollToComponent={scrollToComponent}
      />
    </main>
  );
}
