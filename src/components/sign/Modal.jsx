import React from 'react'
import { Link } from 'react-router-dom'
import {RiCloseLine} from "react-icons/ri"
function Modal({open, onClose}) {
    if(!open) return null
  return (
    <div onClick={onClose} className='w-full h-full fixed flex bg-stone-700 z-index-50 justify-center'>
      <div onClick={(e) => {e.stopPropagation()}} className='w-full fixed transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 shadow-xl bg-sec max-w-[600px] p-16 '>
        <button onClick={onClose}>
            <RiCloseLine className='top-2 right-2 fixed'/>
        </button>
        <p className='text-lg text-center'>Congratulations!</p>
        <p className='text-lg text-center'>Your new password has been set!</p>
        <Link to='/login'>
            <button type='submit' className='w-full text-center bg-main text-sec my-4 rounded-xl py-2 font-semibold'>Login</button>
        </Link>
      </div>
    </div>
  )
}

export default Modal