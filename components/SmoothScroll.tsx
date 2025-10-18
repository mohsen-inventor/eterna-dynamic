'use client';

import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let clickHandler: ((e: MouseEvent) => void) | null = null;

    const initSmoothScroll = () => {
      const gsap = (window as any).gsap;
      const ScrollToPlugin = (window as any).ScrollToPlugin;

      if (!gsap || !ScrollToPlugin) {
        console.log('⏳ Waiting for GSAP ScrollToPlugin...');
        return;
      }

      console.log('✅ Smooth scroll initialized');

      // Handle anchor link clicks
      clickHandler = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;
        
        if (!anchor) return;
        
        const href = anchor.getAttribute('href');
        
        // Skip if it's just "#" or empty
        if (!href || href === '#') return;
        
        const element = document.querySelector(href);
        if (!element) return;
        
        e.preventDefault();
        
        // Get header height for offset
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight + 20 : 100;
        
        // Smooth scroll with GSAP
        gsap.to(window, {
          duration: 1.5,
          scrollTo: {
            y: element,
            offsetY: headerHeight,
            autoKill: true,
          },
          ease: 'power3.inOut',
        });
      };

      document.addEventListener('click', clickHandler);
    };

    // Try immediately
    initSmoothScroll();

    // Listen for gsapReady event
    window.addEventListener('gsapReady', initSmoothScroll);

    return () => {
      window.removeEventListener('gsapReady', initSmoothScroll);
      if (clickHandler) {
        document.removeEventListener('click', clickHandler);
      }
    };
  }, []);

  return null;
}
