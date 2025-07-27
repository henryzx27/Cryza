import React from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaRobot, FaBullhorn, FaPaintBrush } from "react-icons/fa";

const serviceCards = [
  {
    title: "Websites & Hosting",
    desc: "We build scalable websites & apps with full domain + hosting setup.",
    icon: <FaGlobe className="text-blue-500 text-3xl" />,
  },
  {
    title: "AI Commercials & Marketing",
    desc: "Create compelling AI-powered campaigns that engage and convert.",
    icon: <FaRobot className="text-blue-500 text-3xl" />,
  },
  {
    title: "Social Media + SEO",
    desc: "Grow your audience with effective social strategies and smart SEO.",
    icon: <FaBullhorn className="text-blue-500 text-3xl" />,
  },
  {
    title: "Branding",
    desc: "Craft powerful visual identities that stand out and speak volumes.",
    icon: <FaPaintBrush className="text-blue-500 text-3xl" />,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 bg-black text-white z-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Description */}
        <div>
          <span className="bg-white/10 text-sm px-3 py-1 rounded-full text-gray-300">
            • Who We Are
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
            Design that Delivers.<br />
            Strategy that Scales.
          </h2>
          <p className="mt-6 text-gray-300 text-base max-w-md">
            At Cryza, we blend creativity with tech to build impactful digital
            experiences. From idea to execution — we help you grow, scale, and lead.
          </p>
          <div className="mt-8">
            <button className="bg-blue-600 hover:bg-blue-500 transition px-6 py-3 rounded-xl font-medium">
              Learn More
            </button>
          </div>
        </div>

        {/* Right: Services Bento Grid */}
        <div className="grid grid-cols-2 gap-5">
          {serviceCards.map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 180 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-3 shadow-lg backdrop-blur-sm hover:border-blue-500 hover:bg-white/10"
            >
              <div>{card.icon}</div>
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-sm text-white/70">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
