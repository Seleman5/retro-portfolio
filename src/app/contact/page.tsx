import type { Metadata } from "next";
import PortfolioPage from "../components/PortfolioPage";

export const metadata: Metadata = {
  title: "Contact | Seleman Shinwarie",
};

export default function ContactPage() {
  return (
    <PortfolioPage
      eyebrow="05 // Open channel"
      title="Contact"
      description="Contact details and a simple way to start a conversation about software engineering, quality engineering, and product-minded development will appear here."
    />
  );
}
