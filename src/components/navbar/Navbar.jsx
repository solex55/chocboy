import React from "react";
 import { NavLink as Link } from 'react-router-dom'
 import {FaBars, FaTimes} from 'react-icons/fa' 
import choclogo from '../../assets/chocboy-logo.png';
 import cat from '../../assets/spdr.png';
 import profile from '../../assets/prof1.png';

function Navbar() {
     const [navbarOpen, setNavbarOpen] = React.useState(false);
     return (
      <>
          <nav className="absolute flex flex-wrap items-center  z-40 w-full ">
             <div className="container px-0 lg:px-4 mx-auto flex flex-wrap items-center justify-around">
               <div className="w-full relative flex justify-between px-5  lg:w-auto lg:static lg:block lg:justify-start">
                <Link 
                  className=" inline-block mr-4 py-2 absolute z-[100] top-0  whitespace-nowrap "
                  to="/"
                >
                  <img id='logo' src={choclogo} sizes={8} alt="logo" className="cursor-pointer h-12" />
                </Link>
                 <button
                  className=" cursor-pointer py-2 border border-solid border-transparent rounded bg-transparent absolute z-[12222] top-0  right-0 pr-8 block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  {!navbarOpen ? ( <FaBars size={30}/>) : (<FaTimes size={30}/>)}
  
                </button> 
              </div>
              <div>
                <ul className="lg:flex hidden items-center text-main gap-2 ">
                  
                  <li className="nav-item">
                      <Link className='px-3 py-7 inline-block  items-center text-2xl  font-bold text-main hover:opacity-75 hover:border-bottom' to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                      <Link className='px-3 py-7 inline-block  items-center text-2xl  font-bold  text-main hover:opacity-75' to="/about">About</Link>
                  </li>
                  <li className="nav-item">
                      <Link className='px-3 py-7 inline-block  items-center text-2xl  font-bold  text-main hover:opacity-75' to="/shop">Products</Link>
                  </li>
                  <li className="nav-item">
                      <Link className='px-3 py-7 inline-block  items-center text-2xl  font-bold  text-main hover:opacity-75' to="/recipe">Recipé</Link>
                  </li>
                  <li className="nav-item">
                      <Link className='px-3 py-7 inline-block  items-center text-2xl  font-bold  text-main hover:opacity-75' to="/blog">Blog</Link>
                  </li>
  
                  
                   
                </ul>
                
              </div>

              <div className="lg:flex hidden">
  
                  <Link className='px-3 flex items-center  hover:opacity-75' to="/login">
                    <img src={profile} alt="Chocboyshop" />
                  </Link>

                  <Link className='px-3  flex items-center hover:opacity-75' to="/shop">
                    <img src={cat} alt="Chocboy shop" />
                  </Link>
                </div>

                {/* MOBILE NAV */}
                 <ul className={`lg:hidden  w-full  items-center text-center  bg-sec  duration-500 h-fit absolute top-0 pt-14 ${navbarOpen ? " block" : " hidden"}`}> {/* absolute */}
                  
                  <li>
                      <Link className='px-3 py-7 inline-block  items-center text-2xl  font-bold text-main hover:opacity-75 hover:border-bottom' to="/">Home</Link>
                  </li>
                  <li>
                      <Link className='px-3 py-7 inline-block  items-center text-2xl  font-bold  text-main hover:opacity-75' to="/about">About</Link>
                  </li>
                  <li>
                      <Link className='px-3 py-7 inline-block  items-center text-2xl  font-bold  text-main hover:opacity-75' to="/shop">Products</Link>
                  </li>
                  <li>
                      <Link className='px-3 py-7 inline-block  items-center text-2xl  font-bold  text-main hover:opacity-75' to="/recipe">Recipé</Link>
                  </li>
                  <li>
                      <Link className='px-3 py-7 inline-block  items-center text-2xl  font-bold  text-main hover:opacity-75' to="/blog">Blog</Link>
                  </li>

                  <div className="lg:hidden flex  justify-center py-7">
  
                        <Link className='px-3 flex items-center  hover:opacity-75' to="/login">
                            <img src={profile} alt="Chocbo user" />
                        </Link>

                        <Link className='px-3  flex items-center hover:opacity-75' to="/shop">
                            <img src={cat} alt="Chocboy shop" />
                        </Link>
                    </div>
                </ul>

            </div>
          </nav>
        


      </>
    );
}

export default Navbar