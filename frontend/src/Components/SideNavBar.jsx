import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { LuHome } from "react-icons/lu";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { RiMessengerLine } from "react-icons/ri";
import { IoHeartOutline } from "react-icons/io5";
import { IoCreateOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import instacityLogo from "../assets/LogoFolder/instaLogo.png";
import '../CustomStyles/Sidebar.css';
import useShareobj from "../CustomHooks/useShareobj";

function SideNavBar({ setCreate, isCreate, clickMore, setClickMore, setNotification, isNotification, isSearch, setSearch }) {
  const navigate = useNavigate();
  const { user, image_url } = useShareobj();



  return (
    <>
      <nav className={`px-2 dark:text-[#ffffff] overflow-hidden md:block hidden`}>
        <div onClick={() => { navigate('/') }} className=" py-4 cursor-pointer ">
          <h1 className={`text-2xl font-bold text-gray-700 dark:text-[#ffffff] transition-all duration-500 ${isNotification || isSearch ? "opacity-0 h-0 w-0" : 'opacity-0 h-0 w-0 lg:w-fit lg:h-fit lg:opacity-100'} `}>
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
              <NavLink id="Home" to={"/"} onClick={() => { setSearch(false), setNotification(false) }}>
                <div className="dark:text-white">
                  <LuHome />
                </div>
                <p className={` transition-all  ${isNotification || isSearch ? "opacity-0 h-0 w-0 absolute duration-0" : 'opacity-0 h-0 w-0 absolute lg:opacity-100 lg:h-auto lg:w-auto lg:static duration-700'} dark:text-white`}> Home</p>

              </NavLink>
            </li>
            <li>
              <button id="Search" onClick={() => { setSearch(!isSearch), setNotification(false) }}>
                <div className={`${isSearch && 'lg:text-[#0095f6] lg:dark:text-[#0095f6]'}  dark:text-white`}>
                  <IoSearchSharp />
                </div>
                <p className={` transition-all  ${isNotification || isSearch ? "opacity-0 h-0 w-0 absolute duration-0" : 'opacity-0 h-0 w-0 absolute lg:opacity-100 lg:h-auto lg:w-auto lg:static duration-700'} dark:text-white`}>Search</p>
              </button>
            </li>
            <li>
              <NavLink id="Explore" to={"/Explore"} onClick={() => { setSearch(false), setNotification(false) }}>
                <div>
                  <MdOutlineExplore />
                </div>
                <p className={` transition-all  ${isNotification || isSearch ? "opacity-0 h-0 w-0 absolute duration-0" : 'opacity-0 h-0 w-0 absolute lg:opacity-100 lg:h-auto lg:w-auto lg:static duration-700'} dark:text-white`}>Explore</p>
              </NavLink>
            </li>
            <li>
              <NavLink id="Reels" to={"/Reels"} onClick={() => { setSearch(false), setNotification(false) }}>
                <div>
                  <BiMoviePlay />
                </div>

                <p className={` transition-all  ${isNotification || isSearch ? "opacity-0 h-0 w-0 absolute duration-0" : 'opacity-0 h-0 w-0 absolute lg:opacity-100 lg:h-auto lg:w-auto lg:static duration-700'} dark:text-white`}> Reels</p>
              </NavLink>
            </li>
            <li>
              <NavLink id="Message" to={"/Message"} onClick={() => { setSearch(false), setNotification(false) }}>
                <div>

                  <RiMessengerLine />

                </div>

                <p className={` transition-all  ${isNotification || isSearch ? "opacity-0 h-0 w-0 absolute duration-0" : 'opacity-0 h-0 w-0 absolute lg:opacity-100 lg:h-auto lg:w-auto lg:static duration-700'} dark:text-white`}> Messages</p>
              </NavLink>
            </li>

            <li>
              <button onClick={() => { setNotification(!isNotification), setSearch(false) }} className={`  ${isNotification || isSearch && 'bg-[#0000000d] lg:bg-inherit  dark:bg-[#5555554d] lg:dark:bg-inherit'} dark:text-white`}>
                <div id="Notification" className={`${isNotification && 'lg:text-[#0095f6] lg:dark:text-[#0095f6]'}  dark:text-white`} >
                  <IoHeartOutline />
                </div>
                <p className={` transition-all  ${isNotification || isSearch ? "opacity-0 h-0 w-0 absolute duration-0" : 'opacity-0 h-0 w-0 absolute lg:opacity-100 lg:h-auto lg:w-auto lg:static duration-700'} dark:text-white`}> Notification</p>
              </button>
            </li>
            <li>
              <button className=" text-[#323436]" onClick={() => setCreate(!isCreate)}>
                <div className="dark:text-[#ffffff]">
                  <IoCreateOutline />
                </div>

                <p className={` transition-all  ${isNotification || isSearch ? "opacity-0 h-0 w-0 absolute duration-0" : 'opacity-0 h-0 w-0 absolute lg:opacity-100 lg:h-auto lg:w-auto lg:static duration-700'} dark:text-white`}>Create</p>
              </button>
            </li>
            <li>
              <NavLink id="Profile" to={"/Profile"} onClick={() => { setSearch(false), setNotification(false) }}>
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

            <li className="lg:mt-3">
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





      {/* ---------small-screenn-showw--------------- */}

      <nav className="md:hidden block w-full dark:text-[#ffffff] ">
        <div className="px-[1%] pt-2 flex flex-row items-center justify-between">
          <h1 className={`text-2xl text-[#0095f6] italic`}>
            Instacity
          </h1>
          <div>
            <ul className="flex flex-row gap-3 items-center">
              <li >
                <NavLink to={'/Notification'} className="text-black dark:text-white font-bold text-2xl">
                  <IoHeartOutline />
                </NavLink>
              </li>
              <li >
                <NavLink to={'/Message'} className="text-black dark:text-white font-medium text-2xl">
                  <RiMessengerLine />
                </NavLink>
              </li>
            </ul>
          </div>

        </div>
        <br />
        {/* <div>
          <ul id="Mobile-nav" className="flex flex-row justify-between px-[3%] py-2">
            <li>
              <NavLink to={'/'}><LuHome /></NavLink>
            </li>
            <li>
              <NavLink to={'/Search'}><IoSearchSharp /></NavLink>
            </li>
            <li>
              <NavLink onClick={() => setCreate(!isCreate)}><IoCreateOutline /></NavLink>
            </li>
            <li>
              <NavLink to={"/Reels"}><BiMoviePlay /></NavLink>
            </li>
            <li>
              <NavLink to={"/Profile"} >
                {
                  user?.profile_pic ?
                    <img
                      src={image_url + user?.profile_pic}
                      alt="User Profile"
                      className="w-6 h-6 rounded-full dark:border-2 border-white"
                    />
                    : <div>
                      <FaRegUserCircle />
                    </div>
                }
              </NavLink>
            </li>
          </ul>
        </div> */}

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