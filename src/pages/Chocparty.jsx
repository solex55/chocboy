import React from "react";
import Party from "../components/party/Party";
import partyhero from "../assets/image10.png";
import { Helmet } from "react-helmet";

import PagesTopLayout from "../components/layout/PagesTopLayout";
import ContactUs from "../components/contact/ContactUs";
import FooterSection from "../components/footer/FooterSection";

function Chocparty() {
  return (
    <div>
      <Helmet>
        <title>ChocParty | chocboy!</title>
        <meta
          name="description"
          content="ChocParty is a specially organized event that is deliberately packed with fun-loving activities and an “experience” that can only be unlocked by your attendance."
        />
        <meta
          name="keyword"
          content="chocboy! chocolate nigeria party tickets"
        />
        <link rel="canonical" href="/chocparty" />
      </Helmet>

      <PagesTopLayout heading="ChocParty" backgroundImage={partyhero}>
        <Party />

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

export default Chocparty;
