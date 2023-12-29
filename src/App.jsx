import { useState, useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import NavBar from './components/Navbar';
import { Element } from 'react-scroll';
import Contact from './pages/Contact';
import Footer from './components/Footer';
function App() {

  return (
    <div className='overflow-x-hidden max-w-screen'>
      <NavBar/>
      <Element name='home'>
        <Home />
      </Element>
      <Element name='about'>
        <About />
      </Element>
      <Element name='projects'>
        <Projects />
      </Element>
      <Element name='contact'>
      <Contact/>
      </Element>
      <Footer/>
      
    </div>
  );
}

export default App;
