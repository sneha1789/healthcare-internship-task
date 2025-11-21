import React, { useState } from 'react';

function ServiceCard({
  title,
  description,
  icon,
  features = [],
  duration = '30 min',
  price = 'Consultation',
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`service-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="service-card-header">
        <div className="service-icon-wrapper">
          <div className="service-icon">{icon}</div>
          <div className="service-badge">
            <span className="badge-text">{duration}</span>
          </div>
        </div>

        <h3 className="service-title">{title}</h3>

        <div className="service-price">{price}</div>
      </div>

      <div className="service-card-body">
        <p className="service-description">{description}</p>

        {features.length > 0 && isExpanded && (
          <div className="service-features">
            <h4 className="features-title">What's Included:</h4>
            <ul className="features-list">
              {features.map((feature, index) => (
                <li key={index} className="feature-item">
                  <span className="feature-icon">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="service-card-footer">
        <button className="service-link" onClick={toggleExpand}>
          <span className="link-text">
            {isExpanded ? 'Show Less' : 'Discover More'}
          </span>
          <svg
            className={`service-link-icon ${isExpanded ? 'expanded' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isExpanded ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
            />
          </svg>
        </button>

        <div className="service-actions">
          <button className="btn btn-outline">Learn More</button>
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>

      <div className="service-card-hover"></div>
    </div>
  );
}

export default ServiceCard;
