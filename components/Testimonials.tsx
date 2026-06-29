import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah K.',
    role: 'CTO',
    company: 'NovaTech',
    quote: 'AetherAI has fundamentally shifted how we build internal routing mechanisms. We deployed five custom agent nodes in a morning. The latency improvements are real.',
    avatar: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" fill="url(#avatarGrad1)" />
        <polygon points="12,28 20,12 28,28" fill="rgba(255, 255, 255, 0.45)" />
        <defs>
          <linearGradient id="avatarGrad1" x1="0" y1="0" x2="40" y2="40">
            <stop stopColor="var(--accent-indigo)" />
            <stop offset="1" stopColor="var(--accent-cyan)" />
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    name: 'James R.',
    role: 'Founder',
    company: 'Pulse AI',
    quote: 'The SDK documentation is flawless. Integrating AetherAI with our vector store took less than ten lines of code. It solved our scale block overnight.',
    avatar: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" fill="url(#avatarGrad2)" />
        <circle cx="20" cy="20" r="10" stroke="#fff" strokeWidth="2" fill="none" opacity="0.6" />
        <circle cx="20" cy="20" r="5" fill="#fff" />
        <defs>
          <linearGradient id="avatarGrad2" x1="0" y1="0" x2="40" y2="40">
            <stop stopColor="var(--accent-violet)" />
            <stop offset="1" stopColor="var(--accent-indigo)" />
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    name: 'Mia L.',
    role: 'Lead Engineer',
    company: 'Orbit Labs',
    quote: 'Uptime guarantees are usually a sales gimmick, but Aether has maintained absolute flatline availability. The cognitive agents compile instantly.',
    avatar: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" fill="url(#avatarGrad3)" />
        <rect x="12" y="12" width="16" height="16" rx="3" fill="rgba(255, 255, 255, 0.5)" transform="rotate(45 20 20)" />
        <defs>
          <linearGradient id="avatarGrad3" x1="0" y1="0" x2="40" y2="40">
            <stop stopColor="var(--accent-cyan)" />
            <stop offset="1" stopColor="var(--accent-violet)" />
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    name: 'Daniel T.',
    role: 'VP Product',
    company: 'Sentry',
    quote: 'Our team needed a way to interface cognitive routing with client data safely. AetherAI provided isolation standards that satisfied our security audit.',
    avatar: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" fill="url(#avatarGrad4)" />
        <path d="M12,20 L20,12 L28,20 L20,28 Z" fill="rgba(255, 255, 255, 0.45)" />
        <defs>
          <linearGradient id="avatarGrad4" x1="0" y1="0" x2="40" y2="40">
            <stop stopColor="var(--accent-indigo)" />
            <stop offset="1" stopColor="var(--bg-tertiary)" />
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    name: 'Priya M.',
    role: 'AI Researcher',
    company: 'DeepCore',
    quote: 'Training alignment layers usually introduces validation loss creep, but Aethers compiler optimizations seem to stabilize hyperparameter drift cleanly.',
    avatar: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" fill="url(#avatarGrad5)" />
        <line x1="12" y1="12" x2="28" y2="28" stroke="#fff" strokeWidth="2.5" />
        <line x1="28" y1="12" x2="12" y2="28" stroke="#fff" strokeWidth="2.5" />
        <defs>
          <linearGradient id="avatarGrad5" x1="0" y1="0" x2="40" y2="40">
            <stop stopColor="var(--accent-cyan)" />
            <stop offset="1" stopColor="var(--accent-indigo)" />
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    name: 'Alex W.',
    role: 'CEO',
    company: 'Stackr',
    quote: 'We moved our entire model infrastructure to Aether. Our cloud compute spend decreased by almost 35%, while our latency decreased. Highly recommended.',
    avatar: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="20" fill="url(#avatarGrad6)" />
        <circle cx="20" cy="20" r="8" fill="rgba(255, 255, 255, 0.5)" />
        <rect x="18" y="10" width="4" height="20" fill="#fff" rx="1" />
        <defs>
          <linearGradient id="avatarGrad6" x1="0" y1="0" x2="40" y2="40">
            <stop stopColor="var(--accent-violet)" />
            <stop offset="1" stopColor="var(--accent-cyan)" />
          </linearGradient>
        </defs>
      </svg>
    )
  }
];

export default function Testimonials() {
  // Stagger columns: 2 items per column
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
            Testimonials
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
            Validated by Industry Builders
          </h2>
        </div>

        {/* Masonry Columns */}
        <div className="testimonials-masonry">
          
          {/* Column 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
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
            initial={{ opacity: 0, y: 30 }}
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
            initial={{ opacity: 0, y: 30 }}
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

        /* Vertical offset for center column */
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
          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="var(--accent-cyan)" stroke="var(--accent-cyan)" strokeWidth="1">
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
          {item.avatar}
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
