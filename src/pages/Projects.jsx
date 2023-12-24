import React from 'react'
import { VscLinkExternal } from "react-icons/vsc";


const Projects = () => {
  return (
    <div className='w-full text-white  pt-16 flex flex-col justify-center items-center'>
        <h2 className='text-6xl font-bold text-lime-500 font-tertiary py-4'>Projects.</h2>
        
        <div className='flex w-[85%] flex-col lg:flex-row items-center py-20 gap-4'>
          <div className='w-[90%] lg:w-1/2 rounded-xl shadow-xl  border border-indigo-600'>
          <img className='rounded-xl w-full ' src="/projects/animax.png" alt="" />
          </div>
          <div className='w-1/2 font-tertiary'>
            <h3 className='text-3xl font-bold font-tertiary text-indigo-200'>Animaxx</h3>
            <p>
            With so many new anime that come out every year, it sometimes gets tough to keep track of what anime you are
            watching. Animax tends to that issue and helps to to keep track of the anime that you are watching.
            </p>
            <p className='pt-4 font-medium'> Tools & technologies used: 
            <ul className='flex gap-2'>
              <li className='bg-lime-500 bg-opacity-20 border border-lime-500 p-2 rounded'>React</li>
              <li className='bg-lime-500 bg-opacity-20 border border-lime-500 p-2 rounded'>Tailwind</li>
              <li className='bg-lime-500 bg-opacity-20 border border-lime-500 p-2 rounded'>CSS</li>
              <li className='bg-lime-500 bg-opacity-20 border border-lime-500 p-2 rounded'>Context API</li>
              <li className='bg-lime-500 bg-opacity-20 border border-lime-500 p-2 rounded'>html</li>
              <li className='bg-lime-500 bg-opacity-20 border border-lime-500 p-2 rounded'>Javascript</li>
              </ul></p>
            <button className='p-2 bg-lime-500 text-black my-4 mr-4 rounded'>Live Demo</button>
            <button className='p-2 bg-lime-500 text-black rounded'>Source Code</button>

          </div>
        </div>
        <div className='border-b font-tertiary border-lime-600 flex items-center justify-between w-[90%] py-12  w-full'>
            <p className='text-2xl font-medium flex gap-8 items-center'>002. <VscLinkExternal className='text-lime-500'/></p>
            <div className='w-[90%] lg:w-1/2 text-right'>
            <p className='uppercase py-4 text-2xl font-medium'>Graphic Design Projects</p>
            <p className='text-right text-sm'>A web development project involves creating and implementing websites or web applications, encompassing design, coding, testing, and deployment to deliver functional and user-friendly online experiences.</p>
            </div>
        </div>
        <div className='border-b font-tertiary border-lime-600 flex items-center justify-between w-[90%] py-12  w-full'>
            <p className='text-2xl font-medium flex gap-8 items-center'>003. <VscLinkExternal className='text-lime-500'/></p>
            <div className='w-[90%] lg:w-1/2 text-right'>
            <p className='uppercase py-4 text-2xl font-medium'>Brand Identity Projects </p>
            <p className='text-right text-sm'>A web development project involves creating and implementing websites or web applications, encompassing design, coding, testing, and deployment to deliver functional and user-friendly online experiences.</p>
            </div>
        </div>
    </div>
  )
}

export default Projects