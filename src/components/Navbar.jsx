import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [shrunk, setShrunk] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > 20 && currentY > lastScrollY.current) {
        setShrunk(true);
      } else if (currentY <= 20) {
        setShrunk(false);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        width: shrunk ? "88%" : "96%",
        top: shrunk ? 18 : 12,
        padding: shrunk ? "0.5rem 1.25rem" : "1rem 2rem",
        borderRadius: shrunk ? "2rem" : "3rem",
        backgroundColor: shrunk ? "rgba(15,23,42,0.55)" : "rgba(0,0,0,0)",
        border: shrunk ? "1px solid rgba(255,255,255,0.1)" : "none",
        boxShadow: shrunk ? "0 8px 24px rgba(0,0,0,0.2)" : "none",
        backdropFilter: shrunk ? "blur(16px)" : "none",
      }}
      transition={{ type: "spring", stiffness: 180, damping: 24 }}
      className="fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300"
      style={{
        fontFamily: "'Inter', sans-serif",
        overflow: "hidden",
      }}
    >
      <div className="flex items-center justify-between h-full">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <span className="bg-white/10 p-2 rounded-full shadow-inner shadow-white/10">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" stroke="#fff" strokeWidth="2" />
              <circle cx="16" cy="16" r="7" fill="#3B82F6" />
            </svg>
          </span>
          <span className="text-xl font-bold text-white tracking-wide drop-shadow">
            Cryza
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-white text-base font-medium">
          {["Home", "Work", "Services", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative px-2 py-1 transition hover:text-blue-400 after:block after:h-0.5 after:bg-blue-400 after:w-0 hover:after:w-full after:transition-all"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <motion.button
          whileHover={{
            scale: 1.06,
            boxShadow: "0 0 16px rgba(59, 130, 246, 0.6)",
          }}
          className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg transition"
        >
          Get In Touch
        </motion.button>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col gap-1 items-end"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span className="block w-6 h-0.5 bg-white rounded-full" />
          <span className="block w-6 h-0.5 bg-white rounded-full" />
          <span className="block w-6 h-0.5 bg-white rounded-full" />
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="md:hidden mt-3 bg-black/70 backdrop-blur-xl p-6 rounded-2xl space-y-4 shadow-xl"
        >
          {["Home", "Work", "Services", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className="block text-white text-center text-lg font-medium hover:text-blue-400 transition"
            >
              {item}
            </a>
          ))}
          <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-full font-semibold mt-4 shadow hover:bg-blue-700 transition">
            Get In Touch
          </button>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Navbar;
