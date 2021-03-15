import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    Radio,
    Button,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel
} from '@material-ui/core';
import { useDispatch} from 'react-redux';
import axios from 'axios';
import { Formik } from 'formik';
import MyTextField from './MyTextField';
import MyValidForm from './MyValidForm';
import {ADD_USER} from '../redux/actionTypes'
import './SignUp.css';

const SignUp =() =>{const history = useHistory();

    const handleLoadClick =() => {
        return(
            history.push('/userslist', { from: "signup" })
        )
    } 

    const Dispatch = useDispatch();

        const emailValid =(even) => {

            return console.log('emailValid' , even)
        }


    return (
        <div className='divBody'>
            <Formik className='body'

                initialValues={{ first_name: '', last_name: '', age: '', email: '', gender: '' }}

                onSubmit={(values) => {

                    handleLoadClick()

                    axios.post('https://reqres.in/api/users?page=2', {
                        
                        values
                        
                    })
                        .then(res => {

                            Dispatch({ type: ADD_USER, payload: res.data})
                           
                        }).catch(error => console.log('error here', error))

                        emailValid(values.email)

                }}

                validateOnChange={true}
                validationSchema={MyValidForm}

            >
                {({ /* values, */ handleChange, handleSubmit, /* errors, */ dirty, isValid }) => (
                    <form className='textField' onSubmit={handleSubmit}>
                        <h1>Sign Up</h1>
                        <MyTextField
                            required
                            name='first_name'
                            type='text'
                            id="standard-basic"
                            label="first name"
                        />
                        <MyTextField
                            required
                            name='last_name'
                            type='text'
                            id="standard-basic"
                            label="last name"
                        />
                        <MyTextField
                            required
                            name='age'
                            type='number'
                            id="standard-basic"
                            label="Age"
                        />
                        <MyTextField
                            required
                            name='email'
                            type='email'
                            id="standard-basic"
                            label="Email"
                            // onChange={() => emailValid(values)}
                        />
                        <FormControl component="fieldset">
                            <FormLabel component="legend" className='genderFieid'>Gender</FormLabel>
                            <RadioGroup aria-label="gender" name="gender" onChange={handleChange}>
                                <FormControlLabel name='gender' value="male" control={<Radio color="primary" />} label="Male" />
                                <FormControlLabel name='gender' value="female" control={<Radio />} label="Female" />
                            </RadioGroup>
                        </FormControl>
                        <div className='button-style'>
                            <Button disabled={!dirty || !isValid} type='submit' variant="contained" color="primary">
                                Submit
                            </Button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
}
export default SignUp