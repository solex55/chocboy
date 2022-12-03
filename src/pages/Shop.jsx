import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Catalogue from '../components/catalogue/Catalogue'

function Shop() {
  return (
    <div>
        <Header heroText="Shop" />
        <Catalogue/>
        <Footer />
    </div>
  )
}

export default Shop