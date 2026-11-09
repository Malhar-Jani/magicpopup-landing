import React from 'react';
import { ArrowRight } from 'lucide-react';


export default function Hero() {
  return (
    <header className="section-hero">
      <div className="decorative-square decor-top-left decor-gradient-1"></div>
      <div className="decorative-square decor-top-left-2 decor-gradient-2"></div>
      <div className="decorative-square decor-top-left-3 decor-gradient-4"></div>
      <div className="decorative-square decor-bottom-right decor-gradient-3"></div>
      <div className="decorative-square decor-bottom-right-2 decor-gradient-1"></div>
      <div className="decorative-square decor-bottom-right-3 decor-gradient-2"></div>

      <div className="container hero-container">
        <div className="hero-grid">
          <div className="hero-text-column animate-fade-in-up" style={{ opacity: 0 }}>
            <h1 className="hero-headline">
              <span className="hero-title-line-1">Launch High-Converting MagicPopup in Minutes.</span><br />
              <span className="hero-title-line-2">No Code Required.</span>
            </h1>
            <p className="hero-subhead">
              Design, target, and publish popups that turn visitors into leads and customers. No developer needed, live in minutes.
            </p>
            <div className="hero-actions">
              <a href="https://github.com/Malhar-Jani/magicpopup-landing#product-tour" className="btn btn-primary">
                Explore MagicPopup <ArrowRight size={18} style={{ marginLeft: '0.5rem', verticalAlign: 'middle' }} />
              </a>
            </div>

            <div className="hero-showcase-strip">
              <div className="hero-popup-card card-style-1">
                <button className="card-close" aria-label="Close">x</button>
                <div className="card-tag">Promo</div>
                <h4 className="card-title">Boost Your Conversions Today!</h4>
                <p className="card-subtitle">Save 40% or More on annual plans</p>
                <button className="card-btn btn-coral">Save 40% Now</button>
              </div>

              <div className="hero-popup-card card-style-2">
                <button className="card-close" aria-label="Close">x</button>
                <h4 className="card-title">25% Off First Purchase!</h4>
                <p className="card-subtitle">Subscribe to our newsletter</p>
                <div className="card-form">
                  <input type="email" placeholder="Your email" className="card-input" readOnly />
                  <button className="card-btn btn-purple">Claim Now</button>
                </div>
              </div>

              <div className="hero-popup-card card-style-3">
                <button className="card-close" aria-label="Close">x</button>
                <div className="card-badge"><span className="badge-dot"></span> In Stock</div>
                <h4 className="card-title">Item Back in Stock!</h4>
                <p className="card-subtitle">The item in your wishlist is ready</p>
                <button className="card-btn btn-dark">Go To Cart</button>
              </div>

              <div className="hero-popup-card card-style-4">
                <button className="card-close" aria-label="Close">x</button>
                <h4 className="card-title">Enjoy 10% Off</h4>
                <p className="card-subtitle">Get discount code in your inbox</p>
                <div className="card-form">
                  <input type="email" placeholder="Email address" className="card-input" readOnly />
                  <button className="card-btn btn-white">View project</button>
                </div>
              </div>

              <div className="hero-popup-card card-style-5">
                <button className="card-close" aria-label="Close">x</button>
                <h4 className="card-title">We Value Your Feedback!</h4>
                <p className="card-subtitle">How was your shopping experience?</p>
                <div className="card-stars">
                  <span>*</span><span>*</span><span>*</span><span>*</span><span>*</span>
                </div>
                <button className="card-btn btn-purple-outline">Next</button>
              </div>
            </div>
          </div>

          <div className="hero-illustration-column animate-fade-in-up delay-200" style={{ opacity: 0 }}>
            <div className="hero-illustration">
              <div className="illus-grid"></div>
              <div className="illus-cube">
                <div className="cube-face face-top"></div>
                <div className="cube-face face-left"></div>
                <div className="cube-face face-right"></div>
              </div>
              <div className="illus-sphere sphere-1"></div>
              <div className="illus-sphere sphere-2"></div>
              <div className="illus-sphere sphere-3"></div>
              <div className="illus-sphere sphere-4"></div>
              <div className="illus-ring"></div>
              <div className="illus-cylinder">
                <div className="cylinder-top"></div>
                <div className="cylinder-side"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
