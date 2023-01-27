import React from "react";
import AuthLayout from "../layout/AuthLayout";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, ErrorMessage, Field } from "formik";

const initialValues = {
  otp: "",
};

const loginSchema = Yup.object().shape({
  otp: Yup.number().required("OTP required"),
});

export default function ResetPasswordOtp() {
  const onSubmit = async (values, actions) => {
    console.log("form data", values);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
  };

  return (
    <AuthLayout header="Reset Password">
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
                  type="number"
                  name="otp"
                  id="otp"
                  placeholder="- - - - - -"
                  className="border py-2 outline-none border-[#C4C4C4] w-full border-t-0 border-x-0"
                />
                <ErrorMessage
                  name="otp"
                  component="span"
                  className="error text-xs"
                />

                <p className="text-xs mt-6 text-slate-700">
                  Enter the OTP you recieved in your mail
                </p>
              </div>

              <div className="mt-10 mb-20 text-center">
                <button
                  className="bg-sec rounded-md py-2 w-52 text-medium"
                  type="submit"
                >
                  Continue
                </button>

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
