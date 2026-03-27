import HeroSection from "@/components/home/HeroSection";
import SubjectsSection from "@/components/home/SubjectsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HomeTuitionSection from "@/components/home/HomeTuitionSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ServiceAreasSection from "@/components/home/ServiceAreasSection";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SubjectsSection />
      <WhyChooseUs />
      <HomeTuitionSection />
      <TestimonialsSection />
      <ServiceAreasSection />
      <FinalCTA />
    </>
  );
}