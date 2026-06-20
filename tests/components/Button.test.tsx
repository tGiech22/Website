import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "@/components/Button";
import { ExternalLink } from "@/components/ExternalLink";

describe("ExternalLink", () => {
  it("always sets the safe new-tab attributes", () => {
    render(<ExternalLink href="https://example.com">Site</ExternalLink>);
    const link = screen.getByRole("link", { name: "Site" });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
    expect(link).toHaveAttribute("href", "https://example.com");
  });

  it("passes through a className", () => {
    render(
      <ExternalLink href="https://example.com" className="custom">
        Site
      </ExternalLink>,
    );
    expect(screen.getByRole("link", { name: "Site" })).toHaveClass("custom");
  });
});

describe("Button", () => {
  it("renders an internal anchor with no target by default", () => {
    render(<Button href="#work">View work</Button>);
    const link = screen.getByRole("link", { name: "View work" });
    expect(link).toHaveAttribute("href", "#work");
    expect(link).not.toHaveAttribute("target");
  });

  it("opens in a new tab when external", () => {
    render(
      <Button href="/resume.pdf" external>
        Resume
      </Button>,
    );
    const link = screen.getByRole("link", { name: "Resume" });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("applies the primary variant by default and outline when requested", () => {
    const { rerender } = render(<Button href="#a">A</Button>);
    expect(screen.getByRole("link", { name: "A" }).className).toContain("bg-[var(--accent)]");

    rerender(
      <Button href="#a" variant="outline">
        A
      </Button>,
    );
    expect(screen.getByRole("link", { name: "A" }).className).toContain("border");
  });

  it("applies the requested size padding", () => {
    render(
      <Button href="#a" size="sm">
        Small
      </Button>,
    );
    expect(screen.getByRole("link", { name: "Small" }).className).toContain("px-3");
  });
});
