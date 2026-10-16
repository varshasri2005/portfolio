'use client';

import { useState } from 'react';
import {
  Code,
  Server,
  Database,
  Wrench,
  CheckCircle,
  Sparkles,
  Layers,
} from 'lucide-react';
import { skillCategories } from '@/data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Skills', icon: Layers },
    { id: 'frontend', name: 'Frontend', icon: Code },
    { id: 'backend', name: 'Backend', icon: Server },
    { id: 'database', name: 'Databases', icon: Database },
    { id: 'tools', name: 'Tools & DevOps', icon: Wrench },
    { id: 'testing', name: 'Quality & Testing', icon: CheckCircle },
  ];

  const displayedCategories =
    activeTab === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 border border-purple-200 text-purple-700 mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>Technical Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Skills & <span className="text-purple-600">Proficiencies</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            A comprehensive suite of modern frameworks, programming languages, database architectures, and developer tooling.
          </p>

          {/* Interactive Filter Tabs */}
          <div className="mt-8 flex items-center justify-center gap-2 flex-wrap">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#7c3aed] text-white shadow-md shadow-purple-600/25 scale-105'
                      : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700 border border-slate-200/80'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-purple-300 hover:shadow-[0_12px_30px_rgba(124,58,237,0.08)] transition-all duration-300 p-6 sm:p-7 rounded-3xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#7c3aed]" />
                    {category.name}
                  </h3>
                  <span className="text-[11px] font-mono text-slate-500 font-medium">
                    {category.skills.length} Techs
                  </span>
                </div>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Individual Skill Items */}
                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2 font-medium text-slate-800">
                          <span>{skill.name}</span>
                          {skill.tag && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-200 font-medium">
                              {skill.tag}
                            </span>
                          )}
                        </div>
                        <span className="font-mono text-purple-700 font-bold">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="w-full h-2 rounded-full bg-slate-100 border border-slate-200/60 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 transition-all duration-700 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Pill Summary */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 flex-wrap">
                {category.skills.map((s, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200/60 text-slate-700 font-medium"
                  >
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
