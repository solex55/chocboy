import React from "react";
import { Helmet } from "react-helmet";
import Profiles from "../components/profiles/Profiles";
import bloghero from "../assets/probig.png";
import PagesTopLayout from "../components/layout/PagesTopLayout";
import ContactUs from "../components/contact/ContactUs";
import FooterSection from "../components/footer/FooterSection";

function Profile() {
  return (
    <div>
      <Helmet>
        <title>Profile | chocboy!</title>
        <meta name="description" content="Profile" />
        <meta name="keyword" content="chocboy! chocolate nigeria order" />
        <link rel="canonical" href="/profile" />
      </Helmet>

      <PagesTopLayout heading="Profile" backgroundImage={bloghero}>
        <Profiles />

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

export default Profile;
