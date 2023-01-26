import React from "react";
import { Link } from "react-router-dom";
import frame1 from "../../../assets/frame1.png";
import frame2 from "../../../assets/frame2.png";
import frame3 from "../../../assets/frame3.png";
import frame4 from "../../../assets/frame4.png";
import parry1 from "../../../assets/parry1.png";
import parry2 from "../../../assets/parry2.png";

function Feature() {
  const allFeatures = [
    {
      link: "/products",
      label: "products",
      description: "Our amazing products",
      img: frame1,
    },
    {
      link: "/shop",
      label: "shop",
      description: "Get chocolate spread",
      img: frame2,
    },
    {
      link: "/chocparty",
      label: "chocparty",
      description: "Join our chocolate world",
      img: frame3,
    },
    {
      link: "/shop",
      label: "shop_",
      description: "Navigate to our store",
      img: frame4,
    },
  ];

  return (
    <div className="max-w-[1300px] mx-auto px-5 md:px-20 pb-20">
      <div className="pt-40 pb-20 md:pb-32">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 gap-y-10 h-auto">
          {allFeatures.map((item) => {
            return (
              <div key={item.link}>
                <Link to={item.link}>
                  <img
                    alt=""
                    className="rounded-xl object-cover w-full"
                    src={item.img}
                  />
                  <p className="text-center text-[#53241A] font-semibold mt-4 text-sm md:text-base">
                    {item.description}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className="md:w-[80%] mx-auto">
        <h3 className="text-sub text-center text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-4xl mb-8">
          ChocParty
        </h3>

        <div className="flex gap-5 mt-7 mb-10">
          <div className="h-40 md:h-52 lg:h-96 w-1/2">
            <img
              src={parry1}
              alt=""
              className="w-full h-full object-cover object-top rounded-lg"
            />
          </div>
          <div className="h-40 md:h-52 lg:h-96 w-1/2">
            <img
              src={parry2}
              alt=""
              className="w-full h-full object-cover object-top rounded-lg"
            />
          </div>
        </div>

        <p className="text-justify text-sm md:text-base">
          The ChocParty, which was conceived out of the need to provide an
          avenue for families and friends to bond, not just with one another,
          but also with other people, will this year host its 10th consecutive
          edition and with the endorsement of Oyo State Ministry of Youths and{" "}
          <Link
            to="/chocparty"
            className="text-main font-bold no-underline hover-cursor-pointer hover:underline"
          >
            See More
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Feature;
