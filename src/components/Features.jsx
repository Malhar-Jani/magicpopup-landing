import React from 'react';
import { Zap, Layout, Target, BarChart3, Edit3, Smartphone, Code2 } from 'lucide-react';


export default function Features() {
  return (
    <section className="section-features" id="features">
      {/* Intra-section decor: Features left cluster */}
      <div className="decor-t decor-di1-a dt-purple"></div>
      <div className="decor-t decor-di1-b dt-teal"></div>
      {/* Intra-section decor: Features right cluster */}
      <div className="decor-t decor-di2-a dt-rose"></div>
      <div className="decor-t decor-di2-b dt-ring"></div>
      <div className="decor-t decor-di2-c dt-warm"></div>
      <div className="container">
        <div className="section-header">
          <div className="section-accent-bar"></div>
          <div>
            <h2 className="section-title">A smart popup builder built to capture more leads</h2>
            <p className="section-subtitle" style={{ marginLeft: 0, textAlign: 'left' }}>Everything you need to turn visitors into leads, without touching a line of code.</p>
          </div>
        </div>

        <div className="premium-features-grid">
          {/* Feature 1 */}
          <div className="feature-card glass-card animate-fade-in-up" style={{ opacity: 0 }}>
            <div className="feature-icon-wrapper icon-tint-teal">
              <Zap size={20} />
            </div>
            <h3>Lightning-fast setup</h3>
            <p>Build and launch a fully branded popup in under 5 minutes, no technical skills needed.</p>
          </div>
          {/* Feature 2 */}
          <div className="feature-card glass-card animate-fade-in-up delay-100" style={{ opacity: 0 }}>
            <div className="feature-icon-wrapper icon-tint-cream">
              <Layout size={20} />
            </div>
            <h3>Ready-made templates</h3>
            <p>Start from professionally designed templates and customize with a simple drag-and-drop editor.</p>
          </div>
          {/* Feature 3 */}
          <div className="feature-card glass-card animate-fade-in-up delay-200" style={{ opacity: 0 }}>
            <div className="feature-icon-wrapper icon-tint-purple">
              <Target size={20} />
            </div>
            <h3>Smart targeting</h3>
            <p>Show the right popup to the right visitor at the right moment using advanced targeting rules.</p>
          </div>
          {/* Feature 4 */}
          <div className="feature-card glass-card animate-fade-in-up delay-300" style={{ opacity: 0 }}>
            <div className="feature-icon-wrapper icon-tint-rose">
              <BarChart3 size={20} />
            </div>
            <h3>Built-in analytics</h3>
            <p>Track views, conversions, and performance to see exactly what's working.</p>
          </div>
          {/* Feature 5 */}
          <div className="feature-card glass-card animate-fade-in-up delay-400" style={{ opacity: 0 }}>
            <div className="feature-icon-wrapper icon-tint-teal">
              <Edit3 size={20} />
            </div>
            <h3>No-code editor</h3>
            <p>Customize headlines, styles, and content in minutes without needing any design or development skills.</p>
          </div>
          {/* Feature 6 */}
          <div className="feature-card glass-card animate-fade-in-up delay-400" style={{ opacity: 0 }}>
            <div className="feature-icon-wrapper icon-tint-cream">
              <Smartphone size={20} />
            </div>
            <h3>Mobile-friendly by default</h3>
            <p>Every popup looks clean and works properly on any screen size.</p>
          </div>
          {/* Feature 7 - Full Width Integration Card */}
          <div className="feature-card glass-card full-width animate-fade-in-up delay-400" style={{ opacity: 0 }}>
            <div className="feature-content">
              <div className="feature-icon-wrapper icon-tint-purple">
                <Code2 size={22} />
              </div>
              <h3>Works with any website</h3>
              <p>One lightweight script connects MagicPopup to your existing site, whatever platforms or frameworks you use.</p>
            </div>
            <div className="integration-logos">
              <span className="integration-badge">WordPress</span>
              <span className="integration-badge">Shopify</span>
              <span className="integration-badge">Webflow</span>
              <span className="integration-badge">Squarespace</span>
              <span className="integration-badge">Wix</span>
              <span className="integration-badge">React / Next.js</span>
              <span className="integration-badge">HTML / JS</span>
            </div>
          </div>
        </div>

        <div className="features-cta-container">
          <a href="https://github.com/Malhar-Jani/magicpopup-landing#product-tour" className="btn btn-primary">See the editor</a>
        </div>
      </div>
      {/* Decorative transition: Features → How It Works (bottom-right, coral cluster) */}
      <div className="decor-t decor-t1-a dt-coral"></div>
      <div className="decor-t decor-t1-b dt-warm"></div>
      <div className="decor-t decor-t1-c dt-ring-coral"></div>
    </section>
  );
}
