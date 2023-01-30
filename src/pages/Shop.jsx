import React from "react";
import Catalogue from "../components/catalogue/Catalogue";
import shophero from "../assets/shopp.png";
import { Helmet } from "react-helmet";
import PagesTopLayout from "../components/layout/PagesTopLayout";
import ContactUs from "../components/contact/ContactUs";
import FooterSection from "../components/footer/FooterSection";

function Shop() {
  return (
    <div>
      <Helmet>
        <title>Shop | chocboy!</title>
        <meta name="description" content="Shop" />
        <meta name="keyword" content="chocboy! chocolate nigeria order Shop " />
        <link rel="canonical" href="/shop" />
      </Helmet>

      <PagesTopLayout heading="Shop" backgroundImage={shophero}>
        <Catalogue />

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

export default Shop;
