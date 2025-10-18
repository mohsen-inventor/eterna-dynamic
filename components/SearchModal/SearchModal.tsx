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
    <div className="search-modal search-modal--active" aria-hidden={!isOpen}>
      <div className="search-modal__overlay" onClick={onClose} />
      <div className="search-modal__content">
        <button 
          className="search-modal__close" 
          onClick={onClose}
          aria-label="Close search"
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="search-modal__input-container">
          <input 
            ref={inputRef}
            type="text" 
            className="search-modal__input" 
            placeholder="Type to search"
            id="searchInput"
          />
        </div>
      </div>
    </div>
  );
}

