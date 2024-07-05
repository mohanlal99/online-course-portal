import React from 'react'
import WelcomeBanner from './_components/WelcomeBanner'
import CourseList from './_components/CourseList'
import SideBanners from './_components/SideBanners'

function Courses() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-2 p-2'>
      {/* Left Container */}
      <div className='col-span-2 sm:col-span-3'>
        {/* Banner */}
        <WelcomeBanner/>
         {/* Courses List  */}
         <CourseList/>
      </div>
      {/* Right Container */}
      <div className='xl:col-span-1 bg-white rounded-md  min-h-screen'>
          <SideBanners/>
      </div>
    </div>
  )
}

export default Courses
