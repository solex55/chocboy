import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Blogarticle from '../components/blog/Blogarticle'

function Blog() {
  return (
    <div>
       <Header heroText="Blog"  />
        <Blogarticle />
       <Footer />
    </div>
  )
}

export default Blog