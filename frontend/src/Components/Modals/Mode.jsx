import React, { useEffect, useState } from 'react'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";




function Mode({ setDark, setClickMore, checked, setchecked }) {

   




    const onChange = () => {
        setchecked(!checked)

        if (!checked) {
            localStorage.setItem('Dark', true)
        }
        else {
            localStorage.setItem('Dark', false)
        }


    }
    return (
        <>
            <div
                onClick={(e) => {
                    if (e.target !== e.currentTarget) {
                        return;
                    }
                    setDark(false)

                }}
                className=" fixed right-0 top-0 z-50 left-0 bottom-0 justify-center items-center flex dropdown"
            >

                <div className="scrollbar-hide max-h-[95vh]  my-auto bg-[#ffffff] dark:bg-[#262626]  dark:text-[#ffffff] text-[#000000] shadow-lg max-w-xs mx-auto py-4 w-full rounded-md ">

                    <div className='text-[#000000] dark:text-[#ffffff] flex flex-row justify-between items-center border-b-2 dark:border-[#555555] px-2 pb-2 w-full'>
                        <div className='flex flex-row gap-2'>
                            <button onClick={() => { setClickMore(true), setDark(false) }} className='text-md'><MdOutlineKeyboardArrowLeft /></button>

                            <h1>Switch appearance</h1>
                        </div>

                        <p className='text-2xl dark:text-[#ffffff]'>{checked ? <CiDark /> : <CiLight />}</p>
                    </div>
                    <div className='mt-3 flex items-center justify-between dark:text-[#ffffff] text-[#000000] px-4'>
                        <p>{checked ? "Dark Mode" : "Light Mode"}</p>
                        {/* ---switch-- */}
                        <label className="flex items-center cursor-pointer">
                            <div className="relative">
                                <input type="checkbox" className="hidden" onChange={onChange} />
                                <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                                <div className={`toggle__dot absolute w-6 h-6 bg-[#ffffff] rounded-full shadow inset-y-[-4px] left-0 transition-all delay-75 ${checked ? 'translate-x-6' : 'translate-x-0'}`}></div>
                            </div>
                        </label>
                    </div>


                </div>

            </div>







        </>
    )
}

export default Mode