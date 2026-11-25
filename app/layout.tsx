import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { profile } from "@/content/profile";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://taixingbi.github.io"),
  title: { default: profile.name, template: `%s | ${profile.name}` },
  description:
    "Taixing Bi — part-time Ph.D. student in Computer Science at NJIT and senior AI platform engineer working on LLM systems, admission control for multi-tenant LLM gateways, enterprise RAG failure analysis, and evaluation.",
  keywords: [
    "LLM systems",
    "admission control",
    "LLM gateway",
    "guardrails",
    "RAG",
    "retrieval robustness",
    "evaluation",
    "IEEE BigData",
  ],
  openGraph: { type: "profile", title: profile.name, description: profile.headline },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="wrap">{children}</main>
        <footer className="wrap footer">
          © {new Date().getFullYear()} {profile.name} · Last updated{" "}
          {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </footer>
      </body>
    </html>
  );
}
