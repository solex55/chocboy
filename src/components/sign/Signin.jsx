import React from 'react'
/* import regpic from '../../assets/sign.png';
 */import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useFormik} from 'formik'
import * as Yup from 'yup'
import './signin.css'
import {  FaArrowLeft } from "react-icons/fa";

const initialValues = {
    email : '',
    password : ''
}

const onSubmit= async (values, actions) => {
    console.log('form data', values);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
}

const validationSchema = Yup.object({
    email : Yup.string().email('Invalid email Format').required('Field is Required'),
    password: Yup.string().min(8).required('Field is Required')
})

function Signin() {
const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
})
    return (
        <div className='bg-gray-100 flex flex-col justify-center'>
        <div className='p-4 w-8'>
            <Link to="/">< FaArrowLeft /></Link>
        </div>

        <div className='bg-gray-100 flex flex-col justify-center'>
        
            <form className="max-w-[800px] w-full mx-auto p-4" onSubmit={formik.handleSubmit}>
                <h2 className='text-4xl font-bold text-main py-6'>Welcome Back!</h2>

                <div className='flex justify-between'>
                    <p className='px-6 py-4 gap-4 border shadow-lg hover:shadow-xl flex items-center hover:cursor'><FcGoogle /> Google</p>
                    <p className='px-6 py-4 gap-4 border shadow-lg hover:shadow-xl flex items-center hover:cursor'><AiFillFacebook /> Faceebook</p>
                </div>

                <div className='flex flex-col py-2'>
                    <input type="email" name="email" {... formik.getFieldProps('email')}  placeholder='Email' className='border-4 border-b-black-300 p-2' />
                    {formik.touched.email && formik.errors.email ? (<div className='error'>{formik.errors.email}</div>):null}
                </div>
                <div className='flex flex-col py-2'>
                    <input type="password" name="password" {... formik.getFieldProps('password')}  placeholder='Password' className='border-4 border-b-black-300 p-2'/>
                    {formik.touched.password && formik.errors.password ? (<div className='error'>{formik.errors.password}</div>):null}
                </div>

                <button type='submit' className='w-full text-center bg-sec text-main my-4 rounded-xl py-2 font-semibold border hover:bg-transparent hover:border-bg-sec'>Sign In</button>
                
                <div className='mb-12'>
                    <Link to="/forgotpassword">
                        <p className='text-sec text-xl text-center'>Forgot Password</p>
                    </Link>
                </div>

                <div>
                   
                        <p className='text-xl text-center'>Not a member?  <Link to="/register"><span className='text-sec'>Sign Up Now</span></Link></p>
                    
                </div>
            </form>
        </div>
     </div>
   )
}

export default Signin