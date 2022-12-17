import React from 'react'
import Header from '../components/header/Header'
import Values from '../components/values/Values'
import Abouttext from '../components/aboutText/Abouttext'
import Team from '../components/team/Team'
import Footer from '../components/footer/Footer'
import abouthero from '../assets/about.png'

export default function About() {
  return (
    <div>
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