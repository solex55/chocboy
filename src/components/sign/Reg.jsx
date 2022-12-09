import React from 'react'
/* import Regcontainer from './Regcontainer'
import Signin from './Signin' */

import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Reg() {
  return (
    <div className='bg-gray-100 flex flex-col justify-center'>
            <form className="max-w-[400px] w-full mx-auto p-4">
                <h2 className='text-4xl font-bold text-main py-6'>Sign Up</h2>

                <div className='flex justify-between'>
                    <p className='px-6 py-4 gap-4 border shadow-lg hover:shadow-xl flex items-center hover:cursor'><FcGoogle /> Google</p>
                    <p className='px-6 py-4 gap-4 border shadow-lg hover:shadow-xl flex items-center hover:cursor'><AiFillFacebook /> Faceebook</p>
                </div>

                <div className='flex flex-col py-2'>
                    <input type="text" name="fname" placeholder='First Name' className='bprder-4 border-b-black-300 p-2' />
                </div>
                <div className='flex flex-col py-2'>
                    <input type="text" name="lname" placeholder='Last Name' className='bprder-4 border-b-black-300 p-2' />
                </div>
                <div className='flex flex-col py-2'>
                    <input type="email" name="email" placeholder='Email' className='bprder-4 border-b-black-300 p-2' />
                </div>
                <div className='flex flex-col py-2'>
                    <input type="password" name="password"placeholder='Password' className='border-b-black-300 p-2'/>
                </div>

                <button className='w-full text-center bg-sec text-main my-4 rounded-xl py-2 font-semibold border hover:bg-transparent hover:border-bg-sec'>Sign Up</button>
                
                

                <div> 
                        <p className='text-xl text-center'>Already a member? <Link to="/login"><span className='text-sec'>Sign In Now</span></Link></p>
                </div>
            </form>
        </div>
  )
}

export default Reg