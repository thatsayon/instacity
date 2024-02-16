import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function PushNotification() {
  const [LikesRadio , setLikesRadio ] = useState('off');
  const [LikesCommentRadio , setLikeCommentRadio ] = useState('off');
  const [CommentRadio , setCommentRadio ] = useState('off');
  const [CommentLikeRadio , setCommentLikeRadio ] = useState('off');
  const [FirstPostRadio , setFirstPostRadio ] = useState('off');
  const [Notes , setNotes ] = useState('off');
  const [Add_to_post , setAdd_to_post] = useState('off');
  const [NewFollowers , setNewFollowers ] = useState('off');
  const [AcceptedFollow , setAcceptedFollow] = useState('off');
  const [AccountSuggetion , setAccountsuggetion ] = useState('off');
  const [MessageRequest , setMessageRequest] = useState('off');
  const [MessageReminder , setMessageReminder ] = useState('off');
  const [OriginalAudio , setOriginalAudio ] = useState('off');
  const [Birthdays, setBirthdays ] = useState('off');
  

  return (
    <>

      <div className="w-full px-[4%] dark:text-white ">
        <h1 className="text-2xl font-bold mb-8">Push Notification</h1>

        <section className='flex flex-col gap-9'>
          {/* ---Likes---- */}
          <div>
            <p className="block text-black font-semibold mb-2 dark:text-white ">Likes</p>
            <div className='flex flex-col gap-2 items-start'>
              <div>
                <label onClick={() => {setLikesRadio('off')}} className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio text-blue-500 w-5 h-5"
                    name="Likes"
                    value='off'
                    checked={LikesRadio == 'off' }

                  />
                  <span className="ml-2 font-semibold text-black text-base dark:text-white ">off</span>
                </label>
              </div>
              <div>
                <label onClick={() => {setLikesRadio('form_profile_i_follow')}} className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio text-blue-500 w-5 h-5"
                    name="Likes"
                    checked={LikesRadio == 'form_profile_i_follow' }
                    value='form_profile_i_follow'

                  />
                  <span className="ml-2 font-semibold text-black text-base dark:text-white ">form profile i follow</span>
                </label>

              </div>
              <div>
                <label onClick={() => {setLikesRadio('From_everyone')}} className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio text-blue-500 w-5 h-5"
                    name="Likes"
                   
                    value='From_everyone'
                    checked={LikesRadio == 'From_everyone' }

                  />
                  <span className="ml-2 font-semibold text-black text-base dark:text-white ">From everyone</span>
                </label>
              </div>
            </div>
            <p className='text-xs text-[#737373] font-normal tracking-wide mt-3 border-b-[1px] dark:border-[#262626] border-[#dbdbdb] pb-1'>
              who likes your post.</p>
          </div>

          {/* ----Likes and comments on photos of you---- */}
          <div>
            <p className="block text-black font-semibold mb-2 dark:text-white ">Likes and comments on photos of you</p>
            <div className='flex flex-col gap-2 items-start'>
              <div>
                <label onClick={() => { setLikeCommentRadio('off') }} className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio text-blue-500 w-5 h-5"
                    name="Likes_and_comments_on_photos"
                    value="Off"
                    checked={LikesCommentRadio == 'off'}


                  />
                  <span className="ml-2 font-semibold text-black text-base dark:text-white ">Off</span>
                </label>
              </div>

              <div>
                <label onClick={() => { setLikeCommentRadio('From_profiles_I_follow') }} className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio text-blue-500 w-5 h-5"
                    name="Likes_and_comments_on_photos"
                    value="From_profiles_I_follow"
                    checked={LikesCommentRadio == 'From_profiles_I_follow'}


                  />
                  <span className="ml-2 font-semibold text-black text-base dark:text-white ">From profiles I follow</span>
                </label>
              </div>

              <div>
                <label onClick={() => { setLikeCommentRadio('From_everyone') }} className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio text-blue-500 w-5 h-5"
                    name="Likes_and_comments_on_photos"
                    value="From_everyone"
                    checked={LikesCommentRadio == 'From_everyone'}


                  />
                  <span className="ml-2 font-semibold text-black text-base dark:text-white ">From everyone</span>
                </label>
              </div>

            </div>
            <p className='text-xs text-[#737373] font-normal tracking-wide mt-3 border-b-[1px] dark:border-[#262626] border-[#dbdbdb] pb-1'>
              who commented on a post that you're tagged in.
            </p>
          </div>

          {/* ----Comments---- */}
          <div>
            <p className="block text-black font-semibold mb-2 dark:text-white ">Comments</p>
            <div className='flex flex-col gap-2 items-start'>
              <div>
                <label onClick={() => {setCommentRadio('off')}} className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio text-blue-500 w-5 h-5"
                    name="comment"
                    value="off"
                    checked={CommentRadio == 'off'}

                  />
                  <span className="ml-2 font-semibold text-black text-base dark:text-white ">off</span>
                </label>
              </div>

              <div>
                <label  onClick={() => {setCommentRadio('From_profiles_I_follow')}} className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio text-blue-500 w-5 h-5"
                    name="comment"
                    value="From_profiles_I_follow"
                    checked={CommentRadio == 'From_profiles_I_follow'}

                  />
                  <span className="ml-2 font-semibold text-black text-base dark:text-white ">From profiles I follow</span>
                </label>
              </div>

              <div>
                <label onClick={() => {setCommentRadio('From_everyone')}} className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-blue-500 w-5 h-5"
                    name="comment"
                    value="From_everyone"
                    checked={CommentRadio == 'From_everyone'}

                  />
                  <span className="ml-2 font-semibold text-black text-base dark:text-white ">From everyone</span>
                </label>
              </div>


            </div>
            <p className='text-xs text-[#737373] font-normal tracking-wide mt-3 border-b-[1px] dark:border-[#262626] border-[#dbdbdb] pb-1'>
               commente sound like : "Nice shot!".
            </p>
          </div>

          {/* ----Comment likes--- */}
          <div>
            <p className="block text-black font-semibold mb-2 dark:text-white ">Comment likes</p>
            <div className='flex flex-col gap-2 items-start'>
              <div>
                <label onClick={() => {setCommentLikeRadio('on')}} className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio text-blue-500 w-5 h-5"
                    name="comment_like"
                    value="on"
                    checked={CommentLikeRadio == 'on'}

                  />
                  <span className="ml-2 font-semibold text-black text-base dark:text-white ">On</span>
                </label>
              </div>
              <div>
                <label onClick={() => {setCommentLikeRadio('off')}} className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio text-blue-500 w-5 h-5"
                    name="comment_like"
                    value="off"
                    checked={CommentLikeRadio == 'off'}


                  />
                  <span className="ml-2 font-semibold text-black text-base dark:text-white ">Off</span>
                </label>
              </div>
            </div>
            <p className='text-xs text-[#737373] font-normal tracking-wide mt-3 border-b-[1px] dark:border-[#262626] border-[#dbdbdb] pb-1'>
            liked your comment: Nice shot!.</p>
          </div>


          {/* ----First posts and stories----- */}
          <div>
            <p className="block text-black font-semibold mb-2 dark:text-white ">First posts and stories</p>
            <div className='flex flex-col gap-2 items-start'>
              <div>
                <label onClick={() => { setFirstPostRadio('off')}} className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio text-blue-500 w-5 h-5"
                    name="First_post"
                    value="off"
                    checked={FirstPostRadio == 'off'}


                  />
                  <span className="ml-2 font-semibold text-black text-base dark:text-white ">off</span>
                </label>
              </div>

              <div>
                <label onClick={() => {setFirstPostRadio("From_profiles_I_follow")}} className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio text-blue-500 w-5 h-5"
                    name="First_post"
                    value="From_profiles_I_follow"
                    checked={FirstPostRadio == 'From_profiles_I_follow'}

                  />
                  <span className="ml-2 font-semibold text-black text-base dark:text-white ">From profiles I follow</span>
                </label>
              </div>
              <div>
                <label onClick={() => {setFirstPostRadio("From_everyone")}} className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio text-blue-500 w-5 h-5"
                    name="First_post"
                    value="From_everyone"
                    checked={FirstPostRadio == 'From_everyone'}

                  />
                  <span className="ml-2 font-semibold text-black text-base dark:text-white ">
                  From everyone</span>
                </label>
              </div>

            </div>
            <p className='text-xs text-[#737373] font-normal tracking-wide mt-3 border-b-[1px] dark:border-[#262626] border-[#dbdbdb] pb-1'>
            See  first story on Instacity and other similar notifications.</p>
          </div>

          {/* ----NOtes----- */}
          <div>
            <p className="block text-black font-semibold mb-2 dark:text-white ">Notes</p>
            <div className='flex flex-col gap-2 items-start'>
              <div>
                <label onClick={() => {setNotes('off')}} className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio text-blue-500 w-5 h-5"
                    name="Notes"
                    value="off"
                    checked={Notes == 'off'}


                  />
                  <span className="ml-2 font-semibold text-black text-base dark:text-white ">off</span>
                </label>
              </div>

              <div>
                <label onClick={() => {setNotes('on')}} className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio text-blue-500 w-5 h-5"
                    name="Notes"
                    value="on"
                    checked={Notes == 'on'}

                  />
                  <span className="ml-2 font-semibold text-black text-base dark:text-white ">on</span>
                </label>
              </div>
              

            </div>
            <p className='text-xs text-[#737373] font-normal tracking-wide mt-3 border-b-[1px] dark:border-[#262626] border-[#dbdbdb] pb-1'>
              Get updates on reports and violations of our Community Guidelines.</p>
          </div>

           {/* ----Add to post submissions--- */}
          <div>
            <p className="block text-black font-semibold mb-2 dark:text-white ">Add to post submissions</p>
            <div className='flex flex-col gap-2 items-start'>
              <div>
                <label onClick={() => {setAdd_to_post('off')}} className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-blue-500 w-5 h-5"
                    name="add_to_post"
                    value="off"
                    checked={Add_to_post == 'off'}

                  />
                  <span className="ml-2 font-semibold text-black text-base dark:text-white ">Off</span>
                </label>
              </div>
              <div>
                <label onClick={() => {setAdd_to_post('on')}} className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-blue-500 w-5 h-5"
                    name="add_to_post"
                    value="on"
                    checked={Add_to_post == 'on'}

                  />
                  <span className="ml-2 font-semibold text-black text-base dark:text-white ">On</span>
                </label>
              </div>
            </div>
            <p className='text-xs text-[#737373] font-normal tracking-wide mt-3 border-b-[1px] dark:border-[#262626] border-[#dbdbdb] pb-1'>
             jonh and 3 others want to add to your post. Review their submissions.</p>
          </div>


           {/* ----New followers--- */}
          <div>
            <p className="block text-black font-semibold mb-2 dark:text-white ">New followers</p>
            <div className='flex flex-col gap-2 items-start'>
              <div>
                <label onClick={() => {setNewFollowers('off')}} className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio text-blue-500 w-5 h-5"
                    name="NewFollowers"
                    value="off"
                    checked={NewFollowers == 'off'}

                  />
                  <span className="ml-2 font-semibold text-black text-base dark:text-white ">Off</span>
                </label>
              </div>
              <div>
                <label onClick={() => {setNewFollowers('on')}} className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio text-blue-500 w-5 h-5"
                    name="NewFollowers"
                    value="on"
                    checked={NewFollowers == 'on'}

                  />
                  <span className="ml-2 font-semibold text-black text-base dark:text-white ">On</span>
                </label>
              </div>
            </div>
            <p className='text-xs text-[#737373] font-normal tracking-wide mt-3 border-b-[1px] dark:border-[#262626] border-[#dbdbdb] pb-1'>
             New followers Notifications.</p>
          </div>

           {/* ----Accepted follow requests--- */}
          <div>
            <p className="block text-black font-semibold mb-2 dark:text-white ">Accepted follow requests</p>
            <div className='flex flex-col gap-2 items-start'>
              <div>
                <label onClick={() => {setAcceptedFollow('off')}} className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio text-blue-500 w-5 h-5"
                    name="AccepteFollow"
                    value="off"
                    checked={AcceptedFollow =='off'}

                  />
                  <span className="ml-2 font-semibold text-black text-base dark:text-white ">Off</span>
                </label>
              </div>
              <div>
                <label onClick={() => {setAcceptedFollow('on')}} className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio text-blue-500 w-5 h-5"
                    name="AccepteFollow"
                    value="on"
                    checked={AcceptedFollow =='on'}

                  />
                  <span className="ml-2 font-semibold text-black text-base dark:text-white ">On</span>
                </label>
              </div>
            </div>
            <p className='text-xs text-[#737373] font-normal tracking-wide mt-3 border-b-[1px] dark:border-[#262626] border-[#dbdbdb] pb-1'>
             Follow Request accpect Notifications .</p>
          </div>

        
           {/* ----Account suggestions--- */}
          <div>
            <p className="block text-black font-semibold mb-2 dark:text-white ">Account suggestions</p>
            <div className='flex flex-col gap-2 items-start'>
              <div>
                <label onClick={() => {setAccountsuggetion('off')}} className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio text-blue-500 w-5 h-5"
                    name="AcccontSuggestion"
                    value="off"
                    checked={AccountSuggetion == 'off'}

                  />
                  <span className="ml-2 font-semibold text-black text-base dark:text-white ">Off</span>
                </label>
              </div>
              <div>
                <label onClick={() => {setAccountsuggetion('on')}} className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio text-blue-500 w-5 h-5"
                    name="AccountSuggestion"
                    value="on"
                    checked={AccountSuggetion == 'on'}

                  />
                  <span className="ml-2 font-semibold text-black text-base dark:text-white ">On</span>
                </label>
              </div>
            </div>
            <p className='text-xs text-[#737373] font-normal tracking-wide mt-3 border-b-[1px] dark:border-[#262626] border-[#dbdbdb] pb-1'>
             Account sugestion notifications .</p>
          </div>

        
           {/* ----Message requests--- */}
          <div>
            <p className="block text-black font-semibold mb-2 dark:text-white ">Message requests</p>
            <div className='flex flex-col gap-2 items-start'>
              <div>
                <label onClick={() => {setMessageRequest('off')}} className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio text-blue-500 w-5 h-5"
                    name="MessageRequest"
                    value="off"
                    checked={MessageRequest == 'off'}

                  />
                  <span className="ml-2 font-semibold text-black text-base dark:text-white ">Off</span>
                </label>
              </div>
              <div>
                <label onClick={() => {setMessageRequest('on')}} className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio text-blue-500 w-5 h-5"
                    name="MessageRequest"
                    value="on"
                    checked={MessageRequest == 'on'}

                  />
                  <span className="ml-2 font-semibold text-black text-base dark:text-white ">On</span>
                </label>
              </div>
            </div>
            <p className='text-xs text-[#737373] font-normal tracking-wide mt-3 border-b-[1px] dark:border-[#262626] border-[#dbdbdb] pb-1'>
             Message Request notifications.</p>
          </div>


           {/* ----Message reminders--- */}
          <div>
            <p className="block text-black font-semibold mb-2 dark:text-white ">Message reminders</p>
            <div className='flex flex-col-reverse gap-2 items-start'>
              <div>
                <label onClick={() => {setMessageReminder('on')}} className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio text-blue-500 w-5 h-5"
                    name="MessageReminder"
                    value="on"
                    checked={MessageReminder == 'on'}

                  />
                  <span className="ml-2 font-semibold text-black text-base dark:text-white ">On</span>
                </label>
              </div>
              <div>
                <label onClick={() => {setMessageReminder('off')}} className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio text-blue-500 w-5 h-5"
                    name="MessageReminder"
                    value="off"
                    checked={MessageReminder == 'off'}

                  />
                  <span className="ml-2 font-semibold text-black text-base dark:text-white ">Off</span>
                </label>
              </div>
            </div>
            <p className='text-xs text-[#737373] font-normal tracking-wide mt-3 border-b-[1px] dark:border-[#262626] border-[#dbdbdb] pb-1'>
             Message Reminder notifications.</p>
          </div>

         

           {/* ----Original audio--- */}
          <div>
            <p className="block text-black font-semibold mb-2 dark:text-white ">
            Original audio
            </p>
            <div className='flex flex-col-reverse gap-2 items-start'>
              <div>
                <label onClick={() => {setOriginalAudio('on')}} className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio text-blue-500 w-5 h-5"
                    name="OriginalAudio"
                    value="on"
                    checked={OriginalAudio == 'on'}

                  />
                  <span className="ml-2 font-semibold text-black text-base dark:text-white ">On</span>
                </label>
              </div>
              <div>
                <label onClick={() => {setOriginalAudio('off')}} className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio text-blue-500 w-5 h-5"
                    name="OriginalAudio"
              
                    value="off"
                    checked={OriginalAudio == 'off'}

                  />
                  <span className="ml-2 font-semibold text-black text-base dark:text-white ">Off</span>
                </label>
              </div>
            </div>
            <p className='text-xs text-[#737373] font-normal tracking-wide mt-3 border-b-[1px] dark:border-[#262626] border-[#dbdbdb] pb-1'>
             Video or reels Original audio output notifications.</p>
          </div>

        

      

           {/* ----Birthdays--- */}
          <div>
            <p className="block text-black font-semibold mb-2 dark:text-white ">Birthdays</p>
            <div className='flex flex-col-reverse gap-2 items-start'>
              <div>
                <label onClick={() => {setBirthdays('on')}} className="inline-flex items-center cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio text-blue-500 w-5 h-5"
                    name="Birthday"
                    value="on"
                    checked={Birthdays == 'on'}

                  />
                  <span className="ml-2 font-semibold text-black text-base dark:text-white ">On</span>
                </label>
              </div>
              <div>
                <label onClick={() => {setBirthdays('off')}} className="inline-flex items-center  cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio text-blue-500 w-5 h-5"
                    name="Birthday"
                    value="off"
                    checked={Birthdays == 'off'}

                  />
                  <span className="ml-2 font-semibold text-black text-base dark:text-white ">Off</span>
                </label>
              </div>
            </div>
            <p className='text-xs text-[#737373] font-normal tracking-wide mt-3 border-b-[1px] dark:border-[#262626] border-[#dbdbdb] pb-1'>
             Birthdays notifications .</p>
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

export default PushNotification