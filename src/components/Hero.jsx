import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

// --- Visible Particle Background ---
const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];
        
        // Configuration
        const particleCount = 60; 
        const mouseDistance = 250; 

        let mouse = { x: null, y: null };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5; 
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
                this.baseX = this.x;
                this.baseY = this.y;
                // Colors: Blue/White mix
                this.color = Math.random() > 0.5 ? 'rgba(59, 130, 246, 0.3)' : 'rgba(255, 255, 255, 0.15)';
            }

            update() {
                // Interactive Movement
                if (mouse.x != null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < mouseDistance) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (mouseDistance - distance) / mouseDistance;
                        const repulsion = force * 4; 
                        
                        this.vx -= forceDirectionX * repulsion * 0.05;
                        this.vy -= forceDirectionY * repulsion * 0.05;
                    }
                }

                this.x += this.vx;
                this.y += this.vy;

                // Friction
                this.vx *= 0.98;
                this.vy *= 0.98;

                // Loop
                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        initParticles();
        handleResize();
        
        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseLeave);
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 z-10 pointer-events-none mix-blend-screen" />;
};

// --- Hero Component ---
const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#020408] overflow-hidden pt-10">
      
      {/* --- Layers --- */}
      
      {/* 1. Visible Grid Pattern (Base) */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />

      {/* 2. Interactive Particles */}
      <ParticleBackground />

      {/* 3. Gradient Vignette */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#020408_90%)]" />

      {/* --- Content (Strictly Centered) --- */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Badge: Gentle Fade In */}
        {/* <div className="animate-fade-in opacity-0 [animation-delay:200ms] inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-lg shadow-blue-500/5">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-xs font-bold tracking-widest text-white/70 uppercase">Powered by AI + Design</span>
        </div> */}

        {/* Headline: Anime-Style Staggered Reveal */}
        <h1 className="text-6xl md:text-8xl lg:text-8xl font-bold font-heading tracking-tight leading-[0.95] mb-8 drop-shadow-2xl">
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

        {/* CTAs: Super Hover Effects */}
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
