import BackgroundMesh from '@/components/BackgroundMesh';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import ResumeSection from '@/components/ResumeSection';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 overflow-x-hidden">
      {/* Dynamic Background Mesh & Ambient Glow Orbs */}
      <BackgroundMesh />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Home / Hero Section */}
        <Hero />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Skills Section */}
        <Skills />

        {/* 4. Projects Section (TEXMART, Student Result, Sabrimala Finance, AgriProcess+) */}
        <Projects />

        {/* 5. Internship Experience (Qube AI / CubeAI Solutions, Tamizhan Skills, Oasis Infobyte, CODSOFT) */}
        <Experience />

        {/* 6. Education (Kongu Engineering College M.Sc., HSC, SSLC) */}
        <Education />

        {/* 7. Certifications & Achievements (NASSCOM Gold 93%, NPTEL Elite 68%, CIT 1st Prize) */}
        <Certifications />

        {/* 8. Resume Section (PDF Download & View) */}
        <ResumeSection />

        {/* 9. Contact Me Section (Form with SMTP integration & Social Links) */}
        <Contact />
      </main>
    </div>
  );
}
