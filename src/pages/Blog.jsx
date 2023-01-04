import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Blogarticle from '../components/blog/Blogarticle'
import bloghero from '../assets/bloghero.png'
import { Helmet } from 'react-helmet'

function Blog() {
  return (
    <div>
      <Helmet>
        <title>Blog | chocboy!</title>
        <meta name="description" content='Get info on all of chocboy products, recipes and latest news' />
        <meta name='keyword' content='chocboy! chocolate nigeria sweet chocki news blog' />
        <link rel='canonical' href='/blog' />
      </Helmet>
       <Header 
        heroText="Blog" 
        img={bloghero}
       />
        <Blogarticle />
       <Footer />
    </div>
  )
}

export default Blog