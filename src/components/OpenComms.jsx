import React, { useState } from 'react';
import { ArrowUpRight, Download, Mail, Check, Send, Terminal, Radio } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function OpenComms({ onOpenResume, onNotify }) {
  const { comms } = PORTFOLIO_DATA.operator;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [senderName, setSenderName] = useState('');
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [transmissionSuccess, setTransmissionSuccess] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(comms.email);
    setCopiedEmail(true);
    if (onNotify) {
      onNotify(`CARRIER FREQUENCY LOCKED: ${comms.email} copied to clipboard`);
    }
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleTransmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsTransmitting(true);
    setTimeout(() => {
      setIsTransmitting(false);
      setTransmissionSuccess(true);
      if (onNotify) {
        onNotify('UPLINK DISPATCHED // TRANSMISSION ACKNOWLEDGED');
      }
      // Trigger mailto client
      const mailtoUrl = `mailto:${comms.email}?subject=${encodeURIComponent(
        subject || 'Ground Infrastructure Inquiry // Suryansh Gupta'
      )}&body=${encodeURIComponent(`Sender: ${senderName || 'Anonymous Operator'}\n\n${message}`)}`;
      window.open(mailtoUrl, '_blank');
      
      setTimeout(() => {
        setMessage('');
        setSubject('');
        setSenderName('');
        setTransmissionSuccess(false);
      }, 4000);
    }, 800);
  };

  return (
    <section className="w-full px-4 sm:px-6 md:px-12 py-12" id="comms">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 pb-3 border-b border-outline-variant">
          <div>
            <span className="font-label-md text-label-md text-primary uppercase tracking-widest block font-medium">
              SYS.SECTOR // 04
            </span>
            <h2 className="font-headline text-3xl sm:text-headline-lg font-bold text-on-surface">
              Open Comms
            </h2>
          </div>
          <span className="font-label-md text-label-sm text-outline uppercase tracking-widest">
            // DIRECT UPLINK CHANNELS
          </span>
        </div>

        {/* High-Precision Terminal Uplink Card */}
        <div className="bg-surface-container-low border border-outline-variant rounded p-6 md:p-8 space-y-6 shadow-sm relative overflow-hidden">
          
          {/* Status Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-outline-variant">
            <div>
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block font-medium">
                UPLINK CARRIER READY
              </span>
              <p className="font-headline text-xl sm:text-headline-md text-on-surface font-semibold mt-1">
                Open to software engineering internships and entry-level full-stack roles starting Summer 2025.
              </p>
            </div>
            
            <div className="shrink-0 flex items-center gap-2 px-3 py-1.5 rounded border border-outline-variant bg-surface-container font-label-sm text-label-sm text-on-surface-variant self-start md:self-auto">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span>STANDBY</span>
            </div>
          </div>

          {/* Telemetry Connection Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Comm 1: Email */}
            <div
              onClick={handleCopyEmail}
              className="p-4 rounded border border-outline-variant bg-surface-container hover:bg-surface-container-high transition-all flex flex-col justify-between group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-label-sm text-label-sm text-outline tracking-widest block">
                  [EMAIL LINK]
                </span>
                {copiedEmail ? (
                  <span className="font-label-sm text-[10px] text-primary-container font-bold flex items-center gap-0.5">
                    <Check className="w-3 h-3" /> COPIED
                  </span>
                ) : (
                  <span className="font-label-sm text-[10px] text-outline group-hover:text-primary-container">
                    CLICK TO COPY
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between">
                <span className="font-label-md text-label-md text-primary-container truncate font-semibold">
                  {comms.email}
                </span>
                <ArrowUpRight className="w-4 h-4 text-primary-container group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-1" />
              </div>
            </div>

            {/* Comm 2: GitHub */}
            <a
              href={comms.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded border border-outline-variant bg-surface-container hover:bg-surface-container-high transition-all flex flex-col justify-between group"
            >
              <span className="font-label-sm text-label-sm text-outline tracking-widest block mb-2">
                [GITHUB PROFILE]
              </span>
              <div className="flex items-center justify-between">
                <span className="font-label-md text-label-md text-on-surface truncate">
                  {comms.githubUser}
                </span>
                <ArrowUpRight className="w-4 h-4 text-outline group-hover:text-primary-container group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-1" />
              </div>
            </a>

            {/* Comm 3: LinkedIn */}
            <a
              href={comms.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded border border-outline-variant bg-surface-container hover:bg-surface-container-high transition-all flex flex-col justify-between group"
            >
              <span className="font-label-sm text-label-sm text-outline tracking-widest block mb-2">
                [LINKEDIN NETWORK]
              </span>
              <div className="flex items-center justify-between">
                <span className="font-label-md text-label-md text-on-surface truncate">
                  {comms.linkedinUser}
                </span>
                <ArrowUpRight className="w-4 h-4 text-outline group-hover:text-primary-container group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-1" />
              </div>
            </a>

            {/* Comm 4: Resume */}
            <button
              type="button"
              onClick={onOpenResume}
              className="p-4 rounded border border-outline-variant bg-surface-container hover:bg-surface-container-high transition-all flex flex-col justify-between group text-left cursor-pointer"
            >
              <span className="font-label-sm text-label-sm text-outline tracking-widest block mb-2">
                [DOC // SPECIFICATION]
              </span>
              <div className="flex items-center justify-between">
                <span className="font-label-md text-label-md text-tertiary truncate font-semibold">
                  {comms.resumeFileName}
                </span>
                <Download className="w-4 h-4 text-tertiary group-hover:translate-y-0.5 transition-transform shrink-0 ml-1" />
              </div>
            </button>
          </div>

          {/* Interactive Direct Carrier Dispatch Console */}
          <div className="bg-surface-container border border-outline-variant rounded p-4 space-y-3">
            <div className="flex items-center justify-between border-b border-outline-variant pb-2">
              <span className="font-label-sm text-label-sm text-outline tracking-widest uppercase flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-primary" />
                DIRECT CARRIER DISPATCH CONSOLE [PACKET TRANSMIT]
              </span>
              <span className="font-label-sm text-[10px] text-secondary uppercase">
                STATUS: READY
              </span>
            </div>

            <form onSubmit={handleTransmit} className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="IDENTIFIER (Your Name / Org) >_"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="bg-surface-container-low border border-outline-variant rounded px-3 py-2 font-label-md text-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-on-surface"
                />
                <input
                  type="text"
                  placeholder="SUBJECT (Role / Collaboration / Inquiry) >_"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="bg-surface-container-low border border-outline-variant rounded px-3 py-2 font-label-md text-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-on-surface"
                />
              </div>

              <div className="relative">
                <textarea
                  rows="3"
                  placeholder="TRANSMISSION PAYLOAD: Enter operational inquiry, contract details, or schedule request..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full bg-surface-container-low border border-outline-variant rounded p-3 font-label-md text-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-on-surface resize-none"
                ></textarea>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-label-sm text-[11px] text-outline">
                  {message.length} BYTES ENCODED
                </span>

                <button
                  type="submit"
                  disabled={isTransmitting || !message.trim()}
                  className={`px-4 py-2 rounded border border-primary font-label-md text-label-md uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all ${
                    isTransmitting
                      ? 'bg-outline-variant text-outline cursor-wait'
                      : 'bg-primary-container text-white hover:bg-primary active:scale-95'
                  }`}
                >
                  {isTransmitting ? (
                    <>
                      <Radio className="w-3.5 h-3.5 animate-spin" />
                      <span>DISPATCHING...</span>
                    </>
                  ) : transmissionSuccess ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>ACKNOWLEDGED</span>
                    </>
                  ) : (
                    <>
                      <span>TRANSMIT PACKET</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Carrier Metadata Footer */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-2 font-label-sm text-[0.7rem] text-outline uppercase tracking-widest gap-2">
            <span>FREQUENCY: {comms.frequency}</span>
            <span>RESPONSE LATENCY: {comms.latency}</span>
          </div>

        </div>

      </div>
    </section>
  );
}
