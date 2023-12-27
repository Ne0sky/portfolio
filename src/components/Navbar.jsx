import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const screenHeight = window.innerHeight;

      if (scrollPosition > screenHeight/2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
    initial={{ y: 100 }}
    animate={{ y: isVisible ? 0 : 100 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        bottom: 15,
        translateX:'-50%',
        zIndex: 999,
      }}
      className='fixed text-white bottom-15 left-1/2 transform -translate-x-1/2 bg-black max-w-full flex justify-center items-center w-[95%] lg:w-[500px]  border border-lime-500 p-4 backdrop-filter backdrop-blur-sm bg-opacity-100 rounded-xl'
    >
      {/* Your navigation content here */}
      <ul className='flex font-tertiary  items-center font-medium w-full justify-around'>
        <li className='hover:font-bold cursor-pointer '><Link to='home' smooth={true} duration={500}  spy={true} activeClass='active-link'>Home</Link></li>
        <li className='hover:font-bold cursor-pointer'><Link to='about' smooth={true} duration={500} spy={true} activeClass='active-link'>About</Link></li>
        <li className='hover:font-bold cursor-pointer'><Link to='projects' smooth={true} duration={500} spy={true} activeClass='active-link'>Projects</Link></li>
        <li className='hover:font-bold cursor-pointer'>Contact</li>
        {/* Add more navigation items */}
      </ul>
    </motion.div>
  );
};

export default NavBar;
