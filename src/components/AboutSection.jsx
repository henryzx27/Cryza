import React from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaRobot, FaBullhorn, FaPaintBrush } from "react-icons/fa";

const services = [
  {
    title: "Web Development & Infrastructure",
    description: "Launch high-performance websites and apps with complete hosting and deployment pipelines.",
    icon: <FaGlobe className="text-cyan-400 text-3xl" />,
  },
  {
    title: "AI Commercials & Marketing",
    description: "Hyper-targeted campaigns and AI-generated creatives that convert across all major platforms.",
    icon: <FaRobot className="text-cyan-400 text-3xl" />,
  },
  {
    title: "Social Media & SEO",
    description: "Organic growth through data-backed SEO and consistent, on-brand social storytelling.",
    icon: <FaBullhorn className="text-cyan-400 text-3xl" />,
  },
  {
    title: "Branding & Identity",
    description: "Create unforgettable brand visuals with cohesive design systems, logos, and messaging.",
    icon: <FaPaintBrush className="text-cyan-400 text-3xl" />,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-[#050510] text-white py-28 px-6">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-500/10"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-white/10 text-sm px-4 py-1 rounded-full text-gray-300 tracking-wide mb-4">
            • Who We Are
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Design that Delivers.<br />Strategy that Scales.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Cryza blends cutting-edge tech with creative vision to launch brands, grow products, and captivate audiences across every screen.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(0,255,255,0.2)] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-xl">{service.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-white/70">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 rounded-xl text-white font-medium shadow-lg hover:scale-105 transition"
          >
            Let’s Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
}
