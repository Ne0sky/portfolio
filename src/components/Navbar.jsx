import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { CiHome } from "react-icons/ci";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

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
      className='fixed  bottom-15 left-1/2 transform -translate-x-1/2  max-w-full flex justify-center items-center w-[95%] lg:w-[500px] bg-white border-zinc-800 border p-2 backdrop-filter backdrop-blur-sm bg-opacity-60 rounded-xl'
    >
      {/* Your navigation content here */}
      <ul className='flex font-tertiary  items-center font-medium w-full justify-around'>
        <li className='hover:font-bold cursor-pointer text-sm '><Link to='home' smooth={true} duration={500}  spy={true} className='text-center flex flex-col justify-center items-center ' ><CiHome className='text-2xl'/>Home</Link></li>
        <li className='hover:font-bold cursor-pointer'><Link to='about' smooth={true} duration={500} spy={true}  className='text-center flex flex-col justify-center items-center ' ><RiAccountPinCircleFill className='text-2xl'/>About</Link></li>
        <li className='hover:font-bold cursor-pointer'><Link to='projects' smooth={true} duration={500} spy={true}  className='text-center flex flex-col justify-center items-center '><FaCode/>Projects</Link></li>
        <li className='hover:font-bold cursor-pointer'><Link to='contact' smooth={true} duration={500} spy={true}  className='text-center flex flex-col justify-center items-center '><MdEmail/>Contact</Link></li>
        {/* Add more navigation items */}
      </ul>
    </motion.div>
  );
};

export default NavBar;
