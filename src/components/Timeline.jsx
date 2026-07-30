import '../styles/Timeline.css';

/**
 * Reusable vertical timeline component.
 * Renders a list of timeline entries with connecting gradient line and nodes.
 *
 * @param {Array} items - Array of timeline entry objects
 */
function Timeline({ items }) {
  return (
    <div className="timeline">
      {items.map(item => (
        <div className="timeline__item" key={item.id}>
          {/* Node dot */}
          <div className="timeline__node">
            <div className="timeline__node-inner" />
          </div>

          {/* Content card */}
          <div className="timeline__card glass-card">
            {item.type && (
              <span className={`timeline__type-badge timeline__type-badge--${item.type}`}>
                {item.type}
              </span>
            )}

            <div className="timeline__card-header">
              <h3 className="timeline__title">{item.title}</h3>
              <span className="timeline__date">{item.dateRange}</span>
            </div>

            {item.organization && (
              <p className="timeline__org">
                {item.organization}
                {item.location ? ` · ${item.location}` : ''}
              </p>
            )}

            {item.description && (
              <p className="timeline__description">{item.description}</p>
            )}

            {item.highlights && item.highlights.length > 0 && (
              <div className="timeline__highlights">
                {item.highlights.map((highlight, i) => (
                  <div className="timeline__highlight" key={i}>
                    {highlight}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
