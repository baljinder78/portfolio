import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Menu, X } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../config/portfolio.config';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const { nav, personal, contact } = PORTFOLIO_CONFIG;

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#060c1a]/90 backdrop-blur-md border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                <Terminal className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="font-mono text-sm text-slate-300 group-hover:text-white transition-colors">
                <span className="text-cyan-400">~/</span>
                {personal.name.split(' ')[0].toLowerCase()}
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setActive(item.label)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    active === item.label
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-xs py-2"
              >
                GitHub
              </a>
              <a href="#contact" className="btn-primary text-xs py-2">
                Let's Talk
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-colors"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#060c1a]/95 backdrop-blur-md border-b border-white/[0.06] md:hidden"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="border-t border-white/[0.06] mt-2 pt-4 flex gap-3">
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost text-xs py-2 flex-1 text-center"
                >
                  GitHub
                </a>
                <a href="#contact" className="btn-primary text-xs py-2 flex-1 text-center">
                  Let's Talk
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
