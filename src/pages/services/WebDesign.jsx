// src/pages/services/Websites.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaLock, FaChartLine } from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

const features = [
  {
    icon: <FaCode className="text-4xl text-blue-400" />,
    title: 'Frontend & Backend Integration',
    text: 'We craft stunning UIs with solid backend logic using React, Vite, Node.js, and more — ensuring seamless full-stack delivery.',
  },
  {
    icon: <FaRocket className="text-4xl text-purple-400" />,
    title: 'Performance & SEO',
    text: 'Optimized with technical SEO, lazy loading, clean code, and blazing fast builds to skyrocket your Google rankings.',
  },
  {
    icon: <FaLock className="text-4xl text-pink-400" />,
    title: 'Secure Hosting & SSL',
    text: 'Free SSL, secure infrastructure, CDN setup, and automated deployments to keep your platform safe and reliable.',
  },
  {
    icon: <FaChartLine className="text-4xl text-green-400" />,
    title: 'Analytics & Integrations',
    text: 'Integrated tracking with Google Analytics, Meta Pixel, CRMs, contact forms, chatbots, and more.',
  },
];

export default function WebDesign() {
  return (
    <section className="relative bg-black text-white py-32 px-6 overflow-hidden min-h-screen">
      {/* Glowing lights */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 blur-3xl opacity-30 w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-blue-500 to-purple-600 z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] blur-2xl opacity-20 w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-pink-500 to-indigo-500 z-0" />

      <motion.div
        className="max-w-6xl mx-auto relative z-10 space-y-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div variants={fadeUp}>
          <h1 className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-br from-white via-blue-400 to-purple-500 bg-clip-text text-transparent leading-tight">
            Web Development & Infrastructure
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto mt-4 text-center text-lg">
            We don’t just build websites — we craft exceptional digital platforms that scale, perform, and convert.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-blue-500 transition-all shadow-md hover:shadow-blue-500/30 group"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition">
                {feature.title}
              </h3>
              <p className="text-white/70">{feature.text}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div variants={fadeUp} className="text-center mt-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Let’s Build Your Web Identity</h2>
          <p className="text-white/60 max-w-xl mx-auto mb-6">
            From concept to deployment — we manage the entire web lifecycle so you can focus on growth.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 text-sm font-semibold rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 hover:scale-105 transition duration-300"
          >
            Get in Touch →
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
