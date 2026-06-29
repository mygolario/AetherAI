import React from 'react';
import { motion } from 'framer-motion';

export default function FooterCTA() {
  return (
    <section 
      style={{
        background: 'var(--bg-primary)',
        width: '100%',
        padding: '4rem 0',
        position: 'relative',
        zIndex: 5,
        overflow: 'hidden'
      }}
    >
      <div className="container">
        
        {/* Glow behind */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.18) 0%, rgba(6, 182, 212, 0.05) 60%, transparent 100%)',
            filter: 'blur(50px)',
            zIndex: 0,
            pointerEvents: 'none'
          }}
        />

        {/* Scaled Banner Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="cta-banner"
          style={{
            position: 'relative',
            zIndex: 1,
            background: 'var(--gradient-primary)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '6rem 3rem',
            textAlign: 'center',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: '0 40px 80px -20px rgba(139, 92, 246, 0.15)'
          }}
        >
          {/* Subtle Dot Grid Overlay */}
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'radial-gradient(rgba(0, 0, 0, 0.15) 1.5px, transparent 1.5px)',
              backgroundSize: '16px 16px',
              zIndex: 0,
              pointerEvents: 'none'
            }}
          />

          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            
            {/* Title */}
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 5vw, 3.25rem)',
                fontWeight: 800,
                color: '#fff',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
                maxWidth: '650px',
                marginBottom: '1.25rem'
              }}
            >
              Start Building With AetherAI Today
            </h2>

            {/* Subtext */}
            <p
              style={{
                fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
                color: 'rgba(255, 255, 255, 0.75)',
                maxWidth: '520px',
                marginBottom: '3rem',
                lineHeight: 1.6
              }}
            >
              Deploy your first regional cognitive agent in under five minutes. Scale automatically to millions of active nodes globally.
            </p>

            {/* Email Input Form */}
            <form 
              onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); }}
              className="cta-form-row"
              style={{
                display: 'flex',
                background: 'rgba(5, 5, 10, 0.45)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: 'var(--radius-full)',
                padding: '0.35rem',
                width: '100%',
                maxWidth: '480px',
                marginBottom: '1.5rem',
                zIndex: 2
              }}
            >
              <input 
                type="email"
                placeholder="Enter your email address"
                required
                className="cta-input"
                style={{
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#fff',
                  padding: '0.75rem 1.25rem',
                  fontSize: '0.9rem',
                  flex: 1,
                  fontFamily: 'var(--font-body)',
                  minWidth: 0
                }}
              />
              <button
                type="submit"
                className="cta-btn"
                style={{
                  background: '#ffffff',
                  color: '#05050A',
                  border: 'none',
                  outline: 'none',
                  borderRadius: 'var(--radius-full)',
                  padding: '0.75rem 1.75rem',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-body)',
                  cursor: 'pointer',
                  transition: 'opacity var(--transition-fast)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                Get Early Access
              </button>
            </form>

            {/* Trust Footer */}
            <span
              style={{
                fontSize: '0.75rem',
                color: 'rgba(255, 255, 255, 0.65)',
                letterSpacing: '0.02em',
                fontWeight: 500
              }}
            >
              🔒 No credit card required · Cancel anytime · GDPR compliant
            </span>

          </div>
        </motion.div>
      </div>

      {/* Responsive Stacking CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 580px) {
          .cta-banner {
            padding: 4rem 1.5rem !important;
          }
          .cta-form-row {
            flex-direction: column !important;
            background: transparent !important;
            border: none !important;
            padding: 0 !important;
            gap: 1rem !important;
            border-radius: 0 !important;
          }
          .cta-input {
            width: 100% !important;
            background: rgba(5, 5, 10, 0.45) !important;
            border: 1px solid rgba(255, 255, 255, 0.08) !important;
            border-radius: var(--radius-full) !important;
            padding: 1rem 1.5rem !important;
          }
          .cta-btn {
            width: 100% !important;
            padding: 1rem 0 !important;
          }
        }
      `}} />
    </section>
  );
}
