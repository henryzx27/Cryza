import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// --- AnimatedText ---
const AnimatedText = ({ texts, className }) => {
  const [index, setIndex] = React.useState(0);
  const [show, setShow] = React.useState(true);
  const timeoutRef = useRef();

  useEffect(() => {
    timeoutRef.current = setTimeout(() => setShow(false), 2200);
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  useEffect(() => {
    if (!show) {
      timeoutRef.current = setTimeout(() => {
        setIndex((i) => (i + 1) % texts.length);
        setShow(true);
      }, 400);
      return () => clearTimeout(timeoutRef.current);
    }
  }, [show, texts.length]);

  return (
    <span
      className={`${className} inline-block transition-all duration-500 ease-in-out ${
        show
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      {texts[index]}
    </span>
  );
};

// --- Animated Blobs ---
const blobs = [
  "bg-gradient-to-br from-blue-500 via-blue-400 to-cyan-400",
  "bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-500",
  "bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-400",
];
const blobPositions = [
  "absolute left-[-40px] top-[-40px] w-32 h-32 md:w-48 md:h-48 blur-2xl opacity-60 animate-blob1",
  "absolute right-[-30px] top-1/2 w-24 h-24 md:w-40 md:h-40 blur-xl opacity-50 animate-blob2",
  "absolute left-1/2 bottom-[-40px] -translate-x-1/2 w-36 h-36 md:w-56 md:h-56 blur-2xl opacity-40 animate-blob3",
];
const AnimatedBlobs = () => (
  <>
    {blobs.map((bg, i) => (
      <div
        key={i}
        className={`${blobPositions[i]} ${bg} rounded-full pointer-events-none mix-blend-lighten`}
        style={{ zIndex: 1 }}
      />
    ))}
    <style>
      {`
        @keyframes blob1 {
          0%,100% { transform: scale(1) translateY(0);}
          50% { transform: scale(1.12) translateY(16px);}
        }
        @keyframes blob2 {
          0%,100% { transform: scale(1) translateY(0);}
          50% { transform: scale(1.08) translateY(-16px);}
        }
        @keyframes blob3 {
          0%,100% { transform: scale(1) translateY(0);}
          50% { transform: scale(1.1) translateY(18px);}
        }
        .animate-blob1 { animation: blob1 16s ease-in-out infinite; }
        .animate-blob2 { animation: blob2 18s ease-in-out infinite; }
        .animate-blob3 { animation: blob3 20s ease-in-out infinite; }
      `}
    </style>
  </>
);

// --- Hero Section ---
const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0ea5e9] overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16">
      {/* Blobs */}
      <AnimatedBlobs />

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl text-center py-20">
        {/* Tagline */}
        <span className="inline-block mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-[10px] font-bold px-4 py-1 rounded-full shadow-md uppercase animate-pulse tracking-wider">
          Welcome to the Future of Digital
        </span>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
          <AnimatedText
            texts={[
              "Transforming Ideas Into",
              "Building Brands With",
              "Crafting Digital Excellence With",
            ]}
            className="block"
          />
          <AnimatedText
            texts={[
              "Impactful Design",
              "Creative Excellence",
              "Timeless Branding",
            ]}
            className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent"
          />
        </h2>

        {/* Subheading */}
        <p className="text-white/80 text-base sm:text-lg font-medium max-w-xl mx-auto mb-10">
          <AnimatedText
            texts={[
              "We create immersive, high-converting digital experiences for startups and brands ready to stand out.",
              "From strategy to launch, our team blends creativity and technology for results that matter.",
              "Let’s build your next big thing — websites, apps, and brands that inspire.",
            ]}
            className="block"
          />
        </p>

        {/* CTA */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-2 rounded-xl font-bold shadow-lg hover:scale-105 transition-all duration-200"
            onClick={() => navigate("/services")}
          >
            Our Services
          </button>
          <button
            className="bg-white/90 text-blue-700 px-6 py-2 rounded-xl font-bold shadow-lg hover:bg-white hover:scale-105 transition-all duration-200"
            onClick={() => navigate("/services")}
          >
            Start Your Project
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-white/90">
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg shadow">
            <svg width="16" height="16" fill="none" className="text-blue-400">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="2" />
              <path
                d="M5 8l1.5 1.5L11 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Trusted by brands
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg shadow">
            <svg width="16" height="16" fill="none" className="text-yellow-400">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="2" />
              <path
                d="M8 4v3l2 1"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Years of Experience
          </div>
        </div>
      </div>

      {/* Gradient Animation */}
      <style>
        {`
          @keyframes gradient-x {
            0%,100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 6s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
