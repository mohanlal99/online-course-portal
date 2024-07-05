"use client";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Check, CropIcon, Cross, IceCream, MoveLeft, WormIcon, X } from "lucide-react";
import { Righteous } from "next/font/google";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import GlobalApi from "@/app/_utils/GlobalApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

function MembershipCard() {
  const { user } = useUser();
  const [userMembershipCheck, setUserMembershipCheck] = useState(false);

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
      setUserMembershipCheck(result);
    });
  };

  const getActiveMembership = () => {
    if (userMembershipCheck) {
      toast("You are already a member");
    } else {
      const currntDate = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
      GlobalApi.createActiveMembership(
        user.primaryEmailAddress.emailAddress,
        currntDate
      ).then((res) => {
        toast("Membership added successfully");
        setUserMembershipCheck(true);
      });
    }
  };
  // const checkMembership = ()=>{
  //   GlobalApi.getCheckActiveMembership(user.primaryEmailAddress.emailAddress).then(res=>{
  //      const result =  res.memberships.some(item=>item.email === user.primaryEmailAddress.emailAddress && item.active === true )
  //      setUserMembershipCheck(result)
  //   })
  // }

  // const getActiveMembership = () => {
  //   if (userMembershipCheck) {
  //     toast('You are already a member')
  //   } else {
  //     GlobalApi.createActiveMembership(user.primaryEmailAddress.emailAddress).then(
  //       (res) => {
  //         toast("Membership added successfully")
  //         console.log(res);
  //       }
  //     );
  //   }
  // };
  const router = useRouter()
  return (
    user && (
      <div>
        <MoveLeft onClick={()=>router.push('/courses')}/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="md:w-96 relative w-full max-w-sm p-4  bg-white border border-gray-900 rounded-xl  shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="absolute -top-12 right-3 bg-primary p-1 rounded-md text-white">
            <Dialog>
              <DialogTrigger>Test Mode</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="flex gap-1">
                    Try Membership <IceCream />
                  </DialogTitle>
                  <DialogDescription>
                    <Button
                      onClick={() => {
                        getActiveMembership();
                      }}
                    >
                      Active Membership
                    </Button>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>

          <h5 className="mb-4 text-xl font-medium text-center text-gray-500 dark:text-gray-400">
            Standard plan
          </h5>
          <div className="flex  text-gray-900 dark:text-white items-end justify-center">
            <span className="text-3xl font-semibold">&#x20b9;</span>
            <span className="text-5xl font-extrabold tracking-tight">399</span>
            <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
              /month
            </span>
          </div>
          <ul role="list" className="space-y-5 my-7">
            <li className="flex">
              <span className="text-base font-normal flex gap-2 leading-tight text-gray-500 dark:text-gray-400 ms-3">
                <Check className="text-lime-500" /> Access All Course
              </span>
            </li>
            <li className="flex">
              <span className="text-base flex gap-2 font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                <Check className="text-lime-500" /> Free App Membership
              </span>
            </li>
            <li className="flex">
              <span className="text-base flex gap-2 font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                <X className="text-red-500" /> Email & Instagram DM Support
              </span>
            </li>
          </ul>
          {userMembershipCheck ? (
            <div className='absolute w-full h-full bg-transparent backdrop-blur-sm top-0 left-0 rounded-lg text-3xl font-bold text-center flex items-center justify-center -rotate-45'> Active Membership</div>
          ) : (
            <Button
              onClick={()=>toast("Payment Integretion Is Not Add so Use Test Mode")}
              type="button"
              className="text-white Button focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            > 
              Choose plan
            </Button>
          )}
        </div>
        <div className="md:w-96 w-full relative max-w-sm p-4  bg-white border border-gray-900 rounded-xl  shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-4 text-xl font-medium text-center text-gray-500 dark:text-gray-400">
            Yearly Plan
          </h5>
          <div className="flex  text-gray-900 dark:text-white items-end justify-center">
            <span className="text-3xl font-semibold">&#x20b9;</span>
            <span className="text-5xl font-extrabold tracking-tight">1999</span>
            <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
              /month
            </span>
          </div>
          <ul role="list" className="space-y-5 my-7">
            <li className="flex">
              <span className="text-base font-normal flex gap-2 leading-tight text-gray-500 dark:text-gray-400 ms-3">
                <Check className="text-lime-500" /> Access All Course
              </span>
            </li>
            <li className="flex">
              <span className="text-base flex gap-2 font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                <Check className="text-lime-500" /> Free App Membership
              </span>
            </li>
            <li className="flex">
              <span className="text-base flex gap-2 font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                <Check className="text-lime-500" /> Email & Instagram DM Support
              </span>
            </li>
          </ul>
          <Button
          onClick={()=>toast("Payment Integretion Is Not Add so Use Test Mode")}
            type="button"
            className="text-white focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
          >
            Choose plan
          </Button>
        </div>
      </div>
      </div>
    )
  );
}

export default MembershipCard;
