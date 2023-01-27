import React from "react";
import { MdLocationOn } from "react-icons/md";

function Location() {
  const Lagosplace = [
    {
      id: 1,
      place: "Essential Supermarket",
    },
    {
      id: 2,
      place: "De Prince Supermarket",
    },
    {
      id: 3,
      place: "Sobee's Supermarket",
    },
    {
      id: 4,
      place: "Bazaar Supermarket",
    },
    {
      id: 5,
      place: "Bienco Supermarket",
    },
    {
      id: 6,
      place: "Jendol Supermarket",
    },
    {
      id: 7,
      place: "Pure Life Pharmacy",
    },
    {
      id: 8,
      place: "Foodco Supermarket",
    },
  ];

  const Ibadanplace = [
    { id: 1, place: "Feedwell Supermarket" },
    { id: 2, place: "Shokem Supermarket" },
    { id: 3, place: "Mosh Supermarket" },
    { id: 4, place: "Ace Supermarket" },
    { id: 5, place: "Sunrise Supermarket (Bond Mall Bodija)" },
    { id: 6, place: "Agbeni Merchandise Store" },
    { id: 7, place: "Foodies Supermarket" },
    { id: 8, place: "Woc Shoopers World " },
    { id: 8, place: "Wimpy Supermarket " },
    { id: 8, place: "Gracy's Mart Akobo " },
    { id: 8, place: "ChocBoy Store " },
  ];

  return (
    <div className="bg-[#ECE6E4] py-20 mt-5">
      <div>
        <div className="w-fit mx-auto">
          <MdLocationOn color="#79372A" size="4rem" />
        </div>

        <h3 className="mb-10 mt-3 font-bold text-2xl md:text-3xl text-center text-[#79372A]">
          Shop Our Products
        </h3>
      </div>

      <div className="max-w-[1300px] mx-auto px-5 md:px-20 mt-10">
        <p className="text-center text-main text-xl lg:text-2xl font-semibold">
          Lagos
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3 md:gap-5 mt-7">
          {Lagosplace.map((lagos) => (
            <p
              key={lagos.id}
              className="text-white py-3 text-xs md:text-base font-medium text-center rounded-lg"
              style={{
                background: "linear-gradient(180deg, #79372A 0%, #39170f 100%)",
              }}
            >
              {lagos.place}
            </p>
          ))}
        </div>

        <p className="text-center text-main text-xl lg:text-2xl font-semibold mt-14">
          Ibadan
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3 md:gap-5 mt-7">
          {Ibadanplace.map((lagos) => (
            <p
              key={lagos.id}
              className="text-white py-3 text-xs md:text-base font-medium text-center rounded-lg h-fit px-1"
              style={{
                background: "linear-gradient(180deg, #79372A 0%, #39170f 100%)",
              }}
            >
              {lagos.place}
            </p>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="mt-5 py-2 px-10 text-main bg-sec rounded-lg font-medium">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Location;
