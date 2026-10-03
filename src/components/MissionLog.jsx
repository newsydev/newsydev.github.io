import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function MissionLog() {
  const { timeline } = PORTFOLIO_DATA;

  return (
    <section className="w-full px-4 sm:px-6 md:px-12 py-12 bg-surface-container-low/50 border-b border-outline-variant" id="log">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 pb-3 border-b border-outline-variant">
          <div>
            <span className="font-label-md text-label-md text-primary uppercase tracking-widest block font-medium">
              SYS.SECTOR // 02
            </span>
            <h2 className="font-headline text-3xl sm:text-headline-lg font-bold text-on-surface">
              Mission Log
            </h2>
          </div>
          <span className="font-label-md text-label-sm text-outline uppercase tracking-widest">
            // TIMELINE & TELEMETRY RECORDS
          </span>
        </div>

        {/* Chronological Telemetry Rail */}
        <div className="relative pl-6 md:pl-10 space-y-6">
          {/* Connecting Vertical Rail Hairline */}
          <div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-outline-variant"></div>

          {timeline.map((event, index) => {
            const isWinner = index === 0;

            return (
              <div key={index} className="relative group">
                {/* Node Marker */}
                <div className={`absolute -left-[19px] md:-left-[35px] top-1.5 w-4 h-4 rounded-full border border-outline-variant bg-surface flex items-center justify-center transition-all ${
                  isWinner ? 'scale-110 border-tertiary shadow-sm' : ''
                }`}>
                  <span className={`w-2 h-2 rounded-full ${
                    isWinner 
                      ? 'bg-tertiary animate-pulse' 
                      : index === timeline.length - 1 
                        ? 'bg-outline' 
                        : 'bg-primary-container'
                  }`}></span>
                </div>

                {/* Event Card */}
                <div className={`bg-surface-container-low border border-outline-variant rounded p-4 sm:p-5 shadow-sm space-y-2 hover:border-outline transition-all ${
                  isWinner ? 'border-tertiary-container/70 bg-surface-container-low' : ''
                }`}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className={`font-label-sm text-label-sm font-bold tracking-widest uppercase ${
                      isWinner ? 'text-tertiary' : 'text-outline'
                    }`}>
                      {event.date}
                    </span>
                    <span className={`font-label-sm text-label-sm px-2.5 py-0.5 rounded border border-outline-variant ${
                      isWinner 
                        ? 'bg-tertiary-fixed/30 text-tertiary font-semibold' 
                        : 'bg-surface-container text-on-surface-variant'
                    }`}>
                      {event.badge}
                    </span>
                  </div>

                  <h3 className="font-headline text-xl sm:text-2xl font-bold text-on-surface group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>

                  <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
