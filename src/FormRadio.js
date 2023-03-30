import './App.css';
import React from 'react'
import {ErrorMessage,useField} from 'formik'

const genders = ['Male', 'Female', 'Other'];
const FormRadio = ({label,...props}) => {
  const [field,meta]=useField(props)

  return (
    <div className='form_container'>
            <div>
              <label className='label' htmlFor={field.name}>{label}</label> 
               {/* <input 
              className={`input ${meta.touched && meta.error && 'is-invalid'}`}
                {...field} {...props}
                autoComplete="off"
              />Male */}

{/* {genders.map((option) => (
        // <label key={option}>
        //   <Field type="radio" name="gender" value={option} {...props} />
        //   {option}
        // </label>

        <input 
              className={`input ${meta.touched && meta.error && 'is-invalid'}`}
                {...field} {...props}
                autoComplete="off"
              />
      ))} */}

      <input style={{margin:'5px'}} type="radio" name="sex"/>Male
      <input style={{margin:'5px'}} className='radioValue' type="radio" name="sex"/>Female
      <input style={{margin:'5px'}} className='radioValue' type="radio" name="sex"/> Other
              
              <ErrorMessage component="div" name={field.name} className='error'/>
            </div>
    </div>
  )
}

export default FormRadio
