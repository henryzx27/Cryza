import React from "react";

// filepath: c:\Js\Cryza.in\src\components\Footer.jsx
const Footer = () => (
  <footer className="w-full bg-gradient-to-r from-blue-900 via-gray-900 to-black text-white pt-12 pb-6 px-4 mt-16">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
      {/* Brand & Description */}
      <div className="flex flex-col gap-4 md:col-span-2">
        <div className="flex items-center gap-3 mb-2">
          <span className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-full p-2 shadow-lg">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" stroke="#fff" strokeWidth="2" />
              <circle cx="16" cy="16" r="7" fill="#3B82F6" />
            </svg>
          </span>
          <span className="text-2xl font-extrabold tracking-wide">Cryza</span>
        </div>
        <p className="text-white/70 text-sm max-w-md">
          Cryza is a creative digital studio focused on building minimal, interactive, and high-impact web experiences for brands and startups. We blend design and technology to help you connect, convert, and grow. Our team delivers modern websites, custom apps, and digital strategies that elevate your brand and drive results.
        </p>
        <div className="flex gap-4 mt-2">
          <a href="mailto:hello@cryza.in" className="text-blue-400 hover:underline text-sm">hello@cryza.in</a>
          <span className="text-white/40">|</span>
          <span className="text-white/40 text-sm">+91 98765 43210</span>
        </div>
      </div>
      {/* Services */}
      <div>
        <h4 className="text-lg font-semibold mb-3 text-blue-400">Services We Provide</h4>
        <ul className="flex flex-col gap-2 text-white/80 text-sm">
          <li className="hover:text-blue-400 transition">Websites & Apps</li>
          <li className="hover:text-blue-400 transition">Domain + Hosting</li>
          <li className="hover:text-blue-400 transition">Social Media Management + SEO</li>
        </ul>
        <p className="text-white/50 text-xs mt-4">
          We help you launch, manage, and grow your digital presence with reliable solutions and creative strategies.
        </p>
      </div>
      {/* Social */}
      <div>
        <h4 className="text-lg font-semibold mb-3 text-blue-400">Connect</h4>
        <div className="flex gap-4 mb-3">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <svg width="24" height="24" fill="none"><path d="M8 19c7.5 0 11.6-6.2 11.6-11.6v-0.5A8.3 8.3 0 0022 4.6a8.1 8.1 0 01-2.4.7A4.1 4.1 0 0021.4 3a8.2 8.2 0 01-2.6 1A4.1 4.1 0 0012 8.1c0 .3 0 .6.1.9A11.7 11.7 0 013 4.2a4.1 4.1 0 001.3 5.5A4 4 0 012.8 9v.1a4.1 4.1 0 003.3 4A4.1 4.1 0 013 13.1a4.1 4.1 0 003.8 2.8A8.3 8.3 0 012 17.5a11.7 11.7 0 006.3 1.8" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <svg width="24" height="24" fill="none"><path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.1 6.9 9.4.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1-1-1.3-1-1.3-.8-.6.1-.6.1-.6.9.1 1.4.9 1.4.9.8 1.4 2.1 1 2.6.8.1-.6.3-1 .6-1.2-2.2-.2-4.5-1.1-4.5-4.8 0-1.1.4-2 1-2.7-.1-.2-.4-1.2.1-2.5 0 0 .8-.3 2.7 1a9.3 9.3 0 015 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.5.6.7 1 1.6 1 2.7 0 3.7-2.3 4.6-4.5 4.8.3.3.6.8.6 1.6v2.4c0 .3.2.6.7.5A10 10 0 0022 12c0-5.5-4.5-10-10-10z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <svg width="24" height="24" fill="none"><rect x="2" y="2" width="20" height="20" rx="4" stroke="#3B82F6" strokeWidth="2"/><rect x="6" y="8" width="2" height="8" fill="#3B82F6"/><circle cx="7" cy="6" r="1" fill="#3B82F6"/><rect x="10" y="8" width="2" height="8" fill="#3B82F6"/><rect x="14" y="12" width="2" height="4" fill="#3B82F6"/></svg>
          </a>
        </div>
        <div className="text-white/60 text-xs">
          <span>Let's build something amazing together.<br />Reach out for a free consultation.</span>
          <div className="mt-2">
            <span className="block">Office: 101, Digital Park, Mumbai, India</span>
            <span className="block">Mon - Fri: 10am - 7pm</span>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-10 text-center text-xs text-white/40 border-t border-white/10 pt-6">
      &copy; {new Date().getFullYear()} Cryza. All rights reserved. | Designed & Developed by Cryza Studio
    </div>
  </footer>
);

export default Footer;