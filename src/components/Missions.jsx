import React, { useState } from 'react';
import { ArrowUpRight, Code, CheckCircle, ExternalLink, ShieldCheck, Layers, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import OrbitRadar from './OrbitRadar';

export default function Missions({ onSelectMission }) {
  const { missions, ancillaryMissions } = PORTFOLIO_DATA;
  const [filter, setFilter] = useState('ALL');

  const filteredMissions = missions.filter(mission => {
    if (filter === 'ALL') return true;
    if (filter === 'PRODUCTION') return mission.status === 'PRODUCTION' || mission.status === 'DEPLOYED';
    if (filter === 'WINNER') return mission.status.includes('WINNER');
    if (filter === 'SIMULATION') return mission.status === 'SIMULATION';
    return true;
  });

  return (
    <section className="w-full px-4 sm:px-6 md:px-12 py-12 border-b border-outline-variant" id="missions">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-3 border-b border-outline-variant">
          <div>
            <span className="font-label-md text-label-md text-primary uppercase tracking-widest block font-medium">
              SYS.SECTOR // 01
            </span>
            <h2 className="font-headline text-3xl sm:text-headline-lg font-bold text-on-surface">
              Active Missions
            </h2>
          </div>
          
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-label-md text-label-sm text-outline uppercase tracking-widest hidden lg:inline-block mr-2">
              // DEPLOYED PRODUCTION ARTIFACTS
            </span>

            {/* Sector Category Filters */}
            <div className="inline-flex rounded border border-outline-variant bg-surface-container-low p-0.5 font-label-sm text-[11px]">
              {['ALL', 'PRODUCTION', 'WINNER', 'SIMULATION'].map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-2.5 py-1 rounded transition-colors uppercase cursor-pointer ${
                    filter === category
                      ? 'bg-primary-container text-white font-semibold'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {category === 'WINNER' ? '★ WINNER' : category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Primary Mission Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredMissions.map((mission) => {
            const isWinner = mission.id === 'MSN-03';
            const isOrbitGuard = mission.id === 'MSN-04';

            return (
              <article
                key={mission.id}
                className={`bg-surface-container-low border border-outline-variant rounded p-6 flex flex-col justify-between hover:border-outline transition-all shadow-sm group relative ${
                  isWinner ? 'border-tertiary-container/80' : ''
                }`}
              >
                <div className="space-y-3">
                  {/* Top metadata row */}
                  <div className="flex items-center justify-between">
                    <span className="font-label-md text-label-md text-outline font-semibold tracking-wider">
                      {mission.id}
                    </span>
                    
                    {isWinner ? (
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-outline-variant bg-tertiary-fixed/30 text-tertiary font-label-md text-[12px] tracking-wider uppercase font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                        {mission.status}
                      </span>
                    ) : (
                      <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-outline-variant bg-surface-container font-label-md text-[12px] tracking-wider uppercase ${
                        mission.status === 'SIMULATION' ? 'text-primary' : 'text-secondary'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          mission.status === 'SIMULATION' ? 'bg-primary-container' : 'bg-secondary'
                        }`}></span>
                        {mission.status}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-headline text-2xl font-bold text-on-surface group-hover:text-primary transition-colors leading-snug">
                    {mission.title}
                  </h3>

                  {/* Narrative Description */}
                  <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
                    {mission.description}
                  </p>

                  {/* Special Embedded Radar for OrbitGuard */}
                  {isOrbitGuard && (
                    <div className="my-3">
                      <OrbitRadar />
                    </div>
                  )}

                  {/* Telemetry Strip */}
                  <div className="grid grid-cols-3 gap-2 py-2 px-2 my-3 bg-surface-container-lowest border border-outline-variant rounded text-center">
                    {mission.telemetry.map((t, idx) => (
                      <div key={idx}>
                        <span className="font-label-sm text-[11px] text-outline uppercase tracking-widest block truncate">
                          {t.label}
                        </span>
                        <span className={`font-label-lg text-sm sm:text-base font-bold ${
                          isWinner && idx === 0 ? 'text-tertiary' : 'text-primary-container'
                        }`}>
                          {t.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {mission.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded border border-outline-variant bg-surface-container text-on-surface-variant font-label-sm text-[11px] hover:border-outline hover:text-on-surface transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Strip */}
                <div className="flex items-center justify-between pt-4 mt-4 border-t border-outline-variant">
                  <div className="flex items-center gap-4">
                    <a
                      href={mission.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-label-md text-label-md uppercase text-primary-container hover:text-primary flex items-center gap-1 font-semibold group/link"
                    >
                      <span>LAUNCH LIVE</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>

                    <a
                      href={mission.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-label-md text-label-md uppercase text-outline hover:text-on-surface flex items-center gap-1"
                    >
                      <span>VIEW SOURCE</span>
                      <Code className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {onSelectMission && (
                    <button
                      onClick={() => onSelectMission(mission)}
                      className="font-label-sm text-[11px] uppercase tracking-wider text-outline hover:text-primary transition-colors cursor-pointer border-b border-dotted border-outline hover:border-primary"
                    >
                      [SPEC]
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Ancillary Missions: Row of 3 Secondary Compact Cards */}
        <div className="pt-2">
          <div className="text-label-sm text-outline uppercase tracking-widest pb-2">
            // ANCILLARY GROUND NODES & SUBSYSTEMS
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ancillaryMissions.map((item, idx) => (
              <div
                key={idx}
                className="bg-surface-container-low border border-outline-variant rounded p-4 flex flex-col justify-between space-y-3 hover:border-outline transition-colors shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                      {item.code}
                    </span>
                    <span className={`font-label-sm text-[0.625rem] font-semibold tracking-wider ${item.statusColor}`}>
                      {item.status}
                    </span>
                  </div>
                  <h4 className="font-headline text-[1.05rem] leading-snug font-bold text-on-surface">
                    {item.title}
                  </h4>
                  <p className="font-body text-body-sm text-on-surface-variant mt-1">
                    {item.description}
                  </p>
                </div>
                
                <div className="pt-2 border-t border-outline-variant flex items-center justify-between font-label-sm text-label-sm text-outline">
                  <span>{item.metrics}</span>
                  <span className="text-primary-container font-semibold">{item.tech}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
