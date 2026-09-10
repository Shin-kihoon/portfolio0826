import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 flex flex-col selection:bg-zinc-900 selection:text-white">
      <Header />

      {/* 신입 채용 담당자가 보는 순서: 누구인가 → 학력 → 기술 → 자격증 → 프로젝트 */}
      <main className="grow">
        <Hero onScrollToSection={scrollToSection} />
        <EducationSection />
        <SkillsSection />
        <CertificationsSection />
        <ProjectsSection />
      </main>

      <ContactSection />

      {showTop && (
        <button
          id="floating-scroll-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-5 right-5 z-30 p-2.5 rounded-full bg-white text-zinc-800 hover:bg-zinc-100 shadow-md border border-zinc-200 transition-all cursor-pointer hover:scale-105 active:scale-95"
          title="맨 위로"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
