import React from "react";
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 pt-20 pb-10 mt-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-xl">
              <svg width="20" height="20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="white" strokeWidth="2" />
                <circle cx="10" cy="10" r="4" fill="#3B82F6" />
              </svg>
            </div>
            <span className="text-2xl font-bold">Cryza</span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed max-w-md mb-4">
            Cryza is a digital design & tech studio crafting beautiful, fast, and scalable online experiences — blending creativity with strategy for startups, creators, and brands.
          </p>
          <div className="flex items-center gap-4 text-sm text-white/50">
            <FaEnvelope className="text-blue-500" />
            <a href="mailto:hello@cryza.in" className="hover:text-white transition">hello@cryza.in</a>
          </div>
          <div className="flex items-center gap-4 text-sm text-white/50 mt-2">
            <FaPhoneAlt className="text-blue-500" />
            <span>+91 98765 43210</span>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-blue-400 text-sm font-semibold mb-4 uppercase tracking-wider">What We Do</h4>
          <ul className="space-y-2 text-white/70 text-sm">
            <li className="hover:text-white transition">Web & App Development</li>
            <li className="hover:text-white transition">AI Marketing & Campaigns</li>
            <li className="hover:text-white transition">SEO & Social Media Growth</li>
            <li className="hover:text-white transition">Brand Strategy & Design</li>
          </ul>
        </div>

        {/* Social / Connect */}
        <div>
          <h4 className="text-blue-400 text-sm font-semibold mb-4 uppercase tracking-wider">Connect</h4>
          <div className="flex gap-4 mb-4 text-white/70">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              <FaTwitter size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              <FaLinkedin size={20} />
            </a>
          </div>
          <p className="text-xs text-white/50 leading-relaxed">
            Office: 101, Digital Park, Mumbai<br />
            Mon–Fri: 10am – 7pm IST
          </p>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="mt-16 text-center text-xs text-white/40 border-t border-white/10 pt-6">
        &copy; {new Date().getFullYear()} Cryza. All rights reserved. Designed by Cryza Studio.
      </div>
    </footer>
  );
}
