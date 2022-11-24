import React from 'react'
import './feature.css'
import { Link } from 'react-router-dom'
import frame1 from '../../assets/frame2.png';
import frame2 from '../../assets/frame4.png';
import frame3 from '../../assets/frame2.png';
import frame4 from '../../assets/frame4.png';
import party2 from '../../assets/party2.png';

function Feature() {
  return (
    <div>
        <div className='flex flex-col lg:flex-row space-x-4 mt-48 mx-8 justify-center items-center text-xl font-bold text-main text-center'>
        <div className='flex space-x-4'>
            <div>
                <img src={frame1} alt="frame"  />
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

        <div className='flex justify-between space-x-4 items-center mb-8'>
            <div>
                <img src={party2} alt="" />
            </div>
            <div>
                <img src={party2} alt="" />
            </div>
        </div>

        <div className='text-main flex flex-col w-full'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas recusandae dolores quae minus, temporibus dolorum? Suscipit autem quidem error! Quia qui possimus reiciendis dignissimos ipsum ipsa, porro optio cupiditate reprehenderit!
            Cum quaerat veniam, optio, a incidunt natus eum quibusdam quia quisquam magni soluta aliquid, ratione voluptate nesciunt rerum! Eos harum doloribus ullam deserunt voluptatem molestias deleniti maxime totam quae quo.</p>
            <Link to="/" className='text-main font-bold hover-cursor-pointer'>See More</Link>
        </div>
    </div>



    </div>
  )
}

export default Feature