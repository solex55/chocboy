import React from "react";
import SHOPDATA from "../../utils/data/SHOP_DATA.json";
import { Link } from "react-router-dom";
import Incdec from "./IncDecCounter";
function Cartproducts() {
  return (
    <>
      {SHOPDATA &&
        SHOPDATA.map((shopped) => (
          <div
            className="flex flex-col lg:flex-row w-full px-16 gap-8"
            id={shopped.id}
          >
            <div className="pb-4 py-4 lg:py-8  w-full lg:w-1/2">
              <img src={shopped.pic} alt="" className="w-full" />
            </div>
            <div className="py-4 lg:py-8 w-full lg:w-1/2 whitespace-pre-wrap">
              <h1 className="text-3xl lg:text-3xl text-main font-bold">
                {shopped.title}
              </h1>
              <div className="flex  justify-between my-4 lg:my-8 items-center">
                <p className="font-bold text-xl">{shopped.price}</p>
                <div>
                  <Incdec />
                </div>
              </div>
              <Link to={shopped.link}>
                <button className="w-full py-4 text-center text-main bg-sec rounded-xl text-xl font-bold">
                  Buy Now
                </button>
              </Link>
              <h3 className="text-main text-xl py-4 font-bold">Description</h3>
              <p className="text-justify  whitespace-pre-wrap">
                {shopped.description}
              </p>
            </div>
          </div>
        ))}
    </>
  );
}

export default Cartproducts;
