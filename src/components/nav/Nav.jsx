import React from "react";
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import choclogo from '../../assets/chocboy-logo.png';
import cat from '../../assets/shop.png';

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <header>
        <nav className="absolute flex flex-wrap items-center justify-between px-2 py-3 bg-sec z-40 w-full ">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <Link
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-main"
                to="/"
              >
                <img id='logo' src={choclogo} size={8} alt="logo" />
              </Link>
              <button
                className="text-main cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                {!navbarOpen ? ( <FaBars size={30}/>) : (<FaTimes size={30}/>)}

              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center justify-center" +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto justify-center items-center lg:start text-main">
                
                <li className="nav-item">
                    <Link className='lg:px-4 py-2 flex items-center text-2xl uppercase font-bold leading-snug text-main hover:opacity-75 hover:border-bottom' to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className='lg:px-4 py-2 flex items-center text-2xl uppercase font-bold leading-snug text-main hover:opacity-75' to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className='lg:px-4 py-2 flex items-center text-2xl uppercase font-bold leading-snug text-main hover:opacity-75' to="/products">Products</Link>
                </li>
                <li className="nav-item">
                    <Link className='lg:px-4 py-2 flex items-center text-2xl uppercase font-bold leading-snug text-main hover:opacity-75' to="/blog">Blog</Link>
                </li>
                <li className="nav-item">
                    <Link className='lg:px-4 py-2 flex items-center text-2xl uppercase font-bold leading-snug text-main hover:opacity-75' to="/contact-us">Contact</Link>
                </li>

                
                 <Link to="/login"> 
                <button className='bg-main hover:border-transparent hover:text-main text-sec py-2 px-4 rounded-md z-20'>
                  Sign up
                </button>
                </Link>

                <Link className='px-4 py-2 flex items-center leading-snug  hover:opacity-75' to="/shop">
                  <img src={cat} alt="Chocboyshop" />
                </Link>
              </ul>
              
            </div>
          </div>
        </nav>
      </header>
      
    </>
  );
}
