import styled, { css } from 'styled-components';

export const FormWrapper = styled.div`
  margin: 0 auto;
`;

export const Heading = styled.div`
  color: #1d1e1f;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.37;
  margin-bottom: 24px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 16px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 16px;
  width: 295px;

  input[name='clientEmail'] {
    ${({ $error }) =>
      $error === 'true' &&
      css`
        background: rgba(255, 212, 212, 0.4);
        border: 1px solid #b83927;
      `};
    &:focus {
      ~ span {
        color: transparent;
      }
    }
  }

  span {
    position: absolute;
    top: 140px;
    right: 105px;
    color: #ff2b55;

    @media screen and (min-width: 768px) {
      right: 164px;
    }

    @media screen and (min-width: 1440px) {
      top: 152px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 353px;
  }

  @media screen and (min-width: 1440px) {
    gap: 0px;
    input:nth-child(1) {
      margin-bottom: 24px;
    }

    input:nth-child(2) {
      margin-bottom: 19px;
    }

    input:nth-child(3) {
      margin-bottom: 14px;
    }
  }

  input,
  textarea {
    height: 48px;
    padding: 10px 16px;
    border-radius: 8px;
    border: 1px solid #07085b;
    background: rgba(255, 255, 255, 0.4);
  }
  input::placeholder,
  textarea::placeholder {
    color: #676767;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.87;
  }

  input:focus::placeholder,
  textarea:focus::placeholder {
    color: transparent;
  }

  textarea {
    resize: none;
    height: 118px;
  }
`;
