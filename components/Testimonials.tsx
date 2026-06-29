import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah K.',
    role: 'CTO',
    company: 'NovaTech',
    quote: 'AetherAI has fundamentally shifted how we build internal routing mechanisms. We deployed five custom agent nodes in a morning. The latency improvements are real.',
    avatarPath: '/images/avatar_1.jpg'
  },
  {
    name: 'James R.',
    role: 'Founder',
    company: 'Pulse AI',
    quote: 'The SDK documentation is flawless. Integrating AetherAI with our vector store took less than ten lines of code. It solved our scale block overnight.',
    avatarPath: '/images/avatar_2.jpg'
  },
  {
    name: 'Mia L.',
    role: 'Lead Engineer',
    company: 'Orbit Labs',
    quote: 'Uptime guarantees are usually a sales gimmick, but Aether has maintained absolute flatline availability. The cognitive agents compile instantly.',
    avatarPath: '/images/avatar_3.jpg'
  },
  {
    name: 'Daniel T.',
    role: 'VP Product',
    company: 'Sentry',
    quote: 'Our team needed a way to interface cognitive routing with client data safely. AetherAI provided isolation standards that satisfied our security audit.',
    avatarPath: '/images/avatar_1.jpg'
  },
  {
    name: 'Priya M.',
    role: 'AI Researcher',
    company: 'DeepCore',
    quote: 'Training alignment layers usually introduces validation loss creep, but Aethers compiler optimizations seem to stabilize hyperparameter drift cleanly.',
    avatarPath: '/images/avatar_2.jpg'
  },
  {
    name: 'Alex W.',
    role: 'CEO',
    company: 'Stackr',
    quote: 'We moved our entire model infrastructure to Aether. Our cloud compute spend decreased by almost 35%, while our latency decreased. Highly recommended.',
    avatarPath: '/images/avatar_3.jpg'
  }
];

export default function Testimonials() {
  const col1 = [testimonials[0], testimonials[3]];
  const col2 = [testimonials[1], testimonials[4]];
  const col3 = [testimonials[2], testimonials[5]];

  return (
    <section 
      id="testimonials"
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
        
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span className="premium-badge" style={{ marginBottom: '1.25rem' }}>
            Testimonials
          </span>
          <h2
            className="gradient-text"
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Validated by Industry Builders
          </h2>
        </div>

        {/* Masonry Columns */}
        <div className="testimonials-masonry">
          
          {/* Column 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="masonry-column"
          >
            {col1.map((item, idx) => (
              <TestimonialCard key={idx} item={item} />
            ))}
          </motion.div>

          {/* Column 2 - Offset Vertically */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="masonry-column col-offset"
          >
            {col2.map((item, idx) => (
              <TestimonialCard key={idx} item={item} />
            ))}
          </motion.div>

          {/* Column 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="masonry-column"
          >
            {col3.map((item, idx) => (
              <TestimonialCard key={idx} item={item} />
            ))}
          </motion.div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .testimonials-masonry {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          align-items: start;
        }

        .masonry-column {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .col-offset {
          margin-top: 2.5rem;
        }

        @media (max-width: 968px) {
          .testimonials-masonry {
            grid-template-columns: repeat(2, 1fr);
          }
          .col-offset {
            margin-top: 0;
          }
        }

        @media (max-width: 640px) {
          .testimonials-masonry {
            grid-template-columns: 1fr;
          }
        }
      `}} />
    </section>
  );
}

// Single card renderer
function TestimonialCard({ item }) {
  return (
    <div 
      className="glass-card"
      style={{
        padding: '2rem',
        border: '1px solid var(--glass-border)',
        borderRadius: 'var(--radius-lg)',
        transition: 'transform var(--transition-normal), border-color var(--transition-normal)',
        cursor: 'default'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.borderColor = 'var(--glass-border-hover)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'var(--glass-border)';
      }}
    >
      {/* 5-Star Rating */}
      <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1.25rem' }}>
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--accent-cyan)" stroke="var(--accent-cyan)" strokeWidth="1">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p 
        style={{ 
          fontSize: '0.9rem', 
          lineHeight: 1.6, 
          color: 'var(--text-secondary)',
          marginBottom: '2rem' 
        }}
      >
        "{item.quote}"
      </p>

      {/* Profile Info */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', borderTop: '1px solid rgba(255, 255, 255, 0.04)', paddingTop: '1.25rem' }}>
        <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
          <img 
            src={item.avatarPath} 
            alt={item.name} 
            style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              objectFit: 'cover', 
              border: '1px solid rgba(255, 255, 255, 0.15)' 
            }} 
          />
        </div>
        <div>
          <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff' }}>{item.name}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            {item.role}, <span style={{ color: 'var(--accent-cyan)' }}>{item.company}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
