import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

import { googleLogout } from '@react-oauth/google';





function Explore() {
  return (
    <div className='mt-5'>
      <GoogleLogin
        onSuccess={credentialResponse => {
          // --if-you-need-decoded-
          const decoded = jwtDecode(credentialResponse?.credential);
          console.log(decoded)

          // --without-decoded--
          console.log(credentialResponse)
        }}
        onError={() => {
          console.log('Login Failed')
        }}
      />

      <button className='button-primary mt-3' onClick={()=>{ googleLogout(), console.log('heleo')}}>Log out</button>
    </div>
  )
}

export default Explore