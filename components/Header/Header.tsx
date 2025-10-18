'use client';

import { useState } from 'react';
import styles from './Header.module.scss';
import SearchModal from '../SearchModal/SearchModal';

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className={styles.header} role="banner">
        <nav className={styles.navbar} aria-label="Main navigation">
          {/* Logo/Brand */}
          <a href="#" className={styles.navbar__brand} aria-label="EternaCloud Home">
            <div className={styles.navbar__logo}>
              <svg className={styles.navbar__logoIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <span className={styles.navbar__brandText}>EternaCloud</span>
            </div>
          </a>
          
          {/* Desktop Menu */}
          <div className={styles.navbar__menu} id="navbarMenu">
            <ul className={styles.navbar__nav} role="menubar">
              <li role="none">
                <span className={styles.navbar__link} role="menuitem">What We Do</span>
              </li>
              <li role="none">
                <span className={styles.navbar__link} role="menuitem">Our Approach</span>
              </li>
              <li role="none">
                <span className={styles.navbar__link} role="menuitem">About Us</span>
              </li>
              <li role="none">
                <span className={styles.navbar__link} role="menuitem">Insights</span>
              </li>
            </ul>
          </div>
          
          {/* Actions */}
          <div className={styles.navbar__actions}>
            <button 
              className={styles.navbar__search} 
              aria-label="Search"
              onClick={() => setIsSearchOpen(true)}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
            <a href="#contact" className={styles.btn}>
              <span className={styles.btn__gradientOverlay}></span>
              <span className={styles.btn__text}>LET'S TALK</span>
            </a>
          </div>
        </nav>
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
