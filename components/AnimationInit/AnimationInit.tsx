'use client';

import { useEffect } from 'react';
import css from '../Header/Header.module.scss';

export default function AnimationInit() {
  useEffect(() => {
    if (typeof window === 'undefined' || !(window as any).gsap) {
      return;
    }

    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;

    if (!ScrollTrigger) {
      return;
    }

    try {
      gsap.registerPlugin(ScrollTrigger);

      // Services Section Animations - EXACT MATCH TO STATIC SITE
      const servicesSection = document.querySelector('[class*="services"]');
      if (servicesSection) {
        const header = servicesSection.querySelector('[class*="servicesHeader"]');
        const serviceCards = servicesSection.querySelectorAll('[class*="serviceCard"]');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: servicesSection,
            start: 'top 90%',
            end: 'bottom 10%',
            toggleActions: 'play none none reverse'
          }
        });

        // Animate header first
        if (header) {
          tl.fromTo(header, 
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
          );
        }

        // Animate service cards with stagger
        if (serviceCards.length) {
          tl.fromTo(serviceCards,
            { opacity: 0, y: 20 },
            { 
              opacity: 1, 
              y: 0, 
              duration: 0.3, 
              ease: 'power2.out',
              stagger: 0.08
            },
            '-=0.2'
          );
        }
      }

      // Solutions Section Animations - EXACT MATCH TO STATIC SITE
      const solutionsSection = document.querySelector('[class*="solutions"]');
      if (solutionsSection) {
        const header = solutionsSection.querySelector('[class*="solutionsHeader"]');
        const problems = solutionsSection.querySelectorAll('[class*="solutionsProblems"] [class*="solutionsCard"]');
        const cosmos = solutionsSection.querySelector('[class*="solutionsCosmos"]');
        const solutions = solutionsSection.querySelectorAll('[class*="solutionsSolutions"] [class*="solutionsCard"]');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: solutionsSection,
            start: 'top 90%',
            end: 'bottom 10%',
            toggleActions: 'play none none reverse'
          }
        });

        // Animate header first
        if (header) {
          tl.fromTo(header, 
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
          );
        }

        // Animate problems from left
        if (problems.length) {
          tl.fromTo(problems,
            { opacity: 0, x: -20 },
            { 
              opacity: 1, 
              x: 0, 
              duration: 0.3, 
              ease: 'power2.out',
              stagger: 0.06
            },
            '-=0.2'
          );
        }

        // Animate cosmos in center
        if (cosmos) {
          tl.fromTo(cosmos,
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' },
            '-=0.15'
          );
        }

        // Animate solutions from right
        if (solutions.length) {
          tl.fromTo(solutions,
            { opacity: 0, x: 20 },
            { 
              opacity: 1, 
              x: 0, 
              duration: 0.3, 
              ease: 'power2.out',
              stagger: 0.06
            },
            '-=0.3'
          );
        }
      }

      // Process Section Animations - EXACT MATCH TO STATIC SITE
      // Uses Intersection Observer like the static site
      const processSection = document.querySelector('[class*="process"]');
      if (processSection) {
        const observerOptions = {
          threshold: 0.05,
          rootMargin: '0px 0px -10% 0px'
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in');
            } else {
              entry.target.classList.remove('animate-in');
            }
          });
        }, observerOptions);

        const header = processSection.querySelector('[class*="processHeader"]');
        const functions = processSection.querySelectorAll('[class*="processFunction"]');
        const wave = processSection.querySelector('[class*="processWave"]');

        if (header) observer.observe(header);
        functions.forEach(func => observer.observe(func));
        if (wave) observer.observe(wave);
      }

      // Header scroll behavior
      const navbar = document.querySelector(`.${css.navbar}`);
      let isNavbarCompact = false;

      const handleScroll = () => {
        const currentScrollY = window.pageYOffset;

        if (currentScrollY > 100 && !isNavbarCompact) {
          isNavbarCompact = true;
          navbar?.classList.add(css.navbarGlass);
          
          gsap.to(navbar, {
            maxWidth: '1100px',
            duration: 0.3,
            ease: 'power2.out',
            overwrite: 'auto'
          });
        } else if (currentScrollY <= 100 && isNavbarCompact) {
          isNavbarCompact = false;
          navbar?.classList.remove(css.navbarGlass);
          
          gsap.to(navbar, {
            maxWidth: '1280px',
            duration: 0.35,
            ease: 'power2.out',
            overwrite: 'auto'
          });
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        window.removeEventListener('scroll', handleScroll);
        ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      };
    } catch (error) {
      console.error('Error initializing GSAP animations:', error);
    }
  }, []);

  return null;
}
