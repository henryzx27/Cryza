import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaShoppingCart, FaStripe, FaPaypal,
  FaRocket, FaLock, FaDatabase, FaCode, FaChartLine, FaArrowRight
} from 'react-icons/fa';
import {
  SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiNextdotjs
} from 'react-icons/si';

const WebDesign = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const [isLoaded, setIsLoaded] = useState(false);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stacks = [
    { icon: <FaReact />, name: 'React' },
    { icon: <SiNextdotjs />, name: 'Next.js' },
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <SiExpress />, name: 'Express' },
    { icon: <FaNodeJs />, name: 'Node.js' }
  ];

  const services = [
    {
      title: 'Full-Stack Development',
      description: 'End-to-end web solutions with modern technologies',
      icon: <FaCode className="text-4xl text-indigo-500" />,
      features: ['Custom APIs', 'Database Design', 'Cloud Integration']
    },
    {
      title: 'E-commerce Solutions',
      description: 'Scalable online stores with seamless checkout',
      icon: <FaShoppingCart className="text-4xl text-pink-500" />,
      features: ['Payment Integration', 'Inventory Management', 'Order Processing']
    },
    {
      title: 'Web Applications',
      description: 'Powerful and responsive web applications',
      icon: <FaRocket className="text-4xl text-purple-500" />,
      features: ['Real-time Features', 'PWA Support', 'Performance Optimization']
    }
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Dynamic Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="fixed inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-[0.03]" />
      </motion.div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            style={{ y: textY }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Crafting Digital
                <span className="block mt-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Experiences
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Full-stack web development solutions powered by modern technologies
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {stacks.map((stack, i) => (
                <div 
                  key={stack.name}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-lg border border-white/10"
                >
                  <span className="text-xl">{stack.icon}</span>
                  <span className="text-sm font-medium">{stack.name}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <FaArrowRight className="rotate-90 text-2xl" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
            <p className="text-xl text-gray-400">Comprehensive web development solutions</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="group p-8 rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-gray-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              Let's transform your ideas into reality with cutting-edge web development
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium hover:scale-105 transition-transform"
            >
              Start Your Project
              <FaArrowRight />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[120px]" />
      </div>
    </div>
  );
};

export default WebDesign;