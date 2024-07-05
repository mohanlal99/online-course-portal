import { SignUp } from "@clerk/nextjs";
import { Sigma } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (<section className="bg-white">
    <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
      <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
        <img
          alt=""
          src="/background.png"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
  
        <div className="hidden lg:relative lg:block lg:p-12">
          <Link className="block text-white" href="#">
            <span className="sr-only">Home</span>
            <Image src={'/logo.svg'} width={100} height={0} alt="logo"/>
          </Link>
  
          <h2 className="mt-6 text-xl font-bold text-white sm:text-2xl md:text-3xl">
          Welcome to Online Course Portal🦑
          </h2>
  
          <p className="mt-4 leading-relaxed text-white/90">
          Signup And Login And Buy Membership Or Enroll Course 
          </p>
        </div>
      </section>
  
      <main
        className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
      >
        <div className="max-w-xl lg:max-w-3xl">
          <div className="relative -mt-16 block lg:hidden">
            <Link
              className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
              href="#"
            >
              <span className="sr-only">Home</span>
             <Sigma/>
            </Link>
  
            <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Welcome to Online Course Portal🦑
            </h1>
  
            <p className="mt-4 leading-relaxed text-gray-500">
            Signup And Login And Buy Membership Or Enroll Course
            </p>
          </div>
          <SignUp/>
        </div>
        </main>
  </div>
</section>);
}