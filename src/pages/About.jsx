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

            <h2 className='font-main text-5xl text-lime-500 text-center relative'>About Me.</h2>
            <div className='flex flex-col py-16 items-center w-full justify-center'>
            <div className='relative'>
            <Lottie className='w-[450px] relative z-20' animationData={lottie} loop={true} />
            <div className='w-[300px] h-[300px] absolute top-0 left-20 rounded-full z-2 blur-2xl bg-indigo-800 bg-opacity-20'></div>
            </div>
            
            {/* <AboutMeParagraph  value={paragraph}/> */}
            <Word value={paragraph}/>
            </div>
           
            
            <h2 className='font-main text-5xl text-lime-500'>Skills.</h2>
            <div className='flex pt-8 flex-wrap gap-2 w-[85%] lg:w-1/2 items-center justify-center'>
                {
                    skills.map((skill, index) => {
                        return <p key={index} className='bg-indigo-800 bg-opacity-20 border border-indigo-500 rounded p-2'> {skill}</p>;
                    })
                }
            </div>

        </div>
    )
}

export default About