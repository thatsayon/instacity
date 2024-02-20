import React, { useEffect, useRef, useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import 'react-image-crop/dist/ReactCrop.css'
import ReactCrop from 'react-image-crop'

function Create({ setCreate, setDiscardPost }) {
  const clickFile = useRef();
  const [image, setimage] = useState("");
  const [isCrop, setisCrop] = useState(false);
  const [resizedImage, setResizedImage] = useState(null);
  const [Ratio, setRatio] = useState(null);

  const Handleimageupload = (e) => {
    if (e?.target?.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (upload) => {
        const img = new Image();
        img.src = upload?.target?.result;

        img.onload = () => {
          setimage(img);
          setResizedImage(upload.target.result);
          setRatio(null);
        };
      };
      reader.onerror = (error) => {
        console.log(error);
      };
    } else {
      setimage("");
    }

    if (file) {
      reader.readAsDataURL(file);
    }
  };


  const HandleResizeImage = (aspectRatio) => {
    const canvas = document.createElement('canvas');
    const canvasContext = canvas.getContext('2d');
    let newWidth, newHeight;

    if (aspectRatio === 'original') {
      newWidth = image.width;
      newHeight = image.height;
    } else if (aspectRatio === '1:1') {
      const minSize = Math.min(image.width, image.height);
      newWidth = minSize;
      newHeight = minSize;
    } else if (aspectRatio === '16:9') {
      newWidth = Math.min(image.width, image.height * (16 / 9));
      newHeight = newWidth / (16 / 9);
    } else if (aspectRatio === '4:5') {
      newHeight = Math.min(image.height, image.width * (4 / 5));
      newWidth = newHeight * (4 / 5);
    }

    canvas.width = newWidth;
    canvas.height = newHeight;

    canvasContext.drawImage(image, 0, 0, newWidth, newHeight);

    const resizedImgDataUrl = canvas.toDataURL('image/jpeg');
    setResizedImage(canvas.toDataURL('image/jpeg'));
  };

  useEffect(() => {
    if (image && Ratio) {
      HandleResizeImage(Ratio)
    }

  }, [Ratio])




  return (
    <>
      <div
        className="fixed right-0 top-0 px-2 bg-[#00000080] z-50 left-0 bottom-0 justify-center items-center flex "
        onClick={(e) => {
          if (e.target !== e.currentTarget) {
            return;
          }
          if (image) {
            setDiscardPost(true);
          } else {
            setCreate(false);
          }
        }}>
          <div style={{ maxHeight: "calc(100vh - 10vh)" }} className={`min-h-[50vh] relative overflow-y-auto overflow-hidden shadow-lg bg-white dark:bg-[#262626] dark:text-[#ffffff] text-black font-bold shadow-[#364e7e1a] max-w-xl min-w-96 py-4 rounded-xl flex items-center ${image ? "gap-2" : "gap-20"} flex-col`}>
          {
            isCrop &&
            <div className="flex flex-col bg-[#1a1a1acc] py-2 rounded-md absolute top-[140px] left-[5px]">
              {/* ---original-size-button---- */}
              <div onClick={() => setRatio('original')} className="flex items-center px-2 cursor-pointer">
                <div className="flex flex-col justify-center mr-2">
                  <span className="leading-4">Original</span>
                </div>
                <div className="flex flex-col justify-center">
                  <svg className="text-current" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
                    <title>Photo outline icon</title>
                    <path d="M6.549 5.013A1.557 1.557 0 1 0 8.106 6.57a1.557 1.557 0 0 0-1.557-1.557Z" fillRule="evenodd"></path>
                    <path d="m2 18.605 3.901-3.9a.908.908 0 0 1 1.284 0l2.807 2.806a.908.908 0 0 0 1.283 0l5.534-5.534a.908.908 0 0 1 1.283 0l3.905 3.905" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
                    <path d="M18.44 2.004A3.56 3.56 0 0 1 22 5.564h0v12.873a3.56 3.56 0 0 1-3.56 3.56H5.568a3.56 3.56 0 0 1-3.56-3.56V5.563a3.56 3.56 0 0 1 3.56-3.56Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </div>
              </div>
              <hr className="my-2 border-b border-[#dbdbdb] w-full" />

              {/* ----1:1---size-image--button--- */}
              <div onClick={() => setRatio('1:1')} className="flex items-center px-2 cursor-pointer">
                <div className="flex flex-col justify-center mr-2">
                  <span className="leading-4">1:1</span>
                </div>
                <div className="flex flex-col justify-center">
                  <svg className="text-current" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
                    <title>Crop square icon</title>
                    <path d="M19 23H5a4.004 4.004 0 0 1-4-4V5a4.004 4.004 0 0 1 4-4h14a4.004 4.004 0 0 1 4 4v14a4.004 4.004 0 0 1-4 4ZM5 3a2.002 2.002 0 0 0-2 2v14a2.002 2.002 0 0 0 2 2h14a2.002 2.002 0 0 0 2-2V5a2.002 2.002 0 0 0-2-2Z"></path>
                  </svg>
                </div>
              </div>
              <hr className="my-2 border-b border-[#dbdbdb] w-full" />

              {/* ---4:5-size-image-button--- */}
              <div onClick={() => setRatio('4:5')} className="flex items-center px-2 cursor-pointer">
                <div className="flex flex-col justify-center mr-2">
                  <span className="leading-4">4:5</span>
                </div>
                <div className="flex flex-col justify-center">
                  <svg className="text-current" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
                    <title>Crop portrait icon</title>
                    <path d="M16 23H8a4.004 4.004 0 0 1-4-4V8a4.004 4.004 0 0 1 4-4h8a4.004 4.004 0 0 1 4 4v11a4.004 4.004 0 0 1-4 4ZM8 6a2.002 2.002 0 0 0-2 2v11a2.002 2.002 0 0 0 2 2h8a2.002 2.002 0 0 0 2-2V8a2.002 2.002 0 0 0-2-2Z"></path>
                  </svg>
                </div>
              </div>
              <hr className="my-2 border-b border-[#dbdbdb] w-full" />

              {/* --16:9-size-image-button--- */}
              <div onClick={() => setRatio('16:9')} className="flex items-center px-2 cursor-pointer">
                <div className="flex flex-col justify-center mr-2">
                  <span className="leading-4">16:9</span>
                </div>
                <div className="flex flex-col justify-center">
                  <svg className="text-current" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
                    <title>Crop landscape icon</title>
                    <path d="M19 20H5a4.004 4.004 0 0 1-4-4V8a4.004 4.004 0 0 1 4-4h14a4.004 4.004 0 0 1 4 4v8a4.004 4.004 0 0 1-4 4ZM5 6a2.002 2.002 0 0 0-2 2v8a2.002 2.002 0 0 0 2 2h14a2.002 2.002 0 0 0 2-2V8a2.002 2.002 0 0 0-2-2Z"></path>
                  </svg>
                </div>
              </div>
            </div>




          }
          <div className="flex flex-row items-center justify-between border-b-2 dark:border-[#555555] w-full pb-2 px-2">

            <div>
              {image && (
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
              {image && (
                <p className="follow-link-color text-base font-bold">Next</p>
              )}
            </div>
          </div>
          {image ? (
            <div>
              {/* ------here-is--image--------- */}
              <div>
                {resizedImage && <img src={resizedImage} alt="Resized" />}

              </div>

              <div className="flex flex-row items-center justify-between px-2 mt-2">
                <div>
                  <div className="flex flex-row gap-4 items-center">
                    {/* ---crop-image-button--- */}
                    <p onClick={() => { setisCrop(!isCrop) }} className="dark:bg-black p-2 rounded-full bg-[#262626] cursor-pointer">
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
                    <p className="dark:bg-black p-2 rounded-full bg-[#262626] cursor-pointer">
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
                  <p className="dark:bg-black p-2 rounded-full bg-[#262626] cursor-pointer">
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
                <title>Icon to represent media such as images or videos</title>
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
              <button onClick={() => {
                clickFile?.current?.click();
              }} className="bg-[#0064e0] text-[#fff] mt-7 mx-auto w-fit font-normal py-2 px-4 rounded-md text-sm md:hidden block">
                Select from Gallery
              </button>
            </div>
          )}





        </div>
      </div>























    </>
  );
}

export default Create;

/**
 * NOTES :
 * setDiscardPost those state come from app component !
 * 

        <div style={{
                  backgroundImage: `url(${image})`,
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  width : "348px",
                  height : '348px',
                  overflow: 'hidden',
                 
                  transform: 'none'
                }}>
                </div>
 *
 * **/
