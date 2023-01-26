import React from "react";
import RegisterView from "../components/auth/Register";
import { Helmet } from "react-helmet";

function Register() {
  return (
    <>
      <Helmet>
        <title>Register | chocboy!</title>
        <meta name="description" content="Register" />
        <meta name="keyword" content="chocboy! chocolate nigeria order" />
        <link rel="canonical" href="/register" />
      </Helmet>

      <RegisterView />
    </>
  );
}

export default Register;
