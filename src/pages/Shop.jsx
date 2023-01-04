import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Catalogue from '../components/catalogue/Catalogue'
import shophero from '../assets/shophero.png'
import { Helmet } from 'react-helmet'

function Shop() {
  return (
    <div>
    <Helmet>
    <title>Shop | chocboy!</title>
    <meta name="description" content='Shop' />
    <meta name='keyword' content='chocboy! chocolate nigeria order Shop ' />
    <link rel='canonical' href='/Shop' />
    </Helmet>
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