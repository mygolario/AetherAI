import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8rem 0 6rem 0',
        overflow: 'hidden',
        background: 'var(--bg-primary)',
      }}
    >
      {/* Background Video */}
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
          zIndex: 1,
          opacity: 0.45,
        }}
      >
        <source src="/AI-Generated-Videos/watermark-removed-Deep_space_particle_drift_202606291342.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay gradient for legibility */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, rgba(5,5,10,0.6) 0%, var(--bg-primary) 90%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Ambient Glows */}
      <div 
        className="glow-overlay" 
        style={{ 
          top: '-10%', 
          left: '-10%', 
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)',
          zIndex: 2 
        }} 
      />
      <div 
        className="glow-overlay" 
        style={{ 
          bottom: '-10%', 
          right: '-10%', 
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
          zIndex: 2 
        }} 
      />

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            width: '100%',
          }}
        >
          {/* Tagline Badge */}
          <motion.div
            variants={itemVariants}
            className="animate-pulse-border"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--glass-border)',
              background: 'rgba(13, 13, 21, 0.4)',
              backdropFilter: 'var(--glass-blur)',
              WebkitBackdropFilter: 'var(--glass-blur)',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--text-primary)',
              letterSpacing: '0.05em',
              marginBottom: '2rem',
              boxShadow: '0 0 15px rgba(99, 102, 241, 0.15)',
            }}
          >
            v2.0 IS LIVE ⚡
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="gradient-text-accent"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              maxWidth: '850px',
              marginBottom: '1.5rem',
            }}
          >
            Next-Generation AI Intelligence Platform
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              marginBottom: '3rem',
              lineHeight: 1.6,
            }}
          >
            Automate workflows, build custom cognitive agents, and deploy secure models in seconds. Engineered for modern digital enterprises.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            variants={itemVariants}
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              width: '100%',
              flexWrap: 'wrap',
              marginBottom: '5rem',
            }}
          >
            <button
              className="glow-btn"
              style={{
                padding: '0.9rem 2.25rem',
                fontSize: '1rem',
                fontWeight: 600,
              }}
            >
              Start Free Trial
            </button>
            <button
              style={{
                padding: '0.9rem 2.25rem',
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--glass-border)',
                background: 'var(--glass-bg)',
                backdropFilter: 'var(--glass-blur)',
                WebkitBackdropFilter: 'var(--glass-blur)',
                color: '#fff',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--glass-border-hover)';
                e.currentTarget.style.background = 'var(--glass-bg-hover)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--glass-border)';
                e.currentTarget.style.background = 'var(--glass-bg)';
              }}
            >
              Watch Demo
            </button>
          </motion.div>

          {/* Floating Glassmorphic 3D Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '1000px',
              perspective: '1200px',
              zIndex: 3,
            }}
          >
            {/* Backlight Glow Ring */}
            <div
              style={{
                position: 'absolute',
                top: '10%',
                left: '10%',
                right: '10%',
                bottom: '10%',
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, rgba(6, 182, 212, 0.1) 50%, transparent 80%)',
                filter: 'blur(50px)',
                zIndex: 0,
                pointerEvents: 'none',
              }}
            />

            {/* The 3D Mockup Container */}
            <div
              className="glass-card animate-float"
              style={{
                padding: '0.5rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--glass-border)',
                transform: 'rotateX(10deg) rotateY(-8deg) rotateZ(1deg)',
                transformStyle: 'preserve-3d',
                boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.8), 0 0 50px -10px rgba(99, 102, 241, 0.15)',
                overflow: 'hidden',
                zIndex: 1,
              }}
            >
              {/* Top Window Bar Decor */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '12px 16px',
                  background: 'rgba(5, 5, 10, 0.4)',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#eab308' }} />
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
                <div 
                  style={{ 
                    marginLeft: '24px', 
                    fontSize: '0.75rem', 
                    color: 'var(--text-muted)', 
                    fontFamily: 'var(--font-body)',
                    letterSpacing: '0.05em' 
                  }}
                >
                  aetherai.app/workspace/dashboard
                </div>
              </div>

              {/* Dashboard Inner Video Content */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '16/9',
                  background: '#05050A',
                  overflow: 'hidden',
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                >
                  <source src="/AI-Generated-Videos/watermark-removed-Glassmorphic_UI_dashboard_floats._202606291348.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
