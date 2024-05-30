import React from 'react'
import { insta } from '../assets'
import { FaGithub,FaFacebook,FaTwitter,FaInstagramSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className='bg-black text-gray-400 py-20 '>
     <div className='max-w-screen-xl mx-auto' >
        <div>
            <img  className='h-10' src={insta} alt='inst'/>
        </div>
        <div className='h-40 w-40 text-lg d-flex align-items-center justify-content-center flex gap-3 mt-4 ' >  
        <div className=  ' hover:text-white duration-100 cursor-pointer' >< FaGithub /></div>
        <div className='hover:text-white duration-100 cursor-pointer' ><FaFacebook /></div>
        <div className='hover:text-white duration-100 cursor-pointer' ><FaTwitter /></div>
        <div className='hover:text-white duration-100 cursor-pointer' ><FaInstagramSquare /></div>
        </div>
     </div>
    </div>
  )
}
