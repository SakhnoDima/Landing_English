import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { FormWrapper, Heading, InputWrap, StyledForm } from './Form.styled';
import Button from 'components/Button/Button';

export const instance = axios.create({
  baseURL: 'https://landing-english.onrender.com/api',
});

const Forma = () => {
  const emailRegexp = /^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\.\w{2,3})+$/;

  const validate = values => {
    const errors = {};

    if (!emailRegexp.test(values.clientEmail)) {
      errors.clientEmail = 'Invalid email';
    }

    return errors;
  };

  const handleSubmit = values => {
    const client = {
      name: values.clientName,
      email: values.clientEmail,
      phone: values.clientPhone,
      message: values.message,
    };

    instance
      .post('/sendemail', client)
      .then(response => {
        console.log('Form data sent:', response.data);
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });
  };

  return (
    <Formik
      initialValues={{
        clientName: '',
        clientPhone: '',
        clientEmail: '',
        message: '',
      }}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <FormWrapper>
          <Heading>
            How can I help you <br /> to improve your English?
          </Heading>
          <StyledForm as={Form}>
            <InputWrap
              $error={
                errors.clientEmail && touched.clientEmail ? 'true' : 'false'
              }
            >
              <Field
                type="text"
                name="clientName"
                placeholder="Enter Your name"
                autoComplete="off"
              />
              <Field
                type="text"
                name="clientPhone"
                placeholder="Enter Your phone"
                autoComplete="off"
              />
              <Field
                type="text"
                name="clientEmail"
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
