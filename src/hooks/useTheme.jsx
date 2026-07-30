import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ThemeContext = createContext();

/**
 * Determines the initial theme:
 * 1. Check localStorage for user's saved preference
 * 2. Fall back to system preference (prefers-color-scheme)
 * 3. Default to 'dark'
 */
function getInitialTheme() {
  const stored = localStorage.getItem('portfolio-theme');
  if (stored === 'light' || stored === 'dark') return stored;

  if (window.matchMedia?.('(prefers-color-scheme: light)').matches) {
    return 'light';
  }

  return 'dark';
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  // Apply data-theme attribute to <html> and persist to localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
