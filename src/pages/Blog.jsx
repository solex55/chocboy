import React from "react";
import Blogarticle from "../components/blog/Blogarticle";
import bloghero from "../assets/bloghero.png";
import { Helmet } from "react-helmet";
import PagesTopLayout from "../components/layout/PagesTopLayout";
import ContactUs from "../components/contact/ContactUs";
import FooterSection from "../components/footer/FooterSection";

function Blog() {
  return (
    <div>
      <Helmet>
        <title>Blog | chocboy!</title>
        <meta
          name="description"
          content="Get info on all of chocboy products, recipes and latest news"
        />
        <meta
          name="keyword"
          content="chocboy! chocolate nigeria sweet chocki news blog"
        />
        <link rel="canonical" href="/blog" />
      </Helmet>

      <PagesTopLayout heading="Blog" backgroundImage={bloghero}>
        <Blogarticle />

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

export default Blog;
