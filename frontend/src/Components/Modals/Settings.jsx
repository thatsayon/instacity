import React from "react";
import { Link } from "react-router-dom";
import '../../CustomStyles/Settings.css'

function Settings({ setSettings }) {
  return (
    <>
      <div
        onClick={(e) => {
          if (e.target !== e.currentTarget) {
            return;
          }
          setSettings(false);
        }}
        className=" fixed overflow-scroll right-0 top-0 z-50   left-0 bottom-0 justify-center items-center flex dropdown bg-[#00000080] "
      >
        <div className="scrollbar-hide min-h-[70vh]  my-auto bg-[#ffffff] dark:bg-[#262626]  dark:text-[#ffffff] text-[#000000] shadow-lg z-50  dark:shadow-black max-w-sm mx-auto py-4 w-full rounded-md ">

            <ul id="settings-ul-style">
                <li>
                    <Link to='/'>Change password</Link>
                </li>
                <li>
                    <Link to='/'>QR Code</Link>
                </li>
                <li>
                    <Link to='/'>Apps & Websites </Link>
                </li>
                <li>
                    <Link to='/'>Notifications</Link>
                </li>
                <li>
                    <Link to='/'>Privacy & Security</Link>
                </li>
                <li>
                    <Link to='/'>Midgen Verified</Link>
                </li>
                <li>
                    <Link to='/'>Login Activity</Link>
                </li>
                <li>
                    <Link to='/'>Email from Instacity</Link>
                </li>
                <li>
                    <button>Log out</button>
                </li>
                <li className="border-none">
                    <Link to='/'>Cancel </Link>
                </li>
               
            </ul>




        </div>
      </div>
    </>
  );
}

export default Settings;
