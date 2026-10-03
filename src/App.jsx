import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Missions from './components/Missions';
import MissionLog from './components/MissionLog';
import SystemsCheck from './components/SystemsCheck';
import OpenComms from './components/OpenComms';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import MissionSpecModal from './components/MissionSpecModal';
import OperatorModal from './components/OperatorModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [resumeOpen, setResumeOpen] = useState(false);
  const [operatorOpen, setOperatorOpen] = useState(false);
  const [selectedMission, setSelectedMission] = useState(null);
  const [toast, setToast] = useState(null);

  // Show telemetry notification
  const showNotification = (message) => {
    setToast(message);
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  // Section observer for accurate scroll-spy navbar updates
  useEffect(() => {
    const sectionIds = ['overview', 'missions', 'log', 'systems', 'comms'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased min-h-screen relative selection:bg-primary-container selection:text-on-primary-container">
      {/* Background Architectural Drafting Grid */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#8f7069_1px,transparent_1px),linear-gradient(to_bottom,#8f7069_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      {/* Mission Control Top Bar */}
      <Navbar
        activeSection={activeSection}
        onOpenResume={() => setResumeOpen(true)}
        onOpenOperator={() => setOperatorOpen(true)}
      />

      {/* Main Mission Flow */}
      <main className="relative z-10 w-full pt-16 min-h-[calc(100vh-4rem)] flex flex-col justify-between">
        <div>
          {/* SECTION 1: HERO & MISSION CONTROL TELEMETRY */}
          <Hero onOpenComms={() => setActiveSection('comms')} />

          {/* SECTION 2: ACTIVE MISSIONS & PRODUCTION ARTIFACTS */}
          <Missions onSelectMission={(mission) => setSelectedMission(mission)} />

          {/* SECTION 3: MISSION LOG / TIMELINE */}
          <MissionLog />

          {/* SECTION 4: SYSTEMS CHECK / CAPABILITIES */}
          <SystemsCheck />

          {/* SECTION 5: OPEN COMMS / DIRECT UPLINK */}
          <OpenComms
            onOpenResume={() => setResumeOpen(true)}
            onNotify={showNotification}
          />
        </div>

        {/* Global Footer */}
        <Footer />
      </main>

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <MissionSpecModal
        mission={selectedMission}
        onClose={() => setSelectedMission(null)}
      />

      <OperatorModal
        isOpen={operatorOpen}
        onClose={() => setOperatorOpen(false)}
      />

      {/* Floating Mechanical Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-on-surface text-surface px-4 py-2.5 rounded shadow-xl border border-outline font-label-md text-xs uppercase tracking-wider flex items-center gap-2 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <span className="w-2 h-2 rounded-full bg-primary-container animate-ping"></span>
          <span>{toast}</span>
        </div>
      )}
    </div>
  );
}
