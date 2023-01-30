import React from "react";
import { Helmet } from "react-helmet";
import ForgotPasswordView from "../components/auth/ForgotPassword";

function Forgot() {
  return (
    <div>
      <Helmet>
        <title>Forgot Password | chocboy!</title>
        <meta name="description" content="chocboy forgotpassword" />
        <meta
          name="keyword"
          content="chocboy! chocolate nigeria Cookies order"
        />
        <link rel="canonical" href="/forgot-password" />
      </Helmet>

      <ForgotPasswordView />
    </div>
  );
}

export default Forgot;
