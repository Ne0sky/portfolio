import React from 'react'
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Projectdiv = ({obj}) => {
  return (
    <div className={`${obj.id % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} px-2 md:px-4 lg:px-24 flex flex-col items-center py-8 gap-4`}>
          <div className='w-[90%] lg:w-1/2 rounded-xl shadow-xl  border border-indigo-600'>
          <a target="_blank" href={obj.live}><img className='rounded-xl w-full ' src={obj.image} alt="" /></a>
          </div>
          <div className='w-[90%] lg:w-1/2 font-tertiary'>
            <h3 className='text-3xl font-bold font-tertiary text-indigo-200'>{obj.title}</h3>
            <p>
            {obj.description}
            </p>
            <p className='pt-4 font-medium'> Tools & technologies used: </p>
            <div className='flex flex-wrap my-4 gap-2'>
            {obj.tech.map((tech, index)=>{
              return(
                <p index={index} className='bg-lime-500 bg-opacity-20 border border-lime-500 p-2 rounded'>{tech}</p>
              )
            })}
            </div>
            <div className='py-2 flex gap-4'>
           <a target='_blank' href={obj.live} className='p-2 bg-lime-700  rounded flex  gap-2 items-center'>Live  <TbWorld/></a>
           <a target='_blank' href={obj.github} className='p-2  bg-indigo-600  rounded flex  gap-2 items-center '> code <FaGithub/></a>
           </div>

          </div>
        </div>
  )
}

export default Projectdiv