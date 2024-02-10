import React from "react";
import ReactLoading from "react-loading";

function LogoutModal() {
  return (
    <div className=" fixed right-0 top-0 z-50 left-0 bottom-0 justify-center items-center flex dropdown">
      <div className="scrollbar-hide min-h-[15vh]  my-auto bg-[#ffffff] dark:bg-[#262626]  dark:text-[#ffffff] text-[#000000] shadow-lg z-50  dark:shadow-black max-w-xs mx-auto py-4 w-full rounded-md ">
        <div className="flex items-center justify-center min-h-[10vh] pb-5">
          <ReactLoading type="spokes" height="30px" width="30px" color="#737373" />
        </div>
        <div className="text-[#000000] dark:text-[#ffffff] text-center border-t-2 dark:border-[#555555] w-full pt-2">
          Logging out
        </div>
      </div>
    </div>
  );
}

export default LogoutModal;
