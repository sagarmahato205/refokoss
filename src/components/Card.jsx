import { motion } from 'motion/react';
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


function Card({width,start,para, hover="false"}) {
  return (
    <motion.div whileHover={{backgroundColor:hover==="true" && "#7443ff",padding:"25px"}} className={`w-1/2 bg-zinc-800 p-5 rounded-xl  text-white  ${width} h-[60vh] flex flex-col justify-between`}>
      <div className='w-full'>
          <div className='w-full flex justify-between items-center'>
            <h3>one heading</h3>
            <FaArrowRightLong />
          </div>
          <h1 className='text-2xl font-medium mt-5'>Whatever heading.</h1>
      </div>
      <div className='down w-full mt-20'>
        {
            start && (
                 <>
                    <h1 className=' text-3xl font-semibold tracking-tight leading-none '> Start a Project</h1>
                    <button className='rounded-full   py-2 px-5 border-zinc-50 border-[1px] mt-3'>Contact us</button>
                 </>
            )        
        }
        {
            para && (
                <>
                   <p className='text-sm  text-zinc-600 font-medium '>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </>
            )
        }
       
        
      </div>
    </motion.div>
  )
}

export default Card;