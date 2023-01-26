import React from "react";
import Hero from "../components/home/Hero";
// import Feature from "../components/featuresection/Feature";
// import Discover from "../components/discover/Discover";
// import Footer from "../components/footer/Footer";
import Feature from "../components/home/featuresection/Feature";
import { Helmet } from "react-helmet";

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

      {/*
        <Discover />
        <Footer /> */}
    </div>
  );
}

export default Home;
