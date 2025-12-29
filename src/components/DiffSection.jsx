import React, { useEffect, useRef, useState } from "react";
import { Check, X, ShieldCheck, Zap, Clock, Coins } from "lucide-react";

const VALUES = [
  {
    title: "High-Quality, Not High-Cost",
    desc: "We removed the agency bloat to deliver premium work at a fraction of the market rate.",
    icon: Coins,
    color: "text-emerald-400"
  },
  {
    title: "Transparent & Upfront",
    desc: "No hidden fees, no surprise retainers. You know exactly what you're paying for from day one.",
    icon: ShieldCheck,
    color: "text-blue-400"
  },
  {
    title: "Speed Without Compromise",
    desc: "Our AI-enhanced workflows allow us to build, test, and launch faster than traditional teams.",
    icon: Zap,
    color: "text-orange-400"
  }
];

const DiffSection = () => {
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
    <section ref={sectionRef} className="py-24 bg-[#020408] border-t border-white/5 text-white relative overflow-hidden">
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
            
            {/* Split Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                
                {/* Left: Copy */}
                <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-4 block">Why Choose Cryza?</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                        Premium digital solutions, <br />
                        <span className="text-white/40">without the premium agency price tag.</span>
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg">
                        Traditional agencies charge for their overhead. We charge for impact. 
                        Get modern design, robust development, and intelligent automation — specifically engineered for ROI.
                    </p>
                    <div className="h-1 w-20 bg-blue-600 rounded-full" />
                </div>

                {/* Right: Value List */}
                <div className="space-y-8">
                    {VALUES.map((item, i) => (
                        <div 
                            key={i} 
                            className={`flex gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                            style={{ transitionDelay: `${i * 150 + 200}ms` }}
                        >
                            <div className={`w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0 border border-white/10 ${item.color}`}>
                                <item.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Comparison Strip */}
            <div className={`mt-16 bg-[#08090D] border border-white/10 rounded-2xl p-8 md:p-12 transition-all duration-1000 delay-500 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                    
                    {/* Old Way */}
                    <div className="flex flex-col gap-4 px-4 opacity-50 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-80">
                        <span className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Traditional Agencies</span>
                        <div className="flex items-center gap-3 text-red-400">
                             <X className="w-5 h-5" /> <span>High Retainer Costs (1795817958)</span>
                        </div>
                        <div className="flex items-center gap-3 text-red-400">
                             <X className="w-5 h-5" /> <span>Slow Legacy Processes</span>
                        </div>
                        <div className="flex items-center gap-3 text-red-400">
                             <X className="w-5 h-5" /> <span>Overcomplicated & Opaque</span>
                        </div>
                    </div>

                    {/* Cryza Way */}
                    <div className="flex flex-col gap-4 px-4 md:pl-12">
                        <span className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2">The Cryza Way</span>
                        <div className="flex items-center gap-3 text-white">
                             <div className="bg-blue-500/20 p-1 rounded-full"><Check className="w-4 h-4 text-blue-400" /></div>
                             <span className="font-bold">Affordable & Transparent ($)</span>
                        </div>
                        <div className="flex items-center gap-3 text-white">
                             <div className="bg-blue-500/20 p-1 rounded-full"><Check className="w-4 h-4 text-blue-400" /></div>
                             <span className="font-bold">Rapid, AI-Driven Delivery</span>
                        </div>
                        <div className="flex items-center gap-3 text-white">
                             <div className="bg-blue-500/20 p-1 rounded-full"><Check className="w-4 h-4 text-blue-400" /></div>
                             <span className="font-bold">Streamlined & Results-First</span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </section>
  );
};

export default DiffSection;
