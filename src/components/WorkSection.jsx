import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const PROJECTS = [
  {
    id: "01",
    client: "FinFlow",
    category: "Fintech Platform",
    result: "+40% Conversion",
    desc: "A complete overhaul of a financial dashboard. We simplified complex data streams into an intuitive, real-time interface.",
    image: "bg-gradient-to-br from-blue-900 via-indigo-900 to-[#020408]",
    accent: "text-blue-400",
    border: "group-hover:border-blue-500/50"
  },
  {
    id: "02",
    client: "Nebula AI",
    category: "SaaS Marketing",
    result: "3x User Growth",
    desc: "High-conversion landing page for a Series B AI startup, focusing on trust signals and technical clarity.",
    image: "bg-gradient-to-br from-purple-900 via-fuchsia-900 to-[#020408]",
    accent: "text-purple-400",
    border: "group-hover:border-purple-500/50"
  },
  {
    id: "03",
    client: "Velox",
    category: "E-Commerce",
    result: "0.2s Load Time",
    desc: "A headless commerce solution engineered for speed. Instant page loads and seamless checkout flows.",
    image: "bg-gradient-to-br from-emerald-900 via-teal-900 to-[#020408]",
    accent: "text-emerald-400",
    border: "group-hover:border-emerald-500/50"
  },
  {
    id: "04",
    client: "Aura",
    category: "Brand Identity",
    result: "Award Winning",
    desc: "A complete digital rebrand for a luxury lifestyle service, establishing a premium market position.",
    image: "bg-gradient-to-br from-orange-900 via-red-900 to-[#020408]",
    accent: "text-orange-400",
    border: "group-hover:border-orange-500/50"
  }
];

const WorkSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-[#020408] text-white relative overflow-hidden">
        {/* Subtle Background Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
            
            {/* Header with Animation */}
            <div className={`flex flex-col md:flex-row justify-between items-end mb-20 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <div className="max-w-xl">
                    <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-4 block">Selected Case Studies</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
                        Results that build <br /> <span className="text-white/40">digital empires.</span>
                    </h2>
                </div>
                <Link to="/work" className="hidden md:flex items-center gap-2 text-white hover:text-blue-400 transition-colors font-bold uppercase tracking-widest text-xs border-b border-white/20 pb-1 hover:border-blue-400">
                    View All Projects <ArrowUpRight className="w-4 h-4"/>
                </Link>
            </div>

            {/* Projects Grid with Staggered Animation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {PROJECTS.map((project, i) => (
                    <div 
                        key={i} 
                        className={`group relative block cursor-pointer transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}
                        style={{ transitionDelay: `${i * 200}ms` }}
                    >
                        {/* Image / Card Visual */}
                        <div className={`aspect-[4/3] w-full rounded-xl overflow-hidden relative mb-8 border border-white/5 ${project.border} transition-colors duration-500 shadow-2xl shadow-black/50`}>
                            
                            {/* Gradient Placeholder */}
                            <div className={`absolute inset-0 ${project.image} opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out`} />
                            
                            {/* Inner Glow / Highlight on Hover */}
                            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500" />
                            
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

                            {/* Floating Tag inside Image */}
                            <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-xs font-bold uppercase tracking-wider text-white">
                                {project.client}
                            </div>
                        </div>
                        
                        {/* Text Content */}
                        <div className="flex flex-col gap-3 relative px-2">
                            <div className="flex justify-between items-start">
                                <div>
                                    <span className={`text-xs font-bold uppercase tracking-widest mb-2 block ${project.accent}`}>
                                        {project.category}
                                    </span>
                                    <h3 className="text-3xl font-heading font-bold text-white mb-2 group-hover:text-blue-100 transition-colors">
                                        {project.client}
                                    </h3>
                                </div>
                                <div className="text-right">
                                    <span className="block text-2xl font-bold text-white">{project.result}</span>
                                    <span className="text-[10px] text-white/40 uppercase tracking-widest">Key Outcome</span>
                                </div>
                            </div>
                            
                            <p className="text-white/60 leading-relaxed max-w-lg text-sm mt-2 border-l-2 border-white/10 pl-4 group-hover:border-blue-500/50 transition-colors">
                                {project.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 md:hidden text-center">
                <Link to="/work" className="inline-flex items-center gap-2 text-white hover:text-blue-400 transition-colors font-bold uppercase tracking-widest text-xs border-b border-white/20 pb-1 hover:border-blue-400">
                    View All Projects <ArrowUpRight className="w-4 h-4"/>
                </Link>
            </div>

        </div>
    </section>
  );
};

export default WorkSection;
