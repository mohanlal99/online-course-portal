"use client";
import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CourseItem from "./CourseItem";
import Link from "next/link";

function CourseList() {
  const [courseList, setCourseList] = useState([]);
  useEffect(() => {
    getAllCourses();
  }, []);
  const getAllCourses = () => {
    GlobalApi.getAllCourseList().then((res) => {
      setCourseList(res?.courses);
    });
  };
  return (
    <div className="mt-3 p-5 bg-white rounded-md min-h-screen">
      {/* Title and Filters  */}
      <div className="flex justify-between gap-3">
        <h2 className="text-primary text-xl font-bold"> All Courses</h2>
        <Select>
          <SelectTrigger className="w-[90px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">All</SelectItem>
            <SelectItem value="dark">Paid</SelectItem>
            <SelectItem value="system">Free</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* Courses Displays */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 p-1">
        {courseList?.length > 0 ? (
          courseList.map((item, index) => (
            <Link key={index} href={'/course-preview/'+item?.slug}>
              <CourseItem course={item}/>
            </Link>
          ))

        ):(
          [1,2,3,4,5,6].map((item,index)=>(
            <div key={index} className="bg-slate-200 h-60 w-full animate-pulse rounded-md ">

            </div>

          ))
        )
        }
      </div>
    </div>
  );
}

export default CourseList;
