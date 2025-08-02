import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BlurryBackground from "./components/BlurryBackground";

import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Services from "./pages/Services";
import WebDesign from "./pages/services/WebDesign";
import Branding from "./pages/services/Branding";

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen font-satoshi bg-black text-white scroll-smooth">
        <BlurryBackground />
        <Navbar />

        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <AboutSection />
            </>
          } />
          
          <Route path="/services" element={<Services />} />
          <Route path="/services/websites" element={<WebDesign />} />
          <Route path="/services/branding" element={<Branding />} />

          {/* 👇 Catch-all route for undefined paths */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
