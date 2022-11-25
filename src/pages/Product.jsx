import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import HeroImage from '../components/heroimage/Heroimage'

function Product() {
  return (
    <div>
        <Header heroText="Products" />
        <HeroImage/>
        <Footer />
    </div>
  )
}

export default Product