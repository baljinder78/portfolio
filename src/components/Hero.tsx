import { useEffect, useState, useRef } from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolio.config';

const CURSOR = '▌';

function TerminalPanel() {
  const { terminalLines } = PORTFOLIO_CONFIG;
  // Only completed lines — never includes the active line
  const [completedLines, setCompletedLines] = useState<
    { command: string; output: string }[]
  >([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'output' | 'pause'>('typing');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentLine >= terminalLines.length) return;
    const line = terminalLines[currentLine];

    if (phase === 'typing') {
      if (currentChar < line.command.length) {
        const t = setTimeout(() => setCurrentChar((c) => c + 1), 60);
        return () => clearTimeout(t);
      }
      // Finished typing — show output after brief pause
      const t = setTimeout(() => setPhase('output'), 280);
      return () => clearTimeout(t);
    }

    if (phase === 'output') {
      // Push completed line into the list, then pause before next
      setCompletedLines((prev) => [...prev, { command: line.command, output: line.output }]);
      const t = setTimeout(() => setPhase('pause'), 180);
      return () => clearTimeout(t);
    }

    if (phase === 'pause') {
      const t = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
        setPhase('typing');
      }, 560);
      return () => clearTimeout(t);
    }
  }, [currentLine, currentChar, phase, terminalLines]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [completedLines, currentChar]);

  const typedSoFar = currentLine < terminalLines.length
    ? terminalLines[currentLine].command.slice(0, currentChar)
    : '';

  const isFinished = currentLine >= terminalLines.length;

  return (
    <div className="glass-card border-white/[0.08] overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/[0.06]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="ml-2 text-xs font-mono text-slate-500">baljinder@portfolio ~</span>
      </div>

      {/* Body */}
      <div
        ref={containerRef}
        className="p-4 font-mono text-xs md:text-sm h-56 overflow-y-auto no-scrollbar"
      >
        {/* Completed lines */}
        {completedLines.map((line, i) => (
          <div key={i} className="mb-2">
            <div className="flex items-center gap-2">
              <span className="text-cyan-400">❯</span>
              <span className="text-slate-300">{line.command}</span>
            </div>
            <div className="ml-4 mt-0.5 text-emerald-400/80">{line.output}</div>
          </div>
        ))}

        {/* Active typing line — only shown while actually typing (not during output/pause phases) */}
        {!isFinished && phase === 'typing' && (
          <div className="flex items-center gap-2">
            <span className="text-cyan-400">❯</span>
            <span className="text-slate-300">
              {typedSoFar}
              {phase === 'typing' && (
                <span className="text-cyan-400 animate-pulse">{CURSOR}</span>
              )}
            </span>
          </div>
        )}

        {/* Idle cursor when all lines done */}
        {isFinished && (
          <div className="flex items-center gap-2">
            <span className="text-cyan-400">❯</span>
            <span className="text-cyan-400 animate-pulse">{CURSOR}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  const { personal, contact } = PORTFOLIO_CONFIG;

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-100" />

      {/* Radial glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 order-last lg:order-first"
          >
            {/* Status badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {personal.availability}
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants} className="space-y-2">
              <p className="section-label">Hello, I'm</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="text-white">{personal.name.split(' ')[0]}</span>{' '}
                <span className="text-gradient-cyan">{personal.name.split(' ')[1]}</span>
              </h1>
            </motion.div>

            {/* Title */}
            <motion.div variants={itemVariants}>
              <p className="text-xl font-medium text-slate-300">
                {personal.title}
                <span className="text-cyan-500/50 mx-3">|</span>
                <span className="text-slate-400">{personal.subtitle}</span>
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.div variants={itemVariants}>
              <p className="text-lg text-slate-300 leading-relaxed font-light max-w-xl">
                {personal.tagline}
              </p>
            </motion.div>

            {/* Intro */}
            <motion.div variants={itemVariants}>
              <p className="text-slate-500 leading-relaxed max-w-xl">
                {personal.intro}
              </p>
            </motion.div>

            {/* CTA buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-2">
              <a href={contact.resumeUrl} className="btn-primary flex items-center gap-2">
                <Download className="w-4 h-4" />
                View Resume
              </a>
              <a href="#projects" className="btn-ghost flex items-center gap-2">
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="btn-ghost flex items-center gap-2">
                Contact Me
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={itemVariants}
              className="flex gap-8 pt-4 border-t border-white/[0.06]"
            >
              {PORTFOLIO_CONFIG.stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-slate-500">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="space-y-4 order-first lg:order-last"
          >
            <TerminalPanel />

            {/* Tech stack floating chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="flex flex-wrap gap-2"
            >
              {['React', 'TypeScript', 'Redux', 'Nx', 'Tailwind', 'Vite'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono bg-white/[0.03] border border-white/[0.08] rounded-md text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono text-slate-600">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-4 h-4 text-slate-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
