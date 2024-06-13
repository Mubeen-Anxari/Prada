import React from 'react'

export default function ProductsRatingFaQs() {
  return (
       <div className='  max-w-[1300px] m-auto   '>
       <div className=' flex md:w-full justify-between'>
       <h1 >Product Details</h1>
        <h1  className='font-bold'>Rating & Reviews</h1>
        <h1 >FAQs</h1>
       </div>
       <hr className='text-primaryColor mt-2  m-auto' />
       <div className=' flex justify-between  mt-4 md:w-full '>
        <h1  className='font-bold'>ALL Reviews</h1>
        <div className=' flex gap-2'>
          <button className=' w-[150px] rounded-full p-2 bg-primaryColor text-textColor'>Latest</button>
          <button className=' w-[150px] rounded-full p-2 bg-secondaryColor text-primaryColor'>Write a reveiw</button>
        </div>
       </div>
       
    </div>
  )
}
