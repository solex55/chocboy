import React from 'react'
import Heroimg from '../../assets/navbar-img.png';
import Herobar from '../../assets/about.png';
import Nav from '../nav/Nav'
import './header.css'

function Header({heroText}) {
  return (
    <div className='relative w-full h-screen '>
        <div className='absolute z-20 top-0 left-0 h-56 lg:h-fit'>
            <img src={Heroimg} alt="hero-pic" className='h-full'/>
        </div>

        <div className='absolute overlay-des h-full w-full z-15  top-0 left-0 '></div>

        <div className='absolute z-10 top-0 left-0 h-full w-full'>
            <img src={Herobar} alt="hero-pic" className='h-full w-full'/>
        </div>

        <Nav />

        <div className='absolute z-30  text-5xl font-extrabold text-white herotext'>
            <p>{heroText}</p>
        </div>
    </div>
  )
}

export default Header