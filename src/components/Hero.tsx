"use client";
import { motion } from "framer-motion";
import { FileText, Rocket, Terminal, MapPin } from "lucide-react";

export default function RetroHero() {
  return (
    <div className="relative w-full h-screen bg-[#020202] overflow-hidden flex items-center justify-center">
      
      {/* 🚀 1. CSS PERSPECTIVE GRID (Non-3D, zero lag) */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          perspective: "500px",
          perspectiveOrigin: "50% 50%",
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #22d3ee22 1px, transparent 1px),
              linear-gradient(to bottom, #ff008022 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            transform: "rotateX(60deg) translateY(-20%)",
            maskImage: "linear-gradient(to top, rgba(0,0,0,1), transparent)",
          }}
        />
        {/* Infinite Grid Movement Animation */}
        <motion.div 
          animate={{ backgroundPosition: ["0px 0px", "0px 40px"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #22d3ee44 1px, transparent 1px),
              linear-gradient(to bottom, #ff008044 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            transform: "rotateX(60deg) translateY(-20%)",
            maskImage: "linear-gradient(to top, rgba(0,0,0,1), transparent)",
          }}
        />
      </div>

      {/* 🚀 2. THE "SPHERE" (SVG + Framer Motion instead of 3D) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 z-0 opacity-60 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="relative w-64 h-64 md:w-96 md:h-96"
        >
          {/* Neon Glow Outer */}
          <div className="absolute inset-0 rounded-full bg-pink-600/20 blur-[80px]" />
          {/* The Blob */}
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#ff0080", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#22d3ee", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <motion.path
              animate={{
                d: [
                  "M100,20 C140,20 180,60 180,100 C180,140 140,180 100,180 C60,180 20,140 20,100 C20,60 60,20 100,20",
                  "M100,30 C150,10 190,70 170,110 C150,150 120,190 80,170 C40,150 10,110 30,60 C50,20 80,40 100,30",
                  "M100,20 C140,20 180,60 180,100 C180,140 140,180 100,180 C60,180 20,140 20,100 C20,60 60,20 100,20"
                ]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              fill="url(#grad)"
              className="opacity-80 shadow-2xl"
            />
          </svg>
        </motion.div>
      </div>

      {/* 🚀 3. CONTENT AREA */}
      <div className="relative z-20 flex flex-col items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-6"
        >
          {/* NAME */}
          <h1 className="text-7xl md:text-9xl font-black text-white uppercase italic tracking-tighter leading-none drop-shadow-[0_10px_30px_rgba(0,0,0,1)]">
            Akash <span className="text-cyan-400">Dey</span>
          </h1>

          {/* SUBTITLE: Black background for readability */}
          <div className="inline-flex flex-wrap items-center justify-center gap-4 px-6 py-2 bg-black/80 border border-white/10 backdrop-blur-md rounded-sm">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-[10px] md:text-xs tracking-widest uppercase">
              <Terminal size={14} />
              <span>Software Development Engineer</span>
            </div>
            <span className="text-white/20 hidden md:block">|</span>
            <div className="flex items-center gap-2 text-white/70 font-mono text-[10px] md:text-xs tracking-widest uppercase">
              <MapPin size={14} className="text-pink-500" />
              <span>Bangalore, IN</span>
            </div>
          </div>

          {/* <p className="max-w-md mx-auto text-white/40 font-mono text-[10px] uppercase tracking-[0.2em] leading-relaxed py-4">
             High-Performance Data Pipelines & <br /> Scalable Systems Architectures.
          </p> */}

          {/* 🚀 4. ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href="/projects" 
              className="group relative flex items-center gap-2 bg-cyan-500 text-black font-black uppercase text-[11px] tracking-widest px-8 py-4 transition-all hover:bg-white active:scale-95"
            >
              <Rocket size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <span>Projects</span>
            </a>
            
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm text-white font-black uppercase text-[11px] tracking-widest px-8 py-4 transition-all hover:bg-white/10 hover:border-white/40 active:scale-95"
            >
              <FileText size={16} />
              <span>Access Resume</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Retro Scanline Overlay */}
      <div className="absolute inset-0 z-50 pointer-events-none opacity-[0.05] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px]" />
    </div>
  );
}