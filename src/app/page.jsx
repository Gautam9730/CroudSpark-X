import Hero from "@/components/home/Hero";
import FeaturedCampaigns from "@/components/home/FeaturedCampaigns";
import CTA from "@/components/home/CTA";

export default function HomePage() {
    return (
        <>
            <Hero />
            <FeaturedCampaigns />
            <CTA />
        </>
    );
}
export const metadata = {
    title: "Explore Campaigns | CroudSpark-X",
    description: "Browse and support campaigns across education, health, and more.",
};
