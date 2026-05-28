import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, Calendar } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolio.config';

const colorMap: Record<string, { border: string; bg: string; text: string; dot: string; tag: string }> = {
  cyan: {
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/5',
    text: 'text-cyan-400',
    dot: 'bg-cyan-400',
    tag: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
  },
  violet: {
    border: 'border-violet-500/30',
    bg: 'bg-violet-500/5',
    text: 'text-violet-400',
    dot: 'bg-violet-400',
    tag: 'bg-violet-500/10 border-violet-500/20 text-violet-400',
  },
  blue: {
    border: 'border-blue-500/30',
    bg: 'bg-blue-500/5',
    text: 'text-blue-400',
    dot: 'bg-blue-400',
    tag: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
  },
};

export default function ExperienceTimeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { experience } = PORTFOLIO_CONFIG;

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label">Career Path</p>
          <h2 className="section-heading">
            Work <span className="text-gradient-cyan">Experience</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Building enterprise-scale frontend systems across CRM platforms, PWAs, and micro-frontend architectures.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-violet-500/20 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experience.map((job, index) => {
              const colors = colorMap[job.color] || colorMap.cyan;

              return (
                <motion.div
                  key={`${job.company}-${job.role}`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                  className="relative md:pl-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-6 hidden md:flex items-center justify-center">
                    <div className={`w-5 h-5 rounded-full border-2 border-[#060c1a] ${colors.dot} shadow-lg`} />
                    {job.current && (
                      <div className={`absolute w-5 h-5 rounded-full ${colors.dot} opacity-30 animate-ping`} />
                    )}
                  </div>

                  {/* Card */}
                  <div className={`glass-card border ${colors.border} ${colors.bg} p-6 hover:bg-white/[0.04] transition-all duration-300`}>
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-bold text-white">{job.role}</h3>
                          {job.current && (
                            <span className="px-2 py-0.5 text-xs font-mono rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                              Current
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-sm text-slate-400">
                          <span className="flex items-center gap-1">
                            <Building2 className="w-3.5 h-3.5" />
                            <span className={`font-medium ${colors.text}`}>{job.company}</span>
                          </span>
                          <span className="text-slate-600">·</span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {job.duration}
                          </span>
                          <span className="text-slate-600">·</span>
                          <span className="text-slate-500 text-xs">{job.type}</span>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-5">
                      {job.highlights.map((point, i) => (
                        <li key={i} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${colors.dot}`} />
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`tag-chip font-mono text-[10px] ${colors.tag}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
