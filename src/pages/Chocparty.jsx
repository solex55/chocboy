import React from 'react'
import Header from '../components/header/Header'
import Party from '../components/party/Party'
import Footer from '../components/footer/Footer'
import partyhero from '../assets/image10.png'

function Chocparty() {
  return (
    <div>
        <Header heroText="ChocParty"  img={partyhero} />
        <Party />
        <Footer />

    </div>
  )
}

export default Chocparty