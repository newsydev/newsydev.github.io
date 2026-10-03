import React from 'react';
import { X, User, MapPin, Award, BookOpen, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function OperatorModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { operator } = PORTFOLIO_DATA;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
      <div 
        className="bg-surface border-2 border-on-surface w-full max-w-md shadow-2xl relative animate-in fade-in zoom-in-95 duration-150 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-surface-container-high border-b border-outline-variant px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-primary" />
            <span className="font-label-md text-xs uppercase tracking-wider text-on-surface font-bold">
              OPERATOR DOSSIER // KANPUR GS-01
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
        <div className="p-6 space-y-4 bg-surface">
          <div>
            <span className="font-label-sm text-[11px] text-outline uppercase tracking-widest block">
              GROUND OPERATOR
            </span>
            <h3 className="font-headline text-2xl font-bold text-on-surface mt-0.5">
              {operator.name}
            </h3>
            <p className="font-label-md text-sm text-primary font-medium">
              {operator.role}
            </p>
          </div>

          <div className="space-y-2 border-y border-outline-variant py-3 font-label-sm text-xs">
            <div className="flex items-center justify-between">
              <span className="text-outline">GEOLOCATION:</span>
              <span className="font-mono text-on-surface">{operator.location}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-outline">AFFILIATION:</span>
              <span className="text-on-surface text-right font-medium">CSJMU Kanpur</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-outline">ACADEMIC STANDING:</span>
              <span className="text-primary-container font-bold">CPI 8.81 / 10.0</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-outline">STATUS:</span>
              <span className="text-secondary font-bold">ONLINE · CARRIER LOCKED</span>
            </div>
          </div>

          <div className="bg-surface-container-low p-3 rounded border border-outline-variant text-body-sm text-on-surface-variant">
            <span className="font-label-sm text-[10px] text-outline uppercase block mb-1">
              OPERATIONAL MISSION FOCUS:
            </span>
            Engineering high-reliability administrative backbones, distributed telemetry ingestion, and civic technology infrastructure.
          </div>
        </div>

        {/* Footer */}
        <div className="bg-surface-container px-5 py-3 border-t border-outline-variant flex items-center justify-between">
          <span className="font-label-sm text-[10px] text-outline">
            SIGNATURE: SHA-256 VERIFIED
          </span>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded bg-primary-container text-white font-label-md text-xs uppercase font-medium hover:bg-primary cursor-pointer"
          >
            DISMISS
          </button>
        </div>
      </div>
    </div>
  );
}
