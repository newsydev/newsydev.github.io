import React, { useState, useEffect } from 'react';
import { ArrowUpRight, User, Menu, X, Terminal } from 'lucide-react';

export default function Navbar({ activeSection, onOpenResume, onOpenOperator }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'OVERVIEW', href: '#overview', id: 'overview' },
    { name: 'MISSIONS', href: '#missions', id: 'missions' },
    { name: 'LOG', href: '#log', id: 'log' },
    { name: 'SYSTEMS', href: '#systems', id: 'systems' },
    { name: 'COMMS', href: '#comms', id: 'comms' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-200 border-b border-outline-variant ${
      scrolled ? 'bg-surface/95 backdrop-blur-md py-0 shadow-sm' : 'bg-surface/90 backdrop-blur-sm'
    }`}>
      <div className="h-16 w-full px-4 sm:px-6 md:px-12 flex items-center justify-between gap-4">
        {/* Left Side: Telemetry Status & Callout */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-surface-container-low border border-outline-variant">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="font-label-md text-[12px] sm:text-label-md text-primary-container font-semibold uppercase tracking-wider">
              ONLINE
            </span>
          </div>

          <a href="#overview" className="flex items-baseline gap-1 group">
            <span className="font-headline-md text-headline-md font-bold tracking-tight text-on-surface group-hover:text-primary transition-colors">
              SG
            </span>
            <span className="font-label-md text-label-md text-outline">//</span>
            <span className="font-label-md text-label-md uppercase tracking-wider text-primary font-medium hidden xs:inline-block">
              MISSION CONTROL
            </span>
          </a>
        </div>

        {/* Right Side: Navigation & Actions */}
        <div className="flex items-center gap-3 sm:gap-6">
          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`text-label-md uppercase tracking-wider transition-colors py-1 ${
                    isActive
                      ? 'text-primary font-semibold border-b-2 border-primary -mb-[2px]'
                      : 'text-on-surface-variant hover:text-on-surface font-normal'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Resume Quick Trigger */}
          <button
            onClick={onOpenResume}
            className="px-3 py-1.5 rounded border border-outline-variant font-label-md text-label-md uppercase text-on-surface bg-surface-container hover:bg-primary-container hover:text-on-primary-container transition-all flex items-center gap-1 cursor-pointer active:scale-95"
            title="Inspect Operator Technical Specification"
          >
            <span className="font-medium">RESUME</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Operator Profile Modal Trigger */}
          <button
            onClick={onOpenOperator}
            className="w-8 h-8 rounded border border-outline-variant bg-surface-container-high hover:bg-surface-container-highest transition-colors flex items-center justify-center shrink-0 cursor-pointer active:scale-95"
            title="View Operator Bio & Coordinates"
          >
            <User className="w-4 h-4 text-on-surface" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded border border-outline-variant text-on-surface hover:bg-surface-container transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-container border-b border-outline-variant px-6 py-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="text-label-sm text-outline uppercase tracking-widest pb-1 border-b border-outline-variant">
            NAVIGATION SECTORS
          </div>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-1.5 font-label-md text-label-md uppercase tracking-wider ${
                activeSection === link.id
                  ? 'text-primary font-bold pl-2 border-l-2 border-primary'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-outline-variant flex items-center justify-between text-label-sm text-outline">
            <span>KANPUR GS-01</span>
            <span className="text-secondary font-semibold">ALL SYSTEMS NOMINAL</span>
          </div>
        </div>
      )}
    </header>
  );
}
