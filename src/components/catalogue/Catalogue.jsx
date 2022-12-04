import React from 'react'
 import CATALOGUEDATA from '../SHOP_DATA.json'
 import shoplogo from '../../assets/shop.png'
 
function Catalogue() {
  return (
    <div className='py-16 mx-8 lg:mx-24 flex flex-col lg:flex-row flex-wrap justify-center items-center gap-8'> 
        {CATALOGUEDATA && CATALOGUEDATA.map((cat) => (
                    <div className='w-full lg:w-2/5' id={cat.id}>
                        <div className='w-full h-72'>
                            <img src={cat.pic} alt="" className='w-full h-full' />
                        </div>
                        <div className='py-4 w-3/5 '>
                            <h1 className='text-xl lg:text-3xl text-main font-bold'>{cat.title}</h1>                        
                        </div>
                        <div className=' flex justify-between items-center w-full '>
                            <p className='font-bold text-xl'>{cat.price}</p>
                            {cat.state === true && (<button className='px-8 py-4 text-center text-main bg-yellow-200 rounded-3xl'>Custom order</button>)}
                            <button className='flex gap-2 px-8 py-4 text-center text-main bg-sec rounded-xl text-lg font-bold'>Add To Cat <img src={shoplogo} alt="shoplogo"  /> </button>
                        </div>
                    </div>
            ))} 
    </div>
  )
}

export default Catalogue