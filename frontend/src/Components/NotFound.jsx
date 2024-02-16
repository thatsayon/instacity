import React from 'react';
import '../CustomStyles/Notfound.css';

import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function NotFound() {

  const navigate = useNavigate();

  return (
    <>
      <div className='not-found-bg'>
        <div className='not-found-link md:px-[40px] md:py-[35px] px-[20px] py-[20px]'>
          <button onClick={() => {navigate(-1)}} className="logo">
            <FaArrowLeft />
          </button>



        </div>

        <div className="v-h-u-t">
          <span className="text-404">404</span>
          <div className="eye"></div>
          <div className="eye two"></div>

          <div className="mouth">

          </div>

          <div className="corner"></div>
          <div className="corner two"></div>
          <div className="corner three"></div>
          <div className="corner four"></div>

          <div className="over-div"></div>
          <div className="over two"></div>
          <div className="over three"></div>
          <div className="over four"></div>

          <div className="shadow-round"></div>
        </div>

        <div className="main">
          <div className="error">error</div>
          <h2>Page not found</h2>
          <h6>
            The page you are looking for might have been removed,
            <br />
            or is temporarily unavailable.
          </h6>
        </div>


      </div>





















    </>
  )
}

export default NotFound