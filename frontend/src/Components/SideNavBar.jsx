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
import instacityLogo from '../assets/LogoFolder/instaLogo.png'

function SideNavBar({ setCreate }) {



    return (
        <nav className={`p-2 `}>
            <div className='lg:py-4 lg:pl-4'>
                <h1 className={`text-3xl italic text-gray-700 lg:block hidden`}>InstaCity</h1>
                <img src={instacityLogo} alt="Instacity logo" className='lg:hidden block' />

            </div>

            <div id='sideBar-link'>
                <ul className='flex flex-col justify-center'>
                    <li>

                        <Link to={'/'}>

                            <div>
                                <LuHome />
                            </div>
                            <span className='lg:block hidden'> Home</span>

                        </Link>
                    </li>
                    <li>


                        <Link to={'/Search'}>

                            <div>
                                <IoSearchSharp />
                            </div>
                            <span className='lg:block hidden'>Search</span>

                        </Link>
                    </li>
                    <li>

                        <Link to={'/Explore'}>
                            <div>
                                <MdOutlineExplore />
                            </div>
                            <span className='lg:block hidden'>Explore</span>
                        </Link>
                    </li>
                    <li>

                        <Link to={'/Reels'} >
                            <div>
                                <BiMoviePlay />
                            </div>

                            <span className='lg:block hidden'> Reels</span>

                        </Link>
                    </li>
                    <li>

                        <Link to={'/Message'}>
                            <div>
                                <AiOutlineMessage />
                            </div>

                            <span className='lg:block hidden'> Messages</span>
                        </Link>
                    </li>
                    <li>



                        <Link to={'/Notification'}>

                            <div>
                                <IoMdNotificationsOutline />
                            </div>
                            <span className='lg:block hidden'> Notification</span>

                        </Link>
                    </li>
                    <li>



                        <button onClick={() => setCreate(true)}>
                            <div>
                                <IoCreateOutline />
                            </div>

                            <span className='lg:block hidden'>Create</span>
                        </button>
                    </li>
                    <li>
                        <Link to={'/Profile'}>
                            <div>
                                <FaRegUserCircle />
                            </div>
                            <span className='lg:block hidden'>Profile</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/Register'}>
                            <div>
                                <FaRegUserCircle />
                            </div>
                            <span className='lg:block hidden'>Login
                            </span>
                        </Link>
                    </li>

                    <li className='mt-0'>


                        <Link to={'/More'}>
                            <div>
                                <IoMenuSharp />
                            </div>

                            <span className='lg:block hidden'>More</span>
                        </Link>



                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default SideNavBar