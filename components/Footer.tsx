import React from 'react';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'How it Works', href: '#how-it-works' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Changelog', href: '#' },
      { label: 'Roadmap', href: '#' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press Kit', href: '#' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'SDK', href: '#' },
      { label: 'Status Page', href: '#' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'GDPR Compliance', href: '#' }
    ]
  }
];

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--glass-border)',
        padding: '5rem 0 3rem 0',
        position: 'relative',
        zIndex: 5,
        width: '100%'
      }}
    >
      <div className="container">
        
        {/* Top Content Row */}
        <div className="footer-top-grid" style={{ marginBottom: '4rem' }}>
          
          {/* Logo Description Box */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <a 
              href="#" 
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                fontWeight: 800,
                color: '#fff',
                letterSpacing: '-0.03em'
              }}
            >
              Aether<span className="gradient-text-accent" style={{ fontWeight: 800 }}>AI</span>
            </a>
            <p 
              style={{ 
                fontSize: '0.9rem', 
                lineHeight: 1.5, 
                color: 'var(--text-secondary)',
                maxWidth: '260px' 
              }}
            >
              The cognitive intelligence layer for modern digital AI application infrastructure.
            </p>
          </div>

          {/* Links Grid */}
          <div className="footer-links-wrapper">
            {footerLinks.map((group) => (
              <div key={group.title} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <h4
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#fff'
                  }}
                >
                  {group.title}
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="footer-hover-link"
                        style={{
                          fontSize: '0.85rem',
                          color: 'var(--text-muted)',
                          transition: 'color var(--transition-fast)'
                        }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Thin Divider */}
        <div 
          style={{ 
            width: '100%', 
            height: '1px', 
            backgroundColor: 'rgba(255, 255, 255, 0.04)', 
            marginBottom: '2rem' 
          }} 
        />

        {/* Bottom copyright & Socials Row */}
        <div className="footer-bottom-row">
          
          {/* Copyright */}
          <span 
            style={{ 
              fontSize: '0.8rem', 
              color: 'var(--text-muted)' 
            }}
          >
            © 2025 AetherAI Inc. All rights reserved.
          </span>

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            {/* Twitter / X */}
            <a href="#" className="social-icon" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            {/* GitHub */}
            <a href="#" className="social-icon" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            {/* Discord */}
            <a href="#" className="social-icon" aria-label="Discord">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8z"/><path d="M10 12h.01M14 12h.01M6 16c2 1 6 1 8 0"/></svg>
            </a>
          </div>

        </div>

      </div>

      {/* Styled Responsive Classes */}
      <style dangerouslySetInnerHTML={{ __html: `
        .footer-top-grid {
          display: grid;
          grid-template-columns: 1fr 3fr;
          gap: 4rem;
        }

        .footer-links-wrapper {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .footer-bottom-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* Hover states */
        .footer-hover-link:hover {
          color: #ffffff !important;
        }

        .social-icon {
          color: var(--text-muted);
          transition: color var(--transition-fast), filter var(--transition-fast);
        }

        .social-icon:hover {
          color: var(--accent-cyan);
          filter: drop-shadow(0 0 8px var(--accent-cyan));
        }

        @media (max-width: 900px) {
          .footer-top-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .footer-links-wrapper {
            grid-template-columns: repeat(2, 1fr);
            gap: 3rem;
          }
        }

        @media (max-width: 580px) {
          .footer-links-wrapper {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .footer-bottom-row {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }
        }
      `}} />
    </footer>
  );
}
