import React, { useEffect } from 'react'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import '../../CustomStyles/settings.css'

function Settings() {


  const location = useLocation();
  const navigate = useNavigate();




  useEffect(() => {
    navigate('/Settings/EditProfile')
  }, [location.pathname == '/settings'])


  return (
    <section className='flex flex-col gap-4 px-[4%] py-4 min-h-screen'>

      <header className='flex flex-row gap-5 items-center my-6 border-[1px] dark:border-[#262626] rounded-2xl border-[#dbdbdb] p-4'>
        <h1 className='text-base text-black dark:text-white'>Midgen</h1>
        <p className='text-sm font-normal text-black dark:text-white text-center'>you can change your informations !</p>
        <h4 className='text-xs text-[#737373] font-normal tracking-wide'>Soon, Accounts Center will be the primary place to manage your account info, settings and experiences across Midgen technologies like Instacity. <span onClick={()=> navigate("/NotFound")} className='text-[#0095f6] cursor-pointer'>Learn more</span></h4>
      </header>


      <div className='flex flex-row gap-2'>

        <nav className='w-3/12'>
          <ul id='setting-nav' >
            <li><NavLink to='/Settings/EditProfile'>Edit Profile</NavLink></li>
            <li><NavLink to='/Settings/Language'>Languages preferences</NavLink></li>
            <li><NavLink to='/Settings/ChangePassword'>Change Password</NavLink></li>
            <li><NavLink to='/Settings/AppsandWeb'>Apps And Websites</NavLink></li>
            <li><NavLink to='/Settings/EmailNotification'>Email Notifications</NavLink></li>
            <li><NavLink to='/Settings/PushNotification'>Push Notifications</NavLink></li>
            <li><NavLink to='/Settings/Privacy'>privacy and Security</NavLink></li>
            <li><NavLink to='/Settings/LoginActivity'>Login Activity</NavLink></li>
            <li><NavLink to='/Settings/Email_Sent'>Emails From Instacity</NavLink></li>
            <li><NavLink to='/Settings/Help'>Help</NavLink></li>
          </ul>
        </nav>

        <main className='flex-1'>
          <Outlet />
        </main>
      </div>







    </section>
  )
}

export default Settings