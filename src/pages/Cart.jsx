import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
/* import Catalogue from '../components/catalogue/Catalogue'
 */import shophero from '../assets/shophero.png'
import { Helmet } from 'react-helmet'

function Cart() {
  return (
    <div>
    <Helmet>
    <title>Cart | chocboy!</title>
    <meta name="description" content='Cart' />
    <meta name='keyword' content='chocboy! chocolate nigeria order Shopping cart ' />
    <link rel='canonical' href='/cart' />
    </Helmet>
        <Header 
          heroText="Cart"
          img={shophero} 
        />
        {/* <Catalogue/> */}
        <Footer />
    </div>
  )
}

export default Cart