import React from 'react'
import { insta } from '../assets'
import { FaGithub,FaFacebook,FaTwitter,FaInstagramSquare } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";

export const Footer = () => {
  return (
    <div className='bg-black text-gray-400 py-20 '>
     <div className='max-w-screen-xl mx-auto grid  grid-cols-4'  >
        <div>
            <img  className='h-10' src={insta} alt='inst'/>
        </div>
        <div className='flex gap-5 text-lg text-gray-500' >   
        <FaGithub className='hover:text-white duration-100 cursor-pointer' />
        <FaFacebook className='hover:text-white duration-100 cursor-pointer' />
        <FaTwitter className='hover:text-white duration-100 cursor-pointer' />
        <FaInstagramSquare  className='hover:text-white duration-100 cursor-pointer' />
        </div>
        <div>
            <h1>locate us</h1>
        </div>

        <div>
            <h2 className='text-2x1 text-white mb-4' >Profile</h2>
            <p><span><BsPersonFill/>{" "}</span>my account</p>
        </div>

        <div>
            <input type='' />
        </div>
     </div>
    </div>
  )
}
