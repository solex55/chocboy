import React from 'react'
import './discover.css'
import { Link } from 'react-router-dom'

function Discover() {
  return (
    <div className='mb-44 sm:mb-80 lg:mb-64 w-full '>
        <h2 className=' text-sub text-center mb-8 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl'>Discover More</h2>
        
        <div className=' w-full h-screen bg-no-repeat bg-cover bg-center object-cover grads' >
            <div className='text-white relative px-4 lg:px-20 py-12 lg:py-20  h-full w-full overlay-des'>
              <div>
                <h3 className='text-3xl w-full lg:w-1/3 font-bold mb-4 tracking-tight leading-none md:text-3xl xl:text-4xl text-justify '>Unleash your creativity with our recipe</h3>
                <p className='text-xl text-justify w-full lg:w-10/12 font-light'>
                  Simply put Chocboy Chocolate Spread on top of a doughnut, croissant, pancake, or slice of toast. As you and your family share a wonderful breakfast or snack with any of our products see how the magic and joy of Chocboy elevates your mood to something exceptional.
                </p>
              </div>
              
           
              <div className='flex justify-center mx-auto space-x-4 mt-24 xl:mt-36'>
                  
                  <div className="process h-96 w-60 rounded-lg ">
                      <div className='relative w-full h-full overlay-des rounded-lg'>
                        <div className='flex flex-col gap-8 px-4 lg:px-4 absolute top-1/2 left-0 justify-center items-center'>
                          <p className='text-xl lg:text-2xl justify-center text-center font-bold'>OUR PROCESS</p>
                          <Link to="/shop">
                          <button className='inline-flex items-center justify-center px-4 lg:px-8 py-3 text-xl lg:text-3xl font-bold text-center bg-sec text-main rounded-lg '>
                              Discover
                          </button>
                          </Link>
                          
                          
                        </div>
                      </div>
                  </div>
                  <div className="recipe h-96 w-60 rounded-lg ">
                      <div className='relative w-full h-full overlay-des rounded-lg'>
                        <div className='flex flex-col gap-8 px-4 lg:px-4  absolute top-1/2 left-0 justify-center items-center'>
                          <p className='text-xl lg:text-2xl justify-center text-center font-bold'>OUR RECIPES </p>
                          <Link to="/products">
                          <button className='inline-flex items-center justify-center px-4 lg:px-8 py-3 text-xl lg:text-3xl font-bold text-center bg-sec text-main rounded-lg'>
                              Discover
                          </button>
                          </Link>
                          
                          
                        </div>
                      </div>
                  </div>

              </div>
            </div>
        </div>
    </div>
  )
}

export default Discover