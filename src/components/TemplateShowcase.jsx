import React from 'react';

export default function TemplateShowcase() {
  return (
    <section className="section-template-showcase animate-fade-in-up" id="templates">
      {/* Intra-section decor: Template Showcase right top cluster */}
      <div className="decor-t decor-di4-a dt-ring-coral"></div>
      <div className="decor-t decor-di4-b dt-warm"></div>
      {/* Intra-section decor: Template Showcase left bottom cluster */}
      <div className="decor-t decor-di5-a dt-purple"></div>
      <div className="decor-t decor-di5-b dt-teal"></div>
      <div className="decor-t decor-di5-c dt-rose"></div>
      <div className="container">
        <div className="section-header center-header" style={{ textAlign: 'center' }}>
          <div>
            <h2 className="section-title">MagicPopup Templates for Every Goal</h2>
            <p className="section-subtitle">
              Choose from a variety of beautifully designed, ready-to-use templates that are built to convert visitors into customers.
            </p>
          </div>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="marquee-wrapper" style={{ marginTop: '3rem' }}>
        {/* Row 1: Left to Right */}
        <div className="marquee-row marquee-ltr">
          <div className="marquee-track">
            {/* Group 1 */}
            <div className="marquee-group">
              {/* Card 1 */}
              <div className="template-card">
                <div className="browser-frame">
                  <div className="browser-header">
                    <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                  </div>
                  <div className="browser-content">
                    <div className="mini-popup-preview preview-purple">
                      <div className="mini-popup-accent">25% OFF</div>
                      <div className="mini-popup-text">Discount Offer</div>
                      <div className="mini-popup-button">Get Code</div>
                    </div>
                  </div>
                </div>
                <div className="template-name">Sales Promo Template</div>
              </div>
              {/* Card 2 */}
              <div className="template-card">
                <div className="browser-frame">
                  <div className="browser-header">
                    <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                  </div>
                  <div className="browser-content">
                    <div className="mini-popup-preview preview-coral">
                      <div className="mini-popup-text">Rate us</div>
                      <div className="mini-popup-stars">★★★★★</div>
                      <div className="mini-popup-button">Submit Feedback</div>
                    </div>
                  </div>
                </div>
                <div className="template-name">Customer Feedback Template</div>
              </div>
              {/* Card 3 */}
              <div className="template-card">
                <div className="browser-frame">
                  <div className="browser-header">
                    <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                  </div>
                  <div className="browser-content">
                    <div className="mini-popup-preview preview-cream">
                      <div className="mini-popup-text">Join newsletter</div>
                      <div className="mini-popup-input"></div>
                      <div className="mini-popup-button">Subscribe Now</div>
                    </div>
                  </div>
                </div>
                <div className="template-name">Lead Generation Template</div>
              </div>
              {/* Card 4 */}
              <div className="template-card">
                <div className="browser-frame">
                  <div className="browser-header">
                    <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                  </div>
                  <div className="browser-content">
                    <div className="mini-popup-preview preview-purple-dark">
                      <div className="mini-popup-text">Wait! Don't Leave!</div>
                      <div className="mini-popup-button">Unlock Secret Deal</div>
                    </div>
                  </div>
                </div>
                <div className="template-name">Exit Intent Overlay</div>
              </div>
            </div>

            {/* Group 1 Duplicate for Seamless Loop */}
            <div className="marquee-group" aria-hidden="true">
              {/* Card 1 */}
              <div className="template-card">
                <div className="browser-frame">
                  <div className="browser-header">
                    <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                  </div>
                  <div className="browser-content">
                    <div className="mini-popup-preview preview-purple">
                      <div className="mini-popup-accent">25% OFF</div>
                      <div className="mini-popup-text">Discount Offer</div>
                      <div className="mini-popup-button">Get Code</div>
                    </div>
                  </div>
                </div>
                <div className="template-name">Sales Promo Template</div>
              </div>
              {/* Card 2 */}
              <div className="template-card">
                <div className="browser-frame">
                  <div className="browser-header">
                    <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                  </div>
                  <div className="browser-content">
                    <div className="mini-popup-preview preview-coral">
                      <div className="mini-popup-text">Rate us</div>
                      <div className="mini-popup-stars">★★★★★</div>
                      <div className="mini-popup-button">Submit Feedback</div>
                    </div>
                  </div>
                </div>
                <div className="template-name">Customer Feedback Template</div>
              </div>
              {/* Card 3 */}
              <div className="template-card">
                <div className="browser-frame">
                  <div className="browser-header">
                    <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                  </div>
                  <div className="browser-content">
                    <div className="mini-popup-preview preview-cream">
                      <div className="mini-popup-text">Join newsletter</div>
                      <div className="mini-popup-input"></div>
                      <div className="mini-popup-button">Subscribe Now</div>
                    </div>
                  </div>
                </div>
                <div className="template-name">Lead Generation Template</div>
              </div>
              {/* Card 4 */}
              <div className="template-card">
                <div className="browser-frame">
                  <div className="browser-header">
                    <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                  </div>
                  <div className="browser-content">
                    <div className="mini-popup-preview preview-purple-dark">
                      <div className="mini-popup-text">Wait! Don't Leave!</div>
                      <div className="mini-popup-button">Unlock Secret Deal</div>
                    </div>
                  </div>
                </div>
                <div className="template-name">Exit Intent Overlay</div>
              </div>
            </div>

            {/* Group 1 Triplicate for Seamless Loop on Wide Screens */}
            <div className="marquee-group" aria-hidden="true">
              {/* Card 1 */}
              <div className="template-card">
                <div className="browser-frame">
                  <div className="browser-header">
                    <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                  </div>
                  <div className="browser-content">
                    <div className="mini-popup-preview preview-purple">
                      <div className="mini-popup-accent">25% OFF</div>
                      <div className="mini-popup-text">Discount Offer</div>
                      <div className="mini-popup-button">Get Code</div>
                    </div>
                  </div>
                </div>
                <div className="template-name">Sales Promo Template</div>
              </div>
              {/* Card 2 */}
              <div className="template-card">
                <div className="browser-frame">
                  <div className="browser-header">
                    <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                  </div>
                  <div className="browser-content">
                    <div className="mini-popup-preview preview-coral">
                      <div className="mini-popup-text">Rate us</div>
                      <div className="mini-popup-stars">★★★★★</div>
                      <div className="mini-popup-button">Submit Feedback</div>
                    </div>
                  </div>
                </div>
                <div className="template-name">Customer Feedback Template</div>
              </div>
              {/* Card 3 */}
              <div className="template-card">
                <div className="browser-frame">
                  <div className="browser-header">
                    <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                  </div>
                  <div className="browser-content">
                    <div className="mini-popup-preview preview-cream">
                      <div className="mini-popup-text">Join newsletter</div>
                      <div className="mini-popup-input"></div>
                      <div className="mini-popup-button">Subscribe Now</div>
                    </div>
                  </div>
                </div>
                <div className="template-name">Lead Generation Template</div>
              </div>
              {/* Card 4 */}
              <div className="template-card">
                <div className="browser-frame">
                  <div className="browser-header">
                    <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                  </div>
                  <div className="browser-content">
                    <div className="mini-popup-preview preview-purple-dark">
                      <div className="mini-popup-text">Wait! Don't Leave!</div>
                      <div className="mini-popup-button">Unlock Secret Deal</div>
                    </div>
                  </div>
                </div>
                <div className="template-name">Exit Intent Overlay</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
