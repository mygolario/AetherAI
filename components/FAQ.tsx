import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'How does AetherAI handle data privacy?',
    answer:
      'All data is encrypted at rest and in transit with AES-256. We maintain SOC 2 Type II certification and are fully GDPR compliant. Your data is never used for model training without explicit consent.',
  },
  {
    question: 'Can I fine-tune models on my own data?',
    answer:
      'Yes. You can upload custom datasets through the dashboard or via API. We support configurable hyperparameters including learning rate, epochs, and batch size for full control over the fine-tuning process.',
  },
  {
    question: 'What SDK languages are supported?',
    answer:
      'We offer first-party SDKs for Python, TypeScript/Node.js, Go, and Rust. For all other languages, our fully-documented REST API provides complete platform access.',
  },
  {
    question: 'Is there a free tier?',
    answer:
      'Yes. The Starter plan is completely free and includes 1 agent, 50K tokens per month, and full dashboard access. No credit card required to get started.',
  },
  {
    question: 'Do you support edge deployment?',
    answer:
      'Yes. Deploy to 143 edge locations globally with a single click. Our infrastructure handles auto-scaling and maintains zero cold starts across all regions.',
  },
  {
    question: 'What is the average API latency?',
    answer:
      'Our global average latency is 15ms, with sub-50ms P99 performance. Pro and Enterprise plans include priority routing for consistently lower latency under load.',
  },
  {
    question: 'Can I use AetherAI for real-time applications?',
    answer:
      'Absolutely. We support WebSocket streaming with sub-100ms response times, making AetherAI suitable for chat interfaces, live dashboards, and interactive agents.',
  },
  {
    question: 'How do I change my plan?',
    answer:
      'You can upgrade or downgrade anytime directly from your dashboard. Plan changes take effect immediately, with billing prorated for the current cycle.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding">
      <div
        className="container"
        style={{ maxWidth: '680px', margin: '0 auto' }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="eyebrow">FAQ</span>
          <h2
            className="display-heading gradient-text-subtle"
            style={{ marginTop: '0.75rem' }}
          >
            Common questions.
          </h2>
        </div>

        {/* Accordion */}
        <div>
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >
                <div
                  style={{
                    borderLeft: isOpen
                      ? '2px solid var(--accent-indigo)'
                      : '2px solid transparent',
                    paddingLeft: isOpen ? '1rem' : '1rem',
                    transition: 'border-color 0.2s',
                  }}
                >
                  <button
                    onClick={() => toggle(index)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '1.25rem 0',
                      textAlign: 'left',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '0.95rem',
                        fontWeight: 500,
                        color: 'var(--text-primary)',
                        paddingRight: '1rem',
                      }}
                    >
                      {item.question}
                    </span>
                    <motion.svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      style={{ flexShrink: 0 }}
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path
                        d="M6 3L11 8L6 13"
                        stroke="var(--text-muted)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p
                          style={{
                            color: 'var(--text-secondary)',
                            fontSize: '0.9rem',
                            lineHeight: 1.7,
                            margin: 0,
                            padding: '0 0 1.25rem 0',
                          }}
                        >
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
