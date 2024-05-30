import React from 'react'
import { ProductsCard } from './productsCard'

export const Products = () => {
  return (
    <div className='py-10'>
        <div className='flex flex-col items-center gap4'> 
        <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>
            shopping every day
        </h1>
        <span className='w-20 h-[3px] bg-black mt-5' ></span>

        </div>
        <div >
            <ProductsCard/>
        </div>
    </div>
  )
}
