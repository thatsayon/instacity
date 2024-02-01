import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function Register() {
  const [showPass, setShowpass] = useState(false);
  const [error, setError] = useState(false);


  const HandleSubmitForm = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const email = data.get('email');
    const fullName = data.get('fullName');
    const userName = data.get('userName');
    const password = data.get('password');

    if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/.test(password)) {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 5000);
      return;


    }



    const userobj = {
      "Email": email,
      "FullName": fullName,
      "UserName": userName,
      "Password": password
    }

    console.log(userobj)

  }
  return (
    <>
      <div className=" w-full min-h-screen bg-[#fff] justify-center items-center flex ">
        <div
          className=" min-h-[70vh] shadow-md z-10 border-[1px]  border-[#dbdbdb]  bg-white dark:bg-white  text-black dark:text-black font-normal
                       max-w-sm mx-auto my-auto w-full px-8  py-4 rounded-md flex items-center justify-center flex-col gap-2"
        >
          <h1 className={`text-3xl italic text-gray-700 `}>InstaCity</h1>

          <div className="flex flex-col gap-2 w-full">
            <p className="text-sm text-center">Sign up to see photos and videos from your friends.</p>
            <div className="flex flex-col gap-2 ">
              <button className="button-primary w-full justify-center">

                <span className="text-white text-xl"><FaFacebook /></span>sign in with facebook
              </button>
              <button className="button-primary w-full justify-center">

                <span className="text-white text-xl"><FaGoogle /></span>sign in with Google
              </button>
            </div>

            <div className="flex flex-row px-4 items-stretch justify-center">
              <div className="relative top-[0.5em] h-[1px] flex-1 shrink-[1] bg-[#dbdbdb]"></div>
              <div className="text-base text-[#737373] mr-3 ml-3 uppercase">
                or
              </div>
              <div className="relative top-[0.5em] h-[1px] flex-1 shrink-[1] bg-[#dbdbdb]"></div>
            </div>

            {
              error && <p className="text-sm error-color">please create a strong password !</p>
            }

            <form onSubmit={HandleSubmitForm} className="form">
              <div>
                <label htmlFor="email">
                  <input type="email" name="email" id="email" required placeholder="Enter your email " />
                </label>
                <label htmlFor="fullName">
                  <input type="text" name="fullName" id="fullName" required placeholder="Enter your full name " />
                </label>
                <label htmlFor="userName">
                  <input type="text" name="userName" id="userName" required placeholder="Enter your user name " />
                </label>
                <label className="relative" htmlFor="password">
                  <input type={`${showPass ? 'text' : 'password'}`} required name="password" id="password" placeholder="create a password " />
                  <button onClick={() => setShowpass(!showPass)} className="absolute top-[11px] left-[285px]">{showPass ? <FaEye /> : <FaEyeSlash />}</button>
                </label>

              </div>

              <button className="button-primary w-full justify-center text-base mt-3">Sign up</button>

              <p className="pt-3 text-xs text-center">By signing up, you agree to our <span className="link-color">Terms , Privacy Policy</span> and <span className="link-color">Cookies Policy</span> .</p>
              <p className="pt-4 text-center text-sm text-black">Already have an account ? <Link className="text-sm link-color underline " to={'/Login'}>sign in</Link></p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
