import React from 'react';
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineCameraswitch } from "react-icons/md";
import { LuActivitySquare } from "react-icons/lu";
import { CiBookmark } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";
import { FaSun } from "react-icons/fa";
import { VscReport } from "react-icons/vsc";
import { Link } from 'react-router-dom';

function More({ setClickMore }) {
  return (
    <>

      <div
        onClick={(e) => {
          if (e.target !== e.currentTarget) {
            return;
          }
          setClickMore(false);
        }}
        className="fixed right-0 top-0 px-2 py-4 overflow-hidden scrollbar-hide  z-50 lg:left-[-66%] left-[-25%] bottom-0 justify-center items-center flex dropdown"
      >
        <div className=" scrollbar-hide overflow-hidden max-h-[95vh]  my-auto  bg-[#ffffff] dark:bg-current text-[#000000] dark:text-white font-bold shadow-md shadow-[#364e7e1a] max-w-xs mx-auto  w-full p-4 rounded-sm ">

          <div className='text-[#000000] font-normal'>
            <ul id='more-link'>
              <li>
                <Link to='/' >
                  <div>
                    <IoSettingsOutline />
                  </div>
                  <span>settings</span>
                </Link>
              </li>

              <li>
                <Link to='/' >
                  <div>
                    <LuActivitySquare />
                  </div>
                  <span>your activity</span>
                </Link>
              </li>

              <li>
                <Link to='/' >
                  <div>
                    <CiBookmark />
                  </div>
                  <span>Saved</span>
                </Link>
              </li>

              <li>
                <button>
                  <div>
                    <FaSun />
                  </div>
                  <span>Switch appearance</span>
                </button>
              </li>


              <li>
                <button>
                  <div>
                    <VscReport />
                  </div>
                  <span>Report a problem</span>
                </button>
              </li>

              <li>
                <button>
                  <div>

                    <MdOutlineCameraswitch />
                  </div>

                  <span>Switch account</span>
                </button>
              </li>

              <li>
                <button>
                  <div>
                    <IoLogOutOutline />
                  </div>

                  <span>Log out </span>
                </button>
              </li>


            </ul>
          </div>



        </div>
      </div>












    </>
  )
}

export default More