import React from "react";
import abouthero from "../assets/chocabt.jpg";
import { Helmet } from "react-helmet";
import PagesTopLayout from "../components/layout/PagesTopLayout";

export default function About() {
  return (
    <div>
      <Helmet>
        <title>About | chocboy!</title>
        <meta
          name="description"
          content="The ChocBoy Brand is a chocolate production company located in Ibadan, Nigeria."
        />
        <meta
          name="keyword"
          content="chocboy! chocolate nigeria sweet chocki"
        />
        <link rel="canonical" href="/about" />
      </Helmet>

      <PagesTopLayout heading="About Us" backgroundImage={abouthero}>
        <div>HELLO WORLD</div>
      </PagesTopLayout>
    </div>
  );
}
