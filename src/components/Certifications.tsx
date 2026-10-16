'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import {
  Trophy,
  CheckCircle,
  Award,
  Sparkles,
  FileCheck2,
  ExternalLink,
  Layers,
  GraduationCap,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Maximize2,
} from 'lucide-react';
import { certifications, achievements } from '@/data/portfolioData';
import { Certification, Achievement } from '@/types/portfolio';

type ModalItem = (Certification | Achievement) & {
  type: 'cert' | 'achievement';
};

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [modalItem, setModalItem] = useState<ModalItem | null>(null);

  const categories = [
    'All',
    'National & Accredited',
    'Full Stack & Software',
    'Internship Honors',
    'Foundations & Databases',
  ];

  const filteredCertifications =
    activeCategory === 'All'
      ? certifications
      : certifications.filter((c) => c.category === activeCategory);

  // All viewable items combined for sequential navigation
  const allModalItems: ModalItem[] = [
    ...filteredCertifications.map((c) => ({ ...c, type: 'cert' as const })),
    ...achievements.map((a) => ({ ...a, type: 'achievement' as const })),
  ];

  const currentIdx = modalItem
    ? allModalItems.findIndex((item) => item.id === modalItem.id)
    : -1;

  const handleNext = useCallback(() => {
    if (currentIdx >= 0 && currentIdx < allModalItems.length - 1) {
      setModalItem(allModalItems[currentIdx + 1]);
    } else {
      setModalItem(allModalItems[0]);
    }
  }, [currentIdx, allModalItems]);

  const handlePrev = useCallback(() => {
    if (currentIdx > 0) {
      setModalItem(allModalItems[currentIdx - 1]);
    } else {
      setModalItem(allModalItems[allModalItems.length - 1]);
    }
  }, [currentIdx, allModalItems]);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalItem) return;
      if (e.key === 'Escape') {
        setModalItem(null);
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalItem, handleNext, handlePrev]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (modalItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [modalItem]);

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-50 border border-amber-200 text-amber-700 mb-3 shadow-sm">
            <Trophy className="w-3.5 h-3.5 text-amber-600" />
            <span>Honors & Accreditations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Certifications & <span className="text-purple-600">Achievements</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            A verified portfolio of 12 national accreditations, software engineering certifications, industry internship honors, and symposium prize research.
          </p>

          {/* Action Row: View All Button + Category Pills */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => setModalItem({ ...filteredCertifications[0], type: 'cert' })}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold text-xs sm:text-sm shadow-md shadow-purple-600/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Eye className="w-4 h-4" />
              <span>View All Certificates ({filteredCertifications.length})</span>
            </button>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="mt-5 flex items-center justify-center gap-2 flex-wrap">
            {categories.map((cat) => {
              const count =
                cat === 'All'
                  ? certifications.length
                  : certifications.filter((c) => c.category === cat).length;
              const isActive = activeCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-purple-100 text-purple-800 border border-purple-300 shadow-sm'
                      : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700 border border-slate-200/80'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive
                        ? 'bg-purple-200 text-purple-900 font-bold'
                        : 'bg-slate-200/80 text-slate-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Top Achievements Showcase (Research Paper Awards) */}
        <div className="mb-14">
          <div className="flex items-center justify-between gap-2 mb-6">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-600" />
              <h3 className="text-xl font-bold text-slate-900">
                Symposium Honors & Research Awards
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-medium hidden sm:inline">
              Click any award to view certificate
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achieve) => (
              <div
                key={achieve.id}
                onClick={() => setModalItem({ ...achieve, type: 'achievement' })}
                className="bg-white border border-amber-200/90 shadow-[0_4px_20px_rgba(245,158,11,0.06)] hover:shadow-[0_12px_30px_rgba(245,158,11,0.12)] hover:border-amber-400 p-6 rounded-3xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-start gap-3.5 mb-4">
                    <div className="p-3 rounded-2xl bg-amber-100 border border-amber-200 text-amber-700 flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Trophy className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200 mb-1">
                        {achieve.award}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                        {achieve.title}
                      </h4>
                      <p className="text-xs font-semibold text-slate-500 mt-0.5">
                        {achieve.organization}
                      </p>
                    </div>
                  </div>

                  {achieve.paperTitle && (
                    <div className="mb-3 p-3 rounded-xl bg-amber-50/60 border border-amber-100 text-xs font-medium text-amber-950 italic">
                      &quot;{achieve.paperTitle}&quot;
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {achieve.description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-amber-100 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-semibold text-amber-700 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    State Level Distinction
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-purple-700 group-hover:underline">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Accredited Certifications Grid */}
        <div>
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <FileCheck2 className="w-5 h-5 text-purple-600" />
              <h3 className="text-xl font-bold text-slate-900">
                Verified Certifications ({filteredCertifications.length})
              </h3>
            </div>
            <span className="text-xs font-semibold text-slate-500 hidden sm:inline">
              Click any card to inspect full certificate
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertifications.map((cert) => {
              const isGold = cert.badgeType === 'gold';
              const isElite = cert.badgeType === 'elite';

              return (
                <div
                  key={cert.id}
                  onClick={() => setModalItem({ ...cert, type: 'cert' })}
                  className="bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(124,58,237,0.08)] hover:border-purple-300 p-6 rounded-3xl flex flex-col justify-between group transition-all duration-300 cursor-pointer"
                >
                  <div>
                    {/* Header Badges */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      {isGold ? (
                        <span className="px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wide bg-amber-50 text-amber-700 border border-amber-200">
                          🏆 GOLD (93.00%)
                        </span>
                      ) : isElite ? (
                        <span className="px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wide bg-blue-50 text-blue-700 border border-blue-200">
                          ⭐ ELITE (68.00%)
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-purple-50 text-purple-700 border border-purple-200">
                          {cert.grade || 'Verified Credential'}
                        </span>
                      )}
                      <span className="text-xs font-mono text-slate-400 font-semibold">
                        {cert.period}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 group-hover:text-purple-700 transition-colors leading-snug">
                      {cert.title}
                    </h4>

                    <div className="text-xs font-medium text-slate-500 mt-1 mb-3">
                      Issued by: <strong className="text-slate-800">{cert.issuer}</strong>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {cert.description}
                    </p>

                    {/* Skill Tags */}
                    {cert.skills && cert.skills.length > 0 && (
                      <div className="flex items-center gap-1.5 flex-wrap mb-4">
                        {cert.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200/80 text-slate-700 font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-emerald-700 flex items-center gap-1 font-semibold text-[11px]">
                      <CheckCircle className="w-3.5 h-3.5" />
                      Verified Credential
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-50 group-hover:bg-[#7c3aed] text-purple-700 group-hover:text-white font-semibold text-xs transition-colors">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Interactive Certificate Viewer Modal / Lightbox */}
      {modalItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setModalItem(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-slate-200/80"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between gap-4 bg-slate-50/80">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-100 text-purple-700 uppercase tracking-wider">
                    {modalItem.type === 'cert' ? 'Verified Certificate' : 'Research Award'}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {currentIdx + 1} of {allModalItems.length}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 truncate mt-1">
                  {modalItem.title}
                </h3>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 flex-shrink-0">
                {modalItem.certificateImage && (
                  <>
                    <a
                      href={modalItem.certificateImage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 transition-colors shadow-sm"
                      title="Open in new tab"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={modalItem.certificateImage}
                      download
                      className="p-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 transition-colors shadow-sm"
                      title="Download Certificate"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  </>
                )}
                <button
                  onClick={() => setModalItem(null)}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-600 transition-colors cursor-pointer"
                  title="Close (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image Area with Navigation Buttons */}
            <div className="relative flex-1 bg-slate-900/95 flex items-center justify-center p-4 sm:p-6 overflow-hidden min-h-[380px] sm:min-h-[480px]">
              {modalItem.certificateImage ? (
                <div className="relative w-full h-[60vh] max-h-[580px]">
                  <Image
                    src={modalItem.certificateImage}
                    alt={modalItem.title}
                    fill
                    className="object-contain rounded-xl shadow-2xl"
                    priority
                  />
                </div>
              ) : (
                <div className="text-white text-center p-8">
                  <FileCheck2 className="w-16 h-16 mx-auto text-purple-400 mb-3" />
                  <p className="text-lg font-semibold">{modalItem.title}</p>
                </div>
              )}

              {/* Left (Previous) Navigation Arrow */}
              <button
                onClick={handlePrev}
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-xl backdrop-blur-md transition-all hover:scale-110 active:scale-95 cursor-pointer"
                title="Previous Certificate (Left Arrow)"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Right (Next) Navigation Arrow */}
              <button
                onClick={handleNext}
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-xl backdrop-blur-md transition-all hover:scale-110 active:scale-95 cursor-pointer"
                title="Next Certificate (Right Arrow)"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Modal Bottom Info Details */}
            <div className="p-4 sm:p-5 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div>
                <p className="text-slate-600 line-clamp-2 max-w-2xl leading-relaxed">
                  {modalItem.description}
                </p>
                <div className="flex items-center gap-3 mt-1.5 text-[11px] text-slate-500 font-medium">
                  {'issuer' in modalItem && <span>Issued by: <strong className="text-slate-800">{modalItem.issuer}</strong></span>}
                  {'organization' in modalItem && <span>Organization: <strong className="text-slate-800">{modalItem.organization}</strong></span>}
                  {'period' in modalItem && <span>Period: <strong className="text-slate-800">{modalItem.period}</strong></span>}
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0 self-end sm:self-center">
                <button
                  onClick={handlePrev}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold cursor-pointer"
                >
                  Prev
                </button>
                <button
                  onClick={handleNext}
                  className="px-3 py-1.5 rounded-lg bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold cursor-pointer"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
