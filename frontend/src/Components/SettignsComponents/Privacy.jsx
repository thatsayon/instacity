import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Privacy() {
  const [isPrivate, setPrivate] = useState(false);
  const [Active, setActive] = useState(false);
  const [PhotosForYou, setPhotosForyou] = useState(true);
  const [MentionRadio, setMentionRadio] = useState('Everyone');
  const [LikeCount, setLikeCount] = useState(false)
  const [WhoTagyou, setWhoTagyou] = useState('No_one');
  const [HideMessageRequest, setHideMessageRequest] = useState(true);
  const [Guide, setGuide] = useState(false);
  const navigate = useNavigate();


  return (
    <>
      <div className="w-full px-[4%] dark:text-white ">
        <h1 className="text-2xl font-bold mb-8">Account privacy</h1>

        <section className="flex flex-col gap-9 ">

          {/* ---private-account-section-- */}
          <div className="flex flex-col gap-2 items-start ">
            <div className="flex flex-row justify-between w-full mb-4">
              <p className="text-black dark:text-white text-base font-medium tracking-wide">
                Private Account
              </p>
              <div>
                {/* ---switch-- */}
                <label className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      className="hidden"
                      readOnly
                      onChange={() => setPrivate(!isPrivate)}
                    />
                    <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                    <div
                      className={`toggle__dot absolute w-6 h-6 bg-[#ffffff] rounded-full shadow inset-y-[-4px] left-0 transition-all delay-75 ${isPrivate ? "translate-x-6" : "translate-x-0"
                        }`}
                    ></div>
                  </div>
                </label>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs text-[#737373] font-normal tracking-wide">
                When your account is public, your profile and posts can be seen
                by anyone, on or off Instagram, even if they don't have an
                Instagram account.
              </p>

              <p className="text-xs text-[#737373] font-normal tracking-wide">
                When your account is private, only the followers that you
                approve can see what you share, including your photos or videos
                on hashtag and location pages, and your followers and following
                lists.

                <span
                  onClick={() => navigate("/Notfound")}
                  className="text-[#0095f6] cursor-pointer text-xs"
                >
                  Learn more
                </span>
              </p>
            </div>
            <p className="text-xs text-[#737373] font-normal tracking-wide mt-3 border-b-[1px] dark:border-[#262626] border-[#dbdbdb] w-full"></p>
          </div>


          {/* ---Active-account-section-- */}
          <div className="flex flex-col gap-2 items-start ">
            <div className="flex flex-row justify-between w-full mb-4">
              <p className="text-black dark:text-white text-base font-medium tracking-wide">
                Active Account
              </p>
              <div>
                {/* ---switch-- */}
                <label className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      className="hidden"
                      readOnly
                      onChange={() => setActive(!Active)}
                    />
                    <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                    <div
                      className={`toggle__dot absolute w-6 h-6 bg-[#ffffff] rounded-full shadow inset-y-[-4px] left-0 transition-all delay-75 ${Active ? "translate-x-6" : "translate-x-0"
                        }`}
                    ></div>
                  </div>
                </label>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs text-[#737373] font-normal tracking-wide">
                Allow accounts that you follow and anyone you message to see when you were last active or are currently active on Instagram apps. When this is turned off, you won't be able to see the activity status of other accounts.
                <span
                  onClick={() => navigate("/NotFound")}
                  className="text-[#0095f6] cursor-pointer block"
                >
                  Learn more
                </span>
              </p>

              <p className="text-xs text-[#737373] font-normal tracking-wide">
                You can continue to use our services if Active Status is off.
              </p>
            </div>
            <p className="text-xs text-[#737373] font-normal tracking-wide mt-3 border-b-[1px] dark:border-[#262626] border-[#dbdbdb] w-full"></p>
          </div>

          {/* ---Story-section-- */}
          <div className="flex flex-col gap-2 items-start ">

            <p className="text-black dark:text-white text-base font-medium tracking-wide">
              Story
            </p>

            <h1
              onClick={() => navigate("/Settings/PushNotification")}
              className="text-[#0095f6] cursor-pointer block text-sm font-medium"
            >
              Edit story settings
            </h1>

            <p className="text-xs text-[#737373] font-normal tracking-wide mt-3 border-b-[1px] dark:border-[#262626] border-[#dbdbdb] w-full"></p>

          </div>



          {/* ---Comments-section-- */}
          <div className="flex flex-col gap-2 items-start ">

            <p className="text-black dark:text-white text-base font-medium tracking-wide">
              Comments
            </p>

            <h1
              onClick={() => navigate("/Settings/PushNotification")}
              className="text-[#0095f6] cursor-pointer block text-sm font-medium"
            >
              Comments settings
            </h1>

            <p className="text-xs text-[#737373] font-normal tracking-wide mt-3 border-b-[1px] dark:border-[#262626] border-[#dbdbdb] w-full"></p>

          </div>


          {/* ----Photos of You---- */}
          <div>
            <p className="block text-black font-semibold mb-4 dark:text-white ">Photos of You</p>

            <div className='flex flex-col gap-4 items-start'>
              <div>
                <label onClick={() => { setPhotosForyou(true) }} className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-blue-500 w-5 h-5"
                    name="Photos_For_you"
                    value='Add_Autometically'
                    checked={PhotosForYou}

                  />
                  <span className="ml-2 font-semibold text-black text-base dark:text-white ">Add Autometically</span>
                </label>
              </div>
              <div>
                <label onClick={() => { setPhotosForyou(false) }} className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-blue-500 w-5 h-5"
                    name="Photos_For_you"
                    checked={!PhotosForYou}
                    value='Add_Menually'

                  />
                  <span className="ml-2 font-semibold text-black text-base dark:text-white ">Add Menually </span>
                </label>
              </div>
            </div>
            <p className='text-xs text-[#737373] font-normal tracking-wide mt-3 border-b-[1px] dark:border-[#262626] border-[#dbdbdb] pb-1'>
              Choose how you want photos of you added to your profile.<span
                onClick={() => navigate("/Notfound")}
                className="text-[#0095f6] cursor-pointer  text-xs font-medium"
              >
                Edit story settings
              </span> about Photos of You.</p>
          </div>


          {/* --Two-factor authentication-- */}
          <div className="flex flex-col gap-2 items-start ">

            <p className="text-black dark:text-white text-base font-medium tracking-wide">
              Two-factor authentication
            </p>

            <h1
              onClick={() => navigate("/Settings/PushNotification")}
              className="text-[#0095f6] cursor-pointer block text-sm font-medium"
            >
              Edit two-factor authentication setting
            </h1>

            <p className="text-xs text-[#737373] font-normal tracking-wide mt-3 border-b-[1px] dark:border-[#262626] border-[#dbdbdb] w-full"></p>

          </div>


          {/* --Data download-- */}
          <div className="flex flex-col gap-2 items-start ">

            <p className="text-black dark:text-white text-base font-medium tracking-wide">
              Data download
            </p>

            <h1
              onClick={() => navigate("/Notfound")}
              className="text-[#0095f6] cursor-pointer block text-sm font-medium"
            >
              Request download
            </h1>

            <p className="text-xs text-[#737373] font-normal tracking-wide mt-3 border-b-[1px] dark:border-[#262626] border-[#dbdbdb] w-full"></p>

          </div>

          {/* --Privacy and security help-- */}
          <div className="flex flex-col gap-2 items-start ">

            <p className="text-black dark:text-white text-base font-medium tracking-wide">
              Privacy and security help
            </p>

            <h1
              onClick={() => navigate("/Notfound")}
              className="text-[#0095f6] cursor-pointer block text-sm font-medium"
            >
              Support
            </h1>

            <p className="text-xs text-[#737373] font-normal tracking-wide mt-3 border-b-[1px] dark:border-[#262626] border-[#dbdbdb] w-full"></p>

          </div>


          {/* ----Mentions---- */}
          <div>
            <p className="block text-black font-semibold mb-2 dark:text-white ">Likes and comments on photos of you</p>
            <div className='flex flex-col gap-2 items-start'>
              <div>
                <label onClick={() => { setMentionRadio('Everyone') }} className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio text-blue-500 w-5 h-5"
                    name="Mentions"
                    value="everyone"
                    checked={MentionRadio == 'Everyone'}


                  />
                  <span className="ml-2 font-semibold text-black text-base dark:text-white ">Everyone</span>
                </label>
              </div>

              <div>
                <label onClick={() => { setMentionRadio('people you follow') }} className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio text-blue-500 w-5 h-5"
                    name="Mentions"
                    value="people you follow"
                    checked={MentionRadio == 'people you follow'}


                  />
                  <span className="ml-2 font-semibold text-black text-base dark:text-white ">people you follow</span>
                </label>
              </div>

              <div>
                <label onClick={() => { setMentionRadio('No one') }} className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio text-blue-500 w-5 h-5"
                    name="Mentions"
                    value="No one"
                    checked={MentionRadio == 'No one'}


                  />
                  <span className="ml-2 font-semibold text-black text-base dark:text-white ">No one</span>
                </label>
              </div>

            </div>
            <p className='text-xs text-[#737373] font-normal tracking-wide mt-3 border-b-[1px] dark:border-[#262626] border-[#dbdbdb] pb-1'>
              Choose who can @mention you to link your account in their stories, comments, live videos and captions. When people try to @mention you, they'll see if you don't allow @mentions.
            </p>
          </div>


          {/* ---Guides-section-- */}
          <div className="flex flex-col gap-2 items-start ">
            <h1 className="text-xl text-black font-semibold dark:text-white">Guide</h1>
            <br />
            <div className="flex flex-row justify-between w-full mb-4">
              <p className="text-black dark:text-white text-base font-medium tracking-wide">
                Allow post sharing to guides
              </p>
              <div>
                {/* ---switch-- */}
                <label className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      className="hidden"
                      readOnly
                      onChange={() => setGuide(!Guide)}
                    />
                    <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                    <div
                      className={`toggle__dot absolute w-6 h-6 bg-[#ffffff] rounded-full shadow inset-y-[-4px] left-0 transition-all delay-75 ${Guide ? "translate-x-6" : "translate-x-0"
                        }`}
                    ></div>
                  </div>
                </label>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs text-[#737373] font-normal tracking-wide">
                When this is on, other people can add your posts to their guides. Your username will always be shown with your posts.
              </p>


            </div>
            <p className="text-xs text-[#737373] font-normal tracking-wide mt-3 border-b-[1px] dark:border-[#262626] border-[#dbdbdb] w-full"></p>
          </div>

          {/* ---Posts-section-- */}
          <div className="flex flex-col gap-2 items-start ">
            <h1 className="text-xl text-black font-semibold dark:text-white">Posts</h1>
            <br />
            <h2 className="text-base font-bold text-black dark:text-white mb-2">Like Count</h2>
            <div className="flex flex-row justify-between w-full mb-4">
              <p className="text-black dark:text-white text-base font-medium tracking-wide">
                Hide like and share counts
              </p>
              <div>
                {/* ---switch-- */}
                <label className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      className="hidden"
                      readOnly
                      onChange={() => setLikeCount(!LikeCount)}
                    />
                    <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                    <div
                      className={`toggle__dot absolute w-6 h-6 bg-[#ffffff] rounded-full shadow inset-y-[-4px] left-0 transition-all delay-75 ${LikeCount ? "translate-x-6" : "translate-x-0"
                        }`}
                    ></div>
                  </div>
                </label>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs text-[#737373] font-normal tracking-wide">
                On Instagram, the number of likes on posts and reels from other accounts will be hidden. You can hide the number of likes on your own posts and reels by going to Advanced settings before sharing.
              </p>
              <p className="text-xs text-[#737373] font-normal tracking-wide">
                On Threads, the number of likes, views, reposts and quotes on posts from other profiles will be hidden. You can hide these on your own posts from the menu for each post.  <span
                  onClick={() => navigate("/NotFound")}
                  className="text-[#0095f6] cursor-pointer text-xs"
                >
                  Learn more
                </span>
              </p>


            </div>
            <p className="text-xs text-[#737373] font-normal tracking-wide mt-3 border-b-[1px] dark:border-[#262626] border-[#dbdbdb] w-full"></p>
          </div>


          {/* ----Who can tag you section --- */}
          <div>
            <p className="block text-black font-semibold mb-2 dark:text-white ">Likes and comments on photos of you</p>
            <div className='flex flex-col gap-2 items-start'>
              <div>
                <label onClick={() => { setWhoTagyou('Everyone') }} className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio text-blue-500 w-5 h-5"
                    name="Whocantag"
                    value="Everyone"
                    checked={WhoTagyou == 'Everyone'}


                  />
                  <span className="ml-2 font-semibold text-black text-base dark:text-white ">Everyone</span>
                </label>
              </div>

              <div>
                <label onClick={() => { setWhoTagyou('People_you_follow') }} className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio text-blue-500 w-5 h-5"
                    name="Whocantag"
                    value="People_you_follow"
                    checked={WhoTagyou == 'People_you_follow'}


                  />
                  <span className="ml-2 font-semibold text-black text-base dark:text-white ">People you follow</span>
                </label>
              </div>

              <div>
                <label onClick={() => { setWhoTagyou('No_one') }} className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio text-blue-500 w-5 h-5"
                    name="Whocantag"
                    value="No_one"
                    checked={WhoTagyou == 'No_one'}


                  />
                  <span className="ml-2 font-semibold text-black text-base dark:text-white ">No one</span>
                </label>
              </div>

            </div>
            <p className='text-xs text-[#737373] font-normal tracking-wide mt-3 border-b-[1px] w-full dark:border-[#262626] border-[#dbdbdb] pb-1'>

            </p>
          </div>


          {/* --Messages-- */}
          <div className="flex flex-col gap-2 items-start ">

            <p className="text-black dark:text-white text-base font-medium tracking-wide">
              Messages
            </p>

            <h1
              onClick={() => navigate("/Settings/PushNotification")}
              className="text-[#0095f6] cursor-pointer block text-sm font-medium"
            >
              Manage message settings
            </h1>

            <p className="text-xs text-[#737373] font-normal tracking-wide mt-3 border-b-[1px] dark:border-[#262626] border-[#dbdbdb] w-full"></p>

          </div>


          {/* ---Hide Message Requests--section-- */}
          <div className="flex flex-col gap-2 items-start ">
            <div className="flex flex-row justify-between w-full mb-4">
              <p className="text-black dark:text-white text-base font-medium tracking-wide">
                Hide Message Requests
              </p>
              <div>
                {/* ---switch-- */}
                <label className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      className="hidden"
                      readOnly
                      onChange={() => setHideMessageRequest(!HideMessageRequest)}
                    />
                    <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                    <div
                      className={`toggle__dot absolute w-6 h-6 bg-[#ffffff] rounded-full shadow inset-y-[-4px] left-0 transition-all delay-75 ${HideMessageRequest ? "translate-x-6" : "translate-x-0"
                        }`}
                    ></div>
                  </div>
                </label>
              </div>
            </div>
            <p className="text-xs text-[#737373] font-normal tracking-wide">
              You can hide Message Request.
              <span
                onClick={() => navigate("/NotFound")}
                className="text-[#0095f6] cursor-pointer text-xs"
              >
                Learn more
              </span>
            </p>

            <div >


            </div>
            <p className="text-xs text-[#737373] font-normal tracking-wide mt-3 border-b-[1px] dark:border-[#262626] border-[#dbdbdb] w-full"></p>
          </div>














        </section>
      </div>

      {/* --footer-- */}
      <footer className="mt-9 text-center">
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
  );
}

export default Privacy;
