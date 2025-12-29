import React from "react";
import { 
  Code2, 
  Database, 
  Globe, 
  Cpu, 
  Layout, 
  Server, 
  Terminal, 
  Box, 
  Layers 
} from "lucide-react";

const TECH_STACK = [
  { name: "React", icon: Code2 },
  { name: "Next.js", icon: Globe },
  { name: "Node.js", icon: Server },
  { name: "Tailwind CSS", icon: Layout },
  { name: "PostgreSQL", icon: Database },
  { name: "Docker", icon: Box },
  { name: "AWS", icon: Layers },
  { name: "TypeScript", icon: Terminal },
  { name: "OpenAI API", icon: Cpu },
  // Duplicate for seamless loop
  { name: "React", icon: Code2 },
  { name: "Next.js", icon: Globe },
  { name: "Node.js", icon: Server },
  { name: "Tailwind CSS", icon: Layout },
  { name: "PostgreSQL", icon: Database },
  { name: "Docker", icon: Box },
  { name: "AWS", icon: Layers },
  { name: "TypeScript", icon: Terminal },
  { name: "OpenAI API", icon: Cpu }
];

const TrustSection = () => {
  return (
    <section className="py-24 bg-[#020408] border-y border-white/5 relative overflow-hidden">
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                
                {/* Left Content */}
                <div>
                    <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-4 block">Built on Proven Technology</span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                        Modern tools for <br />
                        <span className="text-white/40">future-ready products.</span>
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed max-w-lg mb-8">
                        We don't rely on outdated builders or bloated themes. We build with the same professional tech stack used by top tech companies—ensuring speed, security, and scalability.
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                         {['Fast', 'Scalable', 'Secure'].map((tag) => (
                             <span key={tag} className="px-3 py-1 rounded-full border border-white/10 text-xs font-medium text-white/60 bg-white/5">
                                 {tag}
                             </span>
                         ))}
                    </div>
                </div>

                {/* Right Animation (Vertical Scroller) */}
                <div className="relative h-[400px] overflow-hidden rounded-2xl bg-gradient-to-b from-[#020408] via-white/[0.02] to-[#020408] border border-white/5 after:absolute after:inset-0 after:bg-gradient-to-b after:from-[#020408] after:via-transparent after:to-[#020408] after:z-10">
                    
                    {/* The Scrolling Track */}
                    <div className="absolute inset-x-0 top-0 animate-infinite-scroll-y w-full flex flex-col items-center gap-6 py-6">
                        {TECH_STACK.map((tech, i) => (
                            <div 
                                key={i} 
                                className="w-full max-w-[200px] flex items-center gap-4 px-6 py-4 rounded-xl bg-[#08090D] border border-white/5 text-white/40 hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300 group"
                            >
                                <tech.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                <span className="text-sm font-bold font-mono tracking-wide">{tech.name}</span>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </div>
        
        {/* CSS for custom animation */}
        <style>{
            `
            @keyframes infinite-scroll-y {
                0% { transform: translateY(0); }
                100% { transform: translateY(-50%); }
            }
            .animate-infinite-scroll-y {
                animation: infinite-scroll-y 30s linear infinite;
            }
            .animate-infinite-scroll-y:hover {
                animation-play-state: paused;
            }
            `
        }</style>

    </section>
  );
};

export default TrustSection;
