import React from 'react'
import { TextField } from '@material-ui/core';
import { useField } from 'formik';

const MyTextField =({ id , label , type , required , ...props}) =>{
    const [field , meta] =useField(props)
    const errorText = meta.error && meta.touched? meta.error : ''
    return(
        <TextField 
        required={required}
        type={type}
        id={id}
        label={label}
        {...field}
        helperText={errorText}
        error={!!errorText}
        />
    )
}

export default MyTextField;