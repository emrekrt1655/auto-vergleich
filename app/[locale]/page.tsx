import CallToActionSection from "@/app/components/landingpage/CalltoAction";
import ExampleOutputSection from "@/app/components/landingpage/ExampleOutputSection";
import FeaturesSection from "@/app/components/landingpage/FeaturesSection";
import Hero from "@/app/components/landingpage/HeroSection";
import HowItWorksSection from "@/app/components/landingpage/HowToWorkSection";
import ProblemSection from "@/app/components/landingpage/ProblemSection";
import TestimonialsSection from "@/app/components/landingpage/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <div className="border-t border-gray-200"></div> */}
      <ProblemSection />
      {/* <div className="border-t border-gray-200"></div> */}
      <HowItWorksSection />
      {/* <div className="border-t border-gray-200"></div> */}
      <FeaturesSection />
      {/* <div className="border-t border-gray-200"></div> */}
      <ExampleOutputSection />
      {/* <div className="border-t border-gray-200"></div> */}
      <TestimonialsSection />
      {/* <div className="border-t border-gray-200"></div> */}
      <CallToActionSection />
      {/* <div className="border-t border-gray-200"></div> */}
    </>
  );
}
