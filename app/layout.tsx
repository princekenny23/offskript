import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";
import "./pages.css";

export const metadata: Metadata = {
  title: "OFFSKRIPT — Independent by nature",
  description: "A meeting place for independent makers, original ideas and objects with a point of view. Made in Malawi, open to the world.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}