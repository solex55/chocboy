import React from "react";
import ResetPasswordOtp from "../components/auth/ResetPasswordOtp";
import { Helmet } from "react-helmet";

function OtPassword() {
  return (
    <div>
      <Helmet>
        <title>OTP | chocboy!</title>
        <meta name="description" content="chocboy" />
        <meta name="keyword" content="chocboy! chocolate nigeria order" />
        <link rel="canonical" href="/otp-password" />
      </Helmet>
      <ResetPasswordOtp />
    </div>
  );
}

export default OtPassword;
