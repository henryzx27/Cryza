import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["Home", "Work", "Services", "About", "Contact"];

const Navbar = () => {
  const [shrunk, setShrunk] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > 10 && currentY > lastY) {
        setShrunk(true);
      } else if (currentY <= 10) {
        setShrunk(false);
      }
      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: shrunk ? "rgba(15,23,42,0.6)" : "rgba(0,0,0,0)",
        borderRadius: shrunk ? "1.5rem" : "2.5rem",
        padding: shrunk ? "0.5rem 1.5rem" : "1rem 2rem",
        width: shrunk ? "88%" : "95%",
        top: shrunk ? 12 : 8,
        boxShadow: shrunk
          ? "0 8px 30px rgba(0,0,0,0.25)"
          : "0 0 0 rgba(0,0,0,0)",
        border: shrunk
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid transparent",
        backdropFilter: shrunk ? "blur(12px)" : "blur(0px)",
      }}
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: shrunk ? 0.3 : 0.15, // quicker restore when scrolling up
      }}
      className="fixed z-50 left-1/2 -translate-x-1/2 transition-all duration-300"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <span className="bg-white/10 p-2 rounded-full shadow-inner">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" stroke="#fff" strokeWidth="2" />
              <circle cx="16" cy="16" r="7" fill="#3B82F6" />
            </svg>
          </span>
          <span className="text-white font-bold text-xl">Cryza</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-white text-sm font-medium">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group px-2 py-1"
            >
              <span className="group-hover:text-blue-400 transition">
                {item}
              </span>
              <span className="block h-0.5 bg-blue-400 w-0 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="#contact"
          className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition"
        >
          Get In Touch
        </motion.a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <span className="w-6 h-0.5 bg-white rounded-full" />
          <span className="w-6 h-0.5 bg-white rounded-full" />
          <span className="w-6 h-0.5 bg-white rounded-full" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mt-4 bg-black/80 backdrop-blur-xl p-6 rounded-2xl shadow-lg space-y-4"
          >
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="block text-white text-center text-base hover:text-blue-400 transition"
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="block bg-blue-600 text-white text-center py-2 rounded-full font-semibold mt-4 hover:bg-blue-700 transition"
            >
              Get In Touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
