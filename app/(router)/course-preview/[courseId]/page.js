"use client"
import React, { useEffect ,useState} from 'react'
import CourseVideoDescription from './_components/CourseVideoDescription'
import GlobalApi from '@/app/_utils/GlobalApi';
import CourseEnrollSection from './_components/CourseEnrollSection';
import CourseContentSection from './_components/CourseContentSection';
import { useUser } from '@clerk/nextjs';
import { Backpack, MoveLeft } from 'lucide-react';

function CoursePreview({params}) {
    const [courseInfo, setCourseInfo] = useState([])
    const [isUserAllredyEnrollCourse, setisUserAllredyEnrollCourse] = useState()
    const {user} = useUser();
    useEffect(()=>{ 
        params&&getCourseInfoById();
    },[params])

    useEffect(()=>{
        courseInfo&&user&&checkUserEnrollToCourse();
    },[courseInfo,user])

    const getCourseInfoById = ()=>{
        GlobalApi.getCourseById(params?.courseId).then(res=>{
            setCourseInfo(res?.course);
        })
    }

    // Check user allredy course enroll 

    const checkUserEnrollToCourse=()=>{
        GlobalApi.CheckUserEnrollToCourse(courseInfo?.slug,user.primaryEmailAddress.emailAddress).then(res=>{
            // console.log(res)
            if(res?.userEnrollCourses[0]?.id){
                setisUserAllredyEnrollCourse(res?.userEnrollCourses[0]?.id)
            }
        })
    }


  return courseInfo&&(
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 p-3'>
        {/* Title video description */}
        <div className='bg-white col-span-2 p-3 rounded-md'>
            <CourseVideoDescription courseInfo={courseInfo}/>
        </div>
        {/* courses content */}
        <div>
            <CourseEnrollSection courseInfo={courseInfo}
            isUserAllredyEnrollCourse={isUserAllredyEnrollCourse}
            />
            <CourseContentSection courseInfo={courseInfo}
            isUserAllredyEnrollCourse={isUserAllredyEnrollCourse}
            />
        </div>
    </div>
  )
}

export default CoursePreview
