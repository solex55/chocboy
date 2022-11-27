import React from 'react'
import './discover.css'
function Discover() {
  return (
    <div className='my-32 w-full '>
        <h2 className=' text-sub text-center mb-8 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl'>Discover More</h2>
        
        <div className=' w-full h-screen bg-no-repeat bg-cover bg-center object-cover grads' >
            <div className='text-white relative px-4 lg:px-20 py-12 lg:py-20  h-full w-full overlay-des'>
              <div>
                <h3 className='text-3xl w-full lg:w-1/3 font-bold mb-4 tracking-tight leading-none md:text-3xl xl:text-4xl text-justify '>Unleash your creativity with our recipe</h3>
                <p className='text-xl text-justify w-full lg:w-10/12 font-light'>
                  Simply put Chocboy Chocolate Spread on top of a doughnut, croissant, pancake, or slice of toast. As you and your family share a wonderful breakfast or snack with any of our products see how the magic and joy of Chocboy elevates your mood to something exceptional.
                </p>
              </div>
              
           
              
            </div>
        </div>
    </div>
  )
}

export default Discover