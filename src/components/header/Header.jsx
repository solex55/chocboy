import React from 'react'
import Heroimg from '../../assets/navbar-img.png';
import Herobar from '../../assets/about.png';
import Nav from '../nav/Nav'
import './header.css'

function Header({heroText}) {
  return (
    <div className='relative w-full h-screen bg-main'>
        <div className='absolute z-20 top-0 left-0 h-56 lg:h-fit'>
            <img src={Heroimg} alt="hero-pic" className='h-full'/>
        </div>

{/*         <div className='absolute overlay-des h-full w-full z-15  top-0 left-0 '></div>
 */}
        <div className='absolute   h-full w-full' >
            <img src={Herobar} alt="hero-pic"  className='h-full w-full object-cover mix-blend-overlay'/>
        </div>
{/*         z-10 top-0 left-0 --only use when in trouble for heroimage--
 */}         
 
        <Nav />
        <div className='absolute z-30  text-5xl font-extrabold text-white herotext'>
            <p>{heroText}</p>
        </div> 
    </div>
  )
}

export default Header