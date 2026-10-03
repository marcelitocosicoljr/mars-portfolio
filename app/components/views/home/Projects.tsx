"use client";
import React, { useMemo, useState } from "react";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import Heading from "../../uis/titles/Heading";
import Lightbox, { LightboxItem } from "../../uis/Lightbox";
import FeaturedProject, { FeaturedItem } from "./FeaturedProject";

const shots = (folder: string, nums: number[], urls: string[]) =>
  nums.map((n, i) => ({
    src: `/assets/images/projects/${folder}/image (${n}).png`,
    url: urls[i] ?? urls[urls.length - 1],
  }));

// Recent projects — the only ones shown with screenshots
const featured: FeaturedItem[] = [
  {
    title: "NerdFlo",
    category: "Web App · Mobile App",
    tagline: "A home for everything you read",
    description:
      "A knowledge platform where readers save highlights from any website, snap photos of their book notes, see how their ideas connect, and earn by sharing their collections.",
    highlights: [
      "Web Highlighter — save passages from any site in one click",
      "AI Photo-to-Note turns book pages into editable notes",
      "Knowledge Lab and book influence maps that connect ideas",
      "Note Exchange marketplace with credits and earnings",
    ],
    tasks: ["Full-Stack Development", "UI/UX Design", "Mobile App"],
    shots: shots("NerdFlo", [23, 24, 25], ["nerdflo.com"]),
    links: [{ label: "Visit NerdFlo", href: "https://www.nerdflo.com" }],
  },
  {
    title: "College Loan Pro",
    category: "Web App",
    tagline: "College loans done right",
    description:
      "Helps students and families compare colleges, estimate financial aid, and project loan repayment — so they can make confident decisions before they commit.",
    highlights: [
      "Side-by-side college comparison: COA, need met, aid, net cost & shortfall",
      "Student Aid Index (SAI) estimator feeding every calculation",
      "Loan planning with a full funding breakdown (Stafford, Parent PLUS)",
      "Interest rate lookup, CORE Method guidance, and an admin dashboard",
    ],
    tasks: ["Full-Stack Development", "UI/UX Design", "REST API"],
    shots: shots(
      "CollegeLoanPro",
      [30, 31, 32, 18, 19, 20, 21, 22],
      [
        "collegeloanpro.com",
        "collegeloanpro.com",
        "collegeloanpro.com/colleges",
        "collegeloanpro.com",
      ],
    ),
    links: [{ label: "Visit Site", href: "https://collegeloanpro.com" }],
  },
  {
    title: "College Aid Plan",
    category: "Web App",
    tagline: "FAFSA & CSS Profile practice platform",
    description:
      "A platform where students practise the FAFSA and CSS Profile forms before submitting the real thing, backed by an admin dashboard for schools, scholarships, and cost-of-attendance data.",
    highlights: [
      "3,600+ practice FAFSA forms submitted by 3,200+ unique users",
      "Practice FAFSA & CSS Profile flows with form viewers",
      "Admin tools for schools, scholarships, COA submissions & tooltips",
      "Designed in Figma, built end-to-end, and deployed to production",
    ],
    tasks: [
      "UI/UX Design (Figma)",
      "Frontend Development",
      "REST API",
      "Deployment",
    ],
    shots: shots(
      "CollegeAidPlan",
      [14, 15, 16],
      ["insidecollegeaid.com/admin/dashboard"],
    ),
    links: [{ label: "Visit Site", href: "https://insidecollegeaid.com" }],
  },
  {
    title: "Navagis Websites",
    category: "Websites",
    tagline: "Google Maps Platform partner sites",
    description:
      "A family of marketing sites for Navagis, a Google Cloud & Google Maps Platform partner — covering location intelligence, fleet management, and a localized site for the Vietnam market.",
    highlights: [
      "Places Insights — POI data product powered by Google Maps Platform",
      "NavaFleet.ai — end-to-end fleet visibility platform site",
      "Navagis Vietnam — fully localized Vietnamese-language site",
    ],
    tasks: ["Web Development", "Responsive UI", "Localization"],
    shots: shots(
      "NavagisWebsites",
      [26, 27, 28],
      ["placesinsights.navagis.com", "navafleet.ai", "navagisvietnam.com"],
    ),
    links: [
      { label: "Places Insights", href: "https://placesinsights.navagis.com" },
      { label: "NavaFleet", href: "https://navafleet.ai" },
      { label: "Vietnam", href: "https://navagisvietnam.com" },
    ],
  },
];

// Other projects — listed by name only
type Kind = "webapp" | "website" | "mobile";
interface OtherProject {
  title: string;
  kind: Kind;
  tasks: string[];
  note?: string;
  link?: string;
}

