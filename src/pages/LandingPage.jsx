import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import TemplateShowcase from '../components/TemplateShowcase';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

function LandingPage() {
  return (
    <>
      <Navbar />
      <aside className="portfolio-preview-note">Portfolio preview · Development paused. The editor and backend are documented in the <a href="https://github.com/Malhar-Jani/magicpopup-landing#product-tour">project README</a>.</aside>
      <Hero />
      <Features />
      <HowItWorks />
      <TemplateShowcase />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}

export default LandingPage;
