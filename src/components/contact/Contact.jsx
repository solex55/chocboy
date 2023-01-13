import React from 'react'
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField } from "@mui/material";
import smiley from '../../assets/smiley.png';

const initialValues = {
    fname : '',
    lname : '',
    email : ''
}

const onSubmit= async (values, actions) => {
    console.log('form data', values);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
}

 const basicschema = Yup.object().shape({
    fname : Yup.string().required('Field is Required'),
    lname : Yup.string().required('Field is Required'),
    email : Yup.string().email('Invalid email Format').required('Field is Required'),
   })
function Contact() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-full w-full '>
        <div className='h-full w-full mx-auto p-4'>
            <div className='pb-8'>
                <h3 className='text-2xl font-bold text-white py-6 pb-4'>Dont know where to start?</h3>
                <p className='text-lg text-white'>Our amazing customer care officials are always ready to help</p>                    
            </div>

            <div className='flex gap-4 pb-16'>
                <div>
                    <img src={smiley} alt="" className='rounded-full shawdow-lg max-w-full border-none align-middle'/>
                </div>
                <div className='gap-4'>
                    <h4 className='font-bold text-white'>Customer Support</h4>
                    <p>+234 9067939532</p>
                </div>
            </div>
            
            <div className='flex gap-4'>
                <div>
                    <img src={smiley} alt="" className='rounded-full shawdow-lg max-w-full border-none align-middle'/>
                </div>
                <div className='gap-4'>
                    <h4 className='font-bold text-'>Whatsapp Support</h4>
                    <p>+234 9067793927</p>
                </div>
            </div>
        </div>
        
        <div className=' h-full w-full'>
            

            <Formik
            initialValues={initialValues}
            validationSchema={basicschema}
            onSubmit= {onSubmit}
            >{(formik) => {
                const { errors, touched, isValid, dirty} = formik;
                return (
                        <div className=' flex flex-col sm:top-16 2xl:justify-center'>
                        

                        <div className=' flex flex-col justify-center'>
                                <Form className="max-w-[800px] w-full mx-auto p-4">
                                    <h3 className='text-2xl font-bold text-white py-6 pb-4'>Reach out to us!</h3>
                                    <p className='text-lg text-white pb-4'>Got a question about Chocboy? Want to partner with us? Have any suggestions, or just want to say Hi?</p>
                                    
                                    
                                    <div className="flex flex-col py-2">
                                        <Field
                                        type="text"
                                        name="fname"
                                        id="fname"
                                        label="Full Name"
                                        as={TextField}
/*                                         color="warning"
 */                                      variant="outlined"
                                        inputProps={{ style: {color: "white"} }}
                                        sx={{ 
                                            fieldset: {borderColor: "white"}, 
                                            label: {color:"white"}, 
                                            "& .MuiOutlinedInput-root.Mui-focused":{
                                                "& > fieldset": {
                                                    borderColor: "white"
                                                }
                                            }
                                        }}
                                        className={errors.fname && touched.fname ? 
                                        "input-error" : null}
                                        />
                                        <ErrorMessage name="fname" component="span" className="error" />
                                    </div>
                                    
                                    

                                    <div className="flex flex-col py-2">
                                        <Field
                                        type="email"
                                        name="email"
                                        id="email"
                                        label="Email"
                                        as={TextField}
                                        variant="outlined"
                                        inputProps={{ style: {color: "white"} }}
                                        sx={{ 
                                            fieldset: {borderColor: "white"}, 
                                            label: {color:"white"}, 
                                            "& .MuiOutlinedInput-root.Mui-focused":{
                                                "& > fieldset": {
                                                    borderColor: "white"
                                                }
                                            }
                                        }}
                                        className={errors.email && touched.email ? 
                                        "input-error" : null}
                                        />
                                        <ErrorMessage name="email" component="span" className="error" />
                                    </div>
                                    
                                    <div className="flex flex-col py-2">
                                        <Field
                                        type="text"
                                        name="lname"
                                        id="lname"
                                        label="Your Message"
                                        as={TextField}
                                        multiline
                                        rows={6}
                                        variant="outlined"
                                        inputProps={{ style: {color: "white"} }}
                                        sx={{ 
                                            fieldset: {borderColor: "white"}, 
                                            label: {color:"white"}, 
                                            "& .MuiOutlinedInput-root.Mui-focused":{
                                                "& > fieldset": {
                                                    borderColor: "white"
                                                }
                                            }
                                        }}
                                        className={errors.lname && touched.lname ? 
                                        "input-error" : null}
                                        />
                                        <ErrorMessage name="lname" component="span" className="error" />
                                    </div>                                    

                                    <button type="submit" style={{float:'right'}} disabled={!(dirty && isValid)} className='w-full sm:w-1/5 text-center cursor-pointer bg-sec text-main my-4 rounded-xl py-2 font-semibold hover:border hover:bg-transparent hover:text-sec '>Submit</button>
                                
                                    
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

export default Contact