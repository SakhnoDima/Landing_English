import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { FormWrapper, Heading, InputWrap, StyledForm } from './Form.styled';
import Button from 'components/Button/Button';

import { instance } from '../../helpers/axios';

const Forma = ({ setSubmitted }) => {
  const emailRegexp = /^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\.\w{2,3})+$/;

  const SignupSchema = Yup.object().shape({
    name: Yup.string(),

    phone: Yup.number('Should be number'),

    email: Yup.string()
      .email('Invalid email')
      .matches(emailRegexp)
      .required('Required'),

    message: Yup.string(),
  });

  const handleSubmit = (values, { resetForm }) => {
    const client = {};

    const inputNames = ['name', 'email', 'phone', 'message'];

    inputNames.forEach(name => {
      if (values[name]) {
        client[name] = values[name];
      }
    });

    instance
      .post('/sendemail', { ...client })
      .then(() => {
        resetForm();
        setSubmitted();
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });
  };

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
        email: '',
        message: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <FormWrapper>
          <Heading>
            How can I help you <br /> to improve your English?
          </Heading>
          <StyledForm as={Form}>
            <InputWrap
              $error={errors.email && touched.email ? 'true' : 'false'}
              $phoneError={errors.phone ? 'true' : 'false'}
            >
              <Field
                type="text"
                name="name"
                placeholder="Enter Your name"
                autoComplete="off"
              />
              <Field
                type="text"
                name="phone"
                placeholder="Enter Your phone"
                autoComplete="off"
              />
              <Field
                type="text"
                name="email"
                placeholder="Enter Your email address"
                autoComplete="off"
                required
              />
              <span>*</span>
              <Field
                as="textarea"
                name="message"
                placeholder="Enter Your message"
                autoComplete="off"
                cols="30"
                rows="10"
              />
            </InputWrap>

            <Button type="button" $type={'secondary'} $size={'form'}>
              Send
            </Button>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default Forma;
