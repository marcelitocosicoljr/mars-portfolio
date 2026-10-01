import React from "react";
import { Icon } from "@iconify/react";

interface Props {
  icon: string;
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  light?: boolean;
}

// Section heading styled after the résumé look: navy icon badge, bold title, underline rule.
const Heading = ({ icon, eyebrow, title, align = "center", light }: Props) => {
  const centered = align === "center";
  return (
    <div
      data-aos="fade-up"
      className={`mb-12 flex flex-col ${centered ? "items-center text-center" : "items-start"}`}
    >
      <div className="flex items-center gap-3">
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-full shadow-navy ${
            light ? "bg-white text-navy-800" : "bg-navy-800 text-white"
          }`}
        >
          <Icon icon={icon} className="h-5 w-5" />
        </span>
        <span className={`eyebrow ${light ? "!text-white/70" : ""}`}>{eyebrow}</span>
      </div>
      <h2
        className={`mt-4 font-display text-3xl font-extrabold uppercase tracking-tight sm:text-[2.6rem] sm:leading-[1.1] ${
          light ? "text-white" : "text-navy-800"
        }`}
      >
        {title}
      </h2>
      <div className={`mt-5 flex items-center gap-2 ${centered ? "justify-center" : ""}`}>
        <span className={`h-[3px] w-16 rounded-full ${light ? "bg-white" : "bg-navy-800"}`} />
        <span className={`h-[3px] w-3 rounded-full ${light ? "bg-white/40" : "bg-navy-400"}`} />
        <span className={`h-[3px] w-1.5 rounded-full ${light ? "bg-white/25" : "bg-mist-300"}`} />
      </div>
    </div>
  );
};

export default Heading;
