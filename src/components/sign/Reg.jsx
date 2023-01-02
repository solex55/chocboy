import React from 'react'
/* import Regcontainer from './Regcontainer'
import Signin from './Signin' */
import * as Yup from 'yup'
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './signin.css'
/* import { basicSchema } from './Basicschema';
 */import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField } from "@mui/material";
import {  FaArrowLeft } from "react-icons/fa";


const initialValues = {
    fname : '',
    lname : '',
    email : '',
    password : '',
    confirmPassword :''
}

const onSubmit= async (values, actions) => {
    console.log('form data', values);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
}

const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
 const basicschema = Yup.object().shape({
    fname : Yup.string().required('Field is Required'),
    lname : Yup.string().required('Field is Required'),
    email : Yup.string().email('Invalid email Format').required('Field is Required'),
    password: Yup.string().min(8, "Minimum of 8 characters needed").matches(passwordRegExp, "Password must have one upper, lower, number and special character").required('Field is Required'),
    confirmPassword : Yup.string().oneOf([Yup.ref("password")], "Pass word must match").required('Field is Required')
})


function Reg() {
    
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={basicschema}
      onSubmit= {onSubmit}
    >{(formik) => {
        const { errors, touched, isValid, dirty} = formik;
        return (
                <div className='bg-gray-100 flex flex-col sm:top-16 2xl:justify-center'>
                <div className=' p-4 w-8'>
                    <Link to="/">< FaArrowLeft /></Link>
                </div>


                <div className='bg-gray-100 flex flex-col justify-center'>
                        <Form className="max-w-[800px] w-full mx-auto p-4">
                            <h2 className='text-4xl font-bold text-main py-6'>Sign Up</h2>

                            <div className='flex justify-between py-4'>
                                <p className='px-6 py-4 gap-4 border shadow-lg hover:shadow-xl flex items-center hover:cursor'><FcGoogle /> Google</p>
                                <p className='px-6 py-4 gap-4 border shadow-lg hover:shadow-xl flex items-center hover:cursor'><AiFillFacebook /> Faceebook</p>
                            </div>

                            
                            <div className="flex flex-col py-2">
                                <Field
                                type="text"
                                name="fname"
                                id="fname"
                                label="First Name"
                                as={TextField}
                                color="warning"
                                className={errors.fname && touched.fname ? 
                                "input-error" : null}
                                />
                                <ErrorMessage name="fname" component="span" className="error" />
                            </div>
                            
                            <div className="flex flex-col py-2">
                                <Field
                                type="text"
                                name="lname"
                                id="lname"
                                label="Last Name"
                                as={TextField}
                                color="warning"
                                className={errors.lname && touched.lname ? 
                                "input-error" : null}
                                />
                                <ErrorMessage name="lname" component="span" className="error" />
                            </div>


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
                                <ErrorMessage name="email" component="span" className="error" />
                            </div>
                            
                            <div className="flex flex-col py-2">
                                <Field
                                type="password"
                                name="password"
                                id="password"
                                label="Password"
                                as={TextField}
                                color="warning"
                                className={errors.password && touched.password ? "input-error" : null}
                                />
                                <ErrorMessage name="password" component="span" className="error" />
                            </div>
                            
                            <div className="flex flex-col py-2">
                                <Field
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                label="Confirm Password"
                                as={TextField}
                                color="warning"
                                className={errors.confirmPassword && touched.confirmPassword ? 
                                "input-error" : null}
                                />
                                <ErrorMessage name="confirmPassword" component="span" className="error" />
                            </div>

                            <button type="submit" disabled={!(dirty && isValid)} className='w-full text-center bg-sec text-main my-4 rounded-xl py-2 font-semibold border hover:bg-transparent hover:border-bg-sec'>Sign Up</button>
                        
                            <div> 
                                  <p className='text-xl text-center'>Already a member? <Link to="/login"><span className='text-sec'>Sign In Now</span></Link></p>
                            </div>
                        </Form>
                    </div>
                </div>
        );
      }}
    </Formik>
  )
}

export default Reg