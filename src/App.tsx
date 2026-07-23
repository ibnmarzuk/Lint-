import React, { useState } from 'react';

export default function App() {
  const [copiedToast, setCopiedToast] = useState(false);
  const [isBumping, setIsBumping] = useState(false);

  const triggerBump = () => {
    setIsBumping(false);
    // Force reflow to re-trigger animation if clicked rapidly
    requestAnimationFrame(() => {
      setIsBumping(true);
    });
    setTimeout(() => setIsBumping(false), 650);
  };

  const handleCopyNote = () => {
    navigator.clipboard.writeText('CA: not deployed — this is a design concept, not a live token');
    setCopiedToast(true);
    setTimeout(() => setCopiedToast(false), 3000);
  };

  return (
    <div className="app-container">
      {/* Toast Notification */}
      {copiedToast && (
        <div 
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            backgroundColor: '#262B33',
            color: '#F5F0E8',
            padding: '12px 20px',
            borderRadius: '12px',
            fontFamily: 'Space Mono, monospace',
            fontSize: '0.85rem',
            boxShadow: '0 10px 24px rgba(0,0,0,0.2)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            borderLeft: '4px solid #F2B84B',
          }}
        >
          <span style={{ color: '#F2B84B' }}>●</span> Note copied! $LINT is a fictional concept token.
        </div>
      )}

      {/* NAVIGATION */}
      <header className="site-nav">
        <div className="nav-container">
          <a href="#" className="nav-logo" aria-label="$LINT Home">
            $LINT<span className="dot">•</span>
          </a>
          <nav>
            <ul className="nav-links">
              <li>
                <a href="#how-it-collects" className="nav-link">The Trap</a>
              </li>
              <li>
                <a href="#tokenomics" className="nav-link">Tokenomics</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero-section">
          <div className="hero-grid">
            {/* Hero Left Content */}
            <div className="hero-left">
              <div className="eyebrow-pill">
                <span className="status-dot"></span>
                <span>STUCK SINCE CYCLE ONE</span>
              </div>

              <h1 className="hero-headline">
                Nobody asked<br />
                for <span className="highlight">$LINT</span>.<br />
                Everyone has some.
              </h1>

              <div className="hero-body">
                <p>
                  The first memecoin modeled on the one substance that appears in every pocket, every dryer, every drawer.
                </p>
                <p>
                  Zero utility.<br />
                  Total inevitability.
                </p>
                <p>
                  You don't chase $LINT.<br />
                  It just accumulates.
                </p>
              </div>

              <div className="hero-cta-group">
                <a 
                  href="#how-it-collects" 
                  className="btn-primary"
                  onClick={triggerBump}
                >
                  <span>Inspect The Trap</span>
                  <span style={{ fontSize: '1.1rem' }}>↓</span>
                </a>
                <a 
                  href="#tokenomics" 
                  className="btn-secondary"
                  onClick={triggerBump}
                >
                  <span>Tokenomics</span>
                </a>
              </div>

              <div 
                className="contract-note" 
                onClick={() => { triggerBump(); handleCopyNote(); }} 
                style={{ cursor: 'pointer' }} 
                title="Click to copy note"
              >
                <span className="ca-prefix">CA: </span>
                not deployed — this is a design concept, not a live token
              </div>
            </div>

            {/* Hero Right Illustration (Pure HTML/CSS Handcrafted Lint Ball) */}
            <div className="hero-right">
              <div className="artwork-stage">
                {/* Large Dashed Rotating Circle */}
                <div className="dashed-ring"></div>

                {/* Animated Floating Lint Ball Container */}
                <div className={`lint-ball-container ${isBumping ? 'bump' : ''}`}>
                  {/* Organic Tumbling Lint Ball Body */}
                  <div className="lint-ball-body">
                    {/* Multi-layered Shading & Texture */}
                    <div className="lint-texture-layer"></div>

                    {/* Fuzzy Tufts around edges */}
                    <div className="tuft tuft-1"></div>
                    <div className="tuft tuft-2"></div>
                    <div className="tuft tuft-3"></div>
                    <div className="tuft tuft-4"></div>
                    <div className="tuft tuft-5"></div>

                    {/* Micro Fiber Strands */}
                    <div className="fiber-strand fiber-1"></div>
                    <div className="fiber-strand fiber-2"></div>
                    <div className="fiber-strand fiber-3"></div>
                  </div>

                  {/* Yellow Circular Coin Badge ($LNT) */}
                  <div 
                    className="coin-badge" 
                    onClick={() => { triggerBump(); handleCopyNote(); }}
                    title="Click to inspect coin"
                    role="button"
                    tabIndex={0}
                    aria-label="$LNT Coin Badge"
                  >
                    <div className="coin-badge-inner">
                      $LNT
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SCROLLING MARQUEE */}
        <section className="marquee-wrapper" aria-label="Ticker Marquee">
          <div className="marquee-track">
            {/* Repeated marquee items for seamless loop */}
            {[...Array(4)].map((_, i) => (
              <div className="marquee-content" key={i}>
                <span className="marquee-item">
                  NOTHING TO DO WITH LAUNDRY
                  <span className="marquee-separator">•</span>
                </span>
                <span className="marquee-item">
                  EVERYTHING TO DO WITH LAUNDRY
                  <span className="marquee-separator">•</span>
                </span>
                <span className="marquee-item">
                  THE TRAP IS THE POINT
                  <span className="marquee-separator">•</span>
                </span>
                <span className="marquee-item">
                  ACCUMULATION IS THE STRATEGY
                  <span className="marquee-separator">•</span>
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT COLLECTS SECTION */}
        <section id="how-it-collects" className="how-it-collects-section">
          <span className="section-label">HOW IT COLLECTS</span>
          <h2 className="section-title">
            Three slots.<br />
            One trap.<br />
            No exits marked.
          </h2>

          <div className="cards-grid">
            {/* CARD 1 */}
            <article className="card">
              <div>
                <span className="card-slot-label">SLOT: POCKET</span>
                <h3 className="card-title">You forget it's there</h3>
              </div>
              <p className="card-body">
                Most holders find out they're in $LINT the same way they find lint—by accident, in the wash.
              </p>
            </article>

            {/* CARD 2 */}
            <article className="card">
              <div>
                <span className="card-slot-label">SLOT: DRUM</span>
                <h3 className="card-title">It tumbles regardless</h3>
              </div>
              <p className="card-body">
                Price action mirrors a dryer cycle: warm, circular, and no one's really in control of the outcome.
              </p>
            </article>

            {/* CARD 3 */}
            <article className="card">
              <div>
                <span className="card-slot-label">SLOT: FILTER</span>
                <h3 className="card-title">Someone has to clean it out</h3>
              </div>
              <p className="card-body">
                Eventually the trap gets full. This is less a roadmap milestone and more a load-bearing metaphor.
              </p>
            </article>
          </div>
        </section>

        {/* TOKENOMICS SECTION */}
        <section id="tokenomics" className="tokenomics-section">
          <div className="tokenomics-box">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">FICTIONAL SUPPLY</div>
              </div>

              <div className="stat-item">
                <div className="stat-number">0</div>
                <div className="stat-label">REAL UTILITY</div>
              </div>

              <div className="stat-item">
                <div className="stat-number">∞</div>
                <div className="stat-label">POCKETS AFFECTED</div>
              </div>

              <div className="stat-item">
                <div className="stat-number">1</div>
                <div className="stat-label">
                  LINT BALL,<br />
                  TUMBLING
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-left">
            <div className="footer-logo">
              $LINT<span className="dot">•</span>
            </div>
            <p className="footer-tagline">The Coin Caught In Everyone's Pocket</p>
          </div>

          <div className="footer-disclaimer">
            Concept design only. No token has been deployed, no contract address exists, and nothing here is financial advice. Built as a design exercise.
          </div>
        </div>
      </footer>
    </div>
  );
}
