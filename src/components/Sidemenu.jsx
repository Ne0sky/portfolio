import React from 'react'
import { Link } from 'react-scroll';
import { CiHome } from "react-icons/ci";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { CgCode } from 'react-icons/cg';
const Sidemenu = () => {
  return (
    <div className='sidebar relative'>
       
        <ul className='text-2xl  font-tertiary uppercase flex flex-col gap-4 z-10 relative'>
            <li ><Link className=' hover:text-orange-500 ease-in-out duration-300 flex items-center gap-4  hover:cursor-pointer' to='home' smooth={true} duration={500} spy={true} activeClass='active-link'><CiHome/>Home</Link></li>
            <li><Link className=' hover:text-orange-500 ease-in-out duration-300 flex items-center gap-4  hover:cursor-pointer' to='about' smooth={true} duration={500} spy={true} activeClass='active-link'><RiAccountPinCircleFill/>About</Link></li>
            <li><Link className=' hover:text-orange-500 ease-in-out duration-300  flex items-center gap-4 hover:cursor-pointer' to='projects' smooth={true} duration={500} spy={true} activeClass='active-link'><CgCode/>Projects</Link></li>
            <li><Link className=' hover:text-orange-500 ease-in-out duration-300 flex items-center gap-4  hover:cursor-pointer' to='contact' smooth={true} duration={500} spy={true} activeClass='active-link'><MdEmail/>Contact</Link></li>
        </ul>
    </div>
  )
}

export default Sidemenu