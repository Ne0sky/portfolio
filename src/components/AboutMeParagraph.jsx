import React, {useRef} from 'react'
import {useScroll, motion} from 'framer-motion';
const AboutMeParagraph = ({value}) => {
    const element = useRef(null);
    const {scrollYProgress} = useScroll({
        target:element,
       
        offset:['start 0.9','start 0.25']
    })
  return (
    <motion.p ref={element} 
    className='lg:w-1/2 uppercase px-4 font-tertiary border-l'
    style={{opacity:scrollYProgress}}
    >{value}</motion.p>
  )
}

export default AboutMeParagraph