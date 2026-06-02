import type { ReactNode } from "react";
import { ExternalLink } from "./ExternalLink";

type ButtonProps = {
  href: string;
  children: ReactNode;
  /** "primary" = accent fill, "outline" = bordered */
  variant?: "primary" | "outline";
  size?: "sm" | "md";
  /** Opens in a new tab via ExternalLink (resume, live demos, etc.) */
  external?: boolean;
  className?: string;
};

const base = "rounded-md text-sm font-medium transition-colors";

const sizes = {
  sm: "px-3 py-1.5",
  md: "px-4 py-2",
};

const variants = {
  primary: "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]",
  outline: "border border-[var(--border)] hover:border-[var(--foreground)]",
};

/**
 * Link styled as a button. Renders an internal anchor by default, or an
 * ExternalLink (new tab) when `external` is set.
 */
export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
}: ButtonProps) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`.trim();

  if (external) {
    return (
      <ExternalLink href={href} className={classes}>
        {children}
      </ExternalLink>
    );
  }

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