const others: OtherProject[] = [
  {
    title: "Access Benefit Sharing (ABSCH)",
    kind: "webapp",
    tasks: ["Designed UI/UX", "Developed Web App"],
  },
  {
    title: "CRM for ABSCH",
    kind: "webapp",
    tasks: ["Designed UI/UX", "Developed Web App"],
  },
  {
    title: "ISTOPP Web App",
    kind: "webapp",
    note: "Information System on Transport Operations",
    tasks: ["Developed Web App", "Integrated Data"],
  },
  {
    title: "Housination",
    kind: "website",
    tasks: ["Developed Web App"],
    link: "https://housination.com/",
  },
  {
    title: "Scottbros",
    kind: "website",
    tasks: ["Maintained Web App"],
    link: "https://scottbros.com/",
  },
  {
    title: "NextGen Sports Camp",
    kind: "website",
    tasks: ["Developed Web App", "Maintained Web App"],
    link: "https://nextgensportscamps.co.uk/",
  },
  {
    title: "Babylon Durham",
    kind: "website",
    tasks: ["Maintained Web App"],
    link: "https://babylondurham.com/",
  },
  {
    title: "Basilico",
    kind: "website",
    tasks: ["Developed Web App"],
    link: "https://basilico.co.uk/",
  },
  {
    title: "Carwan Gallery",
    kind: "website",
    tasks: ["Maintained Web App"],
    link: "https://carwangallery.com/",
  },
  {
    title: "Loft Durham",
    kind: "website",
    tasks: ["Maintained Web App"],
    link: "https://loftdurham.co.uk/",
  },
  {
    title: "Wilder Events",
    kind: "website",
    tasks: ["Maintained Web App"],
    link: "https://www.wilderevents.co.uk/",
  },
  // Mobile
  {
    title: "NerdFlo Mobile App",
    kind: "mobile",
    tasks: ["Developed Mobile App"],
    link: "https://www.nerdflo.com",
  },
  { title: "Need4Sped App", kind: "mobile", tasks: ["Developed Mobile App"] },
  { title: "My Phone App", kind: "mobile", tasks: ["Developed Mobile App"] },
  {
    title: "PSU Registrar Portal",
    kind: "mobile",
    tasks: ["Developed Web App"],
  },
];

const kindMeta: Record<Kind, { label: string; icon: string }> = {
  webapp: { label: "Web App", icon: "ph:app-window-bold" },
  website: { label: "Website", icon: "ph:globe-bold" },
  mobile: { label: "Mobile App", icon: "ph:device-mobile-bold" },
};

const filters = [
  { key: "all", label: "All" },
  { key: "webapp", label: "Web Apps" },
  { key: "website", label: "Websites" },
] as const;
type FilterKey = (typeof filters)[number]["key"];

