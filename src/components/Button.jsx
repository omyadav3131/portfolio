import { motion } from 'framer-motion';
import '../styles/Button.css';

/**
 * Reusable button component with variants.
 *
 * @param {'primary' | 'outline' | 'ghost'} variant - Visual style
 * @param {React.ReactNode} children - Button label
 * @param {React.ReactNode} icon - Optional leading icon
 * @param {string} href - If provided, renders as <a> instead of <button>
 * @param {boolean} external - Opens link in new tab
 * @param {object} rest - Passed to underlying element
 */
function Button({ variant = 'primary', children, icon, href, external = false, className = '', ...rest }) {
  const classes = `btn btn--${variant} ${className}`.trim();

  const motionProps = {
    whileHover: { scale: 1.04 },
    whileTap: { scale: 0.97 },
    transition: { type: 'spring', stiffness: 400, damping: 20 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...motionProps}
        {...rest}
      >
        {icon && <span className="btn__icon">{icon}</span>}
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      type="button"
      {...motionProps}
      {...rest}
    >
      {icon && <span className="btn__icon">{icon}</span>}
      {children}
    </motion.button>
  );
}

export default Button;
