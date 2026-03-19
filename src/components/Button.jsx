import React from 'react'
import { IoIosReturnRight } from "React-icons/io";

function Button({title="Get Started"}) {
  return (
    <div className='w-40   px-3 py-1 text-black bg-zinc-100 rounded-full flex items-center justify-between'>
        <span className='text-sm font-regular'>{title}</span>
        <IoIosReturnRight />
    </div>
    
  )
}

export default Button