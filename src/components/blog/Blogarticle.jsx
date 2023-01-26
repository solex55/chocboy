import React from "react";
import BLOGDATAS from "../../utils/data/BLOGDATA.json";
import "./blogarticle.css";

const Blogarticle = () => {
  return (
    <div className="mx-4 lg:mx-24 gap-12 py-16 ">
      {BLOGDATAS &&
        BLOGDATAS.map((blogdata) => (
          <div
            className="flex h-56 md:h-full gap-4 lg:gap-8 mb-12"
            id={blogdata.id}
          >
            <div className="w-full lg:w-1/2 h-full lg:h-full ">
              <img
                src={blogdata.pic}
                alt=""
                className="w-full rounded h-full"
              />
            </div>
            <div className="flex flex-col w-full lg:w-1/2">
              <h3 className="mb-3 lg:mb-4 text-xl lg:text-3xl text-main font-bold">
                {blogdata.title}
              </h3>
              <p className="text-left lg:text-justify truncator text-lg">
                {blogdata.body}{" "}
              </p>
            </div>
          </div>
        ))}

      <div>
        <button className="bg-sec flex rounded mx-auto content-center text-main py-4 px-4 items-center justify-center border hover:border-bg-main shadow-md">
          See More
        </button>
      </div>
    </div>
  );
};

export default Blogarticle;
