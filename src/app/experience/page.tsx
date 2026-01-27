"use client";
import { motion } from "framer-motion";
import { Database, Shield, Zap, Activity, ChevronRight, Terminal } from "lucide-react";

const experiences = [
  {
    company: "COGNIZANT",
    role: "PROGRAMMER ANALYST",
    duration: "2025 — PRESENT",
    location: "BENGALURU_NODE",
    status: "ACTIVE_DUTY",
    description: [
      "Engineered Python + PostgreSQL ingestion engines: 90% latency reduction.",
      "Architected parallel producer-consumer pipelines for concurrent data streams.",
      "Deployed real-time Insurance Print APIs: +80% operational throughput."
    ],
    icon: <Database className="w-5 h-5" />,
    color: "cyan"
  },
  {
    company: "AI CHEF MASTER",
    role: "FRONTEND ENGINEER",
    duration: "2023 — 2023",
    location: "REMOTE_LINK",
    status: "ARCHIVED",
    description: [
      "Led UI development for core dashboard using React.js and Tailwind stack.",
      "Optimized runtime performance: 30% reduction in LCP via code splitting.",
      "Executed 100% responsive cross-platform compatibility protocols."
    ],
    icon: <Shield className="w-5 h-5" />,
    color: "pink"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="w-full bg-[#030303] py-32 relative overflow-hidden">
      
      {/* 🚀 BACKGROUND AMBIENCE */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-50" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* HEADER: Standard Left-Aligned */}
        <div className="mb-24 space-y-4">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-[10px] tracking-[0.5em] uppercase">
            <Terminal size={14} />
            <span>Personnel_Record_Access</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter">
            Service <span className="text-cyan-400">Record</span>
          </h2>
        </div>

        {/* LINEAR TIMELINE FEED */}
        <div className="relative space-y-12">
          {/* The Vertical Connector Line */}
          <div className="absolute left-8 top-0 w-[1px] h-full bg-gradient-to-b from-cyan-500/50 via-white/10 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-20 group"
            >
              {/* Hardware Node Dot */}
              <div className="absolute left-[29px] top-8 w-1.5 h-1.5 bg-black border border-cyan-400 z-10 group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,1)] transition-all duration-300" />

              {/* Mission Card */}
              <div className="relative border border-white/5 bg-[#080808]/80 backdrop-blur-md p-8 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden">
                
                {/* Subtle Interior Glow */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-colors" />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                  <div className="flex items-center gap-5">
                    <div className="p-3 bg-white/5 border border-white/10 text-white/40 group-hover:text-cyan-400 transition-colors">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white uppercase tracking-tight italic">
                        {exp.role}
                      </h3>
                      <p className="text-cyan-400 font-mono text-[10px] font-bold tracking-widest">
                        {exp.company} // {exp.duration}
                      </p>
                    </div>
                  </div>
                  <div className="text-[9px] font-mono text-white/20 uppercase text-right tracking-widest hidden md:block">
                    {exp.location} <br />
                    <span className="text-cyan-400/50">{exp.status}</span>
                  </div>
                </div>

                {/* Tactical Bullets */}
                <ul className="space-y-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-4 items-start group/item">
                      <ChevronRight size={14} className="text-cyan-500 mt-0.5 opacity-30 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all" />
                      <p className="text-white/50 font-mono text-[11px] leading-relaxed group-hover/item:text-white/90 transition-colors">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>

                {/* Decorative Bottom Bar */}
                <div className="mt-8 flex gap-1">
                   <div className="h-1 w-8 bg-cyan-500/20 group-hover:bg-cyan-500 transition-all" />
                   <div className="h-1 w-2 bg-white/5 group-hover:bg-cyan-500/40 transition-all" />
                   <div className="h-1 w-2 bg-white/5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-32 opacity-20 flex justify-between items-center border-t border-white/5 pt-8">
          <div className="font-mono text-[10px] text-white tracking-[0.4em] uppercase">End_Of_History_Buffer</div>
          <div className="w-2 h-2 bg-cyan-500 animate-pulse rounded-full" />
        </div>
      </div>
    </section>
  );
}