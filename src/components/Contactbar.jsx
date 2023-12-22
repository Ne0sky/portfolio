import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


function Contactbar() {
  return (
    <div className='relative '>
<div className='w-[500px] h-[500px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full z-2 blur-3xl bg-indigo-900 bg-opacity-10'></div>

        <ul className='text-2xl flex flex-col w-full gap-4 bg-lime-500 bg-opacity-20 relative z-20 rounded-3xl border-lime-500 border  py-8'>
            <li className='hover:bg-lime-500 hover:bg-opacity-30 px-4 py-2 min-w-full ease-in-out duration-200 hover:cursor-pointer'><FaLinkedinIn/></li>
            <li className='hover:bg-lime-500 hover:bg-opacity-30 px-4 py-2  ease-in-out duration-200 hover:cursor-pointer'><FaGithub/></li>
            <li className='hover:bg-lime-500 hover:bg-opacity-30 px-4 py-2 ease-in-out duration-200 hover:cursor-pointer'><FaInstagram/></li>
            <li className='hover:bg-lime-500 hover:bg-opacity-30 px-4 py-2 ease-in-out duration-200 hover:cursor-pointer'><SiLeetcode/></li>
          </ul>
    </div>
  )
}

export default Contactbar