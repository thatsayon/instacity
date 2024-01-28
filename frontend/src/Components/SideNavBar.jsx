import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LuHome } from "react-icons/lu";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoCreateOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";

function SideNavBar({ setCreate }) {



    return (
        <nav className={`p-2 `}>
            <div className='py-4 pl-4'>
                <h1 className={`text-3xl italic text-gray-700 `}>InstaCity</h1>

            </div>

            <div id='sideBar-link'>
                <ul className='flex flex-col justify-center'>
                    <li>

                        <Link to={'/'}>

                            <div>
                                <LuHome />
                            </div>
                            <span> Home</span>

                        </Link>
                    </li>
                    <li>


                        <Link to={'/Search'}>

                            <div>
                                <IoSearchSharp />
                            </div>
                            <span>Search</span>

                        </Link>
                    </li>
                    <li>

                        <Link to={'/Explore'}>
                            <div>
                                <MdOutlineExplore />
                            </div>
                            <span>Explore</span>
                        </Link>
                    </li>
                    <li>

                        <Link to={'/Reels'} >
                            <div>
                                <BiMoviePlay />
                            </div>

                            <span> Reels</span>

                        </Link>
                    </li>
                    <li>

                        <Link to={'/Message'}>
                            <div>
                                <AiOutlineMessage />
                            </div>

                            <span> Messages</span>
                        </Link>
                    </li>
                    <li>



                        <Link to={'/Notification'}>

                            <div>
                                <IoMdNotificationsOutline />
                            </div>
                            <span> Notification</span>

                        </Link>
                    </li>
                    <li>



                        <button onClick={() => setCreate(true)}>
                            <div>
                                <IoCreateOutline />
                            </div>

                            <span>Create</span>
                        </button>
                    </li>
                    <li>
                        <Link to={'/Profile'}>
                            <div>
                                <FaRegUserCircle />
                            </div>
                            <span>Profile</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/Register'}>
                            <div>
                                <FaRegUserCircle />
                            </div>
                            <span>Login
                            </span>
                        </Link>
                    </li>

                    <li className='mt-8'>


                        <Link to={'/More'}>
                            <div>
                                <IoMenuSharp />
                            </div>

                            <span>More</span>
                        </Link>



                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default SideNavBar