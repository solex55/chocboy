import React from "react";
import Oluwajare from "../../../assets/Oluwajare.png";
import Otomudo from "../../../assets/Otomudo.png";
import Oluwafunmilayo from "../../../assets/wurf.png";
import Wuraola from "../../../assets/olu.png";
import "./team.css";

function Team() {
  return (
    <div className="bg-[#ECE6E4] py-32 mt-20 md:mt-32">
      <div className="max-w-[1300px] mx-auto px-5 md:px-20">
        <h3 className="mb-5 font-bold text-2xl md:text-3xl text-center text-[#79372A]">
          Our Team
        </h3>

        <div className="flex flex-wrap gap-10 md:gap-0">
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="h-96">
              <img
                src={Oluwajare}
                alt="Oluwajare"
                className="h-full object-cover object-center w-full rounded-md"
              />
            </div>

            <div className="text-center">
              <p className="font-semibold">Jare Fola Bolumole</p>
              <p className="text-sm">Founder</p>
            </div>
          </div>

          <div className="w-full md:w-1/3 lg:w-1/4 md:transform md:translate-y-10">
            <div className="h-96">
              <img
                src={Wuraola}
                alt="Wuraola"
                className="h-full object-cover object-center w-full rounded-md"
              />
            </div>

            <div className="text-center">
              <p className="font-semibold">Wuraola Olasupo</p>
              <p className="text-sm">Head of Finance</p>
            </div>
          </div>

          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="h-96">
              <img
                src={Otomudo}
                alt="Oluwafunmilayo"
                className="h-full object-cover object-center w-full rounded-md"
              />
            </div>

            <div className="text-center">
              <p className="font-semibold">Gloria Otomudo</p>
              <p className="text-sm">General Manager</p>
            </div>
          </div>

          <div className="w-full md:w-1/3 lg:w-1/4 md:transform md:translate-y-10">
            <div className="h-96">
              <img
                src={Oluwafunmilayo}
                alt="Oluwafunmilayo"
                className="h-full object-cover object-center w-full rounded-md"
              />
            </div>

            <div className="text-center">
              <p className="font-semibold"> Oluwafunmilayo Adekunle</p>
              <p className="text-sm">Head of Business development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
