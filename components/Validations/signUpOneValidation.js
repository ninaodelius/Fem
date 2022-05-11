import * as yup from 'yup';

export const userSchema = yup.object().shape({
  name: yup.string().min(2).required(),
  lastname: yup.string().min(2).required(),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(10).required()

})