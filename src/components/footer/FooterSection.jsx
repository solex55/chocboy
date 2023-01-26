import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function FooterSection() {
  const allSocials = [
    {
      icon: <FaMailBulk />,
      label: "mail",
      link: "",
    },
    {
      icon: <FaPhone />,
      label: "phone",
      link: "",
    },
    {
      icon: <FaFacebook />,
      label: "facebook",
      link: "",
    },
    {
      icon: <FaTwitter />,
      label: "twitter",
      link: "",
    },
    {
      icon: <FaLinkedin />,
      label: "linkedIn",
      link: "",
    },
    {
      icon: <FaInstagram />,
      label: "instagram",
      link: "",
    },
  ];

  return (
    <div className="max-w-[1300px] mx-auto px-5 md:px-20 pb-10 md:mt-20">
      <h3 className="text-white text-center text-xl font-bold tracking-tight leading-none md:text-4xl xl:text-4xl mb-10">
        Contact us
      </h3>

      <hr className="border border-white w-4/5 mx-auto" />

      <div className="mt-10 flex gap-10 justify-center">
        {allSocials.map(({ icon, label, link }) => (
          <a href={link} key={label} className="text-lg">
            {icon}
          </a>
        ))}
      </div>

      <p className="text-xs md:text-sm text-center max-w-xl mx-auto my-20">
        Block A Unit 5 Technology Incubation Centre Beside Oyo State Permanent
        Trade Fair Complex EXPOYO Off Oyo Road Ibadan
      </p>

      <div className="flex justify-between md:items-center flex-col-reverse md:flex-row items-start gap-5 text-xs md:text-sm">
        <p>@2023 Chocboy. All rights Reserved</p>

        <Link to="">
          <p>Terms & conditions</p>
        </Link>

        <Link to="">
          <p>Privacy Policy</p>
        </Link>
      </div>
    </div>
  );
}
