import React from "react";

function Values() {
  const valueData = [
    { id: 1, img: require("../../../assets/effort.png"), desc: "Diligence" },
    { id: 2, img: require("../../../assets/fair-play.png"), desc: "Passion" },
    { id: 3, img: require("../../../assets/passionate.png"), desc: "Fairness" },
    { id: 4, img: require("../../../assets/smiley.png"), desc: "Joy" },
  ];

  return (
    <div className="mt-20 md:mt-32 max-w-xl mx-auto text-[#39170F]">
      <h3 className="mb-10 font-bold text-2xl md:text-3xl text-center">
        Our Core Values
      </h3>

      <div className="flex items-center justify-between w-full">
        {valueData.map((data) => (
          <div className="flex flex-col" key={data.id}>
            <div className="h-14 w-14 mb-3">
              <img src={data.img} alt="Chocboy-Values" className="h-full" />
            </div>
            <p className="text-sm sm:text-base font-medium text-center text-[#39170F]">
              {data.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Values;
