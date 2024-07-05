"use client"
import GlobalApi from '@/app/_utils/GlobalApi'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect,useState } from 'react'

function SideBanners() {
    const [sideBannerList, setSideBannerList] = useState([])
    useEffect(()=>{
        GetSideBanner();
    },[])

    const GetSideBanner = async ()=>{
        GlobalApi.getSideBanner().then(res=>{
            // console.log(res)
            setSideBannerList(res?.sideBanners)
        })
    }
  return (
    <div className="grid grid-cols-1  gap-4 md:p-1">
    {sideBannerList.map((item, index) => (
        <div key={index} className="rounded-md cursor-pointer hover:shadow-lg transition-shadow duration-300">
            <Image
            priority    
                src={item?.banner?.url}
                width={220}
                height={220}
                className="banner-image bg-center bg-cover h-64 sm:h-32   w-full rounded-lg border border-gray-300"
                onClick={() => { window.open(item?.url) }}
                alt="sideBanner"
            />
        </div>
    ))}
</div>
  )
}

export default SideBanners
