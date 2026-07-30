import { motion } from 'framer-motion';
import '../styles/SkillCard.css';

/**
 * Individual skill display card with icon, name, and proficiency bar.
 */
function SkillCard({ name, icon: Icon, proficiency, index = 0 }) {
  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.85 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
    >
      <div className="skill-card__icon">
        <Icon />
      </div>
      <span className="skill-card__name">{name}</span>
      <div className="skill-card__bar-track">
        <motion.div
          className="skill-card__bar-fill"
          initial={{ width: 0 }}
          animate={{ width: `${proficiency}%` }}
          transition={{ duration: 0.8, delay: 0.2 + index * 0.04, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}

export default SkillCard;
