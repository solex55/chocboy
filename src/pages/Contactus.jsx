import React from 'react'
import Header from '../components/header/Header'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import abouthero from '../assets/about.png'
import { Helmet } from 'react-helmet'

function Contactus() {
  return (
    <div>
      <Helmet>
        <title>Contact | chocboy!</title>
        <meta name="description" content='Our amazing customer care officials are always ready to help.' />
        <meta name='keyword' content='chocboy! chocolate nigeria ' />
        <link rel='canonical' href='/contact-us' />
      </Helmet>
      <Header heroText="Contact Us" 
        img={abouthero}
      />
      <Contact />
      <Footer />
    </div>  )
}

export default Contactus