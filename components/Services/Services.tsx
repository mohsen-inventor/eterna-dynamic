'use client';

import { useEffect, useRef } from 'react';
import css from './Services.module.scss';

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

  useEffect(() => {
    if (typeof window === 'undefined' || !(window as any).gsap) return;
    
    const gsap = (window as any).gsap;
    
    cardsRef.current.forEach(card => {
      if (!card) return;
      
      const button = card.querySelector(`.${css.serviceCardBtn}`);
      const gradientOverlay = button?.querySelector(`.${css.btnGradientOverlay}`);
      
      // Card click to toggle active state
      card.addEventListener('click', (e) => {
        if ((e.target as HTMLElement).closest(`.${css.serviceCardBtn}`)) return;
        
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
      
      // Button hover animation
      if (button && gradientOverlay) {
        button.addEventListener('mouseenter', () => {
          gsap.to(gradientOverlay, {
            opacity: 1,
            backgroundPosition: '100% 50%',
            duration: 0.6,
            ease: 'power2.out'
          });
        });
        
        button.addEventListener('mouseleave', () => {
          gsap.to(gradientOverlay, {
            opacity: 0,
            backgroundPosition: '0% 50%',
            duration: 0.6,
            ease: 'power2.inOut'
          });
        });
      }
    });
  }, []);

  return (
    <section className={css.services} id="services">
      <div className="container">
        <div className={css.servicesHeader}>
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
              <button className={css.serviceCardBtn}>
                <span className={css.btnGradientOverlay}></span>
                <span className={css.serviceCardBtnText}>Show me more</span>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
