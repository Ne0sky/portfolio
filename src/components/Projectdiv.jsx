import React from 'react'
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Projectdiv = ({obj}) => {
  return (
    <div className={`${obj.id % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} px-2 lg:px-24   justify-center flex flex-col items-center py-8 gap-8`}>
          <div className='w-[90%] lg:w-[550px]  shadow-xl  '>
          <a target="_blank" href={obj.live}><img className=' w-full ' src={obj.image} alt="" /></a>
          </div>
          <div className='w-[90%] lg:w-1/2 font-tertiary'>
            <h3 className='text-2xl font-semibold font-tertiary text-zinc-800'>{obj.title}</h3>
            <p className='text-zinc-800'>
            {obj.description}
            </p>
            <p className='pt-4 font-medium'> Tools & technologies used: </p>
            <div className='flex flex-wrap mb-4 gap-1'>
            {obj.tech.map((tech, index)=>{
              return(
                <p index={index} className=' border border-zinc-600 text-sm p-2  rounded-3xl'>{tech}</p>
              )
            })}
            </div>
            <div className='py-2 flex gap-4'>
           <a target='_blank' href={obj.live} className='p-3  rounded-xl  bg-zinc-800  text-white text-sm rounded flex  gap-2 items-center'>Live  <TbWorld/></a>
           <a target='_blank' href={obj.github} className='p-3  rounded-xl  bg-zinc-800  text-white text-sm rounded flex  gap-2 items-center '> code <FaGithub/></a>
           </div>

          </div>
        </div>
  )
}

export default Projectdiv