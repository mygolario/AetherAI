import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How it Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? '1rem 0' : '1.5rem 0',
          transition: 'padding var(--transition-normal)',
        }}
      >
        <div className="container">
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.75rem 1.5rem',
              borderRadius: 'var(--radius-full)',
              border: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
              background: scrolled ? 'rgba(13, 13, 21, 0.6)' : 'transparent',
              backdropFilter: scrolled ? 'var(--glass-blur)' : 'none',
              WebkitBackdropFilter: scrolled ? 'var(--glass-blur)' : 'none',
              transition: 'all var(--transition-normal)',
            }}
          >
            {/* Logo */}
            <a 
              href="#" 
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem'
              }}
            >
              Aether<span className="gradient-text-accent" style={{ fontWeight: 800 }}>AI</span>
            </a>

            {/* Desktop Navigation Links */}
            <div 
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '2.5rem'
              }}
              className="desktop-links"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    color: 'var(--text-secondary)',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop Call to Action */}
            <div className="desktop-links" style={{ display: 'none' }}>
              <button 
                className="glow-btn"
                style={{
                  padding: '0.6rem 1.25rem',
                  fontSize: '0.9rem',
                  fontWeight: 600
                }}
              >
                Get Started
              </button>
            </div>

            {/* Hamburger Button (Mobile) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: '24px',
                height: '18px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                zIndex: 101,
              }}
              className="mobile-toggle"
            >
              <span
                style={{
                  width: '100%',
                  height: '2px',
                  backgroundColor: '#fff',
                  transform: isOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none',
                  transition: 'transform var(--transition-normal)',
                }}
              />
              <span
                style={{
                  width: '100%',
                  height: '2px',
                  backgroundColor: '#fff',
                  opacity: isOpen ? 0 : 1,
                  transition: 'opacity var(--transition-normal)',
                }}
              />
              <span
                style={{
                  width: '100%',
                  height: '2px',
                  backgroundColor: '#fff',
                  transform: isOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none',
                  transition: 'transform var(--transition-normal)',
                }}
              />
            </button>
          </nav>
        </div>
      </motion.header>

      {/* CSS injection for simple responsive media queries without Tailwind */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 769px) {
          .desktop-links {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}} />

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(5, 5, 10, 0.95)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              zIndex: 99,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2.5rem',
            }}
          >
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 + 0.1, duration: 0.4 }}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                {link.label}
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.05 + 0.1, duration: 0.4 }}
            >
              <button 
                className="glow-btn"
                onClick={() => setIsOpen(false)}
                style={{
                  padding: '1rem 2.5rem',
                  fontSize: '1.1rem',
                  fontWeight: 600
                }}
              >
                Get Started
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
