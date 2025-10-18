'use client';

import { useEffect } from 'react';

export default function GSAPLoader() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Simple check with interval (non-blocking)
    const interval = setInterval(() => {
      const gsap = (window as any).gsap;
      const ScrollTrigger = (window as any).ScrollTrigger;

      if (gsap && ScrollTrigger) {
        clearInterval(interval);
        
        try {
          gsap.registerPlugin(ScrollTrigger);
          console.log('✅ GSAP ready');
          
          // Dispatch custom event to notify components
          window.dispatchEvent(new Event('gsapReady'));
        } catch (error) {
          console.error('GSAP registration error:', error);
        }
      }
    }, 50); // Check every 50ms

    // Clear interval after 10 seconds to prevent infinite checking
    const timeout = setTimeout(() => {
      clearInterval(interval);
      console.warn('GSAP failed to load within 10 seconds');
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return null;
}

