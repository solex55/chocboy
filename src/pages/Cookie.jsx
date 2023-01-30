import React from "react";
import cookiehero from "../assets/cookiehero.png";
import powder from "../assets/powder.png";
import { Helmet } from "react-helmet";
import PagesTopLayout from "../components/layout/PagesTopLayout";
import ContactUs from "../components/contact/ContactUs";
import FooterSection from "../components/footer/FooterSection";

function Cookie() {
  return (
    <div>
      <Helmet>
        <title>Cookies | chocboy!</title>
        <meta name="description" content="Eggless Chocboy Chocolate Cookie" />
        <meta
          name="keyword"
          content="chocboy! chocolate nigeria Cookies order"
        />
        <link rel="canonical" href="/chocboy-cookies" />
      </Helmet>

      <PagesTopLayout
        heading="Eggless Chocboy Chocolate Cookie"
        backgroundImage={cookiehero}
      >
        <main className="text-main text-xl max-w-[1300px] mx-auto px-5 md:px-20 py-16">
          <div className="space-y-4 text-center mb-8 lg:mb-20">
            <p>
              <span className="font-bold">Total Time</span> - 3 hours
            </p>
            <p>
              <span className="font-bold">Servings</span> – 8 to 10
            </p>
          </div>

          <div className="flex flex-col lg:flex-row mb-20 gap-4">
            <div className="w-full lg:w-1/2">
              <h4 className="font-bold pb-4">Ingridents</h4>
              <ul className="space-y-4 list-disc">
                <li> 1/2 cup Chocboy</li>
                <li> 1 1/2 cups whipping cream</li>
                <li> 1 tsp vanilla extract</li>
                <li> 1/2 tsp cinnamon</li>
              </ul>
            </div>

            <div className="w-full lg:w-1/2 justify-center grid place-items-center gap-4">
              <img src={powder} alt="powder" sizes={200} />
            </div>
          </div>

          <div>
            <h4 className="font-bold pb-4">Instructions</h4>
            <ol className="space-y-4 list-decimal">
              <li>
                {" "}
                Place the Chocboy Chocolate Spread in a small bowl and warm in
                the microwave at 10 second increments. Stir in-between warnings.
                It will take a total of 30-40 seconds to loosen the Chocboy
                Chocolate Spread. Allow to cool slightly.
              </li>
              <li>
                {" "}
                In a large bowl, add the whipping cream, vanilla, and cinnamon.
                Whip with a hand mixer until soft peaks are formed. This will
                take several minutes on high. Don't go too far with it, it will
                taste like butter.
              </li>
              <li>
                {" "}
                Add in the cooled Chocboy Chocolate Spread and whip for another
                minute or two until well combined and again soft peaks have
                formed.
              </li>
              <li>
                {" "}
                Pour into martini glasses, cover with plastic wrap, and
                refrigerate for at least 6 hours or overnight.
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

export default Cookie;
