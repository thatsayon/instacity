import React, { useEffect, useState } from "react";
import SinglePost from "../Components/ShareComponent/SinglePost.jsx";
import SuggestionIds from "../Components/ShareComponent/SuggestionIds.jsx";
import { Link, useNavigate } from "react-router-dom";
import SwitchAccount from "./Modals/SwitchAccount";
import "../CustomStyles/Home.css";
import useShareobj from "../CustomHooks/useShareobj";
import LoadingOne from "./LoadingReels/LoadingOne";
import anynomoususer from '../assets/Anynomous.webp';

function Home() {
  const [AccountSwitch, setAccountSwitch] = useState(false);
  const { user, image_url } = useShareobj();

  const navigate = useNavigate();





  return (
    <>
      {
        user ? <div className="md:px-[2%] px-[1%] py-4 pb-6  flex flex-row dark:text-[#ffffff] text-[#000000]">
          <div className="lg:w-2/3 w-full lg:pl-5  " >
            {/* ----here-is-post-content--- */}
            < SinglePost />
            <SinglePost />
            <SinglePost />
            <SinglePost />
            <SinglePost />
            <SinglePost />
            <SinglePost />
            <SinglePost />

          </div>
          <div className="lg:block hidden h-screen flex-1 p-2">
            <div className="flex items-center justify-between border-b-[1px] pb-2 dark:border-[#262626] border-[#dbdbdb]">
              <div onClick={() => { navigate('/Profile') }} className="flex items-center cursor-pointer">
                <div className="mr-2">
                  <img className="w-[40px] rounded-full" src={user?.profile_pic ? image_url + user.profile_pic : anynomoususer} alt={user?.username || userPhoto} />
                </div>

                <div className="flex items-start flex-col">
                  {/* ---user-name--- */}
                  <p className="black-style dark:text-[#ffffff] text-black ">
                    {user?.username || 'anynomous'}
                  </p>
                  {/* --Full-name-- */}
                  <p className="gray-style">{user?.full_name || 'anynomous'}</p>
                </div>
              </div>
              <div>
                <button
                  onClick={() => {
                    setAccountSwitch(true);
                  }}
                  className="follow-link-color"
                >
                  switch
                </button>
              </div>
            </div>

            {/* --suggestion-for-you--- */}
            <div className="mt-2 dark:text-[#ffffff]">
              <div className="flex items-center flex-row justify-between">
                <h1 className="gray-style">Suggestion for you</h1>
                <p className="font-medium text-[12px] text-black cursor-pointer dark:text-[#ffffff]">
                  see all
                </p>
              </div>

              <div className="mt-4">
                {/* ---suggestion-here-- */}
                <ul className="flex flex-col gap-4">
                  <li>
                    <SuggestionIds />
                  </li>
                  <li>
                    <SuggestionIds />
                  </li>
                  <li>
                    <SuggestionIds />
                  </li>
                  <li>
                    <SuggestionIds />
                  </li>
                  <li>
                    <SuggestionIds />
                  </li>
                  <li>
                    <SuggestionIds />
                  </li>
                </ul>
              </div>
            </div>

            {/* --footer-- */}
            <footer className="pt-8">
              <ul id="footer-ul">
                <li>
                  <Link to="/Notfound">About ,</Link>
                </li>
                <li>
                  <Link to="/Notfound">Help ,</Link>
                </li>
                <li>
                  <Link to="/Notfound">press ,</Link>
                </li>
                <li>
                  <Link to="/Notfound">jobs ,</Link>
                </li>
                <li>
                  <Link to="/Notfound">privacy ,</Link>
                </li>
                <li>
                  <Link to="/Notfound">Terms ,</Link>
                </li>
                <li>
                  <Link to="/Notfound">Location ,</Link>
                </li>
                <li>
                  <Link to="/Notfound">Midgen verified.</Link>
                </li>
              </ul>

              <div className="mt-2 copy-write">
                <span>&copy; 2024 Instacity from Midgen</span>
              </div>
            </footer>
          </div>

          {
            AccountSwitch && (
              <SwitchAccount
                setAccountSwitch={setAccountSwitch}
                AccountSwitch={AccountSwitch}
              />
            )
          }
        </div > : <LoadingOne />
      }






    </>
  );
}

export default Home;
