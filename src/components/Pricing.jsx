import React from 'react';

import './Pricing.css';

function Pricing() {
  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="section-header center-header">
          <div>
            <h2 className="section-title">Simple, transparent pricing</h2>
            <p className="section-subtitle">Choose the perfect plan for your business needs. Upgrade anytime.</p>
          </div>
        </div>

        <div className="pricing-grid">
          {/* Free Tier */}
          <div className="pricing-card glass-card animate-fade-in-up" style={{ opacity: 0 }}>
            <h3 className="pricing-tier-name">Free</h3>
            <p className="pricing-tier-desc">Perfect for testing the waters and small projects.</p>
            <div className="pricing-price">
              <span className="currency">$</span>
              <span className="amount">0</span>
              <span className="period">/mo</span>
            </div>
            <a href="https://github.com/Malhar-Jani/magicpopup-landing#product-tour" className="btn btn-outline pricing-btn">View project</a>

            <ul className="pricing-features">
              <li><span className="check">✓</span> Up to 1,000 page views/mo</li>
              <li><span className="check">✓</span> 3 Basic Templates</li>
              <li><span className="check">✓</span> MagicPopup Branding</li>
              <li><span className="check">✓</span> Community Support</li>
            </ul>
          </div>

          {/* Pro Tier (Highlighted) */}
          <div className="pricing-card pricing-card-pro glass-card animate-fade-in-up delay-100" style={{ opacity: 0 }}>
            <div className="pricing-badge">Most Popular</div>
            <h3 className="pricing-tier-name">Pro</h3>
            <p className="pricing-tier-desc">Everything you need to boost conversions significantly.</p>
            <div className="pricing-price">
              <span className="currency">$</span>
              <span className="amount">29</span>
              <span className="period">/mo</span>
            </div>
            <a href="https://github.com/Malhar-Jani/magicpopup-landing#product-tour" className="btn btn-primary pricing-btn">View project</a>

            <ul className="pricing-features">
              <li><span className="check">✓</span> Up to 50,000 page views/mo</li>
              <li><span className="check">✓</span> All Premium Templates</li>
              <li><span className="check">✓</span> No Branding</li>
              <li><span className="check">✓</span> Advanced Analytics</li>
              <li><span className="check">✓</span> Priority Email Support</li>
            </ul>
          </div>

          {/* Enterprise Tier */}
          <div className="pricing-card glass-card animate-fade-in-up delay-200" style={{ opacity: 0 }}>
            <h3 className="pricing-tier-name">Agency</h3>
            <p className="pricing-tier-desc">For large teams and high-traffic websites.</p>
            <div className="pricing-price">
              <span className="currency">$</span>
              <span className="amount">99</span>
              <span className="period">/mo</span>
            </div>
            <a href="https://github.com/Malhar-Jani/magicpopup-landing#product-tour" className="btn btn-outline pricing-btn">View project</a>

            <ul className="pricing-features">
              <li><span className="check">✓</span> Unlimited page views</li>
              <li><span className="check">✓</span> Custom CSS & Templates</li>
              <li><span className="check">✓</span> Multiple Workspaces</li>
              <li><span className="check">✓</span> Dedicated Success Manager</li>
              <li><span className="check">✓</span> 1-on-1 Onboarding</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
