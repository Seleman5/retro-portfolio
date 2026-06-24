import type { Metadata } from "next";
import PortfolioPage from "../components/PortfolioPage";

export const metadata: Metadata = {
  title: "About | Seleman Shinwarie",
};

export default function AboutPage() {
  return (
    <PortfolioPage
      eyebrow="01 // System profile"
      title="About"
      description="A short introduction to my quality-minded engineering approach, user-focused development, and the work I care about will live here."
    />
  );
}
