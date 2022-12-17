import React from 'react'
import './feature.css'
import { Link } from 'react-router-dom'
import frame1 from '../../assets/frame1.png';
import frame2 from '../../assets/frame2.png';
import frame3 from '../../assets/frame3.png';
import frame4 from '../../assets/frame4.png';
import party1 from '../../assets/party1.png';
import party2 from '../../assets/party2.png';

function Feature() {
  return (
    <div>
        <div className='flex flex-col lg:flex-row space-x-0 lg:space-x-4 mt-16 md:mt-[28rem] lg:mt-48 mx-8 justify-center items-center text-xl font-bold text-main text-center'>
        <div className='flex space-x-4'>
            <div>
                <img src={frame1} alt="frame" className='rounded-xl' />
                <Link to='/products' className='cursor-pointer'><p>Our Amazing Product</p></Link>
                
            </div>
            <div>
                <img src={frame2} alt="frame"  />
                <p>Get Chocolate Spread</p>
            </div>
        </div>
        <div className='flex space-x-4'>
            <div>
                <img src={frame3} alt="frame"  />
                <p>Join our world of chocolate</p>
            </div>
            <div>
                <img src={frame4} alt="frame"  />
                <Link to='/shop' className='cursor-pointer'><p>Navigate to our store</p></Link>
                
            </div>
        </div>
    </div>


    <div className='py-16 mx-8 mb-16 lg:mx-24 '>
        <h3 className='text-sub text-center mb-8 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl mb-8'>ChocParty</h3>

        <div className='flex justify-between gap-8  items-center mb-8'>
            <div className='w-1/2'>
                <img src={party1} alt=""  className='w-full'/>
            </div>
            <div className='w-1/2'>
                <img src={party2} alt="" className='w-full'/>
            </div>
        </div>

        <div className='text-main flex flex-col w-full justify-center '>
            <p className='text-justify'>The ChocParty, which was conceived out of the need to provide an avenue for families and friends to bond, not just with one another, but also with other people, will this year host its 10th consecutive edition and with the endorsement of Oyo State Ministry of Youths and 
                <Link to="/chocparty" className='text-main font-bold no-underline hover-cursor-pointer hover:underline'> See More</Link>
            </p>
            
        </div>
    </div>



    </div>
  )
}

export default Feature