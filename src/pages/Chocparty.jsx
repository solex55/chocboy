import React from 'react'
import Header from '../components/header/Header'
import Party from '../components/party/Party'
import Footer from '../components/footer/Footer'
import partyhero from '../assets/image10.png'
import { Helmet } from 'react-helmet'

function Chocparty() {
  return (
    <div>
        <Helmet>
        <title>ChocParty | chocboy!</title>
        <meta name="description" content='ChocParty is a specially organized event that is deliberately packed with fun-loving activities and an “experience” that can only be unlocked by your attendance.' />
        <meta name='keyword' content='chocboy! chocolate nigeria party tickets' />
        <link rel='canonical' href='/chocparty' />
      </Helmet>
        <Header heroText="ChocParty"  img={partyhero} />
        <Party />
        <Footer />

    </div>
  )
}

export default Chocparty