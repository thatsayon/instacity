import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { LuHome } from "react-icons/lu";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoCreateOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import instacityLogo from "../assets/LogoFolder/instaLogo.png";

function SideNavBar({ setCreate, clickMore, setClickMore}) {
  return (
    <nav className={`lg:p-2 p-4 dark:text-[#ffffff]  `}>
      <div className="pt-4 pb-10 lg:pl-4">
        <h1 className={`text-3xl italic text-gray-700 lg:block hidden dark:text-[#ffffff] `}>
          InstaCity
        </h1>
        <img
          width={"35px"}
          src={instacityLogo}
          alt="Instacity logo"
          className="lg:hidden block"
        />
      </div>

      <div>
        <ul id="sidebar-link"  >
          <li>
            <NavLink to={"/"}>
              <div>
                <LuHome />
              </div>
              <p className="lg:block hidden"> Home</p>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/Search"}>
              <div>
                <IoSearchSharp />
              </div>
              <p className="lg:block hidden">Search</p>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/Explore"}>
              <div>
                <MdOutlineExplore />
              </div>
              <p className="lg:block hidden">Explore</p>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/Reels"}>
              <div>
                <BiMoviePlay />
              </div>

              <p className="lg:block hidden"> Reels</p>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/Message"}>
              <div>
                <AiOutlineMessage />
             
              </div>

              <p className="lg:block hidden"> Messages</p>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/Notification"}>
              <div>
                <IoMdNotificationsOutline />
              </div>
              <p className="lg:block hidden"> Notification</p>
            </NavLink>
          </li>
          <li>
            <button className=" text-[#323436]" onClick={() => setCreate(true)}>
              <div className="dark:text-[#ffffff]">
                <IoCreateOutline />
              </div>

              <p className="lg:block hidden dark:text-[#ffffff]">Create</p>
            </button>
          </li>
          <li>
            <NavLink to={"/Profile"}>
              <div>
                <FaRegUserCircle />
              </div>
              <p className="lg:block hidden">Profile</p>
            </NavLink>
          </li>

          <li className="lg:mt-6 md:block hidden">
            <button onClick={() => setClickMore(!clickMore)}>
              <div  className="dark:text-[#ffffff]">
                <IoMenuSharp />
              </div>

              <p className="lg:inline hidden dark:text-[#ffffff]">More</p>
            </button>
          </li>
          <li className="md:hidden block">
            <button>
              <div>
                <IoSettingsOutline />
              </div>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default SideNavBar;
