import React from 'react';
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineCameraswitch } from "react-icons/md";
import { LuActivitySquare } from "react-icons/lu";
import { CiBookmark, CiBowlNoodles } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";
import { FaSun } from "react-icons/fa";
import { VscReport } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import '../CustomStyles/More.css';
import useShareobj from '../CustomHooks/useShareobj';


function More({ setClickMore, setDark, setSwitchaccount, setReport, }) {


  const { Logout } = useShareobj();





  return (
    <>

      <div
        onClick={(e) => {
          if (e.target !== e.currentTarget) {
            return;
          }
          setClickMore(false);
        }}
        className="fixed right-0 top-0 px-2 py-4 overflow-hidden scrollbar-hide  z-50 lg:left-[-600px] md:left-[-322px] bottom-0 justify-center items-center flex dropdown"
      >
        <div className=" scrollbar-hide overflow-hidden max-h-[95vh]  my-auto  bg-[#ffffff] text-[#000000] dark:bg-[#262626] dark:text-[#ffffff]   font-bold shadow-md shadow-[#364e7e1a] max-w-xs mx-auto  w-full p-4 rounded-md">

          <div className='dark:bg-[#262626] dark:text-[#ffffff] text-[#000000] font-normal '>
            <ul id='more-link'>
              <li className='dark:hover:bg-[#e0f1ff]'>
                <Link to='/Settings/EditProfile' onClick={()=> setClickMore(false)}>
                  <div>
                    <IoSettingsOutline />
                  </div>
                  settings
                </Link>
              </li>

              <li>
                <Link to='/' >
                  <div>
                    <LuActivitySquare />
                  </div>
                  your activity
                </Link>
              </li>

              <li>
                <Link to='/' >
                  <div>
                    <CiBookmark />
                  </div>
                  Saved
                </Link>
              </li>

              <li >
                <button onClick={() => { setDark(true), setClickMore(false) }} >
                  <div>
                    <FaSun />
                  </div>
                  Switch appearance
                </button>
              </li>


              <li>
                <button onClick={() => { setReport(true), setClickMore(false) }}>
                  <div>
                    <VscReport />
                  </div>
                  Report a problem
                </button>
              </li>

              <li>
                <button onClick={() => { setSwitchaccount(true), setClickMore(false) }}>
                  <div>

                    <MdOutlineCameraswitch />
                  </div>

                  Switch account
                </button>
              </li>

              <li>
                <button onClick={() => { setClickMore(false), Logout() }}>
                  <div>
                    <IoLogOutOutline />
                  </div>

                  Log out
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




/**
 * NOTES 
 * setClickMore, setDark, setSwitchaccount, setReport , - those state comes form app component.
 *
 */