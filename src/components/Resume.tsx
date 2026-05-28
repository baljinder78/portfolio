import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download, FileText, Eye } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolio.config';

export default function Resume() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { contact, personal } = PORTFOLIO_CONFIG;

  return (
    <section id="resume" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <p className="section-label">Career Docs</p>
            <h2 className="section-heading">
              My <span className="text-gradient-cyan">Resume</span>
            </h2>
            <p className="mt-4 text-slate-500 max-w-lg mx-auto">
              A detailed summary of my work experience, technical skills, and engineering contributions.
            </p>
          </div>

          {/* Resume card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card border border-white/[0.08] p-8 max-w-2xl mx-auto hover:border-cyan-500/20 transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]"
          >
            {/* Decorative resume preview */}
            <div className="flex items-start gap-6 mb-8">
              <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <FileText className="w-7 h-7 text-cyan-400" />
              </div>
              <div className="text-left space-y-1">
                <h3 className="text-white font-bold text-lg">{personal.name}</h3>
                <p className="text-cyan-400 text-sm">{personal.title}</p>
                <p className="text-slate-500 text-xs font-mono">{personal.yearsOfExperience}+ years · React · TypeScript · Frontend Architecture</p>
              </div>
            </div>

            {/* Mock resume lines */}
            <div className="space-y-2 mb-8 opacity-40">
              {[
                { w: 'w-full', h: 'h-2' },
                { w: 'w-4/5', h: 'h-2' },
                { w: 'w-full', h: 'h-2' },
                { w: 'w-3/5', h: 'h-2' },
              ].map((line, i) => (
                <div key={i} className={`${line.h} ${line.w} bg-gradient-to-r from-slate-600 to-transparent rounded`} />
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={contact.resumeUrl}
                download
                className="btn-primary flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <a
                href={contact.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost flex items-center justify-center gap-2"
              >
                <Eye className="w-4 h-4" />
                View Online
              </a>
            </div>
          </motion.div>

          {/* Note */}
          <p className="text-xs font-mono text-slate-600">
            Available for senior roles · Frontend / Full-stack · Remote · Hybrid · On-site
          </p>
        </motion.div>
      </div>
    </section>
  );
}
