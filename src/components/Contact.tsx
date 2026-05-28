import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Send, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons';
import { PORTFOLIO_CONFIG } from '../config/portfolio.config';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { contact, personal } = PORTFOLIO_CONFIG;

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Static form — connect to Formspree / EmailJS / backend as needed
    setSubmitted(true);
  };

  const links = [
    {
      icon: Mail,
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10 border-cyan-500/20',
    },
    {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      value: 'baljinder-singh',
      href: contact.linkedin,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10 border-blue-500/20',
    },
    {
      icon: GithubIcon,
      label: 'GitHub',
      value: 'baljinder78',
      href: contact.github,
      color: 'text-violet-400',
      bg: 'bg-violet-500/10 border-violet-500/20',
    },
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-cyan-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label">Get in Touch</p>
          <h2 className="section-heading">
            Let's <span className="text-gradient-cyan">Connect</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-lg mx-auto">
            Open to senior frontend roles, freelance projects, and collaboration on interesting problems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — contact links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Available for opportunities</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Whether you have a role in mind, a project to collaborate on, or just want to say hi — my inbox is always open.
              </p>
            </div>

            <div className="space-y-3">
              {links.map(({ icon: Icon, label, value, href, color, bg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass-card border border-white/[0.06] hover:border-white/10 group transition-all duration-200"
                >
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${bg}`}>
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="text-sm font-medium text-slate-200 truncate">{value}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition-colors" />
                </a>
              ))}
            </div>

            {/* Location / response time */}
            <div className="glass-card border border-white/[0.06] p-4">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Based in <strong className="text-slate-200">{personal.location}</strong> · Responds within 24 hours</span>
              </div>
            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            {submitted ? (
              <div className="glass-card border border-emerald-500/20 p-10 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto">
                  <Send className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-white font-bold text-lg">Message Sent!</h3>
                <p className="text-slate-400 text-sm">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-ghost text-sm"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card border border-white/[0.08] p-7 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-500">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 bg-white/[0.03] border border-white/[0.08] rounded-lg text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/40 focus:bg-white/[0.05] transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-500">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full px-4 py-2.5 bg-white/[0.03] border border-white/[0.08] rounded-lg text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/40 focus:bg-white/[0.05] transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-500">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Job opportunity / Collaboration / Just saying hi"
                    className="w-full px-4 py-2.5 bg-white/[0.03] border border-white/[0.08] rounded-lg text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/40 focus:bg-white/[0.05] transition-all duration-200"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-500">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or role..."
                    className="w-full px-4 py-2.5 bg-white/[0.03] border border-white/[0.08] rounded-lg text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/40 focus:bg-white/[0.05] transition-all duration-200 resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </button>

                <p className="text-center text-xs text-slate-600 font-mono">
                  Form is static. Connect to Formspree / EmailJS for live delivery.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
