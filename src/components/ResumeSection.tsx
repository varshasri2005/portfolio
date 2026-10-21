'use client';

import {
  FileText,
  Download,
  Sparkles,
  CheckCircle2,
  Eye,
  ShieldCheck,
} from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';

export default function ResumeSection() {
  const highlights = [
    'M.Sc. Software Systems @ Kongu Engineering College (Sem 6 CGPA: 6.80)',
    '4+ Verified Full Stack & Frontend Internships',
    'Flagship Project: Multi-Agent AI Campus Resource Management',
    'Verified Certifications in Cloud Computing & Python Clean Coding (Infosys Springboard)',
    '1st Prize Winner in Technical Paper Presentation (CIT College)',
  ];

  return (
    <section id="resume" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 border border-purple-200 text-purple-700 mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Professional <span className="text-purple-600">Resume</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Download or view my updated, ATS-compliant curriculum vitae tailored for Full Stack and Frontend Engineering roles.
          </p>
        </div>

        {/* Resume Showcase Card */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl p-6 sm:p-10 bg-white border border-slate-200/80 shadow-[0_15px_40px_rgba(124,58,237,0.08)] relative overflow-hidden group">
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Document Icon & Preview Info (5 cols) */}
              <div className="md:col-span-5 flex flex-col items-center text-center p-6 rounded-2xl bg-purple-50/60 border border-purple-100">
                <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 p-0.5 shadow-lg shadow-purple-600/25 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-purple-600">
                    <FileText className="w-10 h-10" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  Varshasri_K_Resume.pdf
                </h3>
                <p className="text-xs text-slate-500 mt-1 mb-4">
                  Standard Format • Verified ATS Layout • A4
                </p>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 border border-emerald-200 text-emerald-700">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Recruiter-Ready Document</span>
                </div>
              </div>

              {/* Resume Highlights & Action Buttons (7 cols) */}
              <div className="md:col-span-7 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-2">
                    Key Profile Highlights
                  </h4>
                  <p className="text-xs text-slate-500 mb-4">
                    Ready for immediate consideration in Full Stack & Frontend software developer positions.
                  </p>

                  <div className="space-y-2.5 mb-8">
                    {highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex items-center gap-4 flex-wrap">
                  <a
                    href={personalInfo.resumePdfPath}
                    download="Varshasri_K_Resume.pdf"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold text-xs sm:text-sm shadow-md shadow-purple-600/25 hover:scale-[1.02] transition-all cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Resume (PDF)</span>
                  </a>

                  <a
                    href={personalInfo.resumePdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-800 border border-slate-200 text-xs sm:text-sm font-semibold transition-all hover:scale-[1.02]"
                  >
                    <Eye className="w-4 h-4 text-purple-600" />
                    <span>View in Browser</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
