'use client';

import { useEffect, useRef } from 'react';
import css from './Services.module.scss';
import { Button } from '@/components/_UI';

interface Service {
  _id: string;
  stage: string;
  title: string;
  features: string[];
  order: number;
}

interface ServicesProps {
  title: string;
  tagline: string;
  description: string;
  services: Service[];
}

export default function Services({ title, tagline, description, services }: ServicesProps) {
  const sortedServices = [...services].sort((a, b) => a.order - b.order);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const initAnimations = () => {
      const gsap = (window as any).gsap;
      const ScrollTrigger = (window as any).ScrollTrigger;
      
      if (!gsap || !ScrollTrigger) return; // Wait for gsapReady event
      
      console.log('✅ Services animations initialized');
      
      // Scroll animation for section
      if (sectionRef.current && headerRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
          end: 'bottom 10%',
          toggleActions: 'play none none reverse'
        }
      });

      // Animate header
      tl.fromTo(headerRef.current, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
      );

      // Animate cards with stagger
      const validCards = cardsRef.current.filter(card => card !== null);
      if (validCards.length) {
        tl.fromTo(validCards,
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
    
    // Card interactions
    cardsRef.current.forEach(card => {
      if (!card) return;
      
      // Card click to toggle active state
      card.addEventListener('click', (e) => {
        if ((e.target as HTMLElement).closest('button') || (e.target as HTMLElement).closest('a')) return;
        
        const isActive = card.classList.contains(css.active);
        
        if (!isActive) {
          // Remove active from all cards first
          cardsRef.current.forEach(c => {
            if (c && c !== card && c.classList.contains(css.active)) {
              c.classList.remove(css.active);
              gsap.to(c, { scale: 1, duration: 0.4, ease: 'power2.out' });
            }
          });
          
          // Add active to clicked card with animation
          card.classList.add(css.active);
          gsap.fromTo(card, 
            { scale: 0.98 },
            { scale: 1, duration: 0.5, ease: 'elastic.out(1, 0.6)' }
          );
        } else {
          // Remove active with animation
          card.classList.remove(css.active);
          gsap.to(card, { scale: 1, duration: 0.4, ease: 'power2.out' });
        }
      });
      
      // Card hover animation - only if not active
      card.addEventListener('mouseenter', () => {
        if (!card.classList.contains(css.active)) {
          gsap.to(card, { y: -8, duration: 0.2, ease: 'power2.out' });
          gsap.to(card, { '--card-bg-opacity': 1, duration: 0.25, ease: 'power2.out' });
        }
      });
      
      card.addEventListener('mouseleave', () => {
        if (!card.classList.contains(css.active)) {
          gsap.to(card, { y: 0, duration: 0.2, ease: 'power2.out' });
          gsap.to(card, { '--card-bg-opacity': 0, duration: 0.25, ease: 'power2.out' });
        }
      });
    });
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
    <section ref={sectionRef} className={css.services} id="services">
      <div className="container">
        <div ref={headerRef} className={css.servicesHeader}>
          <h2 className={css.servicesTitle}>{title}</h2>
          <div className={css.servicesTagline}>
            <span className="gradient-text">{tagline}</span>
          </div>
          <p className={css.servicesDescription}>{description}</p>
        </div>
        
        <div className={css.servicesGrid}>
          {sortedServices.map((service, index) => (
            <article 
              key={service._id} 
              className={css.serviceCard}
              ref={(el) => { cardsRef.current[index] = el; }}
            >
              <div className={css.serviceCardStage}>
                <div className={css.serviceCardStageIcon}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="3" fill="currentColor"/>
                  </svg>
                </div>
                <span className={css.serviceCardStageText}>{service.stage}</span>
              </div>
              <h3 className={css.serviceCardTitle}>{service.title}</h3>
              <ul className={css.serviceCardFeatures}>
                {service.features.map((feature, idx) => (
                  <li key={idx} className={css.serviceCardFeature}>
                    <svg className={css.serviceCardCheck} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className={css.serviceCardBtn}>
                <Button 
                  variant="primary" 
                  size="md" 
                  width="full"
                >
                  More
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
