import React from "react";
import "./discover.css";
import { Link } from "react-router-dom";

function Discover() {
  return (
    <div className="md:mt-10">
      <h3 className="text-sub text-center text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-4xl mb-8">
        Discover More
      </h3>

      <div className="discover_container h-[80vh] md:h-[90vh]">
        <div className="max-w-[1300px] mx-auto px-5 md:px-20 mt-10 h-full">
          <div className="flex flex-col h-full justify-center text-white">
            <h3 className="text-center md:text-left text-2xl md:text-4xl font-bold max-w-[400px] mb-5">
              Unleash your creativity with our recipe
            </h3>

            <p className="text-sm font-normal max-w-[800px] text-justify md:text-left">
              Simply put Chocboy Chocolate Spread on top of a doughnut,
              croissant, pancake, or slice of toast. As you and your family
              share a wonderful breakfast or snack with any of our products see
              how the magic and joy of Chocboy elevates your mood to something
              exceptional.
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-5 md:gap-14 max-w-[1300px] mx-auto md:justify-center -translate-y-20 px-3">
        <div className="h-72 md:h-96 shadow-lg w-1/2 md:w-72 rounded-lg process flex flex-col justify-end p-0 py-4 md:p-7">
          <div className="text-center">
            <p className="text-white font-semibold mb-2 text-sm md:text-base">
              OUR PROCESS
            </p>
            <Link to="/shop">
              <button className="bg-sec text-main w-11/12 md:w-40 font-semibold text-white rounded-lg md:text-lg text-sm py-2">
                Discover
              </button>
            </Link>
          </div>
        </div>
        <div className="h-72 md:h-96 shadow-lg w-1/2 md:w-72 rounded-lg recipe flex flex-col justify-end p-0 py-4 md:p-7">
          <div className="text-center">
            <p className="text-white font-semibold mb-2 text-sm md:text-base">
              OUR RECIPE
            </p>
            <Link to="/product">
              <button className="bg-sec text-main w-11/12 md:w-40 font-semibold text-white rounded-lg md:text-lg text-sm py-2">
                Discover
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover;
