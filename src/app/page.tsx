import HeroSection from "@/components/Hero";
import TestimonialsSection from "@/components/Testimonials";
import AboutSection from "@/components/About";
import ForWhomSection from "@/components/Services";
import JourneySection from "@/components/Journey";
import PresentationSection from "@/components/Presentation";
import FAQSection from "@/components/FAQ";
import { FinalCTASection } from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TestimonialsSection />
      <AboutSection />
      <ForWhomSection />
      <JourneySection />
      <PresentationSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
