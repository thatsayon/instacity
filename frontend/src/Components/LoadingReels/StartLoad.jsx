import React from 'react';
import logo from '../../assets/LogoFolder/instaLogo.png';

function StartLoad() {
    return (
        <div>
            <div className='after-load-screen flex flex-col items-center justify-center dark:bg-[#000000] dark:text-[#ffffff]'>

                <img width='80px' height='80px' src={logo} alt="instacityLogo" />

                <div className='text-center from-afer-screen-text-color bottom-5 w-fit h-fit absolute dark:bg-[#000000] dark:text-[#ffffff]'>
                    <h1>from</h1>
                    <p className='text-base font-normal'>Midgeneration.com</p>
                </div>
            </div>
        </div>
    )
}

export default StartLoad