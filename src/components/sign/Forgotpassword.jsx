import React from 'react'
import regpic from '../../assets/signn.png';
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import './signin.css'
import {  FaArrowLeft } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField } from "@mui/material";

const initialValues = {
    email : ''
}

const onSubmit= async (values, actions) => {
    console.log('form data', values);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
}

 const basicschema = Yup.object().shape({
    email : Yup.string().email('Invalid email Format').required('Field is Required')
})
function Forgotpassword() {
    
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block  h-screen w-full bg-gray-100'>
            <img src={regpic} alt="" className='w-full h-full object-cover'/>
        </div>

        <Formik
      initialValues={initialValues}
      validationSchema={basicschema}
      onSubmit= {onSubmit}
    >{(formik) => {
        const { errors, touched, isValid, dirty} = formik;
        return (
                <div className='bg-gray-100 flex flex-col justify-center sm:top-16 2xl:justify-center'>
                <div className=' p-4 w-8'>
                    <Link to="/login">< FaArrowLeft /></Link>
                </div>


                <div className='bg-gray-100 flex flex-col justify-center'>
                        <Form className="max-w-[800px] w-full mx-auto p-4">
                            <h2 className='text-2xl sm:text-4xl font-bold text-main py-6'>Forgot Password</h2>

                            <div className="flex flex-col py-2">
                                <Field
                                type="email"
                                name="email"
                                id="email"
                                label="Email"
                                as={TextField}
                                color="warning"
                                className={errors.email && touched.email ? 
                                "input-error" : null}
                                />
                                <p className='text-md'>Enter the email you registered with</p>
                                <ErrorMessage name="email" component="span" className="error" />
                            </div>

                            <button type="submit" disabled={!(dirty && isValid)} className='w-full text-center bg-sec text-main my-4 rounded-xl py-2 font-semibold border hover:bg-transparent hover:border-bg-sec'>Send OTP</button>
                        
                            <div className='mb-12'>
                                <p className=' text-xl text-center'>Didn't receive an OTP?</p>
                                <p className='text-sec text-center'>Resend</p>
                            </div>
                            
                            <div> 
                                  <p className='text-md lg:text-xl text-center'>Don't have an account? <Link to="/register"><span className='text-sec'>Sign Up Now</span></Link></p>
                                  <div className='flex gap-4 text-sm text-gray-500 items-center justify-center text-center'>
                                        <p>Privacy</p>
                                        <p>Terms &#38; Conditions</p>
                                    </div>
                            </div>
                        </Form>
                    </div>
                </div>
        );
      }}
    </Formik>

    </div>
  )
}

export default Forgotpassword