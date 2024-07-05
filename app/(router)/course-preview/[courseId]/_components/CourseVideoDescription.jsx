"use client"
import { MoveLeft, User } from "lucide-react";
import React, { useEffect } from "react";
import VideoPlayer from "./VideoPlayer";
import Markdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function CourseVideoDescription({courseInfo,activeChapterIndex=0,watchMode = false,setChapterCompleted,}) {
  const router = useRouter()
  useEffect(()=>{
    if(courseInfo){
      document.title = courseInfo?.name
    }
  },[courseInfo])
  return courseInfo&&(
    courseInfo.name && (
      <div className="flex flex-col gap-3">
        {/* Course Title And Video  */}
        <h2 className="text-2xl font-semibold"><MoveLeft onClick={()=>router.push('/courses')} className="cursor-pointer font-bold mb-2 "/>{courseInfo.name}</h2>
        <h2 className="text-gray-500 text-[15px] flex items-center">
          {courseInfo.author}
        </h2>
        <div className="">
          {courseInfo?.chapter?.length > 0 ? (
            <VideoPlayer
              videoUrl={courseInfo?.chapter[activeChapterIndex]?.video?.url}
              poster={!watchMode ? courseInfo?.banner?.url : null}
            />
          ) : (
            ""
          )}
        </div>
        {/* Course Description  */}
        <div>
          <h2 className="font-bold text-xl mb-2">
            {watchMode ? (
              <span className="flex justify-between items-center px-3">
                {courseInfo?.chapter[activeChapterIndex]?.name}
                <Button
                  onClick={() =>
                    setChapterCompleted(
                      courseInfo?.chapter?.[activeChapterIndex]?.id
                    )
                  }
                >
                  Mark Complete
                </Button>
              </span>
            ) : (
              <span>About This Course</span>
            )}
          </h2>
          <hr className="bg-gray-200 h-1"></hr>
          {watchMode ? (
            <Markdown className="leading-7 font-sans mt-2 text-gray-900 bg-white rounded-md shadow-md">
            {courseInfo?.chapter[activeChapterIndex]?.shortDesc}
          </Markdown>
          ) : (
            <Markdown className="leading-7 font-sans mt-2">
              {courseInfo?.description}
            </Markdown>
          )}
        </div>
      </div>
    )
  );
}

export default CourseVideoDescription;
