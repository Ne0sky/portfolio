import React from 'react'
import { VscLinkExternal } from "react-icons/vsc";
import Projectdiv from '../components/Projectdiv';
import projects from '../data/projects.js';
import { FaCode } from "react-icons/fa6";

const Projects = () => {
  return (
    <div className='w-full  pt-16 flex flex-col justify-center items-center'>
        <h2 className='text-5xl lg:text-5xl font-medium  font-tertiary  flex items-center gap-4'>Recent Works </h2>
        <p className='text font-medium  font-tertiary'>My latest works</p>
        <div className='py-8 flex justify-center flex-col min-w-full items-center'>
        {projects.map((obj, index)=>{
          return(
            <Projectdiv key={index} obj={obj} />
          )
        })}
        </div>
       
    </div>
  )
}

export default Projects