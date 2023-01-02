import React from 'react'

import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Profiles from '../components/profiles/Profiles'
import bloghero from '../assets/bloghero.png'
function Profile() {
  return (
    <div>
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