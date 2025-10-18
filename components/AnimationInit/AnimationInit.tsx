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

      // Hero Section Animations
      const heroSection = document.querySelector(`.${css.hero}`) || document.getElementById('hero');
      if (heroSection) {
        const heroTagline = heroSection.querySelector('[class*="heroTagline"]');
        const heroHeadline = heroSection.querySelector('[class*="heroHeadline"]');
        const heroDescription = heroSection.querySelector('[class*="heroDescription"]');

        if (heroTagline) {
          gsap.fromTo(heroTagline,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.3 }
          );
        }

        if (heroHeadline) {
          gsap.fromTo(heroHeadline,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.5 }
          );
        }

        if (heroDescription) {
          gsap.fromTo(heroDescription,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.7 }
          );
        }
      }

      // Services Section Animations
      const servicesSection = document.querySelector('[class*="services"]');
      if (servicesSection) {
        const header = servicesSection.querySelector('[class*="servicesHeader"]');
        const serviceCards = servicesSection.querySelectorAll('[class*="serviceCard"]');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: servicesSection,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        });

        if (header) {
          tl.fromTo(header, 
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
          );
        }

        if (serviceCards.length) {
          tl.fromTo(serviceCards,
            { opacity: 0, y: 50, scale: 0.95 },
            { 
              opacity: 1, 
              y: 0, 
              scale: 1,
              duration: 0.5, 
              ease: 'power3.out',
              stagger: 0.1
            },
            '-=0.3'
          );
        }
      }

      // Solutions Section Animations
      const solutionsSection = document.querySelector('[class*="solutions"]');
      if (solutionsSection) {
        const header = solutionsSection.querySelector('[class*="solutionsHeader"]');
        const problems = solutionsSection.querySelectorAll('[class*="solutionsProblems"] [class*="solutionsCard"]');
        const cosmos = solutionsSection.querySelector('[class*="solutionsCosmos"]');
        const solutions = solutionsSection.querySelectorAll('[class*="solutionsSolutions"] [class*="solutionsCard"]');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: solutionsSection,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        });

        if (header) {
          tl.fromTo(header, 
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
          );
        }

        if (problems.length) {
          tl.fromTo(problems,
            { opacity: 0, x: -50, scale: 0.95 },
            { 
              opacity: 1, 
              x: 0,
              scale: 1, 
              duration: 0.5, 
              ease: 'power3.out',
              stagger: 0.08
            },
            '-=0.3'
          );
        }

        if (cosmos) {
          tl.fromTo(cosmos,
            { opacity: 0, scale: 0.8, rotate: -10 },
            { opacity: 1, scale: 1, rotate: 0, duration: 0.8, ease: 'power3.out' },
            '-=0.4'
          );
        }

        if (solutions.length) {
          tl.fromTo(solutions,
            { opacity: 0, x: 50, scale: 0.95 },
            { 
              opacity: 1, 
              x: 0,
              scale: 1, 
              duration: 0.5, 
              ease: 'power3.out',
              stagger: 0.08
            },
            '-=0.6'
          );
        }
      }

      // Process Section Animations
      const processSection = document.querySelector('[class*="process"]');
      if (processSection) {
        const header = processSection.querySelector('[class*="processHeader"]');
        const functions = processSection.querySelectorAll('[class*="processFunction"]');
        const wave = processSection.querySelector('[class*="processWave"]');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: processSection,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        });

        if (header) {
          tl.fromTo(header, 
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
          );
        }

        if (functions.length) {
          tl.fromTo(functions,
            { opacity: 0, y: 60, scale: 0.9 },
            { 
              opacity: 1, 
              y: 0,
              scale: 1, 
              duration: 0.6, 
              ease: 'power3.out',
              stagger: 0.12
            },
            '-=0.3'
          );
        }

        if (wave) {
          tl.fromTo(wave,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
            '-=0.5'
          );
        }
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
