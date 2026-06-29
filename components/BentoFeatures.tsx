'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* ------------------------------------------------------------------ */
/*  Reusable sub-components                                            */
/* ------------------------------------------------------------------ */

function CardIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      width={48}
      height={48}
      style={{
        width: 48,
        height: 48,
        borderRadius: 'var(--radius-sm, 8px)',
        objectFit: 'cover',
        flexShrink: 0,
      }}
    />
  );
}

function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{
        fontFamily: 'var(--font-heading, "Outfit", sans-serif)',
        fontSize: '1.15rem',
        fontWeight: 600,
        color: 'var(--text-primary, #F0EDE8)',
        margin: '0.75rem 0 0.35rem',
        lineHeight: 1.3,
      }}
    >
      {children}
    </h3>
  );
}

function CardDesc({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: 'var(--font-body, "Plus Jakarta Sans", sans-serif)',
        fontSize: '0.875rem',
        color: 'var(--text-secondary, #8A8F9E)',
        lineHeight: 1.6,
        margin: 0,
      }}
    >
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/*  Card 2 – SVG Gauge                                                 */
/* ------------------------------------------------------------------ */

function CircleGauge() {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const size = 120;
  const strokeWidth = 3;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const fillPercent = 0.999;
  const offset = circumference * (1 - fillPercent);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '1.25rem',
        position: 'relative',
      }}
    >
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ transform: 'rotate(-90deg)' }}
      >
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--border-subtle, rgba(255,255,255,0.06))"
          strokeWidth={strokeWidth}
        />
        {/* Fill */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--accent-indigo, #6366F1)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={isInView ? { strokeDashoffset: offset } : {}}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
        />
      </svg>
      <span
        style={{
          position: 'absolute',
          fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)',
          fontSize: '1.5rem',
          fontWeight: 600,
          color: 'var(--text-primary, #F0EDE8)',
        }}
      >
        99.9%
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Card 3 – Code Block                                                */
/* ------------------------------------------------------------------ */

function CodeBlock() {
  const kw = 'var(--accent-indigo, #6366F1)';
  const str = 'var(--accent-cyan, #22D3EE)';
  const prop = 'var(--text-warm, #D4CFC6)';
  const txt = 'var(--text-secondary, #8A8F9E)';
  const punc = 'var(--text-muted, #4A4E5A)';

  return (
    <div
      style={{
        marginTop: '1.25rem',
        background: 'var(--bg-primary, #050507)',
        border: '1px solid var(--border-subtle, rgba(255,255,255,0.06))',
        borderRadius: 'var(--radius-md, 12px)',
        padding: '1rem 1.15rem',
        overflowX: 'auto',
      }}
    >
      <pre
        style={{
          margin: 0,
          fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)',
          fontSize: '0.75rem',
          lineHeight: 1.7,
          whiteSpace: 'pre',
          color: txt,
        }}
      >
        <code>
          <S c={kw}>const</S> <S c={prop}>aether</S> <S c={punc}>=</S>{' '}
          <S c={kw}>new</S> <S c={prop}>AetherAI</S>
          <S c={punc}>{'({'}</S>
          {'\n'}
          {'  '}<S c={prop}>apiKey</S><S c={punc}>:</S>{' '}
          <S c={str}>&#39;sk-aether-...&#39;</S><S c={punc}>,</S>
          {'\n'}
          {'  '}<S c={prop}>model</S><S c={punc}>:</S>{' '}
          <S c={str}>&#39;aether-v4-turbo&#39;</S>
          {'\n'}
          <S c={punc}>{'});'}</S>
          {'\n\n'}
          <S c={kw}>const</S> <S c={prop}>agent</S> <S c={punc}>=</S>{' '}
          <S c={kw}>await</S> <S c={prop}>aether</S>
          <S c={punc}>.</S><S c={prop}>deploy</S>
          <S c={punc}>{'({'}</S>
          {'\n'}
          {'  '}<S c={prop}>task</S><S c={punc}>:</S>{' '}
          <S c={str}>&#39;analyze-pipeline&#39;</S><S c={punc}>,</S>
          {'\n'}
          {'  '}<S c={prop}>region</S><S c={punc}>:</S>{' '}
          <S c={str}>&#39;auto&#39;</S>
          {'\n'}
          <S c={punc}>{'});'}</S>
        </code>
      </pre>
    </div>
  );
}

/** Syntax span helper */
function S({ c, children }: { c: string; children: React.ReactNode }) {
  return <span style={{ color: c }}>{children}</span>;
}

/* ------------------------------------------------------------------ */
/*  Card 4 – Mini-stat cards                                           */
/* ------------------------------------------------------------------ */

const miniStats = [
  { value: '143', label: 'Edge Locations' },
  { value: '<15ms', label: 'P99 Latency' },
  { value: '99.97%', label: 'Uptime SLA' },
];

