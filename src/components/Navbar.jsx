import React from 'react'
import { FaArrowDownWideShort } from "react-icons/fa6";
import Button from './button';

function Navbar() {
  return (
    <div className="max-w-4xl mx-auto py-2 flex items-center justify-between text-white border-b-[1px] border-zinc-700">
        <div className='nleft flex items-center'>
            <div className='flex px-2 gap-1 items-center'>
              <FaArrowDownWideShort /><h1 className='text-xl font-extrabold'>Refokoss</h1>
            </div>
          <div className='links flex gap-14 ml-24 '>
            
            {['Home ',"Work","culture","","News"].map((elem,index) => (
              elem.length==0?<span className='w-0.5 h-5 bg-zinc-700'></span>:<a className='text-sm flex items-center'>
              {index==1 ? <span style={{boxShadow:"0 0 0.45em"}} className='inline-block w-1 h-1 bg-green-400 rounded-full'></span>:null}
              {elem}</a>
            ))}
          </div>
        </div>
        <Button />
    </div>
  )
}

export default Navbar