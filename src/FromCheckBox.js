import React from 'react'
import { ErrorMessage, useField } from 'formik';

const FormCheckBox = ({ label, ...props }) => {
    const [field, SetField] = useField(props)

    return (
        <div className='form_container'>
            <div className='checkbox'>
                <label className='label' htmlFor={field.name}>{label}</label>
               <span><input type="checkBox" name="sex" /> Cricket  </span>
              <span><input type="checkBox" name="sex" /> Football  </span>
              <span><input type="checkBox" name="sex" /> Hocky  </span>
               
               

                <ErrorMessage component="div" name={field.name} className='error' />
            </div>
        </div>
    )
}

export default FormCheckBox
