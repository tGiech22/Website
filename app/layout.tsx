import type { Metadata } from "next";
import { site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  title: `${site.name} · Software & Data Engineer`,
  description: site.tagline,
  openGraph: {
    title: `${site.name} · Software & Data Engineer`,
    description: site.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
