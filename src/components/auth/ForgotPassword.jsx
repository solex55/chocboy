import React from "react";
import AuthLayout from "../layout/AuthLayout";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, ErrorMessage, Field } from "formik";

const initialValues = {
  email: "",
};

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email Format")
    .required("Email is Required"),
});

export default function ForgotPasswordView() {
  const onSubmit = async (values, actions) => {
    console.log("form data", values);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
  };

  return (
    <AuthLayout header="Forgot Password">
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <div className="my-16">
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

                <p className="text-xs mt-6 text-slate-700">
                  Enter the Email you registered with
                </p>
              </div>

              <div className="mt-10 mb-20 text-center">
                <button
                  className="bg-sec rounded-md py-2 w-52 text-medium"
                  type="submit"
                >
                  Send OTP
                </button>

                <p className="text-sm mt-5">Didn't receive an OTP?</p>
                <Link className="text-[#FBB040] text-sm" to="/register">
                  Resend
                </Link>

                <p className="text-sm mt-7">
                  Don’t have an account?{" "}
                  <Link className="text-[#FBB040]" to="/register">
                    Sign up
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
