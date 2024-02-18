import React, { useEffect } from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import '../../CustomStyles/EmailFromInstacity.css';

function EmailFromInstacity() {

  const navigate = useNavigate();


  useEffect(()=>{
    navigate('/Settings/Email_Sent/Security')
  },[])

  return (
    <>
      <div className='min-h-[56vh]'>
        <h1 className='text-black dark:text-white font-bold text-2xl'>Emails from Instacity</h1>
        <br />
        <div >
          <div className='email-from-instacity flex flex-row justify-between  border-b-[1px] dark:border-[#262626] border-[#dbdbdb]'>
            <div className='w-[50%]'>
              <NavLink  to="/Settings/Email_Sent/Security" className={` flex items-center w-full pb-2 transition-all duration-500  justify-center text-[#737373]`}>
               Security
              </NavLink>
            </div>
            <div className='w-[50%]'>
              <NavLink to='/Settings/Email_Sent/Other'className={`flex items-center w-full pb-2  justify-center text-[#737373] transition-all duration-500 `} >Other</NavLink>
            </div>
          </div>
          <br />
          <Outlet />
        </div>
      </div >




      {/* --footer-- */}
      <footer className=" text-center">
          <ul id="footer-ul" className=" mx-auto justify-center">
            <li>
              <Link to="/Notfound">About ,</Link>
            </li>
            <li>
              <Link to="/Notfound">Help ,</Link>
            </li>
            <li>
              <Link to="/Notfound">press ,</Link>
            </li>
            <li>
              <Link to="/Notfound">jobs ,</Link>
            </li>
            <li>
              <Link to="/Notfound">privacy ,</Link>
            </li>
            <li>
              <Link to="/Notfound">Terms ,</Link>
            </li>
            <li>
              <Link to="/Notfound">Location ,</Link>
            </li>
            <li>
              <Link to="/Notfound">instagram ,</Link>
            </li>
            <li>
              <Link to="/Notfound">Migen ,</Link>
            </li>
            <li>
              <Link to="/Notfound">Blog , </Link>
            </li>
            <li>
              <Link to="/Notfound">contact uploading</Link>
            </li>
          </ul>

          <div className="mt-2 copy-write">
            <span>&copy; 2024 Instacity from Midgen</span>
          </div>
        </footer>










    </>
  )
}

export default EmailFromInstacity