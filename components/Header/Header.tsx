'use client';

import { useState, useEffect } from 'react';
import css from './Header.module.scss';
import SearchModal from '../SearchModal/SearchModal';

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !(window as any).gsap) return;
    
    const gsap = (window as any).gsap;
    
    // Initialize Talk Button Animation
    const talkButton = document.querySelector(`.${css.btnPrimary}`);
    const gradientOverlay = talkButton?.querySelector(`.${css.btnGradientOverlay}`);
    
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
      <header className={css.header} role="banner">
        <nav className={css.navbar} aria-label="Main navigation">
          {/* Logo/Brand */}
          <a href="#" className={css.navbarBrand} aria-label="EternaCloud Home">
            <div className={css.navbarLogo}>
              <svg className={css.navbarLogoIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <span className={css.navbarBrandText}>EternaCloud</span>
            </div>
          </a>
          
          {/* Desktop Menu */}
          <div className={css.navbarMenu} id="navbarMenu">
            <ul className={css.navbarNav} role="menubar">
              <li role="none">
                <span className={css.navbarLink} role="menuitem">What We Do</span>
              </li>
              <li role="none">
                <span className={css.navbarLink} role="menuitem">Our Approach</span>
              </li>
              <li role="none">
                <span className={css.navbarLink} role="menuitem">About Us</span>
              </li>
              <li role="none">
                <span className={css.navbarLink} role="menuitem">Insights</span>
              </li>
            </ul>
          </div>
          
          {/* Actions */}
          <div className={css.navbarActions}>
            <button 
              className={css.navbarSearch} 
              aria-label="Search"
              onClick={() => setIsSearchOpen(true)}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
            <a href="#contact" className={`${css.btn} ${css.btnPrimary}`}>
              <span className={css.btnGradientOverlay}></span>
              <span className={css.btnText}>LET&apos;S TALK</span>
            </a>
          </div>
        </nav>
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
