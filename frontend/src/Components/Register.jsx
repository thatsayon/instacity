import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
// import { FaGoogle } from "react-icons/fa";
import useShareobj from "../CustomHooks/useShareobj";
import ReactLoading from "react-loading";
import "../CustomStyles/Register.css";

function Register() {
  const [showPass, setShowpass] = useState(false);
  const [error, setError] = useState("");
  const [image, setimage] = useState("");
  const [registred, setRegistred] = useState("");
  const [ispass, setIspass] = useState("");
  const [confrimPass, setConfirmPass] = useState("");
  const [showRepass, setShowRepass] = useState(false);
  const [isShowChoosefile, setShowChoosefile] = useState(false);
  const [btnLoading, setbtnLoading] = useState(false);

  const { RegisterWithEmailandPassword } = useShareobj();

  useEffect(() => {
    if (ispass || confrimPass) {
      if (
        !/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/.test(
          ispass
        ) &&
        !/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/.test(
          confrimPass
        )
      ) {
        setError(
          "password should be at least 6 characters a-z or special characters? and the first character should be uppercase!"
        );

        return;
      }
      if (ispass && confrimPass && ispass != confrimPass) {
        setError("Password does not match!!");

        return;
      }
    }

    if (confrimPass) {
      setShowChoosefile(true);
    } else {
      setShowChoosefile(false);
    }

    setError("");
  }, [ispass, confrimPass]);


  const Handleimageupload = (e) => {
    if (e?.target?.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        setimage(reader?.result);
      };
      reader.onerror = (error) => {
        console.log(error);
      };
    } else {
      setimage("");
    }
  };


  const HandleSubmitForm = (e) => {
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
    const fullName = data.get("fullName").trim().replace(/\s+/g, " ");
    const userName = data.get("userName").trim().replace(/\s+/g, " ");
    const password = data.get("password").trim().replace(/\s+/g, " ");
    const confrimPassword = data.get("re-password").trim().replace(/\s+/g, " ");

    if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/.test(
        password
      ) ||
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/.test(
        confrimPassword
      )
    ) {
      setError(
        "password should be at least 6 characters a-z or special characters? and the first character should be uppercase!"
      );
      setTimeout(() => {
        setError("");
      }, 5000);
      return;
    }

    if (password != confrimPassword) {
      setError("Password does not match !");
      setTimeout(() => {
        setError("");
      }, 6000);
      return;
    }

    const userobj = {
      username: userName,
      email: email,
      password: password,
      full_name: fullName,
    };

    if (image) {
      userobj.image = image;
    }

    RegisterWithEmailandPassword(userobj)
      .then((res) => {
        if (
          res?.data?.message == "User registered successfully" ||
          res?.data?.message
        ) {
          e.target.reset();
          setRegistred(`Successfully registred, please check your email !`);
          setTimeout(() => {
            setRegistred("");
          }, 6000);
          setShowChoosefile(false);
        }
      })
      .catch((error) => {
        if (error?.response?.data) {
          if (error?.response?.data?.error) {
            setError(`${error?.response?.data?.error}. please try another!`);
            setTimeout(() => {
              setError("");
            }, 6000);
          }
        } else {
          setError(`something wrong , please try another!`);
          setTimeout(() => {
            setError("");
          }, 6000);
        }
      });
  };

  return (
    <>
      <div className="fixed right-0 top-0 overflow-scroll z-50 left-0 bottom-0 justify-center items-center flex">
        <div
          className=" min-h-[70vh] shadow-md z-10 border-[1px]  border-[#dbdbdb]  bg-white dark:bg-white  text-black dark:text-black font-normal
                       max-w-sm mx-auto my-auto w-full px-8  py-4 rounded-md flex items-center justify-center flex-col gap-2"
        >
          <h1 className={`text-3xl italic text-gray-700 `}>InstaCity</h1>

          <div className="flex flex-col gap-2 w-full">
            <p className="text-sm text-center">
              Sign up to see photos and videos from your friends.
            </p>

            {/* ---social-sign-up-start--- */}

            {/* <div className="flex flex-col gap-2 ">
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
            </div> */}

            {/* ---social-sign-up-end--- */}

            {error && (
              <p className="text-xs error-color whitespace-normal">{error}</p>
            )}
            {registred && (
              <p className="text-xs success-color whitespace-normal">{registred}</p>
            )}

            <form onSubmit={HandleSubmitForm} className="form relative">
              <div>
                <label htmlFor="email">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Enter your email "
                  />
                </label>
                <label htmlFor="fullName">
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    required
                    placeholder="Enter your full name "
                  />
                </label>
                <label htmlFor="userName">
                  <input
                    type="text"
                    name="userName"
                    id="userName"
                    required
                    placeholder="Enter your user name "
                  />
                </label>
                <label className="relative" htmlFor="password">
                  <input
                    onChange={(e) => setIspass(e.target.value)}
                    type={`${showPass ? "text" : "password"}`}
                    required
                    name="password"
                    id="password"
                    placeholder="create a password "
                  />
                  {ispass && (
                    <p
                      onClick={() => setShowpass(!showPass)}
                      className="absolute top-[11px] cursor-pointer md:left-[285px] left-[275px] "
                    >
                      {showPass ? <FaEye /> : <FaEyeSlash />}
                    </p>
                  )}
                </label>
                <label className="relative" htmlFor="re-password">
                  <input
                    onChange={(e) => setConfirmPass(e.target.value)}
                    type={`${showRepass ? "text" : "password"}`}
                    required
                    name="re-password"
                    id="re-password"
                    placeholder="Confirm password "
                  />
                  {confrimPass && (
                    <p
                      onClick={() => setShowRepass(!showRepass)}
                      className="absolute  top-[11px] cursor-pointer md:left-[285px] left-[275px] "
                    >
                      {showRepass ? <FaEye /> : <FaEyeSlash />}
                    </p>
                  )}
                </label>

                {isShowChoosefile && (
                  <label
                    htmlFor="image"
                    className="flex flex-col items-start gap-3 text-xs text-black font-normal"
                  >
                    optional - Upload your image
                    <input
                      type="file"
                      id="image"
                      accept="image/*"
                      className=" bg-[#fafafa]"
                      onChange={Handleimageupload}
                    />
                  </label>
                )}
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
                  "Sign up"
                )}
              </button>

              <p className="pt-3 text-xs text-center">
                By signing up, you agree to our{" "}
                <span className="link-color">Terms ,</span>{" "}
                <span className=" link-color"> Privacy Policy</span> and{" "}
                <span className="link-color">Cookies Policy</span> .
              </p>
              <p className="pt-4 text-center text-sm text-black">
                Already have an account ?{" "}
                <Link className="text-sm link-color underline " to={"/Login"}>
                  sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
