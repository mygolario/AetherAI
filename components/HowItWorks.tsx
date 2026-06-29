'use client';

import React from 'react';
import { motion } from 'framer-motion';

/* ─── data ─── */
const steps = [
  {
    num: '01',
    title: 'Connect Your Data',
    icon: '/images/icon_terminal.jpg',
    desc: 'Link databases, APIs, and file systems. End-to-end AES-256 encryption in transit and at rest.',
  },
  {
    num: '02',
    title: 'Train Models',
    icon: '/images/icon_engine.jpg',
    desc: 'Fine-tune foundation models on your proprietary datasets. Full control over hyperparameters and evaluation.',
  },
  {
    num: '03',
    title: 'Deploy to Edge',
    icon: '/images/icon_global.jpg',
    desc: 'One-click deployment to 143 edge locations. Zero cold starts, automatic scaling, instant rollbacks.',
  },
];

/* ─── animation variants ─── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

/* ─── component ─── */
export default function HowItWorks() {
  return (
    <>
      <style>{`
        .hiw-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          position: relative;
        }

        /* connecting line behind badges */
        .hiw-grid::before {
          content: '';
          position: absolute;
          top: 20px;
          left: calc(16.666% + 20px);
          right: calc(16.666% + 20px);
          height: 1px;
          background: var(--border-default, rgba(255,255,255,0.08));
          z-index: 0;
        }

        .hiw-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .hiw-badge {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid var(--border-default, rgba(255,255,255,0.08));
          background: var(--bg-elevated, #16161F);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 0.8rem;
          color: var(--text-primary, #F0EDE8);
          margin-bottom: 1.25rem;
          flex-shrink: 0;
        }

        .hiw-step-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          object-fit: cover;
          margin-bottom: 1rem;
        }

        .hiw-step-title {
          font-family: var(--font-heading, 'Outfit', sans-serif);
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary, #F0EDE8);
          margin: 0 0 0.5rem;
        }

        .hiw-step-desc {
          color: var(--text-secondary, #8A8F9E);
          font-size: 0.85rem;
          line-height: 1.6;
          margin: 0;
          max-width: 300px;
        }

        /* cinema video card */
        .hiw-cinema {
          margin-top: 4rem;
          position: relative;
          border-radius: var(--radius-xl, 20px);
          overflow: hidden;
        }

        .hiw-cinema video {
          width: 100%;
          display: block;
          aspect-ratio: 21 / 9;
          object-fit: cover;
        }

        .hiw-cinema-fade {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 40%;
          background: linear-gradient(to top, var(--bg-primary, #050507) 0%, transparent 100%);
          pointer-events: none;
        }

        .hiw-cinema-shadow {
          box-shadow: 0 24px 80px -12px rgba(99, 102, 241, 0.12),
                      0 8px 24px -4px rgba(0, 0, 0, 0.4);
        }

        @media (max-width: 768px) {
          .hiw-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .hiw-grid::before {
            display: none;
          }
        }
      `}</style>

      <section id="how-it-works" className="section-padding">
        <div className="container">
          {/* header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ textAlign: 'center', marginBottom: '3.5rem' }}
          >
            <span className="eyebrow">WORKFLOW</span>
            <h2 className="display-heading gradient-text-subtle">
              Three steps to production.
            </h2>
          </motion.div>

          {/* steps */}
          <motion.div
            className="hiw-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {steps.map((step) => (
              <motion.div
                key={step.num}
                className="hiw-step"
                variants={itemVariants}
              >
                <div className="hiw-badge">{step.num}</div>
                <img
                  src={step.icon}
                  alt={step.title}
                  className="hiw-step-icon"
                  loading="lazy"
                />
                <h3 className="hiw-step-title">{step.title}</h3>
                <p className="hiw-step-desc">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* cinema video card */}
          <motion.div
            className="hiw-cinema glass-card hiw-cinema-shadow"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <video
              src="/videos/stats_bg.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="hiw-cinema-fade" />
          </motion.div>
        </div>
      </section>
    </>
  );
}
