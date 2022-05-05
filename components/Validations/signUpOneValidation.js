import * as yup from 'yup';

export const userForm = yup.object().shape({
  name: yup.string().required(),
  lastname: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(10).required()

})