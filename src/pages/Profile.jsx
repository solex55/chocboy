import React from 'react'
import { Helmet } from 'react-helmet'

import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Profiles from '../components/profiles/Profiles'
import bloghero from '../assets/bloghero.png'
function Profile() {
  return (
    <div>
      <Helmet>
        <title>Profile | chocboy!</title>
        <meta name="description" content='Profile' />
        <meta name='keyword' content='chocboy! chocolate nigeria order' />
        <link rel='canonical' href='/profile' />
        </Helmet>
        <Header 
        heroText="Profile" 
        img={bloghero}
       />
        <Profiles />
       <Footer />
    </div>
  )
}

export default Profile