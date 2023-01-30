import React from "react";
import shophero from "../assets/shophero.png";
import sugar from "../assets/sugar.png";
import salt from "../assets/salt.png";
import { Helmet } from "react-helmet";
import PagesTopLayout from "../components/layout/PagesTopLayout";
import ContactUs from "../components/contact/ContactUs";
import FooterSection from "../components/footer/FooterSection";

function Bread() {
  return (
    <div>
      <Helmet>
        <title>Bread | chocboy!</title>
        <meta name="description" content="Order Chocboy Bread" />
        <meta name="keyword" content="chocboy! chocolate nigeria bread order" />
        <link rel="canonical" href="/chocboy-bread" />
      </Helmet>

      <PagesTopLayout heading="Chocboy Bread" backgroundImage={shophero}>
        <main className="text-main text-xl max-w-[1300px] mx-auto px-5 md:px-20 py-16">
          <div className="flex flex-col lg:flex-row mb-8 lg:mb-20 gap-4">
            <div className="w-full lg:w-1/2">
              <h3 className="font-bold pb-4">Ingridients</h3>
              <ol className="space-y-4 list-disc">
                <li>100 grams flour</li>
                <li>100 grams strong flour</li>
                <li>1 tsp. honey</li>
                <li>1/2 spoon yeast</li>
                <li>50 mL milk</li>
                <li>40 grams softened butter</li>
                <li>45 grams granulated sugar</li>
                <li>salt</li>
                <li>1 egg (+ 1 egg yolk)</li>
                <li>Chocboy Chocolate Spread (as needed)</li>
              </ol>
            </div>

            <div className="w-full lg:w-1/2 justify-center grid place-items-center gap-4">
              <img src={sugar} alt="sugar" sizes={200} />
              <img src={salt} alt="sait" sizes={200} />
            </div>
          </div>

          <div>
            <h3 className="font-bold pb-4">Instructions</h3>
            <ol className="space-y-4 list-decimal">
              <li>
                Dissolve the yeast in the warm milk with the honey and 1
                tablespoon of flour, stir into a rather liquid batter and let it
                proof, covered, for 30 minutes.
              </li>
              <li>
                Beat the eggs with the sugar in a bowl, add the softened butter
                cut into small pieces, next, gradually add the two types of
                flour, and the yeast mixture.
              </li>
              <li>Last, add the salt.</li>
              <li>
                Knead the ingredients together first in the bowl, then place the
                dough on a work surface and knead it until it becomes smooth and
                elastic.
              </li>
              <li>
                Place the dough in a warm area to rise until it doubles in size,
                approximately 2 hours.
              </li>
              <li>
                Roll out the dough into a rectangle, 1/2 centimeter in
                thickness.
              </li>
              <li>
                Spread a generous amount of Chocboy all over the surface of the
                dough, then roll up the dough lengthwise into a cylinder, cut
                the cylinder in half.
              </li>
              <li>
                Braid the two pieces of dough, fold the ends under the braid,
                place the braid in a loaf pan lined with wax paper.
              </li>
              <li>Bake at 160C for approximately 40 minutes.</li>
              <li>
                Remove the braid from the oven and let it cool completely.
              </li>
            </ol>
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

export default Bread;
