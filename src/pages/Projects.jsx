import React from 'react'
import { VscLinkExternal } from "react-icons/vsc";
import Projectdiv from '../components/Projectdiv';
import projects from '../data/projects.js';
import { FaCode } from "react-icons/fa6";

const Projects = () => {
  return (
    <div className='w-full  pt-16 flex flex-col justify-center items-center'>
        <h2 className='text-4xl lg:text-5xl font-medium  font-tertiary  flex items-center gap-4'>Projects <FaCode/></h2>
        <div className='w-80 h-1 bg-gradient-to-r from-transparent via-rose-800 to-transparent'></div>
        <div className='py-8'>
        {projects.map((obj)=>{
          return(
            <Projectdiv obj={obj} />
          )
        })}
        </div>
       
    </div>
  )
}

export default Projects