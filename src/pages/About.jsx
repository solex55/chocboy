import React from "react";
import Abouttext from "../components/aboutUs/aboutText/Abouttext";
import Team from "../components/aboutUs/team/Team";
import abouthero from "../assets/chocabt.jpg";
import { Helmet } from "react-helmet";
import PagesTopLayout from "../components/layout/PagesTopLayout";
import ContactUs from "../components/contact/ContactUs";
import FooterSection from "../components/footer/FooterSection";

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
        <Abouttext />
        <Team />

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
