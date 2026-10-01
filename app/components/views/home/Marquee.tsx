"use client";
import { Icon } from "@iconify/react";

const tech = [
  { name: "React", icon: "mdi:react" },
  { name: "Next.js", icon: "tabler:brand-nextjs" },
  { name: "TypeScript", icon: "mdi:language-typescript" },
  { name: ".NET / C#", icon: "mdi:dot-net" },
  { name: "Node.js", icon: "mdi:nodejs" },
  { name: "Apache NiFi", icon: "ph:flow-arrow-bold" },
  { name: "PostgreSQL", icon: "akar-icons:postgresql-fill" },
  { name: "MongoDB", icon: "devicon-plain:mongodb" },
  { name: "Tailwind CSS", icon: "mdi:tailwind" },
  { name: "React Native", icon: "tabler:device-mobile-code" },
  { name: "Docker", icon: "mdi:docker" },
  { name: "Figma", icon: "solar:figma-bold" },
];

// Infinite scrolling tech band; the list is doubled so the -50% keyframe loops seamlessly.
export default function Marquee() {
  return (
    <div className="group relative overflow-hidden bg-navy-800 py-5">
      <div className="bg-grid-light pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-navy-800 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-navy-800 to-transparent" />
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {[...tech, ...tech].map((t, i) => (
          <div
            key={i}
            className="mx-7 flex items-center gap-2.5 font-display text-[13px] font-bold uppercase tracking-[0.2em] text-white/80 transition hover:text-white"
          >
            <Icon icon={t.icon} className="h-5 w-5 text-navy-400" />
            {t.name}
            <span className="ml-7 h-1.5 w-1.5 rotate-45 bg-white/30" />
          </div>
        ))}
      </div>
    </div>
  );
}
