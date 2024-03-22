import React from "react";

function DiscardPost({ setDiscardPost, setCreate }) {
  return (
    <>
      <div className=" fixed right-0 top-0 z-50 left-0 bottom-0 justify-center items-center flex bg-[#00000080] ">
        <div className="scrollbar-hide min-h-[25vh]  my-auto bg-[#ffffff] dark:bg-[#262626]  dark:text-[#ffffff] text-[#000000] shadow-lg z-50  dark:shadow-black max-w-sm mx-auto py-4 w-full rounded-md ">
          <div className="text-text mx-auto flex items-center justify-center flex-col mb-6">
            <h1 className="text-base font-medium text-black dark:text-white">Discard post?</h1>
            <p className="text-sm font-normal text-[#737373]">If you leave, your edits won't be saved.</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <p onClick={() => { setCreate(false),setDiscardPost(false)}} className="border-t-2 dark:border-[#555555] w-full text-center pt-2 text-red-500 font-medium text-sm cursor-pointer">Discard</p>
            <p onClick={() => { setDiscardPost(false) }} className="border-t-2 dark:border-[#555555] dark:text-white w-full text-center pt-2 font-normal text-black cursor-pointer text-sm">cencel</p>
          </div>

        </div>
      </div>
    </>
  );     
}

export default DiscardPost;


/**
 * NOTES
 * setDiscardPost , setCreate This props come from app component !
 * 
 * **/