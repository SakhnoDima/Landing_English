import styled, { css } from 'styled-components';

import { animationSettings } from 'constants/constants';
import { motion } from 'framer-motion';

export const StyledWrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 60px;
  width: 343px;

  @media screen and (min-width: 768px) {
    margin-bottom: 55px;
    width: 688px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 40px;
    width: 1200px;
  }
`;

const StyledDivTopStyles = styled(motion.div)`
  padding-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 25px;
  }
`;

export const StyledDivTop = ({ children }) => (
  <StyledDivTopStyles {...animationSettings}>{children}</StyledDivTopStyles>
);

const StyledDivBottomStyles = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
`;

export const StyledDivBottom = ({ children }) => (
  <StyledDivBottomStyles {...animationSettings}>
    {children}
  </StyledDivBottomStyles>
);

export const tailStyles = css`
  content: '';
  position: absolute;
  border-style: solid;
  border-radius: 12px;
  transform-origin: center center;
`;

export const StyledPTop = styled.p`
  position: relative;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.2;
  padding: 17px 22px 10px 28px;
  width: 334px;
  height: 64px;
  border-radius: 30px;
  background: #86b1f2;
  @media screen and (min-width: 768px) {
    width: 334px;
    height: 64px;
  }
  @media screen and (min-width: 1440px) {
    width: 426px;
    height: 80px;
    font-size: 32px;
    padding: 20px 20px 22px 28px;
  }
  &::before {
    ${tailStyles};
    bottom: -7px;
    left: 10px;
    border-width: 0 20px 19px 18px;
    border-color: transparent transparent #86b1f2 transparent;
    transform: rotate(-45deg);
    @media screen and (min-width: 1440px) {
      bottom: -12px;
      border-width: 0 px 22px 22px;
    }
  }
`;

export const StyledPBottom = styled.p`
  position: relative;
  width: 282px;
  height: 98px;
  padding: 17px 37px 15px 36px;
  border-radius: 30px;
  background: #dfebf9;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.37;
  @media screen and (min-width: 768px) {
    width: 423px;
    height: 65px;
    padding: 18px 17px 18px 26px;
  }

  @media screen and (min-width: 1440px) {
    text-align: center;
    width: 573px;
    height: 94px;
    font-size: 32px;
    line-height: 1.2;
    padding: 25px 32px;
  }

  &::before {
    ${tailStyles};
    bottom: -19px;
    right: 20px;
    border-width: 21px 17px 20px 15px;
    border-color: #dfebf9 transparent transparent transparent;
    transform: rotate(100deg);

    @media screen and (min-width: 1440px) {
      border-width: 25px 25px 30px 35px;
    }
  }
`;
