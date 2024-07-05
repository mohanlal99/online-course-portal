import React from 'react'
import MembershipCard from './_components/MembershipCard'
import { useUser } from '@clerk/nextjs'

function Membership() {
  return (
    <div className='grid place-items-center h-[85vh]'>
        <MembershipCard/>  
    </div>
  )
}

export default Membership
