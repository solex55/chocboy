import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Catalogue from '../components/catalogue/Catalogue'
import shophero from '../assets/shophero.png'

function Shop() {
  return (
    <div>
        <Header 
          heroText="Shop"
          img={shophero} 
        />
        <Catalogue/>
        <Footer />
    </div>
  )
}

export default Shop