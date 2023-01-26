import React, { useState } from "react";
import { MdClear } from "react-icons/md";
import logo from "../../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { BsCartCheck } from "react-icons/bs";
import { HiBars3 } from "react-icons/hi2";

function Navbar() {
  const router = useLocation();
  const [navbarOpen, setNavbarOpen] = useState(false);

  const defaultRoutes = [
    {
      label: "Home",
      route: "/",
    },
    {
      label: "About us",
      route: "/about",
    },
    {
      label: "Products",
      route: "/shop",
    },
    {
      label: "Recipes",
      route: "/recipes",
    },
    {
      label: "Blog",
      route: "/blog",
    },
  ];

  const NavbarItems = () => {
    return (
      <>
        {defaultRoutes.map(({ label, route }) => {
          const path = router.pathname;
          const isActive = path === route;
          return (
            <Link key={label} to={route}>
              <p className="text-sm text-[#39170F]">{label}</p>
              <div
                className={`${
                  isActive ? "bg-black" : "bg-transparent"
                } h-1 rounded-lg`}
              />
            </Link>
          );
        })}
      </>
    );
  };

  return (
    <nav className="flex justify-between border items-center border-black max-w-[1300px] mx-auto h-[100px] md:h-[130px] px-5 md:px-20">
      <div>
        <Link to="/">
          <img src={logo} alt="Choco boy logo" className="w-28 md:w-32" />
        </Link>
      </div>

      <button
        type="button"
        className="md:hidden"
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <HiBars3 size="2rem" />
      </button>

      <div className="hidden md:flex h-full items-center gap-x-7">
        <NavbarItems />
      </div>

      <div className="h-full hidden md:flex gap-x-7 items-center">
        <Link to="/login">
          <button>
            <BiUserCircle size="2rem" />
          </button>
        </Link>

        <Link to="/shop">
          <button>
            <BsCartCheck size="2rem" />
          </button>
        </Link>
      </div>

      {/* NAVBAR MOBILE */}
      <div
        className={`fixed top-0 h-screen w-screen bg-primary left-0 px-5 ${
          navbarOpen ? "block" : "hidden"
        } `}
      >
        <div className="h-[100px] flex justify-between items-center">
          <div>
            <Link to="/">
              <img src={logo} alt="Choco boy logo" className="w-28 md:w-32" />
            </Link>
          </div>

          <button type="button" onClick={() => setNavbarOpen(!navbarOpen)}>
            <MdClear size="2rem" />
          </button>
        </div>

        <div className="flex flex-col items-center gap-y-10 my-14">
          <NavbarItems />
        </div>

        <div className="flex justify-center gap-x-7 items-center">
          <Link to="/login">
            <button>
              <BiUserCircle size="2rem" />
            </button>
          </Link>

          <Link to="/shop">
            <button>
              <BsCartCheck size="2rem" />
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
