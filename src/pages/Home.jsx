import React from 'react';
import { VscLinkExternal } from "react-icons/vsc";
import Sidemenu from '../components/Sidemenu';
import Contactbar from '../components/Contactbar';

const Home = () => {
  return (
    <div className='w-screen h-full text-white overflow-x-hidden p-8 md:p-16 lg:p-16'>
      <div className='flex items-end'>
        <h1 className='text-3xl text-lime-500 font-main'>Ne0sky</h1>
        <div className='w-80 h-0.5 bg-gradient-to-r from-lime-500 to-black'></div>
      </div>
      <div className='flex h-full items-center w-full  justify-around'>
        <div className='w-1/3 md:flex hidden'>
          <Sidemenu className=''/>
        </div>
        <div className='min-h-full relative w-1/3  flex flex-col justify-center items-center'>
          <div className='flex flex-col items-center justify-center'>
            <div className='absolute top-4 flex items-center'>
              <div className='w-[180px] h-[250px] animate-spin-slow rounded-full z-2 blur-2xl bg-gradient-to-br from-lime-800 to-transparent'></div>
              <div className='w-[180px] h-[250px] animate-spin-slow-2 rounded-full z-2 blur-2xl bg-gradient-to-br from-indigo-800 to-transparent'></div>
            </div> 
            <h1 className='font-main text-7xl z-10 relative'>Akash Dey.</h1>
            <p className='desc font-tertiary font-semibold py-2 z-8 text-4xl rounded text-center bg-white backdrop-filter backdrop-blur-sm bg-opacity-10 mb-8 px-4 border border-lime-500'>Developer & Designer</p>
            <div className='font-tertiary text-xl uppercase z-10'>
              <p className='flex items-center gap-4'>Full Stack Development <VscLinkExternal/></p>
              <p className='flex items-center gap-4'>Graphic Design <VscLinkExternal/></p>
              <p className='flex items-center gap-4'>Creative Arts <VscLinkExternal/></p>
            </div>
            <div className='w-80 mt-8 h-0.5 bg-gradient-to-r from-black via-lime-500 to-black'></div>
          </div>
          <div className=' text-center relative'>
            <p className='tag my-8 text-sm font-tertiary z-10 uppercase'>Hey there!👋 I'm a <b>Computer Science undergrad</b> with a deep-rooted passion for software engineering and design. I create engaging and beautiful tech solutions using tools like <span className='text-lime-500 font-bold text-lg px-2'>React.js,</span><span className='text-lime-500 font-bold text-lg pr-2'>Express.js,</span><span className='text-lime-500 font-bold text-lg pr-2'>Node.js,</span><span className='text-lime-500 font-bold text-lg pr-2'>Mongo DB,</span> and a host of other tech goodies.</p>
            <div className='flex w-full gap-4 items-center justify-center'>
            <button className='z-10 font-tertiary  text-xl w-auto text-center border border-indigo-500 rounded px-4 py-2 bg-opacity-20 bg-indigo-800 hover:bg-opacity-50'>Download Resume</button>
            <button className='z-10 font-tertiary text-xl w-auto text-center border border-indigo-500 rounded px-4 py-2 bg-opacity-20 bg-indigo-800 hover:bg-opacity-50'>See my projects</button>
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
