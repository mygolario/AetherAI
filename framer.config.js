/**
 * AetherAI Landing Page Template - Framer Integration Config
 * Configures breakpoints, responsive structures, styles, and component registration.
 */
module.exports = {
  name: "AetherAI Premium Template",
  version: "1.0.0",
  description: "Premium dark glassmorphic AI SaaS landing page template built for Framer Marketplace.",
  engine: "react",
  
  // Responsive design breakpoints
  breakpoints: {
    mobile: 390,
    tablet: 810,
    desktop: 1200,
  },
  
  // Style dependencies
  styles: [
    "./styles/globals.css"
  ],
  
  // Registered Framer components for layout assembly
  components: [
    { name: "Navbar", path: "./components/Navbar.tsx", type: "section" },
    { name: "Hero", path: "./components/Hero.tsx", type: "section" },
    { name: "Marquee", path: "./components/Marquee.tsx", type: "section" },
    { name: "BentoFeatures", path: "./components/BentoFeatures.tsx", type: "section" },
    { name: "HowItWorks", path: "./components/HowItWorks.tsx", type: "section" },
    { name: "PerformanceStats", path: "./components/PerformanceStats.tsx", type: "section" },
    { name: "Pricing", path: "./components/Pricing.tsx", type: "section" },
    { name: "Testimonials", path: "./components/Testimonials.tsx", type: "section" },
    { name: "FAQ", path: "./components/FAQ.tsx", type: "section" },
    { name: "FooterCTA", path: "./components/FooterCTA.tsx", type: "section" },
    { name: "Footer", path: "./components/Footer.tsx", type: "section" }
  ]
};
