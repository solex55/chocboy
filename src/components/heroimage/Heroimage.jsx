import React from 'react'
import { Link } from 'react-router-dom'
import Navimghero from '../../assets/choc40.png';
import Heromain from '../../assets/heromain1.png';
import Nav from '../nav/Nav'
import "../herosection/hero.css"

function Heroimage() {
  return (
    <div className='relative w-full h-screen bg-main'>
    {/* <div className='absolute z-20 top-0 left-0 h-fit w-full'>
        <img src={Heroimg} alt="hero-pic" className='h-full w-full'/>
    </div> */}
    <div className='absolute h-full w-full'>
        <img src={Navimghero} alt="hero-pic" className='h-full w-full object-cover mix-blend-overlay'/>
    </div>

    <Nav />

    <div className='flex absolute  herosection   items-center justify-between gap-12 z-30 px-8 md:px-12  py-12 mb-24 text-main flex-col xl:flex-row'> 
        <div className='flex flex-col gap-4 w-full xl:w-3/5'>
        <h1 className='text-4xl lg:text-6xl mb-4 max-w-lg text-white'>Anytime is <br /><span className='text-6xl lg:text-6xl font-bold'> Chocolate time!</span></h1>
            <div className='w-full hero'>
              <Link to="/shop">
              <button className='px-2 lg:px-4 py-4 w-36 lg:w-72 text-center text-main rounded-md shadow-md text-sm lg:text-xl font-bold bg-sec' >Shop Now</button>
              </Link>
            </div>
        </div>
        
        <div className='w-full xl:w-2/5'>
            <img src={Heromain} alt="hero-pic"  className='object-contain w-full'/>
        </div>
    </div>
    </div>
  )
}

export default Heroimage