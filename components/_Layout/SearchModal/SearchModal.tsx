'use client';

import { useEffect, useRef } from 'react';
import css from './SearchModal.module.scss';
import { Icon } from '@/components/_UI';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle open/close animations
  useEffect(() => {
    if (typeof window === 'undefined' || !modalRef.current) return;

    const gsap = (window as any).gsap;
    const modal = modalRef.current;
    
    if (!gsap) {
      // Fallback without GSAP
      if (isOpen) {
        modal.style.display = 'block';
        modal.style.transform = 'translateY(0)';
        setTimeout(() => inputRef.current?.focus(), 100);
      } else {
        modal.style.display = 'none';
        modal.style.transform = 'translateY(-100%)';
      }
      return;
    }

    if (isOpen) {
      // Open animation - slide down from top
      modal.classList.add(css.searchModalActive);
      modal.setAttribute('aria-hidden', 'false');
      
      gsap.timeline({
        onComplete: () => {
          inputRef.current?.focus();
        }
      })
      .set(modal, { display: 'block' })
      .to(modal, {
        y: '0%',
        duration: 0.4,
        ease: 'power2.out'
      });
    } else if (modal.classList.contains(css.searchModalActive)) {
      // Close animation - slide up (only if it was open)
      gsap.timeline({
        onComplete: () => {
          modal.classList.remove(css.searchModalActive);
          modal.setAttribute('aria-hidden', 'true');
          gsap.set(modal, { display: 'none' });
        }
      })
      .to(modal, {
        y: '-100%',
        duration: 0.3,
        ease: 'power2.in'
      });
    }
  }, [isOpen]);

  // ESC key handling
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && modalRef.current?.classList.contains(css.searchModalActive)) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <div ref={modalRef} className={css.searchModal} aria-hidden={!isOpen}>
      <div className={css.searchModalContent}>
        <button 
          className={css.searchModalClose} 
          onClick={onClose}
          aria-label="Close search"
        >
          <Icon name="close" size={24} />
        </button>
        <div className={css.searchModalInputContainer}>
          <input 
            ref={inputRef}
            type="text" 
            className={css.searchModalInput} 
            placeholder="Type to search"
            id="searchInput"
          />
        </div>
      </div>
    </div>
  );
}
