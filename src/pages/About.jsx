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
        <div className='w-full  p-4 flex flex-col justify-center items-center text-white'>

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
                    <h2 className='text-2xl font-tertiary font-bold text-lime-400 pb-8'>User-centred tech solutions, classic rock music, renaissance art & movies</h2>
                    {/* <Word value={paragraph}/> */}
                    <p className='z-10 flex flex-wrap  font-tertiary  justify-left'>{paragraph}</p>
                </div>

            </div>


            <h2 className='font-tertiary font-medium text-xl flex items-center gap-4'>Technologies I have worked with <GrTechnology /></h2>
            <div className='flex pt-8 flex-wrap gap-2 relative w-[85%] lg:w-1/2 items-center justify-center'>
                {/* <div className='w-[500px] h-[300px] absolute   rounded-full z-2 blur-2xl bg-blue-500 bg-opacity-10'></div> */}

                {
                    skills.map((skill, index) => {
                        return <p key={index} className='border border-indigo-600 font-medium bg-indigo-800 text-white shadow-xl  font-tertiary  rounded-xl p-2'> {skill}</p>;
                    })
                }
            </div>
            <div className='flex flex-col items-center justify-center gap-4 py-8'>
                <h3 className='font-tertiary font-medium text-xl flex items-center gap-4'>Experience</h3>
                <ol className="relative border-s border-gray-200 dark:border-gray-200 w-[90%] lg:w-1/2">
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-500 dark:bg-gray-500"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-100 ">Aug 2023 - Nov 2023</time>
                        <h3 className="text-lg font-semibold text-white ">Frontend Developer at AiChefMaster </h3>
                        <p className="mb-4 text-base font-normal text-gray-100 ">Led the complete frontend development and UI design of dashboard webpage of the company, implementing
                            optimization strategies and adhering to industry best practices, resulting in a highly responsive site with efficient
                            load times.
                        </p>
                        <a target='_blank' href="https://drive.google.com/file/d/1Al1xt4Zo0nGk9jy9suKh2SqGQfD9YyY3/view?usp=sharing" className="inline-flex items-center px-4 py-2 text-sm font-medium bg-indigo-800 text-white  border border-indigo-500 rounded-lg ">Learn more <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg></a>
                    </li>

                </ol>
            </div>



        </div>
    )
}

export default About