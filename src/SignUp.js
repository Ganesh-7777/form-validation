import React,{ useState } from 'react';
import FormInput from './FormInput';
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import swal from 'sweetalert';
import FormRadio from './FormRadio';
import FormSelect from './FormSelect';
import FormCheckBox from './FromCheckBox';

const SignUp = () => {
    const [user,setUser]=useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        age:"",
        sex:"",
        country:"",
        cv:"",
        hobbies:"",
        orgnization:"",
        experience:"",
        password:""
    })

    const handleInput=(e)=>{
       
        setUser({...user,[e.target.name]:e.target.value})
    }
    const validate=Yup.object({
        firstName:Yup.string().min(3).max(25).required(),
        lastName:Yup.string().min(3).max(25).required(),
        email:Yup.string().email().required(),
        phone:Yup.number().min(10).required(),
        age:Yup.number().required(),
        // cv:Yup.required("file is required"),
        orgnization:Yup.string().required(),
        experience:Yup.number().min(1).required(),
        password:Yup.string().min(8).max(16).required(),
        gender: Yup.string().required('Gender is required'),
    })

    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                age:"",
                sex:"",
                country:"",
                cv:"",
                hobbies:"",
                orgnization:"",
                experience:"",
                password:""
            }}

            validationSchema={validate}

            onSubmit={(values,action)=>{
                swal("Great!", "Registration Successful!", "success");
                console.log(values)
                action.resetForm()
               
            }}
        >
            { () =>(
                    <Form>
                    <FormInput value={user.firstName} onChange={handleInput}  label="Firstname :" name="firstName" type="text" />
                    <FormInput value={user.lastName} onChange={handleInput} label="Lastname :" name="lastName" type="text" />
                    <FormInput value={user.email} onChange={handleInput} label="Email :" name="email" type="email" />
                    <FormInput value={user.phone} onChange={handleInput} label="Phone Number :" name="phone" type="number" />
                    <FormInput value={user.age}  onChange={handleInput} label="Age :" name="age" type="number" /><br/>
                    <FormRadio value={user.sex} onChange={handleInput} label="Sex : " name="sex" type="radio"/><br/>
                    <FormSelect value={user.country} onChange={handleInput} label="Country :" name="country" type="select"/><br/>
                    <FormCheckBox value={user.hobbies} onChange={handleInput} label="Hobbies :  " name="hobbies" type="checkBox"/><br/>
                    <FormInput value={user.cv} onChange={handleInput} label="CV :" name="cv" type="file" />
                    <FormInput value={user.orgnization} onChange={handleInput} label="Orgnization :" name="orgnization" type="text" />
                    <FormInput value={user.experience} onChange={handleInput} label="Experience :" name="experience" type="number" />
                    <FormInput value={user.password} onChange={handleInput} label="Password :" name="password" type="password" />
                    <button  type='submit' className='btn :'>Register</button>                    
                    </Form>
             )}
        </Formik>
    )
}
export default SignUp;
