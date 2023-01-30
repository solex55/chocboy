import React from "react";
import Cartproducts from "../components/carts/Cartproducts";
/* import Catalogue from '../components/catalogue/Catalogue'
 */ import shophero from "../assets/shophero.png";
import { Helmet } from "react-helmet";
import PagesTopLayout from "../components/layout/PagesTopLayout";
import ContactUs from "../components/contact/ContactUs";
import FooterSection from "../components/footer/FooterSection";

function Cart() {
  return (
    <div>
      <Helmet>
        <title>Cart | chocboy!</title>
        <meta name="description" content="Cart" />
        <meta
          name="keyword"
          content="chocboy! chocolate nigeria order Shopping cart "
        />
        <link rel="canonical" href="/cart" />
      </Helmet>

      <PagesTopLayout heading="Cart" backgroundImage={shophero}>
        <Cartproducts />

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

export default Cart;
