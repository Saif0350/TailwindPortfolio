import React from 'react'
import Typed from 'react-typed';

const Banner = () => {
  return (
    <>
        <div className="bg-[#27579a] w-full py-[100px]">
            <div className='max-w-[1240px] my-[130px] mx-auto text-center'>
                <div className='font-bold md:mb-8 text-4xl md:text-[50px]'>Learn With Me</div>
                <h2 className='font-bold md:mb-12 text-white text-3xl  md:text-[80px]'>Saif Alam Ansari</h2>
                <div className='font-bold  text-3xl md:text-[50px] text-white'>
                I'm a
                <Typed className='pl-3'
                    strings={['Web Developer','Web Designer','WordPress Developer']}
                    typeSpeed={100}
                    loop={true}
                    backSpeed={100}
                />
                </div>

            </div>
        </div>
    </>
  )
}

export default Banner