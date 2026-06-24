import type { Metadata } from "next";
import PortfolioPage from "../components/PortfolioPage";

export const metadata: Metadata = {
  title: "Skills | Seleman Shinwarie",
};

export default function SkillsPage() {
  return (
    <PortfolioPage
      eyebrow="04 // Toolkit"
      title="Skills"
      description="The tools and practices I use across TypeScript, React, Next.js, Playwright, QA strategy, CI workflows, and accessibility will live here."
    />
  );
}
