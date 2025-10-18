'use client';

import { useEffect, useRef, forwardRef } from 'react';
import css from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  width?: 'auto' | 'full' | number; // Smart width: 'auto', 'full', or specific pixel value
  className?: string;
}

const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(
  ({ children, onClick, href, variant = 'primary', size = 'md', width = 'auto', className = '' }, ref) => {
    const gradientOverlayRef = useRef<HTMLSpanElement>(null);
    const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);

    useEffect(() => {
      if (typeof window === 'undefined') return;

      const element = buttonRef.current;
      const overlay = gradientOverlayRef.current;

      if (!element || !overlay) return;

      let handleMouseEnter: (() => void) | null = null;
      let handleMouseLeave: (() => void) | null = null;

      const initAnimation = () => {
        const gsap = (window as any).gsap;

        if (!gsap) return; // Wait for gsapReady event

        handleMouseEnter = () => {
          gsap.to(overlay, {
            opacity: 1,
            backgroundPosition: '100% 50%',
            duration: 0.6,
            ease: 'power2.out'
          });
        };

        handleMouseLeave = () => {
          gsap.to(overlay, {
            opacity: 0,
            backgroundPosition: '0% 50%',
            duration: 0.6,
            ease: 'power2.inOut'
          });
        };

        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);
      };

      // Try immediately if GSAP already loaded
      initAnimation();

      // Also listen for gsapReady event
      window.addEventListener('gsapReady', initAnimation);

      return () => {
        window.removeEventListener('gsapReady', initAnimation);
        if (handleMouseEnter && handleMouseLeave) {
          element.removeEventListener('mouseenter', handleMouseEnter);
          element.removeEventListener('mouseleave', handleMouseLeave);
        }
      };
    }, []);

    // Smart width handling
    const widthClass = width === 'full' ? css.fullWidth : '';
    const classes = `${css.button} ${css[variant]} ${css[size]} ${widthClass} ${className}`;

    const getInlineStyle = () => {
      if (typeof width === 'number') {
        return { width: `${width}px` };
      }
      return undefined;
    };

    if (href) {
      return (
        <a
          ref={(el) => {
            (buttonRef as React.MutableRefObject<HTMLAnchorElement | null>).current = el;
            if (typeof ref === 'function') ref(el);
            else if (ref) (ref as React.MutableRefObject<HTMLAnchorElement | null>).current = el;
          }}
          href={href}
          className={classes}
          style={getInlineStyle()}
        >
          <span ref={gradientOverlayRef} className={css.gradientOverlay}></span>
          <span className={css.buttonText}>{children}</span>
        </a>
      );
    }

    return (
      <button
        ref={(el) => {
          (buttonRef as React.MutableRefObject<HTMLButtonElement | null>).current = el;
          if (typeof ref === 'function') ref(el);
          else if (ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = el;
        }}
        onClick={onClick}
        className={classes}
        style={getInlineStyle()}
      >
        <span ref={gradientOverlayRef} className={css.gradientOverlay}></span>
        <span className={css.buttonText}>{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;

