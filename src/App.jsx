import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BlurryBackground from "./components/BlurryBackground";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer"

import SmoothScrollWrapper from './components/SmoothScrollWrapper';

export default function App() {
  return (
    <div class="scroll-smooth" className="relative min-h-screen font-satoshi bg-black text-white">
      
        <BlurryBackground />
        <Navbar />
        <Hero />
        <AboutSection />
        <Footer />
    </div>
  );
}
