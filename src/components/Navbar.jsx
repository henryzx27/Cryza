import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [shrunk, setShrunk] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 20 && currentScrollY > lastScrollY.current) {
        setShrunk(true);
      } else if (currentScrollY <= 20) {
        setShrunk(false);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        width: shrunk ? "80%" : "95%",
        maxWidth: shrunk ? "900px" : "1120px",
        top: shrunk ? 24 : 12,
        backdropFilter: shrunk ? "blur(16px)" : "none",
        backgroundColor: shrunk ? "rgba(20,20,40,0.85)" : "transparent",
        padding: shrunk ? "0.5rem 2rem" : "1.25rem 2rem",
        borderRadius: shrunk ? "2rem" : "1rem",
        boxShadow: shrunk
          ? "0 0 32px 0 rgba(0, 123, 255, 0.30)"
          : "0 2px 16px 0 rgba(0, 123, 255, 0.10)",
      }}
      transition={{ type: "spring", stiffness: 180, damping: 24 }}
      className="fixed left-1/2 -translate-x-1/2 z-50"
      style={{ overflow: "hidden", fontFamily: "'Inter', 'Segoe UI', sans-serif" }}
    >
      <div className="flex items-center justify-between h-full">
        {/* Logo */}
        <a href="/" className="flex-shrink-0 flex items-center gap-3">
          <span className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-full p-2 shadow-lg">
            {/* You can use your logo image here */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" stroke="#fff" strokeWidth="2" />
              <circle cx="16" cy="16" r="7" fill="#3B82F6" />
            </svg>
          </span>
          <span className="text-2xl font-extrabold text-white tracking-wide drop-shadow-lg">Cryza</span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-5 text-white text-base font-medium">
          {["Home", "Work", "Services", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative px-3 py-1 transition hover:text-blue-400 after:content-[''] after:block after:h-0.5 after:bg-blue-500 after:rounded-full after:w-full after:opacity-0 hover:after:opacity-100"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Call to Action */}
        <motion.button
          whileHover={{
            scale: 1.09,
            boxShadow: "0 0 24px 8px #3B82F6, 0 0 48px 0 #60A5FA55",
            textShadow: "0 0 16px #3B82F6",
          }}
          className="hidden md:block bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white px-7 py-2 rounded-2xl font-bold shadow-lg transition-all
            focus:outline-none focus:ring-2 focus:ring-blue-400"
          style={{
            boxShadow: "0 0 24px 4px #3B82F6, 0 0 48px 0 #60A5FA55",
            textShadow: "0 0 12px #3B82F6",
          }}
        >
          Get In Touch
        </motion.button>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white flex flex-col gap-1"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span className="block w-7 h-0.5 bg-blue-400 rounded-full shadow-blue-500/50 shadow" />
          <span className="block w-7 h-0.5 bg-blue-400 rounded-full shadow-blue-500/50 shadow" />
          <span className="block w-7 h-0.5 bg-blue-400 rounded-full shadow-blue-500/50 shadow" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-3 bg-black/60 backdrop-blur-xl p-6 rounded-2xl space-y-4 shadow-2xl"
          style={{ minHeight: "220px" }}
        >
          {["Home", "Work", "Services", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className="block text-white text-center text-lg font-semibold hover:text-blue-400 transition"
            >
              {item}
            </a>
          ))}
          <motion.button
            whileHover={{
              scale: 1.09,
              boxShadow: "0 0 24px 8px #3B82F6, 0 0 48px 0 #60A5FA55",
              textShadow: "0 0 16px #3B82F6",
            }}
            className="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white px-7 py-2 rounded-2xl font-bold shadow-lg transition-all
              focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2"
            style={{
              boxShadow: "0 0 24px 4px #3B82F6, 0 0 48px 0 #60A5FA55",
              textShadow: "0 0 12px #3B82F6",
            }}
          >
            Get In Touch
          </motion.button>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Navbar;