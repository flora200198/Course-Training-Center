import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavbarMenu from './components/NavbarMenu';
import Footer from './components/Footer';
import Home from './components/Home'
import About from './components/About'
import Courses from './components/Courses'
import Blogs from './components/Blog'
import Contact from './components/Contact'


function App() {
  

  return (
    <Router>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;