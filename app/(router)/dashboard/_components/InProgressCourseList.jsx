import React, { useEffect, useState } from "react";
import ProgressCourseItem from "./ProgressCourseItem";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function InProgressCourseList({ userEnrolledCourse }) {
  useEffect(()=>{
  },[userEnrolledCourse])
  return (
    userEnrolledCourse && (
      <div className="bg-white mt-2 p-5 min-h-screen">
        <h2 className="text-primary font-bold text-lg">
          Recent Enrolled Courses
        </h2>
        <h2>
          {!userEnrolledCourse?.length>0 && (
            <div className=" mt-10">
              <h2 className=" font-bold text-2xl text-gray-600">No Any Enroll Courses</h2>
              <p className="text-xl mb-3 text-gray-500">Go to the Courses Section And Enroll Courses </p>
              <Link href={'/courses'} className='p-2 border bg-primary font-bold  text-white rounded-md'>Enroll Courses</Link>
            </div>
          )}
        </h2>
        <div className="rounded-md gap-2 mt-2  grid md:grid-cols-3 grid-cols-1">
          {userEnrolledCourse.map((item, index) => (
            <Link key={index} href={"/course-preview/" + item?.course?.slug}>
              <ProgressCourseItem courses={item} />
            </Link>
          ))}
        </div>
      </div>
    )
  );
}

export default InProgressCourseList;
