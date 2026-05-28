import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, AlertCircle, Lightbulb, Code2, Star } from 'lucide-react';
import { GithubIcon } from './icons/BrandIcons';
import { PORTFOLIO_CONFIG } from '../config/portfolio.config';

const colorMap: Record<string, { border: string; text: string; bg: string; tag: string }> = {
  cyan: {
    border: 'border-cyan-500/30',
    text: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    tag: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300',
  },
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { projects } = PORTFOLIO_CONFIG;

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label">Personal Work</p>
          <h2 className="section-heading">
            Featured <span className="text-gradient-violet">Project</span>
          </h2>
        </motion.div>

        {/* Project cards */}
        {projects.map((project, index) => {
          const colors = colorMap[project.color] || colorMap.cyan;

          return (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              className={`glass-card border ${colors.border} overflow-hidden`}
            >
              {/* Project header bar */}
              <div className={`px-7 py-4 ${colors.bg} border-b ${colors.border} flex items-center justify-between`}>
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${colors.text.replace('text', 'bg')}`} />
                  <span className="font-mono text-sm text-white font-medium">{project.name}</span>
                  <span className="text-xs text-slate-500 font-mono">{project.status}</span>
                </div>
                <div className="flex items-center gap-1 text-slate-500">
                  <Star className="w-3.5 h-3.5" />
                  <span className="text-xs font-mono">Featured</span>
                </div>
              </div>

              <div className="p-7">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left col */}
                  <div className="space-y-5">
                    {/* Tagline */}
                    <div>
                      <h3 className={`text-2xl font-bold text-white mb-1`}>{project.name}</h3>
                      <p className={`text-sm font-medium ${colors.text}`}>{project.tagline}</p>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>

                    {/* Problem / Solution */}
                    <div className="space-y-3">
                      <div className="flex gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                        <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-semibold text-rose-400 mb-1">Problem</p>
                          <p className="text-xs text-slate-400 leading-relaxed">{project.problem}</p>
                        </div>
                      </div>
                      <div className="flex gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                        <Lightbulb className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-semibold text-emerald-400 mb-1">Solution</p>
                          <p className="text-xs text-slate-400 leading-relaxed">{project.solution}</p>
                        </div>
                      </div>
                    </div>

                    {/* CTA buttons */}
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/[0.05] border border-white/10 text-sm text-slate-300 hover:text-white hover:border-white/20 transition-all duration-200"
                      >
                        <GithubIcon className="w-4 h-4" />
                        GitHub
                      </a>
                      <a
                        href={project.demo}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/[0.05] border border-white/10 text-sm text-slate-300 hover:text-white hover:border-white/20 transition-all duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </div>
                  </div>

                  {/* Right col */}
                  <div className="space-y-5">
                    {/* Tech stack */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Code2 className="w-4 h-4 text-slate-500" />
                        <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Tech Stack</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span key={tech} className={`tag-chip font-mono text-xs ${colors.tag}`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Star className="w-4 h-4 text-slate-500" />
                        <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Key Features</span>
                      </div>
                      <ul className="space-y-2">
                        {project.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-2 text-sm text-slate-400">
                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${colors.bg.replace('bg', 'bg').replace('/10', '')} ${colors.text.replace('text', 'bg')}`} />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
