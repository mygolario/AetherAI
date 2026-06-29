import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Connect Data',
    description: 'Securely link your databases, documentation, and external APIs with enterprise-grade encryption keys.',
    panelType: 'connect'
  },
  {
    number: '02',
    title: 'Train Models',
    description: 'Fine-tune our proprietary models on your proprietary datasets with instant alignment audits.',
    panelType: 'train'
  },
  {
    number: '03',
    title: 'Deploy to Edge',
    description: 'Publish your custom cognitive agent globally in a single click with zero server orchestration.',
    panelType: 'deploy'
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  // Dynamic panel content renderer
  const renderPanelContent = () => {
    switch (steps[activeStep].panelType) {
      case 'connect':
        return (
          <motion.div
            key="connect"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', height: '100%', justifyContent: 'center' }}
          >
            <div style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontFamily: 'monospace' }}>AETHER_INIT --SOURCE</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Choose Data Source</label>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <div style={{ flex: 1, padding: '0.75rem 1rem', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-indigo)' }}></span> PostgreSQL Database
                </div>
                <div style={{ padding: '0.75rem 1rem', background: 'rgba(6, 182, 212, 0.1)', border: '1px solid rgba(6, 182, 212, 0.2)', borderRadius: 'var(--radius-sm)', fontSize: '0.85rem', color: 'var(--accent-cyan)', cursor: 'pointer' }}>
                  Connected
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Enter Private API Key</label>
              <input 
                type="password" 
                value="••••••••••••••••••••••••••••••••••••" 
                disabled
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  background: 'rgba(5, 5, 10, 0.5)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--text-muted)',
                  fontSize: '0.85rem',
                  fontFamily: 'monospace'
                }}
              />
            </div>
          </motion.div>
        );
      case 'train':
        return (
          <motion.div
            key="train"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', height: '100%', justifyContent: 'center' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--accent-violet)', fontFamily: 'monospace' }}>MODEL: COGNITIVE_V2</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-primary)', fontWeight: 600 }}>87% Complete</span>
            </div>
            
            {/* Progress Bar Mockup */}
            <div style={{ width: '100%', height: '8px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
              <motion.div 
                initial={{ width: '0%' }}
                animate={{ width: '87%' }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                style={{ height: '100%', background: 'var(--gradient-primary)', borderRadius: 'var(--radius-full)' }}
              />
            </div>

            {/* Metric Metrics Card */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '0.5rem' }}>
              <div style={{ background: 'rgba(5, 5, 10, 0.3)', border: '1px solid var(--glass-border)', padding: '0.75rem', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Loss Rate</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-cyan)' }}>0.012</div>
              </div>
              <div style={{ background: 'rgba(5, 5, 10, 0.3)', border: '1px solid var(--glass-border)', padding: '0.75rem', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Epoch Progress</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-violet)' }}>348 / 400</div>
              </div>
            </div>
          </motion.div>
        );
      case 'deploy':
        return (
          <motion.div
            key="deploy"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', height: '100%', justifyContent: 'center' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)' }}>
              <span className="pulsing-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }}></span>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#10b981' }}>Agent Status: Operational & Live</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Production URL</label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input 
                  type="text" 
                  value="https://agent.aether.ai/deployments/live" 
                  disabled
                  style={{
                    flex: 1,
                    padding: '0.75rem 1rem',
                    background: 'rgba(5, 5, 10, 0.5)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--accent-cyan)',
                    fontSize: '0.85rem',
                    fontFamily: 'monospace'
                  }}
                />
                <button 
                  className="glow-btn" 
                  style={{ padding: '0 1.25rem', fontSize: '0.85rem', borderRadius: 'var(--radius-sm)' }}
                  onClick={() => alert('URL copied!')}
                >
                  Copy
                </button>
              </div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <section 
      id="how-it-works"
      style={{
        background: 'var(--bg-primary)',
        position: 'relative',
        zIndex: 5,
        width: '100%',
        overflow: 'hidden',
      }}
      className="section-padding"
    >
      {/* Ambient Radial glow background */}
      <div 
        className="glow-overlay" 
        style={{ 
          top: '20%', 
          left: '50%', 
          transform: 'translateX(-50%)',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 60%)',
          width: '600px',
          height: '600px',
          zIndex: 0 
        }} 
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--accent-indigo)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '1rem',
            }}
          >
            Workflow
          </span>
          <h2
            className="gradient-text"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Three Steps to Cognitive Automation
          </h2>
        </div>

        {/* Split Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="split-grid"
        >
          {/* Left Column: Interactive Steps Timeline */}
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            
            {/* Background Line */}
            <div 
              style={{
                position: 'absolute',
                top: '12px',
                left: '20px',
                bottom: '12px',
                width: '2px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                zIndex: 0
              }}
            />

            {/* Active Indicator Line */}
            <motion.div 
              animate={{ 
                height: `${(activeStep / (steps.length - 1)) * 88}%` 
              }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: '12px',
                left: '20px',
                width: '2px',
                background: 'var(--gradient-primary)',
                zIndex: 1,
                transformOrigin: 'top'
              }}
            />

            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div 
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  style={{
                    display: 'flex',
                    gap: '2rem',
                    cursor: 'pointer',
                    zIndex: 2,
                    position: 'relative'
                  }}
                >
                  {/* Circular step badge */}
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      fontFamily: 'var(--font-heading)',
                      background: isActive ? 'var(--gradient-primary)' : 'var(--bg-tertiary)',
                      border: isActive ? '1px solid transparent' : '1px solid var(--glass-border)',
                      color: isActive ? '#fff' : 'var(--text-muted)',
                      boxShadow: isActive ? '0 0 15px rgba(99, 102, 241, 0.3)' : 'none',
                      transition: 'all var(--transition-normal)'
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Step Description details */}
                  <div style={{ flex: 1, paddingTop: '4px' }}>
                    <h3 
                      style={{ 
                        fontSize: '1.25rem', 
                        fontWeight: 700,
                        color: isActive ? '#fff' : 'var(--text-muted)',
                        marginBottom: '0.5rem',
                        transition: 'color var(--transition-normal)'
                      }}
                    >
                      {step.title}
                    </h3>
                    <p 
                      style={{ 
                        fontSize: '0.9rem', 
                        color: isActive ? 'var(--text-secondary)' : 'rgba(148, 163, 184, 0.4)',
                        transition: 'color var(--transition-normal)',
                        lineHeight: 1.5,
                        maxWidth: '380px'
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Presentation Panel */}
          <div className="flex-center">
            <div 
              className="glass-card"
              style={{
                width: '100%',
                maxWidth: '480px',
                height: '320px',
                padding: '2.5rem',
                border: '1px solid var(--glass-border)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.6)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <AnimatePresence mode="wait">
                {renderPanelContent()}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .split-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        @keyframes pulse-live {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.5; }
        }

        .pulsing-dot {
          animation: pulse-live 1.5s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .split-grid {
            grid-template-columns: 1fr;
            gap: 3.5rem;
          }
        }
      `}} />
    </section>
  );
}
