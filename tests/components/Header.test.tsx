import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Header } from "./Header";

describe("Header mobile menu", () => {
  it("is collapsed initially", () => {
    render(<Header />);
    const toggle = screen.getByRole("button", { name: "Open menu" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    // The collapsible panel is only in the DOM when open.
    expect(document.getElementById("mobile-nav")).toBeNull();
  });

  it("opens the menu and exposes the nav links when toggled", async () => {
    const user = userEvent.setup();
    render(<Header />);

    await user.click(screen.getByRole("button", { name: "Open menu" }));

    const toggle = screen.getByRole("button", { name: "Close menu" });
    expect(toggle).toHaveAttribute("aria-expanded", "true");

    const panel = document.getElementById("mobile-nav");
    expect(panel).not.toBeNull();
    expect(within(panel as HTMLElement).getByRole("link", { name: "Experience" })).toBeInTheDocument();
  });

  it("closes the menu after a nav link is clicked", async () => {
    const user = userEvent.setup();
    render(<Header />);

    await user.click(screen.getByRole("button", { name: "Open menu" }));
    const panel = document.getElementById("mobile-nav") as HTMLElement;
    await user.click(within(panel).getByRole("link", { name: "About" }));

    expect(document.getElementById("mobile-nav")).toBeNull();
    expect(screen.getByRole("button", { name: "Open menu" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });
});
