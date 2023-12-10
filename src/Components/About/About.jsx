import React from 'react'
import Typed from 'react-typed';
import IMG1 from '../../assets/Images/laptop.jpg'
const About = () => {
  return (
    <> 
        {/* For Grid Layout */}
        <div className='max-w-[1240px] mx-auto border border-black grid md:grid-cols-2 my-4 items-center'>
        <div className='border border-black  col-span-1 w-full md:w-[80%]'>
            <img src={IMG1} alt="main_image" />
        </div>
        <div className='border border-black  col-span-1 p-3'>
            <h1 className='text-3xl mb-2 font-bold'>Hola Amigos</h1>
            <h1 className='text-2xl mb-3 font-bold text-[#264381]'>
            My name is Saif Alam Ansari
            </h1>
            <h1 className='text-2xl mb-3 font-bold text-[#592b8a]'>I'm a
            <Typed className='pl-3'
                    strings={['Web Developer','Web Designer','WordPress Developer']}
                    typeSpeed={100}
                    loop={true}
                    backSpeed={200}
                />
            </h1>
            
            

            <p className='text-[#545454] text-[19px] text-justify'>Frontend developer proficient in building dynamic and static websites using a diverse set of technologies.
            Skilled in React for creating interactive user interfaces, Node.js and PHP for backend development, and proficient in WordPress for content management.
            </p>

            <div className='mt-5'>
                <button className='px-4 py-2 bg-[#264381] rounded-md text-white text-[20px]'>
                <a href="saifalam.com"></a>
                Message Me
                </button>
            </div>

        </div>


        </div>
    </>
  )
}

export default About