function StatsRow() {
  return (
    <div
      style={{
        display: 'flex',
        gap: '0.75rem',
        marginTop: '1.5rem',
        flexWrap: 'wrap',
      }}
    >
      {miniStats.map((s) => (
        <div
          key={s.label}
          style={{
            flex: '1 1 0',
            minWidth: 100,
            background: 'rgba(5, 5, 7, 0.5)',
            border: '1px solid var(--border-subtle, rgba(255,255,255,0.06))',
            borderRadius: 'var(--radius-md, 12px)',
            padding: '1rem',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)',
              fontSize: '1.5rem',
              fontWeight: 600,
              color: 'var(--text-primary, #F0EDE8)',
              lineHeight: 1.2,
            }}
          >
            {s.value}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-body, "Plus Jakarta Sans", sans-serif)',
              fontSize: '0.75rem',
              color: 'var(--text-muted, #4A4E5A)',
              marginTop: '0.35rem',
            }}
          >
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export default function BentoFeatures() {
  return (
    <>
      <style>{`
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        .bento-span-2 {
          grid-column: span 2;
        }

        @media (max-width: 900px) {
          .bento-grid {
            grid-template-columns: 1fr;
          }
          .bento-span-2 {
            grid-column: span 1;
          }
        }
      `}</style>

      <section id="features" className="section-padding">
        <div className="container">
          {/* ---- Header ---- */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            style={{ textAlign: 'center', marginBottom: '3.5rem' }}
          >
            <motion.span className="eyebrow" variants={headerVariants}>
              CAPABILITIES
            </motion.span>

            <motion.h2
              className="display-heading gradient-text-subtle"
              variants={headerVariants}
              style={{ marginTop: '0.75rem' }}
            >
              Built for teams that ship fast.
            </motion.h2>

            <motion.p
              variants={headerVariants}
              style={{
                fontFamily: 'var(--font-body, "Plus Jakarta Sans", sans-serif)',
                fontSize: '1.05rem',
                color: 'var(--text-secondary, #8A8F9E)',
                maxWidth: 520,
                margin: '1rem auto 0',
                lineHeight: 1.6,
              }}
            >
              A modular runtime with enterprise-grade reliability, designed to
              integrate in minutes.
            </motion.p>
          </motion.div>

          {/* ---- Grid ---- */}
          <motion.div
            className="bento-grid"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
          >
            {/* CARD 1 — Autonomous Cognitive Engine (span 2) */}
            <motion.div
              className="glass-card bento-span-2"
              variants={cardVariants}
              style={{
                position: 'relative',
                overflow: 'hidden',
                padding: '2rem',
              }}
            >
              {/* Video bg */}
              <video
                src="/bento_grid.mp4"
                autoPlay
                loop
                muted
                playsInline
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.15,
                  pointerEvents: 'none',
                }}
              />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <CardIcon src="/images/icon_engine.jpg" alt="Engine icon" />
                <CardTitle>Autonomous Cognitive Engine</CardTitle>
                <CardDesc>
                  Multi-step reasoning and tool orchestration that adapts to
                  complex workflows without manual chaining.
                </CardDesc>

                <div style={{ marginTop: '1.5rem' }}>
                  <span
                    className="display-heading gradient-text-hero"
                    style={{
                      fontSize: '3.5rem',
                      lineHeight: 1,
                      display: 'block',
                    }}
                  >
                    47ms
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-body, "Plus Jakarta Sans", sans-serif)',
                      fontSize: '0.8rem',
                      color: 'var(--text-muted, #4A4E5A)',
                      marginTop: '0.25rem',
                      display: 'block',
                    }}
                  >
                    average inference time
                  </span>
                </div>
              </div>
            </motion.div>

            {/* CARD 2 — Ultra-Low Latency */}
            <motion.div
              className="glass-card"
              variants={cardVariants}
              style={{ padding: '2rem' }}
            >
              <CardIcon src="/images/icon_speed.jpg" alt="Speed icon" />
              <CardTitle>Ultra-Low Latency</CardTitle>
              <CardDesc>
                Sub-millisecond routing across a global mesh of inference nodes.
              </CardDesc>
              <CircleGauge />
            </motion.div>

            {/* CARD 3 — Developer SDK */}
            <motion.div
              className="glass-card"
              variants={cardVariants}
              style={{ padding: '2rem' }}
            >
              <CardIcon src="/images/icon_terminal.jpg" alt="Terminal icon" />
              <CardTitle>Developer SDK</CardTitle>
              <CardDesc>
                Ship agents in minutes with a TypeScript-first SDK and zero
                boilerplate.
              </CardDesc>
              <CodeBlock />
            </motion.div>

            {/* CARD 4 — Global Edge Infrastructure (span 2) */}
            <motion.div
              className="glass-card bento-span-2"
              variants={cardVariants}
              style={{
                position: 'relative',
                overflow: 'hidden',
                padding: '2rem',
              }}
            >
              {/* Blurred bg image */}
              <img
                src="/images/icon_global.jpg"
                alt=""
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.12,
                  filter: 'blur(40px)',
                  pointerEvents: 'none',
                }}
              />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <CardIcon src="/images/icon_global.jpg" alt="Global icon" />
                <CardTitle>Global Edge Infrastructure</CardTitle>
                <CardDesc>
                  Requests are routed to the nearest node for minimal round-trip
                  time, with automatic failover across regions.
                </CardDesc>
                <StatsRow />
              </div>
            </motion.div>

            {/* CARD 5 — 10× Faster */}
            <motion.div
              className="glass-card"
              variants={cardVariants}
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                borderTop: '2px solid rgba(99, 102, 241, 0.3)',
              }}
            >
              <span
                className="display-heading gradient-text-hero"
                style={{
                  fontSize: '4rem',
                  lineHeight: 1,
                  display: 'block',
                }}
              >
                10×
              </span>
              <p
                style={{
                  fontFamily: 'var(--font-body, "Plus Jakarta Sans", sans-serif)',
                  fontSize: '0.875rem',
                  color: 'var(--text-secondary, #8A8F9E)',
                  marginTop: '0.75rem',
                  lineHeight: 1.5,
                  maxWidth: 200,
                }}
              >
                Faster than legacy orchestration frameworks
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
