import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

// --- Background Components ---
const Background = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#020408]">
    {/* Deep Atmospheric Gradient */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#020408] via-[#04060C] to-[#080C16]" />

    {/* Subtle Grid */}
    <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}
    />
    
    {/* Grain Texture */}
    <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay">
        <svg className="w-full h-full"><filter id="f-grain"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" /></filter><rect width="100%" height="100%" filter="url(#f-grain)" /></svg>
    </div>

    {/* Soft glows */}
    <div className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-blue-900/10 rounded-full blur-[150px] opacity-30 mix-blend-screen" />
    <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-indigo-900/10 rounded-full blur-[120px] opacity-20 mix-blend-screen" />
  </div>
);

// --- Visual: Chaos to Order ---
const TransformationVisual = () => {
    const containerRef = useRef(null);
    const partsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 2, yoyo: true });
            const elements = partsRef.current;

            // 1. Initial State: Disorganized / Messy
            gsap.set(elements, {
                x: (i) => gsap.utils.random(-30, 30),
                y: (i) => gsap.utils.random(-30, 30),
                rotation: (i) => gsap.utils.random(-6, 6),
                scale: 0.95,
                opacity: 0.7,
                filter: "blur(3px) grayscale(50%)",
                boxShadow: "none",
                backgroundColor: "rgba(30, 41, 59, 0.4)", // Dim slate
                borderColor: "rgba(255,255,255,0.05)"
            });

            // 2. Transformation: Snap to Grid / Clean
            tl.to(elements, {
                x: 0,
                y: 0,
                rotation: 0,
                scale: 1,
                opacity: 1,
                filter: "blur(0px) grayscale(0%)",
                backgroundColor: "rgba(30, 41, 59, 0.5)", // Cleaner slate
                borderColor: "rgba(59,130,246,0.2)", // Subtle Blue Border
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
                duration: 2,
                stagger: { amount: 0.4, from: "start" },
                ease: "power3.inOut"
            })
            // 3. Activation: Blue Glow Pulse to signify "Conversion"
            .to(elements, {
                borderColor: "#3b82f6",
                boxShadow: "0 0 20px rgba(59,130,246,0.3)",
                duration: 0.6,
                ease: "power2.out"
            }, "-=0.2");

        }, containerRef);
        return () => ctx.revert();
    }, []);

    const addRef = (el) => { if (el && !partsRef.current.includes(el)) partsRef.current.push(el); };

    return (
        <div ref={containerRef} className="relative w-full max-w-[440px] aspect-[4/5] bg-white/[0.02] rounded-2xl border border-white/5 p-6 flex flex-col gap-4 backdrop-blur-sm shadow-2xl">
            {/* Window Dots */}
            <div className="flex gap-2 opacity-20 mb-2">
                <div className="w-3 h-3 rounded-full bg-white" />
                <div className="w-3 h-3 rounded-full bg-white" />
                <div className="w-3 h-3 rounded-full bg-white" />
            </div>

            {/* Header */}
            <div ref={addRef} className="h-12 w-full rounded-lg bg-slate-800/50 flex items-center justify-between px-4 border border-white/5">
                <div className="w-8 h-8 rounded bg-blue-500/20" />
                <div className="w-24 h-2 rounded bg-white/10" />
            </div>

            {/* Hero Content Area */}
            <div ref={addRef} className="flex-1 w-full rounded-lg bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-white/5 relative overflow-hidden flex flex-col justify-end p-4">
                 <div className="w-full h-full absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
                 <div className="relative z-10 w-2/3 h-4 rounded bg-white/20 mb-2" />
                 <div className="relative z-10 w-1/2 h-3 rounded bg-white/10" />
            </div>

            {/* Feature Row */}
            <div className="flex gap-4 h-24">
                 <div ref={addRef} className="flex-1 rounded-lg bg-slate-800/30 border border-white/5 p-3 flex flex-col justify-between">
                     <div className="w-8 h-8 rounded-full bg-blue-500/10" />
                     <div className="w-full h-2 rounded bg-white/5" />
                 </div>
                 <div ref={addRef} className="flex-1 rounded-lg bg-slate-800/30 border border-white/5 p-3 flex flex-col justify-between">
                     <div className="w-8 h-8 rounded-full bg-blue-500/10" />
                     <div className="w-full h-2 rounded bg-white/5" />
                 </div>
            </div>

            {/* CTA Bar */}
            <div ref={addRef} className="h-14 w-full rounded-lg bg-blue-600 flex items-center justify-center shadow-lg transform origin-center">
                 <div className="w-32 h-3 rounded-full bg-white/90" />
            </div>
        </div>
    );
};

// --- Page Component ---
const Hero = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
        // Entrance: Soft staggered reveal
        gsap.from(".anim-item", {
            y: 30,
            opacity: 0,
            duration: 1.2,
            stagger: 0.1,
            ease: "power2.out",
            delay: 0.2
        });
        
        // Entrance: Visual reveal
        gsap.from(".visual-container", {
            x: 50,
            opacity: 0,
            duration: 1.5,
            ease: "power2.out",
            delay: 0.4
        });

    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-obsidian text-white overflow-hidden px-6 lg:px-12 py-20 lg:py-0">
      <Background />

      <div className="container relative z-10 mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* LEFT: Copy */}
        <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            
            {/* Badge */}
            {/* <div className="anim-item mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase">Growth Driven Design</span>
            </div> */}

            {/* Headline */}
            <h1 className="anim-item text-5xl sm:text-6xl lg:text-7xl font-bold font-heading text-white leading-[1.05] tracking-tight mb-6">
                We Build Digital <br/>
                Experiences That <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Convert.</span>
            </h1>

            {/* Subheadline */}
            <p className="anim-item text-lg text-slate-400 font-sans mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0 font-light">
                Strategy, design, and development tailored to help brands <span className="text-slate-200 font-medium">grow faster</span>, stand out online, and turn visitors into customers.
            </p>

            {/* CTAs */}
            <div className="anim-item flex flex-col sm:flex-row items-center lg:items-start gap-5 mb-12">
                <button 
                  onClick={() => navigate('/contact')}
                  className="w-full sm:w-auto h-14 px-8 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold shadow-[0_4px_20px_rgba(37,99,235,0.3)] transition-all hover:scale-[1.02] flex justify-center items-center gap-2"
                >
                    Book a Free Consultation <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => navigate('/work')}
                  className="w-full sm:w-auto h-14 px-8 bg-transparent border border-white/10 text-white rounded-full font-medium hover:bg-white/5 hover:border-white/20 transition-all"
                >
                    View Our Work
                </button>
            </div>
             
             {/* Trust / Benefits */}
            <div className="anim-item border-t border-white/5 pt-8 grid grid-cols-2 gap-y-4 gap-x-8 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500/80" /> 
                    <span>Conversion Focused</span>
                </div>
                <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500/80" /> 
                    <span>Scalable Architecture</span>
                </div>
            </div>
        </div>

        {/* RIGHT: Visual */}
        <div className="visual-container flex justify-center lg:justify-end relative perspective-1000">
             <TransformationVisual />
             {/* Contextual Backdrop Blur */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/5 blur-[90px] -z-10 rounded-full" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
