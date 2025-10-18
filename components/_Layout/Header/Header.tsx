'use client';

import { useState, useEffect, useRef } from 'react';
import css from './Header.module.scss';
import SearchModal from '../SearchModal/SearchModal';
import { Button, Icon } from '@/components/_UI';

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);


  // Navbar scroll animation
  useEffect(() => {
    if (typeof window === 'undefined' || !navbarRef.current) return;

    const navbar = navbarRef.current;
    let isNavbarCompact = false;
    let scrollHandler: (() => void) | null = null;

    const initScrollAnimation = () => {
      const gsap = (window as any).gsap;
      
      if (!gsap) return; // Wait for gsapReady event

      console.log('✅ Header scroll animation initialized');

      scrollHandler = () => {
        const currentScrollY = window.pageYOffset;

        if (currentScrollY > 100 && !isNavbarCompact) {
          isNavbarCompact = true;
          navbar.classList.add(css.navbarGlass);
          
          gsap.to(navbar, {
            maxWidth: '1100px',
            duration: 0.6,
            ease: 'expo.out',
            overwrite: 'auto'
          });
        } else if (currentScrollY <= 100 && isNavbarCompact) {
          isNavbarCompact = false;
          navbar.classList.remove(css.navbarGlass);
          
          gsap.to(navbar, {
            maxWidth: '1280px',
            duration: 0.7,
            ease: 'back.out(1.2)',
            overwrite: 'auto'
          });
        }
      };

      window.addEventListener('scroll', scrollHandler, { passive: true });
    };

    // Try immediately if GSAP already loaded
    initScrollAnimation();
    
    // Also listen for gsapReady event
    window.addEventListener('gsapReady', initScrollAnimation);

    // Cleanup
    return () => {
      window.removeEventListener('gsapReady', initScrollAnimation);
      if (scrollHandler) {
        window.removeEventListener('scroll', scrollHandler);
      }
    };
  }, []);

  return (
    <>
      <header className={css.header} role="banner">
        <nav ref={navbarRef} className={css.navbar} aria-label="Main navigation">
          {/* Logo/Brand */}
          <a href="#" className={css.navbarBrand} aria-label="EternaCloud Home">
            <div className={css.navbarLogo}>
              <Icon name="logoGradient" size={32} className={css.navbarLogoIcon} />
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
              <Icon name="search" size={22} />
            </button>
            <Button href="#contact" size="md" width={160}>
              LET&apos;S TALK
            </Button>
          </div>
        </nav>
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
