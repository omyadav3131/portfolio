import { useState, useEffect, useCallback, useMemo } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { navLinks } from '../data/navLinks';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const sectionIds = useMemo(() => navLinks.map(link => link.to), []);
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsDrawerOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isDrawerOpen]);

  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);
  const toggleDrawer = useCallback(() => setIsDrawerOpen(prev => !prev), []);

  const navbarVariants = {
    hidden: { opacity: 0, y: -20, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const drawerVariants = {
    closed: { height: 0, opacity: 0, transition: { duration: 0.25, ease: 'easeInOut' } },
    open: { height: 'auto', opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  return (
    <motion.header
      className="sticky top-0 w-full z-50 transition-all duration-300 bg-black/60 backdrop-blur-md border-b border-white/5"
      role="banner"
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 md:py-5 flex items-center justify-between">
        {/* Logo */}
        <ScrollLink
          to="hero"
          smooth={true}
          duration={600}
          offset={-72}
          className="text-xl md:text-2xl font-bold text-white cursor-pointer tracking-tight"
          onClick={closeDrawer}
        >
          Om.
        </ScrollLink>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12" aria-label="Main navigation">
          {navLinks.map(link => (
            <ScrollLink
              key={link.to}
              to={link.to}
              smooth={true}
              duration={600}
              offset={-72}
              className={`text-[0.95rem] font-medium cursor-pointer transition-colors flex items-center gap-2 ${
                activeSection === link.to ? 'text-[var(--color-primary)]' : 'text-[var(--text-primary)] hover:text-[var(--color-primary)]'
              }`}
              spy={false}
            >
              {activeSection === link.to && <span className="text-[1.2rem]">•</span>}
              {link.label}
            </ScrollLink>
          ))}
        </nav>

        {/* Actions (CTA + Theme + Mobile Menu) */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          <ScrollLink 
            to="contact" 
            smooth={true} 
            duration={600} 
            offset={-72}
            className="hidden md:block"
          >
            <button className="bg-gradient-to-r from-[var(--color-neon)] to-[var(--color-neon-dark)] text-[#0a0a0a] font-bold text-sm px-6 py-2.5 rounded-full hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(251,146,60,0.4)] transition-all cursor-pointer">
              Contact me
            </button>
          </ScrollLink>

          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50 relative"
            onClick={toggleDrawer}
            aria-label={isDrawerOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isDrawerOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${isDrawerOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${isDrawerOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.nav
            className="md:hidden bg-[#0b0f0e] border-b border-[#1e2e28] px-6 py-4 flex flex-col gap-4 overflow-hidden"
            variants={drawerVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {navLinks.map((link) => (
              <ScrollLink
                key={link.to}
                to={link.to}
                smooth={true}
                duration={600}
                offset={-72}
                className={`text-lg font-medium cursor-pointer transition-colors flex items-center gap-2 ${
                  activeSection === link.to ? 'text-[var(--color-primary)]' : 'text-[var(--text-primary)] hover:text-[var(--color-primary)]'
                }`}
                onClick={closeDrawer}
              >
                {activeSection === link.to && <span className="text-[1.2rem]">•</span>}
                {link.label}
              </ScrollLink>
            ))}
            <div className="pt-4 mt-2 border-t border-[#1e2e28]">
              <ScrollLink to="contact" smooth={true} duration={600} offset={-72} onClick={closeDrawer}>
                <button className="w-full bg-gradient-to-r from-[var(--color-neon)] to-[var(--color-neon-dark)] text-[#0a0a0a] font-bold py-3 rounded-full">
                  Contact me
                </button>
              </ScrollLink>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
