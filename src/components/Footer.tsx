'use client';

import { ArrowUp, Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/SocialIcons';
import { personalInfo } from '@/data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/80 bg-slate-50/80 relative z-10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200/80">
          {/* Brand */}
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-[#7c3aed] flex items-center justify-center text-white font-bold text-lg shadow-md shadow-purple-600/25">
              V
            </div>
            <div>
              <div className="text-base font-bold text-slate-900 tracking-tight">
                Varshasri K
              </div>
              <p className="text-xs text-slate-500">
                Full Stack Developer • Kongu Engineering College
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex items-center gap-6 text-xs text-slate-600 font-medium flex-wrap justify-center">
            <a href="#about" className="hover:text-purple-700 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-purple-700 transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-purple-700 transition-colors">
              Projects
            </a>
            <a href="#experience" className="hover:text-purple-700 transition-colors">
              Experience
            </a>
            <a href="#education" className="hover:text-purple-700 transition-colors">
              Education
            </a>
            <a href="#certifications" className="hover:text-purple-700 transition-colors">
              Certifications
            </a>
            <a href="#resume" className="hover:text-purple-700 transition-colors">
              Resume
            </a>
            <a href="#contact" className="hover:text-purple-700 transition-colors">
              Contact
            </a>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white hover:bg-slate-200/80 text-slate-700 hover:text-slate-900 border border-slate-200 transition-colors shadow-sm"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white hover:bg-slate-200/80 text-slate-700 hover:text-slate-900 border border-slate-200 transition-colors shadow-sm"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.social.email}
              className="p-2.5 rounded-xl bg-white hover:bg-slate-200/80 text-slate-700 hover:text-slate-900 border border-slate-200 transition-colors shadow-sm"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-purple-100 hover:bg-purple-200 text-purple-700 border border-purple-200 transition-colors cursor-pointer shadow-sm"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <div>
            © 2026 Varshasri K. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-purple-600 fill-purple-600" /> using Next.js & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}
