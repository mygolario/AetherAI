'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

const SCROLL_THRESHOLD = 40;

/* ------------------------------------------------------------------ */
/*  Responsive CSS — injected once via <style>                        */
/* ------------------------------------------------------------------ */
const RESPONSIVE_CSS = `
  @media (min-width: 769px) {
    .navbar-mobile-toggle { display: none !important; }
    .navbar-desktop-links { display: flex !important; }
  }
  @media (max-width: 768px) {
    .navbar-mobile-toggle { display: flex !important; }
    .navbar-desktop-links { display: none !important; }
  }
`;

/* ------------------------------------------------------------------ */
/*  Logo                                                               */
/* ------------------------------------------------------------------ */
const Logo: React.FC = () => (
  <a href="#" style={styles.logoLink}>
    {/* Simple diamond / prism mark */}
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      <polygon
        points="14,2 26,14 14,26 2,14"
        fill="var(--accent-indigo, #6366F1)"
      />
      <polygon
        points="14,6 22,14 14,22 6,14"
        fill="rgba(255,255,255,0.12)"
      />
    </svg>

    <span style={styles.logoText}>
      Aether
      <span className="gradient-text-hero" style={styles.logoAccent}>
        AI
      </span>
    </span>
  </a>
);

/* ------------------------------------------------------------------ */
/*  Hamburger icon                                                     */
/* ------------------------------------------------------------------ */
const HamburgerIcon: React.FC<{ open: boolean }> = ({ open }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    stroke="var(--text-primary, #F0EDE8)"
    strokeWidth="1.6"
    strokeLinecap="round"
  >
    <motion.line
      x1="3"
      y1="6"
      x2="19"
      y2="6"
      animate={open ? { y1: 11, y2: 11, rotate: 45 } : { y1: 6, y2: 6, rotate: 0 }}
      transition={{ duration: 0.25 }}
      style={{ transformOrigin: 'center' }}
    />
    <motion.line
      x1="3"
      y1="11"
      x2="19"
      y2="11"
      animate={open ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.15 }}
    />
    <motion.line
      x1="3"
      y1="16"
      x2="19"
      y2="16"
      animate={open ? { y1: 11, y2: 11, rotate: -45 } : { y1: 16, y2: 16, rotate: 0 }}
      transition={{ duration: 0.25 }}
      style={{ transformOrigin: 'center' }}
    />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Mobile panel                                                       */
/* ------------------------------------------------------------------ */
const MobilePanel: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: -8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.25, ease: 'easeOut' }}
    style={styles.mobilePanel}
  >
    <nav style={styles.mobilePanelNav}>
      {NAV_LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          onClick={onClose}
          style={styles.mobilePanelLink}
        >
          {link.label}
        </a>
      ))}
    </nav>

    <a
      href="#get-started"
      className="btn-primary"
      onClick={onClose}
      style={styles.mobilePanelCta}
    >
      Get Started
    </a>
  </motion.div>
);

