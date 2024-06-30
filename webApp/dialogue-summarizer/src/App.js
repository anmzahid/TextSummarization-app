import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

// Import Components
import Home from './Home';
import Models from './Models';
import Datasets from './Datasets';
import AboutUs from './AboutUs';
import BlankPage from './BlankPage'; // Import BlankPage component

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/models">Models</Link>
            </li>
            <li>
              <Link to="/datasets">Datasets</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<BlankPage />} /> {/* Set BlankPage as the default route */}
          <Route path="/home" element={<Home />} /> {/* Change path to /home for Home component */}
          <Route path="/models" element={<Models />} />
          <Route path="/datasets" element={<Datasets />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
