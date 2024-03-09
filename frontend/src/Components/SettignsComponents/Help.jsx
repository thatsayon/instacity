import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Help() {
  const navigate = useNavigate();
  return (
    <>
      <>
        <div className="min-h-[58vh]">
          <div className="w-full px-[4%] dark:text-white ">
            <h1 className="text-2xl font-bold mb-8">Help</h1>

            <section className="flex flex-col  ">
              {/* ---Help Centre-section-- */}
              <div
                onClick={() => {
                  navigate("/Notfound");
                }}
                className="flex rounded-sm cursor-pointer items-center transition duration-500 flex-row justify-between w-full py-4 hover:bg-[#0000000d] dark:hover:bg-[#5555554d] px-2"
              >
                <div>
                  <p className="text-black dark:text-white text-base font-medium tracking-wide">
                    Help Centre
                  </p>
                </div>
                <div className="hover:cursor-pointer text-base text-[#737373] font-medium">
                  <FaArrowRight />
                </div>
              </div>

              <div className="space-y-4"></div>

              {/* ---Account Status-section-- */}
              <div
                onClick={() => {
                  navigate("/Notfound");
                }}
                className="flex  rounded-sm  cursor-pointer items-center transition duration-500 flex-row justify-between w-full py-4 hover:bg-[#0000000d] dark:hover:bg-[#5555554d] px-2"
              >
                <div>
                  <p className="text-black dark:text-white text-base font-medium tracking-wide">
                    Account Status
                  </p>
                </div>
                <div className="hover:cursor-pointer text-base text-[#737373] font-medium">
                  <FaArrowRight />
                </div>
              </div>

              <div className="space-y-4"></div>

              {/* ---Privacy and security help-section-- */}
              <div
                onClick={() => {
                  navigate("/Notfound");
                }}
                className="flex  rounded-sm  cursor-pointer items-center transition duration-500 flex-row justify-between w-full py-4 hover:bg-[#0000000d] dark:hover:bg-[#5555554d] px-2"
              >
                <div>
                  <p className="text-black dark:text-white text-base font-medium tracking-wide">
                    Privacy and security help
                  </p>
                </div>
                <div className="hover:cursor-pointer text-base text-[#737373] font-medium">
                  <FaArrowRight />
                </div>
              </div>

              <div className="space-y-4"></div>

              {/* ---Support Requests-section-- */}
              <div
                onClick={() => {
                  navigate("/Notfound");
                }}
                className="flex  rounded-sm  cursor-pointer items-center transition duration-500 flex-row justify-between w-full py-4 hover:bg-[#0000000d] dark:hover:bg-[#5555554d] px-2"
              >
                <div>
                  <p className="text-black dark:text-white text-base font-medium tracking-wide">
                    Support Requests
                  </p>
                </div>
                <div className="hover:cursor-pointer text-base text-[#737373] font-medium">
                  <FaArrowRight />
                </div>
              </div>

              <div className="space-y-4"></div>
            </section>
          </div>
        </div>

        {/* --footer-- */}
        <footer className=" text-center">
          <ul id="footer-ul" className=" mx-auto justify-center">
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
              <Link to="/Notfound">instagram ,</Link>
            </li>
            <li>
              <Link to="/Notfound">Migen ,</Link>
            </li>
            <li>
              <Link to="/Notfound">Blog , </Link>
            </li>
            <li>
              <Link to="/Notfound">contact uploading</Link>
            </li>
          </ul>

          <div className="mt-2 copy-write">
            <span>&copy; 2024 Instacity from Midgen</span>
          </div>
        </footer>
      </>
    </>
  );
}

export default Help;
