import React from 'react'
import Reset from '../components/sign/Reset'
import { Helmet } from 'react-helmet'

function Resetpassword() {
  return (
    <div>
      <Helmet>
    <title>Reset | chocboy!</title>
    <meta name="description" content='Reset Password' />
    <meta name='keyword' content='chocboy! chocolate nigeria order' />
    <link rel='canonical' href='/reset-password' />
    </Helmet>
        <Reset />
    </div>
  )
}

export default Resetpassword