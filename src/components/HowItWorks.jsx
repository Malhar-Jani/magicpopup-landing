import React, { useEffect, useState, useRef } from 'react';

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: 'Add your website',
      description: 'Connect your site so MagicPopup can publish and measure campaigns in the right workspace.',
      eyebrow: 'Connect',
      flowLabel: 'Website added',
      image: '/1_add_website.png',
    },
    {
      id: 2,
      title: 'Build the popup',
      description: 'Edit copy, fields, layout, and targeting rules from one focused editor.',
      eyebrow: 'Design',
      flowLabel: 'Popup configured',
      image: '/2_popup_editor.png',
    },
    {
      id: 3,
      title: 'Choose a template',
      description: 'Start from proven patterns for promos, lead capture, product alerts, and feedback.',
      eyebrow: 'Launch faster',
      flowLabel: 'Template selected',
      image: '/templates-preview.svg',
    },
    {
      id: 4,
      title: 'Track performance',
      description: 'Watch impressions, clicks, and conversion lift from the analytics dashboard.',
      eyebrow: 'Optimize',
      flowLabel: 'Insights live',
      image: '/analytics-preview.svg',
    },
  ];

  const [activeStepId, setActiveStepId] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef(null);
  const activeStep = steps.find((step) => step.id === activeStepId) || steps[0];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting) {
          setActiveStepId(1);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isPaused || !isIntersecting) return undefined;

    const intervalId = window.setInterval(() => {
      setActiveStepId((current) => (current === steps.length ? 1 : current + 1));
    }, 2400);

    return () => window.clearInterval(intervalId);
  }, [isPaused, isIntersecting, steps.length]);

  return (
    <section className="section-how-it-works" id="how-it-works" ref={sectionRef}>
      <div className="decor-t decor-di3-a dt-coral"></div>

      <div className="container">
        <div className="section-header center-header how-header">
          <div>
            <h2 className="section-title">How it works</h2>
            <p className="section-subtitle">From website setup to measurable popup campaigns</p>
          </div>
        </div>

        <div
          className="selected-workflow"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="selected-workflow-preview">
            <div className="selected-preview-card" key={activeStep.id}>
              <div className="selected-preview-copy">
                <span className="step-eyebrow">{activeStep.eyebrow}</span>
                <h3>{activeStep.title}</h3>
                <p>{activeStep.description}</p>
              </div>

              <div className="card-mockup-frame">
                <div className="mockup-browser-header">
                  <div className="browser-action-dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                  </div>
                  <div className="mockup-status-pill">
                    <span className="status-dot"></span>
                    {activeStep.flowLabel}
                  </div>
                </div>
                <div className="mockup-img-area">
                  <img src={activeStep.image} alt={activeStep.title} />
                </div>
              </div>
            </div>
          </div>

          <div className="selected-workflow-list">
            {steps.map((step) => (
              <button
                key={step.id}
                type="button"
                className={`workflow-selector ${step.id === activeStepId ? 'is-active' : ''}`}
                onClick={() => setActiveStepId(step.id)}
                onMouseEnter={() => setActiveStepId(step.id)}
              >
                <span className="workflow-selector-number">{step.id}</span>
                <span className="workflow-selector-text">
                  <span className="step-eyebrow">{step.eyebrow}</span>
                  <strong>{step.title}</strong>
                  <span>{step.description}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="decor-t decor-t2-a dt-purple"></div>
      <div className="decor-t decor-t2-b dt-rose"></div>
    </section>
  );
}
