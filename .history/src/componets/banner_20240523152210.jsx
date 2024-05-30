import React from 'react'
import { AiOutlineArrowLeft , AiOutlineArrowRight } from "react-icons/ai";
export const Banner = () => {
    
    const data = ["https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",];

  return (
    <div className='w-full h-auto overflow-hidden'>
        <div className='w-screen h-[650x] relative'>
            <div className='w-full h-full flex' >
            <img className='w-screen h-full object-cover' 
            src={data[0]} 
            alt="img"
            loading='priority'
             />
              <img className='w-screen h-full object-cover' 
            src={data[1]} 
            alt="img"
            loading='priority'
             />
              <img className='w-screen h-full object-cover' 
            src={data[2]} 
            alt="img"
            loading='priority'
             />
              <img className='w-screen h-full object-cover' 
            src={data[3]} 
            alt="img"
            loading='priority'
             />


            </div>
            <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44'>
            <div className='w-14 ' >
              <AiOutlineArrowLeft />
            </div>
            <div>
                <AiOutlineArrowRight />
            </div>
            </div>
           
        </div>
    </div>
  )
}




