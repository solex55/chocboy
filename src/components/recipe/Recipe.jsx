import React from 'react'
import Brownies from '../../assets/brownies.png';


function Recipe() {
  return (
    <div>
        <div className='flex flex-col lg:flex-row w-full px-16 my-20 bg-feat gap-8'>
            <div className='py-8'>
                <h1 className='text-3xl lg:text-3xl text-main font-bold'>Chocboy Brownies</h1>
                <p className='text-justify my-4 lg:my-8'>Make 3 Ingrident ChocBoy Brownies in minutes featueing a fudgy texture  and gorgeous chocolatelty flavour</p>
                <button className='w-full py-4 text-center text-main bg-sec rounded-xl text-xl font-bold'>Discover More</button>
            </div>
            <div className='pb-8 lg:pb-8 py-0 lg:py-8'>
                <img src={Brownies} alt="" />
            </div>
        </div>
        <div className='flex flex-col lg:flex-row w-full px-16 my-20 bg-feat gap-8'>
            <div className='py-8'>
                <h1 className='text-3xl lg:text-3xl text-main font-bold'>Chocboy Brownies</h1>
                <p className='text-justify my-4 lg:my-8'>Make 3 Ingrident ChocBoy Brownies in minutes featueing a fudgy texture  and gorgeous chocolatelty flavour</p>
                <button className='w-full py-4 text-center text-main bg-sec rounded-xl text-xl font-bold'>Discover More</button>
            </div>
            <div className='pb-8 lg:pb-8 py-0 lg:py-8'>
                <img src={Brownies} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Recipe