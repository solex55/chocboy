import React from 'react'
import {FaFacebook, FaTwitter, FaHome, FaLinkedin, FaInstagram, FaMailBulk, FaPhone} from 'react-icons/fa'


function footer() {
  return (
     

    <footer className='w-full h-screen  bg-no-repeat bg-cover bg-center bg-footer-pat relative mt-16 object-cover'>
        <div className='absolute  top-1/2 mx-auto w-full justify-center items-center'>
        <div class="footer_content flex flex-col z-3 text-white justify-center items-center">
            
            <div class="footer_main flex flex-col text-center mx-16 lg:mx-24 item-center ">
                <div class="footer_logo">
                    <h3 className="text-3xl font-bold sm:text-3xl lg:text-5xl pb-4">Contact Us</h3>
                </div>
                <div class="footer_links flex justify-center items-center pb-4 space-x-4 md:space-x-8 lg:space-x-16">
                    <FaMailBulk />
                    <FaPhone />
                    <FaFacebook />
                    <FaTwitter />
                    <FaLinkedin />
                    <FaInstagram />
                </div>
                <hr />
                <div class="footer_sm text-center py-4 lg:py-8 px-4 sm:px-16 text-md">
                    <div className='pb-4 lg:pb-4 flex justify-center items-center text-center'><FaHome /></div>
                    <p className='text-md lg:text-3xl'>Block A Unit 5 Technology Incubation Centre Beside Oyo State Permanent Trade Fair Complex EXPOYO Off Oyo Road Ibadan.</p>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row justify-between items-center mx-4 px-4 sm:px-8 w-full text-md lg:text-3xl lg:font-bold'>
                <div>
                    <p> &copy; 2022 Chocboy. All rights Reserved</p>
                </div>

                <div className='flex flex-row justify-between items-center gap-4 bg-foot text-md lg:text-3xl'>
                    <p>Terms &#38; Condition</p>
                    <p>Privacy Policy.</p>
                </div>
            </div>
        </div>
        </div>
    </footer>
  )
}

export default footer