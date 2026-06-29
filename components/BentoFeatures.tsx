import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

// Hover tilt card wrapper component
function BentoCard({ children, style = {}, className = '', delay = 0 }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [6, -6]);
  const rotateY = useTransform(x, [0, 1], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width);
    y.set(mouseY / height);
    
    cardRef.current.style.setProperty('--x', `${mouseX}px`);
    cardRef.current.style.setProperty('--y', `${mouseY}px`);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{
        ...style,
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      className={`glass-card ${className}`}
    >
      <div style={{ transform: 'translateZ(20px)', height: '100%' }}>
        {children}
      </div>
    </motion.div>
  );
}

export default function BentoFeatures() {
  return (
    <section 
      id="features"
      style={{
        background: 'var(--bg-primary)',
        position: 'relative',
        zIndex: 5,
        width: '100%',
        overflow: 'hidden',
      }}
      className="section-padding"
    >
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span className="premium-badge" style={{ marginBottom: '1.25rem' }}>
            Capabilities
          </span>
          <h2
            className="gradient-text"
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.1,
            }}
          >
            Engineered for Autonomous Core Logic
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          
          {/* Card 1: Chat Engine */}
          <BentoCard className="bento-span-2" delay={0.1}>
            {/* Background looping grid video */}
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.18,
                zIndex: 0,
                pointerEvents: 'none',
              }}
            >
              <source src="/videos/bento_grid.mp4" type="video/mp4" />
            </video>
            
            <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <img 
                    src="/images/icon_engine.jpg" 
                    alt="Engine" 
                    style={{ width: '28px', height: '28px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.08)' }} 
                  />
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>AI Engine</span>
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>Autonomous Cognitive Chat</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', maxWidth: '420px', lineHeight: 1.5 }}>
                  Interact with custom fine-tuned weights capable of compiling queries, executing system code, and routing endpoints globally.
                </p>
              </div>

              {/* Chat UI Mockup */}
              <div 
                style={{
                  marginTop: '3rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  background: 'rgba(5, 5, 10, 0.7)',
                  backdropFilter: 'blur(8px)',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <div style={{ background: 'var(--accent-indigo)', padding: '0.5rem 1rem', borderRadius: '14px 14px 2px 14px', fontSize: '0.8rem', color: '#fff', fontWeight: 500 }}>
                    Deploy routing schema.
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <div style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--glass-border)', padding: '0.5rem 1rem', borderRadius: '14px 14px 14px 2px', fontSize: '0.8rem', color: 'var(--text-secondary)', maxWidth: '85%' }}>
                    Schema compiled. Syncing with regional edge clusters.
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <div style={{ background: 'rgba(6, 182, 212, 0.1)', border: '1px solid rgba(6, 182, 212, 0.2)', padding: '0.5rem 1rem', borderRadius: '14px 14px 14px 2px', fontSize: '0.8rem', color: 'var(--accent-cyan)', fontFamily: 'monospace', fontWeight: 500 }}>
                    ⚡ deployment active: aether.sh/route/90a2
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Card 2: Speed / Metrics */}
          <BentoCard delay={0.2} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <img 
                  src="/images/icon_speed.jpg" 
                  alt="Speed" 
                  style={{ width: '28px', height: '28px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.08)' }} 
                />
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Performance</span>
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>Ultra-Low Latency</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Edge-cached memory registers ensure response curves remain flat during peak requests.
              </p>
            </div>

            {/* Glowing circle animation */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '2.5rem 0', position: 'relative' }}>
              <svg width="110" height="110" viewBox="0 0 120 120" className="rotate-svg">
                <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="4" />
                <circle 
                  cx="60" 
                  cy="60" 
                  r="50" 
                  fill="none" 
                  stroke="url(#speedGlow)" 
                  strokeWidth="4" 
                  strokeDasharray="314"
                  strokeDashoffset="75"
                  strokeLinecap="round"
                  style={{
                    filter: 'drop-shadow(0 0 6px var(--accent-cyan))',
                    animation: 'spin-circle 6s linear infinite'
                  }}
                />
                <defs>
                  <linearGradient id="speedGlow" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="var(--accent-cyan)" />
                    <stop offset="100%" stopColor="var(--accent-indigo)" />
                  </linearGradient>
                </defs>
              </svg>
              <div style={{ position: 'absolute', fontSize: '1.65rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                99.9%
              </div>
            </div>
          </BentoCard>

          {/* Card 3: Dev API Terminal */}
          <BentoCard delay={0.3} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <img 
                  src="/images/icon_terminal.jpg" 
                  alt="Terminal" 
                  style={{ width: '28px', height: '28px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.08)' }} 
                />
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Developer SDK</span>
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>Declarative Sync</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Initialize, secure, and route modular agent parameters with a clean, fully typed interface.
              </p>
            </div>

            {/* Code Box */}
            <div 
              style={{
                marginTop: '1.5rem',
                background: '#040408',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: 'var(--radius-md)',
                padding: '1.15rem 1rem',
                fontFamily: 'monospace',
                fontSize: '0.75rem',
                lineHeight: 1.6,
                overflowX: 'hidden',
                boxShadow: 'inset 0 10px 30px rgba(0,0,0,0.8)'
              }}
            >
              <div><span style={{ color: 'var(--accent-violet)' }}>const</span> sdk = <span style={{ color: '#fff' }}>new</span> <span style={{ color: 'var(--accent-cyan)' }}>Aether</span>();</div>
              <div><span style={{ color: 'var(--accent-violet)' }}>const</span> node = <span style={{ color: '#fff' }}>await</span> sdk.<span style={{ color: 'var(--accent-indigo)' }}>spawn</span>({'{'}</div>
              <div style={{ paddingLeft: '1rem' }}>model: <span style={{ color: 'var(--accent-cyan)' }}>"cog-v2"</span>,</div>
              <div style={{ paddingLeft: '1rem' }}>sync: <span style={{ color: 'var(--accent-cyan)' }}>"edge"</span></div>
              <div>{'})'};</div>
            </div>
          </BentoCard>

          {/* Card 4: Global Edge network */}
          <BentoCard className="bento-span-2" delay={0.4}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <img 
                    src="/images/icon_global.jpg" 
                    alt="Global" 
                    style={{ width: '28px', height: '28px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.08)' }} 
                  />
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Network</span>
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>Global Edge Infrastructure</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', maxWidth: '440px', lineHeight: 1.5 }}>
                  Deploy custom agents locally across regional edge routers, cutting round-trip times down to minimal single-digit values.
                </p>
              </div>

              {/* Map Illustration SVG */}
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem', opacity: 0.85, position: 'relative' }}>
                {/* Underlay glow */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '300px',
                    height: '100px',
                    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 80%)',
                    filter: 'blur(30px)',
                    pointerEvents: 'none'
                  }}
                />
                
                <svg width="100%" height="160" viewBox="0 0 600 200" fill="none" style={{ position: 'relative', zIndex: 1 }}>
                  {/* Dot Grid Map Representation */}
                  <pattern id="dotMap" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.2" fill="rgba(255, 255, 255, 0.12)" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#dotMap)" style={{ maskImage: 'radial-gradient(ellipse at center, white, transparent 75%)' }} />
                  
                  {/* Connection Node Lines */}
                  <path d="M120,60 L280,100 L440,50 L480,120 L320,150 L120,60" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="1" strokeDasharray="3 3" />
                  <path d="M280,100 L320,150" stroke="rgba(6, 182, 212, 0.25)" strokeWidth="1" />

                  {/* Pulsing City Nodes */}
                  <circle cx="120" cy="60" r="4.5" fill="var(--accent-indigo)" />
                  <circle cx="120" cy="60" r="12" stroke="var(--accent-indigo)" strokeWidth="1" fill="none" opacity="0.45" className="map-ping" />

                  <circle cx="280" cy="100" r="4.5" fill="var(--accent-cyan)" />
                  <circle cx="280" cy="100" r="12" stroke="var(--accent-cyan)" strokeWidth="1" fill="none" opacity="0.45" className="map-ping-cyan" />

                  <circle cx="440" cy="50" r="4.5" fill="var(--accent-violet)" />
                  <circle cx="440" cy="50" r="12" stroke="var(--accent-violet)" strokeWidth="1" fill="none" opacity="0.45" className="map-ping" />

                  <circle cx="480" cy="120" r="4.5" fill="var(--accent-indigo)" />
                  <circle cx="320" cy="150" r="4.5" fill="var(--accent-cyan)" />
                </svg>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .bento-span-2 {
          grid-column: span 2;
        }

        @keyframes spin-circle {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .rotate-svg {
          transform-origin: center;
        }

        @keyframes ping {
          0% { r: 4.5; opacity: 1; }
          100% { r: 20; opacity: 0; }
        }

        .map-ping {
          transform-origin: center;
          animation: ping 2s ease-in-out infinite;
        }

        .map-ping-cyan {
          transform-origin: center;
          animation: ping 2.5s ease-in-out infinite;
        }

        @media (max-width: 900px) {
          .bento-grid {
            grid-template-columns: 1fr;
          }
          .bento-span-2 {
            grid-column: span 1;
          }
        }
      `}} />
    </section>
  );
}
