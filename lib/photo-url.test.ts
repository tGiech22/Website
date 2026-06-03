import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { getPhotoCdnHostname, getPhotoUrl } from "./photo-url";

const ENV_KEY = "NEXT_PUBLIC_PHOTO_CDN_URL";

describe("getPhotoUrl", () => {
  const original = process.env[ENV_KEY];

  beforeEach(() => {
    delete process.env[ENV_KEY];
  });

  afterEach(() => {
    if (original === undefined) delete process.env[ENV_KEY];
    else process.env[ENV_KEY] = original;
  });

  it("serves from public/photos when no CDN is configured", () => {
    expect(getPhotoUrl("gallery/2024/harbor.webp")).toBe("/photos/gallery/2024/harbor.webp");
  });

  it("serves from the CDN when configured", () => {
    process.env[ENV_KEY] = "https://cdn.example.com";
    expect(getPhotoUrl("gallery/harbor.webp")).toBe("https://cdn.example.com/gallery/harbor.webp");
  });

  it("trims a trailing slash on the CDN base so the URL has no double slash", () => {
    process.env[ENV_KEY] = "https://cdn.example.com/";
    expect(getPhotoUrl("harbor.webp")).toBe("https://cdn.example.com/harbor.webp");
  });

  it("normalizes a leading slash on the path", () => {
    expect(getPhotoUrl("/gallery/harbor.webp")).toBe("/photos/gallery/harbor.webp");

    process.env[ENV_KEY] = "https://cdn.example.com";
    expect(getPhotoUrl("/gallery/harbor.webp")).toBe("https://cdn.example.com/gallery/harbor.webp");
  });
});

describe("getPhotoCdnHostname", () => {
  const original = process.env[ENV_KEY];

  afterEach(() => {
    if (original === undefined) delete process.env[ENV_KEY];
    else process.env[ENV_KEY] = original;
  });

  it("returns null when no CDN is configured", () => {
    delete process.env[ENV_KEY];
    expect(getPhotoCdnHostname()).toBeNull();
  });

  it("returns the hostname for a valid CDN URL", () => {
    process.env[ENV_KEY] = "https://cdn.example.com/some/path";
    expect(getPhotoCdnHostname()).toBe("cdn.example.com");
  });

  it("returns null for a malformed CDN URL", () => {
    process.env[ENV_KEY] = "not a url";
    expect(getPhotoCdnHostname()).toBeNull();
  });
});
