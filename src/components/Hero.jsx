import React, { useState, useEffect } from 'react';
import { ArrowDown, Radio, Activity, Compass, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Hero({ onOpenComms }) {
  const { operator } = PORTFOLIO_DATA;
  const [liveUptime, setLiveUptime] = useState("99.98%");
  const [pulseSeconds, setPulseSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulseSeconds(prev => (prev + 1) % 60);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full px-4 sm:px-6 md:px-12 pt-8 pb-12 relative border-b border-outline-variant" id="overview">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Core Identity & Bio */}
        <div className="lg:col-span-8 flex flex-col space-y-4">
          
          {/* Live Geolocation Telemetry Pill */}
          <div className="inline-flex items-center gap-2 self-start px-2.5 py-1 rounded border border-outline-variant bg-surface-container-low shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="font-label-md text-[11px] sm:text-label-md text-on-surface-variant tracking-widest uppercase">
              STATUS: ONLINE · {operator.location}
            </span>
          </div>

          {/* Callout Name Header */}
          <div className="flex flex-col">
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-headline-xl font-bold tracking-tight text-on-surface">
              {operator.name}
            </h1>
            
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span className="font-headline text-xl sm:text-headline-sm text-on-surface-variant font-medium">
                {operator.role}
              </span>
              <span className="font-label-md text-label-md text-outline font-light">//</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded border border-outline-variant bg-surface-container-high text-tertiary font-label-md text-[12px] sm:text-label-md font-semibold tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                <Award className="w-3.5 h-3.5 inline-block text-tertiary" />
                {operator.tagline}
              </span>
            </div>
          </div>

          {/* Operator Value Statement */}
          <p className="font-body text-base sm:text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            {operator.bio}
          </p>

          {/* Functional Triggers */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <a
              href="#missions"
              className="px-5 py-2.5 rounded border border-primary bg-primary-container text-on-primary-container font-label-md text-[13px] font-semibold tracking-wider uppercase hover:bg-primary hover:text-white transition-all flex items-center gap-2 shadow-sm active:translate-y-0.5 cursor-pointer"
            >
              <span>VIEW MISSIONS</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>

            <a
              href="#comms"
              onClick={(e) => {
                if (onOpenComms) {
                  // allow smooth anchor or direct callback
                }
              }}
              className="px-5 py-2.5 rounded border border-outline-variant bg-surface-container text-on-surface font-label-md text-[13px] uppercase hover:border-outline hover:bg-surface-container-high transition-all flex items-center gap-2 active:translate-y-0.5 cursor-pointer"
            >
              <span>TRANSMIT COMMS</span>
              <Radio className="w-4 h-4 text-primary" />
            </a>
          </div>
        </div>

        {/* Right Column: Mission Control Telemetry Pod */}
        <div className="lg:col-span-4 w-full bg-surface-container-low border border-outline-variant rounded p-5 shadow-sm flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-outline-variant">
            <div className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-primary" />
              <span className="font-label-md text-label-sm tracking-widest text-outline uppercase font-semibold">
                TELEMETRY READOUT // LIVE
              </span>
            </div>
            <span className="inline-block w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
          </div>

          <div className="grid grid-cols-1 gap-2.5">
            {/* Stat 1 */}
            <div className="p-3 bg-surface-container border border-outline-variant rounded flex items-center justify-between hover:border-outline transition-colors">
              <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                PROJECTS SHIPPED
              </span>
              <span className="font-label-lg text-lg font-bold text-primary-container">
                {operator.metrics.projectsShipped}
              </span>
            </div>

            {/* Stat 2 */}
            <div className="p-3 bg-surface-container border border-outline-variant rounded flex items-center justify-between hover:border-outline transition-colors">
              <div>
                <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider block">
                  HACKATHONS
                </span>
                <span className="font-label-sm text-[0.625rem] text-tertiary uppercase font-medium">
                  {operator.metrics.hackathonSubtitle}
                </span>
              </div>
              <span className="font-label-lg text-lg font-bold text-primary-container">
                {operator.metrics.hackathons}
              </span>
            </div>

            {/* Stat 3 */}
            <div className="p-3 bg-surface-container border border-outline-variant rounded flex items-center justify-between hover:border-outline transition-colors">
              <div>
                <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider block">
                  CPI // CSJMU
                </span>
                <span className="font-label-sm text-[0.625rem] text-secondary uppercase font-medium">
                  {operator.metrics.cpiSubtitle}
                </span>
              </div>
              <span className="font-label-lg text-lg font-bold text-primary-container">
                {operator.metrics.cpi}
              </span>
            </div>
          </div>

          {/* Telemetry Status Bar */}
          <div className="pt-2 border-t border-outline-variant flex items-center justify-between font-label-sm text-[0.68rem] text-outline uppercase tracking-wider">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block"></span>
              UPTIME: {operator.metrics.uptime}
            </span>
            <span>•</span>
            <span className="text-secondary font-medium">
              PACKET LOSS: {operator.metrics.packetLoss}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
