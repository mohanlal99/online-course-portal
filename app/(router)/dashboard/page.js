"use client"
import React, { useEffect, useState } from 'react'
import WelcomeBannerDashboard from './_components/WelcomeBannerDashboard'
import SideBanners from '../courses/_components/SideBanners';
import InProgressCourseList from './_components/InProgressCourseList';
import { useUser } from '@clerk/nextjs';
import GlobalApi from '@/app/_utils/GlobalApi';


function Dashborad() {
  const [userEnrolledCourse , setUserEnrolledCourse] = useState([])
  const {user} = useUser();

  useEffect(() => {
    user && getUserEnrolledCourse();
  }, [user]);

  const getUserEnrolledCourse = () => {
    GlobalApi.getInProgressCourse(user.primaryEmailAddress.emailAddress).then(
      (res) => {
        setUserEnrolledCourse(res?.userEnrollCourses);
        
      }
    );
  };
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 p-4'>
      {/* Left Container */}
      <div className='col-span-3'>
        {/* Banner */}
        <WelcomeBannerDashboard  />
        {/* InporgressCourse list  */}
        {userEnrolledCourse&&<InProgressCourseList userEnrolledCourse={userEnrolledCourse}/>}
      </div>
      {/* Right Container */}
      <div className='lg:col-span-1'>
        <div className='bg-white rounded-md p-1'>
          <SideBanners/>
        </div>
      </div>
    </div>
  )
}

export default Dashborad
