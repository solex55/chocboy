import React from "react";
import Hero from "../components/heroimage/Heroimage";
import Values from "../components/aboutUs/values/Values";
import Value from "../components/valueland/Valueland";
import Footer from "../components/footer/Footer";
import { Helmet } from "react-helmet";

function Homepage() {
  return (
    <div>
      <Helmet>
        <title>Chocboy!</title>
        <meta
          name="description"
          content="chocboy Bringing smiles with the taste of premium chocolate"
        />
        <meta
          name="keyword"
          content="chocboy! chocolate nigeria sweet chocki"
        />
        <link rel="canonical" href="/homepage" />
      </Helmet>
      <Hero />
      <Values />
      <Value />
      <Footer />
    </div>
  );
}

export default Homepage;
