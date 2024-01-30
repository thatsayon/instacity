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

function SideNavBar({ setCreate, clickMore, setClickMore }) {
  return (
    <nav className={`lg:p-2 p-4 `}>
      <div className="py-4 lg:pl-4">
        <h1 className={`text-3xl italic text-gray-700 lg:block hidden`}>
          InstaCity
        </h1>
        <img
          width={"35px"}
          src={instacityLogo}
          alt="Instacity logo"
          className="lg:hidden block"
        />
      </div>

      <div >
        <ul id="sidebar-link" className="flex flex-col justify-center lg:items-start items-stretch">
          <li>
            <NavLink to={"/"}>
              <div>
                <LuHome />
              </div>
              <span className="lg:block hidden"> Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/Search"}>
              <div>
                <IoSearchSharp />
              </div>
              <span className="lg:block hidden">Search</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/Explore"}>
              <div>
                <MdOutlineExplore />
              </div>
              <span className="lg:block hidden">Explore</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/Reels"}>
              <div>
                <BiMoviePlay />
              </div>

              <span className="lg:block hidden"> Reels</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/Message"}>
              <div>
                <AiOutlineMessage />
              </div>

              <span className="lg:block hidden"> Messages</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/Notification"}>
              <div>
                <IoMdNotificationsOutline />
              </div>
              <span className="lg:block hidden"> Notification</span>
            </NavLink>
          </li>
          <li>
            <button onClick={() => setCreate(true)}>
              <div>
                <IoCreateOutline />
              </div>

              <span className="lg:block hidden">Create</span>
            </button>
          </li>
          <li>
            <NavLink to={"/Profile"}>
              <div>
                <FaRegUserCircle />
              </div>
              <span className="lg:block hidden">Profile</span>
            </NavLink>
          </li>

          <li className="lg:mt-12 md:block hidden">
            <button onClick={() => setClickMore(!clickMore)}>
              <div>
                <IoMenuSharp />
              </div>

              <span className="lg:block hidden">More</span>
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
