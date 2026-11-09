import React, { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef(null);

  return (
    <div className={`faq-item ${isOpen ? 'active' : ''}`}>
      <button 
        className="faq-trigger" 
        aria-expanded={isOpen ? "true" : "false"}
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <ChevronDown className="faq-chevron" />
      </button>
      <div 
        ref={panelRef}
        className="faq-panel"
        style={{ maxHeight: isOpen ? `${panelRef.current?.scrollHeight}px` : '0px' }}
      >
        <div className="faq-content">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const faqs = [
    {
      question: "Does MagicPopup work with email marketing platforms?",
      answer: "Yes, MagicPopup integrates seamlessly with popular email tools like Mailchimp, HubSpot, ConvertKit, and ActiveCampaign to sync leads automatically."
    },
    {
      question: "What popup types work best for ecommerce?",
      answer: "Exit-intent popups with discounts, discount wheels, and scroll-triggered email captures generally drive the highest conversions for online stores."
    },
    {
      question: "Can I use MagicPopup with Webflow / Shopify / WordPress?",
      answer: "Absolutely. MagicPopup works with any website builder. Just copy our single-line JavaScript snippet and paste it into your site's header or settings."
    },
    {
      question: "Do I need any coding knowledge to use MagicPopup?",
      answer: "No coding is required. Our drag-and-drop editor allows you to design and publish beautiful popups entirely visually."
    },
    {
      question: "Will popups slow down my website?",
      answer: "Not at all. Our script is ultra-lightweight, loaded asynchronously, and optimized to guarantee zero impact on your site's page load speed."
    }
  ];

  return (
    <section className="section-faq" id="faq">
      {/* Intra-section decor: FAQ right top cluster */}
      <div className="decor-t decor-di8-a dt-coral"></div>
      <div className="decor-t decor-di8-b dt-warm"></div>
      {/* Intra-section decor: FAQ left bottom cluster */}
      <div className="decor-t decor-di9-a dt-teal"></div>
      <div className="decor-t decor-di9-b dt-ring"></div>
      <div className="decor-t decor-di9-c dt-rose"></div>
      <div className="container">
        <div className="section-header">
          <div className="section-accent-bar"></div>
          <div>
            <h2 className="section-title">Frequently asked questions</h2>
            <p className="section-subtitle" style={{ marginLeft: 0, textAlign: 'left' }}>Common questions people ask about popup builders like this.</p>
          </div>
        </div>

        <div className="faq-container">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
      {/* Decorative transition: FAQ â†’ Final CTA (bottom-left, warm large square + circle) */}
      <div className="decor-t decor-t5-a dt-coral"></div>
      <div className="decor-t decor-t5-b dt-purple"></div>
      <div className="decor-t decor-t5-c dt-ring-coral"></div>
    </section>
  );
}

