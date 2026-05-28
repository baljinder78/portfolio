import { Terminal, Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons';
import { PORTFOLIO_CONFIG } from '../config/portfolio.config';

export default function Footer() {
  const { personal, contact, nav } = PORTFOLIO_CONFIG;

  const socials = [
    { icon: GithubIcon, href: contact.github, label: 'GitHub' },
    { icon: LinkedinIcon, href: contact.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${contact.email}`, label: 'Email' },
  ];

  return (
    <footer className="relative border-t border-white/[0.06] py-12 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center mb-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
              <Terminal className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{personal.name}</p>
              <p className="text-xs text-slate-500">{personal.title}</p>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-5 gap-y-2 justify-center">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs text-slate-500 hover:text-cyan-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3 md:justify-end">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600 font-mono">
            © {new Date().getFullYear()} {personal.name} · Built with React + TypeScript + Tailwind
          </p>
          <p className="text-xs text-slate-600 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-rose-500/60" /> and a lot of{' '}
            <span className="font-mono text-cyan-600">TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
