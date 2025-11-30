import CallToActionSection from "../components/landingpage/CalltoAction";
import ExampleOutputSection from "../components/landingpage/ExampleOutputSection";
import FeaturesSection from "../components/landingpage/FeaturesSection";
import Hero from "../components/landingpage/HeroSection";
import HowItWorksSection from "../components/landingpage/HowToWorkSection";
import ProblemSection from "../components/landingpage/ProblemSection";
import TestimonialsSection from "../components/landingpage/TestimonialsSection";

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
