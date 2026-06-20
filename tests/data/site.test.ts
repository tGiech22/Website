import { describe, expect, it } from "vitest";
import {
  buildingProjects,
  experience,
  generateProjects,
  projects,
  site,
} from "@/data/site";

describe("derived project lists", () => {
  it("generateProjects contains only Generate NU projects", () => {
    expect(generateProjects.length).toBeGreaterThan(0);
    for (const project of generateProjects) {
      expect(project.org).toMatch(/Generate/);
    }
  });

  it("buildingProjects contains only in-progress projects", () => {
    for (const project of buildingProjects) {
      expect(project.status).toBe("building");
    }
  });
});

describe("project data integrity", () => {
  it("every project has the required display fields", () => {
    for (const project of projects) {
      expect(project.slug).toBeTruthy();
      expect(project.title).toBeTruthy();
      expect(project.summary).toBeTruthy();
      expect(project.tags.length).toBeGreaterThan(0);
    }
  });

  it("has no duplicate project slugs", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("has no duplicate experience slugs", () => {
    const slugs = experience.map((e) => e.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("every external project URL uses https", () => {
    for (const project of projects) {
      if (project.github) expect(project.github).toMatch(/^https:\/\//);
      if (project.demo) expect(project.demo).toMatch(/^https:\/\//);
    }
  });
});

describe("contact data integrity", () => {
  it("has a valid-looking email", () => {
    expect(site.contact.email).toMatch(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
  });

  it("links to github and linkedin over https", () => {
    expect(site.contact.github).toMatch(/^https:\/\//);
    expect(site.contact.linkedin).toMatch(/^https:\/\//);
  });
});
