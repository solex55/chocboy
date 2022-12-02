import React from 'react'
import RECIPEDATA from '../RECIPE_DATA.json'
 /* import Brownies from '../../assets/brownies.png';
 */

function Recipe() {

  return (
    <div className='[&>*:nth-child(odd)]: bg-feat [&>*:nth-child(even)]:bg-white '>
        {/* <div className='flex flex-col lg:flex-row w-full px-16  gap-8'>
            <div className='py-8'>
                <h1 className='text-3xl lg:text-3xl text-main font-bold'>Chocboy Brownies</h1>
                <p className='text-justify my-4 lg:my-8'>Make 3 Ingrident ChocBoy Brownies in minutes featueing a fudgy texture  and gorgeous chocolatelty flavour</p>
                <button className='w-full py-4 text-center text-main bg-sec rounded-xl text-xl font-bold'>Discover More</button>
            </div>
            <div className='pb-8 lg:pb-8 py-0 lg:py-8'>
                <img src={Brownies} alt="" className='w-full'/>   <div id={recipe.id}>{recipe.title}</div>
            </div>
        </div> */}

        {RECIPEDATA && RECIPEDATA.map((recipe) => (
            <div className='flex flex-col lg:flex-row w-full px-16 gap-8' id={recipe.id}>
                <div className='py-8 w-full lg:w-1/2'>
                    <h1 className='text-3xl lg:text-3xl text-main font-bold'>{recipe.title}</h1>
                    <p className='text-justify my-4 lg:my-8'>{recipe.description}</p>
                    <button className='w-full py-4 text-center text-main bg-sec rounded-xl text-xl font-bold'>Discover More</button>
                </div>
                <div className='pb-8 lg:pb-8 py-0 lg:py-8  w-full lg:w-1/2'>
                    <img src={recipe.pic} alt="" className='w-full'/>
                </div>
            </div> 
        ))}
       
    </div>
  )
}

export default Recipe