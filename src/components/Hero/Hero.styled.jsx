import styled from 'styled-components';
import { motion } from 'framer-motion';

const Hero = styled(motion.section)`
  padding: 38px 16px 60px;
  .hero__title {
    font-family: 'Anek Bangla';
    font-size: 32px;
    font-weight: 600;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: left;
  }
  .hero__desc {
    margin-top: 16px;
    font-family: 'Anek Bangla';
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export const HeroDescription = styled.p`
  font-family: 'Anek Bangla';
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  span {
    font-weight: 500;
  }
`;
export const DescWrapper = styled.div``;
export const ReadMoreBtn = styled.button`
  background: transparent;
  border: none;
  text-decoration: underline;
  color: #466eb6;
  padding-inline: 0;
  font-family: 'Anek Bangla';
  font-size: 14px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
`;

export const HeroSection = ({ children }) => {
  return (
    <Hero initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
      {children}
    </Hero>
  );
};
