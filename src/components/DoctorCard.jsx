function DoctorCard({ name, specialty, bio, imageUrl }) {
  const defaultImage = 'https://via.placeholder.com/400x300?text=Expert+Doctor';

  return (
    <div className="doctor-card">
      <img src={imageUrl || defaultImage} alt={name} className="doctor-image" />

      <div className="doctor-info">
        <h3 className="doctor-name">{name}</h3>
        <p className="doctor-specialty">{specialty}</p>
        <p className="doctor-bio">{bio}</p>

        <button className="btn btn-full-width">Schedule Visit</button>
      </div>
    </div>
  );
}

export default DoctorCard;
