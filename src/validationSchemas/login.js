import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('Email is required'),

  password: yup
    .string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Password is required'),
});