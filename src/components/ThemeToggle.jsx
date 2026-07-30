import { useTheme } from '../hooks/useTheme';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/ThemeToggle.css';

/**
 * Sun/Moon toggle button for dark/light theme switching.
 * Uses Framer Motion for icon transition animation.
 */
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      type="button"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          className="theme-toggle__icon"
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.2 }}
        >
          {theme === 'dark' ? <FiSun /> : <FiMoon />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

export default ThemeToggle;
