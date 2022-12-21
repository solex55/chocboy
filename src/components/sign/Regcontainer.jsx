import React from 'react'
import regpic from '../../assets/sign.png';
import Reg from './Reg.jsx'

function Regcontainer() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block  h-full w-full bg-gray-100'>
            <img src={regpic} alt="" className='w-full h-full object-cover'/>
        </div>
        <Reg/>
    </div>
  )
}

export default Regcontainer