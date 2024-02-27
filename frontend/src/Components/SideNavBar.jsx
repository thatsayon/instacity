import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
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
import '../CustomStyles/Sidebar.css';
import useShareobj from "../CustomHooks/useShareobj";

function SideNavBar({ setCreate, clickMore, setClickMore, setNotification, isNotification, isSearch, setSearch }) {
  const navigate = useNavigate();
  const { user, image_url } = useShareobj();



  return (
    <>
      <nav className={`lg:p-2 p-4 dark:text-[#ffffff] overflow-hidden md:block hidden`}>
        <div onClick={() => { navigate('/') }} className=" py-4 cursor-pointer ">
          <h1 className={`text-3xl italic text-gray-700 dark:text-[#ffffff] transition-all duration-500 ${isNotification || isSearch ? "opacity-0 h-0 w-0" : 'opacity-0 h-0 w-0 lg:w-fit lg:h-fit lg:opacity-100'} `}>
            InstaCity
          </h1>
          <img
            width="35px"
            src={instacityLogo}
            alt="Instacity logo"
            className={` transition-all  ${isNotification || isSearch ? "opacity-100 h-fit w-[35px]" : 'lg:opacity-0 lg:h-0 lg:w-0 opacity-100 h-fit w-[35px]'} lg:duration-500`}
          />
        </div>

        <div>
          <ul id="sidebar-link"  >
            <li>
              <NavLink id="Home" to={"/"} onClick={() => { setSearch(false) , setNotification(false)}}>
                <div className="dark:text-white">
                  <LuHome />
                </div>
                <p className={` transition-all  ${isNotification || isSearch ? "opacity-0 h-0 w-0 absolute duration-0" : 'opacity-0 h-0 w-0 absolute lg:opacity-100 lg:h-auto lg:w-auto lg:static duration-700'} dark:text-white`}> Home</p>

              </NavLink>
            </li>
            <li>
              <button id="Search" onClick={() => { setSearch(!isSearch) , setNotification(false)}}>
                <div className={`${isSearch && 'lg:text-[#0095f6] lg:dark:text-[#0095f6]'}  dark:text-white`}>
                  <IoSearchSharp />
                </div>
                <p className={` transition-all  ${isNotification || isSearch ? "opacity-0 h-0 w-0 absolute duration-0" : 'opacity-0 h-0 w-0 absolute lg:opacity-100 lg:h-auto lg:w-auto lg:static duration-700'} dark:text-white`}>Search</p>
              </button>
            </li>
            <li>
              <NavLink id="Explore" to={"/Explore"} onClick={() => { setSearch(false) , setNotification(false)}}>
                <div>
                  <MdOutlineExplore />
                </div>
                <p className={` transition-all  ${isNotification || isSearch ? "opacity-0 h-0 w-0 absolute duration-0" : 'opacity-0 h-0 w-0 absolute lg:opacity-100 lg:h-auto lg:w-auto lg:static duration-700'} dark:text-white`}>Explore</p>
              </NavLink>
            </li>
            <li>
              <NavLink id="Reels" to={"/Reels"} onClick={() => { setSearch(false) , setNotification(false)}}>
                <div>
                  <BiMoviePlay />
                </div>

                <p className={` transition-all  ${isNotification || isSearch ? "opacity-0 h-0 w-0 absolute duration-0" : 'opacity-0 h-0 w-0 absolute lg:opacity-100 lg:h-auto lg:w-auto lg:static duration-700'} dark:text-white`}> Reels</p>
              </NavLink>
            </li>
            <li>
              <NavLink id="Message" to={"/Message"} onClick={() => { setSearch(false) , setNotification(false)}}>
                <div>
                  <AiOutlineMessage />

                </div>

                <p className={` transition-all  ${isNotification || isSearch ? "opacity-0 h-0 w-0 absolute duration-0" : 'opacity-0 h-0 w-0 absolute lg:opacity-100 lg:h-auto lg:w-auto lg:static duration-700'} dark:text-white`}> Messages</p>
              </NavLink>
            </li>

            <li>
              <button onClick={() => { setNotification(!isNotification),setSearch(false) }} className={`  ${isNotification || isSearch && 'bg-[#0000000d] lg:bg-inherit  dark:bg-[#5555554d] lg:dark:bg-inherit'} dark:text-white`}>
                <div id="Notification" className={`${isNotification && 'lg:text-[#0095f6] lg:dark:text-[#0095f6]'}  dark:text-white`} >
                  <IoMdNotificationsOutline />
                </div>
                <p className={` transition-all  ${isNotification || isSearch ? "opacity-0 h-0 w-0 absolute duration-0" : 'opacity-0 h-0 w-0 absolute lg:opacity-100 lg:h-auto lg:w-auto lg:static duration-700'} dark:text-white`}> Notification</p>
              </button>
            </li>
            <li>
              <button className=" text-[#323436]" onClick={() => setCreate(true)}>
                <div className="dark:text-[#ffffff]">
                  <IoCreateOutline />
                </div>

                <p className={` transition-all  ${isNotification || isSearch ? "opacity-0 h-0 w-0 absolute duration-0" : 'opacity-0 h-0 w-0 absolute lg:opacity-100 lg:h-auto lg:w-auto lg:static duration-700'} dark:text-white`}>Create</p>
              </button>
            </li>
            <li>
              <NavLink id="Profile" to={"/Profile"} onClick={() => { setSearch(false) , setNotification(false)}}>
                {
                  user?.profile_pic ?
                    <img
                      src={image_url + user?.profile_pic}
                      alt="User Profile"
                      className="w-7 h-7 rounded-full dark:border-2 border-white"
                    />
                    : <div>
                      <FaRegUserCircle />
                    </div>
                }
                <p className={` transition-all  ${isNotification || isSearch ? "opacity-0 h-0 w-0 absolute duration-0" : 'opacity-0 h-0 w-0 absolute lg:opacity-100 lg:h-auto lg:w-auto lg:static duration-700'} dark:text-white`}>Profile</p>
              </NavLink>
            </li>

            <li className="lg:mt-6">
              <button onClick={() => setClickMore(!clickMore)}>
                <div className="dark:text-[#ffffff]">
                  <IoMenuSharp />
                </div>

                <p className={` transition-all  ${isNotification || isSearch ? "opacity-0 h-0 w-0 absolute duration-0" : 'opacity-0 h-0 w-0 absolute lg:opacity-100 lg:h-auto lg:w-auto lg:static duration-700'} dark:text-white`}>More</p>
              </button>
            </li>

          </ul>
        </div>
      </nav>

      <nav className="md:hidden block w-full">
        <div>
          <h1 className={`text-2xl text-gray-700 dark:text-[#ffffff]  `}>
            Instacity
          </h1>

        </div>

      </nav>





    </>
  );
}

export default SideNavBar;


/**
 * NOTES ,
 * 
 * setCreate, clickMore, setClickMore , setNotification , isNotification,isSearch,setSearch - they all props come from app component.
 * 
 * 
 * **/