import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DoctorCard from '../components/DoctorCard';

import janeSmithImage from '../assets/jane-smith.jpg';
import alexLeeImage from '../assets/alex-lee.jpg';
import miaGuptaImage from '../assets/mia-gupta.jpg';
import kenjiSatoImage from '../assets/kenji-sato.jpg';
import sarahBellImage from '../assets/sarah-bell.png';
import davidChenImage from '../assets/david-chen.jpg';

const allDoctorsData = [
  {
    id: 1,
    name: 'Dr. Jane Smith, M.D.',
    specialty: 'Family Medicine',
    bio: 'Focus on preventive health and chronic disease management.',
    imageUrl: janeSmithImage,
  },
  {
    id: 2,
    name: 'Dr. Alex Lee, Ph.D.',
    specialty: 'Cardiology',
    bio: 'Board-certified expert in non-invasive cardiac procedures.',
    imageUrl: alexLeeImage,
  },
  {
    id: 3,
    name: 'Dr. Mia Gupta, M.D.',
    specialty: 'Pediatrics',
    bio: 'Dedicated to children’s health from birth through adolescence.',
    imageUrl: miaGuptaImage,
  },
  {
    id: 4,
    name: 'Dr. David Chen, M.D.',
    specialty: 'Dermatology',
    bio: 'Specialist in skin cancer detection and aesthetic treatments.',
    imageUrl: davidChenImage,
  },
  {
    id: 5,
    name: 'Dr. Sarah Bell, D.O.',
    specialty: 'Family Medicine',
    bio: 'Holistic approach to wellness and patient education.',
    imageUrl: sarahBellImage,
  },
  {
    id: 6,
    name: 'Dr. Kenji Sato, M.D.',
    specialty: 'Orthopedics',
    bio: 'Leading surgeon for joint replacement and sports injuries.',
    imageUrl: kenjiSatoImage,
  },
];

const specialties = [
  'All',
  'Family Medicine',
  'Cardiology',
  'Pediatrics',
  'Dermatology',
  'Orthopedics',
];

function DoctorsPage() {
  const [filter, setFilter] = useState('All');

  const filteredDoctors = allDoctorsData.filter(
    (doctor) => filter === 'All' || doctor.specialty === filter,
  );

  return (
    <div className="app-container">
      <Header />

      <main className="main-content doctors-page-content">
        <div className="container">
          <h1 className="doctors-page-title">Our Clinical Experts</h1>
          <p className="doctors-page-subtitle">
            Filter by Specialty to find the right doctor for you.
          </p>

          <div className="filter-bar">
            {specialties.map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={
                  filter === s ? 'filter-btn filter-btn-active' : 'filter-btn'
                }
              >
                {s}
              </button>
            ))}
          </div>

          <div className="doctors-grid">
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doctor) => (
                <DoctorCard
                  key={doctor.id}
                  name={doctor.name}
                  specialty={doctor.specialty}
                  bio={doctor.bio}
                  imageUrl={doctor.imageUrl}
                />
              ))
            ) : (
              <p className="no-doctors-message">
                😔 No specialists found in the {filter} department.
              </p>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default DoctorsPage;
