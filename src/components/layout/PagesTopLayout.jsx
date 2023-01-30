import React from "react";
import Navbar from "../navbar/Navbar";
import top_bg_image from "../../assets/navbar-img.png";

export default function PagesTopLayout({ children, heading, backgroundImage }) {
  return (
    <>
      <div className="bg-her h-[520px] md:h-[650px] relative bg-main">
        <div className="absolute h-full w-full">
          <img
            src={backgroundImage}
            alt="hero-pic"
            className="h-full w-full object-cover mix-blend-overlay"
          />
        </div>
        <Navbar />

        <div className="w-full absolute top-0">
          <img
            alt=""
            src={top_bg_image}
            className="w-full object-cover h-52 md:h-auto"
          />
        </div>

        <div className="absolute bottom-52 md:bottom-44 2xl:bottom-32 w-full left-0 text-center">
          <h1 className="text-white text-3xl md:text-5xl font-semibold">
            {heading}
          </h1>
        </div>
      </div>

      {children}
    </>
  );
}
