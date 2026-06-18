import Image from "next/image";

import { ExperienceCard } from "@/components/ExperienceCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Tag } from "@/components/Tag";
import {
  buildingProjects,
  experience,
  generateProjects,
  site,
  skills,
} from "@/data/site";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <section id="experience" className="border-t border-[var(--border)] px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
            <p className="mt-2 text-[var(--muted)]">
              Co-op roles in regulated healthcare — shipping software, validating data systems, and
              working with cross-functional teams.
            </p>
            <div className="mt-8 space-y-6">
              {experience.map((item) => (
                <ExperienceCard key={item.slug} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="border-t border-[var(--border)] px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight">Selected work</h2>
            <p className="mt-2 text-[var(--muted)]">
              Full-stack products built at Generate NU, Northeastern&apos;s student product studio —
              including two projects that became live startups.
            </p>

            <div className="mt-10">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">
                Generate NU · Sep 2024 – Present
              </h3>
              <div className="mt-4 space-y-6">
                {generateProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">
                Building
              </h3>
              <div className="mt-4 space-y-6">
                {buildingProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="border-t border-[var(--border)] px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight">Tools &amp; technologies</h2>
            <p className="mt-2 text-[var(--muted)]">
              Languages, frameworks, and tools I&apos;ve used to ship software and data systems in
              production.
            </p>
            <div className="mt-8 space-y-6">
              {skills.map((group) => (
                <div key={group.category}>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">
                    {group.category}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Tag key={item} label={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-[var(--border)] px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight">About</h2>
            <div className="mt-6 flex flex-col gap-8 sm:flex-row">
              <Image
                src="/headshot.webp"
                alt="Photo of Tony Giech"
                width={240}
                height={360}
                className="h-auto w-40 shrink-0 self-start rounded-lg object-cover sm:w-56"
                priority
              />
              <div className="space-y-4 text-[var(--muted)]">
                {site.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md border border-[var(--border)] px-4 py-2 text-sm font-medium transition-colors hover:border-[var(--foreground)]"
              >
                Download resume
              </a>
              <a
                href="/photography"
                className="inline-block rounded-md border border-[var(--border)] px-4 py-2 text-sm font-medium transition-colors hover:border-[var(--foreground)]"
              >
                Photography
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
