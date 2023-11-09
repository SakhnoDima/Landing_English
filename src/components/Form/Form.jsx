import { useState } from 'react';
import axios from 'axios';
import { FormWrapper, Heading, InputWrap, StyledForm } from './Form.styled';
import Button from 'components/Button/Button';

export const instance = axios.create({
  baseURL: 'https://landing-english.onrender.com/api',
});

const Form = () => {
  const [clientInfo, setClientInfo] = useState({
    clientName: '',
    clientPhone: '',
    clientEmail: '',
    message: '',
  });
  const [emailError, setEmailError] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;

    setClientInfo(prevInfo => ({
      ...prevInfo,
      [name]: value,
    }));
    console.log(clientInfo);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const client = {
      name: clientInfo.clientName,
      email: clientInfo.clientEmail,
      phone: clientInfo.clientPhone,
      message: clientInfo.message,
    };

    const emailRegexp = /^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\.\w{2,3})+$/;

    if (!emailRegexp.test(clientInfo.clientEmail)) {
      console.log('clgerr');
      setEmailError(true);
      return;
    }

    instance
      .post('/sendemail', client)
      .then(response => {
        console.log('Form data sent:', response.data);
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });

    console.log(client);
  };
  return (
    <FormWrapper>
      <Heading>How can I help you to improve your English?</Heading>
      <StyledForm onSubmit={handleSubmit} action="/sendemail" method="POST">
        <InputWrap>
          <input
            type="text"
            name="clientName"
            value={clientInfo.clientName}
            placeholder="Enter Your name"
            onChange={handleChange}
            autoComplete="off"
          />
          <input
            type="text"
            name="clientPhone"
            placeholder="Enter Your phone"
            onChange={handleChange}
            autoComplete="off"
          />
          <input
            type="text"
            name="clientEmail"
            placeholder="Enter Your email address"
            onChange={handleChange}
            style={{
              background: emailError
                ? 'rgba(255, 212, 212, 0.40)'
                : 'rgba(255, 255, 255, 0.4)',
              border: emailError ? '1px solid #B83927' : '1px solid #07085b',
            }}
            emailerror={emailError.toString()}
            autoComplete="off"
            required
          />
          {/* <span>*</span> */}
          <textarea
            name="message"
            placeholder="Enter Your message"
            cols="30"
            rows="10"
            onChange={handleChange}
            autoComplete="off"
          ></textarea>
        </InputWrap>
        <Button $type={'secondary'} $size={'form'}>
          Send
        </Button>
      </StyledForm>
    </FormWrapper>
  );
};

export default Form;
