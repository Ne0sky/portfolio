import React, {useRef} from 'react'
import {useScroll, motion, useTransform} from 'framer-motion';
const Word = ({value}) => {
    const element = useRef(null);
    const {scrollYProgress} = useScroll({
        target:element,
       
        offset:['start 0.9','start 0.45']
    })
    const words = value.split(" ");
  return (
    <p ref={element} 
    className='lg:w-1/2 flex flex-wrap  px-4 font-special text-xl  justify-center'>
        {
            words.map((word, i)=>{
                const start = i/words.length;
                const end = start + (1/words.length)
                const range=[start,end]
                const progress = scrollYProgress
                const opacity  = useTransform(progress,range,[0,1])
                return <span className='relative'>
                    <span className='absolute opacity-10'>{word}</span>
                    <motion.span 
                    style={{opacity}} key={i} className='mr-1'>{word}
                    </motion.span>
                    </span>
            })
        }
    </p>
  )
}

export default Word