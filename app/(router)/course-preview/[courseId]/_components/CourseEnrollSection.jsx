"use client"
import GlobalApi from "@/app/_utils/GlobalApi";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState,useEffect } from "react";
import { toast } from "sonner";

function CourseEnrollSection({ courseInfo,isUserAllredyEnrollCourse }) {
  const router = useRouter();
  const [membership,setMembership] = useState(false);  
  const {user} = useUser();

  // Enroll course to the
  const EnrollCourse = ()=>{
    GlobalApi.EnrollToCourse(courseInfo?.slug,user?.primaryEmailAddress?.emailAddress).then(res=>{
      // console.log(res)
      if(res){
        toast("User Enroll Sucessfull"),{
          description:"User Enroll To The Course"
        }
        router.push('/watch-course/'+res.createUserEnrollCourse.id)
      }
    })
  }

  // fetch user membership 
  useEffect(() => {
    user && checkMembership();
  }, [user]);

  const checkMembership = () => {
    GlobalApi.getCheckActiveMembership(
      user.primaryEmailAddress.emailAddress
    ).then((res) => {
      const result = res.memberships.some(
        (item) =>
          item.email === user.primaryEmailAddress.emailAddress &&
          item.active === true
      );
      setMembership(result);
    });
  };

  

  return (
    <div className="bg-primary p-3 text-center rounded-md text-white flex flex-col items-center gap-3">
      <h2 className="font-bold text-2xl">Enroll To The Course</h2>
      {/* User has membership and allredy Login  */}
      {user && (membership || courseInfo.free)&& !isUserAllredyEnrollCourse ? (
        <div className="flex flex-col gap-3 ">
          <h2 className="">
            Enroll Now to Start Learning and Building Projects
          </h2>
          <Button className="p-2 font-bold lg:text-lg w-full bg-white text-primary hover:bg-gray-200 hover:text-primary rounded-md transition duration-300 px-10" 
          onClick={()=>EnrollCourse()}
          >
            Enroll Now
          </Button>
        </div>
      ) : !user ? (
        <div className="flex flex-col gap-3 ">
          <h2 className="">
            Buy Membership and Access To All Course
          </h2>
          <Link href={"/sign-in"}>
            <Button className="p-2 font-bold lg:text-lg w-full bg-white text-primary hover:bg-gray-200 hover:text-primary rounded-md transition duration-300 px-10">
            Membership Only &&#x20b9;399
            </Button>
          </Link>
        </div>
      ) : (
       !isUserAllredyEnrollCourse&& <div className="flex flex-col gap-3">
          <h2 className="">
            Buy MemberShip And Get Access To All Paid Course 
          </h2>
          <Link href={'/membership'}>
          <Button className="p-2 font-bold text-lg w-full bg-white text-primary hover:bg-gray-200 hover:text-primary rounded-md transition duration-300 px-10">
            Only &&#x20b9;399 
          </Button>
          </Link>
        </div>
      )}
      {/* User dose not have membership or Not Signup/Login */}
      {isUserAllredyEnrollCourse&&  
      <div className="flex flex-col gap-3">
      <h2 className="">
        Continue to Learn Your Porject
      </h2>
      <Link href={'/watch-course/'+isUserAllredyEnrollCourse}>
      <Button className="p-2 font-bold text-lg w-full bg-white text-primary hover:bg-gray-200 hover:text-primary rounded-md transition duration-300 px-10">
        Continue
      </Button>
      </Link>
    </div>
      
      }
    </div>
  );
}

export default CourseEnrollSection;
