import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import React, { useEffect } from 'react'

function WelcomeBannerDashboard() {
    const {user} =useUser()
  return user&&(
    <div className='bg-white p-4 rounded-md flex gap-4 items-center' >
      <Image
      src={'/panda.png'}
      width={200}
      height={200}
      alt='Welcome Banner'
      priority
      />
      <div className='grid grid-cols-1 gap-1'> 
      <h2 className='text-2xl md:text-[40px] font-bold pb-2'>Welcome To <span className='text-primary'>{user?.firstName}</span></h2>
      <p className=' tracking-wider text-gray-500 font-medium '>Let's Begin Learning Where You Left Off ,</p>
      <p className='tracking-wider text-gray-500 font-medium'>Keep it Up and Improve Your Progress</p>
      
      </div>
    </div>
  )
}

export default WelcomeBannerDashboard
