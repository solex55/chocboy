import React from 'react'
import Forgotpassword from '../components/sign/Forgotpassword'
import { Helmet } from 'react-helmet'

function Forgot() {
  return (
    <div>
      <Helmet>
        <title>Forgot Password | chocboy!</title>
        <meta name="description" content='chocboy forgotpassword' />
        <meta name='keyword' content='chocboy! chocolate nigeria Cookies order' />
        <link rel='canonical' href='/forgotpassword' />
      </Helmet>
        <Forgotpassword />
    </div>
  )
}

export default Forgot