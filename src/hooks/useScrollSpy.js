import { useState, useEffect } from 'react';

/**
 * Scroll-spy hook that returns the ID of the currently visible section.
 * Uses IntersectionObserver for efficient, performant scroll detection.
 *
 * @param {string[]} sectionIds - Array of section element IDs to observe
 * @param {object}   options
 * @param {number}   options.offset - Offset from top in pixels (default: navbar height)
 * @param {number}   options.threshold - Intersection ratio threshold (default: 0.3)
 * @returns {string} The ID of the currently active section
 */
export function useScrollSpy(sectionIds, { offset = 80, threshold = 0.3 } = {}) {
  const [activeId, setActiveId] = useState(sectionIds[0] || '');

  useEffect(() => {
    const observers = [];
    const visibleSections = new Map();

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            visibleSections.set(id, entry.intersectionRatio);
          } else {
            visibleSections.delete(id);
          }

          // Pick the section with highest intersection ratio
          if (visibleSections.size > 0) {
            let best = '';
            let bestRatio = 0;
            visibleSections.forEach((ratio, sectionId) => {
              if (ratio > bestRatio) {
                bestRatio = ratio;
                best = sectionId;
              }
            });
            setActiveId(best);
          }
        },
        {
          rootMargin: `-${offset}px 0px -30% 0px`,
          threshold: [0, threshold, 0.5, 0.8, 1],
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach(obs => obs.disconnect());
    };
  }, [sectionIds, offset, threshold]);

  return activeId;
}
