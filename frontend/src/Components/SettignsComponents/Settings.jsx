import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import '../../CustomStyles/Settings.css';

function Settings() {

  const navigate = useNavigate();

  return (
    <section className='flex flex-col gap-4 px-[1%] py-4 max-h-screen overflow-hidden'>

      <header style={{ maxHeight: "calc(5vh + 12rem)" }} className='flex flex-row gap-5 items-center my-6 border-[1px] dark:border-[#262626] rounded-2xl border-[#dbdbdb] p-4'>
        <h1 className='text-base text-black dark:text-white'>Midgen</h1>
        <p className='text-sm font-normal text-black dark:text-white text-center'>you can change your informations !</p>
        <h4 className='text-xs text-[#737373] font-normal tracking-wide'>Soon, Accounts Center will be the primary place to manage your account info, settings and experiences across Midgen technologies like Instacity. <span onClick={() => navigate("/NotFound")} className='text-[#0095f6] cursor-pointer'>Learn more</span></h4>
      </header>


      <div className='flex flex-row gap-2'>

        <nav style={{ maxHeight: "calc(105vh - 12rem)" }} className='w-3/12 overflow-y-auto '>
          <h1 className='text-black dark:text-white font-semibold text-xl mb-3'>Settings</h1>


          <ul id='setting-nav' >
            <li><NavLink to='/Settings/EditProfile'>Edit Profile</NavLink></li>
            <li><NavLink to='/Settings/Language'>Languages preferences</NavLink></li>
            <li><NavLink to='/Settings/ChangePassword'>Change Password</NavLink></li>
            <li><NavLink to='/Settings/EmailNotification'>Email Notifications</NavLink></li>
            <li><NavLink to='/Settings/PushNotification'>Push Notifications</NavLink></li>
            <li><NavLink to='/Settings/Privacy'>privacy and Security</NavLink></li>
            <li><NavLink to='/Settings/LoginActivity'>Login Activity</NavLink></li>
            <li><NavLink to='/Settings/Email_Sent'>Emails From Instacity</NavLink></li>
            <li><NavLink to='/Settings/Help'>Help</NavLink></li>
          </ul>
        </nav>

        <main style={{ maxHeight: "calc(75vh - 4rem)" }} className='flex-1 max-h-[75vh] overflow-y-scroll'>
          <Outlet />
        </main>
      </div>







    </section>
  )
}

export default Settings