import React from 'react'
import { VscLinkExternal } from "react-icons/vsc";


const Projects = () => {
  return (
    <div className='w-full text-white px-24 pt-16 flex flex-col justify-center items-center'>
        <h2 className='text-5xl text-lime-500 font-main py-4'>Projects.</h2>
        
        <div className='border-b font-tertiary border-lime-600 flex items-center justify-between w-[90%] py-12  w-full'>
            <p className='text-2xl font-medium flex gap-8 items-center'>001. <VscLinkExternal className='text-lime-500'/></p>
            <div className='w-[90%] lg:w-1/2 text-right'>
            <p className='uppercase py-4 text-2xl font-medium'>Development Projects </p>
            <p className='text-right text-sm'>A web development project involves creating and implementing websites or web applications, encompassing design, coding, testing, and deployment to deliver functional and user-friendly online experiences.</p>
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