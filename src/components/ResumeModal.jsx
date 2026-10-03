import React from 'react';
import { X, Download, Printer, ExternalLink, ShieldCheck, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { operator, missions, timeline, systems } = PORTFOLIO_DATA;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
      <div 
        className="bg-surface border-2 border-on-surface w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl relative animate-in fade-in zoom-in-95 duration-150 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Archival Header Bar */}
        <div className="bg-surface-container-high border-b border-outline-variant px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span className="font-label-md text-label-md uppercase tracking-wider font-bold text-on-surface">
              CURRICULUM SPECIFICATION // SURYANSH GUPTA [128 KB]
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-1.5 rounded border border-outline-variant hover:bg-surface-container text-on-surface font-label-sm text-xs flex items-center gap-1 cursor-pointer transition-colors"
              title="Print / Save PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">PRINT / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded border border-outline-variant hover:bg-primary-container hover:text-white text-on-surface transition-colors cursor-pointer"
              title="Close Specification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Document Body (Printable & Scrollable) */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 font-body text-on-surface bg-surface fine-grid">
          
          {/* Header Title Section */}
          <div className="border-b-2 border-on-surface pb-4 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h1 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight text-on-surface">
                Suryansh Gupta
              </h1>
              <p className="font-label-md text-sm text-primary font-semibold tracking-wider uppercase mt-1">
                Full-Stack Systems Engineer &amp; Infrastructure Architect
              </p>
              <p className="font-label-sm text-xs text-outline mt-1">
                Kanpur, Uttar Pradesh, India · {operator.comms.email}
              </p>
            </div>

            <div className="text-right sm:border-l sm:border-outline-variant sm:pl-4 font-label-sm text-xs space-y-1">
              <div><span className="text-outline">ACADEMIC INDEX:</span> <strong className="text-primary-container">8.81 CPI</strong></div>
              <div><span className="text-outline">DEGREE:</span> B.Tech CSE (CSJMU)</div>
              <div><span className="text-outline">HONOUR:</span> Smart India Hackathon '24 Winner</div>
            </div>
          </div>

          {/* Core Philosophy Statement */}
          <div className="bg-surface-container-low border border-outline-variant p-4 rounded">
            <span className="font-label-sm text-[11px] text-outline uppercase tracking-widest block mb-1">
              ENGINEERING SUMMARY
            </span>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              Specialized in high-integrity digital ground infrastructure, distributed data pipelines, and zero-latency operational telemetry portals. Architect of the national prize-winning bathymetric deduplication system for the Ministry of Earth Sciences.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="font-label-md text-sm text-primary uppercase font-bold tracking-wider border-b border-outline-variant pb-1 mb-3">
              01 // FORMAL EDUCATION
            </h2>
            <div className="flex flex-col sm:flex-row justify-between text-body-md">
              <div>
                <strong className="font-semibold text-on-surface">{operator.education.degree}</strong>
                <div className="text-on-surface-variant text-sm">{operator.education.institution}</div>
                <div className="text-outline text-xs mt-0.5">{operator.education.focus}</div>
              </div>
              <div className="text-right font-label-md text-sm sm:mt-0 mt-1">
                <span className="text-primary-container font-bold">CPI: {operator.education.cpi}</span>
                <div className="text-outline text-xs">{operator.education.period}</div>
              </div>
            </div>
          </div>

          {/* Key Missions (Production Systems) */}
          <div>
            <h2 className="font-label-md text-sm text-primary uppercase font-bold tracking-wider border-b border-outline-variant pb-1 mb-3">
              02 // KEY PRODUCTION ARTIFACTS
            </h2>
            <div className="space-y-4">
              {missions.map((m) => (
                <div key={m.id} className="border-l-2 border-outline-variant pl-3 space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-headline text-lg font-bold text-on-surface">
                      {m.title}
                    </span>
                    <span className="font-label-sm text-xs px-2 py-0.5 rounded border border-outline-variant bg-surface-container text-primary font-semibold">
                      {m.status}
                    </span>
                  </div>
                  <p className="text-body-sm text-on-surface-variant">
                    {m.description}
                  </p>
                  <div className="font-label-sm text-xs text-outline flex flex-wrap gap-2 pt-1">
                    <span>STACK:</span>
                    <strong className="text-on-surface">{m.techStack.join(', ')}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Instrumentation */}
          <div>
            <h2 className="font-label-md text-sm text-primary uppercase font-bold tracking-wider border-b border-outline-variant pb-1 mb-3">
              03 // TECHNICAL ARSENAL
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-body-sm">
              {systems.map((s, idx) => (
                <div key={idx} className="bg-surface-container-low p-3 rounded border border-outline-variant">
                  <span className="font-label-sm text-xs text-primary font-bold block mb-1">
                    {s.sector}
                  </span>
                  <div className="text-on-surface font-medium">
                    {s.skills.join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hackathon Laurels */}
          <div>
            <h2 className="font-label-md text-sm text-primary uppercase font-bold tracking-wider border-b border-outline-variant pb-1 mb-3">
              04 // AWARDS &amp; HONOURS
            </h2>
            <ul className="list-disc list-inside space-y-1 text-body-sm text-on-surface-variant">
              <li>
                <strong className="text-on-surface">Smart India Hackathon 2024 — National Champion:</strong> 1st place nationwide for Ministry of Earth Sciences Problem Statement.
              </li>
              <li>
                <strong className="text-on-surface">Smart India Hackathon 2025:</strong> Selected as institutional representative delegation.
              </li>
              <li>
                <strong className="text-on-surface">Simhastha Hackathon Bhopal 2025:</strong> Finalist for crowd telemetry &amp; logistics routing station.
              </li>
              <li>
                <strong className="text-on-surface">ICPC Kanpur Regional 2024:</strong> Technical infrastructure &amp; server judge volunteer.
              </li>
            </ul>
          </div>

          {/* Footer of Modal */}
          <div className="pt-4 border-t border-outline-variant flex flex-wrap items-center justify-between text-label-sm text-xs text-outline">
            <span>OFFICIAL OPERATOR PROFILE · KANPUR GS-01</span>
            <span>GITHUB: {operator.comms.githubUser}</span>
          </div>

        </div>

        {/* Modal Action Bar */}
        <div className="bg-surface-container px-6 py-3 border-t border-outline-variant flex items-center justify-between">
          <span className="font-label-sm text-xs text-outline">
            SPECIFICATION READY FOR IMMEDIATE VERIFICATION
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-1.5 rounded bg-primary-container text-white font-label-md text-xs uppercase font-semibold hover:bg-primary transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>SAVE / EXPORT PDF</span>
            </button>
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded border border-outline-variant text-on-surface hover:bg-surface-container-high font-label-md text-xs uppercase cursor-pointer"
            >
              DISMISS
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
