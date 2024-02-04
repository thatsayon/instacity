import React, { useState } from "react";
import Post from "./ShareComponent/Post";
import { FaRegUserCircle } from "react-icons/fa";
import SuggestionIds from "./ShareComponent/suggestionIds";
import { Link } from "react-router-dom";
import SwitchAccount from "./Modals/SwitchAccount";
import '../CustomStyles/Home.css';



function Home() {

  const [AccountSwitch, setAccountSwitch] = useState(false);
  



  return (
    <div className="px-[3%] py-4 pb-6  flex flex-row dark:text-[#ffffff] text-[#000000]">
      <div className="lg:w-2/3 w-full lg:pl-14  ">

        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <div className="lg:block hidden h-screen flex-1 p-2">
        <div className="flex items-center justify-between border-b-[1px] pb-2 dark:border-[#262626] border-[#dbdbdb]">
          <div className="flex items-center">
            <img
              src="https://media.istockphoto.com/id/1483473258/photo/smiling-young-woman-professional-in-formal-wear-with-arms-crossed-and-looking-at-camera.jpg?s=1024x1024&w=is&k=20&c=aA_psXlJflGGQ5q0dv7HALcX_K2LI9HeTEy6gMgTWMk=" // Replace with the actual user photo URL
              alt="User Profile"
              className="w-10 h-10 rounded-full mr-2 "
            />
            <div className="flex items-start flex-col">
              {/* ---user-name--- */}
              <p className="black-style dark:text-[#ffffff] text-black ">
                jakia995
              </p>

              {/* --Full-name-- */}
              <p className="gray-style">Tabassum jakia</p>
            </div>
          </div>
          <div>
            <button onClick={() => {setAccountSwitch(true)}} className=" link-color">switch</button>
          </div>
        </div>

        {/* --suggestion-for-you--- */}
        <div className="mt-2 dark:text-[#ffffff]">
          <div className="flex items-center flex-row justify-between">
            <h1 className="gray-style">Suggestion for you</h1>
            <p className="font-normal text-sm text-black cursor-pointer dark:text-[#ffffff]">
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
            <li >
              <Link to={"/Notfound"}>
                About ,
              </Link>
            </li>
            <li >
              <Link to={"/Notfound"}>
                Help ,
              </Link>
            </li>
            <li >
              <Link to={"/Notfound"}>
                press ,
              </Link>
            </li>
            <li >
              <Link to={"/Notfound"}>
                jobs ,
              </Link>
            </li>
            <li >
              <Link to={"/Notfound"}>
                privacy ,
              </Link>
            </li>
            <li >
              <Link to={"/Notfound"}>
                Terms ,
              </Link>
            </li>
            <li >
              <Link to={"/Notfound"}>
                Location ,
              </Link>
            </li>
            <li >
              <Link to={"/Notfound"}>
                Midgen verified.
              </Link>
            </li>
          </ul>

          <div className="mt-2 copy-write">
            <span>&copy; 2024 Instacity from Midgen</span>
          </div>
        </footer>
      </div>


      {
        AccountSwitch && <SwitchAccount setAccountSwitch={setAccountSwitch} AccountSwitch={AccountSwitch}/>
      }
    </div>



  );
}

export default Home;
