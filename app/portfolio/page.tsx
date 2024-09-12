import React from "react";
import PortfolioNavbar from "../portfoilioNavbar/PortfolioNavbar";
import HeroSection from "../components/HerosSection";
import Projects from "../projects/page";
import Footer1 from "../projects/footer";

export default function Portfolio() {
  return (
    <div className="py-10 bg-secondaryColor">
      <PortfolioNavbar />
      <HeroSection />
      <Projects />
      <Footer1/>
    </div>
  );
}
