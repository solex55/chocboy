import * as Yup from 'yup'

const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
 const Basicschema = Yup.object().shape({
    fname : Yup.string().required('Field is Required'),
    lname : Yup.string().required('Field is Required'),
    email : Yup.string().email('Invalid email Format').required('Field is Required'),
    password: Yup.string().min(8, "Minimum of 8 characters needed").matches(passwordRegExp, "Password must have one upper, lower, number and special character").required('Field is Required')
})

export default Basicschema