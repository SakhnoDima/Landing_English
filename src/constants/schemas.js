import * as Yup from 'yup';

import { emailRegexp, phoneRegExp } from 'constants/constants';

export const SignUpSchema = Yup.object().shape({
  name: Yup.string(),

  phone: Yup.string().matches(phoneRegExp),

  email: Yup.string()
    .email('Invalid email')
    .matches(emailRegexp)
    .required('Required'),

  message: Yup.string(),
});
