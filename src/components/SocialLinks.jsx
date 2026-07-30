import { socialLinks } from '../data/socialLinks';
import '../styles/SocialLinks.css';

/**
 * Renders social media icon links.
 * @param {'vertical' | 'horizontal'} direction — layout direction
 * @param {string} className — additional CSS class
 */
function SocialLinks({ direction = 'horizontal', className = '' }) {
  return (
    <nav
      className={`social-links social-links--${direction} ${className}`}
      aria-label="Social media links"
    >
      {socialLinks.map(link => {
        const Icon = link.icon;
        return (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label={link.label}
          >
            <Icon />
          </a>
        );
      })}
    </nav>
  );
}

export default SocialLinks;
