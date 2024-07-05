"use client";
import { useUser } from "@clerk/nextjs";
import {
  BadgeIcon,
  BookAIcon,
  BookIcon,
  Cross,
  GraduationCap,
  Indent,
  LayoutGrid,
  Store,
  Contact,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function SideNav({togleSideBar}) {
  const { user } = useUser();
  const menu = [
    {
      id: 11,
      name: "Dashboard",
      icon: <LayoutGrid />,
      path: "/dashboard",
      auth: user,
    },
    {
      id: 1,
      name: "All Cousers",
      icon: <BookAIcon />,
      path: "/courses",
      auth: true,
    },
    {
      id: 2,
      name: "Store",
      icon: <Store />,
      path: "/store",
      auth: true,
    },
    {
      id: 3,
      name: "Membership",
      icon: <BadgeIcon />,
      path: "/membership",
      auth: user,
    },
    {
      id: 3,
      name: "Contact",
      icon: <Contact/>,
      path: "/contact",
      auth: true,
    },
  ];

  const path = usePathname();

  return (
    <div className="p-5 h-screen bg-white  shadow-md flex gap-2 flex-col z-50">
      <div className="flex justify-between items-center">
      <Image
      priority 
        src="/logo.svg"
        alt="logo"
        width={50} // Set desired width
        height={0} // Setting height to 0 initially
        style={{ height: "auto" }} // Maintain aspect ratio
      />{" "} 
        <div className="font-bold text-lg rounded-full p-2 cursor-pointer hover:scale-105">
          <X
          className="sm:text-white"
          onClick={togleSideBar}
          />
        </div>
      </div>
      <hr className="mt-4"></hr>
      <div className="mt-2">
        {menu?.map(
          (item, index) =>
            item.auth && (
              <Link key={index} href={item.path}>
                <div
                  className={`group flex mt-1 md:pl-3 text-gray-500 gap-2 p-4 px-1 text-[18px] cursor-pointer
               hover:bg-primary rounded-md hover:text-white transition-all ease-in-out duration-200
               ${item.path == path ? "bg-primary text-white" : ""}
               `}
                  key={index}
                >
                  <span className="group-hover:animate-bounce">
                    {item.icon}
                  </span>
                  <h2>{item.name}</h2>
                </div>
              </Link>
            )
        )}
      </div>
    </div>
  );
}

export default SideNav;
