import React, { useEffect, useRef, useState } from "react";
import { Compass, PenTool, Code2, Rocket } from "lucide-react";

const PROCESS_STEPS = [
  {
    id: "01",
    title: "Strategy & Discovery",
    desc: "We dive deep into your goals, audience, and market to build a roadmap for digital dominance.",
    icon: Compass
  },
  {
    id: "02",
    title: "Design & Planning",
    desc: "We craft high-fidelity prototypes and design systems that align perfectly with your brand identity.",
    icon: PenTool
  },
  {
    id: "03",
    title: "Development & Automation",
    desc: "Our engineers build scalable, pixel-perfect products with automated testing and deployment pipelines.",
    icon: Code2
  },
  {
    id: "04",
    title: "Launch & Optimization",
    desc: "We deploy with zero downtime and continuously monitor performance to ensure maximum ROI.",
    icon: Rocket
  }
];

const ProcessSection = () => {
  const sectionRef = useRef(null);
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-[#020408] relative overflow-hidden border-t border-white/5 text-white">
        
        {/* Background Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
            {/* Header */}
            <div className={`mb-24 text-center max-w-3xl mx-auto transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-4 block">Our Methodology</span>
                <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-8 tracking-tight">
                    From abstract idea to <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">market leader.</span>
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-transparent mx-auto rounded-full" />
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {PROCESS_STEPS.map((step, i) => (
                    <div 
                        key={i} 
                        className={`process-card group relative p-8 h-full bg-[#08090D] border border-white/5 rounded-2xl overflow-hidden transition-all duration-700 ease-out transform hover:border-blue-500/40 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                        style={{ transitionDelay: `${i * 150}ms` }}
                    >
                        
                        {/* Hover Glow Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Large Background Number */}
                        <div className="absolute -bottom-6 -right-6 text-[120px] font-black text-white/[0.02] group-hover:text-blue-500/10 transition-colors duration-500 pointer-events-none leading-none select-none">
                            {step.id}
                        </div>

                        {/* Content Container */}
                        <div className="relative z-10 flex flex-col h-full">
                            {/* Icon */}
                            <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center text-white mb-8 border border-white/5 group-hover:bg-blue-600 group-hover:border-blue-500 group-hover:scale-110 transition-all duration-300 shadow-lg">
                                <step.icon className="w-6 h-6 stroke-[1.5]" />
                            </div>

                            {/* Text */}
                            <h3 className="text-xl font-bold font-heading text-white mb-4 group-hover:text-blue-300 transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-white/50 text-sm leading-relaxed mb-4">
                                {step.desc}
                            </p>
                            
                            {/* Decorative Line */}
                            <div className="mt-auto pt-6 border-t border-white/5 group-hover:border-blue-500/20 transition-colors">
                                <span className="text-[10px] font-mono text-blue-500/50 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300 block">
                                    Step {step.id}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </section>
  );
};

export default ProcessSection;
