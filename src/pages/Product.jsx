import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
/* import HeroImage from '../components/heroimage/Heroimage'
 */import Recipe from '../components/recipe/Recipe'
 import Location from '../components/location/Location'
 import productshero from '../assets/producthero.png'

function Product() {
  return (
    <div>
        <Header heroText="Our Recipe"         img={productshero}/>
        <Recipe/>
        <Location/>
        <Footer />
    </div>
  )
}

export default Product