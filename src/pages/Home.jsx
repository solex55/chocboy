import React from 'react'
import Hero from '../components/herosection/Hero'
import Feature from '../components/featuresection/Feature'
import Discover from '../components/discover/Discover'
import Footer from '../components/footer/Footer'


function Home() {
  return (
    <div>
        <Hero />
        <Feature />
        <Discover />
        <Footer />
    </div>
  )
}

export default Home; 