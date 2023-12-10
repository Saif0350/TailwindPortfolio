import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"

const Header = () => {

    const [toggle, setToggle] = useState(false);



  return (
    <>
        <div className='bg-[#27579a] p-4'>

            <div className='max-w-[1240px] py-[8px] items-center mx-auto flex justify-between'>

                <div className='text-white text-3xl font-bold '>Saif Alam Ansari</div>

                {
                    !toggle ?
                    <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white cursor-pointer text-[25px] md:hidden block' />
                    :
                    <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white cursor-pointer text-[25px] md:hidden block' />

                }
                
                
                <ul className='hidden md:flex text-white gap-5 text-[17px]'>
                    <li>Home</li>
                    <li>Company</li>
                    <li>Resources</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                {/* Resposive Menu */}
                <ul className={` duration-300 md:hidden w-full h-screen text-white text-[20px] fixed bg-[#000]
                top-[83px]
                ${toggle ? 'left-[0]' : 'left-[-100%]'}
                `}>
                    <li className='p-5 border-dotted border-b-[2px] hover:bg-[#8e38a4] rounded-sm'>Home</li>
                    <li className='p-5 border-dotted border-b-[2px] hover:bg-[#8e38a4] rounded-sm'>Company</li>
                    <li className='p-5 border-dotted border-b-[2px] hover:bg-[#8e38a4] rounded-sm'>Resources</li>
                    <li className='p-5 border-dotted border-b-[2px] hover:bg-[#8e38a4] rounded-sm'>About</li>
                    <li className='p-5 border-dotted border-b-[2px] hover:bg-[#8e38a4] rounded-sm'>Contact</li>
                </ul>

                {/* Responsive Menu End */}

            </div>
        </div>
    </>
  )
}

export default Header