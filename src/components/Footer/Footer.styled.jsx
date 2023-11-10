import styled from 'styled-components';
import { motion } from 'framer-motion';

import { animationSettings, breakpoints } from 'constants/constants';

export const StyledFooter = styled.footer`
  background-color: var(--background-white);
  scroll-margin-block-end: 0px;
`;

const WrapperStyles = styled(motion.div)`
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${breakpoints.tab}px) {
    padding: 40px 0;
    flex-direction: initial;
    justify-content: space-between;
  }
  @media screen and (min-width: ${breakpoints.desk}px) {
    width: 894px;
    padding: 60px 0;
    margin: 0 auto;
  }
`;

export const Wrapper = ({ children }) => (
  <WrapperStyles {...animationSettings}>{children}</WrapperStyles>
);

export const TitleStyled = styled.h3`
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  margin-bottom: 24px;
  text-align: center;

  @media screen and (min-width: ${breakpoints.tab}px) {
    font-size: 24px;
    font-weight: 600;
    text-align: left;
    margin-bottom: 32px;
  }
  @media screen and (min-width: ${breakpoints.desk}px) {
    font-size: 32px;
  }
`;

export const NameStyled = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 16px;
  text-align: center;

  @media screen and (min-width: ${breakpoints.tab}px) {
    font-size: 18px;
    font-weight: 500;
    text-align: left;
    margin-bottom: 24px;
  }
  @media screen and (min-width: ${breakpoints.desk}px) {
    font-size: 20px;
    line-height: 32px;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: ${breakpoints.tab}px) {
    align-items: flex-start;
  }
`;

export const StyledLink = styled.a`
  color: #1d1e1f;
  display: flex;
  gap: 4px;
  align-items: center;
  text-decoration: underline;
  &:hover {
    color: var(--text-blue);
  }
  &:hover svg {
    stroke: var(--text-blue);
  }
  svg {
    stroke: #1d1e1f;
  }
`;

export const StyledSpan = styled.span`
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media screen and (min-width: ${breakpoints.tab}px) {
    font-weight: 500;
  }
  @media screen and (min-width: ${breakpoints.desk}px) {
    font-size: 16px;
  }
`;

export const StyledFoto = styled.img`
  margin: 24px auto 0;
  @media screen and (min-width: ${breakpoints.tab}px) {
    margin: 0;
  }
  @media screen and (min-width: ${breakpoints.desk}px) {
    width: 285px;
  }
`;
