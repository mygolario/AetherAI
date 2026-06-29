import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import BentoFeatures from './components/BentoFeatures';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FooterCTA from './components/FooterCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <BentoFeatures />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FooterCTA />
      </main>
      <Footer />
    </>
  );
}
