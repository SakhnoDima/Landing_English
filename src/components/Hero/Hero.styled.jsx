import styled from 'styled-components';
import { motion } from 'framer-motion';

import heroBg from '../../images/hero_bg.png';

const Hero = styled(motion.section)`
  position: relative;
  padding: 38px 16px 60px;
  background: no-repeat url(${heroBg});
  background-size: cover;
  .hero__title {
    font-size: 32px;
    font-weight: 600;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: left;
  }

  .hero__desc {
    margin-top: 16px;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
  }

  @media screen and (min-width: 768px) {
    padding: 53px 0 80px 40px;
    .hero__title {
      line-height: 45px;
    }
    .hero__desc {
      margin-top: 8px;
      font-size: 16px;
    }
  }

  @media screen and (min-width: 1440px) {
    padding: 120px 40px 120px 120px;
    .hero__title {
      font-size: 40px;
      font-weight: 500;
      line-height: 48px;
    }
    .hero__desc {
      margin-top: 16px;
      font-size: 18px;
      line-height: 34px;
    }
  }
`;

export const HeroDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  span {
    font-weight: 500;
  }
`;
export const DescWrapper = styled.div`
  @media screen and (min-width: 768px) {
    max-width: ${({ $isOpen }) => ($isOpen ? '450px' : 'auto')};
    margin-bottom: ${({ $isOpen }) => ($isOpen ? '30px' : '146px')};
  }
`;
export const ReadMoreBtn = styled.button`
  background: transparent;
  border: none;
  text-decoration: underline;
  color: #000;
  padding-inline: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  cursor: pointer;

  &:hover {
    color: var(--text-blue);
  }
`;

export const HeroSection = ({ children }) => {
  return (
    <Hero
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.7 } }}
    >
      {children}
    </Hero>
  );
};
