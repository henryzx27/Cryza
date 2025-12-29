import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import TrustSection from "./components/TrustSection";
import AboutSection from "./components/AboutSection";
import ProcessSection from "./components/ProcessSection";
import WorkSection from "./components/WorkSection";
import DiffSection from "./components/DiffSection";
import CtaSection from "./components/CtaSection";
import Services from "./pages/Services";
import WebDesign from "./pages/services/WebDesign";
import Branding from "./pages/services/Branding";

import AdminLogin from "./pages-backend/Login";
import Dashboard from "./pages-backend/Dashboard";
import ProtectedAdmin from "./components/ProtectedAdmin";

export default function App() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen bg-black text-white">
      <Toaster position="top-right" />

      {!isAdmin && <Navbar />}

      <Routes>
        <Route path="/" element={<><Hero /><TrustSection /><AboutSection /><ProcessSection /><WorkSection /><DiffSection /><CtaSection /></>} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/websites" element={<WebDesign />} />
        <Route path="/services/branding" element={<Branding />} />

        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedAdmin>
              <Dashboard />
            </ProtectedAdmin>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {!isAdmin && <Footer />}
    </div>
  );
}
