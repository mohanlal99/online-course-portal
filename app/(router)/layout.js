"use client"
import React, { useEffect, useState } from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";
import Footer from "./_components/Footer";


function layout({ children }) {
    const [sideNavTogle,setSideNavTogle] = useState(false)
    const togleSideBar = ()=>{
      setSideNavTogle(!sideNavTogle)
    }
    useEffect(()=>{
      setTimeout(() => {
        setSideNavTogle(false)
      }, 3000);
    },[sideNavTogle])

  return (
    <div className="relative">
      <div className={`sm:w-64 ${sideNavTogle?'w-[80%]':'hidden'}  fixed sm:block`}>
        <SideNav togleSideBar={togleSideBar}/>
      </div>
      <div className="sm:ml-64">
        <Header togleSideBar={togleSideBar}/>
        {children}
      </div>
      <div className="sm:ml-64 p-2">
      <Footer/> 
      </div>
    </div>
  );
}

export default layout;
