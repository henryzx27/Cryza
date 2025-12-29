import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Command } from "lucide-react";

const NAV_ITEMS = [
  { label: "Services", path: "/services" },
  { label: "Our Work", path: "/work" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 pointer-events-none">
      <div 
        className={`pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          flex items-center justify-between
          backdrop-blur-xl bg-[#08090D]/60 border border-white/5 shadow-2xl shadow-black/50
          ${isScrolled 
            ? "w-[90%] max-w-4xl py-3 px-8 rounded-full" 
            : "w-[95%] max-w-6xl py-4 px-8 rounded-full"
          }
        `}
      >
        
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-transform group-hover:scale-105">
            <Command className="w-4 h-4" />
          </div>
          <span className={`font-heading font-bold text-white tracking-tight transition-opacity duration-300 ${isScrolled ? 'hidden sm:block' : 'block'}`}>
            Cryza<span className="text-blue-500">.</span>
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
                <Link 
                    key={item.label}
                    to={item.path}
                    className="text-sm font-medium text-white/60 hover:text-white transition-colors relative group"
                >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
                </Link>
            ))}
        </div>

        {/* Status / CTA */}
        <div className="flex items-center gap-3">
            <Link 
              to="/contact"
              className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 text-xs font-bold text-white transition-all uppercase tracking-wider"
            >
                Let's Talk
            </Link>
            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse" title="Available for projects" />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;