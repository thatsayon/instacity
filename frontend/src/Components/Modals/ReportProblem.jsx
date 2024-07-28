import React, { useState, useRef } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { FaXmark } from "react-icons/fa6";
import useShareobj from "../../CustomHooks/useShareobj";
import { useToast } from "../../ContextApis/ToastContext";
import { Toaster } from "react-hot-toast";
import ReactLoading from "react-loading";

function ReportProblem({ onReport, onClickMore }) {
  const { ErrorToast, SuccessToast } = useToast();
  const [btnLoading, setbtnLoading] = useState(false);
  const [ReportText, setReportText] = useState("");
  const [Imagearray, setImagearray] = useState([]);
  const clickFile = useRef();
  const { report, user } = useShareobj() || {};

  const HandleAddFile = (e) => {
    if (e?.target?.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (upload) => {
        let img = new Image();
        img.src = upload?.target?.result;
        img.onload = () => {
          setImagearray([...Imagearray, img?.src]);
        };
      };
      reader.onerror = (error) => {
        console.log(error);
      };
    }
   
  };

  const HandleDelete = (img, index) => {
    for (let i = 0; i < Imagearray?.length; i++) {
      if (Imagearray[i] == img && i == index) {
        Imagearray.pop();
      }
    }

    setImagearray([...Imagearray]);
  };

  const submit = async () => {
    setbtnLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const obj = {
        report: ReportText,
      };

      report(obj)
        .then((res) => {
          if (res?.data) {
            SuccessToast("Report successfully");
            setReportText("");
            setImagearray([]);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } finally {
      setbtnLoading(false);
    }
  };

  return (
    <>
      <div
        onClick={(e) => {
          if (e.target !== e.currentTarget) {
            return;
          }
          onReport();
        }}
        className=" fixed overflow-scroll right-0 top-0 z-50 left-0 bottom-0 justify-center items-center flex dropdown bg-[#00000080] "
      >
        <div className="scrollbar-hide min-h-[55vh]  my-auto bg-[#ffffff] dark:bg-[#262626]  dark:text-[#ffffff] text-[#000000] shadow-lg z-50  dark:shadow-black max-w-md mx-auto py-4 w-full rounded-md ">
          <div className="text-[#000000] dark:text-[#ffffff] flex flex-row justify-between items-center border-b-2 dark:border-[#555555] px-2 pb-2 ">
            <div>
              <button
                onClick={() => {
                  onClickMore(), onReport();
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
                onClick={() => onReport()}
                className="text-[#000000] text-base font-semibold dark:text-[#ffffff]"
              >
                <RxCross2 />
              </button>
            </div>
          </div>
          <div className="px-1 mt-2">
            <div>
              <textarea
                onChange={(e) => {
                  setReportText(e.target.value);
                }}
                name="report"
                id="report"
                value={ReportText}
                className="w-full min-h-[30vh] dark:text-white outline-none border-2 bg-[#ffffff] transition-all duration-500 dark:bg-[#262626] dark:border-[#555555] p-1 dark:focus:border-[#1b74e4] focus:border-[#1b74e4] rounded-md "
              ></textarea>
            </div>
            <div className="my-2 flex items-center justify-between">
              <div>
                <button
                  disabled={!ReportText}
                  onClick={submit}
                  className="button-primary disabled:opacity-75"
                >
                  {btnLoading ? (
                    <ReactLoading
                      type="spokes"
                      height="20px"
                      width="20px"
                      color="#fff"
                    />
                  ) : (
                    "Send report"
                  )}
                </button>
              </div>
              <div>
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  className="hidden"
                  ref={clickFile}
                  onChange={HandleAddFile}
                />
                <button
                  onClick={() => {
                    clickFile?.current?.click();
                  }}
                  className="dark:bg-[#363636] bg-[#efefef] py-[8px] text-[#000000] dark:text-[#ffffff] px-[10px] rounded-md text-[14px] font-medium hover:opacity-70 "
                >
                  Add file
                </button>
              </div>
            </div>
          </div>

          {Imagearray.length > 0 && (
            <div className="w-full flex flex-row flex-wrap gap-2 px-1">
              
            
            
                {Imagearray.map((IMG, index) => (
                  <div
                    key={index}
                    className={` max-w-20 max-h-16 overflow-hidden relative`}
                  >
                    <p
                      onClick={() => HandleDelete(IMG, index)}
                      className="absolute cursor-pointer right-[2px] top-[2px] rounded-full bg-[#1a1a1acc] p-2 text-white font-normal text-sm"
                    >
                      <FaXmark />
                    </p>
                    <img src={IMG} alt="Report file" className="min-h-[60px]" />
                  </div>
                ))}
          
          
            </div>
          )}

          <p className="gray-style text-center dark:text-white max-w-sm mx-auto">
            Your Instacity username and browser information will be
            automatically included in your report.
          </p>
        </div>
        <Toaster position="bottom-left" reverseOrder={true} />
      </div>
    </>
  );
}

export default ReportProblem;

/**
 * NOTES
 * setReport ,setClickMore - Come from app component
 */
