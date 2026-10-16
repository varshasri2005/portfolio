'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Download, Send } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Resume', href: '#resume' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = ['home', ...NAV_LINKS.map((link) => link.href.substring(1))];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo (Circle with Letter V + Varshasri text matching Brooklyn template) */}
          <a
            href="#home"
            className="group flex items-center gap-3 text-xl font-bold tracking-tight text-slate-900 transition-all"
          >
            <div className="w-10 h-10 rounded-full bg-[#7c3aed] flex items-center justify-center text-white font-bold text-lg shadow-md shadow-purple-600/25 group-hover:scale-105 transition-transform">
              V
            </div>
            <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-[#7c3aed] transition-colors">
              Varshasri
            </span>
          </a>

          {/* Desktop Navigation (Center Pill Links) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 xl:px-4 py-1.5 xl:py-2 text-xs xl:text-sm font-medium rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-[#7c3aed] text-white shadow-md shadow-purple-600/20'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA (Contact Button matching Brooklyn template) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/Varshasri_K_Resume.pdf"
              download="Varshasri_K_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all"
            >
              <Download className="w-3.5 h-3.5 text-purple-600" />
              <span>Resume PDF</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold rounded-xl bg-[#7c3aed] hover:bg-[#6d28d9] text-white shadow-lg shadow-purple-600/25 hover:shadow-purple-600/35 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="#contact"
              className="px-3.5 py-1.5 rounded-lg bg-[#7c3aed] text-white text-xs font-semibold sm:hidden"
            >
              Contact
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-200/80 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 px-4 py-4 mx-4 rounded-2xl bg-white/95 backdrop-blur-2xl border border-slate-200 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeSection === link.href.substring(1)
                    ? 'bg-[#7c3aed] text-white font-semibold'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="/Varshasri_K_Resume.pdf"
                download="Varshasri_K_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-100 text-slate-800 hover:bg-slate-200"
              >
                <Download className="w-4 h-4 text-purple-600" />
                Download Resume (PDF)
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#7c3aed] text-white shadow-md shadow-purple-600/30"
              >
                <Send className="w-4 h-4" />
                Contact Me
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
