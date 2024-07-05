import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import React, { useEffect } from "react";

function ProgressCourseItem({courses}) {
  // useEffect(()=>{
  //   console.log(courses)
  // },[])

  const getTotalCompleteChapterPercent = (item)=>{
    return Math.floor((item.completedChpater.length*100)/ item?.course?.chapter?.length)
  }
  return (
    <div className=" bg-gray-100 cursor-pointer border border-gray-900 rounded-lg shadow-lg p-1">
      <div className="wrapper">
        <Image
        priority
          className="banner-image bg-center bg-cover h-32   w-full rounded-lg border border-gray-300"
          src={courses?.course?.banner?.url}
          width={200}
          height={200}
          alt="card"
        />
        <h2 className="font-righteous text-md mt-2 h-18">
          {courses?.course?.name}
        </h2>
        <h2 className="font-lato text-gray-400  text-sm mt-1">
          Writer : {courses?.course?.author}
        </h2>
        {courses?.course?.totalChapters&& <div><h2 className="font-lato text-gray-400  text-sm mt-1 flex justify-between gap-2">
          {getTotalCompleteChapterPercent(courses)}% <span>{courses?.completedChpater?.length}/{courses?.course?.totalChapters}Chpaters</span>
        </h2>
         <h2>
          <Progress value={getTotalCompleteChapterPercent(courses)} className='h-2 mt-2' />
        </h2></div>
        }
      </div>
    </div>
  );
}

export default ProgressCourseItem;
