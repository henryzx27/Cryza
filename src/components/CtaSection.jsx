import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, Calendar } from "lucide-react";

const CtaSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-[#020408] relative overflow-hidden flex items-center justify-center text-center text-white border-t border-white/5">
        
        {/* Subtle Background Glow/Gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none" />

        <div className={`container mx-auto px-6 relative z-10 max-w-4xl transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight tracking-tight">
                Let’s Build Something That <br />
                <span className="text-blue-500">Actually Fits Your Budget.</span>
            </h2>
            
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
                Tell us what you need — we’ll suggest the best solution <br className="hidden md:block"/> 
                without unnecessary costs or hidden fees.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link 
                    to="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                    Get a Free Quote <ArrowRight className="w-5 h-5" />
                </Link>
                
                <Link 
                    to="/book"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white border border-white/10 font-bold text-lg rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                   <Calendar className="w-5 h-5 opacity-70" /> Book a Consultation
                </Link>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-sm font-medium text-white/40 uppercase tracking-widest">
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> No Contracts</span>
                <span className="hidden sm:inline">•</span>
                <span>No Hidden Costs</span>
                <span className="hidden sm:inline">•</span>
                <span>Quick Response</span>
            </div>

        </div>
    </section>
  );
};

export default CtaSection;
