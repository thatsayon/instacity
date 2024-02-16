import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

function ReportProblem({ setReport, setClickMore }) {
  return (
    <>
      <div
        onClick={(e) => {
          if (e.target !== e.currentTarget) {
            return;
          }
          setReport(false);
        }}
        className=" fixed overflow-scroll right-0 top-0 z-50 left-0 bottom-0 justify-center items-center flex dropdown bg-[#00000080] "
      >
        <div className="scrollbar-hide min-h-[55vh]  my-auto bg-[#ffffff] dark:bg-[#262626]  dark:text-[#ffffff] text-[#000000] shadow-lg z-50  dark:shadow-black max-w-md mx-auto py-4 w-full rounded-md ">
          <div className="text-[#000000] dark:text-[#ffffff] flex flex-row justify-between items-center border-b-2 dark:border-[#555555] px-2 pb-2 ">
            <div>
              <button
                onClick={() => {
                  setClickMore(true), setReport(false);
                }}
                className="text-[#000000] text-xl font-semibold dark:text-[#ffffff]"
              >
                <MdOutlineKeyboardArrowLeft />
              </button>
            </div>

            <div>
              <p className="text-base font-medium dark:text-[#ffffff] text-[#000000] ">
                Report a problem
              </p>

            </div>
            <div>
              <button
                onClick={() => setReport(false)}
                className="text-[#000000] text-base font-semibold dark:text-[#ffffff]"
              >
                <RxCross2 />
              </button>
            </div>
          </div>
          <div className="px-1 mt-2">
            <div>
              <textarea name="report" id="report" className="w-full min-h-[30vh] dark:text-white outline-none border-2 bg-[#ffffff] transition-all duration-500 dark:bg-[#262626] dark:border-[#555555] p-1 dark:focus:border-[#1b74e4] focus:border-[#1b74e4] rounded-md "></textarea>
            </div>
            <div className="my-2 flex items-center justify-between">
              <div>
                <button className="button-primary">Send report</button>
              </div>
              <div>
                <button className="dark:bg-[#363636] bg-[#efefef] py-[8px] text-[#000000] dark:text-[#ffffff] px-[10px] rounded-md text-[14px] font-medium hover:opacity-70 ">Add file</button>
              </div>
            </div>
          </div>

          <p className="gray-style text-center dark:text-white max-w-sm mx-auto">Your Instacity username and browser information will be automatically included in your report.</p>
        </div>

      </div>
    </>
  );
}

export default ReportProblem;

/**
 * NOTES
 * setReport ,setClickMore - Come from app component
 */
