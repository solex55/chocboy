import React from 'react'
import Regcontainer from '../components/sign/Regcontainer'
import { Helmet } from 'react-helmet'

function Register() {
  return (
    <><Helmet>
    <title>Register | chocboy!</title>
    <meta name="description" content='Register' />
    <meta name='keyword' content='chocboy! chocolate nigeria order' />
    <link rel='canonical' href='/register' />
    </Helmet>
    <Regcontainer />

    </>
  )
}

export default Register