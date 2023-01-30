import React from "react";
import AuthLayout from "../layout/AuthLayout";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { passwordRegExp } from "../../utils/helpers";

const initialValues = {
  fullName: "",
  email: "",
  password: "",
};

const registerSchema = Yup.object().shape({
  fullName: Yup.string().required("Name is Required"),
  email: Yup.string()
    .email("Invalid email Format")
    .required("Email is Required"),
  password: Yup.string()
    .min(8, "Minimum of 8 characters needed")
    .matches(
      passwordRegExp,
      "Password must have one upper, lower, number and special character"
    )
    .required("Password is Required"),
});

export default function RegisterView() {
  const onSubmit = async (values, actions) => {
    console.log("form data", values);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
  };

  return (
    <AuthLayout header="Create Account">
      <div className="flex gap-5 md:gap-10 mt-7">
        <button
          className="w-1/2 flex flex-col md:flex-row items-center gap-2 md:gap-2 text-xs md:text-sm text-[#C4C4C4] bg-[rgba(118, 155, 193, 0.05)] px-1 md:px-3 py-3 rounded-md"
          style={{ border: "1px solid rgba(168, 160, 160, 0.5)" }}
        >
          <FcGoogle size="1.3rem" />
          Register with Google
        </button>

        <button
          className="w-1/2 flex flex-col md:flex-row items-center gap-2 md:gap-2 text-xs md:text-sm text-[#C4C4C4] bg-[rgba(118, 155, 193, 0.05)] px-1 md:px-3 py-3 rounded-md"
          style={{ border: "1px solid rgba(168, 160, 160, 0.5)" }}
        >
          <BsFacebook size="1.3rem" color="#4267B2" />
          Register with Facebook
        </button>
      </div>

      <div className="flex justify-center items-center my-10 opacity-50 gap-2">
        <div className="border border-slate-600 w-3" />
        <p>OR</p>
        <div className="border border-slate-600 w-3" />
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <div className="w-full mb-10 md:mb-0">
                <Field
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Full Name"
                  className={`border py-2 outline-none border-[#C4C4C4] w-full border-t-0 border-x-0`}
                />
                <ErrorMessage
                  name="fullName"
                  component="span"
                  className="error text-xs"
                />
              </div>

              <div className="my-10">
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="border py-2 outline-none border-[#C4C4C4] w-full border-t-0 border-x-0"
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className="error text-xs"
                />
              </div>

              <div>
                <Field
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="password"
                  className="py-2 outline-none w-full border-[#C4C4C4] border border-t-0 border-x-0"
                />

                <ErrorMessage
                  name="password"
                  component="span"
                  className="error text-xs"
                />
              </div>

              <div className="mt-10 mb-20 text-center">
                <button
                  className="bg-sec rounded-md py-2 w-52 text-medium"
                  type="submit"
                >
                  Create Account
                </button>

                <p className="text-sm mt-5">
                  Already a member?{" "}
                  <Link className="text-[#FBB040]" to="/login">
                    Sign in
                  </Link>
                </p>
              </div>
            </Form>
          );
        }}
      </Formik>
    </AuthLayout>
  );
}
