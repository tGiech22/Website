import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PhotoGrid } from "@/components/PhotoGrid";
import { photography } from "@/data/photos";
import { site } from "@/data/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Photography · ${site.name}`,
  description: photography.intro,
};

export default function PhotographyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="px-6 pb-16 pt-20">
          <div className="mx-auto max-w-5xl">
            <Link
              href="/"
              className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              ← Back to home
            </Link>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
              {photography.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
              {photography.intro}
            </p>
          </div>
        </section>

        <section className="border-t border-[var(--border)] px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <PhotoGrid />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
