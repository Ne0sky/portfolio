import React from 'react'
import { VscLinkExternal } from "react-icons/vsc";
import Projectdiv from '../components/Projectdiv';
import projects from '../data/projects.js';

const Projects = () => {
  return (
    <div className='w-full text-white  pt-16 flex flex-col justify-center items-center'>
        <h2 className='text-4xl lg:text-6xl font-bold text-lime-500 font-tertiary py-4'>Projects.</h2>
        
        {projects.map((obj)=>{
          return(
            <Projectdiv obj={obj} />
          )
        })}
       
    </div>
  )
}

export default Projects