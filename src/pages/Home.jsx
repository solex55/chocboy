import React from "react";
import Hero from "../components/home/Hero";
import FooterSection from "../components/footer/FooterSection";
import Feature from "../components/home/featuresection/Feature";
import { Helmet } from "react-helmet";
import Discover from "../components/home/discover/Discover";
import ContactUs from "../components/contact/ContactUs";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Home | chocboy!</title>
        <meta
          name="description"
          content="chocboy Bringing smiles with the taste of premium chocolate"
        />
        <meta name="keyword" content="chocboy! chocolate nigeria order" />
        <link rel="canonical" href="/" />
      </Helmet>

      <Hero />
      <Feature />
      <Discover />
      <div
        className="text-white"
        style={{
          background: "linear-gradient(180deg, #79372A 0%, #39170F 144.87%)",
        }}
      >
        <ContactUs />
        <FooterSection />
      </div>
    </div>
  );
}

export default Home;
