'use client';

import { useEffect, useRef } from 'react';
import css from './SearchModal.module.scss';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={`${css.searchModal} ${css.searchModalActive}`} aria-hidden={!isOpen}>
      <div className={css.searchModalOverlay} onClick={onClose} />
      <div className={css.searchModalContent}>
        <button 
          className={css.searchModalClose} 
          onClick={onClose}
          aria-label="Close search"
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
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
