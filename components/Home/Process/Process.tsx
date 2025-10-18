'use client';

import { useEffect, useRef } from 'react';
import css from './Process.module.scss';

interface ProcessFunction {
  name: string;
  items: string[];
}

interface ProcessProps {
  badgeText: string;
  title: string;
  tagline: string;
  description: string;
  functions: ProcessFunction[];
}

export default function Process({ badgeText, title, tagline, description, functions }: ProcessProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const functionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const waveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current) return;

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

    // Observe header, functions, and wave using refs
    if (headerRef.current) observer.observe(headerRef.current);
    functionsRef.current.forEach(func => {
      if (func) observer.observe(func);
    });
    if (waveRef.current) observer.observe(waveRef.current);

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className={css.process} id="process">
      <div className="container">
        <div ref={headerRef} className={css.processHeader}>
          <div className={css.processBadge}>
            <svg className={css.processBadgeIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>{badgeText}</span>
          </div>
          <h2 className={css.processTitle}>{title}</h2>
          <div className={css.processTagline}>
            <span className="gradient-text">{tagline}</span>
          </div>
          <p className={css.processDescription}>{description}</p>
        </div>
        
        <div className={css.processContentWrapper}>
          <div className={css.processFunctions}>
            {functions.map((func, idx) => (
              <div 
                key={idx} 
                ref={(el) => { functionsRef.current[idx] = el; }}
                className={css.processFunction}
              >
                <div className={css.processFunctionHeader}>
                  <div className={css.processFunctionCircle}></div>
                  <span className={css.processFunctionTitle}>{func.name}</span>
                </div>
                <div className={css.processFunctionContent}>
                  <div className={css.processFunctionLine}></div>
                  <ul className={css.processFunctionItems}>
                    {func.items.map((item, itemIdx) => (
                      <li key={itemIdx} className={css.processFunctionItem}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          {/* Wavy Gradient Graphic */}
          <div ref={waveRef} className={css.processWave}>
            <picture>
              <source media="(max-width: 768px)" srcSet="/images/wave-v.avif" />
              <img src="/images/wave-h.png" alt="Decorative wave graphic" className={css.processWaveImage} />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
