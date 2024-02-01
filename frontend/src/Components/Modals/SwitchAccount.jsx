import React, { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function SwitchAccount({ setSwitchaccount }) {
    const [showPass, setShowpass] = useState(false);


    const HandleSwitchAccount = (e) => {
        e.preventDefault();


        const data = new FormData(e.currentTarget);
        const email = data.get('email');
        const password = data.get('password');

        console.log(email, password)

    }
    return (
        <>

            <div
                onClick={(e) => {
                    if (e.target !== e.currentTarget) {
                        return;
                    }

                    setSwitchaccount(false)


                }}
                className=" fixed right-0 top-0 z-50 left-0 bg-[#00000080] bottom-0 justify-center items-center flex dropdown"
            >

                <div className="scrollbar-hide max-h-[95vh]  my-auto bg-[#ffffff] dark:bg-[#262626]  dark:text-[#ffffff] text-[#000000] shadow-lg max-w-sm mx-auto py-4 w-full rounded-md ">

                <p className={`text-3xl italic text-gray-700 pb-4 text-center dark:text-[#ffffff]   `}>InstaCity</p>

                    <form onSubmit={HandleSwitchAccount} className="form max-w-[260px] mx-auto">
                        <div>
                            <label htmlFor="email">
                                <input className='dark:bg-[#1a1a1a] dark:border-[#262626] ' type="email" name="email" id="email" required placeholder="Enter your email " />
                            </label>
                            <label className="relative" htmlFor="password">
                                <input className='dark:bg-[#1a1a1a] dark:border-[#262626]' type={`${showPass ? 'text' : 'password'}`} required name="password" id="password" placeholder="Enter your password " />
                                <button onClick={() => setShowpass(!showPass)} className="absolute top-[11px] left-[235px]">{showPass ? <FaEye /> : <FaEyeSlash />}</button>
                            </label>

                        </div>

                        <button className="button-primary w-full justify-center text-base mt-3">Sign in</button>
                    </form>

                    <p className='text-center text-xs font-normal pt-4'>Forget password ?</p>




                </div>

            </div>













        </>
    )
}

export default SwitchAccount