import React from "react";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import hero_image from "../../assets/hero_image.svg";
import top_bg_image from "../../assets/navbar-img.png";

export default function Hero() {
  return (
    <div className="bg-hero h-[520px] md:h-auto">
      <Navbar />

      <div className="w-full absolute top-0">
        <img
          alt=""
          src={top_bg_image}
          className="w-full object-cover h-52 md:h-auto"
        />
      </div>

      <div className="md:h-[600px] max-w-[1300px] mx-auto px-5 md:px-20 relative">
        <div className="md:h-full h-[250px]  w-fit flex flex-col justify-center">
          <h1 className="text-3xl lg:text-5xl font-normal md:mb-4">
            Anytime is
          </h1>
          <h1 className="text-3xl lg:text-5xl font-bold">Chocolate time!</h1>

          <Link to="/shop" className="mt-7">
            <button
              className="w-40 md:w-52 font-semibold text-white rounded-2xl md:text-lg text-sm py-3 md:py-4"
              style={{
                background:
                  "linear-gradient(210.81deg, #39170F -19.73%, #79372A 81.32%)",
              }}
            >
              Shop Now
            </button>
          </Link>
        </div>

        <div className="md:hidden">
          <img
            src={hero_image}
            alt="Chocboy"
            className="drop-shadow-[0_35px_35px_rgba(0,0,0,0.45)]"
          />
        </div>

        <div className="absolute right-0 hidden md:block -bottom-20">
          <img
            src={hero_image}
            alt="Chocboy"
            className="h-[400px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.45)]"
          />
        </div>
      </div>
    </div>
  );
}
