import React from 'react'
import {FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaMailBulk, FaPhone} from 'react-icons/fa'
import Contact from '../contact/Contact'
import { Link } from 'react-router-dom'

function footer() {
  return (
     

/*     <footer className='w-full h-screen  bg-no-repeat bg-cover bg-center bg-footer-pat relative mt-16 object-cover'>
 */    
    <footer className='w-full bg-foot h-fit relative mt-16 ' style={{background: "linear-gradient(180deg, #79372A 0%, #39170f 100%)"}}>
        <div className='absolute bg-foot  top-1/2 mx-auto w-full justify-center items-center'>
        <div className="footer_content bg-foot  flex flex-col z-3 text-white justify-center items-center">
            <Contact />
            <div className="footer_main  bg-foot flex flex-col text-center px-16 lg:px-24 item-center ">
                <div className="footer_logo">
                    <h3 className="text-3xl font-bold sm:text-3xl lg:text-5xl pb-4">Contact Us</h3>
                </div>
                
                <hr />
                
                <div className="footer_sm text-center py-4 lg:py-8 px-4 sm:px-16 text-md">
                <div className="footer_links flex justify-center items-center pb-4 space-x-4 md:space-x-8 lg:space-x-16">
                    <FaMailBulk />
                    <FaPhone />
                    <FaFacebook />
                    <FaTwitter />
                    <FaLinkedin />
                    <FaInstagram />
                </div>                    
                <p className='text-md lg:text-3xl'>Block A Unit 5 Technology Incubation Centre Beside Oyo State Permanent Trade Fair Complex EXPOYO Off Oyo Road Ibadan.</p>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row justify-between items-center mx-4 px-4 sm:px-8 w-full text-sm lg:text-xl lg:font-bold pb-16'>
                <div>
                    <p> &copy; 2023 Chocboy. All rights Reserved</p>
                </div>
                <Link to="/">
                    <p>Terms &#38; Condition</p>
                </Link>
                <Link to="/">
                    <p>Privacy Policy.</p>
                </Link>

                {/* <div className='flex flex-row justify-between items-center gap-4 bg-foot '>
                    <p>Terms &#38; Condition</p>
                    <p>Privacy Policy.</p>
                </div> */}
            </div>
        </div>
        </div>
    </footer>
  )
}

export default footer