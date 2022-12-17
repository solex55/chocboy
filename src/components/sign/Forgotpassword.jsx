import React from 'react'
import regpic from '../../assets/sign.png';
import { Link } from 'react-router-dom'

function Forgotpassword() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block  h-screen w-full bg-gray-100'>
            <img src={regpic} alt="" className='w-full h-full object-cover'/>
        </div>

        <div className='bg-gray-100 flex flex-col justify-center'>
            <form className="max-w-[400px] w-full mx-auto p-4">
                <h2 className='text-4xl font-bold text-main py-6'>Forgot Password</h2>

                

                <div className='flex flex-col py-8'>
                    <input type="email" name="email" placeholder='Email' className='bprder-4 border-b-black-300 p-2' />
                    <p className='text-sm'>Enter the Email you registered with</p>
                </div>

                <button className='w-full text-center bg-sec text-main my-4 rounded-xl py-2 font-semibold border hover:bg-transparent hover:border-bg-sec'>Send OTP</button>
                
                <div className='mb-12'>
                    <p className=' text-xl text-center'>Didn't receive an OTP?</p>
                    <p className='text-sec text-center'>Resend</p>
                </div>

                <div>
                        <p className='text-xl text-center'>Don't have an account?  <Link to="/register"><span className='text-sec'>Sign Up Now</span></Link></p>
                        <div className='flex gap-4 text-sm text-gray-500 items-center justify-center text-center'>
                            <p>Privacy</p>
                            <p>Terms &#38; Conditions</p>
                        </div>
                </div>
            </form>
        </div>

    </div>
  )
}

export default Forgotpassword