import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// Count-up helper component
function StatCounter({ value, suffix, decimals = 0, duration = 1.5 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const end = parseFloat(value);
    if (start === end) return;

    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      // Easing out quadratic function
      const easeOutQuad = progress * (2 - progress);
      const currentVal = easeOutQuad * (end - start) + start;
      
      setDisplayValue(currentVal);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {displayValue.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function PerformanceStats() {
  return (
    <section
      id="stats"
      style={{
        position: 'relative',
        background: 'var(--bg-primary)',
        width: '100%',
        overflow: 'hidden',
        borderTop: '1px solid var(--glass-border)',
        borderBottom: '1px solid var(--glass-border)',
        padding: '6rem 0',
        zIndex: 5,
      }}
    >
      {/* Background looping tunnel video */}
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
        <source src="/AI-Generated-Videos/watermark-removed-Tunnel_of_glowing_data_streams_202606291355.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay mask */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to right, var(--bg-primary) 0%, rgba(5,5,10,0.4) 50%, var(--bg-primary) 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Main Grid Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="stats-grid"
        >
          {/* Stat 1 */}
          <div className="stat-column">
            <h3 className="gradient-text-accent stat-number">
              <StatCounter value="10" suffix="x" decimals={0} />
            </h3>
            <p className="stat-label">Faster than traditional ML pipelines</p>
          </div>

          {/* Stat 2 with subtle glow behind it */}
          <div className="stat-column" style={{ position: 'relative' }}>
            {/* Center column glow */}
            <div 
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '180px',
                height: '180px',
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
                filter: 'blur(30px)',
                zIndex: -1,
                pointerEvents: 'none'
              }}
            />
            <h3 className="gradient-text-accent stat-number">
              <StatCounter value="99.9" suffix="%" decimals={1} />
            </h3>
            <p className="stat-label">Guaranteed platform SLA uptime</p>
          </div>

          {/* Stat 3 */}
          <div className="stat-column">
            <h3 className="gradient-text-accent stat-number">
              <StatCounter value="15" suffix="ms" decimals={0} />
            </h3>
            <p className="stat-label">Average global response latency</p>
          </div>
        </motion.div>
      </div>

      {/* Styled Grid for Dividers */}
      <style dangerouslySetInnerHTML={{ __html: `
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          align-items: center;
          text-align: center;
        }

        .stat-column {
          padding: 2rem 1.5rem;
        }

        /* Border dividers for columns */
        .stat-column:not(:last-child) {
          border-right: 1px solid var(--glass-border);
        }

        .stat-number {
          font-size: clamp(3.5rem, 8vw, 6rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          margin-bottom: 0.5rem;
          line-height: 1;
        }

        .stat-label {
          font-family: var(--font-body);
          font-size: 1rem;
          color: var(--text-secondary);
          font-weight: 500;
          max-width: 250px;
          margin: 0 auto;
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .stat-column:not(:last-child) {
            border-right: none;
            border-bottom: 1px solid var(--glass-border);
          }
        }
      `}} />
    </section>
  );
}
