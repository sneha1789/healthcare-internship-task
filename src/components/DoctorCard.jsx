import React, { useState } from 'react';

function DoctorCard({ name, specialty, bio, imageUrl, experience, education }) {
  const [showModal, setShowModal] = useState(false);
  const defaultImage =
    'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=300&fit=crop&crop=face';

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <div className="doctor-card">
        <div className="doctor-image-container">
          <img
            src={imageUrl || defaultImage}
            alt={name}
            className="doctor-image"
            loading="lazy"
          />
          <div className="doctor-overlay">
            <button className="btn-view-profile" onClick={openModal}>
              View Profile
            </button>
          </div>
        </div>

        <div className="doctor-info">
          <h3 className="doctor-name">{name}</h3>
          <p className="doctor-specialty">{specialty}</p>
          <div className="doctor-experience">
            <span className="experience-badge">
              {experience}+ Years Experience
            </span>
          </div>
          <p className="doctor-bio">{bio}</p>

          <div className="doctor-actions">
            <button className="btn btn-primary" onClick={openModal}>
              View Profile
            </button>
            <button className="btn btn-secondary">Schedule Visit</button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <div className="modal-body">
              <img
                src={imageUrl || defaultImage}
                alt={name}
                className="modal-doctor-image"
              />
              <div className="modal-doctor-info">
                <h2>{name}</h2>
                <p className="modal-specialty">{specialty}</p>
                <div className="modal-details">
                  <div className="detail-item">
                    <strong>Experience:</strong> {experience} years
                  </div>
                  <div className="detail-item">
                    <strong>Education:</strong> {education}
                  </div>
                  <div className="detail-item">
                    <strong>Bio:</strong> {bio}
                  </div>
                </div>
                <button className="btn btn-primary modal-btn">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DoctorCard;
