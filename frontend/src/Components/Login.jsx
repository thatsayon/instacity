import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "../CustomStyles/Login.css";
import useShareobj from "../CustomHooks/useShareobj";
import ReactLoading from "react-loading";
import "../CustomStyles/Login.css";

function Login() {
  const [showPass, setShowpass] = useState(false);
  const [error, setError] = useState("");
  const [ispass, setIspass] = useState("");
  const [btnLoading, setbtnLoading] = useState(false);
  const { LoginWithEmailandPassword, setToken } = useShareobj() || "";

  const navigate = useNavigate();

  const HandleSubmitLoginForm = async (e) => {
    e.preventDefault();
    setbtnLoading(true);
    setError("")
    const data = new FormData(e.currentTarget);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const email = data.get("email").trim().replace(/\s+/g, " ");
      const password = data.get("password").trim().replace(/\s+/g, " ");

      if (
        !/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/.test(
          password
        )
      ) {
        setError("Please check your email or password ! try again.");
        return;
      }

      const obj = {
        email: email,
        password: password,
      };

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
            setError("Please check your email or password ! try again.");
          }
        });
    } finally {
      setbtnLoading(false);
    }
  };

  const HandlePaste = (e) => {
    const Paste = e?.clipboardData.getData("text");
    if (Paste?.length > 30) {
      e?.preventDefault();
    }
  };

  return (
    <>
      <div className=" fixed right-0 top-0 overflow-scroll z-50 left-0 bottom-0 justify-center items-center flex">
        <div
          className=" min-h-[50vh] shadow-md z-10 border-[1px] border-[#dbdbdb]  bg-white dark:bg-white  text-black dark:text-black font-normal
                       max-w-xs mx-auto my-auto w-full px-5  py-4 rounded-md flex items-center justify-center flex-col gap-2"
        >
           <h1 className={`text-2xl font-bold  text-gray-700 `}>InstaCity</h1>

          <div className="flex flex-col gap-2 w-full">
            <p className="text-sm text-center pb-1">
              Sign in to see photos and videos from your friends.
            </p>

            <p
              className={`text-xs min-h-8 text-center  ${
                error ? "error-color" : " success-color"
              }  whitespace-normal`}
            >
              {error}
            </p>

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
                    onPaste={HandlePaste}
                    autoComplete="off"
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
