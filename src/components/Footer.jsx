import React from 'react'

function Footer() {
  return (
    <div className='w-full '>
        <div className='max-w-3xl mx-auto py-10 flex gap-32 text-white '>
            <div className='basis-1/2 '>
                <h1 className='text-[5rem] font-semibold leading-none tracking-tight'>Refokoss.</h1>
            </div>
            <div className='basis-1/2 flex gap-4 '>
                <div className='basis-1/3'>
                    <h1 className='text-zinc-500 capitalize'>Socials</h1>
                    {["Instagram" , "Twitterx", "LinkedIn"].map((item,index)=><a className='block mt-3 text-zinc-600 capitalize'>{item}</a>)} 
                </div>
                <div className='basis-1/3'>
                    <h1 className='text-zinc-500 capitalize'>Sitemaps</h1>
                    {["Home" , "Work", "Career"].map((item,index)=><a className='block mt-3 text-zinc-200 capitalize'>{item}</a>)} 
                </div>
                <div className='basis-1/2 flex flex-col items-end'>
                    <p className='text-xs text-right'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius perspiciatis est porro dolore maiores?</p>
                    <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" className='mt-5' alt="" />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer