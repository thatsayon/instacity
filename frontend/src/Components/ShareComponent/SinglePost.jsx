import React from "react";

function SinglePost() {
    return (
        <>
            <div className="md:max-w-md max-w-xs lg:mx-0 mx-auto  bg-white rounded-sm dark:bg-[#000000] dark:text-[#ffffff] dark:border-[#262626] border-[#dbdbdb] border-b-[2px] pb-4">
                {/* User information */}
                <div className="flex items-center py-4 dark:text-[#ffffff] text-black w-full">
                    <div>
                        <img
                            src="https://media.istockphoto.com/id/1483473258/photo/smiling-young-woman-professional-in-formal-wear-with-arms-crossed-and-looking-at-camera.jpg?s=1024x1024&w=is&k=20&c=aA_psXlJflGGQ5q0dv7HALcX_K2LI9HeTEy6gMgTWMk=" // Replace with the actual user photo URL
                            alt="User Profile"
                            className="w-10 h-10 rounded-full mr-1 "
                        />
                    </div>
                    <div className="flex flex-col items-start ">
                        <p className="black-style dark:text-[#ffffff] text-black ">
                            Tabassum jakia
                        </p>
                        <p className="gray-style ">2 days ago</p>
                    </div>
                </div>

                {/* Post information */}
                <div className="py-4">
                    <h1>Hello world how ae you</h1>
                </div>
                <div className="max-w-xl max-h-96 border-2 overflow-hidden">
                <img
                    src="https://plus.unsplash.com/premium_photo-1702910931506-c2c942c6612d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with the actual post image URL
                    alt="Post"
                    className="object-cover cursor-pointer mx-auto"
                />

                </div>

                {/* Post Actions */}
                <div className="flex items-center justify-between  py-4">
                    <div className="flex space-x-4">
                        {/* ---love-icon--- */}
                        <button>
                            <svg
                                aria-label="Like"
                                fill="currentColor"
                                height="24px"
                                role="img"
                                viewBox="0 0 24 24"
                                width="24px"
                            >
                                <title>Like</title>
                                <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                            </svg>
                        </button>

                        {/* --comment-icon-- */}
                        <button>
                            <svg
                                aria-label="Comment"
                                fill="currentColor"
                                height="24px"
                                role="img"
                                viewBox="0 0 24 24"
                                width="24px"
                            >
                                <title>Comment</title>
                                <path
                                    d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                ></path>
                            </svg>
                        </button>

                        {/* ---share-icon--- */}
                        <button>
                            <svg
                                aria-label="Share Post"
                                fill="currentColor"
                                height="24px"
                                role="img"
                                viewBox="0 0 24 24"
                                width="24px"
                            >
                                <title>Share Post</title>
                                <line
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    x1="22"
                                    x2="9.218"
                                    y1="3"
                                    y2="10.083"
                                ></line>
                                <polygon
                                    fill="none"
                                    points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                                    stroke="currentColor"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                ></polygon>
                            </svg>
                        </button>
                    </div>

                    {/* Bookmark icon */}
                    <div>
                        <button >
                            <svg
                                aria-label="Save"
                                fill="currentColor"
                                height="24px"
                                role="img"
                                viewBox="0 0 24 24"
                                width="24px"
                            >
                                <title>Save</title>
                                <polygon
                                    fill="none"
                                    points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                ></polygon>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SinglePost;
