import React, { useEffect, useState } from "react";
import useShareobj from "../CustomHooks/useShareobj";
import { IoMdSettings } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { IoMdImages } from "react-icons/io";
import { Link, NavLink, Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { FaRegBookmark } from "react-icons/fa";
import { LuUserSquare2 } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa";
import SettingsModal from "./Modals/SettingsModal";
import anynomoususer from '../assets/Anynomous.webp';


function Profile() {
  const { user, image_url } = useShareobj();
  const [isSettings, setSettings] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();




  useEffect(() => {
    navigate('/Profile/Post')
  }, [location.pathname == '/Profile'])

  return (
    <section className="min-h-screen py-8 lg:px-[4%] px-[1%]">
      <div className="md:block hidden">
        <div className="flex flex-row lg:gap-14 md:gap-8 gap-0 items-center justify-center">
          <div>
            <img className="lg:w-40 w-28 rounded-full" src={user?.profile_pic ? image_url + user.profile_pic : anynomoususer} alt={user?.username || "userPhoto"} />
          </div>

          <div className="flex flex-col gap-4 dark:text-white">
            <div className="flex flex-row gap-6 items-start text-black font-medium dark:text-white">
              <h1 className="py-[8px]">{user?.username || "anynomous"}</h1>

              <button onClick={() => { navigate('/Settings/EditProfile') }} className="dark:bg-[#363636] bg-[#efefef] py-[8px] text-[#000000] dark:text-[#ffffff] px-[10px] rounded-md text-[14px] font-medium hover:opacity-90 ">Edit profile</button>
              <button className="dark:bg-[#363636] bg-[#efefef] py-[8px] text-[#000000] dark:text-[#ffffff] px-[10px] rounded-md text-[14px] font-medium hover:opacity-90 ">view archive</button>

              <button onClick={() => { setSettings(true) }} className="py-[8px] dark:text-white text-xl">
                <IoMdSettings />
              </button>
            </div>

            <div className="flex flex-row gap-4 items-start">
              <h1><span className="font-semibold">0</span> post</h1>
              <h1><span className="font-semibold">0</span> followers</h1>
              <h1><span className="font-semibold">0</span> following</h1>
            </div>
            <div className="mt-2 flex flex-col gap-2 dark:text-white">
              <h1 className="text-black font-semibold first-letter:uppercase dark:text-white">{user?.full_name}</h1>
              {/* ---bio-- */}
              <p className="text-sm font-normal">
                being the right person is more important than finding the right
                person !
              </p>
              {/* --social-account-link-- */}
              <div>
                <ul>
                  <Link to='/' className="flex flex-row gap-1 font-medium text-[#00376b] dark:text-white text-sm hover:underline "><span className="text-[#316FF6] text-xl dark:text-white"><FaFacebook /></span> Facebook profile</Link>

                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-start">
          <div className="flex flex-col items-center gap-2">
            <button className="border-2 dark:border-[#555555] p-9 rounded-full text-3xl">
              <FiPlus />
            </button>
            <p className="text-sm">New</p>
          </div>
        </div>

        <p className="border-[1px] dark:border-[#262626] w-full mt-5"></p>
        {/* ----post-tagged--saveee---section-- */}
        <div className="mt-3">
          <div >
            <ul className="flex flex-row gap-8 items-center justify-center">
              <li>
                <NavLink className="flex items-center gap-1 text-[#737373] text-base tracking-wide uppercase" to="/Profile/Post">
                  <span className="text-xl"><IoMdImages /></span>
                  posts
                </NavLink>
              </li>
              <li>
                <NavLink className="flex items-center gap-1 text-[#737373] text-base tracking-wide uppercase" to="/Profile/Saved">
                  <span className="text-xl"><FaRegBookmark /></span>
                  saved
                </NavLink>
              </li>
              <li>
                <NavLink className="flex items-center gap-1 text-[#737373] text-base tracking-wide uppercase" to="/Profile/Tagged">
                  <span className="text-xl"><LuUserSquare2 /></span>

                  Tagged
                </NavLink>
              </li>
            </ul>
          </div>


          <div>
            <Outlet />
          </div>

          {/* --footer-- */}
          <footer className="mt-9 text-center">
            <ul id="footer-ul" className="w-fit mx-auto">
              <li>
                <Link to={"/Notfound"}>About ,</Link>
              </li>
              <li>
                <Link to={"/Notfound"}>Help ,</Link>
              </li>
              <li>
                <Link to={"/Notfound"}>press ,</Link>
              </li>
              <li>
                <Link to={"/Notfound"}>jobs ,</Link>
              </li>
              <li>
                <Link to={"/Notfound"}>privacy ,</Link>
              </li>
              <li>
                <Link to={"/Notfound"}>Terms ,</Link>
              </li>
              <li>
                <Link to={"/Notfound"}>Location ,</Link>
              </li>
              <li>
                <Link to={"/Notfound"}>instagram ,</Link>
              </li>
              <li>
                <Link to={"/Notfound"}>Migen ,</Link>
              </li>
              <li>
                <Link to={"/Notfound"}>Blog , </Link>
              </li>
              <li>
                <Link to={"/Notfound"}>contact uploading</Link>
              </li>
            </ul>

            <div className="mt-2 copy-write">
              <span>&copy; 2024 Instacity from Midgen</span>
            </div>
          </footer>


        </div>
      </div>
      {
        isSettings && <SettingsModal setSettings={setSettings} />
      }
    </section>
  );
}

export default Profile;