const Projects = () => {
  const [filter, setFilter] = useState<FilterKey>("all");
  const [gallery, setGallery] = useState<{
    items: LightboxItem[];
    index: number;
  } | null>(null);

  const webProjects = useMemo(
    () =>
      others.filter(
        (p) => p.kind !== "mobile" && (filter === "all" || p.kind === filter),
      ),
    [filter],
  );
  const mobileApps = others.filter((p) => p.kind === "mobile");
  const count = (key: FilterKey) =>
    others.filter(
      (p) => p.kind !== "mobile" && (key === "all" || p.kind === key),
    ).length;

  const openGallery = (project: FeaturedItem, index: number) =>
    setGallery({
      index,
      items: project.shots.map((s, i) => ({
        src: s.src,
        title: project.title,
        caption: `${s.url} · ${i + 1} of ${project.shots.length}`,
        link: `https://${s.url.split("/")[0]}`,
      })),
    });

  const totals = [
    { value: featured.length + others.length, label: "Projects listed" },
    {
      value: featured.length + others.filter((p) => p.kind === "webapp").length,
      label: "Web apps & platforms",
    },
    {
      value: others.filter((p) => p.kind === "website").length + 3,
      label: "Client websites",
    },
    { value: mobileApps.length, label: "Mobile apps" },
  ];

  return (
    <section id="portfolio" className="bg-white py-24">
      <div className="container-x">
        <Heading
          icon="ph:folder-open-bold"
          eyebrow="My Portfolio"
          title="Featured Projects"
        />

        {/* Featured case studies */}
        <div className="space-y-24">
          {featured.map((p, i) => (
            <FeaturedProject
              key={p.title}
              project={p}
              index={i}
              onOpen={(shot) => openGallery(p, shot)}
            />
          ))}
        </div>

        {/* Totals strip */}
        <div
          data-aos="fade-up"
          className="relative mt-28 grid grid-cols-2 overflow-hidden rounded-3xl bg-gradient-to-br from-navy-700 via-navy-800 to-navy-950 text-white shadow-lift md:grid-cols-4"
        >
          <div className="bg-grid-light pointer-events-none absolute inset-0" />
          {totals.map((t, i) => (
            <div
              key={t.label}
              className={`relative px-6 py-8 text-center ${i > 0 ? "md:border-l md:border-white/10" : ""} ${
                i % 2 === 1 ? "border-l border-white/10" : ""
              } ${i > 1 ? "border-t border-white/10 md:border-t-0" : ""}`}
            >
              <p className="font-display text-4xl font-black">{t.value}+</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">
                {t.label}
              </p>
            </div>
          ))}
        </div>

        {/* Other projects */}
        <div className="mt-24">
          <Heading
            icon="ph:stack-bold"
            eyebrow="Also Worked On"
            title="More Projects"
          />

          <div data-aos="fade-up" className="mb-8 flex justify-center">
            <div className="flex gap-1 rounded-full border border-mist-200 bg-mist-100 p-1.5">
              {filters.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className={`relative flex items-center gap-2 rounded-full px-4 py-2 font-display text-[12px] font-bold uppercase tracking-[0.12em] transition-colors sm:px-5 ${
                    filter === f.key
                      ? "text-white"
                      : "text-navy-800 hover:text-navy-500"
                  }`}
                >
                  {filter === f.key && (
                    <motion.span
                      layoutId="other-filter"
                      className="absolute inset-0 rounded-full bg-navy-800 shadow-navy"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 32,
                      }}
                    />
                  )}
                  <span className="relative">{f.label}</span>
                  <span
                    className={`relative rounded-full px-1.5 text-[10px] ${
                      filter === f.key
                        ? "bg-white/20 text-white"
                        : "bg-white text-navy-700"
                    }`}
                  >
                    {count(f.key)}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <motion.ul
            layout
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {webProjects.map((p) => (
                <ProjectRow key={p.title} project={p} />
              ))}
            </AnimatePresence>
          </motion.ul>
        </div>

        {/* Mobile apps */}
        <div className="mt-20">
          <div data-aos="fade-up" className="mb-8 flex items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-800 text-white shadow-navy">
              <Icon icon="ph:device-mobile-bold" className="h-5 w-5" />
            </span>
            <div>
              <p className="eyebrow">On the go</p>
              <h3 className="font-display text-xl font-extrabold uppercase tracking-tight text-navy-800 sm:text-2xl">
                Mobile Applications
              </h3>
            </div>
            <span className="hidden h-px flex-1 bg-mist-300 sm:block" />
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {mobileApps.map((p, i) => (
              <li
                key={p.title}
                data-aos="fade-up"
                data-aos-delay={(i % 3) * 80}
              >
                <ProjectRowInner project={p} featured={i === 0} />
              </li>
            ))}
          </ul>
        </div>

        {/* Confidential work note (from CV) */}
        <div
          data-aos="fade-up"
          className="mt-16 flex flex-col items-center gap-4 rounded-3xl border border-dashed border-navy-400/50 bg-mist-50 px-6 py-8 text-center sm:flex-row sm:text-left"
        >
          <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-navy-800 text-white">
            <Icon icon="ph:lock-key-bold" className="h-6 w-6" />
          </span>
          <p className="text-[14px] leading-6 text-slate">
            <strong className="font-display text-navy-800">
              Plus 10+ confidential projects
            </strong>{" "}
            — including enterprise data pipelines and internal systems that
            can&apos;t be shown publicly. Happy to walk through them in an
            interview.
          </p>
        </div>
      </div>

      <Lightbox
        items={gallery?.items ?? []}
        index={gallery ? gallery.index : null}
        onClose={() => setGallery(null)}
        onIndexChange={(index) => setGallery((g) => (g ? { ...g, index } : g))}
      />
    </section>
  );
};

const ProjectRow = ({ project }: { project: OtherProject }) => (
  <motion.li
    layout
    initial={{ opacity: 0, scale: 0.96 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.96 }}
    transition={{ duration: 0.25 }}
  >
    <ProjectRowInner project={project} />
  </motion.li>
);

const ProjectRowInner = ({
  project,
  featured,
}: {
  project: OtherProject;
  featured?: boolean;
}) => {
  const meta = kindMeta[project.kind];
  const body = (
    <div
      className={`group flex h-full items-start gap-4 rounded-2xl border p-5 transition duration-300 hover:-translate-y-1 hover:border-navy-800 hover:shadow-lift ${
        featured ? "border-navy-800/40 bg-mist-100" : "border-mist-200 bg-white"
      }`}
    >
      <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-mist-100 text-navy-800 transition group-hover:bg-navy-800 group-hover:text-white">
        <Icon icon={meta.icon} className="h-5 w-5" />
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h4 className="font-display text-[15px] font-bold leading-snug text-navy-800">
            {project.title}
          </h4>
          {project.link && (
            <Icon
              icon="ph:arrow-up-right-bold"
              className="mt-0.5 h-4 w-4 flex-shrink-0 text-mist-300 transition group-hover:text-navy-800"
            />
          )}
        </div>
        <p className="mt-0.5 text-[10.5px] font-bold uppercase tracking-[0.16em] text-navy-500">
          {meta.label}
          {featured && (
            <span className="ml-2 rounded bg-navy-800 px-1.5 py-0.5 text-white">
              New
            </span>
          )}
        </p>
        {project.note && (
          <p className="mt-1.5 text-[12.5px] leading-5 text-slate">
            {project.note}
          </p>
        )}
        <p className="mt-2 text-[12.5px] text-slate">
          {project.tasks.join(" · ")}
        </p>
      </div>
    </div>
  );

  return project.link ? (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      {body}
    </a>
  ) : (
    body
  );
};

export default Projects;
