import { useState, useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import NavBar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0);

 

  return (
    <div className='overflow-x-hidden max-w-screen'>
      <Home />
      <About/>
      <Projects/>
      <NavBar/>
    </div>
  );
}

export default App;
