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
    className='z-10 flex flex-wrap  px-4 font-tertiary text- p-6 rounded  border-t-2 lg:border-t-0 lg:border-l-2 border-indigo-500 bg-gradient-to-b lg:bg-gradient-to-r from-[#0c0b2b] to-transparent bg-opacity-20 justify-left'>
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