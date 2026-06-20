import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { Project } from "@/data/site";
import { ProjectCard } from "./ProjectCard";

const base: Project = {
  slug: "demo",
  title: "Demo Project",
  summary: "A demo project summary.",
  tags: ["TypeScript"],
};

describe("ProjectCard", () => {
  it("renders title, summary, and tags", () => {
    render(<ProjectCard project={base} />);
    expect(screen.getByRole("heading", { name: "Demo Project" })).toBeInTheDocument();
    expect(screen.getByText("A demo project summary.")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });

  it("shows the org only when present", () => {
    const { rerender } = render(<ProjectCard project={base} />);
    expect(screen.queryByText("Generate NU")).not.toBeInTheDocument();

    rerender(<ProjectCard project={{ ...base, org: "Generate NU" }} />);
    expect(screen.getByText("Generate NU")).toBeInTheDocument();
  });

  it("renders highlights only when the list is non-empty", () => {
    const { rerender } = render(<ProjectCard project={{ ...base, highlights: [] }} />);
    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();

    rerender(<ProjectCard project={{ ...base, highlights: ["First point"] }} />);
    expect(screen.getByText("First point")).toBeInTheDocument();
  });

  it("shows GitHub and Live site links only when their URLs exist", () => {
    const { rerender } = render(<ProjectCard project={base} />);
    expect(screen.queryByRole("link", { name: /GitHub/ })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /Live site/ })).not.toBeInTheDocument();

    rerender(
      <ProjectCard
        project={{ ...base, github: "https://github.com/x/y", demo: "https://y.com" }}
      />,
    );
    expect(screen.getByRole("link", { name: /GitHub/ })).toHaveAttribute(
      "href",
      "https://github.com/x/y",
    );
    expect(screen.getByRole("link", { name: /Live site/ })).toHaveAttribute("href", "https://y.com");
  });
});
