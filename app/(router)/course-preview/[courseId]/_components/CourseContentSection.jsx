import { Lock, Play } from "lucide-react";
import React, { useState } from "react";

function CourseContentSection({
  courseInfo,
  isUserAllredyEnrollCourse,
  watchMode = false,
  setActiveChapterIndex,
  completedChapter
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  //  use check chapter is completed
  const checkIsChapterCompleted = (chapterId) => {
    return completedChapter.find(item=>item.chapterId==chapterId) 
  };

  return (
    <div className="p-2 bg-white min-h-screen rounded-md ">
      <h2 className="text-xl font-bold">Contents</h2>
      <div>
        {courseInfo?.chapter?.map((item, index) => (
          <div className="p-2" key={index}>
            <h2
              className={`flex gap-3 cursor-pointer min-h-12 font-medium hover:bg-primary
             hover:text-white p-2 border  rounded-md 
             items-center px-2 justify-between
             ${activeIndex == index && "bg-primary text-white hover:opacity-90"}
             ${isUserAllredyEnrollCourse && ""}
             ${
               watchMode &&
               checkIsChapterCompleted(item.id) &&
               "bg-lime-400 text-violet-800"
             }
             `}
              onClick={() => {
                if (watchMode) {
                  setActiveChapterIndex(index);
                  setActiveIndex(index);
                }
              }}
            >
              <span>
                {index + 1}. {item.name}
              </span>
              <span>
                {activeIndex == index ||
                (isUserAllredyEnrollCourse && watchMode) ? (
                  <Play className="h-6 w-6" />
                ) : (
                  <Lock className="h-5 w-5" />
                )}
              </span>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseContentSection;
