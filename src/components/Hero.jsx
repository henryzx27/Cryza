import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

// --- Pixel Fabric / Liquid Grid Background ---
const PixelFabricBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let w, h, animationId;
        
        // Physics Config
        const spacing = 42;            // More breathing space
        const mouseRadius = 180;       // Smaller interaction zone
        const repulsionStrength = 6;   // MUCH softer push
        const springStrength = 0.035;  // Gentle return
        const friction = 0.97;         // Heavy damping (key)
        
        let points = [];
        let mouse = { x: -500, y: -500 };

        class Point {
            constructor(x, y) {
                this.ox = x; // Original X
                this.oy = y; // Original Y
                this.x = x;  // Current X
                this.y = y;  // Current Y
                this.vx = 0; // Velocity X
                this.vy = 0; // Velocity Y
                // Color variation: Cyan to Violet
                this.color = Math.random() > 0.5 ? '#06b6d4' : '#8b5cf6';
                this.size = Math.random() * 1.5 + 1;
            }

            update() {
                // 1. Mouse Interaction (Repulsion)
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.sqrt(dx*dx + dy*dy);

                if (dist < mouseRadius) {
                    const angle = Math.atan2(dy, dx);
                    const force = (mouseRadius - dist) / mouseRadius;
                    const push = force * repulsionStrength;
                    
                    this.vx -= Math.cos(angle) * push * 0.35;
                    this.vy -= Math.sin(angle) * push * 0.35;
                }

                // 2. Spring Physics (Return to Home)
                const dxHome = this.ox - this.x;
                const dyHome = this.oy - this.y;
                
                this.vx += dxHome * springStrength;
                this.vy += dyHome * springStrength;

                // 3. Friction & Movement
                this.vx *= friction;
                this.vy *= friction;
                
                this.x += this.vx;
                this.y += this.vy;
            }

            draw() {
                // Glow effect based on velocity
                const speed = Math.sqrt(this.vx*this.vx + this.vy*this.vy);
                const alpha = Math.min(0.2 + speed * 0.1, 0.8);
                
                ctx.globalAlpha = alpha;
                ctx.fillStyle = this.color;
                
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = 1;
            }
        }

        const initPoints = () => {
            points = [];
            const cols = Math.ceil(w / spacing);
            const rows = Math.ceil(h / spacing);
            
            // Center the grid
            const offsetX = (w - (cols * spacing)) / 2;
            const offsetY = (h - (rows * spacing)) / 2;

            for(let i = 0; i <= cols; i++) {
                for(let j = 0; j <= rows; j++) {
                    const x = offsetX + i * spacing;
                    const y = offsetY + j * spacing;
                    points.push(new Point(x, y));
                }
            }
        };

        const resize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
            initPoints();
        };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = -500;
            mouse.y = -500;
        };

        const animate = () => {
            ctx.clearRect(0, 0, w, h);
            
            // Draw connections (Optional: Removed for cleaner dots look, 
            // but can enable for "fabric" lines. Let's stick to dots for now per "Pixel" concept 
            // but add a subtle background wave to the points themselves)

            points.forEach(p => {
                p.update();
                p.draw();
            });

            animationId = requestAnimationFrame(animate);
        };

        resize();
        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseout", handleMouseLeave);
        animate();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseout", handleMouseLeave);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 z-0 bg-[#020408]" />;
};

// --- Hero Component ---
const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#020408] overflow-hidden pt-10">
      
      {/* 1. Pixel Fabric Background */}
      <PixelFabricBackground />

      {/* 2. Gradient Vignette Overlay (Enhanced focus) */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_800px_at_center,transparent_0%,#020408_95%)]" />

      {/* 3. Content (Strict Center) */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        
         {/* Badge */}
        {/* <div className="animate-fade-in opacity-0 [animation-delay:200ms] inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-lg shadow-blue-500/5">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-xs font-bold tracking-widest text-white/70 uppercase">Powered by AI + Design</span>
        </div> */}

        {/* Headline: Anime-Style Staggered Reveal */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-heading tracking-tight leading-[0.95] mb-8 drop-shadow-2xl">
            {/* Split "We Build for" */}
            <div className="block overflow-hidden pb-2">
                {"We Build for".split(" ").map((word, i) => (
                    <span 
                        key={i} 
                        className="inline-block animate-slide-up opacity-0 mr-4"
                        style={{ animationDelay: `${300 + (i * 100)}ms` }}
                    >
                        {word}
                    </span>
                ))}
            </div>
            {/* Split "Attention." */}
            <div className="block overflow-hidden pb-4">
                 <span 
                    className="inline-block animate-slide-up opacity-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400"
                    style={{ animationDelay: '600ms' }}
                 >
                    Attention.
                 </span>
            </div>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-in opacity-0 [animation-delay:900ms] text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-14 leading-relaxed font-light">
            Premium digital experiences crafted to cut through the noise <br className="hidden md:block"/> and position your brand as the industry leader.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in opacity-0 [animation-delay:1100ms] flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
            
            {/* Primary Button with "Sheen" Effect */}
            <Link 
                to="/contact" 
                className="relative overflow-hidden group w-full sm:w-auto h-14 px-10 rounded-full bg-blue-600 text-white font-bold text-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] hover:-translate-y-1"
            >
                {/* Sheen Element */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover:animate-sheen" />
                
                <span className="relative z-10 flex items-center gap-2">
                    Start a Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
            </Link>

            {/* Secondary Button */}
            <Link 
                to="/work" 
                className="group w-full sm:w-auto h-14 px-10 rounded-full border border-white/10 text-white font-medium text-lg flex items-center justify-center backdrop-blur-sm transition-all hover:bg-white/5 hover:border-white/20"
            >
                View Services
            </Link>
        </div>

      </div>

      <style>{`
        @keyframes slideUp {
            from { opacity: 0; transform: translateY(100%); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
            animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fadeIn 1s ease-out forwards;
        }

        @keyframes sheen {
            0% { transform: translateX(-100%) skewX(-15deg); }
            100% { transform: translateX(200%) skewX(-15deg); }
        }
        .group-hover\\:animate-sheen {
            animation: sheen 0.6s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
