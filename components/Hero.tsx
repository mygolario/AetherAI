'use client';

import React from 'react';
import { motion } from 'framer-motion';

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */
const COMPANY_NAMES = ['OpenAI', 'Stripe', 'Vercel', 'Linear', 'Notion', 'GitHub'];

const MACOS_DOTS: Array<{ color: string }> = [
  { color: '#FF5F57' },
  { color: '#FEBC2E' },
  { color: '#28C840' },
];

/* ------------------------------------------------------------------ */
/*  Animation helpers                                                  */
/* ------------------------------------------------------------------ */
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: 'easeOut', delay },
});

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */
const Hero: React.FC = () => {
  return (
    <section style={styles.section}>
      {/* ---- Background video ---- */}
      <div style={styles.videoBgWrap}>
        <video
          src="/videos/space_bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={styles.videoBg}
        />
      </div>

      {/* ---- Single glow spot ---- */}
      <div className="glow-spot" style={styles.glowSpot} />

      {/* ---- Content ---- */}
      <div className="container" style={styles.contentContainer}>
        {/* Eyebrow */}
        <motion.p
          className="eyebrow"
          style={styles.eyebrow}
          {...fadeUp(0.1)}
        >
          PLATFORM UPDATE — JUNE 2026
        </motion.p>

        {/* Heading */}
        <motion.h1
          className="display-heading gradient-text-hero"
          style={styles.heading}
          {...fadeUp(0.2)}
        >
          Deploy autonomous AI agents
          <br />
          in 15&nbsp;milliseconds.
        </motion.h1>

        {/* Subtext */}
        <motion.p style={styles.subtext} {...fadeUp(0.3)}>
          Connect your data. Train on your terms. Ship to 140+ edge locations
          with zero cold starts.
        </motion.p>

        {/* Buttons */}
        <motion.div style={styles.buttonRow} {...fadeUp(0.4)}>
          <a href="#get-started" className="btn-primary" style={styles.btnPrimary}>
            Start Free Trial
          </a>
          <a href="#demo" className="btn-ghost" style={styles.btnGhost}>
            Watch Demo →
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.div style={styles.socialProof} {...fadeUp(0.5)}>
          <p style={styles.socialProofText}>
            Trusted by 2,400+ engineering teams
          </p>
          <div style={styles.companyRow}>
            {COMPANY_NAMES.map((name) => (
              <span key={name} style={styles.companyName}>
                {name}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ---- Dashboard preview ---- */}
        <motion.div
          className="glass-card"
          style={styles.dashboardCard}
          {...fadeUp(0.65)}
        >
          {/* macOS title bar */}
          <div style={styles.titleBar}>
            <div style={styles.titleBarDots}>
              {MACOS_DOTS.map((dot, i) => (
                <span
                  key={i}
                  style={{
                    ...styles.titleBarDot,
                    backgroundColor: dot.color,
                  }}
                />
              ))}
            </div>
            <span style={styles.titleBarAddress}>
              app.aetherai.com/dashboard
            </span>
            <div style={styles.titleBarSpacer} />
          </div>

          {/* Video */}
          <div style={styles.dashboardVideoWrap}>
            <video
              src="/videos/dashboard.mp4"
              poster="/images/hero_dashboard.jpg"
              autoPlay
              loop
              muted
              playsInline
              style={styles.dashboardVideo}
            />
          </div>

          {/* Bottom fade */}
          <div style={styles.dashboardFade} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

/* ------------------------------------------------------------------ */
/*  Inline styles                                                      */
/* ------------------------------------------------------------------ */
const styles: Record<string, React.CSSProperties> = {
  /* Section */
  section: {
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    overflow: 'hidden',
    paddingTop: '8rem',
    paddingBottom: '4rem',
  },

  /* Background video */
  videoBgWrap: {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
    overflow: 'hidden',
  },

  videoBg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 0.1,
    pointerEvents: 'none',
  },

  /* Glow */
  glowSpot: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '800px',
    height: '800px',
    transform: 'translate(-50%, -50%)',
    background:
      'radial-gradient(circle, var(--accent-indigo, #6366F1) 0%, transparent 70%)',
    opacity: 0.04,
    pointerEvents: 'none',
    zIndex: 0,
  },

  /* Content container */
  contentContainer: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
  },

  /* Eyebrow */
  eyebrow: {
    marginBottom: '1.5rem',
  },

  /* Heading */
  heading: {
    fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
    maxWidth: '800px',
    lineHeight: 1.08,
    marginBottom: '1.5rem',
    letterSpacing: '-0.025em',
  },

  /* Subtext */
  subtext: {
    fontFamily: 'var(--font-body, "Plus Jakarta Sans", sans-serif)',
    fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
    lineHeight: 1.65,
    color: 'var(--text-secondary, #8A8F9E)',
    maxWidth: '560px',
    marginBottom: '2.25rem',
  },

  /* Buttons */
  buttonRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '3rem',
  },

  btnPrimary: {
    textDecoration: 'none',
    fontSize: '0.95rem',
    padding: '0.75rem 1.75rem',
  },

  btnGhost: {
    textDecoration: 'none',
    fontSize: '0.95rem',
    padding: '0.75rem 1.75rem',
  },

  /* Social proof */
  socialProof: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.65rem',
    marginBottom: '0',
  },

  socialProofText: {
    fontFamily: 'var(--font-body, "Plus Jakarta Sans", sans-serif)',
    fontSize: '0.8rem',
    color: 'var(--text-muted, #4A4E5A)',
    letterSpacing: '0.01em',
  },

  companyRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  companyName: {
    fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)',
    fontSize: '0.75rem',
    color: 'var(--text-primary, #F0EDE8)',
    opacity: 0.35,
    letterSpacing: '0.04em',
    textTransform: 'uppercase' as const,
  },

  /* Dashboard card */
  dashboardCard: {
    position: 'relative',
    width: '100%',
    maxWidth: '1060px',
    marginTop: '5rem',
    borderRadius: 'var(--radius-xl, 1rem)',
    overflow: 'hidden',
    boxShadow: '0 30px 80px -20px rgba(0, 0, 0, 0.7)',
    display: 'flex',
    flexDirection: 'column',
  },

  /* Title bar */
  titleBar: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.75rem 1rem',
    background: 'var(--bg-elevated, #16161F)',
    borderBottom: '1px solid var(--border-default, rgba(255,255,255,0.06))',
    gap: '0.75rem',
  },

  titleBarDots: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    flexShrink: 0,
  },

  titleBarDot: {
    display: 'block',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
  },

  titleBarAddress: {
    fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)',
    fontSize: '0.72rem',
    color: 'var(--text-muted, #4A4E5A)',
    flex: 1,
    textAlign: 'center',
    letterSpacing: '0.02em',
    userSelect: 'none',
  },

  titleBarSpacer: {
    width: '52px', // balance the dots on the left
    flexShrink: 0,
  },

  /* Dashboard video */
  dashboardVideoWrap: {
    position: 'relative',
    width: '100%',
    aspectRatio: '16 / 9',
    background: 'var(--bg-secondary, #0A0A10)',
    overflow: 'hidden',
  },

  dashboardVideo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },

  /* Bottom fade */
  dashboardFade: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '40%',
    background:
      'linear-gradient(to bottom, transparent 0%, var(--bg-primary, #050507) 100%)',
    pointerEvents: 'none',
    zIndex: 2,
  },
};
