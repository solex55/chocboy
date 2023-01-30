import React from "react";
import { Helmet } from "react-helmet";
import ResetPasswordView from "../components/auth/ResetPassword";

function Resetpassword() {
  return (
    <div>
      <Helmet>
        <title>Reset | chocboy!</title>
        <meta name="description" content="Reset Password" />
        <meta name="keyword" content="chocboy! chocolate nigeria order" />
        <link rel="canonical" href="/reset-password" />
      </Helmet>
      <ResetPasswordView />
    </div>
  );
}

export default Resetpassword;
