import React from "react";
import brownieshero from "../assets/brownieshero.png";
import egg from "../assets/egg.png";
import { Helmet } from "react-helmet";

import PagesTopLayout from "../components/layout/PagesTopLayout";
import ContactUs from "../components/contact/ContactUs";
import FooterSection from "../components/footer/FooterSection";

function Brownies() {
  return (
    <div>
      <Helmet>
        <title>Brownies | chocboy!</title>
        <meta
          name="description"
          content="Make 3 Ingredient Chocboy Brownies in minutes featuring a fudgy texture and gorgeous chocolatey flavor."
        />
        <meta name="keyword" content="chocboy! chocolate nigeria bread order" />
        <link rel="canonical" href="/chocboy-brownies" />
      </Helmet>

      <PagesTopLayout heading="Chocboy Brownies" backgroundImage={brownieshero}>
        <main className="text-main text-xl max-w-[1300px] mx-auto px-5 md:px-20 py-16">
          <div className="text-justify text-xl mb-8">
            <p>
              Make 3 Ingredient Chocboy Brownies in minutes featuring a fudgy
              texture and gorgeous chocolatey flavor.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row mb-8">
            <div className="w-full lg:w-1/2 ">
              <h4 className="font-bold pb-4">Ingridents</h4>
              <div>
                <ol className="space-y-8 list-disc">
                  <li>1 cup (240g) Chocboy</li>
                  <li>2 eggs (or egg substitutes for brownies)</li>
                  <li>10 tablespoons all-purpose (~ 85g)</li>
                </ol>
              </div>
            </div>
            <div className="w-full lg:w-1/2 justify-center grid place-items-center">
              <img src={egg} alt="egg" sizes={200} />
            </div>
          </div>

          <div className="pb-8">
            <h4 className="font-bold pb-4">Instruction</h4>
            <ol className="space-y-8 list-decimal">
              <li>
                Put the Chocboy Chocolate Spread, eggs and flour in a large bowl
                and mix until all ingredients are combined. The batter should be
                thick and shiny.
              </li>
              <li>
                Line a 2 inch deep 8 x 12 in the baking tray with parchment
                paper or butter coated. Pour the batter into your tray. Bake at
                350F (175C) for 20-25 minutes at a conventional setting in your
                oven. Monitor the bake if you are using a fan assisted oven.
                These will bake faster.
              </li>
              <li>
                Remove from the oven and allow to cool fully before slicing.
                Enjoy!
              </li>
            </ol>
          </div>

          <div>
            <h4 className="font-bold pb-4">Recipies</h4>
            <p>
              Store at room temperature in an airtight container for 3 days.
            </p>
          </div>
        </main>
        <div
          className="text-white"
          style={{
            background: "linear-gradient(180deg, #79372A 0%, #39170F 144.87%)",
          }}
        >
          <ContactUs />
          <FooterSection />
        </div>
      </PagesTopLayout>
    </div>
  );
}

export default Brownies;
