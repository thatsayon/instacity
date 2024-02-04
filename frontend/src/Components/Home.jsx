import React from 'react'
import Post from './ShareComponent/Post'

function Home() {
  return (
    <div className='px-[3%] py-4 pb-6  flex flex-row items-center '>
      <div className='lg:w-2/3 w-full lg:pl-14 '>
        <Post />
        
      </div>
      <div className='lg:block hidden'>

      </div>
    </div>




  )
}

export default Home