import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import WhyChooseSection from "@/components/about/WhyChooseSection";
import TeachingApproach from "@/components/about/TeachingApproach";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
    return (
        <main className="bg-white">
            <AboutHero />
            <AboutIntro />
            <WhyChooseSection />
            <TeachingApproach />
            <AboutCTA />
        </main>
    );
}