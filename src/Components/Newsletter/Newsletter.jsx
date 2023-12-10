import React from 'react'

const Newsletter = () => {
  return (
    <>
    <div className='bg-[#27579a] w-full'>
    <div className='w-full bg-[#27579a] max-w-[1240px] mx-auto py-[100px] md:grid grid-cols-2 justify-between items-center'>
        <div className=''>
          <h1 className='text-white text-5xl py-3'>Want to work with Me?</h1>
          <h3 className='text-white text-2xl py-3'>Sign Up to our newsletter and stay upto date</h3>
        </div>
        <div className='border border-[#c5c5c5] m-auto rounded'>
          <input className='serachBar bg-transparent px-8 py-3 outline-none' type="email"
           placeholder='Enter Your Email' />
           <button className='px-6 py-3 uppercase bg-[#a52ec9] text-white rounded rounded-l-none'>Submit</button>
        </div>

      </div>  

    </div>
    
      
    </>
  )
}

export default Newsletter