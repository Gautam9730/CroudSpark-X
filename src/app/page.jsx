// src/app/page.jsx
import Hero from "@/components/home/Hero";
import FeaturedCampaigns from "@/components/home/FeaturedCampaigns";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCampaigns />
      <CTA />
    </>
  );
}
