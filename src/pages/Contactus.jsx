import React from 'react'
import Header from '../components/header/Header'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import abouthero from '../assets/about.png'
function Contactus() {
  return (
    <div>
      <Header heroText="Contact Us" 
        img={abouthero}
      />
      <Contact />
      <Footer />
    </div>  )
}

export default Contactus