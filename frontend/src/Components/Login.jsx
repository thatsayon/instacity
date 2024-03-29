import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
// import { FaFacebook } from "react-icons/fa";
// import { FaGoogle } from "react-icons/fa";
import "../CustomStyles/Login.css";
import useShareobj from "../CustomHooks/useShareobj";
import ReactLoading from "react-loading";
import '../CustomStyles/Login.css';

function Login() {
  const [showPass, setShowpass] = useState(false);
  const [error, setError] = useState(false);
  const [ispass, setIspass] = useState("");
  const [btnLoading, setbtnLoading] = useState(false);
  const { LoginWithEmailandPassword, setToken } = useShareobj() || '';

  const navigate = useNavigate();



  const HandleSubmitLoginForm = (e) => {
    setbtnLoading(true);
    setTimeout(() => {
      setbtnLoading(false);
    }, 800);

    if (btnLoading) {
      return;
    }

    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const email = data.get("email").trim().replace(/\s+/g, " ");
    const password = data.get("password").trim().replace(/\s+/g, " ");

    if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/.test(password)) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 6000);
      return
    }

    const obj = {
      email: email,
      password: password,
    };

    console.log(obj)

    LoginWithEmailandPassword(obj)
      .then((res) => {
        if (res?.data?.token) {
          e.target.reset();
          setToken(res?.data?.token);
          localStorage.setItem("userToken", res?.data?.token);
          navigate("/");
        }
      })
      .catch((error) => {
        if (
          error?.response?.status == 400 ||
          error?.response?.statusText == "Bad Request"
        ) {
          setError(true)
          setTimeout(() => {
            setError(false);
          }, 6000);
        }
      });
  };
  return (
    <>
      <div className=" fixed right-0 top-0 overflow-scroll z-50 left-0 bottom-0 justify-center items-center flex">
        <div
          className=" min-h-[50vh] shadow-md z-10 border-[1px] border-[#dbdbdb]  bg-white dark:bg-white  text-black dark:text-black font-normal
                       max-w-xs mx-auto my-auto w-full px-5  py-4 rounded-md flex items-center justify-center flex-col gap-2"
        >
          <h1 className={`text-3xl italic text-gray-700 pb-1`}>InstaCity</h1>

          <div className="flex flex-col gap-2 w-full">
            <p className="text-sm text-center pb-1">
              Sign in to see photos and videos from your friends.
            </p>

            {error && <span className="text-xs error-color">Please check your email or password ! try again.</span>}

            <form onSubmit={HandleSubmitLoginForm} className="form">
              <div>
                <label htmlFor="email">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Enter your email "
                    autoComplete="on"
                  />
                </label>
                <label className="relative" htmlFor="password">
                  <input
                    onChange={(e) => setIspass(e.target.value)}
                    type={`${showPass ? "text" : "password"}`}
                    required
                    name="password"
                    id="password"
                    placeholder="Enter your password "
                    autoComplete="on"
                  />
                  <p className="text-right gray-style hover:cursor-pointer hover:underline">
                    forget password
                  </p>
                  {ispass && (
                    <p
                      onClick={() => setShowpass(!showPass)}
                      className="absolute top-[11px] left-[250px]"
                    >
                      {showPass ? <FaEye /> : <FaEyeSlash />}
                    </p>
                  )}
                </label>
              </div>

              <button className="button-primary w-full justify-center text-base mt-3">
                {btnLoading ? (
                  <ReactLoading
                    type="spokes"
                    height="20px"
                    width="20px"
                    color="#fff"
                  />
                ) : (
                  "Sign in"
                )}
              </button>
            </form>

            {/* ---social-sign-in-start--- */}

            {/* <div className="flex flex-row px-4 items-stretch justify-center">
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
            </div> */}

            {/* ---social-sign-in-end--- */}

            <p className="pt-4 text-center text-sm text-black flex items-center justify-center">
              Don't have any account ?{" "}
              <Link className="text-sm link-color underline " to={"/Register"}>
                sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
