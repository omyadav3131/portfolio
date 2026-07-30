import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FiArrowUp } from 'react-icons/fi';
import SocialLinks from './SocialLinks';
import '../styles/Footer.css';

function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__credit">
          Designed &amp; built by{' '}
          <span className="footer__credit-name">Om Yadav</span>
        </p>

        <div className="footer__right">
          <SocialLinks direction="horizontal" />
        </div>
      </div>

      {/* Back to Top (fixed position) */}
      <ScrollLink to="hero" smooth={true} duration={800} offset={0}>
        <button
          className={`footer__back-to-top ${showBackToTop ? 'footer__back-to-top--visible' : ''}`}
          aria-label="Back to top"
          type="button"
        >
          <FiArrowUp />
        </button>
      </ScrollLink>
    </footer>
  );
}

export default Footer;
