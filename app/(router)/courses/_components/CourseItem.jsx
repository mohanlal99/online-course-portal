"use client"
import { Book } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function CourseItem({ course }) {
  const router  = useRouter();
  return (
    <div className="group bg-gray-100 border border-gray-900 rounded-lg shadow-xl p-1 cursor-pointer">
      <div className="md:h-32 overflow-hidden">
        <Image
          priority
          className="rounded-t-md md:h-full "
          src={course?.banner?.url}
          width={500}
          height={250}
          alt="banner"
        />
      </div>

      <div className="flex flex-col gap-2 p-2 ">
        <h2 className="font-medium text-sm h-12">{course?.name}</h2>
        <div className="flex justify-between p-1">
          <h2 className="text-gray-500 text-[15px]">{course?.author}</h2>
          <h2 className="group-hover:animate-bounce font-bold text-red-500">
            {course?.free ? "Free" : "Paid"}
          </h2>
        </div>
        {course?.chapter?.length == 0 ? (
          <div
          onClick={()=>router.push('https://web.codingseekho.in/new-courses/7-zero-to-hero-batch-20-course-by-prof-vikas-singh')}
          >
            <div className="flex items-center hover:bg-primary hover:text-white rounded-md text-gray-700 gap-2 border border-gray-400 p-1 justify-center">
              <Image
                priority
                src={"/youtube.png"}
                width={20}
                height={20}
                alt="youtube"
              />{" "}
              <span>Watch</span>
            </div>
          </div>
        ) : (
          <div className="flex items-center hover:bg-primary hover:text-white rounded-md text-gray-700 gap-2 border p-1 justify-center">
            <Book /> <span>{course?.totalChapters} Chapters</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseItem;
