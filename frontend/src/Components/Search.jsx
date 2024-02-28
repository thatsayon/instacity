import React from 'react'

function Search({ isSearch }) {
    return (
        <div
            className={`md:fixed min-h-screen right-0 top-0  bottom-0 justify-center items-center flex  max-w-md  transition-all duration-500 ${isSearch ? "lg:left-[54px] md:left-[69px]" : "md:left-[-456px]"
                } `}
        >
            <div
                style={{ maxHeight: "calc(100vh - 10vh)" }}
                className="min-h-screen overflow-y-scroll bg-[#ffffff] dark:bg-black dark:text-[#ffffff] text-[#000000] max-w-md mx-auto py-4 w-full"
            >
                <h1 className="text-2xl font-medium text-black dark:text-white my-2  px-2">
                    Search
                </h1>

                <div className="mt-4  px-2 relative">

                    <input type="search" className="w-full input-bg placeholder:text-[#737373]" placeholder="Search" />
                </div>
                <p className="text-xs text-[#737373] font-normal tracking-wide my-5 border-b-[1px] dark:border-[#262626] border-[#dbdbdb] w-full"></p>

                <div className="px-2">
                    <h1 className="gray-style-16">Recent</h1>
                </div>
            </div>
        </div>
    )
}

export default Search