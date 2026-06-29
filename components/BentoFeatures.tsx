import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

// Hover tilt card wrapper component
function BentoCard({ children, style = {}, className = '', delay = 0 }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Map mouse position to rotation values (max 8 degrees tilt)
  const rotateX = useTransform(y, [0, 1], [8, -8]);
  const rotateY = useTransform(x, [0, 1], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width);
    y.set(mouseY / height);
    
    // Set custom CSS variables for spot-light cursor hover effect in globals.css
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
      initial={{ opacity: 0, y: 30 }}
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
      <div style={{ transform: 'translateZ(30px)', height: '100%' }}>
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
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--accent-indigo)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '1rem',
            }}
          >
            Capabilities
          </span>
          <h2
            className="gradient-text"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Engineered for High-Performance Workflows
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {/* Card 1: Chat Engine */}
          <BentoCard className="bento-span-2" delay={0.1}>
            {/* Background looping abstract grid video */}
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
                opacity: 0.25,
                zIndex: 0,
                pointerEvents: 'none',
              }}
            >
              <source src="/AI-Generated-Videos/watermark-removed-Abstract_grid_pulsing_neon_light_202606291351.mp4" type="video/mp4" />
            </video>
            
            {/* Card Content Overlay */}
            <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>AI Engine</span>
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Autonomous Cognitive Chat</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', maxWidth: '400px' }}>Interact directly with models optimized for rapid logic generation, system execution, and API deployment.</p>
              </div>

              {/* Chat UI Mockup */}
              <div 
                style={{
                  marginTop: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  background: 'rgba(5, 5, 10, 0.4)',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(255, 255, 255, 0.04)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <div style={{ background: 'var(--accent-indigo)', padding: '0.5rem 1rem', borderRadius: '14px 14px 2px 14px', fontSize: '0.8rem', color: '#fff', maxWidth: '80%' }}>
                    Generate a secure endpoint structure.
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <div style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--glass-border)', padding: '0.5rem 1rem', borderRadius: '14px 14px 14px 2px', fontSize: '0.8rem', color: 'var(--text-secondary)', maxWidth: '85%' }}>
                    Creating endpoint... Deploying model to regional Edge routers.
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <div style={{ background: 'rgba(6, 182, 212, 0.1)', border: '1px solid rgba(6, 182, 212, 0.2)', padding: '0.5rem 1rem', borderRadius: '14px 14px 14px 2px', fontSize: '0.8rem', color: 'var(--accent-cyan)', fontFamily: 'monospace', maxWidth: '90%' }}>
                    ⚡ Endpoint active: https://api.aether.ai/v1/query
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Card 2: Speed / Metrics */}
          <BentoCard delay={0.2} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Performance</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Ultra-Low Latency</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Globally scaled architecture ensures speed remains flat under high loads.</p>
            </div>

            {/* Glowing circle animation */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '2rem 0', position: 'relative' }}>
              <svg width="120" height="120" viewBox="0 0 120 120" className="rotate-svg">
                <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(6, 182, 212, 0.1)" strokeWidth="4" />
                <circle 
                  cx="60" 
                  cy="60" 
                  r="50" 
                  fill="none" 
                  stroke="var(--accent-cyan)" 
                  strokeWidth="4" 
                  strokeDasharray="314"
                  strokeDashoffset="60"
                  strokeLinecap="round"
                  style={{
                    filter: 'drop-shadow(0 0 8px var(--accent-cyan))',
                    animation: 'spin-circle 8s linear infinite'
                  }}
                />
              </svg>
              <div style={{ position: 'absolute', fontSize: '1.75rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                99.9%
              </div>
            </div>
          </BentoCard>

          {/* Card 3: Dev API Terminal */}
          <BentoCard delay={0.3} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-violet)" strokeWidth="2"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Developer API</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Declarative Scaling</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Instantiate and configure agents directly with a clean, modern SDK structure.</p>
            </div>

            {/* Code Box */}
            <div 
              style={{
                marginTop: '1.5rem',
                background: '#05050A',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: 'var(--radius-md)',
                padding: '1rem',
                fontFamily: 'monospace',
                fontSize: '0.75rem',
                lineHeight: 1.5,
                overflowX: 'hidden'
              }}
            >
              <div><span style={{ color: 'var(--accent-violet)' }}>const</span> client = <span style={{ color: '#fff' }}>new</span> <span style={{ color: 'var(--accent-cyan)' }}>Aether</span>();</div>
              <div><span style={{ color: 'var(--accent-violet)' }}>const</span> agent = <span style={{ color: '#fff' }}>await</span> client.<span style={{ color: 'var(--accent-indigo)' }}>spawn</span>({'{'}</div>
              <div style={{ paddingLeft: '1rem' }}>model: <span style={{ color: 'var(--accent-cyan)' }}>"cognitive-v2"</span>,</div>
              <div style={{ paddingLeft: '1rem' }}>scale: <span style={{ color: 'var(--accent-cyan)' }}>"auto"</span></div>
              <div>{'})'};</div>
            </div>
          </BentoCard>

          {/* Card 4: Global Edge network */}
          <BentoCard className="bento-span-2" delay={0.4}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-indigo)" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Network</span>
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Global Edge Infrastructure</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', maxWidth: '400px' }}>Your AI models run on local regional nodes, cutting latency down to minimal single-digit response rates.</p>
              </div>

              {/* Map Illustration SVG */}
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem', opacity: 0.85, position: 'relative' }}>
                <svg width="100%" height="160" viewBox="0 0 600 200" fill="none">
                  {/* Dot Grid Map Representation */}
                  <pattern id="dotMap" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.5" fill="rgba(255, 255, 255, 0.15)" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#dotMap)" style={{ maskImage: 'radial-gradient(ellipse at center, white, transparent 75%)' }} />
                  
                  {/* Connection Node Lines */}
                  <path d="M120,60 L280,100 L440,50 L480,120 L320,150 L120,60" stroke="rgba(99, 102, 241, 0.25)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <path d="M280,100 L320,150" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="1" />

                  {/* Pulsing City Nodes */}
                  <circle cx="120" cy="60" r="4" fill="var(--accent-indigo)" />
                  <circle cx="120" cy="60" r="10" stroke="var(--accent-indigo)" strokeWidth="1" fill="none" opacity="0.5" className="map-ping" />

                  <circle cx="280" cy="100" r="4" fill="var(--accent-cyan)" />
                  <circle cx="280" cy="100" r="10" stroke="var(--accent-cyan)" strokeWidth="1" fill="none" opacity="0.5" className="map-ping-cyan" />

                  <circle cx="440" cy="50" r="4" fill="var(--accent-violet)" />
                  <circle cx="440" cy="50" r="10" stroke="var(--accent-violet)" strokeWidth="1" fill="none" opacity="0.5" className="map-ping" />

                  <circle cx="480" cy="120" r="4" fill="var(--accent-indigo)" />
                  <circle cx="320" cy="150" r="4" fill="var(--accent-cyan)" />
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
          0% { r: 4; opacity: 1; }
          100% { r: 16; opacity: 0; }
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
