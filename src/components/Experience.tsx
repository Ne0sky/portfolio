"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Cognizant",
    role: "Programmer Analyst Trainee",
    duration: "July 2025 — Present",
    description: [
      "Engineered a Python + PostgreSQL application for large-scale dataset ingestion, reducing processing time by 90%[cite: 22].",
      "Optimized performance using parallel producer-consumer pipelines for concurrent uploads[cite: 23].",
      "Built a real-time insurance print status API, improving operational efficiency by 80%[cite: 24]."
    ],
  },
  {
    company: "AI Chef Master",
    role: "Frontend Developer Intern",
    duration: "Aug 2023 — Nov 2023",
    description: [
      "Led frontend development of the company dashboard using React.js and Tailwind CSS[cite: 28].",
      "Improved dashboard load times by 30% through lazy loading and code splitting[cite: 29].",
      "Ensured 100% mobile compatibility for the responsive UI[cite: 28]."
    ],
  }
];

export default function Experience() {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
      >
        Professional Experience
      </motion.h2>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative pl-8 border-l border-slate-800"
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-5px] top-2 h-2.4 w-2.4 rounded-full bg-cyan-500 shadow-[0_0_10px_#22d3ee]" />
            
            <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
            <p className="text-cyan-400 font-medium mb-4">{exp.company} • {exp.duration}</p>
            <ul className="space-y-2 text-slate-200">
              {exp.description.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-purple-500">▹</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}