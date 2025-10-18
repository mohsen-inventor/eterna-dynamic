/**
 * EternaCloud - Main JavaScript
 * Handles header interactions, search modal, and button animations
 * Uses GSAP for advanced animations and requestAnimationFrame for optimal performance
 */

(function() {
    'use strict';

    // Check if GSAP is loaded
    if (typeof gsap === 'undefined') {
        console.error('GSAP is not loaded!');
        return;
    }

    // Register GSAP plugins
    try {
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother);
        console.log('GSAP plugins registered successfully');
    } catch (error) {
        console.error('Error registering GSAP plugins:', error);
    }

    // Initialize GSAP ScrollSmoother
    let smoother;
    if (typeof ScrollSmoother !== 'undefined') {
        try {
            smoother = ScrollSmoother.create({
                wrapper: '#smooth-wrapper',
                content: '#smooth-content',
                smooth: 1.2,
                effects: true,
                smoothTouch: 0.1,
                normalizeScroll: true,
                ignoreMobileResize: true,
            });
            console.log('GSAP ScrollSmoother initialized successfully');
        } catch (error) {
            console.error('Error initializing ScrollSmoother:', error);
        }
    } else {
        console.warn('ScrollSmoother plugin not loaded');
    }

    // Configuration
    const CONFIG = {
        scrollThreshold: 100,
        smoothScrollDuration: 1.2,
        smoothScrollEase: 'power2.inOut'
    };

    // DOM Elements
    const elements = {
        header: document.querySelector('.header'),
        navbar: document.querySelector('.navbar'),
        navLinks: document.querySelectorAll('.navbar__link'),
        talkButton: document.querySelector('.btn--primary'),
        searchBtn: document.querySelector('.navbar__search'),
        searchModal: document.getElementById('searchModal'),
        searchClose: document.getElementById('searchClose'),
        searchInput: document.getElementById('searchInput'),
        serviceCards: document.querySelectorAll('.service-card')
    };
    
    // Debug: Check if search elements are found
    console.log('Search elements found:', {
        searchBtn: !!elements.searchBtn,
        searchModal: !!elements.searchModal,
        searchClose: !!elements.searchClose,
        searchInput: !!elements.searchInput
    });

    // State
    let lastScrollY = window.pageYOffset;
    let ticking = false;
    let isNavbarCompact = false;

    /**
     * Handle Header Scroll Behavior
     */
    function handleHeaderScroll() {
        const currentScrollY = window.pageYOffset;

        // Animate navbar width only
        if (currentScrollY > CONFIG.scrollThreshold && !isNavbarCompact) {
            // Scrolled down - make navbar more compact
            isNavbarCompact = true;
            elements.navbar?.classList.add('navbar--glass');
            
            // Single animation with width only
            gsap.to(elements.navbar, {
                maxWidth: '1100px',
                duration: 0.6,
                ease: 'expo.out',
                overwrite: 'auto'
            });
            
        } else if (currentScrollY <= CONFIG.scrollThreshold && isNavbarCompact) {
            // Scrolled back up - restore navbar
            isNavbarCompact = false;
            elements.navbar?.classList.remove('navbar--glass');
            
            // Single animation with width only
            gsap.to(elements.navbar, {
                maxWidth: '1280px',
                duration: 0.7,
                ease: 'back.out(1.2)',
                overwrite: 'auto'
            });
        }

        lastScrollY = currentScrollY;
        ticking = false;
    }

    /**
     * Request scroll update
     */
    function requestScrollUpdate() {
        if (!ticking) {
            requestAnimationFrame(handleHeaderScroll);
            ticking = true;
        }
    }

    /**
     * Smooth scroll to section using GSAP ScrollSmoother
     */
    function smoothScrollTo(target) {
        const element = document.querySelector(target);
        
        if (!element) {
            console.warn(`Smooth scroll target not found: ${target}`);
            return;
        }
        
        if (elements.header) {
            const headerHeight = elements.header.offsetHeight;
            
            console.log(`Smooth scrolling to: ${target}`);
            
            // Use ScrollSmoother if available, otherwise use GSAP ScrollToPlugin
            if (smoother) {
                smoother.scrollTo(element, true, `top ${headerHeight}px`);
            } else {
                const targetPosition = element.offsetTop - headerHeight;
                gsap.to(window, {
                    duration: CONFIG.smoothScrollDuration,
                    scrollTo: {
                        y: targetPosition,
                        autoKill: true
                    },
                    ease: CONFIG.smoothScrollEase
                });
            }
        }
    }

    /**
     * Search Modal Functionality with GSAP Animations
     */
    function initSearchModal() {
        if (!elements.searchBtn || !elements.searchModal) {
            console.error('Search modal elements not found');
            return;
        }
        
        const searchOverlay = elements.searchModal.querySelector('.search-modal__overlay');
        const searchContent = elements.searchModal.querySelector('.search-modal__content');
        const searchClose = elements.searchModal.querySelector('.search-modal__close');
        
        // Set initial state - modal slides from top
        gsap.set(elements.searchModal, { 
            display: 'none', 
            y: '-100%' 
        });
        
        let isAnimating = false;
        
        // Open search modal - simple slide from top
        elements.searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (isAnimating) return;
            
            isAnimating = true;
            elements.searchModal.classList.add('search-modal--active');
            elements.searchModal.setAttribute('aria-hidden', 'false');
            
            // Simple slide down animation
            gsap.timeline({
                onComplete: () => {
                    elements.searchInput?.focus();
                    isAnimating = false;
                }
            })
            .set(elements.searchModal, { display: 'block' })
            .to(elements.searchModal, {
                y: '0%',
                duration: 0.4,
                ease: 'power2.out'
            });
        });
        
        // Close search modal - simple slide up
        const closeSearch = () => {
            if (isAnimating) return;
            
            isAnimating = true;
            
            gsap.timeline({
                onComplete: () => {
                    elements.searchModal.classList.remove('search-modal--active');
                    elements.searchModal.setAttribute('aria-hidden', 'true');
                    gsap.set(elements.searchModal, { display: 'none' });
                    isAnimating = false;
                }
            })
            .to(elements.searchModal, {
                y: '-100%',
                duration: 0.3,
                ease: 'power2.in'
            });
        };
        
        // Close button
        searchClose?.addEventListener('click', closeSearch);
        
        // ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && elements.searchModal.classList.contains('search-modal--active')) {
                closeSearch();
            }
        });
    }

    /**
     * Initialize Talk Button GSAP Animation
     */
    function initTalkButtonAnimation() {
        if (!elements.talkButton) return;
        
        const talkButton = elements.talkButton;
        const gradientOverlay = talkButton.querySelector('.btn__gradient-overlay');
        
        if (!gradientOverlay) return;
        
        // Add event listeners
        talkButton.addEventListener('mouseenter', () => {
            // Animate both opacity and gradient position together on hover in
            gsap.to(gradientOverlay, {
                opacity: 1,
                backgroundPosition: '100% 50%',
                duration: 0.6,
                ease: 'power2.out'
            });
        });
        
        talkButton.addEventListener('mouseleave', () => {
            // Animate both opacity and gradient position together on hover out
            gsap.to(gradientOverlay, {
                opacity: 0,
                backgroundPosition: '0% 50%',
                duration: 0.6,
                ease: 'power2.inOut'
            });
        });
    }

    /**
     * Initialize Service Card Animations
     */
    function initServiceCardAnimations() {
        if (!elements.serviceCards.length) return;
        
        elements.serviceCards.forEach(card => {
            const cardBg = card.querySelector('::before');
            const button = card.querySelector('.service-card__btn');
            const buttonBg = button?.querySelector('::before');
            
            // Card click to toggle active state
            card.addEventListener('click', (e) => {
                // Don't toggle if clicking on the button
                if (e.target.closest('.service-card__btn')) return;
                
                const isActive = card.classList.contains('active');
                
                if (!isActive) {
                    // Remove active from all cards first
                    elements.serviceCards.forEach(c => {
                        if (c !== card && c.classList.contains('active')) {
                            c.classList.remove('active');
                            gsap.to(c, {
                                scale: 1,
                                duration: 0.4,
                                ease: 'power2.out'
                            });
                        }
                    });
                    
                    // Add active to clicked card with animation
                    card.classList.add('active');
                    gsap.fromTo(card, 
                        { scale: 0.98 },
                        { 
                            scale: 1,
                            duration: 0.5,
                            ease: 'elastic.out(1, 0.6)'
                        }
                    );
                } else {
                    // Remove active with animation
                    card.classList.remove('active');
                    gsap.to(card, {
                        scale: 1,
                        duration: 0.4,
                        ease: 'power2.out'
                    });
                }
            });
            
            // Card hover animation (background from top) - only if not active
            card.addEventListener('mouseenter', () => {
                if (!card.classList.contains('active')) {
                    gsap.to(card, {
                        y: -8,
                        duration: 0.2,
                        ease: 'power2.out'
                    });
                    
                    // Animate card background overlay
                    gsap.to(card, {
                        '--card-bg-opacity': 1,
                        duration: 0.25,
                        ease: 'power2.out'
                    });
                }
            });
            
            card.addEventListener('mouseleave', () => {
                if (!card.classList.contains('active')) {
                    gsap.to(card, {
                        y: 0,
                        duration: 0.2,
                        ease: 'power2.out'
                    });
                    
                    // Reset card background overlay
                    gsap.to(card, {
                        '--card-bg-opacity': 0,
                        duration: 0.25,
                        ease: 'power2.out'
                    });
                }
            });
            
            // Button hover animation (same as LET'S TALK button)
            if (button) {
                const gradientOverlay = button.querySelector('.btn__gradient-overlay');
                
                if (gradientOverlay) {
                    button.addEventListener('mouseenter', () => {
                        // Animate both opacity and gradient position together on hover in
                        gsap.to(gradientOverlay, {
                            opacity: 1,
                            backgroundPosition: '100% 50%',
                            duration: 0.6,
                            ease: 'power2.out'
                        });
                    });
                    
                    button.addEventListener('mouseleave', () => {
                        // Animate both opacity and gradient position together on hover out
                        gsap.to(gradientOverlay, {
                            opacity: 0,
                            backgroundPosition: '0% 50%',
                            duration: 0.6,
                            ease: 'power2.inOut'
                        });
                    });
                }
            }
        });
    }

    /**
     * Initialize Services Section Animations
     */
    function initServicesAnimations() {
        const servicesSection = document.querySelector('.services');
        if (!servicesSection) return;

        const header = servicesSection.querySelector('.services__header');
        const serviceCards = servicesSection.querySelectorAll('.service-card');

        // Create scroll trigger for the entire section
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

    /**
     * Initialize Solutions Section Animations
     */
    function initSolutionsAnimations() {
        const solutionsSection = document.querySelector('.solutions');
        if (!solutionsSection) return;

        const header = solutionsSection.querySelector('.solutions__header');
        const problems = solutionsSection.querySelectorAll('.solutions__problems .solutions__card');
        const cosmos = solutionsSection.querySelector('.solutions__cosmos');
        const solutions = solutionsSection.querySelectorAll('.solutions__solutions .solutions__card');

        // Create scroll trigger for the entire section
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

    /**
     * Initialize Process Section Animations
     */
    function initProcessAnimations() {
        const processSection = document.querySelector('.process');
        if (!processSection) return;

        // Use Intersection Observer for scroll animations
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

        // Observe header, functions, and wave
        const header = processSection.querySelector('.process__header');
        const functions = processSection.querySelectorAll('.process__function');
        const wave = processSection.querySelector('.process__wave');

        if (header) observer.observe(header);
        functions.forEach(func => observer.observe(func));
        if (wave) observer.observe(wave);
    }

    /**
     * Initialize Smooth Scroll
     */
    function initSmoothScroll() {
        // Enable smooth scrolling for all anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                
                // Skip if it's just "#" or empty
                if (!href || href === '#') return;
                
                e.preventDefault();
                smoothScrollTo(href);
            });
        });
    }

    /**
     * Initialize Section Snapping with GSAP
     * Disabled - conflicts with smooth scroll
     */
    function initSectionSnapping() {
        // Section snapping is disabled to maintain smooth scroll experience
        // All sections are vertically centered and have equal padding for consistency
    }

    /**
     * Initialize Event Listeners
     */
    function initEventListeners() {
        // Initialize search modal
        initSearchModal();

        // Initialize smooth scroll
        initSmoothScroll();

        // Navigation links
        elements.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                // Handle anchor links
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    smoothScrollTo(href);
                }
            });
        });

        // Scroll events
        window.addEventListener('scroll', requestScrollUpdate, { passive: true });
    }

    /**
     * Initialize Application
     */
    function init() {
        // Check if DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                initEventListeners();
                initSectionSnapping();
                initTalkButtonAnimation();
                initServiceCardAnimations();
                initServicesAnimations();
                initSolutionsAnimations();
                initProcessAnimations();
            });
        } else {
            initEventListeners();
            initSectionSnapping();
            initTalkButtonAnimation();
            initServiceCardAnimations();
            initServicesAnimations();
            initSolutionsAnimations();
            initProcessAnimations();
        }
    }

    // Start the application
    init();

    /**
     * Expose public API for potential extensions
     */
    window.EternaCloud = {
        smoothScrollTo
    };

})();
