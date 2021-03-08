import * as yup from 'yup';

const  MyValidForm = yup.object({
    first_name: yup.string()
        .required('required')
        .min(4, 'To Short'),

    last_name: yup.string()
        .required('required')
        .min(4, 'To Short'),

    age: yup.number()
        .required('required')
        .positive('not positive number')
        .integer('number only')
        .moreThan(19, 'Too young')
        .lessThan(50, 'Too Old'),

    email: yup.string()
    .email('Must be a Valid Email')
    .required('required'),

    gender: yup.mixed().required('required').oneOf(['male', 'female'])
})

export default MyValidForm;