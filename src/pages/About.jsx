import React from 'react'
import skills from '../data/skill'
import Lottie from "lottie-react";
import lottie from '../data/lottie.json'
import AboutMeParagraph from '../components/AboutMeParagraph';
import Word from '../components/Word';
const paragraph = `I'm a Computer Science undergrad student graduating in 2025, blending my passion for art with coding to craft beautiful, functional full-stack websites. Beyond coding, I indulge in painting, graphic design, and a love for classic art, 
 especially the Renaissance era. When I'm not creating, I unwind with movies.
Let's blend the old and the new to create something extraordinary.`

const About = () => {
    return (
        <div className='w-full text-white p-4 flex flex-col justify-center items-center'>

            <h2 className='font-tertiary font-bold text-6xl text-lime-500 text-center relative'>About Me.</h2>
            <div className='flex flex-col lg:flex-row py-16 items-center w-full justify-center'>
            <div className='relative'>
            <Lottie className='w-[450px] relative z-20' animationData={lottie} loop={true} />
            {/* <div className='w-[300px] h-[300px] absolute top-0 left-20 rounded-full z-2 blur-2xl bg-indigo-600 bg-opacity-20'></div> */}
            </div>
         
            <div className='lg:w-1/3 relative'>
            <div className='w-[400px] h-[300px] absolute -top-20 -left-20  rounded-full z-2 blur-2xl bg-rose-900 bg-opacity-10'></div>
            <h2 className='text-xl font-tertiary font-bold pb-8'>User-centred tech solutions, classic rock music, renaissance art & movies</h2>
            <Word value={paragraph}/>
            </div>
           
            </div>
           
            
            <h2 className='font-tertiary font-bold text-xl '>Technologies I have worked with.</h2>
            <div className='flex pt-8 flex-wrap gap-2 relative w-[85%] lg:w-1/2 items-center justify-center'>
            <div className='w-[500px] h-[300px] absolute   rounded-full z-2 blur-2xl bg-blue-500 bg-opacity-10'></div>

                {
                    skills.map((skill, index) => {
                        return <p key={index} className='bg-[#0f103d] text-lg border border-indigo-500 rounded p-2'> {skill}</p>;
                    })
                }
            </div>

        </div>
    )
}

export default About