import React, { useEffect, useRef, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdLocationPin } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import EmojiPicker from 'emoji-picker-react';
import useShareobj from '../CustomHooks/useShareobj.jsx';


function Create({ setCreate, setDiscardPost }) {
  const { user, image_url } = useShareobj();
  const clickFile = useRef();
  const [zoomLevel, setZoomLevel] = useState(1);
  const [imageArray, setImageArray] = useState([]);
  const [isCrop, setisCrop] = useState(false);
  const [isZoom, setisZoom] = useState(false);
  const [isAddMore, setAddMore] = useState(false);
  const [isAdjust, setAdjust] = useState(false);
  const [writeCaption, setWriteCaption] = useState(false);
  const HiddenPopup = useRef(null);
  const [activeindex, setActiveindex] = useState(0);
  const [ActiveImg, setActiveImg] = useState(null);
  const [ImgSize, setImgsize] = useState({});
  const [isAdvance, setAdvance] = useState(false);
  const [HideLike, setHideLike] = useState(false);
  const [CommentOff, setCommentOff] = useState(false);
  const [Brightness, setBrightness] = useState(1);
  const [Contrast, setContrast] = useState(1);
  const [Fade, setFade] = useState(1);
  const [Saturation, setSaturation] = useState(1);
  const [Temperature, setTemperature] = useState(1);
  const [word, setWord] = useState(0);
  const [isEmoji, setEmoji] = useState(false);
  const [Caption, setCaption] = useState("");
  const textareaRef = useRef(null);


  useEffect(() => {
    if (activeindex != null) {
      let image = new Image();
      image = new Image();
      image.src = imageArray[activeindex];

      setImgsize({
        img_width: image?.width,
        img_height: image?.height,
      });

      setActiveImg(image);
    }
  }, [activeindex]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (HiddenPopup.current && !HiddenPopup.current.contains(e.target)) {
        setisCrop(false);
        setisZoom(false);
        setAddMore(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const Handleimageupload = (e) => {
    if (e?.target?.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (upload) => {
        let img = new Image();
        img.src = upload?.target?.result;
        img.onload = () => {
          setImageArray([...imageArray, img?.src]);
        };
      };
      reader.onerror = (error) => {
        console.log(error);
      };
    }
  };

  const HandleResizeImage = (aspectRatio, index) => {
    const { img_width, img_height } = ImgSize;
    const minWidth = 300;
    const minHeight = 300;

    let newWidth, newHeight, image;
    image = new Image();
    image.src = imageArray[index];

    const canvas = document.createElement("canvas");
    const canvasContext = canvas.getContext("2d");

    if (aspectRatio === "original") {
      newWidth = img_width;
      newHeight = img_height;
    } else if (aspectRatio === "1:1") {
      const minSize = Math.min(image.width, image.height);
      newWidth = minSize;
      newHeight = minSize;
    } else if (aspectRatio === "16:9") {
      newWidth = Math.min(image.width, image.height * (16 / 9));
      newHeight = newWidth / (16 / 9);
    } else if (aspectRatio === "4:5") {
      newHeight = Math.min(image.height, image.width * (5 / 4));
      newWidth = newHeight * (5 / 4);
    }

    newWidth = Math.max(newWidth, minWidth);
    newHeight = Math.max(newHeight, minHeight);
    console.log(newWidth, newHeight);

    canvas.width = newWidth;
    canvas.height = newHeight;

    canvasContext.drawImage(image, 0, 0, newWidth, newHeight);

    const resizedImageUrl = canvas.toDataURL("image/jpeg");
    const newArray = [...imageArray];
    newArray[index] = resizedImageUrl;
    setImageArray(newArray);
  };

  const HandleDelete = (img, index) => {
    if (isAddMore && imageArray.length === 1) {
      setAddMore(false);
    }

    for (let i = 0; i < imageArray?.length; i++) {
      if (imageArray[i] == img && i == index) {
        imageArray.pop();
      }
    }

    setImageArray([...imageArray]);
  };


  const HandlePost = () => {

  }





  return (
    <>
      <div
        className="fixed right-0 top-0 px-2 bg-[#00000080] z-50 left-0 bottom-0 justify-center items-center flex "
        onClick={(e) => {
          if (e.target !== e.currentTarget) {
            return;
          }
          if (imageArray.length > 0) {
            setDiscardPost(true);
          } else {
            setCreate(false);
          }
        }}
      >
        {isAdjust ? (
          // ----image-adjust-section---
          <div
            style={{ maxHeight: "calc(100vh - 10vh)" }}
            className={` ml-14 relative overflow-y-auto overflow-hidden shadow-lg bg-white dark:bg-[#262626] dark:text-[#ffffff] text-black font-bold shadow-[#364e7e1a] pt-4 rounded-md flex items-center  flex-col`}
          >
            <div className="flex flex-row items-center justify-between border-b-2 dark:border-[#555555] w-full  px-2">
              <div>
                <p
                  onClick={() => {
                    writeCaption ? setWriteCaption(false) : setAdjust(false);
                  }}
                  className="text-2xl p-0 m-0"
                >
                  <MdOutlineKeyboardArrowLeft />
                </p>
              </div>
              <div>
                {
                  writeCaption ? <p onClick={HandlePost} className="follow-link-color text-base font-bold cursor-pointer">
                    post
                  </p> : <p
                    onClick={() => {
                      setWriteCaption(true);
                    }}
                    className="follow-link-color text-base font-bold cursor-pointer"
                  >
                    Next
                  </p>
                }
              </div>
            </div>

            <div className="flex flex-row gap-1 w-full max-w-2xl h-full">
              <div className="w-1/2 my-auto">
                {imageArray.length > 0 && (
                  <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={1000}
                    slidesPerView={1}
                    navigation={true}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => setActiveindex(swiper.activeIndex)}
                    onSlideChange={(e) => setActiveindex(e.activeIndex)}
                    className="h-[100%]"
                  >
                    {imageArray.map((showImg, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={showImg}
                          alt="Resized"
                          className="mx-auto my-auto w-full min-h-[50vh]"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </div>
              <div
                style={{ maxHeight: "calc(60vh - 10vh)" }}
                className="w-1/2 overflow-y-auto"
              >
                {writeCaption ? (
                  <section className="px-1">
                    <div className="flex items-start pt-2 dark:text-[#ffffff] text-black w-full">
                      <div>
                        <img
                          src={image_url + user?.profile_pic}
                          className="w-9 h-9 rounded-full mr-1 "
                        />
                      </div>

                      <p className="black-style dark:text-[#ffffff] text-black text-sm">
                        {user?.username}
                      </p>
                    </div>

                    <div>
                      <textarea
                        ref={textareaRef}
                        value={Caption}
                        onChange={(e) => {
                          setCaption(e?.target?.value);
                          setWord(e?.target?.value?.length);
                        }}
                        onKeyDown={(e) => {
                          if (word >= 2028 && e.key !== 'Backspace' && e.key !== 'Delete') {
                            e.preventDefault();
                          }
                        }}
                        name="Caption"
                        id="Caption"
                        placeholder="Write a caption...."
                        className="w-full min-h-[30vh] dark:text-white outline-none border-none focus:border-none  bg-[#ffffff] transition-all duration-500 dark:bg-[#262626] placeholder:text-sm placeholder:font-normal font-normal tracking-widest"
                      ></textarea>
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="flex flex-row justify-between items-center">
                        <div onClick={() => { setEmoji(!isEmoji) }} className="cursor-pointer gray-style ">
                          <svg
                            aria-label="Emoji"
                            fill="currentColor"
                            height="20"
                            role="img"
                            viewBox="0 0 24 24"
                            width="20"
                          >
                            <title>Emoji</title>
                            <path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
                          </svg>
                        </div>

                        <div className="flex flex-row gray-style">
                          <p>{word}/2028</p>
                        </div>
                      </div>

                      {
                        isEmoji && <div className="max-w-[320px]">
                          <EmojiPicker width={'320px'} onEmojiClick={(event, emojiobject) => { setCaption((previousCap) => previousCap + event.emoji) }} />

                        </div>
                      }

                      <div className="flex flex-row justify-between items-center">
                        <div className="text-sm font-normal text-black dark:text-white">
                          Add Location
                        </div>

                        <div>
                          <button className="text-xl font-normal text-black dark:text-white">
                            <MdLocationPin />
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-row justify-between items-center">
                        <div className="text-sm font-normal text-black dark:text-white">
                          Advanced settings
                        </div>

                        <div>
                          <button onClick={() => { setAdvance(!isAdvance) }} className="text-xl my-auto font-normal text-black dark:text-white">
                            {isAdvance ? <IoIosArrowUp /> : <IoIosArrowDown />}
                          </button>

                        </div>
                      </div>


                      <div className={`${isAdvance ? 'flex' : 'hidden'} flex-col gap-4 py-2`}>
                        <div className="flex-col flex gap-2">
                          <div className="flex flex-row justify-between items-center">
                            <div className="text-sm font-normal text-black dark:text-white">
                              Hide like and view counts on this post

                            </div>

                            <div className="mr-1 ">
                              {/* ---switch-- */}
                              <label className="flex items-center cursor-pointer">
                                <div className="relative">
                                  <input type="checkbox" className="hidden" onChange={() => { setHideLike(!HideLike) }} />
                                  <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                                  <div className={`toggle__dot absolute w-6 h-6 bg-[#ffffff] rounded-full shadow inset-y-[-4px] left-0 transition-all delay-75 ${HideLike ? 'translate-x-6' : 'translate-x-0'}`}></div>
                                </div>
                              </label>
                            </div>
                          </div>
                          <p className="gray-style">Only you will see the total number of likes and views on this post. You can change this later by going to the ··· menu at the top of the post. To hide like counts on other people's posts, go to your account settings.</p>
                        </div>

                        <div className="flex-col flex gap-2">
                          <div className="flex flex-row justify-between items-center">
                            <div className="text-sm font-normal text-black dark:text-white">
                              Turn off commenting

                            </div>

                            <div className="mr-1 ">
                              {/* ---switch-- */}
                              <label className="flex items-center cursor-pointer">
                                <div className="relative">
                                  <input type="checkbox" className="hidden" onChange={() => { setCommentOff(!CommentOff) }} />
                                  <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                                  <div className={`toggle__dot absolute w-6 h-6 bg-[#ffffff] rounded-full shadow inset-y-[-4px] left-0 transition-all delay-75 ${CommentOff ? 'translate-x-6' : 'translate-x-0'}`}></div>
                                </div>
                              </label>
                            </div>
                          </div>
                          <p className="gray-style">You can change this later by going to the ··· menu at the top of your post.</p>
                        </div>

                      </div>

                    </div>
                  </section>
                ) : (
                  <section className="flex flex-col gap-3 px-2 py-1">
                    <div className="border-b-2 dark:border-[#555555] w-full text-center pb-2">
                      <h1 className="text-[#555555] text-base font-medium dark:text-white">
                        Adjustments
                      </h1>
                    </div>
                    {/* ---Brightness-control-- */}
                    <div>
                      <p className="text-sm font-normal text-black dark:text-white">
                        Brightnesss
                      </p>
                      <input
                      className="px-0 mx-0"
                        type="range"
                        min="0"
                        max="100"
                        step="1"
                        value={Brightness}
                        onChange={(event) => { setBrightness(event.target.value) }}
                      />
                    </div>
                    {/* ---contrast-control-- */}
                    <div>
                      <p className="text-sm font-normal text-black dark:text-white">
                        Contrast
                      </p>
                      <input
                      className="px-0 mx-0"
                        type="range"
                        min="1"
                        max="100"
                        step="1"
                        value={Contrast}
                        onChange={(e) => {
                          setContrast(e.target.value);

                        }}
                      />
                    </div>
                    {/* ---Fade-control-- */}
                    <div>
                      <p className="text-sm font-normal text-black dark:text-white">
                        Fade
                      </p>
                      <input
                      className="px-0 mx-0"
                        type="range"
                        min="1"
                        max="100"
                        step="1"
                        value={Fade}
                        onChange={(e) => {
                          setFade(e.target.value)

                        }}
                      />
                    </div>

                    {/* ---Saturation-control-- */}
                    <div>
                      <p className="text-sm font-normal text-black dark:text-white">
                        Saturation
                      </p>
                      <input
                      className="px-0 mx-0"
                        type="range"
                        min="1"
                        max="100"
                        step="1"
                        value={Saturation}
                        onChange={(e) => {
                          setSaturation(e.target.value);

                        }}
                      />
                    </div>

                    {/* ---Temperature--control-- */}
                    <div>
                      <p className="text-sm font-normal text-black dark:text-white">
                        Temperature
                      </p>
                      <input
                      className="px-0 mx-0"
                        type="range"
                        min="1"
                        max="100"
                        step="1"
                        value={Temperature}
                        onChange={(e) => {
                          setTemperature(e.target.value);

                        }}
                      />
                    </div>
                  </section>
                )}
              </div>
            </div>
          </div>
        ) : (
          // ---image-Receive--section--
          <section
            style={{ maxHeight: "calc(100vh - 10vh)" }}
            className={`min-h-[60vh] relative overflow-y-auto overflow-hidden shadow-lg bg-white dark:bg-[#262626] dark:text-[#ffffff] text-black font-bold shadow-[#364e7e1a]  min-w-[400px] py-4 rounded-md flex items-center ${imageArray.length > 0 ? "gap-0" : "gap-20"
              } flex-col`}
          >
            {
              // ----This-is-AspectRatioPopup-----
              isCrop && (
                <div
                  ref={HiddenPopup}
                  className="flex flex-col bg-[#1a1a1acc] py-2 rounded-md absolute top-[260px] left-[5px] z-50"
                >
                  {/* ---original-size-button---- */}
                  <div
                    onClick={() => HandleResizeImage("original", activeindex)}
                    className="flex items-center px-2 cursor-pointer"
                  >
                    <div className="flex flex-col justify-center mr-2">
                      <span className="leading-4 ">Original</span>
                    </div>
                    <div className="flex flex-col justify-center">
                      <svg
                        className="text-current"
                        fill="currentColor"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <title>Photo outline icon</title>
                        <path
                          d="M6.549 5.013A1.557 1.557 0 1 0 8.106 6.57a1.557 1.557 0 0 0-1.557-1.557Z"
                          fillRule="evenodd"
                        ></path>
                        <path
                          d="m2 18.605 3.901-3.9a.908.908 0 0 1 1.284 0l2.807 2.806a.908.908 0 0 0 1.283 0l5.534-5.534a.908.908 0 0 1 1.283 0l3.905 3.905"
                          fill="none"
                          stroke="currentColor"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        ></path>
                        <path
                          d="M18.44 2.004A3.56 3.56 0 0 1 22 5.564h0v12.873a3.56 3.56 0 0 1-3.56 3.56H5.568a3.56 3.56 0 0 1-3.56-3.56V5.563a3.56 3.56 0 0 1 3.56-3.56Z"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <hr className="my-2 border-b border-[#dbdbdb] w-full" />

                  {/* ----1:1---size-image--button--- */}
                  <div
                    onClick={() => HandleResizeImage("1:1", activeindex)}
                    className="flex items-center px-2 cursor-pointer"
                  >
                    <div className="flex flex-col justify-center mr-2">
                      <span className="leading-4">1:1</span>
                    </div>
                    <div className="flex flex-col justify-center">
                      <svg
                        className="text-current"
                        fill="currentColor"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <title>Crop portrait icon</title>
                        <path d="M16 23H8a4.004 4.004 0 0 1-4-4V8a4.004 4.004 0 0 1 4-4h8a4.004 4.004 0 0 1 4 4v11a4.004 4.004 0 0 1-4 4ZM8 6a2.002 2.002 0 0 0-2 2v11a2.002 2.002 0 0 0 2 2h8a2.002 2.002 0 0 0 2-2V8a2.002 2.002 0 0 0-2-2Z"></path>
                      </svg>
                    </div>
                  </div>
                  <hr className="my-2 border-b border-[#dbdbdb] w-full" />

                  {/* ---4:5-size-image-button--- */}
                  <div
                    onClick={() => HandleResizeImage("4:5", activeindex)}
                    className="flex items-center px-2 cursor-pointer"
                  >
                    <div className="flex flex-col justify-center mr-2">
                      <span className="leading-4">4:5</span>
                    </div>
                    <div className="flex flex-col justify-center">
                      <svg
                        className="text-current"
                        fill="currentColor"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <title>Crop square icon</title>
                        <path d="M19 23H5a4.004 4.004 0 0 1-4-4V5a4.004 4.004 0 0 1 4-4h14a4.004 4.004 0 0 1 4 4v14a4.004 4.004 0 0 1-4 4ZM5 3a2.002 2.002 0 0 0-2 2v14a2.002 2.002 0 0 0 2 2h14a2.002 2.002 0 0 0 2-2V5a2.002 2.002 0 0 0-2-2Z"></path>
                      </svg>
                    </div>
                  </div>
                  <hr className="my-2 border-b border-[#dbdbdb] w-full" />

                  {/* --16:9-size-image-button--- */}
                  <div
                    onClick={() => HandleResizeImage("16:9", activeindex)}
                    className="flex items-center px-2 cursor-pointer"
                  >
                    <div className="flex flex-col justify-center mr-2">
                      <span className="leading-4">16:9</span>
                    </div>
                    <div className="flex flex-col justify-center">
                      <svg
                        className="text-current"
                        fill="currentColor"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <title>Crop landscape icon</title>
                        <path d="M19 20H5a4.004 4.004 0 0 1-4-4V8a4.004 4.004 0 0 1 4-4h14a4.004 4.004 0 0 1 4 4v8a4.004 4.004 0 0 1-4 4ZM5 6a2.002 2.002 0 0 0-2 2v8a2.002 2.002 0 0 0 2 2h14a2.002 2.002 0 0 0 2-2V8a2.002 2.002 0 0 0-2-2Z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              )
            }
            {
              // ----This-is-zoomPopup-----
              isZoom && (
                <div
                  ref={HiddenPopup}
                  className=" bg-[#1a1a1acc] py-1 rounded-md absolute top-[395px] left-[55px] z-50"
                >
                  <input
                    className="cursor-pointer px-0 mx-0"
                    max="5.0"
                    min="1.0"
                    step="0.1"
                    readOnly
                    type="range"
                    value={zoomLevel}
                    onChange={(e) => {
                      setZoomLevel(parseFloat(e.target.value));
                    }}
                    style={{
                      background:
                        "linear-gradient(to right, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 0%, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%)",
                    }}
                  />
                </div>
              )
            }
            {
              // ----This-is-AddMoreimagePopup-----
              isAddMore && (
                <div
                  ref={HiddenPopup}
                  className="bg-[#1a1a1acc] p-2 rounded-md absolute top-[370px] z-50 right-[5px] gap-2 flex flex-row min-w-[150px] max-w-sm h-fit  items-center"
                >
                  <div className="max-w-72 overflow-hidden">
                    {imageArray.length > 0 && (
                      <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={5}
                        slidesPerView={3}
                        navigation={true}
                        pagination={{ clickable: true }}
                      >
                        {imageArray.map((IMG, index) => (
                          <SwiperSlide
                            key={index}
                            className={`min-w-20 min-h-10 max-w-24 max-h-12 overflow-hidden relative`}
                          >
                            <p
                              onClick={() => HandleDelete(IMG, index)}
                              className="absolute cursor-pointer right-[2px] top-[2px] rounded-full bg-[#1a1a1acc] p-2 text-white font-normal text-sm"
                            >
                              <FaXmark />
                            </p>
                            <img
                              src={IMG}
                              alt="SHOW ADD MORE POPUP IMAGE"
                              className="min-h-[50px]"
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    )}
                  </div>

                  <div className="ml-2">
                    <input
                      type="file"
                      id="image"
                      accept="image/*"
                      className="hidden"
                      ref={clickFile}
                      onChange={Handleimageupload}
                    />

                    <p
                      onClick={() => {
                        clickFile?.current?.click();
                      }}
                      className="border-2 dark:border-[#555555] p-4 rounded-full text-base dark:text-white text-black cursor-pointer"
                    >
                      <FiPlus />
                    </p>
                  </div>
                </div>
              )
            }
            <div className="flex flex-row items-center justify-between border-b-2 dark:border-[#555555] w-full pb-2 px-2">
              <div>
                {imageArray.length > 0 && (
                  <p
                    onClick={() => {
                      setDiscardPost(true);
                    }}
                    className="text-2xl p-0 m-0"
                  >
                    <MdOutlineKeyboardArrowLeft />
                  </p>
                )}
              </div>

              <div>
                <h1 className="text-base text-black dark:text-white font-semibold  ">
                  Create new post
                </h1>
              </div>
              <div>
                {imageArray.length > 0 && (
                  <p
                    onClick={() => setAdjust(true)}
                    className="follow-link-color text-base font-bold"
                  >
                    Next
                  </p>
                )}
              </div>
            </div>
            {imageArray.length > 0 ? (
              <div>
                {/* ------here-is--image--------- */}
                <div
                  className={`max-h-[450px] max-w-[450px] h-[420px] w-[420px] flex items-center justify-center overflow-hidden`}
                >
                  {imageArray.length > 0 && (
                    <Swiper
                      modules={[Navigation, Pagination]}
                      spaceBetween={1000}
                      slidesPerView={1}
                      pagination={{ clickable: true }}
                      onSwiper={(swiper) => setActiveindex(swiper.activeIndex)}
                      onSlideChange={(e) => setActiveindex(e.activeIndex)}
                    >
                      {imageArray.map((showImg, index) => (
                        <SwiperSlide key={index}>
                          <img
                            style={{
                              transform: `scale(${zoomLevel})`,
                              transition: "transform 0.2s ease-in-out",

                            }}
                            src={showImg}
                            alt="Resized"
                            className="mx-auto my-auto w-fit"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  )}
                </div>

                <div className="flex flex-row items-center justify-between px-2 mt-2 w-full">
                  <div>
                    <div className="flex flex-row gap-4 items-center">
                      {/* ---crop-image-button--- */}
                      <p
                        onClick={() => {
                          setisCrop(!isCrop);
                        }}
                        className="dark:bg-black p-2 rounded-full bg-[#262626] cursor-pointer"
                      >
                        <svg
                          aria-label="Select Crop"
                          fill="white"
                          height="16"
                          role="img"
                          viewBox="0 0 24 24"
                          width="16"
                        >
                          <title>Select Crop</title>
                          <path d="M10 20H4v-6a1 1 0 0 0-2 0v7a1 1 0 0 0 1 1h7a1 1 0 0 0 0-2ZM20.999 2H14a1 1 0 0 0 0 2h5.999v6a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1Z"></path>
                        </svg>
                      </p>

                      {/* ---zoom-image-button-- */}
                      <p
                        onClick={() => {
                          setisZoom(!isZoom);
                        }}
                        className="dark:bg-black p-2 rounded-full bg-[#262626] cursor-pointer"
                      >
                        <svg
                          aria-label="Select Zoom"
                          fill="white"
                          height="16"
                          role="img"
                          viewBox="0 0 24 24"
                          width="16"
                        >
                          <title>Select Zoom</title>
                          <path d="m22.707 21.293-4.825-4.825a9.519 9.519 0 1 0-1.414 1.414l4.825 4.825a1 1 0 0 0 1.414-1.414ZM10.5 18.001a7.5 7.5 0 1 1 7.5-7.5 7.509 7.509 0 0 1-7.5 7.5Zm3.5-8.5h-2.5v-2.5a1 1 0 1 0-2 0v2.5H7a1 1 0 1 0 0 2h2.5v2.5a1 1 0 0 0 2 0v-2.5H14a1 1 0 0 0 0-2Z"></path>
                        </svg>
                      </p>
                    </div>
                  </div>
                  <div>
                    {/* ----another-image-button-- */}
                    <p
                      onClick={() => {
                        setAddMore(!isAddMore);
                      }}
                      className="dark:bg-black p-2 rounded-full bg-[#262626] cursor-pointer"
                    >
                      <svg
                        aria-label="Open Media Gallery"
                        fill="white"
                        height="16"
                        role="img"
                        viewBox="0 0 24 24"
                        width="16"
                      >
                        <title>Open Media Gallery</title>
                        <path
                          d="M19 15V5a4.004 4.004 0 0 0-4-4H5a4.004 4.004 0 0 0-4 4v10a4.004 4.004 0 0 0 4 4h10a4.004 4.004 0 0 0 4-4ZM3 15V5a2.002 2.002 0 0 1 2-2h10a2.002 2.002 0 0 1 2 2v10a2.002 2.002 0 0 1-2 2H5a2.002 2.002 0 0 1-2-2Zm18.862-8.773A.501.501 0 0 0 21 6.57v8.431a6 6 0 0 1-6 6H6.58a.504.504 0 0 0-.35.863A3.944 3.944 0 0 0 9 23h6a8 8 0 0 0 8-8V9a3.95 3.95 0 0 0-1.138-2.773Z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="dark:bg-[#262626] dark:text-[#ffffff]">
                <svg
                  aria-label="Icon to represent media such as images or videos"
                  fill="currentColor"
                  height="77px"
                  role="img"
                  viewBox="0 0 97.6 77.3"
                  width="96px"
                  className="mx-auto"
                >
                  <title>
                    Icon to represent media such as images or videos
                  </title>
                  <path
                    d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
                    fill="currentColor"
                  ></path>
                </svg>
                <h3 className="font-normal text-base inline">
                  Drop Photos & videos here
                </h3>
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  className="hidden"
                  ref={clickFile}
                  onChange={Handleimageupload}
                />
                <button
                  onClick={() => {
                    clickFile?.current?.click();
                  }}
                  className="bg-[#0064e0] text-[#fff] mt-7 mx-auto w-fit font-normal py-2 px-4 rounded-md text-sm md:block hidden"
                >
                  Select from computer
                </button>
                <button
                  onClick={() => {
                    clickFile?.current?.click();
                  }}
                  className="bg-[#0064e0] text-[#fff] mt-7 mx-auto w-fit font-normal py-2 px-4 rounded-md text-sm md:hidden block"
                >
                  Select from Gallery
                </button>
              </div>
            )}
          </section>
        )}
      </div>
    </>
  );
}

export default Create;
