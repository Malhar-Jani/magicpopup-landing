import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar" id="navbar">
      <div className="container nav-container">
        <a href="/" className="logo" onClick={closeMenu}>
          <svg className="logo-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
            <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round"></path>
          </svg>
          MagicPopup
        </a>

        <div className={`nav-links-wrapper ${isOpen ? 'open' : ''}`} id="nav-links-wrapper">
          <ul className="nav-links">
            <li><a href="#features" className="nav-link" onClick={closeMenu}>Features</a></li>
            <li><a href="#pricing" className="nav-link" onClick={closeMenu}>Pricing</a></li>
            <li><a href="#faq" className="nav-link" onClick={closeMenu}>FAQ</a></li>
          </ul>
          <div className="nav-actions">
            <a href="https://github.com/Malhar-Jani/magicpopup-landing#product-tour" className="btn btn-outline" onClick={closeMenu}>Product tour</a>
            <a href="https://github.com/Malhar-Jani/magicpopup-landing#product-tour" className="btn btn-primary hide-on-mobile" onClick={closeMenu}>View project</a>
          </div>
        </div>

        <div className="mobile-actions">
          <a href="https://github.com/Malhar-Jani/magicpopup-landing#product-tour" className="btn btn-primary" onClick={closeMenu}>View project</a>
        </div>

        <button
          className="mobile-nav-toggle"
          id="mobile-nav-toggle"
          aria-label="Toggle Navigation Menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X id="menu-icon" /> : <Menu id="menu-icon" />}
        </button>
      </div>
    </nav>
  );
}
