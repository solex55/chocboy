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
        <div className='flex flex-col lg:flex-row space-x-0 lg:space-x-4 mt-48 mx-8 justify-center items-center text-xl font-bold text-main text-center'>
        <div className='flex space-x-4'>
            <div>
                <img src={frame1} alt="frame" className='rounded-xl' />
                <p>Our Amazing Product</p>
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
                <p>Navigate to our store</p>
            </div>
        </div>
    </div>


    <div className='py-16 mx-8 mb-16 lg:mx-24 '>
        <h3 className='font-bold text-3xl text-main text-center mb-8'>ChocParty</h3>

        <div className='flex justify-center gap-8  items-center mb-8'>
            <div>
                <img src={party1} alt=""  />
            </div>
            <div>
                <img src={party2} alt="" />
            </div>
        </div>

        <div className='text-main flex flex-col w-full justify-center px-0 lg:px-16'>
            <p className='text-justify'>The ChocParty, which was conceived out of the need to provide an avenue for families and friends to bond, not just with one another, but also with other people, will this year host its 10th consecutive edition and with the endorsement of Oyo State Ministry of Youths and</p>
            <Link to="/" className='text-main font-bold hover-cursor-pointer'>See More</Link>
        </div>
    </div>



    </div>
  )
}

export default Feature