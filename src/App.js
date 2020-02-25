import React from 'react';

import NavBar from './NavBar/NavBar';
import About from './Content/About/About';
import Projects from './Content/Projects/Projects';
import Footer from './Content/Footer/Footer';

import './App.scss';

function App() {
  return (
      <div>
        <NavBar />
        <About />
        <Projects />
        <Footer />
      </div>
  );
}

export default App;