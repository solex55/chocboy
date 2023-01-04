import React from 'react'
import Otp from '../components/sign/Otp'
import { Helmet } from 'react-helmet'

function OtPassword() {
  return (
    <div>
      <Helmet>
        <title>OTP | chocboy!</title>
        <meta name="description" content='chocboy' />
        <meta name='keyword' content='chocboy! chocolate nigeria order' />
        <link rel='canonical' href='/otp-password' />
      </Helmet>
        <Otp />
    </div>
  )
}

export default OtPassword