import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ResearchSection } from './components/ResearchSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { CitationModal } from './components/CitationModal';
import { DesignSystemModal } from './components/DesignSystemModal';
import { ArrowUp, Layers } from 'lucide-react';

export default function App() {
  const [isDesignSystemOpen, setIsDesignSystemOpen] = useState(false);
  const [isCitationOpen, setIsCitationOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 flex flex-col selection:bg-zinc-900 selection:text-white">
      {/* Top Sticky Header */}
      <Header
        onOpenDesignSystem={() => setIsDesignSystemOpen(true)}
        onOpenCitation={() => setIsCitationOpen(true)}
      />

      {/* Main Single Page Content */}
      <main className="grow">
        <Hero onScrollToSection={scrollToSection} />
        <ResearchSection />
        <ProjectsSection />
        <EducationSection />
        <SkillsSection />
        <CertificationsSection />
      </main>

      {/* Footer & Contact */}
      <ContactSection />

      {/* Floating Design Spec & Top Button */}
      <div className="fixed bottom-5 right-5 z-30 flex items-center gap-2">
        <button
          id="floating-design-spec-btn"
          onClick={() => setIsDesignSystemOpen(true)}
          className="flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-mono-code font-bold bg-zinc-900 text-zinc-50 hover:bg-zinc-800 shadow-lg border border-zinc-700 transition-all cursor-pointer hover:scale-105 active:scale-95"
          title="설계 시스템 명세표 및 변경점"
        >
          <Layers className="w-3.5 h-3.5 text-emerald-400" />
          <span className="hidden sm:inline">설계 시스템 명세</span>
        </button>

        <button
          id="floating-scroll-top-btn"
          onClick={scrollToTop}
          className="p-2.5 rounded-full bg-white text-zinc-800 hover:bg-zinc-100 shadow-md border border-zinc-200 transition-all cursor-pointer hover:scale-105 active:scale-95"
          title="맨 위로 이동"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      {/* Citation Modal */}
      <CitationModal
        isOpen={isCitationOpen}
        onClose={() => setIsCitationOpen(false)}
      />

      {/* Design System Summary Modal */}
      <DesignSystemModal
        isOpen={isDesignSystemOpen}
        onClose={() => setIsDesignSystemOpen(false)}
      />
    </div>
  );
}
