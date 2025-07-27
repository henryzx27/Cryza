import React from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaRobot, FaBullhorn, FaPaintBrush } from "react-icons/fa";

const services = [
  {
    title: "Web Development & Infrastructure",
    desc: "We create fast, responsive websites and apps with full domain & hosting setup — getting your brand online smoothly and securely.",
    icon: <FaGlobe className="text-blue-500 text-3xl" />,
  },
  {
    title: "AI Commercials & Marketing",
    desc: "Engage your audience with AI-powered video ads and targeted campaigns across Meta, Google, and more that drive real results.",
    icon: <FaRobot className="text-blue-500 text-3xl" />,
  },
  {
    title: "Social Media Management & SEO",
    desc: "Grow your brand with strategic content, platform management, and smart SEO that boosts visibility and engagement.",
    icon: <FaBullhorn className="text-blue-500 text-3xl" />,
  },
  {
    title: "Branding & Identity",
    desc: "Craft a strong brand identity with stunning visuals, memorable logos, and messaging that connects with your audience.",
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
            At Cryza, we blend creativity and technology to craft meaningful digital experiences. From strategy to execution — we help startups grow, scale, and lead.
          </p>
          <div className="mt-8">
            <button className="bg-blue-600 hover:bg-blue-500 transition px-6 py-3 rounded-xl font-medium">
              Learn More
            </button>
          </div>
        </div>

        {/* Right: Services Grid */}
        <div className="grid grid-cols-1 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 180 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4 items-start shadow-lg backdrop-blur-md hover:border-blue-500 hover:bg-white/10"
            >
              <div className="mt-1">{service.icon}</div>
              <div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-sm text-white/70 mt-1">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
