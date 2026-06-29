import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
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
        padding: '9rem 0 7rem 0',
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
          opacity: 0.22,
        }}
      >
        <source src="/videos/space_bg.mp4" type="video/mp4" />
      </video>

      {/* Mesh Glow Background underlay */}
      <div
        style={{
          position: 'absolute',
          top: '5%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '1440px',
          height: '80%',
          backgroundImage: 'url(/images/bg_mesh.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.28,
          filter: 'blur(80px)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Overlay mask for perfect contrast */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(2, 2, 5, 0.5) 0%, var(--bg-primary) 85%)',
          zIndex: 3,
          pointerEvents: 'none',
        }}
      />

      {/* Static Glow Overlays */}
      <div 
        className="glow-overlay" 
        style={{ 
          top: '5%', 
          left: '10%', 
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)',
          zIndex: 3 
        }} 
      />
      <div 
        className="glow-overlay" 
        style={{ 
          bottom: '10%', 
          right: '5%', 
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)',
          zIndex: 3 
        }} 
      />

      <div className="container" style={{ position: 'relative', zIndex: 4 }}>
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
          {/* Version badge */}
          <motion.div
            variants={itemVariants}
            className="premium-badge"
            style={{ marginBottom: '1.75rem' }}
          >
            v2.0 is Live ⚡
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="gradient-text-accent"
            style={{
              fontSize: 'clamp(2.5rem, 6.5vw, 5rem)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              maxWidth: '920px',
              marginBottom: '1.5rem',
            }}
          >
            The Cognitive Execution Layer for Modern AI
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: 'var(--text-secondary)',
              maxWidth: '620px',
              marginBottom: '3rem',
              lineHeight: 1.6,
              fontWeight: 400,
            }}
          >
            Instantly deploy, scale, and fine-tune autonomous software agents. Integrate with private database systems under enterprise-grade encryption.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              width: '100%',
              flexWrap: 'wrap',
              marginBottom: '6rem',
            }}
          >
            <button
              className="glow-btn"
              style={{
                padding: '0.9rem 2.5rem',
                fontSize: '0.95rem',
              }}
            >
              Start Free Trial
            </button>
            <button
              className="secondary-btn"
              style={{
                padding: '0.9rem 2.5rem',
                fontSize: '0.95rem',
              }}
            >
              Watch Demo
            </button>
          </motion.div>

          {/* Dashboard 3D Floating Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '1060px',
              perspective: '1400px',
              zIndex: 5,
            }}
          >
            {/* Custom glowing back shadow */}
            <div
              style={{
                position: 'absolute',
                top: '15%',
                left: '15%',
                right: '15%',
                bottom: '15%',
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.35) 0%, rgba(6, 182, 212, 0.15) 50%, transparent 80%)',
                filter: 'blur(60px)',
                zIndex: 0,
                pointerEvents: 'none',
              }}
            />

            {/* Float Card */}
            <div
              className="glass-card animate-float"
              style={{
                padding: '1px',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.02) 100%)',
                borderRadius: 'var(--radius-xl)',
                transform: 'rotateX(12deg) rotateY(-8deg) rotateZ(1deg)',
                transformStyle: 'preserve-3d',
                boxShadow: '0 40px 100px -20px rgba(0, 0, 0, 0.9), 0 0 80px -10px rgba(139, 92, 246, 0.2)',
                overflow: 'hidden',
                zIndex: 1,
              }}
            >
              {/* Inner frame */}
              <div 
                style={{ 
                  borderRadius: 'calc(var(--radius-xl) - 1px)', 
                  overflow: 'hidden',
                  background: 'var(--bg-secondary)',
                }}
              >
                {/* Header decor */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 20px',
                    background: 'rgba(8, 8, 14, 0.6)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ef4444', opacity: 0.8 }} />
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#eab308', opacity: 0.8 }} />
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e', opacity: 0.8 }} />
                  </div>
                  <div 
                    style={{ 
                      fontSize: '0.75rem', 
                      color: 'var(--text-muted)', 
                      fontFamily: 'monospace',
                    }}
                  >
                    workspace://aetherai.core/dashboard
                  </div>
                  <div style={{ width: '32px' }} /> {/* Spacer */}
                </div>

                {/* Video container */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '16/9',
                    background: 'var(--bg-primary)',
                    overflow: 'hidden',
                  }}
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/images/hero_dashboard.jpg"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  >
                    <source src="/videos/dashboard.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
