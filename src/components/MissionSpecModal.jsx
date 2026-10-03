import React from 'react';
import { X, ExternalLink, Code, Layers, CheckCircle2 } from 'lucide-react';
import OrbitRadar from './OrbitRadar';

export default function MissionSpecModal({ mission, onClose }) {
  if (!mission) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
      <div 
        className="bg-surface border-2 border-on-surface w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl relative animate-in fade-in zoom-in-95 duration-150 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-surface-container-high border-b border-outline-variant px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-label-md text-primary font-bold">{mission.id}</span>
            <span className="text-outline">//</span>
            <span className="font-label-md text-xs uppercase tracking-wider text-on-surface font-semibold truncate">
              {mission.sector} SPECIFICATION
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded border border-outline-variant hover:bg-primary-container hover:text-white text-on-surface transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 bg-surface fine-grid">
          <div>
            <div className="inline-block font-label-sm text-xs px-2 py-0.5 rounded border border-outline-variant bg-surface-container text-primary font-bold mb-2">
              {mission.status}
            </div>
            <h2 className="font-headline text-2xl font-bold text-on-surface">
              {mission.title}
            </h2>
            <p className="font-body text-body-md text-on-surface-variant mt-2 leading-relaxed">
              {mission.description}
            </p>
          </div>

          {/* If OrbitGuard, show live radar */}
          {mission.id === 'MSN-04' && (
            <div className="my-2">
              <span className="font-label-sm text-xs text-outline uppercase block mb-1">
                LIVE ORBITAL RADAR INSTRUMENT:
              </span>
              <OrbitRadar />
            </div>
          )}

          {/* Telemetry Grid */}
          <div className="bg-surface-container-low border border-outline-variant rounded p-4">
            <span className="font-label-sm text-xs text-outline uppercase tracking-wider block mb-3 font-semibold">
              MISSION TELEMETRY READOUT
            </span>
            <div className="grid grid-cols-3 gap-3 text-center">
              {mission.telemetry.map((t, i) => (
                <div key={i} className="bg-surface-container p-2 rounded border border-outline-variant">
                  <span className="font-label-sm text-[10px] text-outline uppercase tracking-wider block">
                    {t.label}
                  </span>
                  <span className="font-label-lg text-base font-bold text-primary-container">
                    {t.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Architectural Highlights */}
          {mission.highlights && (
            <div>
              <span className="font-label-sm text-xs text-primary uppercase font-bold tracking-wider block mb-2">
                ARCHITECTURAL PROOFS &amp; IMPACT
              </span>
              <ul className="space-y-2">
                {mission.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-body-sm text-on-surface-variant">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology stack */}
          <div>
            <span className="font-label-sm text-xs text-outline uppercase font-bold tracking-wider block mb-2">
              SYSTEM TECHNOLOGIES
            </span>
            <div className="flex flex-wrap gap-2">
              {mission.techStack.map((tech, i) => (
                <span key={i} className="px-2.5 py-1 rounded border border-outline-variant bg-surface-container text-on-surface font-label-sm text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="bg-surface-container px-5 py-3 border-t border-outline-variant flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href={mission.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-label-md text-xs uppercase text-primary-container font-semibold hover:text-primary flex items-center gap-1"
            >
              <span>LAUNCH LIVE</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={mission.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-label-md text-xs uppercase text-outline hover:text-on-surface flex items-center gap-1"
            >
              <span>VIEW REPO</span>
              <Code className="w-3.5 h-3.5" />
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-3 py-1 rounded border border-outline-variant text-on-surface font-label-md text-xs uppercase hover:bg-surface-container-high cursor-pointer"
          >
            CLOSE
          </button>
        </div>

      </div>
    </div>
  );
}
