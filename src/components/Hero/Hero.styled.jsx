import styled from 'styled-components';
import { motion } from 'framer-motion';

import heroBgMob_1 from '../../images/hero/bg_mb@1x.png';
import heroBgMob_2 from '../../images/hero/bg_mb@2x.png';
import heroBgTab_1 from '../../images/hero/bg_ds@1x.png';
import heroBgTab_2 from '../../images/hero/bg_ds@2x.png';
import heroBgDes_1 from '../../images/hero/bg_ds@1x.png';
import heroBgDes_2 from '../../images/hero/bg_ds@2x.png';

const Hero = styled(motion.section)`
  position: relative;
  padding: 38px 0 60px;
  margin-top: 112px;
  scroll-margin-top: 112px;
  background: url(${heroBgMob_1});
  background-repeat: no-repeat;
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

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background: url(${heroBgMob_2});
  }

  @media screen and (min-width: 768px) {
    padding: 53px 0 80px;
    margin-right: -40px;
    margin-top: 93px;
    background: url(${heroBgTab_1});
    .hero__title {
      line-height: 45px;
    }
    .hero__desc {
      margin-top: 8px;
      font-size: 16px;
    }
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: url(${heroBgTab_2});
    }
  }

  @media screen and (min-width: 1440px) {
    padding: 120px 0px;
    margin-right: 0px;
    margin-top: 125px;
    background: url(${heroBgDes_1});
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
    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: url(${heroBgDes_2});
    }
  }
`;

export const HeroDescription = styled.p`
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0em;
  line-height: normal;
  text-align: left;
  position: absolute;
  z-index: 1;
  background-color: var(--white);
  span {
    font-weight: 500;
  }
  @media screen and (min-width: 768px) {
    line-height: 24px;
    font-size: 14px;
    position: relative;
    background-color: inherit;
    z-index: 1;
  }

  @media screen and (min-width: 768px) and (max-width: 1339.9px) {
    max-width: 429px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 16px;
    line-height: normal;
  }
`;

const DescWrapperStyles = styled(motion.div)`
  position: relative;
  margin-bottom: ${({ $isOpen }) => ($isOpen ? '100px' : '0')};
  @media screen and (min-width: 768px) {
    max-width: ${({ $isOpen }) => ($isOpen ? '450px' : 'auto')};
    margin-bottom: ${({ $isOpen }) => ($isOpen ? '52px' : '165px')};
  }
`;

export const DescWrapper = ({ children, $isOpen }) => {
  return <DescWrapperStyles $isOpen={$isOpen}>{children}</DescWrapperStyles>;
};

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

export const CloseTextBtn = styled.button`
  position: absolute;
  right: 0;
  bottom: -415px;
  display: flex;
  align-items: center;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 20px;
  font-weight: 500;
  line-height: 37px;
  letter-spacing: 0em;
  text-align: left;
  color: #466eb6;
  z-index: 1;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const HeroSection = ({ children }) => {
  return (
    <Hero
      id="hero"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.7, delay: 2.4 } }}
    >
      {children}
    </Hero>
  );
};
