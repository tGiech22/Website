import { describe, expect, it } from "vitest";
import { featuredPhotos, photosByYear, type Photo } from "@/data/photos";

function makePhoto(overrides: Partial<Photo> & Pick<Photo, "id" | "year">): Photo {
  return {
    path: `gallery/${overrides.id}.webp`,
    alt: overrides.id,
    width: 1600,
    height: 1067,
    ...overrides,
  };
}

const fixtures: Photo[] = [
  makePhoto({ id: "a", year: 2023 }),
  makePhoto({ id: "b", year: 2024, featured: true }),
  makePhoto({ id: "c", year: 2024 }),
  makePhoto({ id: "d", year: 2022, featured: true }),
];

describe("photosByYear", () => {
  it("groups photos by year, newest year first", () => {
    const grouped = photosByYear(fixtures);
    expect(grouped.map((g) => g.year)).toEqual([2024, 2023, 2022]);
  });

  it("places each photo in its year bucket", () => {
    const grouped = photosByYear(fixtures);
    const y2024 = grouped.find((g) => g.year === 2024);
    expect(y2024?.photos.map((p) => p.id)).toEqual(["b", "c"]);
  });

  it("returns an empty array when there are no photos", () => {
    expect(photosByYear([])).toEqual([]);
  });
});

describe("featuredPhotos", () => {
  it("returns only photos flagged featured", () => {
    expect(featuredPhotos(fixtures).map((p) => p.id)).toEqual(["b", "d"]);
  });

  it("returns an empty array when none are featured", () => {
    expect(featuredPhotos([makePhoto({ id: "x", year: 2024 })])).toEqual([]);
  });
});
