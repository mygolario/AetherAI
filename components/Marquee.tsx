import React from 'react';

const logos = [
  { name: 'OpenAI', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20"/></svg> },
  { name: 'Stripe', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg> },
  { name: 'Vercel', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L24 21H0L12 1Z"/></svg> },
  { name: 'Linear', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M21 12H3M12 3v18"/></svg> },
  { name: 'Notion', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4zM4 9h16M9 4v16"/></svg> },
  { name: 'Figma', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H10v5H7.5A2.5 2.5 0 0 1 5 5.5zM5 13a2.5 2.5 0 0 1 2.5-2.5H10v5H7.5A2.5 2.5 0 0 1 5 13zm5 5v-5h2.5a2.5 2.5 0 0 1 0 5H10zm0-10V3h2.5A2.5 2.5 0 0 1 15 5.5 2.5 2.5 0 0 1 12.5 8H10zM14 13a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z"/></svg> },
  { name: 'GitHub', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg> },
  { name: 'Anthropic', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4.5 16.5c1.5-3 1.5-9 0-12m15 12c-1.5-3-1.5-9 0-12M8 12h8"/></svg> }
];

export default function Marquee() {
  // Duplicate array to ensure seamless visual looping
  const doubleLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section
      style={{
        padding: '3rem 0',
        background: 'var(--bg-primary)',
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 5,
        borderBottom: '1px solid rgba(255, 255, 255, 0.02)'
      }}
    >
      <div 
        style={{
          textAlign: 'center',
          marginBottom: '2rem',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '0.75rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: 'var(--text-muted)',
          }}
        >
          TRUSTED BY INNOVATIVE TEAMS
        </span>
      </div>

      {/* Marquee Outer Container with Edge Fades */}
      <div 
        className="marquee-container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          width: '100%',
          position: 'relative',
        }}
      >
        {/* Row 1: Moving Left */}
        <div className="marquee-wrapper">
          <div className="marquee-track scroll-left">
            {doubleLogos.map((logo, idx) => (
              <div key={`left-${idx}`} className="logo-chip">
                <span className="logo-icon">{logo.icon}</span>
                <span className="logo-text">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Moving Right */}
        <div className="marquee-wrapper">
          <div className="marquee-track scroll-right">
            {doubleLogos.map((logo, idx) => (
              <div key={`right-${idx}`} className="logo-chip">
                <span className="logo-icon">{logo.icon}</span>
                <span className="logo-text">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Styles injection for high-performance animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        .marquee-container {
          mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent);
        }
        
        .marquee-wrapper {
          display: flex;
          overflow: hidden;
          width: 100%;
        }

        .marquee-track {
          display: flex;
          gap: 1.25rem;
          white-space: nowrap;
          width: max-content;
        }

        .logo-chip {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.75rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--glass-border);
          background: var(--glass-bg);
          backdrop-filter: var(--glass-blur);
          -webkit-backdrop-filter: var(--glass-blur);
          color: var(--text-secondary);
          transition: border-color var(--transition-fast), color var(--transition-fast), transform var(--transition-fast);
          cursor: pointer;
        }

        .logo-chip:hover {
          border-color: var(--glass-border-hover);
          color: var(--text-primary);
          transform: scale(1.02);
        }

        .logo-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          color: inherit;
        }

        .logo-text {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 500;
          letter-spacing: -0.01em;
        }

        /* Animations */
        .scroll-left {
          animation: marquee-scroll-left 40s linear infinite;
        }

        .scroll-right {
          animation: marquee-scroll-right 40s linear infinite;
        }

        /* Pause on Hover */
        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }

        @keyframes marquee-scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}} />
    </section>
  );
}
