"use client"
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import { Bell, HamIcon, HammerIcon, List, Menu, Navigation, Package, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function Header({togleSideBar}) {
  const {user,isLoaded} = useUser();
  const path = usePathname()
  const [dPath,setDPath]= useState('')
  useEffect(()=>{
    const part=path.split('/')
    setDPath(part[1])
  },[path])

  
  return (
    <div className="md:p-4 p-2 bg-white flex justify-between">
      <div className="group hidden sm:flex gap-2 border md:p-2 rounded-md items-center ">
        <Search className="group-hover:animate-bounce h-5 w-5"/>
        <input 
        type="text" 
        placeholder="Search..."
        className="outline-none" />
      </div>
      <div className="sm:hidden cursor-pointer flex items-center px-2">
        <Menu
        onClick={togleSideBar}
         className="font-bold text-lg "/>
      </div>
      <div className="sm:hidden font-bold capitalize  ">
        {dPath.replace('-',' ')}
      </div>
      <div className="flex gap-3 items-center">
        <div className="relative cursor-pointer text-gray-500  hidden md:block">
        <p className="h-2 w-2 bg-red-500 rounded-full animate-ping absolute right-0 top-0"></p>
        <Bell className="w-6 h-5"/>
        </div>
        {isLoaded&&user?
        <UserButton afterSignOutUrl="/courses"/>:
        <Link href={'/sign-in'}>
        <Button>Get Started</Button>
        </Link>
      }
      </div>
    </div>
  );
}

export default Header;
