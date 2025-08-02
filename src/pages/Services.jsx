import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  {
    id: 'websites',
    title: 'Web Development',
    description:
      'We craft blazing-fast, fully responsive websites that elevate user experience. With optimized performance, robust backend integration, and custom UI/UX, our websites are built to scale with your brand and business goals.',
    imageUrl: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg',
  },
  {
    id: 'branding',
    title: 'Branding & Identity',
    description:
      'Your brand is your story. We help shape a strong and cohesive identity with strategic design, meaningful storytelling, logo creation, typography systems, and brand guidelines that resonate across all platforms.',
    imageUrl: 'https://images.pexels.com/photos/601170/pexels-photo-601170.jpeg',
  },
  {
    id: 'social-seo',
    title: 'Social Media & SEO',
    description:
      'From content strategy to SEO optimization, we create systems that boost discoverability and engagement. Our campaigns are crafted to drive organic traffic and conversions while maintaining your brand voice.',
    imageUrl: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg',
  },
  {
    id: 'ai-marketing',
    title: 'AI‑Powered Marketing',
    description:
      'Leverage the power of AI to automate, analyze, and personalize. We build smart marketing flows using predictive analytics, retargeting, customer behavior insights, and hyper-targeted campaign tools.',
    imageUrl: 'https://images.pexels.com/photos/17486101/pexels-photo-17486101.png',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function Services() {
  return (
    <section className="relative bg-black text-white py-28 overflow-hidden">
      {/* Gradient glow effects */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-400/30 to-purple-500/10 blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-pink-400/20 to-indigo-500/10 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-24"
        >
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Premium Digital Services
          </h2>
          <p className="text-white/60 mt-4 text-lg max-w-xl mx-auto">
            Everything you need to build, grow, and scale your digital presence — with unmatched quality and attention to detail.
          </p>
        </motion.div>

        {/* Services */}
        <div className="grid gap-24">
          {services.map((svc, idx) => (
            <motion.div
              key={svc.id}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                idx % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-1/2 overflow-hidden rounded-3xl shadow-2xl border border-white/10">
                <img
                  src={svc.imageUrl}
                  alt={svc.title}
                  className="w-full h-[340px] md:h-[420px] object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-5">
                <h3 className="text-3xl md:text-4xl font-semibold">{svc.title}</h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  {svc.description}
                </p>
                <Link
                  to={`/services/${svc.id}`}
                  className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-medium hover:scale-105 transition"
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mt-36"
        >
          <h3 className="text-4xl md:text-5xl font-bold mb-4">
            Let’s Build Your Future, Together
          </h3>
          <p className="text-white/60 max-w-2xl mx-auto mb-8 text-lg">
            Whether you're starting from scratch or scaling up, we’re here to craft the digital experiences your brand deserves.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300"
          >
            Book Your Free Strategy Call
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
