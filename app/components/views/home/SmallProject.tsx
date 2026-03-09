"use client";
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ImageLightbox from "../../uis/ImageLightbox";

const SmallProject = ({ image, title, tasks, link }: any) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/8 bg-[#1A1D26] transition-all duration-300 hover:border-theme-orange/40 hover:shadow-[0_12px_40px_rgba(252,110,10,0.12)]">
      <div className="relative overflow-hidden aspect-video">
        <ImageLightbox
          src={image}
          alt={title}
          width={900}
          height={500}
          className="w-full h-full"
          imgClassName="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1A1D26] via-transparent to-transparent" />
      </div>
      <div className="p-5">
        <h3 className="text-white font-bold text-[16px] mb-2 leading-snug">
          {title}
        </h3>
        <ul className="flex flex-col gap-1 mb-4">
          {tasks?.map((t: string, i: number) => (
            <li
              key={i}
              className="text-white/45 text-[12px] flex items-center gap-1.5"
            >
              <span className="inline-block w-1 h-1 rounded-full bg-theme-orange" />
              {t}
            </li>
          ))}
        </ul>
        {link && (
          <Link
            href={link}
            target="_blank"
            className="inline-flex items-center gap-1.5 text-theme-orange text-[12px] font-bold uppercase tracking-wider hover:gap-2.5 transition-all"
          >
            View Website <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default SmallProject;
