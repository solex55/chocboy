import React from 'react'
import regpic from '../../assets/sign.png';
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'

function Signin() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block  h-screen w-full bg-gray-100'>
            <img src={regpic} alt="" className='w-full h-full object-cover'/>
        </div>

        <div className='bg-gray-100 flex flex-col justify-center'>
            <form className="max-w-[400px] w-full mx-auto p-4">
                <h2 className='text-4xl font-bold text-main py-6'>Welcome Back!</h2>

                <div className='flex justify-between'>
                    <p className='px-6 py-4 gap-4 border shadow-lg hover:shadow-xl flex items-center hover:cursor'><FcGoogle /> Google</p>
                    <p className='px-6 py-4 gap-4 border shadow-lg hover:shadow-xl flex items-center hover:cursor'><AiFillFacebook /> Faceebook</p>
                </div>

                <div className='flex flex-col py-2'>
                    <input type="email" name="email" placeholder='Email' className='bprder-4 border-b-black-300 p-2' />
                </div>
                <div className='flex flex-col py-2'>
                    <input type="password" name="password"placeholder='Password' className='border-b-black-300 p-2'/>
                </div>

                <button className='w-full text-center bg-sec text-main my-4 rounded-xl py-2 font-semibold border hover:bg-transparent hover:border-bg-sec'>Sign In</button>
                
                <div className='mb-12'>
                    <p className='text-sec text-xl text-center'>Forgot Password</p>
                </div>

                <div>
                    <p className='text-xl text-center'>Not a member? <span className='text-sec'>Sign Up Now</span></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signin