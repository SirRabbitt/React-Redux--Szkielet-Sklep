import React from 'react'
import { insta } from '../assets'

export const Footer = () => {
  return (
    <div className='bg-black text-gray-400 py-20 '>
     <div className='max-w-screen-xl mx-auto' >
        <div>
            <img  className='w-23' src={insta} alt=''/>
        </div>
     </div>
    </div>
  )
}
