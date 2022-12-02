import React from 'react'
import Locationpic from '../../assets/location.png';

function Location() {
    const Lagosplace = [
        {   
            id : 1,
            place: "Essential Supermarket"
        },
        {   
            id : 2,
            place: "De Prince Supermarket"
        },
        {
            id : 3,
            place: "Sobee's Supermarket"
        },
        {
            id : 4,
            place: "Bazaar Supermarket"
        },
        {
            id : 5,
            place: "Bienco Supermarket"
        },
        {
            id : 6,
            place: "Jendol Supermarket"
        },
        {
            id : 7,
            place: "Pure Life Pharmacy"
        },
        {
            id : 8,
            place: "Foodco Supermarket"
        }
    ]
    const Ibadanplace = [
        {            id : 1, place: "Feedwell Supermarket" },
        {            id : 2,   place: "Shokem Supermarket"        },
        {            id : 3,            place: "Mosh Supermarket"        },
        {            id : 4,            place: "Ace Supermarket"        },
        {            id : 5,            place: "Sunrise Supermarket (Bond Mall Bodija)"        },
        {            id : 6,            place: "Agbeni Merchandise Store"        },
        {            id : 7,            place: "Foodies Supermarket"        },
        {            id : 8,            place: "Woc Shoopers World "        },
        {            id : 8,            place: "Wimpy Supermarket "        },
        {            id : 8,            place: "Gracy's Mart Akobo "        },
        {            id : 8,            place: "ChocBoy Store "        }
    ]
  return (
    <div>
        <div>
        <div className='mx-16 flex flex-col justify-center items-center'>
            <img src={Locationpic} alt="Lagos Location"   />
            <h3 className='py-4 text-main text-5xl font-semibold'>Shop Our Products</h3>
            <p className='py-4 text-main text-3xl font-bold'>Lagos</p>
        </div>
        <div className='flex flex-wrap gap-8 px-20 justify-center'>
            {Lagosplace && Lagosplace.map((lagos) => (
                <div id={lagos.id}>
                   <button className='px-4 py-4 pb4 w-72 text-center text-white bg-gradient-to-b from-bg-sub to-bg-main rounded-md shadow-md text-xl font-bold'>{lagos.place}</button>
                </div> 
            ))}
        </div>
    </div>

    <div>
        <div className='mx-16 flex flex-col justify-center items-center'>
            <p className='py-16 text-main text-3xl font-bold'>Ibadan</p>
        </div>
        <div className='flex flex-wrap gap-8 px-20 justify-center'>
            {Ibadanplace && Ibadanplace.map((ibadan) => (
                <div id={ibadan.id}>
                   <button className='px-4 py-4 pb4 w-72 text-center text-white bg-gradient-to-b from-bg-sub to-bg-main rounded-md shadow-md text-xl font-bold'>{ibadan.place}</button>
                </div> 
            ))}
        </div>
    </div>
    </div>
  )
}

export default Location