import { FaGithub } from 'react-icons/fa';
import { FiExternalLink, FiCode } from 'react-icons/fi';
import '../styles/ProjectCard.css';

/**
 * Individual project display card with thumbnail, description, tech tags, and action buttons.
 */
function ProjectCard({ title, description, tags, image, github, live }) {
  return (
    <div className="project-card">
      {/* Thumbnail */}
      <div className="project-card__image-wrapper">
        {image ? (
          <img
            src={image}
            alt={`${title} screenshot`}
            className="project-card__image"
            loading="lazy"
          />
        ) : (
          <div className="project-card__placeholder" aria-hidden="true">
            <FiCode />
          </div>
        )}
      </div>

      {/* Body */}
      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>

        {/* Tech tags */}
        <div className="project-card__tags">
          {tags.map(tag => (
            <span className="project-card__tag" key={tag}>{tag}</span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="project-card__actions">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__action-btn project-card__action-btn--github"
              aria-label={`View ${title} source code on GitHub`}
            >
              <FaGithub /> Source Code
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__action-btn project-card__action-btn--live"
              aria-label={`View ${title} live demo`}
            >
              <FiExternalLink /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
