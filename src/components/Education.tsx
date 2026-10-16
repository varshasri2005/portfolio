'use client';

import {
  Calendar,
  MapPin,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { education } from '@/data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 border border-purple-200 text-purple-700 mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Education <span className="text-purple-600">& Qualifications</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            A solid academic foundation in computer science, software engineering, and mathematical problem-solving.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative border-l-2 border-purple-200 ml-4 sm:ml-32 md:ml-40 space-y-12">
          {education.map((edu) => (
            <div key={edu.id} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#7c3aed] border-2 border-white shadow-md shadow-purple-600/40 group-hover:scale-125 transition-transform" />

              {/* Side Date Badge on Large Screens */}
              <div className="sm:absolute sm:-left-36 md:-left-44 top-0.5 hidden sm:flex flex-col items-end text-right pr-4">
                <span className="text-xs font-bold text-purple-700 font-mono">
                  {edu.period}
                </span>
                <span className="text-[11px] text-slate-500 font-semibold">
                  {edu.score}
                </span>
              </div>

              {/* Education Card */}
              <div className="bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(124,58,237,0.08)] hover:border-purple-300 p-6 sm:p-8 rounded-3xl transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                      {edu.degree}
                    </h3>
                    <div className="text-sm sm:text-base font-semibold text-purple-700 mt-0.5">
                      {edu.institution}
                    </div>
                  </div>

                  <div className="px-3.5 py-1 rounded-full text-xs font-bold bg-purple-50 border border-purple-200 text-purple-700 font-mono">
                    {edu.score}
                  </div>
                </div>

                {/* Mobile Meta */}
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 sm:hidden">
                  <span className="flex items-center gap-1 font-mono text-purple-700 font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {edu.location}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500 mb-4 hidden sm:flex">
                  <MapPin className="w-3.5 h-3.5 text-purple-600" />
                  <span>{edu.location}</span>
                </div>

                {edu.highlights && (
                  <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                    {edu.highlights}
                  </p>
                )}

                {/* Coursework Tags if present */}
                {edu.coursework && edu.coursework.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <div className="text-xs font-semibold text-purple-800 mb-2 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-purple-600" />
                      <span>Key Coursework & Domains:</span>
                    </div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {edu.coursework.map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 font-medium"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
