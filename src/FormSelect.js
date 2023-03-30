import React from 'react'
import {ErrorMessage,useField,Field} from 'formik'

const FormSelect = ({label,...props}) => {
  const [field,meta]=useField(props)

  const options = [
    { value: 'option1', label: 'India' },
    { value: 'option2', label: 'USA' },
    { value: 'option3', label: 'China' },
    { value: 'option4', label: 'Pak' },
  ];
  
  return (
    <div className='form_container'>
            <div>
              {/* <label className='label' htmlFor={field.name}>{label}</label>  */}
               {/* <input 
              className={`input ${meta.touched && meta.error && 'is-invalid'}`}
                {...field} {...props}
                autoComplete="off"
              />Male */}           

            <label className='label' htmlFor="country">{label}</label>
            <Field name="country" as="select">
              <option value="" style={{padding:'50px'}}>Select an option</option>
              {options.map(({ value, label }) => (
                <option  key={value} value={value}>
                  {label}
                </option>
              ))}
            </Field> 
            {/* {errors.selectOption && touched.selectOption && (
              <div>{errors.selectOption}</div>
            )} */}
              
              {/* <ErrorMessage component="div" name={field.name} className='error'/> */}
            </div>
    </div>
  )
}

export default FormSelect;
