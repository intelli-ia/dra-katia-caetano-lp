import HeroSection from "@/components/Hero";
import TestimonialsSection from "@/components/Testimonials";
import ForWhomSection from "@/components/Services";
import JourneySection from "@/components/Journey";
import AboutSection from "@/components/About";
import VideoTestimonialsSection from "@/components/VideoTestimonials";
import PresentationSection from "@/components/Presentation";
import FAQSection from "@/components/FAQ";
import { FinalCTASection } from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TestimonialsSection />
      <ForWhomSection />
      <JourneySection />
      <AboutSection />
      <VideoTestimonialsSection />
      <PresentationSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
