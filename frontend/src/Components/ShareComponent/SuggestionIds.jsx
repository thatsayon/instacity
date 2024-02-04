import React from 'react'

function SuggestionIds() {
    return (
        <>

            <div className="flex items-center justify-between">
                <div className='flex items-center'>
                    <img
                        src="https://media.istockphoto.com/id/1483473258/photo/smiling-young-woman-professional-in-formal-wear-with-arms-crossed-and-looking-at-camera.jpg?s=1024x1024&w=is&k=20&c=aA_psXlJflGGQ5q0dv7HALcX_K2LI9HeTEy6gMgTWMk="  // Replace with the actual user photo URL
                        alt="User Profile"
                        className="w-8 h-8 rounded-full mr-2 "
                    />
                    <div className='flex items-start flex-col'>
                        {/* ---full-name--- */}
                        <p className="black-style dark:text-[#ffffff] text-black ">Tabassum jakia</p>


                     
                        <p className="gray-style">suggestion for you</p>
                    </div>
                </div>
                <div>
                    <button className=' link-color '>Follow</button>
                </div>


            </div>









        </>
    )
}

export default SuggestionIds