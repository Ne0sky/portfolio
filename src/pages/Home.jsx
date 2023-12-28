import React from 'react';
import { VscLinkExternal } from "react-icons/vsc";
import Sidemenu from '../components/Sidemenu';
import Contactbar from '../components/Contactbar';
import { FaDownload } from "react-icons/fa6";
import { TiPointOfInterest } from "react-icons/ti";
import { CgIfDesign } from "react-icons/cg";
import { FaPaintBrush } from "react-icons/fa";

const Home = () => {
  return (
    <div className='w-screen h-full  overflow-x-hidden p-4 md:p-16 lg:p-16'>
      <div className='flex items-end'>
        <h1 className='text-2xl lg:text-3xl text-lime-800 font-main'>Ne0sky</h1>
        <div className='w-80 h-0.5 bg-gradient-to-r from-lime-500 to-transparent'></div>
      </div>
      <div className='flex h-full items-center w-full  justify-around'>
        <div className='w-1/3 md:flex hidden'>
          <Sidemenu className=''/>
        </div>
        <div className='min-h-full relative w-1/3  flex flex-col justify-center items-center'>
          <div className='flex flex-col items-center justify-center'>
            <div className='absolute top-4 flex items-center'>
              <div className='w-[180px] h-[250px] animate-spin-slow rounded-full z-2 blur-2xl bg-gradient-to-br from-rose-500 to-transparent'></div>
              <div className='w-[180px] h-[250px] animate-spin-slow-2 rounded-full z-2 blur-2xl bg-gradient-to-br from-indigo-500 to-transparent'></div>
            </div> 
            <h1 className='font-main text-5xl pt-8 lg:text-7xl z-10 relative'>Akash Dey.</h1>
            <p className='desc font-tertiary font-semibold py-2 z-8 text-4xl rounded text- text-center backdrop-filter backdrop-blur-sm bg-opacity-10 mb-8 px-4 border border-zinc-800'>Developer & Designer</p>
            <div className='font-tertiary text-xl font-medium text-center  z-10'>
              <p className='flex items-center gap-4'> <TiPointOfInterest/>Full Stack Development </p>
              <p className='flex items-center gap-4'><CgIfDesign/>Graphic Design</p>
              <p className='flex items-center gap-4'><FaPaintBrush/>Creative Arts</p>
            </div>
            <div className='w-80 mt-8 h-0.5 bg-gradient-to-r from-transparent via-rose-800 to-transparent'></div>
          </div>
          <div className=' text-center px-4'>
            <p className='tag  my-8 text- font-tertiary z-10 uppercase'>Hey there!👋 I'm a <b>Computer Science undergrad</b> with a deep-rooted passion for software engineering and design. I create engaging and beautiful tech solutions using tools like <b>REACT JS, </b> <b>Node js, </b> <b>Express js, </b> <b>Mongo db, </b>and a host of other tech goodies.</p>
            <div className='flex w-full gap-4 items-center justify-center'>
            <button className='z-10 font-tertiary  text-xl w-auto text-center border border-lime-800 rounded px-4 py-2 bg-opacity-30 bg-lime-500 hover:bg-opacity-50 flex gap-2 items-center'>Resume <FaDownload/></button>
            <button className='z-10 font-tertiary text-xl w-auto text-center border border-indigo-500 rounded px-4 py-2 bg-opacity-20 bg-indigo-800 hover:bg-opacity-50'>Projects</button>
            </div>
            
          </div>
        </div>
        <div className='w-1/3 md:flex hidden flex flex-col items-end just'>
          <Contactbar/>
        </div>
      </div>
    </div>
  );
};

export default Home;
