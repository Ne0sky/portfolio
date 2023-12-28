import React from 'react'
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Projectdiv = ({obj}) => {
  return (
    <div className={`${obj.id % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} px-2 px-4  w-[80%] justify-center flex flex-col items-center py-8 gap-8`}>
          <div className='w-[90%] lg:w-1/2 rounded-xl shadow-xl  shadow-zinc-500'>
          <a target="_blank" href={obj.live}><img className='rounded-xl w-full ' src={obj.image} alt="" /></a>
          </div>
          <div className='w-[90%] lg:w-1/2 font-tertiary'>
            <h3 className='text-3xl font-semibold font-tertiary text-zinc-800'>{obj.title}</h3>
            <p className='font-medium'>
            {obj.description}
            </p>
            <p className='pt-4 font-medium'> Tools & technologies used: </p>
            <div className='flex flex-wrap mb-4 gap-2'>
            {obj.tech.map((tech, index)=>{
              return(
                <p index={index} className='bg-zinc-500 border text-sm p-2 text-white rounded'>{tech}</p>
              )
            })}
            </div>
            <div className='py-2 flex gap-4'>
           <a target='_blank' href={obj.live} className='p-2 border-orange-800 rounded-xl px-4 py-2 bg-opacity-30 bg-orange-500 hover:bg-opacity-50 border border-orange-800 font-medium rounded flex  gap-2 items-center'>Live  <TbWorld/></a>
           <a target='_blank' href={obj.github} className='p-2  bg-indigo-500 font-medium rounded-xl bg-opacity-30 flex hover:bg-opacity-50 border border-indigo-800  gap-2 items-center '> code <FaGithub/></a>
           </div>

          </div>
        </div>
  )
}

export default Projectdiv