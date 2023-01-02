import React from 'react'
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField } from "@mui/material";
import smiley from '../../assets/smiley.png';
import {FaEdit, FaTrash} from 'react-icons/fa'

const initialValues = {
    fname : '',
    lname : '',
    email : '',
    phone : ''
}

const onSubmit= async (values, actions) => {
    console.log('form data', values);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
}
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
 const basicschema = Yup.object().shape({
    fname : Yup.string().required('Field is Required'),
    lname : Yup.string().required('Field is Required'),
    email : Yup.string().email('Invalid email Format').required('Field is Required'),
    phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Field is Required')
})
function Profiles() {
  return (
    <div className='flex'>
        <div className='w-1/4 mx-auto p-4'>
            <div className='w-full'>
                <img src={smiley} alt="" className='rounded-full shawdow-lg max-w-full sm:h-64 object-contain'/>
            </div>
            <div className='flex gap-8 justify-center items-center'>
                <button><FaEdit size='30px' /></button> 
                <button><FaTrash size='30px' /></button> 
            </div>
        </div>


        <div className='w-full mx-auto p-4'>
        <Formik
            initialValues={initialValues}
            validationSchema={basicschema}
            onSubmit= {onSubmit}
            >{(formik) => {
                const { errors, touched, isValid, dirty} = formik;
                return (
                        <div className=' flex flex-col'>
                        

                        <div className=' flex flex-col justify-center'>
                                <Form className="max-w-[800px] w-full mx-auto p-4">
                                    <h3 className='text-4xl font-bold text-main pb-4'>Personal Information</h3>                                 
                                    
                                   <div className='flex gap-8 pb-8'>
                                        <div className="flex flex-col py-2 w-1/2">
                                            <Field
                                            type="text"
                                            name="fname"
                                            id="fname"
                                            label="Full Name"
                                            as={TextField}
                                            color="warning"
                                            className={errors.fname && touched.fname ? 
                                            "input-error" : null}
                                            />
                                            <ErrorMessage name="fname" component="span" className="error" />
                                        </div>
                                    
                                        <div className="flex flex-col py-2 w-1/2">
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
                                   </div>
                                   
                                   <div className='flex gap-8 pb-20'>
                                        <div className="flex flex-col py-2 w-1/2">
                                        <Field
                                            type="phone"
                                            name="phone"
                                            id="phone"
                                            label="Phone no"
                                            as={TextField}
                                            color="warning"
                                            className={errors.phone && touched.phone ? 
                                            "input-error" : null}
                                            />
                                            <ErrorMessage name="phone" component="span" className="error" />
                                        </div>
                                    
                                        <div className="flex flex-col py-2 w-1/2">
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
                                   </div>
                                    
                                    <div>
                                        <p className='font-bold text-3xl'>Delivery Information</p>
                                        <div className="flex flex-col py-2 w-full pb-8">
                                            <Field
                                            type="text"
                                            name="fname"
                                            id="fname"
                                            label="Residential Address"
                                            as={TextField}
                                            color="warning"
                                            className={errors.fname && touched.fname ? 
                                            "input-error" : null}
                                            />
                                            <ErrorMessage name="fname" component="span" className="error" />
                                        </div>
                                        
                                        <div className="flex flex-col py-2 w-full pb-8">
                                            <Field
                                            type="text"
                                            name="fname"
                                            id="fname"
                                            label="Postal Code"
                                            as={TextField}
                                            color="warning"
                                            className={errors.fname && touched.fname ? 
                                            "input-error" : null}
                                            />
                                            <ErrorMessage name="fname" component="span" className="error" />
                                        </div>
                                    </div>

                                                                       

                                    <button type="submit" style={{float:'right'}} disabled={!(dirty && isValid)} className='w-full sm:w-1/5 text-center bg-main text-sec my-4 rounded-xl py-2 font-semibold border hover:bg-transparent hover:border-bg-sec'>Save</button>
                                
                                    
                                </Form>
                            </div>
                        </div>
                        );
                    }}
            </Formik>
        </div>
    </div>
  )
}

export default Profiles