import React, {useState} from 'react'
import regpic from '../../assets/sign.png';
import { Link } from 'react-router-dom'
import * as Yup from 'yup'
import './signin.css'
import {  FaArrowLeft } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField } from "@mui/material";
import Modal from './Modal'

const initialValues = {
    password : '',
    confirmPassword : ''
}

const onSubmit= async (values, actions) => {
    console.log('form data', values);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
}

const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
 const basicschema = Yup.object().shape({
    password: Yup.string().min(8, "Minimum of 8 characters needed").matches(passwordRegExp, "Password must have one upper, lower, number and special character").required('Field is Required'),
    confirmPassword : Yup.string().oneOf([Yup.ref("password")], "Password must match").required('Field is Required')
})
function Reset() {
    const [openModal, setOpenModal] = useState(false)

    const toggleModal =()=>{
        setOpenModal(!openModal)
    }

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
                <div className='bg-gray-100 flex  flex-col justify-center sm:top-16 2xl:justify-center'>
                <div className=' p-4 w-8'>
                    <Link to="/login">< FaArrowLeft /></Link>
                </div>


                <div className='bg-gray-100 flex flex-col justify-center'>
                        <Form className="max-w-[800px] w-full mx-auto p-4">
                            <h2 className='text-2xl sm:text-4xl font-bold text-main py-6'>Reset Password</h2>

                            <div className="flex flex-col py-2">
                                <Field
                                type="password"
                                name="password"
                                id="password"
                                label="New Password"
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
                                label="New Confirm Password"
                                as={TextField}
                                color="warning"
                                className={errors.confirmPassword && touched.confirmPassword ? 
                                "input-error" : null}
                                />
                                <ErrorMessage name="confirmPassword" component="span" className="error" />
                            </div>

                            <button type="submit" disabled={!(dirty && isValid)} onClick={toggleModal} className='w-full text-center bg-sec text-main my-4 rounded-xl py-2 font-semibold '>Reset Password</button>
                        
                            
                        </Form>
                    </div>
                </div>
        );
      }}
    </Formik>
    <Modal open={openModal} onClose={toggleModal}/>
    </div>
  )
}

export default Reset