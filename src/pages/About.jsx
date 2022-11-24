import React from 'react'
import Header from '../components/header/Header'
import Abouttext from '../components/aboutText/Abouttext'
import Team from '../components/team/Team'
import Footer from '../components/footer/Footer'

export default function About() {
  return (
    <div>
      <Header heroText="About Us" />
      <Abouttext />
      <Team />
      <Footer />

    </div>
  )
}