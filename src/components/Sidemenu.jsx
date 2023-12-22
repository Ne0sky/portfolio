import React from 'react'

const Sidemenu = () => {
  return (
    <div className='sidebar relative'>
       
        <ul className='text-2xl  font-tertiary uppercase flex flex-col gap-4 z-10 relative'>
            <li ><span className=' hover:text-lime-500 ease-in-out duration-300 hover:cursor-pointer' >Home</span></li>
            <li ><span className=' hover:text-lime-500 ease-in-out duration-300 hover:cursor-pointer' >About</span></li>
            <li ><span className='hover:text-lime-500 ease-in-out duration-300 hover:cursor-pointer' >Projects</span></li>
            <li ><span className=' hover:text-lime-500 ease-in-out duration-300 hover:cursor-pointer' >Contact</span></li>
          </ul>
    </div>
  )
}

export default Sidemenu