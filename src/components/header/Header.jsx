import React from 'react'
import Heroimg from '../../assets/navbar-img.png';
import Herobar from '../../assets/about.png';
import Nav from '../nav/Nav'
import './header.css'

function Header({heroText}) {
  return (
    <div className='relative w-full h-screen '>
        <div className='absolute z-20 top-0 left-0'>
            <img src={Heroimg} alt="hero-pic"/>
        </div>

        <div className='absolute z-10 top-0 left-0 h-full'>
            <img src={Herobar} alt="hero-pic" className='h-full'/>
        </div>

        <Nav />

        <div className='absolute z-20 top-1/2 lg:top-3/4 text-5xl font-extrabold text-white text-center herotext'>
            <p>{heroText}</p>
        </div>
    </div>
  )
}

export default Header