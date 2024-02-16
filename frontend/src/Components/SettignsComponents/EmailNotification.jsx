import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function EmailNotification() {
  const [feedback , setfeedback ] = useState(false);
  const [Reminder , setReminder] = useState(true);
  const [Product , setProduct] = useState(false);
  const [News , setNews] = useState(true);
  const [Support , setSupport] = useState(false);

  return (
    <>

      <div className="w-full px-[4%] dark:text-white ">
        <h1 className="text-2xl font-bold mb-8">Notification Settings</h1>

        <section className='flex flex-col gap-9'>
          {/* ----Feedback-notifications---- */}
          <div>
          <p className="block text-black font-semibold mb-2 dark:text-white ">Feedback Notifications</p>
          <div className='flex flex-col gap-2 items-start'>
            <div>
              <label onClick={()=>{setfeedback(true)}} className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-blue-500 w-5 h-5"
                  name="feedbackNotification"
                  value='on'
                  checked={feedback}

                />
                <span className="ml-2 font-semibold text-black text-base dark:text-white ">On</span>
              </label>
            </div>
            <div>
              <label onClick={()=>{setfeedback(false)}} className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-blue-500 w-5 h-5"
                  name="feedbackNotification"
                  checked={!feedback}
                  value='off'

                />
                <span className="ml-2 font-semibold text-black text-base dark:text-white ">Off</span>
              </label>
            </div>
          </div>
          <p className='text-xs text-[#737373] font-normal tracking-wide mt-3 border-b-[1px] dark:border-[#262626] border-[#dbdbdb] pb-1'>Give feedback on Instacity.</p>
        </div>

       {/* ----Reminder emails---- */}
        <div>
          <p className="block text-black font-semibold mb-2 dark:text-white ">Reminder emails</p>
          <div className='flex flex-col gap-2 items-start'>
            <div>
              <label onClick={()=>{setReminder(true)}} className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-blue-500 w-5 h-5"
                  name="Remind"
                  value="on"
                  checked={Reminder}
                  

                />
                <span className="ml-2 font-semibold text-black text-base dark:text-white ">On</span>
              </label>
            </div>
            <div>
              <label onClick={()=>{setReminder(false)}} className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-blue-500 w-5 h-5"
                  name="Remind"
                  value="off"
                  checked={!Reminder}
                  

                />
                <span className="ml-2 font-semibold text-black text-base dark:text-white ">Off</span>
              </label>
            </div>
          </div>
          <p className='text-xs text-[#737373] font-normal tracking-wide mt-3 border-b-[1px] dark:border-[#262626] border-[#dbdbdb] pb-1'>See notifications that you may have missed.</p>
        </div>

        {/* ----Product emails---- */}
        <div>
          <p className="block text-black font-semibold mb-2 dark:text-white ">Product emails</p>
          <div className='flex flex-col gap-2 items-start'>
            <div>
              <label onClick={()=> setProduct(true)} className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-blue-500 w-5 h-5"
                  name="product"
                  value="on"
                  checked={Product}

                />
                <span className="ml-2 font-semibold text-black text-base dark:text-white ">On</span>
              </label>
            </div>
            <div>
              <label onClick={()=> setProduct(false)} className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-blue-500 w-5 h-5"
                  name="product"
                  value="off"
                  checked={!Product}

                />
                <span className="ml-2 font-semibold text-black text-base dark:text-white ">Off</span>
              </label>
            </div>
          </div>
          <p className='text-xs text-[#737373] font-normal tracking-wide mt-3 border-b-[1px] dark:border-[#262626] border-[#dbdbdb] pb-1'>Get tips and resources about Instacit's tools.</p>
        </div>

       {/* ----News emails--- */}
        <div>
          <p className="block text-black font-semibold mb-2 dark:text-white ">News emails</p>
          <div className='flex flex-col gap-2 items-start'>
            <div>
              <label onClick={()=>{setNews(true)}} className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-blue-500 w-5 h-5"
                  name="news"
                  value="on"
                  checked={News}

                />
                <span className="ml-2 font-semibold text-black text-base dark:text-white ">On</span>
              </label>
            </div>
            <div>
              <label onClick={()=>{setNews(false)}} className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-blue-500 w-5 h-5"
                  name="news"
                  value="off"
                  checked={!News}

                />
                <span className="ml-2 font-semibold text-black text-base dark:text-white ">Off</span>
              </label>
            </div>
          </div>
          <p className='text-xs text-[#737373] font-normal tracking-wide mt-3 border-b-[1px] dark:border-[#262626] border-[#dbdbdb] pb-1'>
          Learn about new Instacity features.</p>
        </div>


       {/* ----Support emails----- */}
        <div>
          <p className="block text-black font-semibold mb-2 dark:text-white ">Support emails</p>
          <div className='flex flex-col gap-2 items-start'>
            <div>
              <label onClick={()=>{setSupport(true)}} className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-blue-500 w-5 h-5"
                  name="support"
                  value="on"
                  checked={Support}
                  

                />
                <span className="ml-2 font-semibold text-black text-base dark:text-white ">On</span>
              </label>
            </div>
            <div>
              <label onClick={()=>{setSupport(false)}} className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-blue-500 w-5 h-5"
                  name="support"
                  value="off"
                  checked={!Support}

                />
                <span className="ml-2 font-semibold text-black text-base dark:text-white ">Off</span>
              </label>
            </div>
          </div>
          <p className='text-xs text-[#737373] font-normal tracking-wide mt-3 border-b-[1px] dark:border-[#262626] border-[#dbdbdb] pb-1'>
          Get updates on reports and violations of our Community Guidelines.</p>
        </div>
          
        </section>
        
     



       
      </div>



       {/* --footer-- */}
       <footer className="mt-9 text-center">
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

export default EmailNotification