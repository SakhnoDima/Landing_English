import { motion } from 'framer-motion';
import styled from 'styled-components';

import { defaultAnimation } from '../../constants/constants';

const TextStyle = styled(motion.p)`
  position: relative;
  background: var(--background-color-white);
  border: 1px solid var(--black);
  border-radius: 30px;
  width: 343px;
  height: 255px;
  padding: 11px 29px;
  font-size: 16px;
  line-height: normal;
  margin-bottom: 50px;

  &:after {
    content: '';
    position: absolute;
    left: 22.5px;
    top: 99%;
    border-width: 10px;
    border-style: solid;
    border-color: var(--background-color-white) transparent transparent
      var(--background-color-white);
  }

  &:before {
    content: '';
    position: absolute;
    left: 21.5px;
    top: 100%;
    border-width: 10px;
    border-style: solid;
    border-color: var(--black) transparent transparent var(--black);
  }

  @media (min-width: 768px) {
    width: 422px;
    height: 223px;
    padding: 11px 20px 8px 36px;
    font-size: 18px;
    margin-bottom: 38px;

    &:after {
      left: 22px;
      top: 99%;
    }

    &:before {
      left: 21.5px;
      top: 100%;
    }
  }

  @media (min-width: 1440px) {
    width: 660px;
    height: 208px;
    padding: 8px 56px;
    font-size: 20px;
    margin-bottom: 54px;
    font-size: 20px;
    line-height: 1.6;

    &:after {
      left: 22px;
      top: 99%;
    }

    &:before {
      left: 21.5px;
      top: 100%;
    }
  }
`;

export const Text = ({ children }) => {
  return (
    <TextStyle
      variants={defaultAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {children}
    </TextStyle>
  );
};

export const TextSpan = styled.span`
  display: block;
  @media (min-width: 768px) {
    display: inline;
  }
`;

export const TextSpanSecondary = styled.span`
  display: block;
`;

const ButtonStyles = styled(motion.button)`
  position: relative;
  background: var(--orange-primary);
  border: 1px solid var(--orange-primary);
  border-radius: 60px;
  width: 253px;
  height: 42px;
  padding: 5px 74px;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.33;
  left: 90px;
  cursor: pointer;
  color: var(--background-color-white);
  margin-bottom: 18px;

  &:hover,
  &:focus {
    color: var(--orange-primary);
    background: var(--background-color-white);
  }

  &:active {
    color: var(--orange-primary);
    background: var(--passed);
  }

  &:after {
    content: '';
    position: absolute;
    right: 19px;
    top: 99%;
    border-width: 10px;
    border-style: solid;
    border-color: var(--orange-primary) transparent transparent
      var(--orange-primary);
    transform: scaleX(-1);
  }

  &:hover:after,
  &:focus:after {
    border-color: var(--background-color-white) transparent transparent
      var(--background-color-white);
  }

  &:active:after {
    border-color: var(--passed) transparent transparent var(--passed);
  }

  &:before {
    content: '';
    position: absolute;
    right: 18px;
    top: 100%;
    border-width: 11px;
    border-style: solid;
    border-color: var(--orange-primary) transparent transparent
      var(--orange-primary);
    transform: scaleX(-1);
  }

  &:hover:before,
  &:focus:before,
  &:active:before {
    border-color: var(--orange-primary) transparent transparent
      var(--orange-primary);
  }

  @media (min-width: 768px) {
    width: 216px;
    height: 37px;
    padding: 0px 66px;
    left: 470px;
    font-size: 20px;
    line-height: normal;
    margin-bottom: 37px;

    &:after {
      right: 16px;
      top: 98.9%;
    }

    &:before {
      right: 15px;
      top: 100%;
      border-width: 11px;
    }
  }

  @media (min-width: 1440px) {
    width: 253px;
    height: 42px;
    padding: 0px 84px;
    left: 930px;
    margin-bottom: 78px;

    &:after {
      right: 15.5px;
      top: 98%;
    }

    &:before {
      right: 15px;
      top: 100%;
    }
  }
`;

export const Button = ({ children }) => (
  <ButtonStyles
    variants={defaultAnimation}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
  >
    {children}
  </ButtonStyles>
);
