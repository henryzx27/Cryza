import React, { useEffect, useRef, useState } from "react";
import { Code2, Video, Share2, Palette } from "lucide-react";

const SERVICES = [
  {
    title: "Web Development & Infrastructure",
    desc: "Fast, scalable websites & apps built on reliable hosting architectures.",
    icon: Code2,
    color: "text-blue-400"
  },
  {
    title: "AI Commercials & Marketing",
    desc: "Data-driven campaigns and AI-powered video ads built to convert.",
    icon: Video,
    color: "text-purple-400"
  },
  {
    title: "Social Media & SEO",
    desc: "Organic growth strategies powered by consistent storytelling and technical SEO.",
    icon: Share2,
    color: "text-emerald-400"
  },
  {
    title: "Branding & Identity",
    desc: "Logos, visual systems, and brand guidelines that feel professional and unique.",
    icon: Palette,
    color: "text-orange-400"
  }
];

const AboutSection = () => {
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
    <section ref={sectionRef} className="py-24 md:py-32 bg-[#020408] text-white relative overflow-hidden">
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
            
            {/* 1. STORY INTRO */}
            <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 leading-tight">
                    Quality digital services shouldn't be <br />
                    <span className="text-white/40">expensive, confusing, or over-engineered.</span>
                </h2>
                <div className="text-lg text-white/70 leading-relaxed space-y-4">
                    <p>
                        Most businesses don’t fail because of bad ideas. They struggle because the agency landscape is broken—filled with high retainers, slow turnaround times, and complex jargon.
                    </p>
                    <p>
                        Cryza was created to change that. We deliver modern <span className="text-white font-medium">design, development, and automation</span> at prices that actually make sense for growing businesses.
                    </p>
                </div>
            </div>

            {/* 2. VISUAL DIVIDER */}
            <div className={`w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16 transition-opacity duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />

            {/* 3. SERVICES SHOWCASE */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-20">
                {SERVICES.map((service, i) => (
                    <div 
                        key={i} 
                        className={`group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                        style={{ transitionDelay: `${i * 100 + 300}ms` }}
                    >
                        <div className="flex items-start gap-5">
                            <div className={`w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 ${service.color}`}>
                                <service.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-blue-200 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-white/50 text-sm leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* 4. MICRO STORY CLOSE */}
            <div className={`text-center max-w-2xl mx-auto transition-all duration-1000 delay-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <p className="text-xl font-medium text-white">
                    We don’t upsell. We don’t overcomplicate. <br />
                    <span className="text-blue-500">We simply build what your business actually needs.</span>
                </p>
            </div>

        </div>
    </section>
  );
};

export default AboutSection;
