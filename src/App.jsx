import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DoctorsPage from './pages/DoctorsPage'; // Replace with your chosen page if different

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          {/* Add more routes if necessary */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;