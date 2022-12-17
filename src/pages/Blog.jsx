import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Blogarticle from '../components/blog/Blogarticle'
import bloghero from '../assets/bloghero.png'

function Blog() {
  return (
    <div>
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