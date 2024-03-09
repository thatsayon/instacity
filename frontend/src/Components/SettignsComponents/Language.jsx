import React, { useState } from "react";
import useShareobj from "../../CustomHooks/useShareobj";
import { Link } from "react-router-dom";

function Language() {
  const [SelectLanguage, setSelecteLanguage] = useState('English');
  const { LanguageArray } = useShareobj();



  return (
    <>
      <div className="  dark:text-white px-[4%] ">
        <div>
          <h1 className=" text-gray-800 dark:text-white text-xl font-normal pb-2">
            Language Preferences
          </h1>

          <h2 className="text-black font-semibold pb-1 dark:text-white text-base">Website Language</h2>
          <p className="text-black font-normal text-sm tracking-wide dark:text-white">See buttons, titles and other texts on Instacity in your preferred laguage.</p>

        </div>
        <br />
        <div className="flex flex-col">

          <div>
            <input type="text" className="dark:bg-[#262626] dark:text-white focus:border-2 focus:border-[#0095f6] transition duration-300 w-full py-4 px-1 " placeholder="Search Language" />
          </div>
          <br />

          {
            LanguageArray?.map((language, index) =>
              <div key={index} onClick={() => { setSelecteLanguage(language) }} className={`flex flex-row justify-between cursor-pointer py-4 px-1 rounded-lg hover:bg-[#0000000d] dark:hover:bg-[#5555554d]`}>
                <h1 className="text-black font-semibold dark:text-white text-base">{language}</h1>
                <input
                  type="radio"
                  className="form-radio text-indigo-600 h-5 w-5 "
                  name="language"
                  value={language}
                  
                  checked={SelectLanguage === language}
                  readOnly
                />
              </div>

            )
          }

        </div>
      </div>


      {/* --footer-- */}
      <footer className="my-7 text-center">
        <ul id="footer-ul" className=" mx-auto justify-center">
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
    </>
  );
}

export default Language;
