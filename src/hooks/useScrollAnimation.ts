import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all elements with ai-fade-in class
    const fadeElements = document.querySelectorAll('.ai-fade-in');
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};

// Auto-initialize immediately and on page load
const initializeAnimations = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  const fadeElements = document.querySelectorAll('.ai-fade-in');
  fadeElements.forEach((el) => observer.observe(el));

  // Make first few elements visible immediately
  const heroElements = document.querySelectorAll('.ai-fade-in');
  heroElements.forEach((el, index) => {
    if (index < 3) {
      setTimeout(() => {
        el.classList.add('visible');
      }, index * 200);
    }
  });
};

if (typeof window !== 'undefined') {
  // Initialize immediately if DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAnimations);
  } else {
    initializeAnimations();
  }
  
  // Also initialize after a short delay as fallback
  setTimeout(initializeAnimations, 100);
}