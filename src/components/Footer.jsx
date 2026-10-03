import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Footer() {
  const { comms, location } = PORTFOLIO_DATA.operator;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-surface-container-low border-t border-outline-variant mt-10 py-6">
      <div className="w-full px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        
        {/* Left Telemetry Coordinates */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-label-sm text-label-sm text-outline">
          <span className="text-on-surface-variant font-semibold">{comms.callsign}</span>
          <span>//</span>
          <span>{location}</span>
          <span>//</span>
          <span className="text-on-surface-variant font-semibold">SURYANSH GUPTA</span>
          <span>//</span>
          <span className="text-secondary flex items-center gap-1 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block"></span>
            ALL SYSTEMS NOMINAL
          </span>
        </div>

        {/* Right Release Specifications & Scroll to Top */}
        <div className="font-label-sm text-label-sm text-outline flex items-center gap-3">
          <span>REL_BUILD // {comms.buildVersion}</span>
          <span>•</span>
          <span>{comms.stationSpec}</span>
          <button
            onClick={scrollToTop}
            className="p-1 rounded border border-outline-variant hover:border-outline hover:text-on-surface transition-colors cursor-pointer ml-2"
            title="Return to Orbit Top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
