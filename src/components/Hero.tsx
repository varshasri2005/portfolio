'use client';

import Image from 'next/image';
import {
  ArrowRight,
  Mail,
  FileText,
  MapPin,
  GraduationCap,
  Code2,
  Database,
  Cpu,
  Sparkles,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/SocialIcons';
import { personalInfo } from '@/data/portfolioData';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 sm:pt-28 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column: Intro & Call-to-Actions (7 cols on tablet/desktop) */}
        <div className="md:col-span-7 flex flex-col items-start text-left z-10">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/80 text-purple-700 text-xs font-semibold mb-4 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{personalInfo.status}</span>
          </div>

          {/* Main Headline (Matching Brooklyn: "Hello, I'm Brooklyn Gilbert" -> "Hello, I'm Varshasri K") */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-slate-900">
            Hello, I&apos;m <br />
            <span className="text-slate-950">
              Varshasri K
            </span>
          </h1>

          {/* Subtitle with highlighted inline keywords matching template */}
          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
            I&apos;m a{' '}
            <span className="highlight-pink font-semibold text-slate-900">
              Full Stack Developer
            </span>{' '}
            and{' '}
            <span className="highlight-purple font-semibold text-slate-900">
              Software Systems Scholar
            </span>{' '}
            at Kongu Engineering College. I strive to build immersive, scalable web applications and intelligent systems through carefully crafted code and user-centric design.
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
            {/* Vibrant Purple "Say Hello!" Button matching template */}
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold text-sm shadow-md shadow-purple-600/25 hover:shadow-purple-600/35 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Mail className="w-4 h-4" />
              <span>Say Hello!</span>
            </a>

            <a
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200/90 text-slate-800 border border-slate-200/80 font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </a>

            <a
              href={personalInfo.resumePdfPath}
              download="Varshasri_K_Resume.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 text-sm font-semibold transition-colors"
            >
              <FileText className="w-4 h-4 text-purple-600" />
              <span>Resume PDF</span>
            </a>
          </div>

          {/* Bottom Metric Cards Row (Matching the 3-box container in Brooklyn template) */}
          <div className="mt-8 w-full max-w-xl">
            <div className="bg-[#f5f3ff] border border-purple-200/70 rounded-2xl p-3.5 sm:p-4 grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3 divide-x divide-purple-200/60 shadow-sm">
              <div className="text-center sm:text-left px-2 sm:px-3">
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  10+
                </div>
                <div className="text-[10px] sm:text-[11px] font-medium text-slate-500 mt-0.5">
                  Projects
                </div>
              </div>

              <div className="text-center sm:text-left px-2 sm:px-3">
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  4+
                </div>
                <div className="text-[10px] sm:text-[11px] font-medium text-slate-500 mt-0.5">
                  Internships
                </div>
              </div>

              <div className="text-center sm:text-left px-2 sm:px-3">
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  6.80
                </div>
                <div className="text-[10px] sm:text-[11px] font-medium text-slate-500 mt-0.5">
                  CGPA (M.Sc)
                </div>
              </div>

              <div className="hidden sm:block text-center sm:text-left px-3">
                <div className="text-xl sm:text-2xl font-extrabold text-[#7c3aed] tracking-tight">
                  8+
                </div>
                <div className="text-[10px] sm:text-[11px] font-medium text-slate-500 mt-0.5">
                  Certifications
                </div>
              </div>
            </div>
          </div>

          {/* Social Quick Links & Meta Info */}
          <div className="mt-6 pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-4 text-xs text-slate-600 w-full">
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-100 hover:bg-purple-100 text-slate-700 hover:text-purple-700 border border-slate-200 transition-all hover:scale-110"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-700 border border-slate-200 transition-all hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.social.email}
                className="p-2 rounded-xl bg-slate-100 hover:bg-purple-100 text-slate-700 hover:text-purple-700 border border-slate-200 transition-all hover:scale-110"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-purple-600" />
              <span>{personalInfo.location}</span>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500">
              <GraduationCap className="w-3.5 h-3.5 text-purple-600" />
              <span>Roll No: 23ISR060</span>
            </div>
          </div>
        </div>

        {/* Right Column: Sleek Executive Profile Card (5 cols on tablet/desktop) */}
        <div className="md:col-span-5 flex items-center justify-center relative">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute w-72 h-72 bg-gradient-to-tr from-purple-200/50 via-pink-200/30 to-indigo-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

          {/* Central Executive Card Container */}
          <div className="relative w-full max-w-[340px] sm:max-w-[360px] p-5 sm:p-6 rounded-[28px] bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_20px_50px_rgba(124,58,237,0.08),0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_25px_60px_rgba(124,58,237,0.12)] text-center">
            {/* Top Availability Status */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80 mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Full-Stack Roles</span>
            </div>

            {/* Elegant Portrait Frame with Subtle Luxury Gradient Border */}
            <div className="mx-auto w-36 h-44 sm:w-40 sm:h-48 p-1 rounded-2xl bg-gradient-to-b from-purple-300/60 via-purple-100/40 to-pink-300/50 shadow-md ring-1 ring-slate-900/5">
              <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-slate-100">
                <Image
                  src={personalInfo.profilePhotoPath}
                  alt={personalInfo.name}
                  fill
                  sizes="(max-width: 640px) 160px, 180px"
                  className="object-cover object-top hover:scale-[1.03] transition-transform duration-500"
                  priority
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="mt-4">
              <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
                {personalInfo.name}
              </h2>
              <p className="text-xs font-semibold text-[#7c3aed] mt-0.5">
                Full Stack Developer & AI Engineer
              </p>
              <p className="text-[11px] text-slate-500 mt-1">
                Kongu Engineering College • Roll No: 23ISR060
              </p>
            </div>

            {/* Executive Highlights Mini Grid */}
            <div className="grid grid-cols-2 gap-2 mt-4 pt-3.5 border-t border-slate-100 text-left">
              <div className="p-2.5 rounded-xl bg-purple-50/60 border border-purple-100/80">
                <div className="text-[10px] font-semibold text-purple-700 uppercase tracking-wider">
                  Degree
                </div>
                <div className="text-xs font-bold text-slate-900 mt-0.5">
                  M.Sc. Software
                </div>
                <div className="text-[10px] text-slate-500">
                  5-Yr Integrated
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-purple-50/60 border border-purple-100/80">
                <div className="text-[10px] font-semibold text-purple-700 uppercase tracking-wider">
                  Certifications
                </div>
                <div className="text-xs font-bold text-slate-900 mt-0.5">
                  8+ Verified
                </div>
                <div className="text-[10px] text-slate-500">
                  Cloud & Full Stack
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
