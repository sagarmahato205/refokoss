import React from 'react'
import Button from './button'

function Product({elem,Mover, count}) {
  return (
    <div className='w-full py-20 h-[23rem] text-white '>
        <div onMouseEnter={()=>{Mover(count)}} className='max-w-screen-xl mx-auto flex items-center justify-between px-10 '>
            <h1 className='text-6xl capitalize font-medium '>{elem.title}</h1>
            <div className='dets w-1/3 '>
                <p className='mb-3 text-sm'>{elem.description}</p>
                <div className='flex items-center gap-10'>
                    {elem.live &&  <Button title='Live Website'/>}
                    {elem.case &&  <Button title='Case Study'/>}
                </div>
            </div>
        </div>

    </div>
  )
}

export default Product