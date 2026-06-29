'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '12.4B', label: 'tokens processed' },
  { value: '99.97%', label: 'uptime' },
  { value: '143', label: 'edge locations' },
];

const logos = [
  'OpenAI',
  'Stripe',
  'Vercel',
  'Linear',
  'Notion',
  'Figma',
  'GitHub',
  'Anthropic',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Marquee() {
  return (
    <>
      <style>{`
        .marquee-stats-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 3rem;
        }

        .marquee-stat-item {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
          padding-right: 3rem;
          border-right: 1px solid var(--border-subtle, rgba(255,255,255,0.06));
        }

        .marquee-stat-item:last-child {
          padding-right: 0;
          border-right: none;
        }

        .marquee-logo-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .marquee-stats-row {
            gap: 2rem;
          }
          .marquee-stat-item {
            padding-right: 2rem;
          }
          .marquee-logo-row {
            gap: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .marquee-stats-row {
            flex-direction: column;
            gap: 1.25rem;
          }
          .marquee-stat-item {
            padding-right: 0;
            border-right: none;
            padding-bottom: 1.25rem;
            border-bottom: 1px solid var(--border-subtle, rgba(255,255,255,0.06));
          }
          .marquee-stat-item:last-child {
            padding-bottom: 0;
            border-bottom: none;
          }
        }
      `}</style>

      <section id="logos" style={{ padding: '4rem 0' }}>
        <hr className="section-divider" />

        <motion.div
          className="container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '3rem',
          }}
        >
          {/* Stat Banner */}
          <motion.div className="marquee-stats-row" variants={itemVariants}>
            {stats.map((stat) => (
              <div className="marquee-stat-item" key={stat.label}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    color: 'var(--text-primary, #F0EDE8)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-body, "Plus Jakarta Sans", sans-serif)',
                    fontSize: '0.85rem',
                    color: 'var(--text-muted, #4A4E5A)',
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Eyebrow */}
          <motion.span
            className="eyebrow"
            variants={itemVariants}
            style={{ marginTop: '3rem' }}
          >
            POWERING INTELLIGENCE AT
          </motion.span>

          {/* Logo Row */}
          <motion.div
            className="marquee-logo-row"
            variants={itemVariants}
            style={{ marginTop: '1.5rem' }}
          >
            {logos.map((name) => (
              <span
                key={name}
                style={{
                  fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted, #4A4E5A)',
                  opacity: 0.5,
                  userSelect: 'none',
                  letterSpacing: '0.02em',
                }}
              >
                {name}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
