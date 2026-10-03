import React, { useState, useEffect } from 'react';

export default function OrbitRadar({ interactive = false }) {
  const [pulse, setPulse] = useState(0);
  const [activeSat, setActiveSat] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(p => (p + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Compute dynamic positions along orbits
  const t = pulse / 100;
  // Primary satellite moving along path 1
  const sat1X = 40 + t * 220;
  const sat1Y = 70 - Math.sin(t * Math.PI) * 60;

  // Secondary satellite moving along intersecting path
  const sat2X = 240 - t * 180;
  const sat2Y = 25 + Math.sin(t * Math.PI) * 30;

  const distance = Math.sqrt(Math.pow(sat1X - sat2X, 2) + Math.pow(sat1Y - sat2Y, 2));
  const isConjunction = distance < 25;

  return (
    <div className="w-full h-24 bg-surface-container-lowest border border-outline-variant rounded relative overflow-hidden flex items-center justify-center p-2 group">
      <svg className="w-full h-full stroke-outline" viewBox="0 0 300 80">
        {/* Orbital reference concentric circles */}
        <circle cx="150" cy="40" fill="none" r="35" strokeDasharray="2 3" strokeWidth="0.5" className="opacity-70"></circle>
        <circle cx="150" cy="40" fill="none" r="20" strokeWidth="0.5" className="opacity-50"></circle>
        <circle cx="150" cy="40" fill="none" r="8" strokeWidth="0.5" stroke="#8f7069" className="opacity-40"></circle>

        {/* Central Planetary Body (Earth) */}
        <circle cx="150" cy="40" r="4" className="fill-primary"></circle>
        <circle cx="150" cy="40" r="7" fill="none" stroke="#b32705" strokeWidth="0.5" className="animate-ping opacity-40"></circle>

        {/* Orbit Path 1 (Nominal Orbit) */}
        <path d="M 40 70 Q 150 10 260 60" fill="none" stroke="#645e53" strokeDasharray="3 3" strokeWidth="1"></path>
        
        {/* Orbit Path 2 (Hazard / Intersection Track) */}
        <path d="M 60 15 Q 160 55 240 25" fill="none" stroke="#ba1a1a" strokeWidth="1" className="opacity-80"></path>

        {/* Intersecting conjunction danger zone marker */}
        <circle cx="155" cy="38" r="4" fill="none" stroke="#ba1a1a" strokeWidth="1" className="animate-pulse"></circle>
        <circle cx="155" cy="38" r="2.5" className="fill-error"></circle>

        {/* Dynamic moving satellite indicator */}
        <circle cx={sat1X} cy={sat1Y} r="2" fill="#b32705" className="transition-all"></circle>
        <circle cx={sat2X} cy={sat2Y} r="2" fill="#ba1a1a" className="transition-all"></circle>

        {/* Dynamic proximity vector when close */}
        {isConjunction && (
          <line
            x1={sat1X}
            y1={sat1Y}
            x2={sat2X}
            y2={sat2Y}
            stroke="#ba1a1a"
            strokeWidth="1.5"
            strokeDasharray="2 2"
          />
        )}
      </svg>

      {/* Real-time Warning Badge */}
      <div className="absolute bottom-1 right-2 font-label-sm text-[0.625rem] text-error uppercase tracking-wider font-semibold bg-surface-container-lowest/80 px-1 py-0.5 rounded border border-error/30">
        Δ &lt; 10 km [TRIGGERED]
      </div>

      <div className="absolute top-1 left-2 font-label-sm text-[0.6rem] text-outline uppercase tracking-wider">
        SGP4 PROPAGATOR // ACTIVE
      </div>
    </div>
  );
}
