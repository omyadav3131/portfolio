import { useState, useEffect, useCallback } from 'react';

/**
 * Typewriter effect hook that cycles through an array of strings.
 *
 * @param {string[]} words       - Array of words/phrases to cycle through
 * @param {object}   options
 * @param {number}   options.typeSpeed   - ms per character typed (default: 100)
 * @param {number}   options.deleteSpeed - ms per character deleted (default: 60)
 * @param {number}   options.pauseTime   - ms to pause at full word (default: 2000)
 * @returns {{ text: string, isDeleting: boolean }}
 */
export function useTypewriter(words, { typeSpeed = 100, deleteSpeed = 60, pauseTime = 2000 } = {}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      // Typing forward
      setText(currentWord.substring(0, text.length + 1));

      if (text.length + 1 === currentWord.length) {
        // Word fully typed — pause then start deleting
        setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      }
    } else {
      // Deleting
      setText(currentWord.substring(0, text.length - 1));

      if (text.length - 1 === 0) {
        setIsDeleting(false);
        setWordIndex(prev => (prev + 1) % words.length);
        return;
      }
    }
  }, [text, isDeleting, wordIndex, words, pauseTime]);

  useEffect(() => {
    const speed = isDeleting ? deleteSpeed : typeSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, typeSpeed, deleteSpeed]);

  return { text, isDeleting };
}