/* ------------------------------------------------------------------ */
/*  Navbar                                                             */
/* ------------------------------------------------------------------ */
const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile panel on resize to desktop
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 769px)');
    const handler = () => { if (mq.matches) setMobileOpen(false); };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <>
      {/* Inject responsive styles once */}
      <style dangerouslySetInnerHTML={{ __html: RESPONSIVE_CSS }} />

      <header style={styles.headerWrapper}>
        <div className="container" style={styles.headerContainer}>
          <motion.nav
            style={{
              ...styles.pill,
              ...(scrolled ? styles.pillScrolled : {}),
            }}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {/* Logo */}
            <Logo />

            {/* Desktop links */}
            <div className="navbar-desktop-links" style={styles.desktopLinks}>
              {NAV_LINKS.map((link) => (
                <a key={link.label} href={link.href} style={styles.navLink}>
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="navbar-desktop-links" style={styles.desktopCta}>
              <a href="#get-started" className="btn-primary" style={styles.ctaButton}>
                Get Started
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="navbar-mobile-toggle"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle navigation"
              style={styles.mobileToggle}
            >
              <HamburgerIcon open={mobileOpen} />
            </button>
          </motion.nav>
        </div>

        {/* Mobile slide-down panel (below nav, not full-screen) */}
        <AnimatePresence>
          {mobileOpen && (
            <div className="container" style={styles.mobilePanelContainer}>
              <MobilePanel onClose={() => setMobileOpen(false)} />
            </div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;

/* ------------------------------------------------------------------ */
/*  Inline styles                                                      */
/* ------------------------------------------------------------------ */
const styles: Record<string, React.CSSProperties> = {
  /* Header wrapper — fixed, full-width, top */
  headerWrapper: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    pointerEvents: 'none',
  },

  headerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '1rem',
  },

  /* Pill-shaped nav bar */
  pill: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1.5rem',
    width: '100%',
    maxWidth: '960px',
    padding: '0.75rem 1.5rem',
    borderRadius: '9999px',
    pointerEvents: 'auto',
    transition: 'background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease, backdrop-filter 0.35s ease',
    border: '1px solid transparent',
    background: 'transparent',
  },

  pillScrolled: {
    background: 'rgba(10, 10, 16, 0.6)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    borderColor: 'var(--border-default, rgba(255,255,255,0.06))',
    boxShadow: '0 4px 24px rgba(0,0,0,0.25)',
  },

  /* Logo */
  logoLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    textDecoration: 'none',
    flexShrink: 0,
  },

  logoText: {
    fontFamily: 'var(--font-heading, Outfit, sans-serif)',
    fontSize: '1.15rem',
    fontWeight: 600,
    color: 'var(--text-primary, #F0EDE8)',
    letterSpacing: '-0.02em',
    lineHeight: 1,
  },

  logoAccent: {
    marginLeft: '0.1em',
    fontWeight: 700,
  },

  /* Desktop nav */
  desktopLinks: {
    alignItems: 'center',
    gap: '0.25rem',
    flex: 1,
    justifyContent: 'center',
  },

  navLink: {
    fontFamily: 'var(--font-body, "Plus Jakarta Sans", sans-serif)',
    fontSize: '0.875rem',
    fontWeight: 500,
    color: 'var(--text-secondary, #8A8F9E)',
    textDecoration: 'none',
    padding: '0.4rem 0.85rem',
    borderRadius: '8px',
    transition: 'color 0.2s ease',
    whiteSpace: 'nowrap',
  },

  desktopCta: {
    alignItems: 'center',
    flexShrink: 0,
  },

  ctaButton: {
    fontSize: '0.85rem',
    padding: '0.55rem 1.3rem',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
  },

  /* Mobile toggle */
  mobileToggle: {
    alignItems: 'center',
    justifyContent: 'center',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0.35rem',
    display: 'none', // overridden by injected CSS
  },

  /* Mobile panel */
  mobilePanelContainer: {
    display: 'flex',
    justifyContent: 'center',
    pointerEvents: 'auto',
    paddingTop: '0.5rem',
  },

  mobilePanel: {
    width: '100%',
    maxWidth: '960px',
    background: 'rgba(10, 10, 16, 0.85)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid var(--border-default, rgba(255,255,255,0.06))',
    borderRadius: '1rem',
    padding: '1.25rem 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },

  mobilePanelNav: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.15rem',
  },

  mobilePanelLink: {
    fontFamily: 'var(--font-body, "Plus Jakarta Sans", sans-serif)',
    fontSize: '0.95rem',
    fontWeight: 500,
    color: 'var(--text-secondary, #8A8F9E)',
    textDecoration: 'none',
    padding: '0.6rem 0.75rem',
    borderRadius: '8px',
    transition: 'color 0.2s ease, background 0.2s ease',
  },

  mobilePanelCta: {
    fontSize: '0.9rem',
    padding: '0.7rem 1.25rem',
    textDecoration: 'none',
    textAlign: 'center',
    borderRadius: '9999px',
  },
};
