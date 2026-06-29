'use client';

import React from 'react';
import { motion } from 'framer-motion';

/* ─── data ─── */
const testimonials = [
  {
    quote:
      'AetherAI cut our inference pipeline from 2.1 seconds to 47 milliseconds. The edge deployment alone saved us $340K in annual infrastructure costs.',
    name: 'Sarah Kim',
    role: 'CTO',
    company: 'NovaTech',
    detail: 'Series B · 200 employees',
    avatar: '/images/avatar_1.jpg',
  },
  {
    quote:
      "We evaluated six platforms before choosing AetherAI. The SDK is the cleanest developer experience we've seen — our team was shipping agents within the first day.",
    name: 'James Rivera',
    role: 'Founder & CEO',
    company: 'Pulse AI',
    detail: 'Seed · 12 employees',
    avatar: '/images/avatar_2.jpg',
  },
  {
    quote:
      '99.97% uptime over 14 months with zero intervention. The auto-scaling handles our traffic spikes from 50 to 12,000 concurrent users without breaking a sweat.',
    name: 'Mia Chen',
    role: 'Lead Infrastructure Engineer',
    company: 'Orbit Labs',
    detail: 'Series A · 85 employees',
    avatar: '/images/avatar_3.jpg',
  },
];

/* ─── star icon ─── */
function StarIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 1L8.854 4.854L13 5.528L10 8.432L10.708 12.556L7 10.6L3.292 12.556L4 8.432L1 5.528L5.146 4.854L7 1Z"
        fill="var(--accent-indigo, #6366F1)"
      />
    </svg>
  );
}

/* ─── animation variants ─── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

/* ─── component ─── */
export default function Testimonials() {
  return (
    <>
      <style>{`
        .test-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .test-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
        }

        .test-stars {
          display: flex;
          gap: 3px;
          margin-bottom: 1.25rem;
        }

        .test-quote {
          font-style: italic;
          color: var(--text-secondary, #8A8F9E);
          font-size: 0.95rem;
          line-height: 1.65;
          margin: 0;
          flex: 1;
        }

        .test-attribution {
          display: flex;
          align-items: center;
          gap: 0.875rem;
          margin-top: 1.5rem;
        }

        .test-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
        }

        .test-meta {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .test-name {
          color: var(--text-primary, #F0EDE8);
          font-size: 0.9rem;
          font-weight: 600;
          margin: 0;
          line-height: 1.3;
        }

        .test-role {
          color: var(--text-muted, #4A4E5A);
          font-size: 0.8rem;
          margin: 0;
          line-height: 1.3;
        }

        .test-company {
          color: var(--text-muted, #4A4E5A);
          font-size: 0.75rem;
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          margin: 0;
          line-height: 1.4;
        }

        @media (max-width: 968px) {
          .test-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .test-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section id="testimonials" className="section-padding">
        <div className="container">
          {/* header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ textAlign: 'center', marginBottom: '3.5rem' }}
          >
            <span className="eyebrow">TESTIMONIALS</span>
            <h2 className="display-heading gradient-text-subtle">
              Trusted by engineers worldwide.
            </h2>
          </motion.div>

          {/* cards */}
          <motion.div
            className="test-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                className="glass-card test-card"
                variants={cardVariants}
              >
                {/* stars */}
                <div className="test-stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>

                {/* quote */}
                <p className="test-quote">&ldquo;{t.quote}&rdquo;</p>

                {/* attribution */}
                <div className="test-attribution">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="test-avatar"
                    loading="lazy"
                  />
                  <div className="test-meta">
                    <p className="test-name">{t.name}</p>
                    <p className="test-role">{t.role}</p>
                    <p className="test-company">
                      {t.company} · {t.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
