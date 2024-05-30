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
        <div className="d-flex justify-content-center">
  <div className="h-40 w-40 d-flex align-items-center justify-content-center gap-3 mt-4">
    <div className="h-100 w-100 hover-text-white duration-100 cursor-pointer d-flex align-items-center justify-content-center">
      <FaGithub className="w-75 h-75" />
    </div>
    <div className="hover-text-white duration-100 cursor-pointer d-flex align-items-center justify-content-center">
      <FaFacebook className="w-75 h-75" />
    </div>
    <div className="hover-text-white duration-100 cursor-pointer d-flex align-items-center justify-content-center">
      <FaTwitter className="w-75 h-75" />
    </div>
    <div className="hover-text-white duration-100 cursor-pointer d-flex align-items-center justify-content-center">
      <FaInstagramSquare className="w-75 h-75" />
    </div>
  </div>
</div>

     </div>
    </div>
  )
}
