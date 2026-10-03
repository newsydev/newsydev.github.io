import React from 'react';
import { Terminal, LayoutDashboard, Database, SlidersHorizontal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function SystemsCheck() {
  const { systems } = PORTFOLIO_DATA;

  const getSectorIcon = (iconName) => {
    switch (iconName) {
      case 'terminal':
        return <Terminal className="w-4 h-4 text-outline" />;
      case 'dashboard':
        return <LayoutDashboard className="w-4 h-4 text-outline" />;
      case 'database':
        return <Database className="w-4 h-4 text-outline" />;
      case 'tune':
        return <SlidersHorizontal className="w-4 h-4 text-outline" />;
      default:
        return <Terminal className="w-4 h-4 text-outline" />;
    }
  };

  return (
    <section className="w-full px-4 sm:px-6 md:px-12 py-12 border-b border-outline-variant" id="systems">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 pb-3 border-b border-outline-variant">
          <div>
            <span className="font-label-md text-label-md text-primary uppercase tracking-widest block font-medium">
              SYS.SECTOR // 03
            </span>
            <h2 className="font-headline text-3xl sm:text-headline-lg font-bold text-on-surface">
              Systems Check
            </h2>
          </div>
          <span className="font-label-md text-label-sm text-outline uppercase tracking-widest">
            // TECHNICAL CAPABILITIES &amp; INSTRUMENTATION
          </span>
        </div>

        {/* 4 Telemetry Grid Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {systems.map((panel, idx) => (
            <div
              key={idx}
              className="bg-surface-container-low border border-outline-variant rounded p-5 flex flex-col justify-between space-y-4 shadow-sm hover:border-outline transition-colors"
            >
              <div>
                <div className="flex items-center justify-between border-b border-outline-variant pb-2 mb-3">
                  <span className="font-label-md text-label-md text-primary font-bold tracking-wider">
                    {panel.sector}
                  </span>
                  {getSectorIcon(panel.icon)}
                </div>

                <div className="flex flex-wrap gap-2">
                  {panel.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-1 rounded border border-outline-variant bg-surface-container text-on-surface font-label-sm text-[12px] hover:border-primary-container transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-outline-variant">
                <span className="font-label-sm text-[0.625rem] text-outline uppercase tracking-widest block font-medium">
                  {panel.status}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
