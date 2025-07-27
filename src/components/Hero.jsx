import React from "react";

// Helper for floating animation
const floatingStyles = [
  "absolute animate-float-slow left-10 top-20",
  "absolute animate-float-fast right-16 top-1/3",
  "absolute animate-float-medium left-1/2 bottom-24",
  "absolute animate-float-slow right-10 bottom-10",
  "absolute animate-float-slow left-20 top-1/2",      // New icon position
  "absolute animate-float-medium right-1/4 bottom-1/2", // New icon position
];

const FloatingIcons = () => (
  <>
    {/* Example SVGs: You can replace with your own tech/digital icons */}
    <svg className={floatingStyles[0]} width="40" height="40" fill="none">
      <circle cx="20" cy="20" r="18" stroke="#3B82F6" strokeWidth="4" />
      <rect x="12" y="12" width="16" height="16" rx="4" fill="#3B82F6" opacity="0.3" />
    </svg>
    <svg className={floatingStyles[1]} width="36" height="36" fill="none">
      <rect x="6" y="6" width="24" height="24" rx="6" stroke="#fff" strokeWidth="3" />
      <path d="M12 18h12" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
    <svg className={floatingStyles[2]} width="32" height="32" fill="none">
      <polygon points="16,4 28,28 4,28" fill="#60A5FA" opacity="0.5" />
    </svg>
    <svg className={floatingStyles[3]} width="38" height="38" fill="none">
      <rect x="9" y="9" width="20" height="20" rx="5" fill="#fff" opacity="0.1" />
      <circle cx="19" cy="19" r="8" stroke="#60A5FA" strokeWidth="3" />
    </svg>
    {/* New Icon 1: Minimal Globe */}
    <svg className={floatingStyles[4]} width="34" height="34" fill="none">
      <circle cx="17" cy="17" r="14" stroke="#60A5FA" strokeWidth="2" />
      <ellipse cx="17" cy="17" rx="14" ry="6" stroke="#3B82F6" strokeWidth="1" />
    </svg>
    {/* New Icon 2: Minimal Wifi */}
    <svg className={floatingStyles[5]} width="34" height="34" fill="none">
      <path d="M7 21c6-6 14-6 20 0" stroke="#3B82F6" strokeWidth="2" />
      <path d="M11 25c4-4 10-4 14 0" stroke="#60A5FA" strokeWidth="2" />
      <circle cx="17" cy="29" r="2" fill="#3B82F6" />
    </svg>
  </>
);

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white font-sans overflow-hidden">
      {/* Floating tech/digital icons */}
      <FloatingIcons />

      {/* Content */}
      <div className="z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-md">New</span>
          <span className="text-sm text-white/80">No. 1 Studio of 2025</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Design That Connects,<br /> Converts, and Delights
        </h1>
        <p className="text-sm md:text-base text-white/70 mb-6">
          We specialize in crafting unique digital presence that help businesses grow and stand out in their industries.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-500 transition">
            Connect With Us
          </button>
          <button className="bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-100 transition">
            Why Cryza?
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;