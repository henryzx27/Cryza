import React from "react";
import { motion } from "framer-motion";
import {
  FaGlobe,
  FaRobot,
  FaBullhorn,
  FaPaintBrush,
} from "react-icons/fa";

const services = [
  {
    title: "Web Development & Infrastructure",
    description:
      "Launch high-performance websites and apps with complete hosting and deployment pipelines.",
    icon: <FaGlobe className="text-blue-500 text-3xl" />,
  },
  {
    title: "AI Commercials & Marketing",
    description:
      "Hyper-targeted campaigns and AI-generated creatives that convert across all major platforms.",
    icon: <FaRobot className="text-blue-500 text-3xl" />,
  },
  {
    title: "Social Media & SEO",
    description:
      "Organic growth through data-backed SEO and consistent, on-brand social storytelling.",
    icon: <FaBullhorn className="text-blue-500 text-3xl" />,
  },
  {
    title: "Branding & Identity",
    description:
      "Create unforgettable brand visuals with cohesive design systems, logos, and messaging.",
    icon: <FaPaintBrush className="text-blue-500 text-3xl" />,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function AboutSection() {
  return (
    <section id="about" className="bg-black text-white py-28 px-6 overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-white/10 text-sm px-4 py-1 rounded-full text-gray-300 tracking-wide mb-4">
            • Who We Are
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Design that Delivers.<br />Strategy that Scales.
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto">
            Cryza blends cutting-edge tech with creative vision to launch brands, grow products, and captivate audiences across every screen.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-blue-500 transition duration-300 shadow-md hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-xl">{service.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-white font-medium transition"
          >
            Let’s Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
}
