import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
      className='fixed text-white bottom-15 left-1/2 transform -translate-x-1/2 bg-white max-w-full flex justify-center items-center w-[300px] bg-opacity-10 border border-lime-300 p-4 backdrop-filter backdrop-blur-sm rounded-xl'
    >
      {/* Your navigation content here */}
      <ul className='flex font-tertiary items-center gap-4'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
        {/* Add more navigation items */}
      </ul>
    </motion.div>
  );
};

export default NavBar;
