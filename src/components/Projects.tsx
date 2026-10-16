'use client';

import { useState } from 'react';
import {
  ExternalLink,
  Sparkles,
  Layers,
  CheckCircle2,
  X,
  Code2,
  Database,
  ArrowUpRight,
} from 'lucide-react';
import { GithubIcon } from '@/components/SocialIcons';
import { projects } from '@/data/portfolioData';
import { Project } from '@/types/portfolio';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'All' | 'Full Stack' | 'AI & Automation' | 'Frontend' | 'Web App'>('All');

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter);

  const featured = projects.find((p) => p.isFeatured);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 border border-purple-200 text-purple-700 mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>Engineered Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Featured <span className="text-purple-600">Projects</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Real-world applications engineered for operational efficiency, responsive interactivity, and scalable database management.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex items-center justify-center gap-2 flex-wrap">
            {(['All', 'Full Stack', 'AI & Automation', 'Frontend', 'Web App'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  filter === cat
                    ? 'bg-[#7c3aed] text-white shadow-md shadow-purple-600/25 scale-105'
                    : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700 border border-slate-200/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ================= HERO SHOWCASE: TEXMART (If matching filter) ================= */}
        {featured && (filter === 'All' || filter === 'Full Stack') && (
          <div className="mb-16">
            <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-white via-purple-50/50 to-slate-50 border-2 border-purple-200 shadow-[0_15px_40px_rgba(124,58,237,0.08)] overflow-hidden group hover:border-purple-300 transition-all duration-300">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left side: Project Meta and Highlights */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100 text-purple-800 border border-purple-200">
                        ⭐ Flagship Enterprise Project
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Full Stack System
                      </span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                      {featured.title}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-purple-700 mt-1 mb-4">
                      {featured.subtitle}
                    </p>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                      {featured.description}
                    </p>

                    {/* Key Capabilities Checklist */}
                    <div className="space-y-2 mb-6">
                      {featured.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="flex items-center gap-2 flex-wrap mb-8">
                      {featured.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-700 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 flex-wrap">
                    <button
                      onClick={() => setSelectedProject(featured)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold text-xs sm:text-sm shadow-md shadow-purple-600/25 hover:scale-[1.02] transition-all cursor-pointer"
                    >
                      <span>Explore System Architecture</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    {featured.githubUrl && (
                      <a
                        href={featured.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 text-xs sm:text-sm font-semibold shadow-sm transition-all hover:scale-[1.02]"
                      >
                        <GithubIcon className="w-4 h-4 text-purple-600" />
                        <span>View Repository</span>
                      </a>
                    )}

                    {featured.liveUrl && featured.liveUrl !== '#' && (
                      <a
                        href={featured.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 text-xs sm:text-sm font-semibold transition-all hover:scale-[1.02]"
                      >
                        <ExternalLink className="w-4 h-4 text-blue-600" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right side: Sleek Terminal Dashboard Showcase */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl p-4 bg-slate-900 border border-slate-800 shadow-xl text-slate-100">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs font-mono text-purple-300">
                      <span className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                        texmart_core_api:v2.4
                      </span>
                      <span className="text-slate-400 text-[10px]">POSTGRES_CONNECTED</span>
                    </div>

                    <div className="space-y-3 font-mono text-[11px] text-slate-300">
                      <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800">
                        <div className="text-purple-400 font-bold mb-1">▶ INVENTORY_MODULE</div>
                        <div className="text-slate-400">Total Fabric Rolls: <span className="text-white font-semibold">1,480 units</span></div>
                        <div className="text-slate-400">Low Stock Alert: <span className="text-amber-400 font-semibold">Cotton Grey GSM-220</span></div>
                      </div>

                      <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800">
                        <div className="text-blue-400 font-bold mb-1">▶ VENDOR_SUPPLY_CHAIN</div>
                        <div className="text-slate-400">Active Mill Suppliers: <span className="text-white font-semibold">18 Verified</span></div>
                        <div className="text-slate-400">Pending Purchase Invoices: <span className="text-emerald-400 font-semibold">4 Dispatches</span></div>
                      </div>

                      <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800">
                        <div className="text-cyan-400 font-bold mb-1">▶ REST_API_ENDPOINTS</div>
                        <div className="text-slate-400">GET /api/v1/inventory/summary <span className="text-emerald-400">200 OK (18ms)</span></div>
                        <div className="text-slate-400">POST /api/v1/orders/dispatch <span className="text-emerald-400">201 CREATED</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= ADDITIONAL PROJECTS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects
            .filter((p) => !p.isFeatured || filter !== 'All')
            .map((proj) => (
              <div
                key={proj.id}
                className="bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(124,58,237,0.08)] hover:border-purple-300 transition-all duration-300 p-6 sm:p-7 rounded-3xl flex flex-col justify-between group"
              >
                <div>
                  {/* Category Pill & Category Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-purple-50 border border-purple-200 text-purple-700">
                      {proj.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {proj.id}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                    {proj.title}
                  </h4>
                  <p className="text-xs font-semibold text-purple-600 mt-1 mb-3">
                    {proj.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {proj.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 mb-6">
                    {proj.features.slice(0, 2).map((f, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <span className="text-purple-600 font-bold">•</span>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex items-center gap-1.5 flex-wrap mb-6">
                    {proj.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700 font-mono font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="text-xs font-semibold text-purple-700 hover:text-purple-900 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-100 hover:bg-purple-100 text-slate-700 hover:text-purple-700 border border-slate-200 transition-colors"
                        aria-label={`View ${proj.title} GitHub repo`}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {proj.liveUrl && proj.liveUrl !== '#' && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-700 border border-slate-200 transition-colors"
                        aria-label={`View ${proj.title} Live Demo`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* ================= INTERACTIVE PROJECT DETAILS MODAL ================= */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-purple-200 p-6 sm:p-8 shadow-2xl">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 border border-slate-200 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 border border-purple-200 text-purple-700">
                  {selectedProject.category}
                </span>
                {selectedProject.isFeatured && (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 border border-amber-200 text-amber-800">
                    Featured Project
                  </span>
                )}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                {selectedProject.title}
              </h3>
              <p className="text-sm font-semibold text-purple-700 mb-4">
                {selectedProject.subtitle}
              </p>

              <div className="text-sm text-slate-600 leading-relaxed space-y-4 mb-6">
                <p>{selectedProject.longDescription || selectedProject.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-purple-800 mb-3">
                  Key System Capabilities & Features
                </h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-purple-800 mb-3">
                  Technologies Utilized
                </h4>
                <div className="flex items-center gap-2 flex-wrap">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 border border-slate-200 text-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons in Modal */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-semibold transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-purple-600" />
                    <span>View Repository</span>
                  </a>
                )}
                {selectedProject.liveUrl && selectedProject.liveUrl !== '#' && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-xs font-semibold shadow-md shadow-purple-600/25 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
