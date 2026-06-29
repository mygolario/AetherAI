import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PlanFeature {
  text: string;
}

interface PricingPlan {
  name: string;
  monthlyPrice: number | null;
  yearlyPrice: number | null;
  customLabel?: string;
  features: PlanFeature[];
  cta: string;
  popular?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: 'Starter',
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      { text: '1 agent' },
      { text: '50K tokens / month' },
      { text: 'Standard latency' },
      { text: 'Web dashboard' },
      { text: 'Community support' },
    ],
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    monthlyPrice: 49,
    yearlyPrice: 39,
    features: [
      { text: '5 agents' },
      { text: '500K tokens / month' },
      { text: 'Priority routing' },
      { text: 'Custom database integrations' },
      { text: 'API & SDK access' },
      { text: '99.9% uptime SLA' },
      { text: 'Priority support' },
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    monthlyPrice: null,
    yearlyPrice: null,
    customLabel: 'Custom',
    features: [
      { text: 'Unlimited agents' },
      { text: 'Custom token allocation' },
      { text: 'Dedicated compute clusters' },
      { text: 'On-premise deployment' },
      { text: '24/7 engineering support' },
      { text: 'Custom security policies' },
      { text: 'Team training & onboarding' },
    ],
    cta: 'Contact Sales',
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <>
      <style>{`
        @media (max-width: 968px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
            max-width: 480px !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
        }
      `}</style>
      <section id="pricing" className="section-padding">
        <div className="container">
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="eyebrow">PRICING</span>
            <h2
              className="display-heading gradient-text-subtle"
              style={{ marginTop: '0.75rem' }}
            >
              Simple, transparent pricing.
            </h2>
          </div>

          {/* Toggle */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '3rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '9999px',
                padding: '4px',
                gap: '2px',
              }}
            >
              <button
                onClick={() => setIsYearly(false)}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: '9999px',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  transition: 'background 0.2s, color 0.2s',
                  background: !isYearly ? 'var(--bg-elevated)' : 'transparent',
                  color: !isYearly
                    ? 'var(--text-primary)'
                    : 'var(--text-muted)',
                }}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: '9999px',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  transition: 'background 0.2s, color 0.2s',
                  background: isYearly ? 'var(--bg-elevated)' : 'transparent',
                  color: isYearly
                    ? 'var(--text-primary)'
                    : 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                Yearly
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    color: 'var(--accent-indigo)',
                    fontWeight: 600,
                  }}
                >
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          {/* Plans Grid */}
          <div
            className="pricing-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.25rem',
              alignItems: 'start',
            }}
          >
            {plans.map((plan) => (
              <PricingCard
                key={plan.name}
                plan={plan}
                isYearly={isYearly}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function PricingCard({
  plan,
  isYearly,
}: {
  plan: PricingPlan;
  isYearly: boolean;
}) {
  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

  return (
    <div
      className="glass-card"
      style={{
        padding: '2.5rem',
        borderTop: plan.popular
          ? '2px solid var(--accent-indigo)'
          : undefined,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Badge */}
      {plan.popular && (
        <span
          className="eyebrow"
          style={{
            marginBottom: '1rem',
            display: 'inline-block',
            color: 'var(--accent-indigo)',
          }}
        >
          Most Popular
        </span>
      )}

      {/* Plan Name */}
      <p
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '1.1rem',
          fontWeight: 500,
          color: 'var(--text-primary)',
          margin: 0,
          marginBottom: '1rem',
        }}
      >
        {plan.name}
      </p>

      {/* Price */}
      <div
        style={{
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'baseline',
          gap: '0.25rem',
          minHeight: '3.5rem',
        }}
      >
        {plan.customLabel ? (
          <span
            className="display-heading"
            style={{ fontSize: '2rem', lineHeight: 1 }}
          >
            {plan.customLabel}
          </span>
        ) : (
          <>
            <AnimatePresence mode="wait">
              <motion.span
                key={price}
                className="display-heading"
                style={{ fontSize: '3rem', lineHeight: 1 }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                ${price}
              </motion.span>
            </AnimatePresence>
            <span
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.9rem',
              }}
            >
              /mo
            </span>
          </>
        )}
      </div>

      {/* Features */}
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          marginBottom: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
          flex: 1,
        }}
      >
        {plan.features.map((feature, i) => (
          <li
            key={i}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <span
              style={{
                color: 'var(--accent-indigo)',
                fontSize: '0.85rem',
                fontWeight: 600,
                flexShrink: 0,
              }}
            >
              ✓
            </span>
            <span
              style={{
                color: 'var(--text-secondary)',
                fontSize: '0.85rem',
              }}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        className={plan.popular ? 'btn-primary' : 'btn-ghost'}
        style={{ width: '100%' }}
      >
        {plan.cta}
      </button>
    </div>
  );
}
