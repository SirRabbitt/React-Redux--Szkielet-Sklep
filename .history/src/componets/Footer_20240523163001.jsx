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
        <div className='' ><FaGithub /></div>
        <div><FaFacebook /></div>
        <div><FaTwitter /></div>
        <div><FaInstagramSquare /></div>
     </div>
    </div>
  )
}
