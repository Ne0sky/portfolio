import React from 'react'
import { Link } from 'react-scroll';

const Sidemenu = () => {
  return (
    <div className='sidebar relative'>
       
        <ul className='text-2xl  font-tertiary uppercase flex flex-col gap-4 z-10 relative'>
            <li ><Link className=' hover:text-lime-500 ease-in-out duration-300 hover:cursor-pointer' to='home' smooth={true} duration={500}>Home</Link></li>
            <li><Link className=' hover:text-lime-500 ease-in-out duration-300 hover:cursor-pointer' to='about' smooth={true} duration={500}>About</Link></li>
            <li><Link className=' hover:text-lime-500 ease-in-out duration-300 hover:cursor-pointer' to='projects' smooth={true} duration={500}>Projects</Link></li>
            <li><Link className=' hover:text-lime-500 ease-in-out duration-300 hover:cursor-pointer' to='contact' smooth={true} duration={500}>Contact</Link></li>
          </ul>
    </div>
  )
}

export default Sidemenu