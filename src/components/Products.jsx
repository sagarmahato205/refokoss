import React, { useState } from 'react'
import Product from './product'
import {motion} from 'motion/react';


function Products() {
  
    const products = [
        {title:'Arqitel',
        description:'With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.',
        live:true,
        case:false
    },
      {title:'TTR',
        description:' Weve created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.',
        live:true,
        case:false
    },
      {title:'YIR 2022',
        description:'Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.',
        live:true,
        case:true
    },
      {title:'Yahoo!',
        description:'We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.',
        live:true,
        case:true
    },
    ]
    const [pos,setPos ]=useState(0);
    function mover(val){
      setPos(val*23);
    }
  return (
    <div className=' mt-32 relative'>
        
        {products.map((elem,index)=><Product  elem={elem} Mover={mover} count={index} />)}
        <div className='w-full h-full absolute top-0  pointer-events-none'>
          <motion.div   intitial={{y:pos }} animate={{y:pos + `rem`}} transition={{ease:[0.76 , 0 , 0.24 , 1],duration:0.5}} className='overflow-hidden window absolute left-[44%] w-[28rem]  h-[23rem] bg-amber-100  -translate-x-[50%]'>
            <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76 , 0 , 0.24 , 1],duration:0.5}} className=' w-full h-full bg-blue-900 '>
               
            </motion.div>   
            <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76 , 0 , 0.24 , 1],duration:0.5}} className=' w-full h-full bg-blue-800 '></motion.div>   
            <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76 , 0 , 0.24 , 1],duration:0.5}} className=' w-full h-full bg-blue-700 '></motion.div>   
            <motion.div animate={{y:-pos+`rem`}} transition={{ease:[0.76 , 0 , 0.24 , 1],duration:0.5}} className=' w-full h-full bg-blue-900 '></motion.div>   
            
          </motion.div>
        </div>
    </div>
  )
}

export default Products