import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
/* import HeroImage from '../components/heroimage/Heroimage'
 */import Recipe from '../components/recipe/Recipe'

function Product() {
  return (
    <div>
        <Header heroText="Our Recipe" />
        <Recipe/>
        <Footer />
    </div>
  )
}

export default Product