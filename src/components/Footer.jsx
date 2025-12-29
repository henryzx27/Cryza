import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } 
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="bg-[#020408] text-white pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
        
        <div className={`container mx-auto px-6 max-w-7xl relative z-10 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                
                {/* Brand Section */}
                <div className="space-y-6">
                    <Link to="/" className="text-2xl font-heading font-black tracking-tighter text-white block">
                        Cryza.
                    </Link>
                    <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                        Affordable design, development, and automation for growing businesses. We build the future, transparently.
                    </p>
                    <div className="flex gap-4">
                        {[Twitter, Instagram, Linkedin].map((Icon, i) => (
                            <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-blue-600 hover:text-white transition-all duration-300">
                                <Icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Company Links */}
                <div>
                    <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Company</h4>
                    <ul className="space-y-4">
                        {['About', 'Services', 'Work', 'Contact'].map((item) => (
                            <li key={item}>
                                <Link to={`/${item.toLowerCase()}`} className="text-white/60 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group">
                                    {item} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services Links */}
                <div>
                    <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Services</h4>
                    <ul className="space-y-4">
                         {[
                            { label: 'Web Development', path: '/services/web' },
                            { label: 'AI Marketing', path: '/services/marketing' },
                            { label: 'SEO & Social Media', path: '/services/seo' },
                            { label: 'Branding & Identity', path: '/services/branding' }
                        ].map((item) => (
                            <li key={item.label}>
                                <Link to={item.path} className="text-white/60 hover:text-blue-400 transition-colors text-sm block">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Contact Us</h4>
                    <ul className="space-y-6">
                        <li>
                            <a href="mailto:hello@cryza.in" className="group flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-blue-900/20 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 mt-1">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="block text-white/40 text-xs mb-1 uppercase tracking-wider">Email Us</span>
                                    <span className="text-white font-medium group-hover:text-blue-400 transition-colors">hello@cryza.in</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="tel:+919876543210" className="group flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-blue-900/20 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 mt-1">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="block text-white/40 text-xs mb-1 uppercase tracking-wider">Call Us</span>
                                    <span className="text-white font-medium group-hover:text-blue-400 transition-colors">+91 98765 43210</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div className="mt-8 pt-6 border-t border-white/5">
                        <p className="text-white/40 text-xs leading-relaxed">
                            Quick response • Transparent pricing • No hidden costs
                        </p>
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-white/40 text-xs">
                    &copy; {new Date().getFullYear()} Cryza. All rights reserved.
                </p>
                <div className="flex gap-8">
                    <Link to="/privacy" className="text-white/40 hover:text-white text-xs transition-colors">Privacy Policy</Link>
                    <Link to="/terms" className="text-white/40 hover:text-white text-xs transition-colors">Terms of Service</Link>
                </div>
            </div>

        </div>
    </footer>
  );
};

export default Footer;
