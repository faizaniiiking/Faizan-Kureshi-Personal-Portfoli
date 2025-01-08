import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router and Routes
import Navbar from './components/Navbar'; // Import Navbar component
import Home from './components/Home'; // Import Home component
import About from './components/About'; // Import About component
import Projects from './components/Portfolio'; // Import Projects component
import Services from './components/Services';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
const App = () => {
  return (
    <Router>  {/* Wrap the app with Router */}
      <Navbar />  {/* Navbar component */}
      <div className="container mx-auto">  {/* Add some top margin to avoid overlapping with navbar */}
        <Routes>
          {/* Define the routes */}
          <Route path="/" element={  <><Home /> <About/> <Projects /> <Services /> <ContactMe /> <Footer/>   </>} />  {/* Wrap Home and About components in a fragment */}
          <Route path="/about" element={       <>  <About />  <Footer/>   </>      } />
          <Route path="/portfolio" element={  <><Projects />  <Footer/> </>      } />
          <Route path="/services" element={   <><Services /> <Footer/>   </>   } />
          <Route path="/contactme" element={   <><ContactMe />  <Footer/></>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
