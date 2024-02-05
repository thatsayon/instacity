import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {

  const [showPass, setShowpass] = useState(false);
  const [error, setError] = useState(false);


  const HandleSubmitLoginForm = (e) => {

    e.preventDefault();


    const data = new FormData(e.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    console.log(email , password)

  }
  return (
    <>

      <div className=" w-full min-h-screen bg-[#fff] justify-center items-center flex ">
        <div
          className=" min-h-[40vh] shadow-md z-10 border-[1px] border-[#dbdbdb]  bg-white dark:bg-white  text-black dark:text-black font-normal
                       max-w-xs mx-auto my-auto w-full px-5  py-4 rounded-md flex items-center justify-center flex-col gap-2"
        >
          <h1 className={`text-3xl italic text-gray-700 pb-8 `}>InstaCity</h1>

          <div className="flex flex-col gap-2 w-full">


            {
              error && <p className="text-sm error-color"></p>
            }

            <form onSubmit={HandleSubmitLoginForm} className="form">
              <div>
                <label htmlFor="email">
                  <input type="email" name="email" id="email" required placeholder="Enter your email " />
                </label>
                <label className="relative" htmlFor="password">
                  <input type={`${showPass ? 'text' : 'password'}`} required name="password" id="password" placeholder="Enter your password " />
                  <button onClick={() => setShowpass(!showPass)} className="absolute top-[11px] left-[250px]">{showPass ? <FaEye /> : <FaEyeSlash />}</button>
                </label>

              </div>

              <button className="button-primary w-full justify-center text-base mt-3">Sign in</button>
            </form>

            <div className="flex flex-row px-4 items-stretch justify-center">
              <div className="relative top-[0.5em] h-[1px] flex-1 shrink-[1] bg-[#dbdbdb]"></div>
              <div className="text-base text-[#737373] mr-3 ml-3 uppercase">
                or
              </div>
              <div className="relative top-[0.5em] h-[1px] flex-1 shrink-[1] bg-[#dbdbdb]"></div>
            </div>

            <div className="flex flex-col gap-2 ">
              <button className="button-primary w-full justify-center">

                <span className="text-white text-xl"><FaFacebook /></span>sign in with facebook
              </button>
              <button className="button-primary w-full justify-center">

                <span className="text-white text-xl"><FaGoogle /></span>sign in with Google
              </button>
            </div>


            <p className="pt-4 text-center text-sm text-black">Don't have any account ? <Link className="text-sm link-color underline " to={'/Register'}>sign up</Link></p>


          </div>
        </div>
      </div>






    </>
  )
}

export default Login