import type { Metadata } from "next";
import PortfolioPage from "../components/PortfolioPage";

export const metadata: Metadata = {
  title: "Projects | Seleman Shinwarie",
};

export default function ProjectsPage() {
  return (
    <PortfolioPage
      eyebrow="03 // Project archive"
      title="Projects"
      description="A curated archive of test automation, developer tooling, and polished application work is being prepared for this screen."
    />
  );
}
