'use client';

import { useState, useEffect } from 'react';
import './Header.module.scss';
import SearchModal from '../SearchModal/SearchModal';

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !(window as any).gsap) return;
    
    const gsap = (window as any).gsap;
    
    // Initialize Talk Button Animation
    const talkButton = document.querySelector('.btn--primary');
    const gradientOverlay = talkButton?.querySelector('.btn__gradient-overlay');
    
    if (talkButton && gradientOverlay) {
      talkButton.addEventListener('mouseenter', () => {
        gsap.to(gradientOverlay, {
          opacity: 1,
          backgroundPosition: '100% 50%',
          duration: 0.6,
          ease: 'power2.out'
        });
      });
      
      talkButton.addEventListener('mouseleave', () => {
        gsap.to(gradientOverlay, {
          opacity: 0,
          backgroundPosition: '0% 50%',
          duration: 0.6,
          ease: 'power2.inOut'
        });
      });
    }
  }, []);

  return (
    <>
      <header className="header" role="banner">
        <nav className="navbar" aria-label="Main navigation">
          {/* Logo/Brand */}
          <a href="#" className="navbar__brand" aria-label="EternaCloud Home">
            <div className="navbar__logo">
              <svg className="navbar__logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#4A70F7', stopOpacity: 1 }} />
                    <stop offset="25%" style={{ stopColor: '#8A56F0', stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: '#E050B0', stopOpacity: 1 }} />
                    <stop offset="75%" style={{ stopColor: '#F7B04A', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#4A70F7', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <circle cx="12" cy="12" r="10" stroke="url(#logoGradient)" strokeWidth="2" fill="none"/>
              </svg>
              <span className="navbar__brand-text">EternaCloud</span>
            </div>
          </a>
          
          {/* Desktop Menu */}
          <div className="navbar__menu" id="navbarMenu">
            <ul className="navbar__nav" role="menubar">
              <li role="none">
                <span className="navbar__link" role="menuitem">What We Do</span>
              </li>
              <li role="none">
                <span className="navbar__link" role="menuitem">Our Approach</span>
              </li>
              <li role="none">
                <span className="navbar__link" role="menuitem">About Us</span>
              </li>
              <li role="none">
                <span className="navbar__link" role="menuitem">Insights</span>
              </li>
            </ul>
          </div>
          
          {/* Actions */}
          <div className="navbar__actions">
            <button 
              className="navbar__search" 
              aria-label="Search"
              onClick={() => setIsSearchOpen(true)}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
            <a href="#contact" className="btn btn--primary">
              <span className="btn__gradient-overlay"></span>
              <span className="btn__text">LET&apos;S TALK</span>
            </a>
          </div>
        </nav>
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
