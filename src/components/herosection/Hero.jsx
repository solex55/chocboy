import React from 'react'
import Heroimg from '../../assets/navbar-img.png';
import Heromain from '../../assets/heromain.jpg';
import Nav from '../nav/Nav'
import "./hero.css"

function hero() {
  return (
    
    <div className='relative w-full h-screen '>
        <div className='absolute z-20 top-0 left-0'>
            <img src={Heroimg} alt="hero-pic" className='h-full w-full'/>
        </div>

        <Nav />

        <div className='flex absolute  herosection   items-center justify-between gap-12 z-10 px-8 md:px-12  py-12 mb-24 text-main flex-col xl:flex-row'> 
            <div className='flex flex-col gap-4 w-full xl:w-3/5'>
                  <h1 className='text-3xl lg:text-4xl mb-4'>Bringing <span className='text-6xl lg:text-6xl font-bold'>smiles</span> with the taste of <span className='text-6xl lg:text-6xl font-bold'>premium chocolate</span></h1>
                <div className='w-full hero'>
                  <input type="submit" value="Shop Now" className='bg-main text-sec inline-flex items-center justify-center px-12 py-3 text-base font-bold text-center focus:ring-4 focus:ring-red-800 rounded-lg cursor-pointer '/>
                </div>
            </div>
            <div className='w-full xl:w-2/5'>
                <img src={Heromain} alt="hero-pic"  className='object-contain w-full'/>
            </div>
        </div>
    </div>
    
    
  )
}

export default hero