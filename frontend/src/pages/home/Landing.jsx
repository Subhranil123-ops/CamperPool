import Hero from "../../components/home/Hero";
import Stats from "../../components/home/Stats";
import Features from "../../components/home/Features";
import HowItWorks from "../../components/home/HowItWorks";
import Testimonials from "../../components/home/Testimonials";
import FAQ from "../../components/home/FAQ";
import CTA from "../../components/home/CTA";

function Landing() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}

export default Landing;