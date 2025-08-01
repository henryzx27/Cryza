import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaBullhorn, FaPaintBrush, FaRobot } from 'react-icons/fa';

const services = [
  {
    id: 'websites',
    title: 'Web Development',
    description: 'Crafting high-performance websites with clean code and stunning design.',
    icon: <FaLaptopCode size={24} />,
  },
  {
    id: 'branding',
    title: 'Branding & Identity',
    description: 'We shape visual identities that speak with consistency, clarity, and confidence.',
    icon: <FaPaintBrush size={24} />,
  },
  {
    id: 'social-seo',
    title: 'Social Media & SEO',
    description: 'Boost visibility with strategy-led social and modern SEO that ranks.',
    icon: <FaBullhorn size={24} />,
  },
  {
    id: 'ai-marketing',
    title: 'AI Marketing',
    description: 'AI-powered campaigns that maximize engagement and conversions.',
    icon: <FaRobot size={24} />,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function Services() {
  return (
    <section className="bg-black text-white min-h-screen pt-28 pb-32 px-6 md:px-12 relative">
      {/* Decorative BG Gradient Circles */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-gradient-to-tr from-blue-500/20 to-pink-500/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-gradient-to-tr from-purple-500/20 to-blue-500/10 rounded-full blur-3xl z-0"></div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
          We Craft & Elevate Brands
        </h1>
        <p className="text-white/60 text-lg md:text-xl">
          At Cryza, we transform bold ideas into immersive digital experiences using design, code,
          and storytelling.
        </p>
      </motion.div>

      <div className="relative z-10 grid md:grid-cols-2 gap-12 mt-24 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            custom={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-lg hover:shadow-2xl transition duration-300 group"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="p-3 bg-white/10 rounded-full text-blue-400 group-hover:scale-110 transition">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
            </div>
            <p className="text-white/70 mb-6 text-base">{service.description}</p>
            <Link
              to={`/services/${service.id}`}
              className="text-blue-400 hover:text-blue-500 font-medium text-sm"
            >
              Learn more →
            </Link>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative z-10 max-w-4xl mx-auto mt-32 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">
          Ready to launch your next big idea?
        </h2>
        <p className="text-white/60 mb-8">
          Let’s turn your vision into something real. Book a free consultation today.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 transition text-white font-medium px-6 py-3 rounded-xl"
        >
          Get Started
        </Link>
      </motion.div>
    </section>
  );
}
