'use client';

import {
  Calendar,
  Sparkles,
  MapPin,
  CheckCircle2,
  Award,
} from 'lucide-react';
import { internships } from '@/data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 border border-purple-200 text-purple-700 mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>Professional Growth</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Internship <span className="text-purple-600">Experience</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Real-world full-stack and web engineering internships delivering production features, responsive UIs, and robust REST APIs.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-purple-200 ml-4 sm:ml-32 md:ml-40 space-y-12">
          {internships.map((intern) => (
            <div key={intern.id} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#7c3aed] border-2 border-white shadow-md shadow-purple-600/40 group-hover:scale-125 transition-transform" />

              {/* Side Date Badge on Large Screens */}
              <div className="sm:absolute sm:-left-36 md:-left-44 top-0.5 hidden sm:flex flex-col items-end text-right pr-4">
                <span className="text-xs font-bold text-purple-700 font-mono">
                  {intern.duration}
                </span>
                <span className="text-[11px] text-slate-500 font-medium">
                  {intern.location || 'Remote'}
                </span>
              </div>

              {/* Experience Card */}
              <div className="bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(124,58,237,0.08)] hover:border-purple-300 p-6 sm:p-8 rounded-3xl transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                      {intern.role}
                    </h3>
                    <span className="text-slate-400 font-semibold">•</span>
                    <span className="text-base sm:text-lg font-bold text-purple-600">
                      {intern.company}
                    </span>
                  </div>

                  {intern.badge && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 border border-purple-200 text-purple-700">
                      <Award className="w-3.5 h-3.5 text-purple-600" />
                      {intern.badge}
                    </span>
                  )}
                </div>

                {/* Mobile Duration and Program */}
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 sm:hidden">
                  <span className="flex items-center gap-1 font-mono text-purple-700 font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    {intern.duration}
                  </span>
                  {intern.location && (
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {intern.location}
                    </span>
                  )}
                </div>

                {intern.program && (
                  <div className="text-xs font-medium text-slate-500 mb-4 font-mono">
                    Program Domain: <span className="text-slate-800 font-semibold">{intern.program}</span>
                  </div>
                )}

                {/* Responsibilities */}
                <ul className="space-y-2.5 mb-6">
                  {intern.description.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Chips */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 flex-wrap">
                  <span className="text-xs text-slate-500 font-medium mr-1">Skills:</span>
                  {intern.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
