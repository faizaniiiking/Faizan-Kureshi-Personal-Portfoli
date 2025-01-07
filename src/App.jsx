import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router and Routes
import Navbar from './components/Navbar'; // Import Navbar component
import Home from './components/Home'; // Import Home component
import About from './components/About'; // Import About component
import Projects from './components/Portfolio'; // Import Projects component

const App = () => {
  return (
    <Router>  {/* Wrap the app with Router */}
      <Navbar />  {/* Navbar component */}
      <div className="container mx-auto">  {/* Add some top margin to avoid overlapping with navbar */}
        <Routes>
          {/* Define the routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
