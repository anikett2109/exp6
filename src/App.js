// App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Header from './components/Header';
import Profile from './components/Profile';

import Footer from './components/Footer';
import ProjectsPage from './components/skillss';
import ContactMe from './components/Contactme';
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/ProjectsPage" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactMe />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
