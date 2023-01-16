import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
/* import HeroImage from '../components/heroimage/Heroimage'
 */import Recipe from '../components/recipe/Recipe'
 import Location from '../components/location/Location'
 import productshero from '../assets/prohero.png'
 import { Helmet } from 'react-helmet'

function Product() {
  return (
    <div>
        <Helmet>
        <title>Products | chocboy!</title>
        <meta name="description" content='chocboy Products brownies bread breadstick cookies mousse truffles' />
        <meta name='keyword' content='chocboy! chocolate nigeria order' />
        <link rel='canonical' href='/products' />
        </Helmet>
        <Header heroText="Our Recipe"         img={productshero}/>
        <Recipe/>
        <Location/>
        <Footer />
    </div>
  )
}

export default Product