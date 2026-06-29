import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: 'How does AetherAI handle data privacy?',
    answer: 'We employ end-to-end encryption for all data integrations. Your datasets never leave your secure regional node environments, and we strictly follow zero-retention guidelines. Your proprietary data is never used to train or refine public model layers.'
  },
  {
    question: 'Can I fine-tune models on my own dataset?',
    answer: 'Yes, absolutely. The platform supports declarative fine-tuning pipelines. You can upload custom JSON, CSV, or raw markdown documentation to fine-tune cognitive weights on top of our base model architectures directly in the developer dashboard.'
  },
  {
    question: 'What languages does the SDK support?',
    answer: 'Our core developer SDK is fully typed and supports TypeScript/JavaScript (Node.js), Python, Go, and Rust. We also provide direct HTTP API access endpoints for custom system integrations.'
  },
  {
    question: 'Is there a free tier available?',
    answer: 'Yes. Our Starter plan is 100% free forever and requires no credit card. It includes one active cognitive agent, 50,000 generation tokens per month, and full access to our web-based terminal interface for evaluation.'
  },
  {
    question: 'How does edge deployment work?',
    answer: 'When you click deploy, our compiler builds your custom agent logic into highly optimized WebAssembly (Wasm) container instances. These are instantly replicated across regional edge routers, executing queries close to your users.'
  },
  {
    question: 'What is the average response latency?',
    answer: 'General metadata routing and edge decisions average around 15ms. Heavy LLM-based inference requests average 120ms to 200ms depending on prompt size, utilizing token streaming to optimize visual performance.'
  },
  {
    question: 'Can I use AetherAI for real-time applications?',
    answer: 'Yes. The system is designed from the ground up for low-latency interactions. We support persistent WebSocket connections out of the box, making it ideal for live chatbot networks and streaming data processors.'
  },
  {
    question: 'How do I upgrade or cancel my plan?',
    answer: 'You can scale up, add concurrent token limits, or cancel your active subscription plan in one click directly inside the billing settings page of your account. Downgrades take effect at the end of the current billing cycle.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq"
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
            Support
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
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion Container (constrained width) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            maxWidth: '750px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                style={{
                  borderBottom: '1px solid var(--glass-border)',
                  borderRadius: 'var(--radius-md)',
                  background: isOpen ? 'var(--glass-bg-hover)' : 'transparent',
                  borderLeft: isOpen ? '2px solid var(--accent-indigo)' : '2px solid transparent',
                  padding: '0.5rem 1rem',
                  overflow: 'hidden',
                  transition: 'background-color var(--transition-normal), border-left-color var(--transition-normal)'
                }}
              >
                {/* Accordion Trigger Head */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1.25rem 0',
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: isOpen ? '#fff' : 'var(--text-secondary)',
                      transition: 'color var(--transition-fast)',
                      paddingRight: '1rem'
                    }}
                  >
                    {item.question}
                  </span>

                  {/* Rotate Plus/Minus Icon */}
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isOpen ? 'var(--accent-cyan)' : 'var(--text-muted)'
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </motion.div>
                </button>

                {/* Accordion Expand Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div
                        style={{
                          paddingBottom: '1.5rem',
                          paddingTop: '0.25rem',
                          fontSize: '0.95rem',
                          lineHeight: 1.6,
                          color: 'var(--text-secondary)'
                        }}
                      >
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
