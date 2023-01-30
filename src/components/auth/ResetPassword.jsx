import React from "react";
import AuthLayout from "../layout/AuthLayout";
import * as Yup from "yup";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { passwordRegExp } from "../../utils/helpers";

const initialValues = {
  currentPassword: "",
  newPassword: "",
};

const loginSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .min(8, "Minimum of 8 characters needed")
    .matches(
      passwordRegExp,
      "Password must have one upper, lower, number and special character"
    )
    .required("Password is Required"),
  newPassword: Yup.string()
    .min(8, "Minimum of 8 characters needed")
    .matches(
      passwordRegExp,
      "Password must have one upper, lower, number and special character"
    )
    .required("Password is Required"),
});

export default function ResetPasswordView() {
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
              <div className="my-10">
                <Field
                  type="password"
                  placeholder="Current password"
                  name="currentPassword"
                  id="currentPassword"
                  className="py-2 outline-none w-full border-[#C4C4C4] border border-t-0 border-x-0"
                />

                <ErrorMessage
                  name="currentPassword"
                  component="span"
                  className="error text-xs"
                />
              </div>

              <div>
                <Field
                  type="password"
                  placeholder="New password"
                  name="newPassword"
                  id="newPassword"
                  className="py-2 outline-none w-full border-[#C4C4C4] border border-t-0 border-x-0"
                />

                <ErrorMessage
                  name="newPassword"
                  component="span"
                  className="error text-xs"
                />
              </div>

              <div className="mt-10 mb-20 text-center">
                <button
                  className="bg-sec rounded-md py-2 w-52 text-medium"
                  type="submit"
                >
                  Reset Password
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </AuthLayout>
  );
}
