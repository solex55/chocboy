import React from 'react'
/* import Regcontainer from '../components/sign/Regcontainer'
 */import Logincontainer from '../components/sign/Logincontainer'
/* import Signin from '../components/sign/Signin'
 */
import { Helmet } from 'react-helmet'

function Login() {
  return (
    <div>
      <Helmet>
        <title>Login | chocboy!</title>
        <meta name="description" content='chocboy Login' />
        <meta name='keyword' content='chocboy! chocolate nigeria order' />
        <link rel='canonical' href='/login' />
      </Helmet>
       <Logincontainer /> 
    </div>
  )
}

export default Login