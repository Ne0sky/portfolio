import React from 'react';
import { Link } from 'react-scroll';
import Sidemenu from '../components/Sidemenu';
import Contactbar from '../components/Contactbar';
import { FaDownload } from "react-icons/fa6";
import { TiPointOfInterest } from "react-icons/ti";
import { CgIfDesign } from "react-icons/cg";
import { FaPaintBrush } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { GrGithub } from 'react-icons/gr';
const Home = () => {
  return (
    <div className='w-screen h-full  overflow-x-hidden p-2 md:p-16 lg:p-16'>
      <div className='flex items-end'>
        <h1 className='text-2xl lg:text-3xl text-indigo-800 font-main'>Ne0sky</h1>
        <div className='w-80 h-0.5 bg-gradient-to-r from-indigo-800 to-transparent'></div>
      </div>
      <div className='flex h-full items-center w-full  justify-around'>
        <div className='w-1/3 lg:flex hidden'>
          <Sidemenu className=''/>
        </div>
        <div className='min-h-full relative w-[80%] md:w-1/2 lg:w-1/3  flex flex-col justify-center items-center'>
          <div className='flex flex-col items-center justify-center'>
            <div className='absolute top-4 flex items-center'>
              <div className='w-[180px] h-[250px] animate-spin-slow rounded-full z-2 blur-2xl bg-gradient-to-br from-lime-400 to-transparent'></div>
              <div className='w-[180px] h-[250px] animate-spin-slow-2 rounded-full z-2 blur-2xl bg-gradient-to-br from-indigo-500 to-transparent'></div>
            </div> 
            <h1 className='font-main text-5xl text-tansparent bg-clip-text bg-gradient-to-r from-indigo-600 to-rose-600 pt-8 lg:text-7xl z-20 relative'>Akash Dey.</h1>
            <p className='desc font-tertiary font-semibold py-2 z-0 text-4xl rounded text-center backdrop-filter backdrop-blur-sm bg-opacity-10 mb-8 px-4 border border-zinc-800'>Developer & Designer</p>
            <div className='font-tertiary text-xl font-medium text-center  z-10'>
              <p className='flex items-center gap-4'> <TiPointOfInterest/>Full Stack Development </p>
              <p className='flex items-center gap-4'><CgIfDesign/>Graphic Design</p>
              <p className='flex items-center gap-4'><FaPaintBrush/>Creative Arts</p>
            </div>
            <div className='p-4  bg-transparnet flex  items-center gap-4 my-4 lg:hidden justify-around text-xl'>
              <a target='_blank' href="https://www.linkedin.com/in/akash-dey-75165b201/"><FaLinkedinIn/></a>
               <a target='_blank' href="https://www.instagram.com/cynik._/"><FaInstagram/></a>
               <a target='_blank' href="https://github.com/Ne0sky"><GrGithub/> </a> 
               <a target='_blank' href="https://leetcode.com/ne0sky/"><SiLeetcode/></a></div>

            <div className='w-80 mt-8 h-0.5 bg-gradient-to-r from-transparent via-rose-800 to-transparent'></div>
          </div>
          <div className=' text-center '>
            <p className='tag  my-8 text- font-tertiary z-10 '>Hey there!👋 I'm a <b>Computer Science undergrad</b> with a deep-rooted passion for software engineering and design. I create engaging and beautiful tech solutions using tools like <b>React Js, </b> <b>Node Js, </b> <b>Express Js, </b> <b>Mongo DB, </b>and a host of other tech goodies.</p>
            <div className='flex w-full gap-4 items-center justify-center'>
            <a target='_blank' href="https://drive.google.com/file/d/1-Szp2E8kKwgzkdTMOqDu9Iqq-uP7lfNM/view?usp=sharing"><button className='z-10 font-tertiary  text-sm w-auto text-center  rounded-xl p-3 text-white  bg-zinc-800  flex gap-2 items-center'>Resume <FaDownload/></button></a>
            <Link to='projects' smooth={true} duration={500} spy={true}><button className='z-10 font-tertiary  w-auto text-center text-sm w-auto text-center  rounded-xl p-3 text-white  bg-zinc-800 '>Projects</button></Link>
            </div>
            
          </div>
        </div>
        <div className='w-1/3 lg:flex hidden flex flex-col items-end just'>
          <Contactbar/>
        </div>
      </div>
    </div>
  );
};

export default Home;
