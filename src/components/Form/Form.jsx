import { Formik, Form, Field } from 'formik';

import Button from 'components/Button/Button';
import { instance } from '../../helpers/axios';
import { getLetterData } from '../../helpers/getLetterData';
import { SignUpSchema } from 'constants/schemas';

import { FormWrapper, Heading, InputWrap, StyledForm } from './Form.styled';

const Forma = ({ setSubmitted }) => {
  const handleSubmit = (values, { resetForm }) => {
    instance
      .post('/sendemail', { ...getLetterData(values) })
      .then(() => {
        resetForm();
        setSubmitted();
      })
      .catch(error => {});
  };

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
        email: '',
        message: '',
      }}
      validationSchema={SignUpSchema}
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
              <label htmlFor="name">
                <Field
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter Your name"
                  autoComplete="off"
                />
              </label>
              <label style={{ width: '100%' }} htmlFor="phone">
                <Field
                  id="phone"
                  type="text"
                  name="phone"
                  placeholder="Enter Your phone"
                  autoComplete="off"
                />
              </label>
              <label htmlFor="email">
                <Field
                  id="email"
                  type="text"
                  name="email"
                  placeholder="Enter Your email address"
                  autoComplete="off"
                  required
                />
                <span>*</span>
              </label>

              <label htmlFor="message">
                <Field
                  id="message"
                  as="textarea"
                  name="message"
                  placeholder="Enter Your message"
                  autoComplete="off"
                  cols="30"
                  rows="10"
                />
              </label>
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
