import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import DoctorCard from '../components/DoctorCard';
import janeSmithImage from '../assets/jane-smith.jpg';
import alexLeeImage from '../assets/alex-lee.jpg';
import miaGuptaImage from '../assets/mia-gupta.jpg';

const servicesData = [
  {
    id: 1,
    title: 'Primary Care & Checkups',
    description:
      'Comprehensive annual physicals and preventive medicine to keep you healthy year-round.',
    icon: '🩺',
  },
  {
    id: 2,
    title: 'Advanced Cardiology',
    description:
      'Specialized diagnosis and treatment for all heart and vascular conditions by top specialists.',
    icon: '❤️',
  },
  {
    id: 3,
    title: 'Pediatric Health',
    description:
      'Caring for infants, children, and teens with gentle and expert hands in a friendly environment.',
    icon: '👶',
  },
  {
    id: 4,
    title: 'Dermatology Services',
    description:
      'Expert care for skin, hair, and nail conditions, including cosmetic and medical treatments.',
    icon: '✨',
  },
];

const doctorsPreviewData = [
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
    specialty: 'Cardiologist',
    bio: 'Board-certified expert in non-invasive cardiac procedures.',
    imageUrl: alexLeeImage,
  },
  {
    id: 3,
    name: 'Dr. Mia Gupta, M.D.',
    specialty: 'Pediatrician',
    bio: 'Dedicated to children’s health from birth through adolescence.',
    imageUrl: miaGuptaImage,
  },
];

function LandingPage() {
  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        <section className="hero-section">
          <div className="container">
            <h1 className="hero-title">
              Compassionate Care,{' '}
              <span className="hero-highlight">Expert Hands.</span>
            </h1>
            <p className="hero-subtitle">
              We are committed to providing world-class healthcare tailored to
              your family's needs right here in your community.
            </p>
            <div className="hero-actions">
              <Link to="/doctors" className="btn btn-primary">
                Find a Specialist
              </Link>
              <button className="btn btn-secondary">Call Us Today</button>
            </div>
          </div>
        </section>

        <section id="services" className="services-section">
          <div className="container">
            <h2 className="section-title">Our Core Services</h2>
            <p className="section-subtitle">
              Dedicated care across all stages of life.
            </p>
            <div className="services-grid">
              {servicesData.map((service) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
          </div>
        </section>

        <section className="doctors-preview-section">
          <div className="container">
            <h2 className="section-title">Meet Our Leading Team</h2>
            <p className="section-subtitle">
              Highly skilled and board-certified specialists ready to serve you.
            </p>
            <div className="doctors-grid">
              {doctorsPreviewData.map((doctor) => (
                <DoctorCard key={doctor.id} {...doctor} />
              ))}
            </div>
            <div className="text-center mt-16">
              <Link to="/doctors" className="btn btn-secondary-lg">
                View All Doctors &rarr;
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default LandingPage;
