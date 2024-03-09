import React from 'react'

function Notification({ isNotification }) {
    return (
        <div
            id="NotificationPopup"
            className={`md:fixed min-h-screen right-0 top-0  bottom-0 justify-center items-center flex  max-w-md  transition-all duration-1000 ${isNotification ? "lg:left-[54px] md:left-[69px] duration-1000" : "md:left-[-456px] duration-1000"
                } `}
        >
            <div
                style={{ maxHeight: "calc(100vh - 10vh)" }}
                className="min-h-screen overflow-y-scroll bg-[#ffffff] dark:bg-black dark:text-[#ffffff] text-[#000000] max-w-md mx-auto py-4 w-full px-1"
            >
                <h1 className="text-2xl font-bold text-black dark:text-white">
                    Notifications
                </h1>
            </div>
        </div>
    )
}

export default Notification