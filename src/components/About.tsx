'use client';

import {
  Code,
  Server,
  Database,
  Trophy,
  Brain,
  CheckCircle2,
  Sparkles,
  Terminal,
} from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: Code,
      title: 'Frontend Engineering',
      description:
        'Crafting responsive, accessible, and ultra-smooth user interfaces using React.js, Next.js 16, and modern Tailwind CSS.',
      bg: 'bg-purple-50/60',
      border: 'border-purple-200/70',
      iconColor: 'text-purple-600',
    },
    {
      icon: Server,
      title: 'Backend Systems',
      description:
        'Architecting robust RESTful APIs with Python FastAPI and Node.js, ensuring performant asynchronous data processing.',
      bg: 'bg-blue-50/60',
      border: 'border-blue-200/70',
      iconColor: 'text-blue-600',
    },
    {
      icon: Database,
      title: 'Relational Databases',
      description:
        'Designing normalized schemas, indexing, and transactional workflows in PostgreSQL, MySQL, and document stores.',
      bg: 'bg-cyan-50/60',
      border: 'border-cyan-200/70',
      iconColor: 'text-cyan-600',
    },
    {
      icon: Brain,
      title: 'Problem Solving & Testing',
      description:
        'Applying structured algorithms, OOPs, and automated Selenium/API testing with NASSCOM 93% Gold accredited standards.',
      bg: 'bg-emerald-50/60',
      border: 'border-emerald-200/70',
      iconColor: 'text-emerald-600',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 border border-purple-200 text-purple-700 mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>Discover My Journey</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            About <span className="text-purple-600">Me</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Bridging elegant user-centric interfaces with robust backend infrastructure to build software that scales.
          </p>
        </div>

        {/* Narrative & Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Main Biography (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-6 sm:p-8 rounded-3xl relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="p-2.5 rounded-xl bg-purple-50 border border-purple-200 text-purple-600">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Full Stack Engineering Philosophy</h3>
                <p className="text-xs text-slate-500">M.Sc. Software Systems • Kongu Engineering College</p>
              </div>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                {personalInfo.bio}
              </p>
              <p>
                My journey began with deep curiosity for algorithmic structures and web mechanics, evolving through real-world internships at <strong className="text-slate-900 font-semibold">Qube AI Solution</strong>, <strong className="text-slate-900 font-semibold">Tamizhan Skills</strong>, <strong className="text-slate-900 font-semibold">Oasis Infobyte</strong>, and <strong className="text-slate-900 font-semibold">CODSOFT</strong>. I thrive on translating business logic into clean code, whether it involves architecting an end-to-end textile ERP system like <strong className="text-purple-700 font-semibold">TEXMART</strong>, optimizing complex database joins, or crafting smooth micro-interactions.
              </p>
              <p>
                Beyond standard development, I place high emphasis on engineering rigor, holding a <strong className="text-purple-700 font-semibold">93% Gold Category Certification</strong> in Testing Tools & API Testing from NASSCOM/MeitY and winning <strong className="text-purple-700 font-semibold">1st Prize in Technical Paper Presentation</strong> at CIT College.
              </p>
            </div>

            {/* Quick Core Strengths Checklist */}
            <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Full-Stack Architecture (Next.js & FastAPI)',
                'Relational Database Structuring (PostgreSQL)',
                'Automated API & Selenium Quality Testing',
                'Clean Code & Agile Sprint Methodologies',
              ].map((strength, index) => (
                <div key={index} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  <span>{strength}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats Grid (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {personalInfo.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-6 rounded-2xl flex flex-col justify-center items-center text-center group hover:border-purple-300 transition-all"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-purple-600 mb-2 group-hover:scale-105 transition-transform">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-600">
                  {metric.label}
                </div>
              </div>
            ))}

            {/* Academic Honor Box spanning both cols */}
            <div className="col-span-2 bg-[#f5f3ff] border border-purple-200/80 p-6 rounded-2xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-100 border border-amber-200 text-amber-700 flex-shrink-0">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Award-Winning Research & Execution</h4>
                  <p className="mt-1 text-xs text-slate-600 leading-normal">
                    Recognized with 1st Prize at CIT College Technical Symposium (₹3,000 Cash Prize) and 1st Place in departmental presentation at Kongu Engineering College.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Four Core Pillars of Expertise */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl border ${pillar.border} ${pillar.bg} shadow-sm group hover:-translate-y-1 transition-all duration-200`}
              >
                <div className={`p-3 rounded-xl bg-white border border-slate-200/80 w-fit mb-4 group-hover:scale-110 transition-transform ${pillar.iconColor}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">{pillar.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
