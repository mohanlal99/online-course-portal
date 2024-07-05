import { BookAIcon, BookDashed, BookHeart, GrabIcon, LogIn, SigmaIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800 rounded-md">
    <div className="mx-auto max-w-screen-xl text-center">
      <Link href="#" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
       <BookHeart/>
       Online Course Portal
      </Link>
      <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
      
        <li>
          <Link href="/courses" className="mr-4 hover:underline md:mr-6">Courses</Link>
        </li>
        <li>
          <Link href="/store" className="mr-4 hover:underline md:mr-6">Store</Link>
        </li>
        <li>
          <Link href="/contact" className="mr-4 hover:underline md:mr-6">Contact</Link>
        </li>
      </ul>
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023-2024 <Link href="/" className="hover:underline">Online Course Portal</Link>. All Rights Reserved.</span>
    </div>
  </footer>
  )
}

export default Footer
