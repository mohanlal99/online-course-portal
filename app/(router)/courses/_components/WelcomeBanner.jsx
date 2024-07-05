import Image from 'next/image'
import React from 'react'

function WelcomeBanner() {
  return (
    <div className='bg-white p-4 rounded-md flex gap-4 items-center' >
      <Image
      src={'/panda.png'}
      width={200}
      height={200}
      alt='WelcomeBanner'
      priority 
      />
      <div className=''>
      <h2 className='text-2xl md:text-[30px] font-bold'>Welcome To <span className='text-primary'>Online Course Portal</span></h2>
      <p className='text-gray-500 font-medium'> Explore , Learn and Bulid Real Life Projects !</p>
      </div>
    </div>
  )
}

export default WelcomeBanner
