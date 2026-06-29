import { FormEvent, useState } from 'react';

export default function FooterCTA() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle submission
  };

  return (
    <>
      <style>{`
        @media (max-width: 580px) {
          .footer-cta-form {
            flex-direction: column !important;
            border-radius: 1rem !important;
          }
          .footer-cta-form input {
            border-radius: 9999px !important;
            border: 1px solid var(--border-subtle) !important;
            background: var(--bg-tertiary) !important;
          }
          .footer-cta-form button {
            width: 100% !important;
            border-radius: 9999px !important;
            margin: 0 !important;
          }
          .footer-cta-trust {
            flex-direction: column !important;
            gap: 0.5rem !important;
          }
        }
      `}</style>
      <section
        style={{
          padding: '10rem 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          src="/stats_bg.mp4"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.08,
            pointerEvents: 'none',
          }}
        />

        {/* Dark Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at center, transparent 0%, var(--bg-primary) 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Glow Spot */}
        <div
          className="glow-spot"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '600px',
            background: 'var(--accent-indigo)',
            opacity: 0.06,
          }}
        />

        {/* Content */}
        <div
          className="container"
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '600px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <span className="eyebrow">GET STARTED</span>

          <h2
            className="display-heading gradient-text-hero"
            style={{
              fontSize: '2.5rem',
              marginTop: '0.75rem',
              marginBottom: '1rem',
            }}
          >
            Your AI agents are waiting.
          </h2>

          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1rem',
              lineHeight: 1.6,
              margin: '0 0 2.5rem 0',
            }}
          >
            Start building with AetherAI today. No credit card required.
          </p>

          {/* Email Form */}
          <form
            onSubmit={handleSubmit}
            className="footer-cta-form"
            style={{
              display: 'flex',
              flexDirection: 'row',
              border: '1px solid var(--border-default)',
              borderRadius: '9999px',
              background: 'var(--bg-secondary)',
              overflow: 'hidden',
              marginBottom: '1.5rem',
            }}
          >
            <input
              type="email"
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                padding: '1rem 1.5rem',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
              }}
            />
            <button
              type="submit"
              className="btn-primary"
              style={{
                borderRadius: '9999px',
                margin: '4px',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              Get Early Access
            </button>
          </form>

          {/* Trust Line */}
          <div
            className="footer-cta-trust"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1.5rem',
              color: 'var(--text-muted)',
              fontSize: '0.75rem',
            }}
          >
            <span>🔒 256-bit encryption</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>No credit card</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>Cancel anytime</span>
          </div>
        </div>
      </section>
    </>
  );
}
