import React from 'react'
import skills from '../data/skill'
import Lottie from "lottie-react";
import lottie from '../data/lottie.json'
import { VscLinkExternal } from "react-icons/vsc";
import { GrTechnology } from "react-icons/gr";

import Word from '../components/Word';
const paragraph = `I'm a Computer Science undergrad student graduating in 2025, blending my passion for art with coding to craft beautiful, functional full-stack websites. Beyond coding, I indulge in painting, graphic design, and a love for classic art, 
 especially the Renaissance era. When I'm not creating, I unwind with movies classic rock music, and sometimes timeless bengali classics.
`

const About = () => {
    return (
        <div className='w-full  p-4 flex flex-col justify-center items-center'>

            <h2 className='font-tertiary font-medium text-5xl lg:text-5xl  text-center relative'>About Me</h2>
            <p className=' font-medium  font-tertiary'>A brief intro into who I am</p>

            {/* <div className='w-80 h-1 bg-gradient-to-r from-transparent via-rose-800 to-transparent'></div> */}
            <div className='flex flex-col lg:flex-row py-16 items-center w-full justify-center'>
            <div className='relative'>
            <Lottie className='w-[550px] relative z-20' animationData={lottie} loop={true} />
            {/* <div className='w-[300px] h-[300px] absolute top-0 left-20 rounded-full z-2 blur-2xl bg-indigo-600 bg-opacity-20'></div> */}
            </div>
         
            <div className='lg:w-1/3 relative'>
            <div className='w-[400px] h-[300px] absolute -top-20 -left-20  rounded-full z-2 blur-2xl bg-indigo-500 bg-opacity-0'></div>
            <h2 className='text-2xl font-tertiary font-bold pb-8'>User-centred tech solutions, classic rock music, renaissance art & movies</h2>
            {/* <Word value={paragraph}/> */}
            <p className='z-10 flex flex-wrap  font-tertiary  justify-left'>{paragraph}</p>
            <a target='_black' href="https://www.instagram.com/cynik._/"><button className='bg-zinc-800 rounded-xl p-3 flex items-center gap-2 font-tertiary   my-4 text-white'>Checkout my Artworks <VscLinkExternal/></button></a>
            </div>
           
            </div>
           
            
            <h2 className='font-tertiary font-medium text-xl flex items-center gap-4'>Technologies I have worked with <GrTechnology/></h2>
            <div className='flex pt-8 flex-wrap gap-2 relative w-[85%] lg:w-1/2 items-center justify-center'>
            {/* <div className='w-[500px] h-[300px] absolute   rounded-full z-2 blur-2xl bg-blue-500 bg-opacity-10'></div> */}

                {
                    skills.map((skill, index) => {
                        return <p key={index} className='border font-medium bg-white shadow-xl font-tertiary  rounded-xl p-2'> {skill}</p>;
                    })
                }
            </div>

        </div>
    )
}

export default About