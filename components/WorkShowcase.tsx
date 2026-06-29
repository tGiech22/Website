"use client";

import { useEffect, useRef, useState } from "react";

import { ExperienceCard } from "@/components/ExperienceCard";
import { ProjectCard } from "@/components/ProjectCard";
import {
  buildingProjects,
  experience,
  generateProjects,
} from "@/data/site";

type TabId = "experience" | "generate" | "personal";

const tabs: { id: TabId; label: string; blurb: string }[] = [
  {
    id: "experience",
    label: "Co-op & Internships",
    blurb:
      "Co-op roles in regulated healthcare — shipping software, validating data systems, and working with cross-functional teams.",
  },
  {
    id: "generate",
    label: "Generate NU",
    blurb:
      "Full-stack products built at Generate NU, Northeastern's student product studio — including two projects that became live startups.",
  },
  {
    id: "personal",
    label: "Personal Projects",
    blurb:
      "Self-directed work in AI and data engineering — document ingestion, structured extraction, and analysis pipelines.",
  },
];

export function WorkShowcase() {
  const [active, setActive] = useState<TabId>("experience");
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = () => {
    const track = trackRef.current;
    if (!track) return;
    const { scrollLeft, scrollWidth, clientWidth } = track;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 4);
  };

  // Reset to the start and recompute arrow state whenever the active tab changes.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: 0 });
    updateScrollState();
  }, [active]);

  useEffect(() => {
    updateScrollState();
    window.addEventListener("resize", updateScrollState);
    return () => window.removeEventListener("resize", updateScrollState);
  }, []);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const firstCard = track.firstElementChild as HTMLElement | null;
    const amount = firstCard ? firstCard.offsetWidth + 24 : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  const activeTab = tabs.find((tab) => tab.id === active)!;

  return (
    <section id="work" className="border-t border-[var(--border)] px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold tracking-tight">Work & projects</h2>

        {/* Tab nav */}
        <div
          role="tablist"
          aria-label="Work categories"
          className="mt-6 flex flex-wrap gap-2 border-b border-[var(--border)]"
        >
          {tabs.map((tab) => {
            const selected = tab.id === active;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={selected}
                aria-controls={`panel-${tab.id}`}
                onClick={() => setActive(tab.id)}
                className={`-mb-px rounded-t-md border-b-2 px-4 py-2.5 text-sm font-medium transition-colors ${
                  selected
                    ? "border-[var(--accent)] text-[var(--foreground)]"
                    : "border-transparent text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <p className="mt-5 max-w-2xl text-[var(--muted)]">{activeTab.blurb}</p>

        {/* Carousel */}
        <div className="relative mt-8">
          <div
            ref={trackRef}
            id={`panel-${active}`}
            role="tabpanel"
            aria-labelledby={`tab-${active}`}
            onScroll={updateScrollState}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {active === "experience" &&
              experience.map((item) => (
                <div
                  key={item.slug}
                  className="w-[88%] shrink-0 snap-start sm:w-[28rem]"
                >
                  <ExperienceCard item={item} />
                </div>
              ))}

            {active === "generate" &&
              generateProjects.map((project) => (
                <div
                  key={project.slug}
                  className="w-[88%] shrink-0 snap-start sm:w-[28rem]"
                >
                  <ProjectCard project={project} />
                </div>
              ))}

            {active === "personal" &&
              buildingProjects.map((project) => (
                <div
                  key={project.slug}
                  className="w-[88%] shrink-0 snap-start sm:w-[28rem]"
                >
                  <ProjectCard project={project} />
                </div>
              ))}
          </div>

          {/* Arrows */}
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={!canScrollLeft}
            aria-label="Previous"
            className="absolute -left-3 top-[45%] hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] shadow-sm transition-opacity hover:border-[var(--foreground)] disabled:pointer-events-none disabled:opacity-0 sm:flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={!canScrollRight}
            aria-label="Next"
            className="absolute -right-3 top-[45%] hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] shadow-sm transition-opacity hover:border-[var(--foreground)] disabled:pointer-events-none disabled:opacity-0 sm:flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}