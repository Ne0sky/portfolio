"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, Cpu, Rocket, Code2, Globe } from "lucide-react";

const projects = [
  {
    title: "AI-Interviewer",
    description: "Built a mock interview platform powered by Gemini AI using Next.js, Drizzle ORM, and PostgreSQL (Neon DB)[cite: 33]. Users receive realistic AI-driven interviews with personalized feedback based on job roles[cite: 34].",
    tech: ["Next.js", "Gemini AI", "Drizzle", "PostgreSQL"],
    icon: <Cpu className="w-6 h-6 text-cyan-400" />,
    link: "https://github.com",
  },
  {
    title: "Animaxx",
    description: "Developed a full-stack MERN application to help users track anime releases and create personalized watchlists[cite: 31]. Integrated the AniList API (500,000+ entries) for discovery and playlist sharing[cite: 32].",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    icon: <Rocket className="w-6 h-6 text-purple-400" />,
    link: "https://github.com",
  },
  {
    title: "Large-Scale Data Ingestion",
    description: "Cognizant Project: Engineered a Python + PostgreSQL application to handle large-scale dataset ingestion, achieving a 90% reduction in processing time[cite: 22]. Optimized with parallel producer-consumer pipelines[cite: 23].",
    tech: ["Python", "PostgreSQL", "Parallel Processing"],
    icon: <Code2 className="w-6 h-6 text-emerald-400" />,
    link: "#",
  },
  {
    title: "Echo-Vault Portfolio",
    description: "A futuristic, agentic portfolio built with Next.js and Tailwind v4, focusing on performance and modern CSS-first styling.",
    tech: ["Next.js", "Tailwind v4", "Framer Motion"],
    icon: <Globe className="w-6 h-6 text-orange-400" />,
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">
          Featured Engineering Projects
        </h2>
        <p className="text-slate-400 mt-4">Scalable applications and AI-driven solutions.</p>
      </motion.div>

      <div className="columns-1 md:columns-2 gap-8 space-y-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="break-inside-avoid relative group"
          >
            {/* The Glass Card */}
            <div className="relative p-8 rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-2xl hover:bg-slate-800/60 transition-all duration-300">
              {/* Animated Glow Border */}
              <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20 -z-10 group-hover:opacity-100 opacity-50 transition-opacity" />
              
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                  {project.icon}
                </div>
                <div className="flex gap-4">
                  <a href={project.link} className="text-slate-500 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.link} className="text-slate-500 hover:text-white transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}