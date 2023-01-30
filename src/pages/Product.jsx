import React from "react";
import Location from "../components/recipes/location/Location";
import productshero from "../assets/prohero.png";
import { Helmet } from "react-helmet";
import PagesTopLayout from "../components/layout/PagesTopLayout";
import ContactUs from "../components/contact/ContactUs";
import FooterSection from "../components/footer/FooterSection";
import Recipe from "../components/recipes/recipe/Recipe";

function Product() {
  return (
    <div>
      <Helmet>
        <title>Products | chocboy!</title>
        <meta
          name="description"
          content="chocboy Products brownies bread breadstick cookies mousse truffles"
        />
        <meta name="keyword" content="chocboy! chocolate nigeria order" />
        <link rel="canonical" href="/products" />
      </Helmet>

      <PagesTopLayout heading="Our Recipe" backgroundImage={productshero}>
        <Recipe />
        <Location />
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

export default Product;
