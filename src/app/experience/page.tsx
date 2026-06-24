import type { Metadata } from "next";
import PortfolioPage from "../components/PortfolioPage";

export const metadata: Metadata = {
  title: "Experience | Seleman Shinwarie",
};

export default function ExperiencePage() {
  return (
    <PortfolioPage
      eyebrow="02 // Work log"
      title="Experience"
      description="A concise record of my experience in automated testing, debugging, frontend development, and dependable delivery will appear here."
    />
  );
}
