import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { LayoutDashboard, GitMerge, Layers, Zap } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolio.config';

const iconMap: Record<string, React.ElementType> = {
  LayoutDashboard, GitMerge, Layers, Zap,
};

const colorMap: Record<string, {
  border: string; bg: string; text: string; glow: string;
  gradientFrom: string; gradientTo: string;
}> = {
  cyan: {
    border: 'border-cyan-500/20',
    bg: 'bg-cyan-500/5',
    text: 'text-cyan-400',
    glow: 'hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]',
    gradientFrom: 'from-cyan-500/20',
    gradientTo: 'to-blue-500/0',
  },
  violet: {
    border: 'border-violet-500/20',
    bg: 'bg-violet-500/5',
    text: 'text-violet-400',
    glow: 'hover:shadow-[0_0_40px_rgba(139,92,246,0.12)]',
    gradientFrom: 'from-violet-500/20',
    gradientTo: 'to-purple-500/0',
  },
  blue: {
    border: 'border-blue-500/20',
    bg: 'bg-blue-500/5',
    text: 'text-blue-400',
    glow: 'hover:shadow-[0_0_40px_rgba(59,130,246,0.12)]',
    gradientFrom: 'from-blue-500/20',
    gradientTo: 'to-sky-500/0',
  },
  emerald: {
    border: 'border-emerald-500/20',
    bg: 'bg-emerald-500/5',
    text: 'text-emerald-400',
    glow: 'hover:shadow-[0_0_40px_rgba(16,185,129,0.12)]',
    gradientFrom: 'from-emerald-500/20',
    gradientTo: 'to-green-500/0',
  },
};

export default function EngineeringHighlights() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { highlights } = PORTFOLIO_CONFIG;

  return (
    <section id="highlights" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-cyan-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label">Specializations</p>
          <h2 className="section-heading">
            What I <span className="text-gradient-cyan">Build Best</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Core areas where I've shipped production systems at enterprise scale.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {highlights.map((item, index) => {
            const Icon = iconMap[item.icon] || Layers;
            const colors = colorMap[item.color] || colorMap.cyan;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
                className={`relative glass-card border ${colors.border} p-7 group transition-all duration-300 ${colors.glow} overflow-hidden`}
              >
                {/* Gradient corner */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${colors.gradientFrom} ${colors.gradientTo} rounded-bl-full opacity-40`} />

                {/* Number label */}
                <span className="absolute top-5 right-6 text-5xl font-bold text-white/[0.04] font-mono select-none">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="relative space-y-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold text-white group-hover:${colors.text} transition-colors duration-200`}>
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className={`h-px w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${colors.gradientFrom} to-transparent`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
