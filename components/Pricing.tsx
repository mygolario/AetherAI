import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const plans = [
  {
    name: 'Starter',
    priceMonthly: 0,
    priceYearly: 0,
    description: 'Perfect for exploring autonomous cognitive agents.',
    features: [
      '1 Active Cognitive Agent',
      '50,000 Generation Tokens/mo',
      'Standard model latency',
      'Web-based UI chat terminal',
      'Community discord support'
    ],
    ctaText: 'Start Free Trial',
    popular: false,
    highlight: false
  },
  {
    name: 'Pro',
    priceMonthly: 49,
    priceYearly: 39,
    description: 'Best for power users and growing startups scaling AI.',
    features: [
      '5 Active Cognitive Agents',
      '500,000 Generation Tokens/mo',
      'Priority routing (ultra-low latency)',
      'Custom database integrations',
      'API access & Developer SDK keys',
      '99.9% Platform SLA guarantee',
      'Priority email response support'
    ],
    ctaText: 'Upgrade to Pro',
    popular: true,
    highlight: true
  },
  {
    name: 'Enterprise',
    priceMonthly: 'Custom',
    priceYearly: 'Custom',
    description: 'Custom compliance, dedicated models, and bulk volume.',
    features: [
      'Unlimited Active Agents',
      'Custom Token allocation',
      'Dedicated model deployment clusters',
      'On-premise database sync',
      '24/7 Dedicated account engineering',
      'Custom security audits & SLA',
      'Custom developer training sessions'
    ],
    ctaText: 'Contact Sales',
    popular: false,
    highlight: false
  }
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section 
      id="pricing"
      style={{
        background: 'var(--bg-primary)',
        position: 'relative',
        zIndex: 5,
        width: '100%',
        overflow: 'hidden',
      }}
      className="section-padding"
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
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
            Pricing
          </span>
          <h2
            className="gradient-text"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              maxWidth: '600px',
              margin: '0 auto',
              marginBottom: '2rem'
            }}
          >
            Flexible Plans for Any Scale
          </h2>

          {/* Billing Switcher Toggle */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', background: 'rgba(13, 13, 21, 0.5)', border: '1px solid var(--glass-border)', padding: '0.35rem', borderRadius: 'var(--radius-full)', position: 'relative' }}>
            
            {/* Sliding Pill Background */}
            <motion.div 
              layout
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              style={{
                position: 'absolute',
                top: '4px',
                bottom: '4px',
                left: isYearly ? 'auto' : '4px',
                right: isYearly ? '4px' : 'auto',
                width: '110px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 'var(--radius-full)',
                zIndex: 0
              }}
            />

            <button 
              onClick={() => setIsYearly(false)}
              style={{
                position: 'relative',
                zIndex: 1,
                width: '110px',
                padding: '0.5rem 0',
                border: 'none',
                background: 'transparent',
                color: isYearly ? 'var(--text-secondary)' : '#fff',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'color var(--transition-fast)'
              }}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsYearly(true)}
              style={{
                position: 'relative',
                zIndex: 1,
                width: '110px',
                padding: '0.5rem 0',
                border: 'none',
                background: 'transparent',
                color: isYearly ? '#fff' : 'var(--text-secondary)',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'color var(--transition-fast)'
              }}
            >
              Yearly
            </button>
            
            {/* Discount Badge */}
            <div 
              style={{
                position: 'absolute',
                left: 'calc(100% + 12px)',
                whiteSpace: 'nowrap',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                color: '#10b981',
                padding: '0.25rem 0.6rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.75rem',
                fontWeight: 600
              }}
            >
              Save 20%
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid">
          {plans.map((plan, idx) => {
            // Price calculation
            const isCustom = plan.priceMonthly === 'Custom';
            const priceVal = isYearly ? plan.priceYearly : plan.priceMonthly;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`glass-card pricing-card ${plan.highlight ? 'pricing-highlight' : ''}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  border: plan.highlight ? '1px solid var(--accent-violet)' : '1px solid var(--glass-border)',
                  boxShadow: plan.highlight ? '0 0 40px rgba(139, 92, 246, 0.2)' : 'none',
                  transform: plan.highlight ? 'scale(1.03)' : 'scale(1)',
                  zIndex: plan.highlight ? 2 : 1
                }}
              >
                {/* Popular Pinned Badge */}
                {plan.popular && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      background: 'var(--gradient-primary)',
                      color: '#fff',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      padding: '0.35rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      boxShadow: '0 0 10px rgba(139, 92, 246, 0.3)'
                    }}
                  >
                    Most Popular
                  </div>
                )}

                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>{plan.name}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '2rem', minHeight: '40px' }}>{plan.description}</p>
                  
                  {/* Dynamic Pricing Switcher */}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.3rem', marginBottom: '2rem', height: '60px' }}>
                    {isCustom ? (
                      <span style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>Custom</span>
                    ) : (
                      <>
                        <span style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-secondary)', alignSelf: 'flex-start', paddingTop: '6px' }}>$</span>
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={priceVal}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            style={{ fontSize: '3.25rem', fontWeight: 800, fontFamily: 'var(--font-heading)', lineHeight: 1 }}
                          >
                            {priceVal}
                          </motion.span>
                        </AnimatePresence>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>/mo</span>
                      </>
                    )}
                  </div>

                  {/* Feature list */}
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', padding: 0, margin: '0 0 2.5rem 0', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '1.5rem' }}>
                    {plan.features.map((feature) => (
                      <li key={feature} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><polyline points="20 6 9 17 4 12"/></svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div>
                  {plan.highlight ? (
                    <button className="glow-btn" style={{ width: '100%', padding: '0.9rem 0', fontSize: '0.95rem' }}>{plan.ctaText}</button>
                  ) : (
                    <button
                      style={{
                        width: '100%',
                        padding: '0.9rem 0',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid var(--glass-border)',
                        background: 'rgba(255, 255, 255, 0.02)',
                        color: '#fff',
                        cursor: 'pointer',
                        transition: 'all var(--transition-fast)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--glass-border-hover)';
                        e.currentTarget.style.background = 'var(--glass-bg-hover)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--glass-border)';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                      }}
                    >
                      {plan.ctaText}
                    </button>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          align-items: stretch;
          margin-top: 3rem;
        }

        .pricing-card {
          min-height: 550px;
        }

        @media (max-width: 968px) {
          .pricing-grid {
            grid-template-columns: 1fr;
            max-width: 480px;
            margin: 3rem auto 0 auto;
          }
          
          /* Remove scaling highlight offsets on mobile to prevent clipping */
          .pricing-highlight {
            transform: scale(1) !important;
          }
        }
      `}} />
    </section>
  );
}
