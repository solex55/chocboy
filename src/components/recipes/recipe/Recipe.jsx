import React from "react";
import RECIPEDATA from "../../../utils/data/RECIPE_DATA.json";
import { Link } from "react-router-dom";

function Recipe() {
  return (
    <div className="py-20">
      <div className="recipes_container">
        {RECIPEDATA.map((item) => (
          <div className="py-16" key={item.id}>
            <div className="flex flex-col md:flex-row gap-5 max-w-[1300px] mx-auto px-5 md:px-10 lg:px-20">
              <div className="w-full md:w-/12 flex items-center">
                <div>
                  <h2 className="text-[#39170F] text-xl md:text-2xl font-semibold mb-3">
                    {item.title}
                  </h2>
                  <p className="text-sm md:text-base max-w-lg whitespace-pre-wrap">
                    {item.description}
                  </p>

                  {item.list && (
                    <ul className="list-disc pl-5 mt-2">
                      {item.list_item.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                  )}

                  <Link to={item.link}>
                    <button className="mt-5 py-2 px-10 text-main bg-sec rounded-lg font-medium">
                      Discover More
                    </button>
                  </Link>
                </div>
              </div>

              <div className="w-full md:w-/12">
                <div className="md:w-96 h-auto">
                  <img src={item.pic} alt="" className="h-full w-full" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipe;
