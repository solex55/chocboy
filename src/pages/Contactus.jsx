import React from "react";
// import Contact from "../components/contact/Contact";
import abouthero from "../assets/about.png";
import { Helmet } from "react-helmet";
import PagesTopLayout from "../components/layout/PagesTopLayout";
import ContactUs from "../components/contact/ContactUs";
import FooterSection from "../components/footer/FooterSection";

function Contactus() {
  return (
    <div>
      <Helmet>
        <title>Contact | chocboy!</title>
        <meta
          name="description"
          content="Our amazing customer care officials are always ready to help."
        />
        <meta name="keyword" content="chocboy! chocolate nigeria " />
        <link rel="canonical" href="/contact-us" />
      </Helmet>

      <PagesTopLayout heading="Contact Us" backgroundImage={abouthero}>
        {/* <Contact /> */}

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

export default Contactus;
