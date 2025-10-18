'use client';

import { useEffect, useRef } from 'react';
import css from './Solutions.module.scss';

interface SolutionsProps {
  badgeText: string;
  title: string;
  subtitle: string;
  problems: string[];
  solutions: string[];
  cosmosVideoUrl?: string;
}

export default function Solutions({
  badgeText,
  title,
  subtitle,
  problems,
  solutions,
  cosmosVideoUrl = '/videos/cosmos.webm'
}: SolutionsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const problemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const cosmosRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const initAnimations = () => {
      const gsap = (window as any).gsap;
      const ScrollTrigger = (window as any).ScrollTrigger;
      
      if (!gsap || !ScrollTrigger || !sectionRef.current) return;
      
      console.log('✅ Solutions animations initialized');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 90%',
        end: 'bottom 10%',
        toggleActions: 'play none none reverse'
      }
    });

    // Animate header
    if (headerRef.current) {
      tl.fromTo(headerRef.current, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
      );
    }

    // Animate problems from left
    const validProblems = problemsRef.current.filter(el => el !== null);
    if (validProblems.length) {
      tl.fromTo(validProblems,
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

    // Animate cosmos
    if (cosmosRef.current) {
      tl.fromTo(cosmosRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' },
        '-=0.15'
      );
    }

    // Animate solutions from right
    const validSolutions = solutionsRef.current.filter(el => el !== null);
    if (validSolutions.length) {
      tl.fromTo(validSolutions,
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
    };
    
    // Try immediately if GSAP already loaded
    initAnimations();
    
    // Also listen for gsapReady event
    window.addEventListener('gsapReady', initAnimations);

    // Cleanup
    return () => {
      window.removeEventListener('gsapReady', initAnimations);
      if ((window as any).ScrollTrigger) {
        (window as any).ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={css.solutions} id="solutions">
      <div className="container">
        <div ref={headerRef} className={css.solutionsHeader}>
          <div className={css.solutionsBadge}>
            <svg className={css.solutionsBadgeIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" fill="currentColor"/>
            </svg>
            <span>{badgeText}</span>
          </div>
          <h2 className={css.solutionsTitle}>{title}</h2>
          <div className={css.solutionsSubtitle}>
            <span className="gradient-text">{subtitle}</span>
          </div>
        </div>
        
        <div className={css.solutionsContent}>
          {/* Problems Column */}
          <div className={`${css.solutionsColumn} ${css.solutionsProblems}`}>
            {problems.map((problem, idx) => (
              <div 
                key={idx} 
                ref={(el) => { problemsRef.current[idx] = el; }}
                className={css.solutionsCard}
              >
                <div className={`${css.solutionsCardIcon} ${css.solutionsCardIconNegative}`}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 9L9 15M9 9L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <p className={css.solutionsCardText}>{problem}</p>
              </div>
            ))}
          </div>

          {/* Cosmos Animation Column */}
          <div className={css.solutionsCenter}>
            <div ref={cosmosRef} className={css.solutionsCosmos}>
              <video className={css.solutionsCosmosVideo} autoPlay muted loop playsInline>
                <source src={cosmosVideoUrl} type="video/webm" />
              </video>
            </div>
          </div>
          
          {/* Solutions Column */}
          <div className={`${css.solutionsColumn} ${css.solutionsSolutions}`}>
            {solutions.map((solution, idx) => (
              <div 
                key={idx} 
                ref={(el) => { solutionsRef.current[idx] = el; }}
                className={css.solutionsCard}
              >
                <div className={`${css.solutionsCardIcon} ${css.solutionsCardIconPositive}`}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <p className={css.solutionsCardText}>{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
