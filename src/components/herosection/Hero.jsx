import React from 'react'
import Heroimg from '../../assets/navbar-img.png';
import Heromain from '../../assets/heromain.jpg';
import Nav from '../nav/Nav'
import "./hero.css"

function hero() {
  return (
    
    <div className='relative w-full h-screen'>
        <div className='absolute z-20 top-0 left-0'>
            <img src={Heroimg} alt="hero-pic"/>
        </div>

        <Nav />

        <div className='flex absolute  herosection   items-center justify-between gap-12 z-10 px-8 md:px-12  py-12 mb-24 text-main flex-col xl:flex-row'> 
            <div className='flex flex-col gap-4 w-full xl:w-3/5'>
                  <h1 className='text-3xl lg:text-4xl'>We give <span className='text-6xl lg:text-6xl font-extrabold'>sweetness</span> and <span className='text-6xl lg:text-6xl font-extrabold'>Lots of fun</span></h1>
                <div className='w-full hero'>
                  <input type="submit" value="Order Now" className='bg-main text-sec hover:text-main py-4 px-12 basis-1/3  rounded-md cursor-pointer'/>
                </div>
            </div>
            <div className='w-full xl:w-2/5 xl:block'>
                <img src={Heromain} alt="hero-pic"  className='object-contain w-full'/>
            </div>
        </div>
    </div>
    
    
  )
}

export default hero