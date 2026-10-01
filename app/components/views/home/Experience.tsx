"use client";
import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import Heading from "../../uis/titles/Heading";
import { certifications, experience } from "../../../data/profile";

const Experience = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start 75%", "end 60%"] });
  const lineFill = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const [showAllCerts, setShowAllCerts] = useState(false);
  const visibleCerts = showAllCerts ? certifications : certifications.slice(0, 6);

  return (
    <section id="experience" className="relative overflow-hidden bg-mist-100 py-24">
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-60" />
      <div className="container-x relative">
        <Heading icon="ph:suitcase-simple-bold" eyebrow="Career Journey" title="Work Experience" />

        {/* Timeline */}
        <div ref={timelineRef} className="relative mx-auto max-w-5xl">
          {/* Track + scroll-driven fill */}
          <div className="absolute bottom-0 left-[19px] top-0 w-[3px] rounded-full bg-mist-300 md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            style={{ scaleY: lineFill }}
            className="absolute bottom-0 left-[19px] top-0 w-[3px] origin-top rounded-full bg-navy-800 md:left-1/2 md:-translate-x-1/2"
          />

          <ol className="space-y-10">
            {experience.map((job, i) => {
              const right = i % 2 === 1;
              return (
                <li key={job.company + job.period} className="relative md:grid md:grid-cols-2 md:gap-14">
                  {/* Node */}
                  <span className="absolute left-0 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-mist-100 bg-navy-800 text-white shadow-navy md:left-1/2 md:-translate-x-1/2">
                    <Icon icon={job.current ? "ph:star-four-fill" : "ph:briefcase-bold"} className="h-4 w-4" />
                    {job.current && <span className="absolute inset-0 animate-ping rounded-full bg-navy-600/40" />}
                  </span>

                  <div
                    data-aos={right ? "fade-left" : "fade-right"}
                    className={`ml-14 md:ml-0 ${right ? "md:col-start-2" : "md:col-start-1 md:text-right"}`}
                  >
                    <article className="group relative rounded-3xl border border-mist-200 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-navy-800 hover:shadow-lift sm:p-7">
                      <div className={`flex flex-wrap items-center gap-2 ${right ? "" : "md:justify-end"}`}>
                        <span className="rounded-full bg-navy-800 px-3 py-1 font-display text-[11px] font-bold uppercase tracking-wider text-white">
                          {job.period}
                        </span>
                        {job.current && (
                          <span className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Current
                          </span>
                        )}
                      </div>
                      <h3 className="mt-4 font-display text-lg font-extrabold leading-snug text-navy-800">{job.role}</h3>
                      <p className="mt-0.5 text-[14px] font-semibold text-navy-500">{job.company}</p>
                      <ul className={`mt-4 space-y-2 text-[13.5px] leading-6 text-slate ${right ? "" : "md:text-right"}`}>
                        {job.points.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                      <div className={`mt-5 flex flex-wrap gap-2 ${right ? "" : "md:justify-end"}`}>
                        {job.tags.map((t) => (
                          <span key={t} className="rounded-md bg-mist-100 px-2.5 py-1 text-[11px] font-semibold text-navy-700 transition group-hover:bg-navy-800/5">
                            {t}
                          </span>
                        ))}
                      </div>
                    </article>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Certifications — table styled after the résumé's navy-header table */}
        <div className="mx-auto mt-24 max-w-5xl">
          <Heading icon="ph:certificate-bold" eyebrow="Always Learning" title="Certifications" />
          <div data-aos="fade-up" className="overflow-hidden rounded-2xl border border-mist-300 bg-white shadow-card">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-navy-800 font-display text-[12px] uppercase tracking-[0.14em] text-white">
                  <th className="w-14 px-4 py-4 text-center font-bold sm:w-20">#</th>
                  <th className="px-4 py-4 font-bold">Certification</th>
                  <th className="hidden px-4 py-4 font-bold sm:table-cell">Provider / Date</th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence initial={false}>
                  {visibleCerts.map((c, i) => (
                    <motion.tr
                      key={c.title}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="group border-t border-mist-200 transition-colors hover:bg-mist-100"
                    >
                      <td className="px-4 py-3.5 text-center font-display text-[13px] font-bold text-navy-400 group-hover:text-navy-800">
                        {String(i + 1).padStart(2, "0")}
                      </td>
                      <td className="px-4 py-3.5 text-[14px] font-medium text-ink">
                        <span className="flex items-center gap-2">
                          {c.highlight && <Icon icon="ph:trophy-bold" className="h-4 w-4 flex-shrink-0 text-amber-500" />}
                          {c.title}
                        </span>
                        {c.note && <span className="mt-0.5 block text-[12px] text-slate-light sm:hidden">{c.note}</span>}
                      </td>
                      <td className="hidden px-4 py-3.5 text-[13px] text-slate sm:table-cell">{c.note ?? "—"}</td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
            <button
              onClick={() => setShowAllCerts((v) => !v)}
              className="flex w-full items-center justify-center gap-2 border-t border-mist-200 bg-mist-50 py-3.5 font-display text-[12px] font-bold uppercase tracking-[0.16em] text-navy-800 transition hover:bg-navy-800 hover:text-white"
            >
              {showAllCerts ? "Show less" : `Show all ${certifications.length} certifications`}
              <Icon icon="ph:caret-down-bold" className={`h-4 w-4 transition ${showAllCerts ? "rotate-180" : ""}`} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
