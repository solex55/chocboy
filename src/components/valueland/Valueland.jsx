import React from 'react'
import { Link } from 'react-router-dom'
import frame1 from '../../assets/frame1.png';
import frame2 from '../../assets/frame2.png';
import frame3 from '../../assets/frame3.png';
import frame4 from '../../assets/frame4.png';

function Valueland() {
  return (
    <div>
        <div className='flex flex-col lg:flex-row space-x-0 lg:space-x-4 mt-16  mx-8 justify-center items-center text-xl font-bold text-main text-center'>
        <div className='flex space-x-4'>
            <Link to='/products' className='cursor-pointer'>
                <img src={frame1} alt="frame" className='rounded-xl' />
                <p>Our amazing product</p>
            </Link>
            <Link to='/shop' className='cursor-pointer'>
                <img src={frame2} alt="frame"  />
                <p>Get chocolate spread</p>
            </Link>
        </div>
        <div className='flex space-x-4'>
            <Link to='/chocparty' className='cursor-pointer'>
                <img src={frame3} alt="frame"  />
                <p>Join our chocolate world</p>
            </Link>
            <Link to='/shop' className='cursor-pointer'>
                <img src={frame4} alt="frame"  />
                <p>Navigate to our store</p>
            </Link>
        </div>
    </div>
    </div>
  )
}

export default Valueland