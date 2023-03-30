import React from 'react'
import {ErrorMessage,useField} from 'formik'

const FormInput = ({label,...props}) => {
  const [field,meta]=useField(props)

  return (
    <div className='form_container'>
            <div>
              <label className='label' htmlFor={field.name}>{label}</label>
              <input 
              className={`input ${meta.touched && meta.error && 'is-invalid'}`}
                {...field} {...props}
                autoComplete="off"
              />
              <ErrorMessage component="div" name={field.name} className='error'/>
            </div>
    </div>
  )
}

export default FormInput
