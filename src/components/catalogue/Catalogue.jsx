import React from 'react'
import CATALOGUEDATA from '../SHOP_DATA.json'

function Catalogue() {
  return (
    <div className='py-16 mx-8 lg:mx-24 flex flex-wrap'>
        LOADING...
         {/*    {CATALOGUEDATA && CATALOGUEDATA.map((cat) => (
                <div className=' ' id={cat.id}>
                    <div className='w-full lg:w-1/2'>
                        <div className='w-full h-52'>
                            <img src={cat.pic} alt="" className='w-full h-full' />
                        </div>
                        <div className='py-4 w-3/5 '>
                            <h1 className='text-xl lg:text-3xl text-main font-bold'>{cat.title}</h1>                        
                        </div>
                        <div className=' flex justify-between w-full '>
                            <p className='font-bold text-xl'>{cat.price}</p>
                            <button className='px-8 py-4 text-center text-main bg-sec rounded-xl text-xl font-bold'>Add Cat</button>
                        </div>
                    </div>
                </div> 
            ))} */}
    </div>
  )
}

export default Catalogue