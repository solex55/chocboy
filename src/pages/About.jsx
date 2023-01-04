import React from 'react'
import Header from '../components/header/Header'
import Values from '../components/values/Values'
import Abouttext from '../components/aboutText/Abouttext'
import Team from '../components/team/Team'
import Footer from '../components/footer/Footer'
import abouthero from '../assets/about.png'
import { Helmet } from 'react-helmet'
export default function About() {
  return (
    <div>
      <Helmet>
        <title>About | chocboy!</title>
        <meta name="description" content='The ChocBoy Brand is a chocolate production company located in Ibadan, Nigeria.' />
        <meta name='keyword' content='chocboy! chocolate nigeria sweet chocki' />
        <link rel='canonical' href='/about' />
      </Helmet>
      <Header heroText="About Us" 
        img={abouthero}
      />
      <Values />
      <Abouttext />
      <Team />
      <Footer />

    </div>
  )
}