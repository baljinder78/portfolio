import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, GitBranch, Palette, Layers, Zap, Wrench } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolio.config';

const iconMap: Record<string, React.ElementType> = {
  Code2, GitBranch, Palette, Layers, Zap, Wrench,
};

const colorMap: Record<string, { bg: string; border: string; text: string; chip: string; glow: string }> = {
  cyan: {
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    text: 'text-cyan-400',
    chip: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300 hover:bg-cyan-500/20',
    glow: 'hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]',
  },
  violet: {
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    text: 'text-violet-400',
    chip: 'bg-violet-500/10 border-violet-500/20 text-violet-300 hover:bg-violet-500/20',
    glow: 'hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]',
  },
  blue: {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    text: 'text-blue-400',
    chip: 'bg-blue-500/10 border-blue-500/20 text-blue-300 hover:bg-blue-500/20',
    glow: 'hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]',
  },
  emerald: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    text: 'text-emerald-400',
    chip: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300 hover:bg-emerald-500/20',
    glow: 'hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]',
  },
  yellow: {
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20',
    text: 'text-yellow-400',
    chip: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-300 hover:bg-yellow-500/20',
    glow: 'hover:shadow-[0_0_20px_rgba(234,179,8,0.15)]',
  },
  rose: {
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/20',
    text: 'text-rose-400',
    chip: 'bg-rose-500/10 border-rose-500/20 text-rose-300 hover:bg-rose-500/20',
    glow: 'hover:shadow-[0_0_20px_rgba(244,63,94,0.15)]',
  },
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { skills } = PORTFOLIO_CONFIG;

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label">Tech Arsenal</p>
          <h2 className="section-heading">
            Skills &amp; <span className="text-gradient-violet">Expertise</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-lg mx-auto">
            Technologies and tools I've used to build production-grade frontend systems.
          </p>
        </motion.div>

        {/* Skill groups */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, gIndex) => {
            const Icon = iconMap[group.icon] || Code2;
            const colors = colorMap[group.color] || colorMap.cyan;

            return (
              <motion.div
                key={group.group}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: gIndex * 0.1, ease: "easeOut" }}
                className={`glass-card border ${colors.border} p-5 transition-all duration-300 ${colors.glow} hover:border-opacity-50`}
              >
                {/* Group header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-9 h-9 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-4 h-4 ${colors.text}`} />
                  </div>
                  <h3 className={`text-sm font-semibold ${colors.text}`}>{group.group}</h3>
                </div>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, sIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: gIndex * 0.1 + sIndex * 0.05 }}
                      className={`tag-chip font-mono text-[11px] cursor-default transition-all duration-200 ${colors.chip}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
