"use client"
import GlobalApi from '@/app/_utils/GlobalApi'
import { useUser } from '@clerk/nextjs'
import React, { useEffect,useState } from 'react'
import CourseVideoDescription from '../../course-preview/[courseId]/_components/CourseVideoDescription'
import CourseContentSection from '../../course-preview/[courseId]/_components/CourseContentSection'
import { toast } from 'sonner'

function WatchCourse({params}) {
  const {user} = useUser()
  const [courseInfo, setcourseInfo] = useState([])
  const [activeChapterIndex,setActiveChapterIndex]=useState(0)
  const [completedChapter, setCompletedChapter] = useState([])

  // Get User Enroll course details
  useEffect(()=>{
    params&&user&&getUserEnrollCouresDetails()
  },[params&&user])
  const getUserEnrollCouresDetails =()=>{
    GlobalApi.getUserEnrollCourse(params.enrollId,user.primaryEmailAddress.emailAddress).then(res=>{
      setCompletedChapter(res.userEnrollCourses[0].completedChpater);
      console.log(res.userEnrollCourses)
      setcourseInfo(res.userEnrollCourses[0]?.course)
    })
  }
// save completed chapter details
  const onCompletedChpater = (chapterId)=>{
    GlobalApi.markChapterCompleted(params.enrollId,chapterId).then(res=>{
    if(res){
      toast("Chapter Is Completed")
      getUserEnrollCouresDetails();
    }
    })
  }

  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 p-3'>
        {/* Title video description */}
        <div className='bg-white col-span-2 p-3 rounded-md'>
            <CourseVideoDescription courseInfo={courseInfo}
            activeChapterIndex={activeChapterIndex} 
            watchMode={true}
            setChapterCompleted={chapterid=>onCompletedChpater(chapterid)}
            />
        </div>
        {/* courses content */}
        <div>
            <CourseContentSection courseInfo={courseInfo}
            isUserAllredyEnrollCourse={true}
            watchMode={true}
            setActiveChapterIndex={(index)=>setActiveChapterIndex(index)}
            completedChapter={completedChapter}
            />
        </div>
    </div>
  )
}

export default WatchCourse
