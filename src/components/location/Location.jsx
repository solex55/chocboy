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
            <img src={Locationpic} alt="Lagos Location" className='w-8 lg:w-16'  />
            <h3 className='py-4 text-main text-3xl lg:text-5xl text-center font-semibold'>Shop Our Products</h3>
            <p className='py-4 text-main text-xl lg:text-3xl font-bold'>Lagos</p>
        </div>
        <div className='flex flex-wrap gap-4 lg:gap-8 px-4 lg:px-20 justify-center'>
            {Lagosplace && Lagosplace.map((lagos) => (
                <div id={lagos.id}>
                   <button className='px-4 py-4 w-28 lg:w-72 text-center text-white rounded-md shadow-md text-sm lg:text-xl font-bold' style={{background: "linear-gradient(180deg, #79372A 0%, #39170f 100%)"}}>{lagos.place}</button>
                </div> 
            ))}
        </div>
    </div>

    <div>
        <div className='mx-8 lg:mx-16 flex flex-col justify-center items-center'>
            <p className='py-16 text-main text-xl lg:text-3xl font-bold'>Ibadan</p>
        </div>
        <div className='flex flex-wrap gap-4 lg:gap-8 px-4 lg:px-20 justify-center'>
            {Ibadanplace && Ibadanplace.map((ibadan) => (
                <div id={ibadan.id}>
                   <button className='px-4 py-4 w-28 lg:w-72 text-center text-white  rounded-md shadow-md text-sm lg:text-xl font-bold' style={{background: "linear-gradient(180deg, #79372A 0%, #39170f 100%)"}}>{ibadan.place}</button>
                </div> 
            ))}
        </div>
    </div>
    </div>
  )
}

export default Location