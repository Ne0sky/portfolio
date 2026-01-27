"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, Cpu, Rocket, Code2, Globe, Terminal } from "lucide-react";

const projects = [
  {
    title: "AI-Interviewer",
    description: "Built a mock interview platform powered by Gemini AI using Next.js and Neon DB. Users receive realistic AI-driven interviews with real-time feedback.",
    tech: ["Next.js", "Gemini AI", "Drizzle", "PostgreSQL"],
    icon: <Cpu className="w-5 h-5 text-cyan-400" />,
    link: "https://github.com",
    accent: "cyan"
  },
  {
    title: "Animaxx",
    description: "Full-stack MERN application tracking 500,000+ anime entries via AniList API. Features custom watchlists and community playlist sharing.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    icon: <Rocket className="w-5 h-5 text-pink-500" />,
    link: "https://github.com",
    accent: "pink"
  },
  {
    title: "Data Ingestion",
    description: "Cognizant: Engineered a Python pipeline achieving 90% reduction in processing time through parallel producer-consumer architecture.",
    tech: ["Python", "PostgreSQL", "Parallelism"],
    icon: <Code2 className="w-5 h-5 text-emerald-400" />,
    link: "#",
    accent: "emerald"
  },
  {
    title: "Echo-Vault",
    description: "Futuristic agentic portfolio built with Tailwind v4, focusing on performance, motion, and 1980s retro-futurist aesthetics.",
    tech: ["Next.js", "Tailwind v4", "Framer Motion"],
    icon: <Globe className="w-5 h-5 text-orange-400" />,
    link: "#",
    accent: "orange"
  }
];

export default function Projects() {
  return (
    // 🚀 FULL WIDTH BLACKOUT: This kills the blue sidebars
    <section id="projects" className="w-full bg-[#050505] py-32 relative overflow-hidden">
      
      {/* 1. THE SCANNING LASER: Sweeps across the entire screen */}
      <motion.div 
        animate={{ top: ["-10%", "110%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent z-20 pointer-events-none"
      />

      {/* 2. STARFIELD LAYER */}
      <div className="absolute inset-0 z-0 opacity-30">
        {[...Array(40)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: Math.random() * 2 + 'px',
              height: Math.random() * 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5
            }}
          />
        ))}
      </div>

      {/* 3. CONTENT CONTAINER: Centered via max-w */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-cyan-500 font-mono text-[10px] tracking-[0.4em] uppercase">
              <Terminal size={12} />
              <span>Query: Archive_Nodes</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-white italic uppercase tracking-tighter">
              Project <span className="text-cyan-500">Vault</span>
            </h2>
          </div>
          <div className="text-right font-mono text-[9px] text-white/20 uppercase tracking-widest leading-relaxed">
            Bengaluru Deployment // SDE_AD <br />
            Status: Grid_Optimized
          </div>
        </div>

        {/* PROJECT LIST: Vertical Tactical Layout */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative flex flex-col md:flex-row items-stretch border border-white/5 bg-black/40 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-500"
            >
              {/* ID Badge */}
              <div className="w-full md:w-20 bg-white/5 flex items-center justify-center font-black text-white/10 text-2xl italic border-b md:border-b-0 md:border-r border-white/5 group-hover:text-cyan-500/20 transition-colors">
                0{index + 1}
              </div>

              {/* Main Info */}
              <div className="flex-1 p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    {project.icon}
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex gap-4 opacity-30 group-hover:opacity-100 transition-opacity">
                    <a href={project.link} className="hover:text-cyan-400 text-white transition-colors"><Github size={18} /></a>
                    <a href={project.link} className="hover:text-cyan-400 text-white transition-colors"><ExternalLink size={18} /></a>
                  </div>
                </div>
                
                <p className="text-white/40 font-mono text-[11px] leading-relaxed max-w-2xl mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-tighter border border-white/10 text-white/30 group-hover:border-cyan-500/40 group-hover:text-cyan-400 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative Accent Bar */}
              <div className="hidden md:block w-1 group-hover:w-2 bg-white/5 group-hover:bg-cyan-500 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* FOOTER STATS */}
        <div className="mt-24 text-center">
          <p className="text-[10px] font-mono text-white/20 uppercase tracking-[1em]">
            Processing_Node_350_DSA_Completed
          </p>
        </div>
      </div>
    </section>
  );
}