import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, MapPin, Briefcase, Coffee } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolio.config';

const highlights = [
  { icon: Briefcase, label: 'Experience', value: `${PORTFOLIO_CONFIG.personal.yearsOfExperience}+ Years` },
  { icon: MapPin, label: 'Location', value: PORTFOLIO_CONFIG.personal.location },
  { icon: Coffee, label: 'Focus', value: 'Frontend Architecture' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const { personal } = PORTFOLIO_CONFIG;

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — decorative code block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div className="glass-card border-white/[0.08] overflow-hidden">
              {/* Code editor title bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/[0.06]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="ml-2 text-xs font-mono text-slate-500">about.ts</span>
              </div>
              <pre className="p-5 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto no-scrollbar">
                <code>
                  <span className="text-slate-500">{'// developer profile\n'}</span>
                  <span className="text-violet-400">const</span>
                  <span className="text-white"> developer </span>
                  <span className="text-slate-400">= </span>
                  <span className="text-yellow-300">{'{\n'}</span>
                  <span className="text-cyan-400">{'  name'}</span>
                  <span className="text-slate-400">{': '}</span>
                  <span className="text-emerald-400">{`"${personal.name}"`}</span>
                  <span className="text-slate-400">{',\n'}</span>
                  <span className="text-cyan-400">{'  role'}</span>
                  <span className="text-slate-400">{': '}</span>
                  <span className="text-emerald-400">{`"${personal.title}"`}</span>
                  <span className="text-slate-400">{',\n'}</span>
                  <span className="text-cyan-400">{'  experience'}</span>
                  <span className="text-slate-400">{': '}</span>
                  <span className="text-orange-400">{`"${personal.yearsOfExperience}+ years"`}</span>
                  <span className="text-slate-400">{',\n'}</span>
                  <span className="text-cyan-400">{'  expertise'}</span>
                  <span className="text-slate-400">{': ['}</span>
                  {'\n'}
                  {['React', 'TypeScript', 'Micro-Frontend', 'Workflow Engines'].map((e) => (
                    <span key={e}>
                      <span className="text-slate-400">{'    '}</span>
                      <span className="text-emerald-400">{`"${e}"`}</span>
                      <span className="text-slate-400">{',\n'}</span>
                    </span>
                  ))}
                  <span className="text-slate-400">{'  ],\n'}</span>
                  <span className="text-cyan-400">{'  passion'}</span>
                  <span className="text-slate-400">{': '}</span>
                  <span className="text-emerald-400">{"\"Building things that scale\""}</span>
                  <span className="text-slate-400">{',\n'}</span>
                  <span className="text-yellow-300">{'}'}</span>
                  <span className="text-slate-400">{';\n\n'}</span>
                  <span className="text-slate-500">{'// always improving ↓\n'}</span>
                  <span className="text-violet-400">{'export default'}</span>
                  <span className="text-white">{' developer'}</span>
                  <span className="text-slate-400">{';\n'}</span>
                </code>
              </pre>
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="order-1 lg:order-2 space-y-6"
          >
            <div>
              <p className="section-label">About Me</p>
              <h2 className="section-heading">
                Frontend Engineer &<br />
                <span className="text-gradient-cyan">Architecture Enthusiast</span>
              </h2>
            </div>

            <p className="text-slate-400 leading-relaxed text-base">
              {personal.about}
            </p>

            <p className="text-slate-500 leading-relaxed text-sm">
              I take pride in writing code that is not just functional but structured, maintainable, and built to last. From configuring entity managers and layout builders to wiring up complex workflow engines — I enjoy solving real product problems at the frontend level.
            </p>

            {/* Highlight pills */}
            <div className="flex flex-wrap gap-3">
              {highlights.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-4 py-2 glass-card border-white/[0.08] rounded-xl"
                >
                  <Icon className="w-4 h-4 text-cyan-400" />
                  <div>
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="text-sm font-medium text-slate-200">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Avatar placeholder with initials */}
            <div className="flex items-center gap-4 pt-2">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center">
                <User className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <p className="font-semibold text-white">{personal.name}</p>
                <p className="text-sm text-slate-500">{personal.title}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
