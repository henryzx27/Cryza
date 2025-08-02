import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaShoppingCart, FaStripe, FaPaypal,
  FaRocket, FaLock, FaDatabase, FaCode, FaChartLine
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

  const floatY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const techStack = [
    { icon: <FaReact />, name: 'React.js', desc: 'Dynamic UIs with reusable components' },
    { icon: <SiNextdotjs />, name: 'Next.js', desc: 'SEO-friendly, server-rendered apps' },
    { icon: <SiExpress />, name: 'Express.js', desc: 'Robust APIs and server-side logic' },
    { icon: <SiMongodb />, name: 'MongoDB', desc: 'Flexible NoSQL database solutions' },
    { icon: <FaNodeJs />, name: 'Node.js', desc: 'Scalable, event-driven backend' },
    { icon: <SiJavascript />, name: 'JavaScript', desc: 'Interactive front-end functionality' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS', desc: 'Rapid UI development with utility classes' },
    { icon: <FaStripe />, name: 'Stripe', desc: 'Secure payment processing and subscriptions' }
  ];

  const ecommerceFeatures = [
    {
      icon: <FaShoppingCart className="text-4xl text-cyan-400" />,
      title: 'Advanced Shopping Cart',
      desc: 'Real-time updates, persistent storage, and guest checkout'
    },
    {
      icon: <FaPaypal className="text-4xl text-cyan-400" />,
      title: 'Payment Gateway Support',
      desc: 'Seamless integration with Stripe, PayPal, and more'
    },
    {
      icon: <FaDatabase className="text-4xl text-cyan-400" />,
      title: 'Inventory Management',
      desc: 'Track stock levels, manage product variants, and set dynamic pricing'
    },
    {
      icon: <FaLock className="text-4xl text-cyan-400" />,
      title: 'Secure Transactions',
      desc: 'SSL encryption and PCI compliance for safe payments'
    },
    {
      icon: <FaChartLine className="text-4xl text-cyan-400" />,
      title: 'Analytics Dashboard',
      desc: 'Track sales, customer behavior, and marketing performance'
    },
    {
      icon: <FaRocket className="text-4xl text-cyan-400" />,
      title: 'Scalable Architecture',
      desc: 'Built to handle high traffic and growing product catalogs'
    }
  ];

  const websiteDevelopmentDetails = [
    {
      title: 'Custom Website Design',
      desc: 'Unique, responsive designs tailored to your brand and audience. We focus on creating visually appealing and user-friendly websites that reflect your brand identity.',
      icon: <FaCode className="text-4xl text-cyan-400" />
    },
    {
      title: 'E-commerce Integration',
      desc: 'Seamlessly integrate e-commerce functionality to sell products and services online. From shopping carts to payment gateways, we handle it all.',
      icon: <FaShoppingCart className="text-4xl text-cyan-400" />
    },
    {
      title: 'Content Management Systems (CMS)',
      desc: 'Easy-to-use CMS solutions like WordPress and Drupal to manage your website content. Update your site with ease, no coding required.',
      icon: <FaDatabase className="text-4xl text-cyan-400" />
    },
    {
      title: 'Mobile-First Development',
      desc: 'Ensure your website looks and performs flawlessly on all devices. Mobile-first approach for optimal user experience.',
      icon: <FaReact className="text-4xl text-cyan-400" />
    },
    {
      title: 'SEO Optimization',
      desc: 'Improve your search engine ranking with our SEO strategies. Drive more organic traffic to your website.',
      icon: <FaChartLine className="text-4xl text-cyan-400" />
    },
    {
      title: 'Ongoing Support & Maintenance',
      desc: 'Reliable support and maintenance to keep your website running smoothly. We’re here to help whenever you need us.',
      icon: <FaRocket className="text-4xl text-cyan-400" />
    }
  ];

  return (
    <div ref={containerRef} className="relative bg-[#0a0a0a] text-white overflow-hidden">
      {/* Background Floating Lights */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div style={{ y: floatY }} className="absolute w-full h-full">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </motion.div>
      </div>

      {/* Hero */}
      <motion.section
        className="relative z-10 min-h-[80vh] flex items-center justify-center px-4 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: 0 }}
            transition={{ duration: 0.4 }}
            className="px-5 py-2 bg-cyan-500/10 text-cyan-300 text-sm rounded-full inline-block mb-6"
          >
            Full-Stack MERN Development
          </motion.span>

          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Powerful, Scalable{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
              E-commerce Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto mb-8"
          >
            We build modern storefronts using React, Next.js, MongoDB & Stripe — tailored for high conversion and growth.
            We also excel in creating custom website solutions that drive engagement and deliver results.
          </motion.p>

          {/* Replaced Buttons with USP and CTA */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10"
          >
            <p className="text-cyan-300 text-lg mb-4">
              Get a free consultation and discover how we can transform your business.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-medium hover:scale-105 transition"
            >
              Schedule a Consultation →
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Tech Stack */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: isLoaded ? 1 : 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-3xl md:text-4xl font-bold mb-12"
          >
            Tech Stack We Master
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: isLoaded ? 1 : 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-6 bg-white/5 rounded-xl text-center border border-white/10 hover:border-cyan-400/60 transition group"
              >
                <div className="text-4xl mb-3 text-cyan-400 group-hover:text-cyan-300">
                  {tech.icon}
                </div>
                <h3 className="font-semibold mb-1">{tech.name}</h3>
                <p className="text-sm text-gray-400">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* E-commerce Features */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: isLoaded ? 1 : 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-3xl md:text-4xl font-bold mb-12"
          >
            E-commerce Capabilities
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ecommerceFeatures.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: isLoaded ? 1 : 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-400/50 backdrop-blur-md"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Development Details */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: isLoaded ? 1 : 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-3xl md:text-4xl font-bold mb-12"
          >
            Website Development Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {websiteDevelopmentDetails.map((detail, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: isLoaded ? 1 : 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-400/50 transition"
              >
                <div className="mb-4">{detail.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{detail.title}</h3>
                <p className="text-gray-400 text-sm">{detail.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: isLoaded ? 1 : 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Dream Store?
          </h2>
          <p className="text-gray-400 mb-8">
            We create fast, secure, and scalable online stores that deliver performance and conversions. Let’s make your idea real.
            We also provide top-notch website development services to enhance your online presence.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-medium hover:scale-105 transition"
          >
            Schedule a Consultation →
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default WebDesign;